import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillFilePlayFill } from "react-icons/bs";

import { Store } from "../contextApi/Store";
import { Post } from "../contextApi/type/Type";

import styles from "../styles/Postcard.module.css";

type Prop = {
  post: Post;
};

const PostCard = (prop: Prop) => {
  const { creator, postId, submission } = prop.post;
  const { dispatch } = useContext(Store);
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const thumbnail = new Image();
  thumbnail.onload = handleImageLoad;
  thumbnail.src = submission.thumbnail;

  return (
    <>
      <Link
        to={`/videoPlayer/:${postId}`}
        onClick={() => dispatch({ type: "GET_VIDEO", payload: postId })}
        className={styles.cardWrapper}
        title="Click to play"
      >
        <div className={styles.imgContainer}>
          {imageLoaded ? (
            <img
              className={styles.image}
              src={submission.thumbnail}
              alt={submission.title}
            />
          ) : (
            <img
              className={styles.image}
              src={submission.placeholderUrl}
              alt="Placeholder"
            />
          )}
        </div>
        <div className={styles.iconContainer}>
          <BsFillFilePlayFill size={30} />
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.userImage}>
            <img src={creator.pic} alt={creator.name} width="200px" />
          </div>
          <div className={styles.userDetails}>
            <h3>{submission.title} </h3>
            <p>{submission.description.slice(0, 40)}...</p>
            <span>{creator.handle}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
