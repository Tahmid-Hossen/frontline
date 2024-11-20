import React from 'react';

const Features = ({data}) => {
    function getColorByIndex(index){
        const colorMap = [
            'bg-custom-blue',   // 1
            'bg-custom-pink',   // 2
            'bg-custom-green',  // 3
            'bg-custom-pink2', // 4
            'bg-custom-green2',   // 5
            'bg-rose-100',   // 6
            'bg-pink-200',   // 7
            'bg-green-200',  // 8
            'bg-purple-200', // 9
            'bg-blue-200',   // 10
        ];

        return colorMap[index % colorMap.length];
    }
    return (
        <div className="bg-[#EEF8FF]">
            <div className="container mx-auto py-12">
                {/* Title and Description */}
                <div className="text-center space-y-9">
                    <h2 className="text-center heading2">
                        {data.title || ""}
                        <span className="heading2 text-primary">
                        {data.title_highlight || ""}
                    </span>
                    </h2>
                    <p className="text-center description">{data.description || ""}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[34px] mt-10">
                    {data?.features_list?.map((feature, index) => (
                        <div
                            className="flex items-center gap-6"
                            key={index}
                        >
                            <div className={`${getColorByIndex(index)} flex items-center justify-center w-10 h-10 p-3 text-black rounded-full text-base`}>
                                {index + 1}
                            </div>
                            <p className="description">{feature?.title || ''}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
