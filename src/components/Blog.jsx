import React from 'react';
import Header from './Header';
import Post from './Post';
import Footer from './Footer';
import styles from '../styles/Blog.module.css';

const Blog = () => {
  return (
    <div className={styles.blog}>
      <Header />
      <main className={styles.main}>
        <Post />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
