import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forget Password.css';
import graduationcap from '../assets/Login/Forgotcap.png';
import illustration from '../assets/Login/Forgotart.png';
import shield from '../assets/Login/Shield.png';
import lockreset from '../assets/Login/Lockreset.png';
import emailIcon from '../assets/Login/Dropdown.png';
import phone from '../assets/Login/Phone.png';
import rightarrow from '../assets/Login/Sendarrow.png';
import backarrow from '../assets/Login/Backarrow.png';

export function ForgetPassword() {
  const navigate = useNavigate();
  const [method, setMethod] = useState('email');

  const handleSend = (e) => {
    e.preventDefault();
    navigate('/otp');
  };

  return (
    <div className="ims-forgot-page">
      <div className="ims-forgot-panel">
        <div className="ims-forgot-brand">
          <img className="ims-forgot-logo" src={graduationcap} alt="Internship Management System" />
          <div className="ims-forgot-brandtext">
            <h3 className="ims-forgot-brandname">Internship Management System</h3>
            <p className="ims-forgot-tagline">Learn <span className="ims-tagline-dot"></span> Grow <span className="ims-tagline-dot"></span> Build Your Future</p>
          </div>
        </div>

        <h1 className="ims-forgot-title">
          Secure Account Recovery &
          <br />
          Identity Protection
        </h1>
        <p className="ims-forgot-desc">
          Quickly regain access to your verified internship credentials, university approvals,
          <br />
          and active corporate placements.
        </p>

        <img className="ims-forgot-art" src={illustration} alt="Account recovery" />

        <div className="ims-forgot-note">
          <img className="ims-forgot-noteicon" src={shield} alt="shield" />
          <div className="ims-forgot-notetext">
            <p className="ims-forgot-notebody">
              All password reset requests are cryptographically signed and logged according to institutional
              FERPA &amp; SOC-2 compliance standards.
            </p>
            <p className="ims-forgot-notemeta">
              <span className="ims-forgot-protocol">
                Campus Identity &amp; Access Management (IAM) Protocol
              </span>
              <span className="ims-forgot-verified"> • Verified Institutional Security</span>
            </p>
          </div>
        </div>
      </div>

      <form className="ims-forgot-form" onSubmit={handleSend}>
        <div className="ims-forgot-lock">
          <img src={lockreset} alt="lockreset" />
        </div>

        <h2 className="ims-forgot-heading">Forgot Password?</h2>
        <p className="ims-forgot-subhead">
          Choose your preferred method to receive a one-time
          <br />
          verification code.
        </p>

        <p className="ims-forgot-label">Verification Method</p>

        <button
          type="button"
          className={`ims-forgot-method${method === 'email' ? ' ims-forgot-selected' : ''}`}
          onClick={() => setMethod('email')}
        >
          <span className="ims-forgot-methodicon">
            <img src={emailIcon} alt="emailIcon" />
          </span>
          <span className="ims-forgot-methodtext">
            <span className="ims-forgot-methodtitle">Email Verification</span>
            <span className="ims-forgot-methodinfo">a***n@g***.com</span>
          </span>
          <span className={`ims-forgot-radio${method === 'email' ? ' ims-forgot-checked' : ''}`} />
        </button>

        <button
          type="button"
          className={`ims-forgot-method${method === 'sms' ? ' ims-forgot-selected' : ''}`}
          onClick={() => setMethod('sms')}
        >
          <span className="ims-forgot-methodicon ims-forgot-phone">
            <img src={phone} alt="phone" />
          </span>
          <span className="ims-forgot-methodtext">
            <span className="ims-forgot-methodtitle">SMS / Text Message</span>
            <span className="ims-forgot-methodinfo">Send code to +91 9****5678</span>
          </span>
          <span className={`ims-forgot-radio${method === 'sms' ? ' ims-forgot-checked' : ''}`} />
        </button>

        <button type="submit" className="ims-forgot-send">
          Send Verification Code
          <img src={rightarrow} alt="rightarrow" />
        </button>

        <button type="button" className="ims-forgot-back" onClick={() => navigate('/login')}>
          <img src={backarrow} alt="backarrow" />
          Back to Login
        </button>
      </form>
    </div>
  );
}

