import React from 'react';
import './popup.scss';

const Popup = ({ isOpen, closePopup, children, comp }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className={comp === 'institute' ? "popup-content institute" : comp === 'fsr' ? "popup-content fsr" : comp === "studentEligible" ? "popup-content studentEligible" :"popup-content"}>
        <button className="close-btn" onClick={closePopup}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
