import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone, FiYoutube } from "react-icons/fi";
import { Link } from "react-router";
import Logo from "../../../public/assets/images/Logo/logo.png";

const Footer = () => {

  const company = [
    { name: "About us", slug: "about-us" },
    { name: "Contact Us", slug: "contact-us" },
    { name: "Affiliate", slug: "affiliate" },
    { name: "Career", slug: "career" },
    { name: "Latest News", slug: "latest-news" }
  ];
  const category = [
    { name: "Men’s Fashion", slug: "mens-fashion" },
    { name: "Denim Collection", slug: "denim-collection" },
    { name: "Western Wear", slug: "wetern-wear" },
    { name: "Sport Wear", slug: "sport-wear" },
    { name: "Fashion Jewellery", slug: "fashion-jewellery" },
  ];
  const quickLinks = [
    { name: "Privacy Ploicy", slug: "privacy-ploicy" },
    { name: "Terms and Condition", slug: "terms-condition" },
    { name: "Return Policy", slug: "return-policy" },
    { name: "FAQ's", slug: "faq" },
    { name: "Become a Vendor", slug: "become-vendor" },
  ];


  return (
    <div>
      <div className="py-10 md:py-15 bg-slate-50">
        <div className="fashion-container">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6 lg:col-span-3 space-y-3">
              <Link to="/"><img src={Logo} alt="Logo" className="w-[120px] mb-2" /></Link>
              <p className="font-brand text-base text-slate-900">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, tempore! Exercitationem eius nemo aperiam quis quisquam iure odit doloribus.</p>
              <div className="flex items-center gap-3">
                <Link className="border border-slate-300 p-3 rounded-full" to="#"><FiFacebook className="text-lg" /></Link>
                <Link className="border border-slate-300 p-3 rounded-full" to="#"><FiLinkedin className="text-lg" /></Link>
                <Link className="border border-slate-300 p-3 rounded-full" to="#"><FiInstagram className="text-lg" /></Link>
                <Link className="border border-slate-300 p-3 rounded-full" to="#"><FiYoutube className="text-lg" /></Link>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <h5 className="font-brand text-xl font-semibold text-slate-900 capitalize">Company</h5>
              <div className="flex flex-col space-y-1 pt-3">
                {
                  company.map((item,idx) => (
                    <Link to={item.slug} key={idx} className="font-brand text-base text-slate-900 capitalize">{item.name}</Link>
                  ))
                }
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 lg:col-span-2">
              <h5 className="font-brand text-xl font-semibold text-slate-900 capitalize">Category</h5>
              <div className="flex flex-col space-y-1 pt-3">
                {
                  category.map((item,idx) => (
                    <Link to={item.slug} key={idx} className="font-brand text-base text-slate-900 capitalize" >{item.name}</Link>
                  ))
                }
              </div>
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-2">
              <h5 className="font-brand text-xl font-semibold text-slate-900 capitalize">Quick Links</h5>
              <div className="flex flex-col space-y-1 pt-3">
                {
                  quickLinks.map((item,idx) => (
                    <Link to={item.slug} key={idx} className="font-brand text-base text-slate-900 capitalize">{item.name}</Link>
                  ))
                }
              </div>
            </div>
            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <h5 className="font-brand text-xl font-semibold text-slate-900 capitalize">Contact Us</h5>
              <div className="flex flex-col space-y-2 pt-3">
                <div className="flex items-start gap-2">
                  <span className="w-5 mt-1"><FiPhone className="text-lg w-5" /></span>
                  <Link className="text-base" to="to:01315252479">01311123210</Link>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 mt-1"><FiMail className="text-lg w-5" /></span>
                  <Link className="text-base" to="mailto:fashion@amar.com">fashion@amar.com</Link>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 mt-1"><FiMapPin className="text-lg" /></span>
                  <span className="text-base">5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 py-4">
        <div className="fashion-container">
          <div className="flex items-center justify-between">
            <p className="text-sm font-inter text-slate-200 text-center mb-1">
            © Copyright 2025 All Rights Reserved
          </p>
          <p className="text-sm font-inter text-slate-200 text-center mb-0">
            Developed by <Link to="/">Amit</Link>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
