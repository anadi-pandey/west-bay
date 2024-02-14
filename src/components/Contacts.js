import React from "react";
import greece from "../assets/clipart/greece.png";
import malta from "../assets/clipart/malta.png";
import turkey from "../assets/clipart/turkey.png";
import unitedkingdom from "../assets/clipart/uk.png";
import Ireland from "../assets/clipart/ireland.png";
import dubai from "../assets/clipart/uae.png";
import canada from "../assets/clipart/canada.png";
import india from "../assets/clipart/india.png";

const Contacts = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <img src={greece} alt="flag" />
        <div className="country-name">GREECE</div>
        <div className="contact-content">
          25 Vas. Sofias Avenue, Athens Greece +30 694 149 9621
        </div>
      </div>
      <div className="contact-card">
        <img src={malta} alt="flag" />
        <div className="country-name">MALTA</div>
        <div className="contact-content">
          25 Vas. Sofias Avenue, Athens Greece +30 694 149 9621
        </div>
      </div>
      <div className="contact-card">
        <img src={turkey} alt="flag" />
        <div className="country-name">TURKEY</div>
        <div className="contact-content">
          25 Vas. Sofias Avenue, Athens Greece +30 694 149 9621
        </div>
      </div>
      <div className="contact-card">
        <img src={unitedkingdom} alt="flag" />
        <div className="country-name">UNITED KINGDOM</div>
        <div className="contact-content">
          25 Vas. Sofias Avenue, Athens Greece +30 694 149 9621
        </div>
      </div>
      <div className="contact-card">
        <img src={Ireland} alt="flag" />
        <div className="country-name">IRELAND</div>
        <div className="contact-content">
          25 Vas. Sofias Avenue, Athens Greece +30 694 149 9621
        </div>
      </div>
      <div className="contact-card">
        <img src={dubai} alt="flag" />
        <div className="country-name">DUBAI,UAE</div>
        <div className="contact-content">
          25 Vas. Sofias Avenue, Athens Greece +30 694 149 9621
        </div>
      </div>
      <div className="contact-card">
        <img src={canada} alt="flag" />
        <div className="country-name">CANADA</div>
        <div className="contact-content">
          25 Vas. Sofias Avenue, Athens Greece +30 694 149 9621
        </div>
      </div>
      <div className="contact-card">
        <img src={india} alt="flag" />
        <div className="country-name">DELHI,INDIA</div>
        <div className="contact-content">
          25 Vas. Sofias Avenue, Athens Greece +30 694 149 9621
        </div>
      </div>
    </div>
  );
};

export default Contacts;
