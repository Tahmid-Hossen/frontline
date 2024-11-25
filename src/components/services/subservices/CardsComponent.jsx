import ImageComponent from "@/components/common/ImageComponent";
import {cn} from "@/lib/utils";

const CardsComponent = ({
                            componentsBackground,
                            minWidth,
                            minHeight,
                            padding,
                            border,
                            imageWidth,
                            imageHeight,
                            imageStyle,
                            titleStyle,
                            shadow,
                            data,
                            colNumber,
                            gridBaseCol,
                            descriptionStyle
                        }) => {
    return (
        <div className={`pt-6 md:pt-8 lg:pt-10 flex flex-col items-center justify-center gap-7 ${componentsBackground ?? ''}`}>
            {/* Title and Description */}
            {data?.title && (
                <div className="text-center">
                    <h2 className="text-center heading2">
                        {data.title ?? ""}{" "}
                        <span className="heading2 text-gradiant">
                        {data.title_highlight ?? ""}
                    </span>
                    </h2>
                    <p className="text-center description mt-6">{data.description ?? ""}</p>
                </div>
            )}
            {/* Cards Grid */}
            <div
                className={cn(`grid  ${gridBaseCol === 2 ? 'grid-cols-2'  :'grid-cols-1'} ${colNumber === 6 ? 'md:grid-cols-4 lg:grid-cols-6' : (colNumber === 5 ? 'md:grid-cols-2 lg:grid-cols-5' : (colNumber === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : (colNumber === 3.5 ? '!grid-cols-4 lg:grid-cols-4': 'md:grid-cols-3 lg:grid-cols-4')))} gap-8 justify-center mx-auto`)}>
                {data?.cards_list?.map((item,index) => (
                    <div
                        key={index}
                        className={`${minWidth} ${minHeight} ${padding} ${border} ${shadow} rounded-lg flex flex-col justify-center items-center gap-4 text-center`}>
                        {/* Image */}
                        <ImageComponent
                            imagePath={item.icon}
                            defaultPath={'/images/default/default-card.png'}
                            name={item.title || `icon${item.id}`}
                            imageStyle={`${imageStyle} mx-auto`}
                            imageWidth={imageWidth ?? 60}
                            imageHeight={imageHeight ?? 60}
                        />
                        {/* Title and Description */}
                        <div>
                            <h4 className={titleStyle || "text-base leading-8"}>{item.title || ""}</h4>
                            <p className={`${descriptionStyle ?? ' text-base leading-8 text-justify'}`}>{item.description || ""}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardsComponent;
