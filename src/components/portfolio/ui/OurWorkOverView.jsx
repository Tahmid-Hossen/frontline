import React from 'react';
import DOMPurify from "dompurify";
import {Button} from "@/components/ui/button.jsx";
import { MdOutlineFileDownload } from "react-icons/md";


const OurWorkOverView = ({overview,isButton,isImage}) => {
    const sanitizedDescription = DOMPurify.sanitize(overview?.description || '');
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12 my-12">
            {/* Second div with the image */}
            <div className="">
                {
                    isImage ? (
                        <img
                            className="rounded-xl shadow-lg object-cover"
                            src={overview?.image || `/images/services/sub-services/overview/overview.png`}
                            alt={overview?.title || 'overview'}
                            width={463}
                            height={463}
                        />
                    ) : (
                        <h1 className="heading2 md:w-[463px]">
                            {overview?.subTitle ?? ''}
                        </h1>
                    )
                }
            </div>
            {/* First div with title, description, and button */}
            <div className="flex-1 space-y-6 text-black">
                <h1 className="heading2">
                    {overview?.title ?? ''}
                </h1>
                {sanitizedDescription && (
                    <p className="description" dangerouslySetInnerHTML={{__html: sanitizedDescription}}/>
                )}
                {
                    isButton && (
                        <Button
                            className="min-w-[100px] md:min-w-[212px] min-h-[40px] text-base font-medium rounded-full px-5 flex items-center justify-center">
                            Download PDF <MdOutlineFileDownload size={22} />
                        </Button>
                    )
                }

            </div>
        </div>
    );
};

export default OurWorkOverView;