import React, { useContext, useState } from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./profile.scss";
import Posts from "../../components/posts/posts";
import { useLocation } from "react-router-dom";
import { makeRequest } from "../../axios-instance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../context/auth-context";
import Update from "../../components/update/update";

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);
  const userId = parseInt(useLocation()?.pathname?.split("/")?.[2]);
  const {currentUser} = useContext(AuthContext);

  const {isLoading, error, data} = useQuery(["user"], () => {
    return makeRequest.get("/users/find/"+userId).then(res => {
      return res.data;
    })
  })

   const {isLoading: rIsLoading, data: relationshipData} = useQuery(["relationships"], () => {
    return makeRequest.get("/relationships?followedUserId="+userId).then(res => {
      return res.data;
    })
  })

  const queryClient = useQueryClient();

  const mutation = useMutation((following) => {
    if(following) return makeRequest.delete("/relationships?userId="+userId);
    return makeRequest.post("/relationships", {userId});
  },{
    onSuccess: () => {
      queryClient.invalidateQueries(["relationship"])
    }
  })

  const handleFollow = () => {
    mutation.mutate(relationshipData?.includes(currentUser?.id));
  }

  return (
    <div className="profile">
      {isLoading ? "loading..." : <><div className="images">
        <img
          src={"/uploads/"+data?.coverPic}
          alt=""
          className="cover"
        />
        <img
          src={"/uploads/"+data?.profilePic}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profile-container">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://piterest.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{data?.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{data?.city}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{data?.website}</span>
              </div>
            </div>
            {rIsLoading ? "Loading..." : userId === currentUser?.id ? <button onClick={() => setOpenModal(true)}>update</button> : <button onClick={handleFollow}>{relationshipData?.includes(currentUser.id) ? "Following" : "Follow"}</button>}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts userId={userId} />
      </div></>}
      {openModal && <Update setOpenModalCb={setOpenModal} user={data}/>}
    </div>
  );
};

export default Profile;
