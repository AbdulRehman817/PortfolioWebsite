// components/ProgressBar.js

import { useEffect, useState } from "react";
import "./progressloader.css"; // Import your CSS file

const Progressloader = ({ label, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(percentage);
    }, 100);
  }, [percentage]);

  return (
    <div className="skill">
      <span>{label}</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${width}%` }}>
          <div className="percentage">{percentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default Progressloader;
