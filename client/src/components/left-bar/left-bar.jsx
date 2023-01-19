import React, { useContext } from "react";
import "./left-bar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/auth-context";

const Items = ({ icon, title }) => {
  return (
    <div className="item">
      <img alt="" src={icon} />
      <span>{title}</span>
    </div>
  );
};

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img alt="" src={currentUser.profilePic} />
            <span>{currentUser.name}</span>
          </div>
          <Items title="Friends" icon={Friends} />
          <Items title="Groups" icon={Groups} />
          <Items title="Marketplace" icon={Market} />
          <Items title="Watch" icon={Watch} />
          <Items title="Memories" icon={Memories} />
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <Items title="Events" icon={Events} />
          <Items title="Gaming" icon={Gaming} />
          <Items title="Gallery" icon={Gallery} />
          <Items title="Videos" icon={Videos} />
          <Items title="Messages" icon={Messages} />
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <Items title="Fundraser" icon={Fund} />
          <Items title="Tutorials" icon={Tutorials} />
          <Items title="Courses" icon={Courses} />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
