import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectSet } from "./other components/ProjectSet";

const Projects = () => {
    const [expandedProjectId, setExpandedProjectId] = useState(null);
    const [selectedTechStack, setSelectedTechStack] = useState(null);
    const [showAllProjects, setShowAllProjects] = useState(false);

    const fadeInAnimationVariants = (index) => {
        if (!selectedTechStack) {
            if (0.1 * index >= 0.5) {
                return {
                    initial: {
                        opacity: 0,
                        y: 50,
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.5,
                            duration: 1,
                        },
                    },
                };
            } else {
                return {
                    initial: {
                        opacity: 0,
                        y: 50,
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            delay: 0.1 * index,
                            duration: 1,
                        },
                    },
                };
            }
        } else {
            return null;
        }
    };

    const toggleShowAllProjects = () => {
        setShowAllProjects(!showAllProjects);
    };

    return (
        <>
            <section className="section" id="projects">
                <h2>projects</h2>

                <div className="projects-container">
                    {(showAllProjects ? ProjectSet : ProjectSet.slice(0, 6))
                        .filter((project) =>
                            selectedTechStack
                                ? project.techStack.some(
                                    (tech) => tech.trim() === selectedTechStack
                                )
                                : true
                        )
                        .map((project, index) => (
                            <motion.div
                                key={project._id}
                                className="projects-item"
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                                onMouseEnter={() => setExpandedProjectId(project._id)}
                                onMouseLeave={() => setExpandedProjectId(null)}
                            >
                                <img src={project.image.path} alt={project.name} />
                                <AnimatePresence>
                                    {expandedProjectId === project._id && (
                                        <motion.div
                                            className="projects-content"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p>{project.sequence}</p>
                                            <h3>{project.title}</h3>
                                            <span className="tech-stack">
                                                {project.techStack.map((tech) => (
                                                    <li key={tech} className="tech">
                                                        {tech}
                                                    </li>
                                                ))}
                                            </span>
                                            <div className="font-awesome">
                                                <a href={project.githuburl} target="_blank">
                                                    <span className="fa-icon">
                                                        <FontAwesomeIcon icon={["fab", "github"]} />
                                                    </span>
                                                </a>
                                                <a href={project.liveurl} target="_blank">
                                                    <span className="fa-icon">
                                                        <FontAwesomeIcon icon={["fas", "link"]} />
                                                    </span>
                                                </a>
                                            </div>
                                            {/* <article>{project.description}</article> */}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                </div>
                <div onClick={toggleShowAllProjects} className="toggle">
                    <span>
                        <p>{showAllProjects ? 'show less' : 'show more'}</p>
                        <FontAwesomeIcon icon={showAllProjects ? 'fa-angle-up' : 'fa-angle-down'} />
                    </span>
                </div>
            </section>
        </>
    );
};

export default Projects;
