import React from "react";
import PropTypes from "prop-types";
import { formatTime, formatDate } from "utils";

import { CommentForm } from "./CommentForm";
import styles from "./commentSection.module.scss";

export const CommentsSection = ({ commentsData = [], id = "" }) => {
  return (
    <div>
      {commentsData.length > 0 && <div className={styles.separationLine} />}
      {commentsData && (
        <section className={styles.commentSection}>
          {commentsData.map((comment, index) => (
            <div
              key={`${comment.userName} ${index}`}
              className={styles.commentContainer}
            >
              <div>
                <div className={styles.commentDate}>
                  <div className={styles.commentDateUserName}>
                    {comment.userName}
                  </div>
                  <div>
                    <span>{formatDate(comment.date)}</span>
                    <span className={styles.commentDateTime}>
                      {formatTime(comment.date)}
                    </span>
                  </div>
                </div>
                <div>{comment.comment}</div>
              </div>
            </div>
          ))}
        </section>
      )}
      {commentsData.length > 0 && <div className={styles.separationLine} />}
      <CommentForm id={id} />
    </div>
  );
};

CommentsSection.propTypes = {
  id: PropTypes.string,
  commentsData: PropTypes.array,
};
