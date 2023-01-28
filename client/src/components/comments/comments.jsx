import React, { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/auth-context";
import {useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import {makeRequest} from '../../axios-instance';
import moment from 'moment';

//Temporary
const comments = [
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
    name: "John Doe",
    userId: 1,
    profilePicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
    name: "Jane Doe",
    userId: 2,
    profilePicture:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const Comments = ({postId}) => {
  const { currentUser } = useContext(AuthContext);
  const [desc, setDesc] = useState("");

  const {isLoading, error, data} = useQuery(["comments"], () => {
    return makeRequest.get("/comments?postId="+postId).then(res => {
      return res.data;
    });
  });

  console.log(data);
  const queryClient = useQueryClient();

  const mutation = useMutation((newComment) => {
    return makeRequest.post("/comments", newComment);
  }, {
    onSuccess:() => {
      queryClient.invalidateQueries(["comments"]);
    }
  })     

  const handleClick = async(e) => {
    e.preventDefault();
    mutation.mutate({desc, postId});
    setDesc("");
  }
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" value={desc} placeholder="write a comment" onChange={e => setDesc(e.target.value)}/>
        <button onClick={handleClick}>Send</button>
      </div>
      {isLoading ? "Loading..." : data?.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc} </p>
          </div>
          <span className="date">{moment(comment.createdAt).fromNow()}</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
