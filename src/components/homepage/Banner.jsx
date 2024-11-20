import React from 'react';

const Banner = () => {
  return (
    <div>
        <section className="banner">
          <div className="container">
            <div className="flex justify-between align-items-center flex-wrap">
              <div className="banner-content-left">
                <span>
                  WE ARE FRONTLINE
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nisl rhoncus ut leo elit elit semper nibh nullam. Nisl nisi vitae neque enim nunc tempus ornare. Sit at vestibulum mi blandit at erat ac facilisis. Arcu tortor risus ipsum varius mauris blandit enim. Diam et.
                </p>
              </div>
              <div className="banner-content-right">
                <img src="/images/banner-image.png" height={425} width={745} alt="logo" className={"w-40 h-auto"}/>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Banner;