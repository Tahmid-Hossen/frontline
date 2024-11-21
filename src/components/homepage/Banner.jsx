import React from 'react';
import {Link} from "react-router-dom";

const Banner = () => {
  return (
    <div>
        <section className="banner">
          <div className="container">
            <div className="block md:flex justify-between align-items-center flex-wrap">
              <div className="banner-content-left md:w-[50%]">
                <h1 className="font-bold text-[48px] font-arial mt-12 mb-4">
                  WE ARE <br/>
                  <span className="text-[#46266A]">FRONTLINE</span>
                </h1>
                <p className="text-sm font-arial font-normal">
                  Lorem ipsum dolor sit amet consectetur. Nisl rhoncus ut leo elit elit semper nibh nullam. Nisl nisi
                  vitae neque enim nunc tempus ornare. Sit at vestibulum mi blandit at erat ac facilisis. Arcu tortor
                  risus ipsum varius mauris blandit enim. Diam et.
                </p>
                  <Link to="/contact-us"
                        className="inline-flex items-center justify-center h-[40px] btn bg-[#46266A] text-white border rounded-full btn-sm my-5">
                    Contact Us
                  </Link>
              </div>
              <div className="banner-content-right md:w-[50%]">
                <img src="/images/banner-image.png" height={425} width={745} alt="logo"
                     className="w-[745px] md:h-auto"/>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Banner;