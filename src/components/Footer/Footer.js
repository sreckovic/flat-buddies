import React from "react";

import "./Footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Flatbuddies</strong> by Nemanja. The source code{" "}
            <a href="https://github.com/sreckovic/flat-buddies">
              https://github.com/sreckovic/flat-buddies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
