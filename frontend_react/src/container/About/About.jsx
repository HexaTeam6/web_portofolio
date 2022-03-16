import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

import { images } from '../../constants';
import './About.scss';

const abouts = [
  {title: 'Design', description: 'I am a UI/UX Designer with a passion for creating beautiful and functional user interfaces. I have a strong background in both front-end and back-end development. I have a strong understanding of the entire stack and have worked on multiple projects from start to finish.', imgUrl: images.about01},
  {title: 'Web Development', description: 'I am a web developer with a passion for creating beautiful and functional user interfaces. I have a strong background in both front-end and back-end development. I have a strong understanding of the entire stack and have worked on multiple projects from start to finish.', imgUrl: images.about02},
  {title: 'Mobile Development', description: 'I am a mobile developer with a passion for creating beautiful and functional user interfaces. I have a strong background in both front-end and back-end development. I have a strong understanding of the entire stack and have worked on multiple projects from start to finish.', imgUrl: images.about03},
  {title: 'Backend', description: 'I am a backend developer with a passion for creating beautiful and functional user interfaces. I have a strong background in both front-end and back-end development. I have a strong understanding of the entire stack and have worked on multiple projects from start to finish.', imgUrl: images.about04},
]

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span><br /> means <span>Good Business</span>
      </h2>
      
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About