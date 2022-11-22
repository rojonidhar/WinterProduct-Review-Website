import { comment } from 'postcss';
import React from 'react';
import './Review.css';

const Review = ({comment}) => {
   
    const{name,img,comments,rating}=comment;

   
   
    return (
        <div className='cart-Container'>
        <img src={img} alt=""></img>
        <div className='cart-info'>
            <p className='cart-name'>Name :{name}</p>
            
            <p><small>Comment: {comments}</small></p>
            <p><small>Ratings: {rating} stars</small></p>
        </div>
        </div>
    );
};

export default Review;