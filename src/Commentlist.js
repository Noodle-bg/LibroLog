import React, { useState } from 'react';
import Comment from './Comment';

const CommentList = () => {
  const [comments, setComments] = useState([
    { author: 'User 1', text: 'This is the first comment', date: '2023-10-25' },
    { author: 'User 2', text: 'Another comment here', date: '2023-10-26' },
    { author: 'User 3', text: 'A third comment for the list', date: '2023-10-27' },
  ]);


  const AddComments = (newComment) => {
    setComments([...comments, newComment]); 
  }; 

  const newCommentData = {
    author: 'User 4',
    text: 'A new comment added dynamically',
    date: '2023-10-28',
  };
  
  
  AddComments(newCommentData);
  




  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <Comment
          key={index}
          author={comment.author}
          text={comment.text}
          date={comment.date}
        />
      ))}
    </div>
  );
};

export default CommentList;
