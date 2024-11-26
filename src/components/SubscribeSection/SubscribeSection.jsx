import React from 'react';
import AnimatedSection from "@/components/common/AnimatedSection.jsx";

const SubscribeSection = ({title,item1, item2,item3}) => {
    return (
        <AnimatedSection>
            <section className="py-10 px-5 text-center">
                <div className="mx-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] xl:leading-[45px] font-bold mb-6">{title?? ''}</h2>
                    <ul className="flex flex-wrap justify-center gap-4 mb-6">
                        <li className="flex items-center space-x-2">
                            <span className="text-green-500">✔</span>
                            <span className="text-gray-700">{item1 ?? ''}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-green-500">✔</span>
                            <span className="text-gray-700">{item2 ?? ''}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-green-500">✔</span>
                            <span className="text-gray-700">{item3 ?? ''}</span>
                        </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter Business Email"
                            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-main focus:outline-none"
                        />
                        <button
                            className="px-6 py-2 bg-main text-white font-medium rounded-md hover:bg-main transition-all duration-200">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
};

export default SubscribeSection;