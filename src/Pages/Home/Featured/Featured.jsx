import React from 'react';
import Image from '../../../img/Container.png'; 
import styles from './Featured.module.css';

export default function Featured() {
  return (
    <div className={`flex items-center justify-center ${styles.featured} pb-4`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-1 h-full">
            <p className={`bigParagraphText ${styles.title}`}>Featured Post</p>
            <h1 className={styles.featuredPostTitle}>How AI will Change the Future</h1>
            <p className={`bigParagraphText ${styles.desc}`}>
              The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction
            </p>
            <button className="bg-white text-black mt-16 hover:bg-blue-700 hover:text-white font-bold py-3 px-12 rounded">
              Read More
            </button>
          </div>
          <div className="md:order-2">
            <img src={Image} alt="Featured" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
