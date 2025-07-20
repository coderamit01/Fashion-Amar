import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-slate-900 py-2">
      <div className="fashion-container">
        <p className="text-sm font-inter text-slate-200 text-center mb-0">© Copyright 2025 All Rights Reserved</p>
        <p className="text-sm font-inter text-slate-200 text-center mb-0">Developed by <Link to="/">Amit</Link></p>
      </div>
    </div>
  );
};

export default Footer;