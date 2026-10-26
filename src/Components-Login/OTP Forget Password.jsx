import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OTP Forget Password.css';
import graduationcap from '../assets/Login/Otpcap.png';
import illustration from '../assets/Login/Otpart.png';
import shield from '../assets/Login/Shield.png';
import lock from '../assets/Login/Encrypted.png';
import handshake from '../assets/Login/Handshake.png';
import rightarrow from '../assets/Login/Sendarrow.png';
const CODE_LENGTH = 6;


export function OtpForgetPassword() {
  const navigate = useNavigate();
  const inputs = useRef([]);
  const [digits, setDigits] = useState(() => Array(CODE_LENGTH).fill(''));
  const [seconds, setSeconds] = useState(55);
  const [error, setError] = useState('');

  useEffect(() => {
    if (seconds <= 0) return undefined;
    const timer = setTimeout(() => setSeconds((value) => value - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const clock = `00:${String(seconds).padStart(2, '0')}`;

  const updateDigit = (index, value) => {
    const next = digits.slice();
    next[index] = value;
    setDigits(next);
    setError('');
  };

  const handleChange = (index, event) => {
    const value = event.target.value.replace(/\D/g, '').slice(-1);
    updateDigit(index, value);
    if (value && index < CODE_LENGTH - 1) inputs.current[index + 1].focus();
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handlePaste = (event) => {
    const text = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, CODE_LENGTH);
    if (!text) return;
    event.preventDefault();
    const next = Array(CODE_LENGTH).fill('');
    text.split('').forEach((char, index) => {
      next[index] = char;
    });
    setDigits(next);
    setError('');
    inputs.current[Math.min(text.length, CODE_LENGTH) - 1].focus();
  };

  const handleVerify = (event) => {
  event.preventDefault();
  const code = digits.join('');
  if (code.length !== CODE_LENGTH || digits.some((d) => d === '')) {
    setError('Please enter all 6 digits.');
    return;
  }
  setError('');
  navigate('/reset-password');
};

  return (
    <div className="ims-otp-page">
      <div className="ims-otp-panel">
        <div className="ims-otp-brand">
          <img className="ims-otp-logo" src={graduationcap} alt="Internship Management System" />
          <div className="ims-otp-brandtext">
            <h3 className="ims-otp-brandname">Internship Management System</h3>
            <p className="ims-otp-tagline">Learn <span className="ims-tagline-dot"></span> Grow <span className="ims-tagline-dot"></span> Build Your Future</p>
          </div>
        </div>

        <h1 className="ims-otp-title">
          Verify Identity &amp; Enter
          <br />
          Security Code
        </h1>
        <p className="ims-otp-desc">
          A 6-digit one-time password has been transmitted to your registered
          <br />
          institutional credentials.
        </p>

        <img className="ims-otp-art" src={illustration} alt="Identity verification" />

        <div className="ims-otp-note">
          <img className="ims-otp-noteicon" src={shield} alt="shield" />
          <div className="ims-otp-notetext">
            <p className="ims-otp-notebody">
              “Credential change verified across university registrars, Dean approvals, and enterprise partner portals.”
            </p>
            <p className="ims-otp-notemeta">
              <span className="ims-otp-protocol">Enterprise IAM &amp; Security Operations</span>
              <span className="ims-otp-verified"> — Zero Trust Protocol Active</span>
            </p>
          </div>
        </div>
      </div>

      <form className="ims-otp-form" onSubmit={handleVerify}>
        <h2 className="ims-otp-heading">Enter Verification Code</h2>
        <p className="ims-otp-subhead">
          We’ve sent a 6-digit code to your registered Email and phone number. The code
          <br />
          will expire in <span className="ims-otp-expire">09:59</span> minutes.
        </p>

        <div className="ims-otp-codes">
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(node) => {
                inputs.current[index] = node;
              }}
              className="ims-otp-digit"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={1}
              value={digit}
              aria-label={`Digit ${index + 1}`}
              onChange={(event) => handleChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              onPaste={handlePaste}
            />
          ))}
        </div>

        {error ? (
          <p className="ims-otp-error" role="alert">
            {error}
          </p>
        ) : null}

        <button type="submit" className="ims-otp-verify">
          Verify and Continue
          <img src={rightarrow} alt="rightarrow" />
        </button>

        <p className="ims-otp-resend">
          <span className="ims-otp-prompt">Didn’t receive the code?</span>
          <button type="button" className="ims-otp-link" onClick={() => setSeconds(55)}>
            Resend
          </button>
          <span className="ims-otp-timer">(in {clock})</span>
        </p>

        <div className="ims-otp-divider" />

        <div className="ims-otp-badges">
          <span className="ims-otp-badge">
            <img className="ims-otp-badgeicon" src={lock} alt="lock" />
            End-to-end encrypted
          </span>
          <span className="ims-otp-badge">
            <img className="ims-otp-badgeicon" src={handshake} alt="handshake" />
            Secure handshake
          </span>
        </div>
      </form>
    </div>
  );
}
