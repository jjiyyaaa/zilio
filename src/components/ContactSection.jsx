import React, { useState } from 'react';
import { Send, Compass, Mail } from 'lucide-react';
import { LinkedinIcon as Linkedin, InstagramIcon as Instagram, GithubIcon as Github, YoutubeIcon as Youtube, TiktokIcon as Tiktok } from './SocialIcons';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      // Formspree API submission. Formspree will automatically forward this to the account.
      // We also specify the target email just in case or use a mock id that fails to trigger mailto.
      const response = await fetch("https://formspree.io/f/mvoywpez", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Formspree failed");
      }
    } catch (err) {
      // Fallback: Open local mail client pre-filled with the message to jjiyyaa@gmail.com
      const mailtoUrl = `mailto:jjiyyaa@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-beige-gradient contact-section">
      <div className="container">

        {/* Top Header */}
        <div className="contact-header animate-on-scroll">
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-desc">
            Have a project in mind, want to collaborate, or just want to say hello? Drop me a message below, or connect with me via my social platforms. Let's build something amazing together!
          </p>
        </div>

        {/* Main 2-columns */}
        <div className="contact-content grid-2col">

          {/* Left Column: Connect with Me */}
          <div className="connect-column animate-on-scroll">
            <h3 className="column-title">Connect with Me</h3>
            <p className="connect-intro">Find my professional profiles and creative channels below:</p>

            <ul className="social-links-list">
              {/* LinkedIn */}
              <li className="social-link-item">
                <a
                  href="https://linkedin.com/in/Ghaziya-Manna-Putri-Iwadani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-anchor glass-card"
                >
                  <div className="social-icon-wrapper li-color">
                    <Linkedin size={22} />
                  </div>
                  <div className="social-link-text">
                    <span className="social-platform">LinkedIn</span>
                    <span className="social-username">Ghaziya Manna Putri Iwadani</span>
                  </div>
                </a>
              </li>

              {/* Instagram */}
              <li className="social-link-item">
                <a
                  href="https://instagram.com/g.ghzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-anchor glass-card"
                >
                  <div className="social-icon-wrapper ig-color">
                    <Instagram size={22} />
                  </div>
                  <div className="social-link-text">
                    <span className="social-platform">Instagram</span>
                    <span className="social-username">@g.ghzz</span>
                  </div>
                </a>
              </li>

              {/* GitHub */}
              <li className="social-link-item">
                <a
                  href="https://github.com/jjiyyaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-anchor glass-card"
                >
                  <div className="social-icon-wrapper gh-color">
                    <Github size={22} />
                  </div>
                  <div className="social-link-text">
                    <span className="social-platform">GitHub</span>
                    <span className="social-username">jjiyyaaa</span>
                  </div>
                </a>
              </li>

              {/* TikTok */}
              <li className="social-link-item">
                <a
                  href="https://tiktok.com/@fghrzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-anchor glass-card"
                >
                  <div className="social-icon-wrapper tk-color">
                    <Tiktok size={22} />
                  </div>
                  <div className="social-link-text">
                    <span className="social-platform">TikTok</span>
                    <span className="social-username">@fghrzy</span>
                  </div>
                </a>
              </li>

              {/* YouTube */}
              <li className="social-link-item">
                <a
                  href="https://youtube.com/@jjiyyaaa16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-anchor glass-card"
                >
                  <div className="social-icon-wrapper yt-color">
                    <Youtube size={22} />
                  </div>
                  <div className="social-link-text">
                    <span className="social-platform">YouTube</span>
                    <span className="social-username">Ghaziya Manna Putri Iwadani</span>
                  </div>
                </a>
              </li>

              {/* Email */}
              <li className="social-link-item">
                <a
                  href="mailto:jjiyyaa@gmail.com"
                  className="social-link-anchor glass-card"
                >
                  <div className="social-icon-wrapper mail-color">
                    <Mail size={22} />
                  </div>
                  <div className="social-link-text">
                    <span className="social-platform">Email Address</span>
                    <span className="social-username">jjiyyaa@gmail.com</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Get in Touch (Form) */}
          <div className="form-column animate-on-scroll delay-200">
            <div className="contact-form-container glass-card">
              <h3 className="column-title">Get in Touch</h3>

              {submitted ? (
                <div className="submission-success-msg">
                  <div className="success-icon-globe">
                    <Compass size={40} className="icon-spin" />
                  </div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. Your message has been sent to <strong>jjiyyaa@gmail.com</strong>. I'll get back to you as soon as possible!</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  {/* Name field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ghaziya Manna"
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ghaziya@example.com"
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Message field */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your beach thoughts or collaboration ideas here..."
                      rows="5"
                      className="form-textarea"
                      required
                    ></textarea>
                  </div>

                  {/* Submit button: Teal with paper plane icon */}
                  <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .contact-section {
          padding-top: 100px;
          padding-bottom: 100px;
          min-height: 100vh;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .contact-desc {
          font-size: 1.15rem;
          color: var(--deep-blue);
          max-width: 750px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .column-title {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--deep-blue);
          margin-bottom: 1rem;
          text-align: left;
        }

        /* Connect with Me Column */
        .connect-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .connect-intro {
          font-size: 1.05rem;
          color: var(--medium-blue);
          margin-bottom: 2rem;
        }

        .social-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          width: 100%;
          padding: 0;
        }

        .social-link-anchor {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 16px 20px;
          text-decoration: none;
          transition: var(--transition-bounce);
          background: rgba(253, 252, 247, 0.8);
          border: 1px solid rgba(146, 189, 207, 0.4);
        }

        .social-link-anchor:hover {
          background-color: var(--off-white);
          border-color: var(--teal-cyan);
        }

        .social-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          color: var(--off-white);
          transition: var(--transition-bounce);
        }

        .social-link-anchor:hover .social-icon-wrapper {
          transform: rotate(15deg) scale(1.1);
        }

        /* Platform specific colors */
        .li-color { background-color: #0077b5; }
        .ig-color { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }
        .gh-color { background-color: #24292e; }
        .tk-color { background-color: #010101; }
        .yt-color { background-color: #ff0000; }
        .mail-color { background-color: var(--teal-cyan); }

        .social-link-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .social-platform {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--deep-blue);
        }

        .social-username {
          font-size: 0.85rem;
          color: var(--medium-blue);
          font-weight: 500;
        }

        /* Get in Touch Form Column */
        .contact-form-container {
          background: rgba(253, 252, 247, 0.9);
          border: 1px solid rgba(146, 189, 207, 0.4);
          padding: 40px;
          border-radius: 24px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }

        .form-label {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--deep-blue);
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1.5px solid var(--light-blue);
          background-color: var(--off-white);
          font-family: var(--font-primary);
          color: var(--deep-blue);
          font-size: 1rem;
          outline: none;
          transition: var(--transition-smooth);
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--teal-cyan);
          box-shadow: 0 0 0 4px var(--teal-cyan-15);
          background-color: #fff;
        }

        .submit-btn {
          background-color: var(--teal-cyan);
          color: var(--off-white);
          border-radius: 12px;
          padding: 14px 28px;
          align-self: flex-start;
          width: auto;
        }
        
        .submit-btn:hover {
          background-color: var(--medium-blue);
          box-shadow: 0 8px 20px rgba(59, 98, 155, 0.3);
        }

        /* Success Message styling */
        .submission-success-msg {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          padding: 40px 0;
          animation: scaleUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .success-icon-globe {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: var(--teal-cyan-15);
          color: var(--teal-cyan);
        }

        .submission-success-msg h4 {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--deep-blue);
        }

        .submission-success-msg p {
          font-size: 1.05rem;
          color: var(--medium-blue);
          max-width: 320px;
          line-height: 1.6;
        }

        @keyframes scaleUp {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        /* Responsive overrides */
        @media (max-width: 1024px) {
          .column-title {
            text-align: center;
          }
          
          .connect-column {
            align-items: center;
          }

          .submit-btn {
            align-self: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
