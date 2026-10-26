import './Login Internship.css';
import logo from '../assets/Dashboard/Logo.png';

export function Brand() {
  return (
    <div className="ims-brand" id="ims-brand">
      <img className="ims-brand-logo" id="ims-brand-logo" src={logo} alt="Internship Management System" />
      <div className="ims-brand-text" id="ims-brand-text">
        <h3 className="ims-brand-title" id="ims-brand-title">Internship Management System</h3>
        <p className="ims-brand-tagline" id="ims-brand-tagline">
          Learn <span className="ims-brand-dot" id="ims-brand-dot-grow"></span> Grow <span className="ims-brand-dot" id="ims-brand-dot-build"></span> Build Your Future
        </p>
      </div>
    </div>
  );
}
