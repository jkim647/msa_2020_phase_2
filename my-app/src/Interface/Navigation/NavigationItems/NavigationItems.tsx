import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'
import './NavigationItems.css'
import {FacebookShareButton, FacebookIcon,} from 'react-share'

interface Iprops{
    user_id: any;
    user_score: any;
    get_rank:(a:any) => void;
    f_score:any
}

const navigationItems = (Iprops:any) => (
    <ul className="NavigationItems">
        <NavigationItem> {Iprops.user_id}</NavigationItem>
        <button onClick={Iprops.get_rank}>{Iprops.user_id}'s rank</button>
        <FacebookShareButton
             className="shareIcon"
             url= {'https://myfoodrecipe.azurewebsites.net/?fbclid=IwAR05KMrNbs365SMvy10GorgtJHkUpX1tkopYk-u6Y3kmLk9w0zaQGjanB5o'}
             quote={Iprops.f_score}
        >
            <FacebookIcon size="3rem"/>
            </FacebookShareButton>


    </ul>
);

export default navigationItems;