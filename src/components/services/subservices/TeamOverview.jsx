import NumberTicker from "@/components/magicui/number-ticker";
import React from "react";


const TeamOverview = ({data,headerStyle}) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-4 sm:py-6 md:py-8 md:pt-12">
            <h3 className={`md:text-start text-center ${headerStyle ?? 'heading2'}`}>
                {data.title} <span className="text-gradiant">{data.title_highlight}</span>
            </h3>
            <div className="grid grid-cols-2 gap-4 justify-items-center md:gap-8 font-medium">
                {data.sections.map((section) => (
                    <div key={section.id} className="space-y-2">
                        <h4 className="text-center heading2">
                            <NumberTicker value={section.year || section.value} isYear={!!section.year} />{section.value? "+" :''}
                        </h4>
                        <p className="description text-center">{section.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamOverview;
