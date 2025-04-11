import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AboutUsPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import coding from '../../assets/images/coding.jpg';
import vision from '../../assets/images/vision.png';
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Footer from '../Footer';

function AboutUsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    { emoji: "🚀", title: "Easy-to-follow courses" },
    { emoji: "📚", title: "Helpful resources" },
    { emoji: "💡", title: "Real-world projects" },
    { emoji: "🤝", title: "Supportive community" },
  ];

  const technologies = [
    { name: 'HTML', desc: 'Structure' },
    { name: 'CSS', desc: 'Style' },
    { name: 'JS', desc: 'Interactivity' },
    { name: 'React', desc: 'UI Library' },
    { name: 'Next.js', desc: 'Framework' },
    { name: 'Node.js', desc: 'Backend' },
    { name: 'Express', desc: 'Server' },
    { name: 'Git', desc: 'Version Control' },
  ];

  return (
    <>
      <section className="about-section text-white text-center mt-5" data-aos="fade-down">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead mt-3">
            We're on a mission to make learning web development simple, fun, and accessible for everyone.
          </p>
        </div>
        <div className="angled-bottom"></div>
      </section>

      <section className="welcome-section py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold mb-3">Welcome to Skillwave!</h2>
          <p className="lead mb-5">
            We are a passionate team of learners and developers working to make learning web development
            simple, fun, and accessible for everyone — especially beginners like us!
          </p>

          <div className="row justify-content-center mb-5">
            {features.map((feature, index) => (
              <div className="col-6 col-md-3 mb-4" key={index} data-aos="zoom-in">
                <div className="feature-card p-4 h-100">
                  <div className="emoji-circle mb-3">{feature.emoji}</div>
                  <h6 className="fw-semibold">{feature.title}</h6>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted">
            Whether you're just starting your journey or looking to sharpen your skills,
            our goal is to provide you with the tools and guidance you need to succeed in the tech world.
          </p>
        </div>
      </section>

      <section className="why-we-built py-5" data-aos="fade-right">
        <div className="container">
          <h3 className="fw-bold mb-4">
            <span className="me-2">👩‍🏫</span> Why We Built This
          </h3>

          <div className="row align-items-center justify-content-center">
            <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0" data-aos="zoom-in">
              <img
                src={coding}
                alt="Learning to code"
                className="img-fluid rounded custom-image"
                style={{ height: '25rem', width: '25rem', objectFit: 'cover' }}
              />
            </div>

            <div className="col-md-7">
              <p className="lead text-muted mb-0">
                As beginners ourselves, we understand how confusing and overwhelming learning to code can be.
                That's why we created this platform — to help others learn with clear explanations,
                hands-on projects, and supportive mentors.
              </p>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-left">
              <h3 className="fw-bold mb-4">🌟 Our Vision</h3>
              <p className="lead text-muted">
                We believe that anyone can become a developer with the right support and motivation.
                We're here to prove that learning to code doesn't have to be scary — it can be exciting and empowering!
              </p>
            </div>

            <div className="col-md-5 d-flex justify-content-center" data-aos="zoom-in">
              <img
                src={vision}
                alt="Vision to code"
                className="img-fluid rounded custom-vision-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="technologies-section py-5" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-4">🧠 Technologies We Love</h3>
          <div className="row">
            {technologies.map((tech, index) => (
              <div key={index} className="col-6 col-md-3 mb-4" data-aos="flip-up">
                <div className="tech-card p-3 text-center">
                  <h5 className="tech-title mb-1">{tech.name}</h5>
                  <p className="text-muted small">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stay-connected py-5 text-center" data-aos="fade-up">
        <div className="container">
          <h3 className="fw-bold mb-2">📬 Stay Connected</h3>
          <p className="text-muted mb-4">
            We'd love to hear from you! Got questions or feedback? Drop us a message.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a href="mailto:rcaswin6@gmail.com" className="btn filled-btn d-flex align-items-center gap-2">
              <FaEnvelope /> support@example.com
            </a>
            <a href="https://instagram.com" target="_blank" className="btn outline-btn d-flex align-items-center gap-2">
              <FaInstagram /> Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" className="btn outline-btn d-flex align-items-center gap-2">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com" target="_blank" className="btn outline-btn d-flex align-items-center gap-2">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="coding-journey-section text-center py-5" data-aos="zoom-in">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to start your coding journey?</h2>
          <p className="text-muted mb-4">
            Join our community today and take the first step toward becoming a web developer.
          </p>
          <button
            className="btn filled-btn px-4 py-2 fw-semibold"
            onClick={() => navigate('/courses')}
          >
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUsPage;
