import React, { useContext } from "react";
import PropTypes from "prop-types";

import { UserContext } from "features/context";
import { useAPI } from "features/context";
import { useForm } from "react-hook-form";

import styles from "./commentForm.module.scss";

export const CommentForm = ({ id }) => {
  const { userData } = useContext(UserContext);
  let userImgSrc = userData.userImage ? userData.userImage : "";
  const { register, handleSubmit, reset } = useForm();
  const [, , dispatch] = useAPI();

  const onSubmit = (data) => {
    const commentData = {
      comment: data.comment,
      date: new Date(),
      userName: userData.userName,
    };
    dispatch({
      type: "updateComment",
      payload: { comment: commentData, id: id },
    });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.commentForm}>
      <div className={styles.imageContainer}>
        <img
          src={userImgSrc}
          className={styles.imageContainerImage}
          alt="user profile"
        />
      </div>
      <input
        aria-label="comment"
        placeholder={"Leave a comment"}
        type="text"
        {...register("comment", { required: true })}
        className={styles.commentInput}
      />

      <button className={styles.commentButton} type={"submit"}>
        Post
      </button>
    </form>
  );
};

CommentForm.propTypes = {
  id: PropTypes.string,
};
