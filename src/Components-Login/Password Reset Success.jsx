import { useNavigate } from 'react-router-dom';
import './Password Reset Success.css';
import graduationcap from '../assets/Login/Forgotcap.png';
import illustration from '../assets/Login/Password Reset Success-illustration.png';
import shield from '../assets/Login/Shield.png';
import recovery from '../assets/Login/Recovery.png';

export const PasswordResetSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="ims-success-page">
      <div className="ims-success-panel">
        <div className="ims-success-brand">
          <img className="ims-success-logo" src={graduationcap} alt="Internship Management System" />
          <div className="ims-success-brandtext">
            <h3 className="ims-success-brandname">Internship Management System</h3>
            <p className="ims-success-tagline">Learn <span className="ims-tagline-dot"></span> Grow <span className="ims-tagline-dot"></span> Build Your Future</p>
          </div>
        </div>

        <h1 className="ims-success-title">
          Account Secured &amp; Access
          <br />
          Restored
        </h1>
        <p className="ims-success-desc">
          Quickly regain access to your verified internship credentials, university approvals,
          <br />
          and active corporate placements.
        </p>

        <img className="ims-success-art" src={illustration} alt="Account secured" />

        <div className="ims-success-note">
          <img className="ims-success-noteicon" src={shield} alt="shield" />
          <div className="ims-success-notetext">
            <p className="ims-success-notebody">
              “Credential change verified across university registrars, Dean approvals, and enterprise partner portals.”
            </p>
            <p className="ims-success-notemeta">
              <span className="ims-success-protocol">Enterprise IAM &amp; Security Operations</span>
              <span className="ims-success-verified"> — Zero Trust Protocol Active</span>
            </p>
          </div>
        </div>
      </div>

      <div className="ims-success-form">
        <div className="ims-success-mark" aria-hidden="true" />

        <p className="ims-success-status">
          <img src={recovery} alt="recovery" />
          Recovery Completed • 256-Bit Encrypted
        </p>

        <h2 className="ims-success-heading">Password Reset Successful!</h2>
        <p className="ims-success-copy">
          Your account credentials have been securely updated. All active enterprise and university
          sessions have been refreshed.
        </p>

        <button type="button" className="ims-success-login" onClick={() => navigate('/login')}>
          Back to Login
        </button>
      </div>
    </div>
  );
}
