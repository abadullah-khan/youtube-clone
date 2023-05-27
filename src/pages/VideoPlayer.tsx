import React from "react";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import { Store } from "../contextApi/Store";
import styles from "../styles/VideoPlayer.module.css";

const VideoPlayer = () => {
  const { state } = useContext(Store);

  if (state.video) {
    console.log(state.video?.submission.hyperlink);
  }

  return (
    <>
      <div className={styles.videoPlayerPage}>
        {state.video && (
          <div className={styles.container}>
            <div className={styles.mediaContainer}>
              <video src={state.video?.submission.mediaUrl} controls />
            </div>
            <div className={styles.detailsWrapper}>
              <h2> {state.video?.submission.title}</h2>
              <div>
                <p>
                  Voted :{" "}
                  <span>{state.video?.reaction.voted ? "True" : "False"}</span>
                </p>
                <p>
                  Total votes : <span> {state.video?.reaction.count}</span>
                </p>
              </div>
              <div>
                <p>
                  Comments : <span>{state.video?.comment.count}</span>
                </p>
                <p>
                  Commenting :{" "}
                  <span>
                    {state.video?.comment.commentingAllowed ? "True" : "False"}
                  </span>
                </p>
              </div>
              <p>
                {" "}
                Summary : <span>{state.video?.submission.description}</span>
              </p>

              <div className={styles.channelDetailsWrapper}>
                <div className={styles.imgContainer}>
                  <img
                    src={state.video?.creator.pic}
                    alt={state.video?.creator.name}
                  />
                </div>
                <div className={styles.channelDetails}>
                  <p>
                    Creator by : <span>{state.video?.creator.name}</span>
                  </p>
                  <p>
                    handled by : <span>{state.video?.creator.handle}</span>
                  </p>
                  <p>
                    Created on :{" "}
                    <Link
                      to={state.video?.submission.hyperlink}
                      target="_blank"
                    >
                      {state.video?.submission.hyperlink}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <button title="Click to go back">
          <Link to={"/"}>
            <AiOutlineRollback />
            Go Back
          </Link>
        </button>
      </div>
    </>
  );
};

export default VideoPlayer;
