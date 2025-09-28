import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <div className="py-12 bg-slate-50">
        <div className="fashion-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="space-y-3">
              <h2 className="text-3xl font-brand font-bold"><a href="/" data-discover="true">Amar<span className="text-brand">Bazar</span></a></h2>
              <p className="font-brand text-base text-slate-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, tempore! Exercitationem eius nemo aperiam quis quisquam iure odit doloribus.</p>
            </div>
            <div className="">
              <h5 className="font-brand text-xl font-semibold text-slate-900 capitalize">Pages</h5>
              <div className="flex flex-col space-y-1 pt-3">
                <Link className="font-brand text-base text-slate-900 capitalize" to="/">Page1</Link>
                <Link className="font-brand text-base text-slate-900 capitalize" to="/">Page2</Link>
                <Link className="font-brand text-base text-slate-900 capitalize" to="/">Page3</Link>
                <Link className="font-brand text-base text-slate-900 capitalize" to="/">Page4</Link>
              </div>
            </div>
            <div className="">
              <h5 className="font-brand text-xl font-semibold text-slate-900 capitalize">Useful Links</h5>
              <div className="flex flex-col space-y-1 pt-3">
                <Link className="font-brand text-base text-slate-900 capitalize" to="/">Page1</Link>
                <Link className="font-brand text-base text-slate-900 capitalize" to="/">Page2</Link>
                <Link className="font-brand text-base text-slate-900 capitalize" to="/">Page3</Link>
                <Link className="font-brand text-base text-slate-900 capitalize" to="/">Page4</Link>
              </div>
            </div>
            <div className="">
              <h5 className="font-brand text-xl font-semibold text-slate-900 capitalize">Contact Us</h5>
              <div className="flex flex-col space-y-1 pt-3">
                <Link className="font-brand text-base text-slate-900 capitalize" to="/">Page1</Link>
                <Link className="font-brand text-base text-slate-900 capitalize" to="/">Page2</Link>
                <Link className="font-brand text-base text-slate-900 capitalize" to="/">Page3</Link>
                <Link className="font-brand text-base text-slate-900 capitalize" to="/">Page4</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 py-2">
        <div className="fashion-container">
          <p className="text-sm font-inter text-slate-200 text-center mb-0">
            © Copyright 2025 All Rights Reserved
          </p>
          <p className="text-sm font-inter text-slate-200 text-center mb-0">
            Developed by <Link to="/">Amit</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
