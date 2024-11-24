import NumberTicker from "@/components/magicui/number-ticker";
import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection.jsx";


const TeamOverview = ({data,headerStyle}) => {
    return (
        <AnimatedSection>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-4 sm:py-6 md:py-6 md:pt-8">
                <div className="">
                    <img src="/images/about/team-overview.png" alt="team-overview"/>
                </div>
                <div className=" space-y-8">
                    <h3 className={`md:text-start text-center ${headerStyle ?? 'heading2'}`}>
                        {data.title ?? ''} <span className="text-gradiant">{data.title_highlight}</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-4 justify-items-start md:gap-8 font-medium">
                        {data.sections.map((section) => (
                            <div key={section.id} className="space-y-2">
                                <h4 className="text-center heading2">
                                    <NumberTicker value={section.year || section.value}
                                                  isYear={!!section.year}/>{section.value ? "+" : ''}
                                </h4>
                                <p className="description text-center">{section.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
};

export default TeamOverview;
