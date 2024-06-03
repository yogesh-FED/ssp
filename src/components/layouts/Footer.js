import React from "react";

const Footer = () => {
  return (
    <div>
      {/* footer starts */}
      <footer id="footer">
        <div className="container py-1">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>TNeGA</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://tnega.tn.gov.in/">TNeGA</a>
          </div>
        </div>
      </footer>
      {/* footer ends */}
    </div>
  );
};

export default Footer;
