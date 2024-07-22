import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import FormValidation from './components/FormValidation';
import About from './components/About';
import PostDetails from './components/PostDetails';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='blogs' element={<BlogPost />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<FormValidation />} />
          <Route exact path="/" element={<BlogPost />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
