import React from 'react';

const Comment = ({ author, text, date }) => {
  return (
    <div className="comment">
      <div className="comment-author">{author}</div>
      <div className="comment-text">{text}</div>
      <div className="comment-date">{date}</div>
    </div>
  );
};

export default Comment;
