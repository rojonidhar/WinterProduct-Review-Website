import { comment } from 'postcss';
import React from 'react';
import { Link } from 'react-router-dom';
import useComments from '../../hooks/useComment';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const[comments,setComments]=useComments();
    return (
        <section>
            <div>
            <div className='flex mx-auto justify-items-center '>
            <div className='mt-40 mr-4'>
                <h1 className='text-4xl text-black font-semibold uppercase'>Take care of your skin
                    <br></br><span className='text-sky-800'>With our product</span></h1>
                <p className='mt-4 text-xl'>It will help your skin to healthy brigth and also <br></br>protect your body in winter.It will give you natural glow</p>

            </div>
            <div className='ml-40 mt-6'>
                <img src='https://www.saffron.com.bd/images/detailed/208/VDR400HH.jpg'/>
            </div>
            </div>
        </div>

        <h1 className='text-2xl mt-40 bg-emerald-200 w-1/2 ml-60  text-teal-900 mb-20 font-semibold uppercase'>Customer Review(3)</h1>

                <div className='review-cart'>
                    {
                        comments.slice(0,3).map(comment=><Review key={comment.id} comment={comment}></Review>)
                    }
                   
        
                </div>
                <Link className='bg-emerald-500 text-white text-xl p-4 w-1/2 mt-20 justify-items-center  rounded' to='/review' >Review all</Link>
          
        
        </section>
    );
};

export default Home;