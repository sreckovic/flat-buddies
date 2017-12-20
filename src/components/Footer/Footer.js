import React from "react";

import "./Footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Flatbuddies</strong> by Nemanja.<br />The{" "}
            <a
              href="https://github.com/sreckovic/flat-buddies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github-alt" aria-hidden="true" /> source code
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
