import React from "react";
import "./right-bar.scss";

const User = ({
  url,
  name,
  subTitle = "",
  showButtons = false,
  time = "",
  showOnline = false,
}) => {
  return (
    <div className="user">
      <div className="userInfo">
        <img src={url} alt="" />
        {showOnline ? <div className="online"></div> : null}
        <p>
          <span>{name}</span> {subTitle ? subTitle : null}
        </p>
      </div>
      {showButtons ? (
        <div className="buttons">
          <button>follow</button>
          <button>dismiss</button>
        </div>
      ) : null}
      {time ? <span>{time}</span> : null}
    </div>
  );
};

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            showButtons={true}
          />
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            showButtons={true}
          />
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            subTitle={"changed their cover picture"}
            time={"1 min ago"}
          />
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            subTitle={"changed their cover picture"}
            time={"1 min ago"}
          />
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            subTitle={"changed their cover picture"}
            time={"1 min ago"}
          />
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            subTitle={"changed their cover picture"}
            time={"1 min ago"}
          />
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            subTitle={"changed their cover picture"}
            time={"1 min ago"}
          />
        </div>
        <div className="item">
          <span>Online Friends</span>
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            showOnline={true}
          />
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            showOnline={true}
          />
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            showOnline={true}
          />
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            showOnline={true}
          />
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            showOnline={true}
          />
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            showOnline={true}
          />
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            showOnline={true}
          />
          <User
            url={
              "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            name={"John Doe"}
            showOnline={true}
          />
        </div>
      </div>
    </div>
  );
};

export default RightBar;
