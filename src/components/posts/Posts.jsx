import React from 'react'; 
import "./posts.scss";
import Post from "../post/Post";
import { NavLink } from 'react-router-dom';
import mousa from '../../assets/Mousa.jpg';
import liam from '../../assets/Liam.jpg';
import testhome from '../../assets/testhome.png';

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Mousa Adely",
      userId: 1,
      profilePic: mousa,
      desc: "This is a test",
      img: testhome,
    },
    {
      id: 2,
      name: "Liam Walsh",
      userId: 2,
      profilePic: liam,
      desc: "This is a second test",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
