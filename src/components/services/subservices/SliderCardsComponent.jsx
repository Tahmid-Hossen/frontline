import React from 'react';
import Marquee from "@/components/magicui/marquee";
import ImageComponent from "@/components/common/ImageComponent";

const SliderCardsComponent = ({
                                  minWidth,
                                  minHeight,
                                  padding,
                                  border,
                                  imageWidth,
                                  imageHeight,
                                  titleStyle,
                                  shadow,
                                  data,
                                  colNumber
                              }) => {
    // Fixing incorrect length reference by using data.cards_list
    const firstRow = data?.cards_list?.slice(0, Math.ceil(data.cards_list?.length / 2));
    const secondRow = data?.cards_list?.slice(Math.ceil(data.cards_list?.length / 2));
    return (
        <div className="flex flex-col items-center justify-center">
            {/* Title and Description */}
            <div className="text-center space-y-9">
                <h2 className="text-center heading2">
                    {data?.title || ""}
                    <span className="heading2 text-primary">
                        {data?.title_highlight || ""}
                    </span>
                </h2>
                <p className="text-center description">
                    {data?.description || ""}
                </p>
            </div>
            {/* Cards Grid */}
            <div className="relative w-full overflow-hidden flex flex-col items-center justify-center">
                {/* First Row Marquee */}
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow?.map((item) => (
                        <div
                            key={item.id}
                            className={`${minWidth ?? ''} ${minHeight ?? ''} ${padding ?? ''} ${border ?? ''} ${shadow ?? ''} rounded-lg flex flex-col justify-center items-center text-center`}
                        >
                            {/* Image */}
                            <ImageComponent
                                imagePath={item.icon}
                                defaultPath={'/images/default/default-card.png'}
                                name={item.title || `icon${item.id}`}
                                imageStyle={"mx-auto w-auto h-10"}
                                imageWidth={imageWidth ?? 60}
                                imageHeight={imageHeight ?? 60}
                            />
                            {/* Title and Description */}
                            <div>
                                <h4 className={titleStyle || "text-base leading-8"}>
                                    {item.title || ""}
                                </h4>
                                <p className="text-base leading-8">
                                    {item.description || ""}
                                </p>
                            </div>
                        </div>
                    ))}
                </Marquee>

                {/* Second Row Marquee */}
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow?.map((item) => (
                        <div
                            key={item.id}
                            className={`${minWidth} ${minHeight} ${padding} ${border} ${shadow} rounded-lg flex flex-col justify-center items-center text-center`}
                        >
                            {/* Image */}
                            <ImageComponent
                                imagePath={item.icon}
                                defaultPath={'/images/default/default-card.png'}
                                name={item.title || `icon${item.id}`}
                                imageStyle={"mx-auto w-auto h-10"}
                                imageWidth={imageWidth ?? 60}
                                imageHeight={imageHeight ?? 60}
                            />
                            {/* Title and Description */}
                            <div>
                                <h4 className={titleStyle || "text-base leading-8"}>
                                    {item.title || ""}
                                </h4>
                                <p className="text-base leading-8">
                                    {item.description || ""}
                                </p>
                            </div>
                        </div>
                    ))}
                </Marquee>

                {/* Gradient Background for Left and Right */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </div>
    );
};

export default SliderCardsComponent;
