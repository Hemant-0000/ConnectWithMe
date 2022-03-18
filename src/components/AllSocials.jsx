import React from 'react'
import GitHub from './GitHub';
import LinkedIn from "./LinkedIn";
import Instagram from "./Instagram";
import StackOverflow from "./StackOverflow";
import Twitter from "./Twitter";
import Facebook from './Facebook';
import Quora from './Quora';

const AllSocials = () => {
    return (
        <>
            <div className='flex justify-center items-center flex-col space-y-10'>
                <h1 className='text-4xl thp:text-2xl thp:text-center tep:text-2xl tep:text-center ssm:text-3xl ssm:text-center my-3 text-white font-mono font-semibold'>Hello there, Feel free to connect with me :) </h1>
                <LinkedIn />
                <GitHub/>
                <StackOverflow/>
                <Quora/>
                <Instagram/>
                <Twitter/>
                <Facebook/>
            </div>
        </>
    )
}

export default AllSocials