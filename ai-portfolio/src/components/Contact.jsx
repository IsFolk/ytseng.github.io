import { FiMail, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <footer id="contact" className="footer">
      <div className="footerInner">
        <h2>Let’s work together</h2>

        <p className="footerText">
          I’m interested in designing AI systems that are understandable,
          steerable, and human-centered.
        </p>

        <div className="footerLinks">
          <a href="mailto:sarahtseng0603@gmail.com">
            <FiMail />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/你的帳號"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
            LinkedIn
          </a>
        </div>

        <div className="footerBottom">
          <p>© 2026 Yu-Ting Tseng</p>
          <p>AI Interaction Designer</p>
        </div>
      </div>
    </footer>
  );
}