import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = () => {
    return(
        <ul className="app-list list-group">
            <PostListItem
            label="Giong to learning React"
            important
            />
            <PostListItem
            label="Thet is so good"/>
            <PostListItem
            label="I need a break..."/>
        </ul>
    )
}
export default PostList;
