import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reset Password.css';
import graduationcap from '../assets/Login/Forgotcap.png';
import illustration from '../assets/Login/Reset Password-illustration.png';
import shield from '../assets/Login/Shield.png';
import lockreset from '../assets/Login/Lockreset.png';
import lockIcon from '../assets/Login/Lock.png';
import shieldCheck from '../assets/Login/Shieldcheck.png';
import rightarrow from '../assets/Login/Sendarrow.png';

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const hasLength = password.length >= 8;
  const passwordsMatch = password.length > 0 && password === confirmPassword;

  const handleUpdate = (event) => {
    event.preventDefault();
    if (!password || !confirmPassword || password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    setError('');
    navigate('/reset-success');
  };

  return (
    <div className="ims-reset-page">
      <div className="ims-reset-panel">
        <div className="ims-reset-brand">
          <img className="ims-reset-logo" src={graduationcap} alt="Internship Management System" />
          <div className="ims-reset-brandtext">
            <h3 className="ims-reset-brandname">Internship Management System</h3>
            <p className="ims-reset-tagline">Learn <span className="ims-tagline-dot"></span> Grow <span className="ims-tagline-dot"></span> Build Your Future</p>
          </div>
        </div>

        <h1 className="ims-reset-title">Set a Strong Master Password</h1>
        <p className="ims-reset-desc">
          Protect your internship credentials, academic clearance records, and enterprise
          <br />
          communication channels.
        </p>

        <img className="ims-reset-art" src={illustration} alt="Set a strong master password" />

        <div className="ims-reset-note">
          <img className="ims-reset-noteicon" src={shield} alt="shield" />
          <div className="ims-reset-notetext">
            <p className="ims-reset-notebody">
              “Automated credential audit enforces strict NIST 800 63B password guidelines and institutional
              SSO policies.”
            </p>
            <p className="ims-reset-notemeta">
              <span className="ims-reset-protocol">Dr. Elena Vance</span>
              <span className="ims-reset-verified">
                {' '}
                — Dean of Experiential Education &amp; IAM Security Lead
              </span>
            </p>
          </div>
        </div>
      </div>

      <form className="ims-reset-form" onSubmit={handleUpdate}>
        <div className="ims-reset-lock">
          <img src={lockreset} alt="lockreset" />
        </div>

        <h2 className="ims-reset-heading">Set New Password</h2>
        <p className="ims-reset-subhead">
          Your new password must be different from previous
          <br />
          passwords.
        </p>

        <label className="ims-reset-label" htmlFor="ims-new-password">
          New Password
        </label>
        <div className="ims-reset-field">
          <img className="ims-reset-fieldicon" src={lockIcon} alt="lockIcon" />
          <input
            id="ims-new-password"
            type="password"
            placeholder="Min. 8 characters"
            autoComplete="new-password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError('');
            }}
          />
        </div>

        <label className="ims-reset-label" htmlFor="ims-confirm-password">
          Confirm New Password
        </label>
        <div className="ims-reset-field">
          <img className="ims-reset-fieldicon" src={shieldCheck} alt="shieldCheck" />
          <input
            id="ims-confirm-password"
            type="password"
            placeholder="Repeat your password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
              setError('');
            }}
          />
        </div>

        <div className="ims-reset-rules">
          <p className={`ims-reset-rule${hasLength ? ' ims-reset-met' : ''}`}>
            <span className="ims-reset-check" />
            At least 8 characters
          </p>
          <p className={`ims-reset-rule${passwordsMatch ? ' ims-reset-met' : ''}`}>
            <span className="ims-reset-check" />
            Passwords match
          </p>
        </div>

        {error ? <p className="ims-reset-error" role="alert">{error}</p> : null}

        <button type="submit" className="ims-reset-update">
          Update Password
          <img src={rightarrow} alt="rightarrow" />
        </button>

        <button type="button" className="ims-reset-back" onClick={() => navigate('/login')}>
          Back to Login
        </button>
      </form>
    </div>
  );
}
