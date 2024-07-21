import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SkillSet } from "./other components/SkillSet";

const Skills = () => {
  const [heights, setHeights] = useState({});

  useEffect(() => {
    const heights = {};
    SkillSet.forEach(skill => {
      heights[skill._id] = `${skill.percentage}%`;
    });
    setHeights(heights);
  }, []);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (index) => {
      const delay = 0.1 * index >= 0.5 ? 0.5 : 0.1 * index;
      return {
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 1,
        }
      };
    }
  };

  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <div className="skills-content">
        {SkillSet.map(({ _id, name, percentage, image }, index) => (
          <motion.div key={_id} className="skills-item"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <span>
              <div className="project-circle">
                <span className='skill-icon'>
                  <i>{percentage}%</i>
                  <img src={image.url} alt={name} width={40} />
                </span>
                <div id={`project-percent-${_id}`} style={{ height: heights[_id] }} />
              </div>
            </span>
            <p>{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
