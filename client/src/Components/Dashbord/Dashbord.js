import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../JS/actions/user";
import { Route, Switch, useHistory } from "react-router-dom";
import PostList from "../../Components/PostList";
import Add from "../../Components/Add";

import Post from "../Post";
import NavBar from "../NavBar/NavBar";

const Dashbord = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const posts = useSelector((state) => state.postReducer.posts);
  const loadPosts = useSelector((state) => state.postReducer.loadPosts);
  console.log(posts, loadPosts);

  return (
    <div>
      <NavBar />
      <button
        onClick={() => {
          dispatch(logout());
          history.push("/");
        }}
      >
        Logout
      </button>
      <div>
        <Switch>
          <Route
            exact
            path="/Dashbord"
            component={PostList}
            render={() => <PostList posts={posts} />}
          />

          <Route path="/Dashbord/add" component={Add} />
        </Switch>
      </div>
      <div> </div>
    </div>
  );
};

export default Dashbord;
