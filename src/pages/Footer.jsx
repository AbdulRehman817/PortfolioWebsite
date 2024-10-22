// import React from "react";

// import { FaGithubSquare } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaEnvelope } from "react-icons/fa6";
// const Footer = () => {
//   return (
//     <footer style={footerStyles.container}>
//       <h2 style={footerStyles.title}>FIND ME ON</h2>
//       <p style={footerStyles.subtitle}>
//         Feel free to <span style={footerStyles.connectText}>connect</span> with
//         me
//       </p>
//       <div style={footerStyles.iconsContainer}>
//         <a
//           href="https://github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={footerStyles.icon}
//         >
//           <FaGithubSquare size={40} />
//         </a>
//         <a
//           href="https://twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={footerStyles.icon}
//         >
//           <FaTwitter size={40} />
//         </a>
//         <a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={footerStyles.icon}
//         >
//           <FaLinkedinIn size={40} />
//         </a>
//         <a
//           href="https://instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={footerStyles.icon}
//         >
//           <FaInstagramSquare size={40} />
//         </a>
//         <a href="mailto:someone@example.com" style={footerStyles.icon}>
//           <FaEnvelope size={40} />
//         </a>
//       </div>
//     </footer>
//   );
// };

// // Styles for the footer
// const footerStyles = {
//   container: {
//     backgroundColor: "#D43F52",
//     color: "#fff",
//     textAlign: "center",
//     padding: "2rem",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//     borderRadius: "10px 10px 0 0",
//     marginTop: "auto",
//   },
//   title: {
//     fontSize: "2rem",
//     fontWeight: "bold",
//     marginBottom: "0.5rem",
//   },
//   subtitle: {
//     fontSize: "1.2rem",
//     marginBottom: "2rem",
//   },
//   connectText: {
//     color: "#9A77FF",
//   },
//   iconsContainer: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "2rem",
//   },
//   icon: {
//     color: "#fff",
//     transition: "transform 0.3s",
//   },
// };

// export default Footer;

import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <h2 style={styles.heading}>FIND ME ON</h2>
      <p style={styles.subtext}>
        Feel free to <span style={styles.connectText}>connect</span> with me
      </p>
      <div style={styles.iconContainer}>
        <a
          href="https://github.com/AbdulRehman817"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaGithub size={40} />
        </a>

        <a
          href="https://www.linkedin.com/in/abdul-rehman-7aa108328/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="https://www.instagram.com/?next=%2F&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaInstagram size={40} />
        </a>
        <a href="mailto:abdulrehmanbey1718@gmail.com" style={styles.iconLink}>
          <FaEnvelope size={40} />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#D43F52",
    padding: "2rem",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
    color: "#fff",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },
  heading: {
    marginBottom: "1rem",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  subtext: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  connectText: {
    color: "#CFC",
    fontWeight: "bold",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  iconLink: {
    color: "#fff",
    transition: "transform 0.2s ease-in-out",
  },
};

export default Footer;
