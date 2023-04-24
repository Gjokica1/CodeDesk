import React , {useState, useEffect} from 'react'
import IconSearch2Line from '../Icons/icon'
import Post from './Post'
import {db} from './firebase';



function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect (() => {
db.collection('posts').onSnapshot(snapshot => (
  setPosts(snapshot.docs.map(doc => doc.data()))
))
  },[])

  return (
    <div className='feed'>
      <div className='searchContainer'>
      <div className='search'>
    
    <IconSearch2Line className='search-icon'/>
    <input
          type="search"
          spellcheck="false"
          placeholder='Search Codedesk'
        />
        </div>
        <div>
        
        </div>
      </div>
      {posts.map(post => (
        <Post
  
        displayName = {post.displayName}
        verified = {post.verified}
        text={post.text}
        avatar= {post.avatar}
        position = {post.position}
        location = {post.location}
        />
        ))};
    
    

    </div>
  );
};

export default Feed