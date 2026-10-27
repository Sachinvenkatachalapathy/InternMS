import { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Registration OTP.css';
import { Brand } from '../Components-Resuable/Internship';
import illustration from '../assets/Dashboard/Registration-OTP-Illustration.png';
import shield from '../assets/Dashboard/Registration-OTP-Shield.png';
import arrow from '../assets/Dashboard/Registration-OTP-Arrow.png';
import backIcon from '../assets/Dashboard/Registration-OTP-Back.png';

export function RegistrationOTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [errors, setErrors] = useState({});
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const nextOtp = [...otp];
    nextOtp[index] = value;
    setOtp(nextOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};
    if (otp.join('').length !== 6) {
      nextErrors.verificationCode = 'Please enter the 6-digit verification code *';
    }
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      const registration = location.state?.registration;
      const verifyField = location.state?.verifyField;
      if (registration && (verifyField === 'email' || verifyField === 'phone')) {
        navigate('/intern-registration', {
          state: {
            registration: {
              ...registration,
              emailVerified: verifyField === 'email' ? true : Boolean(registration.emailVerified),
              phoneVerified: verifyField === 'phone' ? true : Boolean(registration.phoneVerified),
            },
          },
        });
        return;
      }
      navigate('/intern-registration');
    }
  };

  return (
    <div className="ims-reg-otp-page">
      <div className="ims-reg-otp-inner">
        <section className="ims-reg-otp-left">
          <Brand />

          <div className="ims-reg-otp-intro">
            <div className="ims-reg-otp-copy">
              <h2 className="ims-reg-otp-title">
                Verify your student email to
                <br />
                activate your account
              </h2>
              <p className="ims-reg-otp-lead">
                Verify your institutional credentials to gain access to
                accredited corporate
                <br />
                internships, Dean-approved academic credits, and top-tier
                mentorship programs.
              </p>
            </div>
          </div>

          <div className="ims-reg-otp-art-wrap">
            <img
              src={illustration}
              alt="Student verifying an email"
              className="ims-reg-otp-art"

            />
            <div className="ims-reg-otp-card-wrap">
              <div className="ims-reg-otp-card">
                <div className="ims-reg-otp-shield-wrap">
                  <img
                    src={shield}
                    alt=""
                    className="ims-reg-otp-shield"

                  />
                </div>
                <div className="ims-reg-otp-card-copy">
                  <strong className="ims-reg-otp-quote">
                    “Institutional email verification secures university credit
                    transfer and immediate eligibility for Fortune 500
                    placements.”
                  </strong>
                  <p className="ims-reg-otp-quote-by">
                    Academic Partnerships Office{' '}
                    <span className="ims-reg-otp-quote-meta">— Verified University Gateway</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ims-reg-otp-right">
          <div className="ims-reg-otp-form-wrap">
            <div className="ims-reg-otp-head">
              <h2 className="ims-reg-otp-heading">Enter Verification Code</h2>
              <p className="ims-reg-otp-sub">
                We've sent a 6-digit code to your registered Email and phone
                number. The code will expire{' '}
                <span className="ims-reg-otp-expire">09:59</span> minutes.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="ims-reg-otp-codes">
                {otp.map((digit, index) => (
                  <input
                    key={index}

                    ref={(element) => {
                      inputRefs.current[index] = element;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    aria-label={`Digit ${index + 1}`}
                    onChange={(event) => handleChange(event.target.value, index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className={
                      errors.verificationCode
                        ? 'ims-reg-otp-digit ims-reg-otp-invalid'
                        : 'ims-reg-otp-digit'
                    }
                  />
                ))}
              </div>

              {errors.verificationCode && (
                <p className="ims-reg-otp-error">
                  {errors.verificationCode}
                </p>
              )}

              <button type="submit" className="ims-reg-otp-submit">
                Verify and Continue
                <img
                  src={arrow}
                  alt=""
                  className="ims-reg-otp-arrow"

                />
              </button>

              <div className="ims-reg-otp-resend">
                <span className="ims-reg-otp-resend-text">
                  Didn't receive the code?
                </span>
                <button type="button" className="ims-reg-otp-resend-btn">Resend</button>
                <span className="ims-reg-otp-timer">(in00:55)</span>
              </div>
            </form>

            <div className="ims-reg-otp-back">
              <img
                src={backIcon}
                alt=""
                className="ims-reg-otp-back-icon"

              />
              <span className="ims-reg-otp-back-text">
                Back to verification options
              </span>
            </div>

            <div className="ims-reg-otp-support">
              <Link to="/contact-support" className="ims-reg-otp-support-link">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
