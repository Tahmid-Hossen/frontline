import React from 'react';
import GridSlider from "@/components/sliders/GridSlider/GridSlider";
import CommonSlider from "@/components/sliders/CommonSlider/CommonSlider";

const Achievements = ({data}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <div className="space-y-3 text-center">
                <h1 className={`heading1 text-center`}>
                    {data?.title || ''} <span className="text-gradiant">{data?.title_highlight || ''}</span>
                </h1>
                <p className="description text-center">{data?.description || ''}</p>
            </div>
            <CommonSlider data={data?.achievementsData}/>
        </div>
    );
};

export default Achievements;