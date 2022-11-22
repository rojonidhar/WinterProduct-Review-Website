import { comment } from 'postcss';
import React, { useEffect, useState } from 'react';
import useComments from '../../hooks/useComment';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const[comments,setComments]=useComments();
    
    return (
        <div>
        <h1 className='text-4xl text-black font-semibold uppercase mt-20'>What are our customer says !!</h1>
      

        <div className='carts-container'>
        <div className="cartAll-container">
       
            {
               comments.map(comment=><Review key={comment.id} comment={comment}></Review>)
            }
        </div>
        </div>
        </div>
    );
};

export default Reviews;