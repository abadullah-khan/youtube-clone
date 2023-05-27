import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PostCard from "../component/PostCard";
import { Store } from "../contextApi/Store";

import styles from "../styles/Home.module.css";

function Home() {
  const { state, dispatch, fetchApi } = useContext(Store);

  const { ref, inView } = useInView({
    rootMargin: "50px",
  });

  useEffect(() => {
    fetchApi(state.currentPage);
  }, [state.currentPage]);

  useEffect(() => {
    if (inView) {
      dispatch({ type: "INCREMENT_PAGE" });
    }
  }, [inView]);

  const { loading, posts, error } = state;

  if (loading) {
    return <div style={{ fontSize: "2rem" }}>Loading...</div>;
  } else if (error) {
    return <div style={{ fontSize: "2rem" }}>Error : {error}</div>;
  } else {
    console.log(posts);
    return (
      <>
        <div className={styles.homePage}>
          {posts.map((post) => (
            <PostCard key={post.postId} post={post} />
          ))}
        </div>

        <div ref={ref}></div>
      </>
    );
  }
}

export default Home;
