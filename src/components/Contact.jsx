import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';

function Contact() {

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
                duration: 1,
            }
        }
    }

    return (
        <motion.section className="section contact-section" id="contact"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
            }}
        >
            <h2>Contact</h2>
            <div className="contact-container">
                <div className="contact-border">
                    <h1>Let&apos;s discuss on something <b>cool</b> together</h1>
                    <article>
                        <span>
                            <FontAwesomeIcon icon=" fa-location-dot" className="contact-font-icon" />
                            <p>Abuja, Nigeria</p>
                        </span>
                        <span>
                            <a href="tel:+2348144426644">
                                <FontAwesomeIcon icon="fa-phone" className="contact-font-icon" />
                                <p>+2348144426644</p>
                            </a>
                        </span>
                        <span>
                            <a href="mailto:mbadughasilvia@gmail.com">

                                <FontAwesomeIcon icon="fa-envelope" className="contact-font-icon" />
                                <p>mbadughasilvia@gmail.com</p>
                            </a>
                        </span>
                    </article>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/mbadughasilvia/" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/mbadughasilvia" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div className="form-section">
                    <blockquote className="quote">&quot;Live the Life as you want,,</blockquote>
                    <form className="contact_form">
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="text" placeholder="Phone" required />
                        <textarea placeholder="Message" required />
                        <button><FontAwesomeIcon icon="fa-solid fa-paper-plane" /><i>Send</i></button>
                    </form>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;