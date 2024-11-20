import React from 'react';

const Banner = () => {
  return (
    <div>
        <section className="banner">
          <div className="container">
            <div className="flex justify-between align-items-center flex-wrap">
              <div className="banner-content-left w-[50%]">
                <h1 className="font-bold text-[48px] font-arial mt-12 mb-4">
                  WE ARE <br/>
                  <span className="text-[#46266A]">FRONTLINE</span>
                </h1>
                <p className="text-sm font-arial font-normal">
                  Lorem ipsum dolor sit amet consectetur. Nisl rhoncus ut leo elit elit semper nibh nullam. Nisl nisi vitae neque enim nunc tempus ornare. Sit at vestibulum mi blandit at erat ac facilisis. Arcu tortor risus ipsum varius mauris blandit enim. Diam et.
                </p>
              </div>
              <div className="banner-content-right w-[50%]">
                <img src="/images/banner-image.png" height={425} width={745} alt="logo" className={"w-40 h-auto"}/>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Banner;