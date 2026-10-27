import './Internship.css';
import logo from '../assets/Dashboard/Logo.png';

export function Brand() {
  return (
    <div className="ims-brand">
      <img className="ims-brand-logo" src={logo} alt="Internship Management System" />
      <div className="ims-brand-text">
        <h3 className="ims-brand-title">Internship Management System</h3>
        <p className="ims-brand-tagline">
          Learn <span className="ims-brand-dot"></span> Grow <span className="ims-brand-dot"></span> Build Your Future
        </p>
      </div>
    </div>
  );
}
