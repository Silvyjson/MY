import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';

function Contact() {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true);

            await fetch('https://my-portfolio-backend-3yl5.onrender.com/api/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            setStatus('Sent');

            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        }
        catch (error) {
            setStatus("Failed to send");
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    if (status) {
        setTimeout(function () {
            setStatus(null);
        }, 5000)
    }

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
                    <h1>Let&apos;s discuss something <b>cool</b> together</h1>
                    <article>
                        <span>
                            <FontAwesomeIcon icon="fa-location-dot" className="contact-font-icon" />
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
                    <form className="contact_form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">
                            {status ? (
                                <b>
                                    <FontAwesomeIcon icon="fa-solid fa-circle-check" className='checkFA' />
                                    {status}
                                </b>
                            ) : (
                                loading ? (
                                    <FontAwesomeIcon icon="fa-spinner" spin />
                                ) : (
                                    <>
                                        <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                                        <i>Send</i>
                                    </>
                                )
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;
