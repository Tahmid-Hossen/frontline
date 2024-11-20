import React from 'react';
import ImageComponent from "@/components/common/ImageComponent";

const DevelopmentServices = ({ order,minWidth, minHeight, padding, border, imageWidth, imageHeight, titleStyle, shadow, data,landscape,landscape2,landscape3 }) => {
    return (
        <div className="mt-4 md:mt-6 lg:mt-8 flex flex-col items-center justify-center gap-8">
            <div className="text-center space-y-9">
                <h2 className="text-center heading2">{data.title || ""} <span
                    className="heading2 text-gradiant">{data.title_highlight || ""}</span></h2>
                <p className="md:max-w-5xl mx-auto text-center description">{data.description || ""}</p>
            </div>
            <div className={`grid grid-cols-5 gap-16 justify-center`}>
                <div className={`col-span-5 md:col-span-3 ${order} space-y-6`}>
                    <h4 className={titleStyle || "text-start text-lg font-medium leading-normal sm:text-lg sm:leading-[26px] md:text-xl md:leading-[30px] lg:text-2xl lg:leading-[36px] xl:text-[34px] xl:leading-[39.84px]"}>{data.sub_title || ""}</h4>
                    <div className={`${minWidth} ${minHeight} ${padding} ${border} ${shadow} flex flex-col justify-center items-start gap-4 md:gap-5 text-start`}>
                        {data?.services?.map((item) => (
                            <div key={item.id} className="flex items-start justify-start gap-x-2">
                                <div className="w-[27px] h-0.5 bg-gradient-default mt-3"/>
                                <p className="text-base">{item.title || ""}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-5 md:col-span-2 relative max-w-[519px] max-h-[353px] flex justify-center justify-self-center md:justify-self-end items-center self-center mr-3">
                    <ImageComponent imagePath={data.image} defaultPath={'/images/default/default-service.png'}
                                    name={data.title || `images`}
                                    imageStyle={`z-10 mx-auto rounded-lg  object-cover`}
                                    style={{ width: `${imageWidth ?? 333}px`, height: `${imageHeight ?? 333}px` }}
                                    imageWidth={imageWidth ?? 333}
                                    imageHeight={imageHeight ?? 333}/>
                    <div style={{  width: `${(landscape || landscape2 || landscape3) ? '433px' : '333px'}`, height: `${landscape? '290px' : (landscape2 ? '310px': (landscape3 ? '235px' : '333px')) }` }} className={`hidden md:block absolute z-0 left-3.5 top-3.5 mx-auto bg-primary rounded-lg `}/>
                </div>
            </div>
        </div>
    );
};

export default DevelopmentServices;