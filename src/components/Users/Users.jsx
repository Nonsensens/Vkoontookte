import React from "react";
import { NavLink } from "react-router-dom";
import  * as axios from "axios";
import { usersAPI } from "../../API/api";

function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className="ban_U">
      <div className="nav_usera">
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && "selectedPage"}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div className="user" key={u.id}>
          <span className="Users">
            <div>
              <NavLink to={"/Profile/" + u.id}>
                <img
                  src={
                    u.photos.small != null
                      ? u.photos.small
                      : "https://vk.com/images/camera_100.png?ava=1"
                  }
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button disabled = {props.followingInProgress.some(id => id == u.id)}
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button disabled = {props.followingInProgress.some(id => id == u.id)}
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
export default Users;
