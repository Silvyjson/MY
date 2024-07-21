import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';
import ProfileImg from '../assets/image1.jpg';
function About() {

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 30,
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
    <motion.div className="home-section" id='home'
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <motion.div className="user-info" variants={fadeInAnimationVariants}>
        <motion.h3 variants={fadeInAnimationVariants}>Software Developer</motion.h3>
        <motion.h2 variants={fadeInAnimationVariants}>Mbadugha Silvia</motion.h2>
        <motion.i variants={fadeInAnimationVariants}>&quot;I develop responsive user interfaces and web applications.&quot;</motion.i>
        <motion.p variants={fadeInAnimationVariants}>I am Mbadugha Nmesoma Silvia, a skilled software developer with a strong foundation in both front-end and back-end technologies. I am proficient in a wide array of languages and frameworks, including HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. I am also experienced in using tools such as Postman, Git, and GitHub for version control. I excel in creating responsive and user-friendly web applications, leveraging my expertise in API integration and agile methodologies.</motion.p>
        <motion.div variants={fadeInAnimationVariants} className="download"> <a href="https://drive.google.com/file/d/1saneTITM1YQObppnHGbi8uApaac9JRZr/view?usp=sharing" target="_blank"> Download CV <FontAwesomeIcon icon="fa-solid fa-download" className='downloadFA' /></a></motion.div>
      </motion.div>
      <motion.div className="avatar" variants={fadeInAnimationVariants}>
        <img src={ProfileImg} alt="memoji of a girl operating a laptop" />
      </motion.div>
    </motion.div>
  );
}

export default About;
