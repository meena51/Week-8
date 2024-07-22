import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import usePagination from './usePagination';

const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  const itemsPerPage = 9;

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(postRes => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
          .then(photoRes => {
            const mergedPosts = postRes.data.map(post => {
              const photo = photoRes.data.find(photo => photo.id === post.id);
              return {
                ...post,
                photoUrl: photo ? photo.url : null
              };
            });
            setPosts(mergedPosts);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }, []);

  const { currentPage, currentItems, paginate } = usePagination(posts, itemsPerPage);

  return (
    <div className="container">
      <h1>Blog Posts</h1>
      <div className="posts">
        {currentItems.map(post => (
          <Link to={`/post/${post.id}`} key={post.id} className="post-link">
            <div className="post">
              <h2>{post.title}</h2>
              {post.photoUrl && <img className='post-img' src={post.photoUrl} alt="Post" />}
            </div>
          </Link>
        ))}
      </div>
      <nav>
        <ul className='pagination' style={{ display: 'flex', listStyle: 'none', justifyContent: 'center' }}>
          {Array.from({ length: Math.ceil(posts.length / itemsPerPage) }, (_, index) => (
            <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className='page-link'>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default BlogPost;
