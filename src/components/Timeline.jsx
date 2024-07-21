import { useState } from 'react';
import { motion } from 'framer-motion';

const ExperienceTimeline = () => (
  <div>
    <div className="timeline-item">
      <div className='timelime-info'>
        <i>2023 - present</i>
      </div>
      <div className='border'><div /></div>
      <div className='timeline-details'>
        <h4>Freelance</h4>
        <p>Full Stack Developer</p>
        <ul>
          <li>Delivered high-quality web applications with responsive design and optimal performance.</li>
          <li>Developed and maintained websites and web applications using HTML, CSS, JavaScript, React, and Node.js.</li>
          <li>Built and integrated RESTful APIs and managed databases using Firebase and other backend technologies.</li>
          <li>Enhanced user experience through continuous feedback and iteration</li>
          <li>Collaborated with backend developers and UI/UX designers to integrate APIs and create seamless user interfaces.</li>
          <li>Managed project timelines, deliverables, and client communication effectively.</li>
        </ul>
      </div>
    </div>
  </div>
);

const EducationTimeline = () => (
  <div>
    <div className="timeline-item">
      <div className='timelime-info'>
        <i>May 2024 - present</i>
        <p>Germany</p>
      </div>
      <div className='border'><div /></div>
      <div className='timeline-details'>
        <h4>IU International University of Applied Sciences</h4>
        <p>B.Sc. In Applied Artificial Intelligence</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className='timelime-info'>
        <i className='tiI'>Aug 2023 - Feb 2024</i>
      </div>
      <div className='border mdborder'><div /></div>
      <div className='timeline-details'>
        <h3 className='tdh3'>Certificates</h3>

        <h4>Frontend Development Certification</h4>
        <p>Dev Career + Altschool Africa</p>
      </div>
    </div>
    <div className="timeline-item">
      <div className='timelime-info'>
        <i>May 2024 - July 2024</i>
      </div>
      <div className='border'><div /></div>
      <div className='timeline-details'>
        <h4>Backend Development Certification</h4>
        <p>Youthrive + Career Ex</p>
      </div>
    </div>
  </div>
);

const Timeline = () => {
  const [seletedTab, setSeletedTab] = useState('experience')
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(false);

  const handleGetExperience = () => {
    setShowExperience(true);
    setShowEducation(false);
    setSeletedTab('experience');
  };

  const handleGetEducation = () => {
    setShowExperience(false);
    setShowEducation(true);
    setSeletedTab('education');
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1
      }
    }
  }

  return (
    <motion.section className="section timeline-section" id='timeline'
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className='timeline-title'>
        <h3 onClick={handleGetExperience} className={seletedTab === 'experience' ? "bg-color" : ""}>Experience</h3>
        <h3 onClick={handleGetEducation} className={seletedTab === 'education' ? "bg-color" : ""}>Education</h3>
      </div>
      {showExperience && <ExperienceTimeline />}
      {showEducation && <EducationTimeline />}
    </motion.section>
  );
};

export default Timeline;
