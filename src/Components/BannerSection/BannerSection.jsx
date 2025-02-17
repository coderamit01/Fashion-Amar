import { useEffect, useState } from "react";
import Banner from "./Banner";


const BannerSection = () => {
  const [banners,setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('/public/data/banner.json');
        const data = await response.json();
        setBanners(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        banners.map((banner) => (<Banner key={banner.id} banner={banner} />))
      }
      {console.log(banners)}
    </div>
  );
};

export default BannerSection;