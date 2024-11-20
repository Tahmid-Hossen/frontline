"use client"
import React, {useEffect, useState} from 'react';
import AnimatedCircularProgressBar from "@/components/magicui/animated-circular-progress-bar";

const AnimatedSpinner = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const handleIncrement = (prev) => {
            if (prev === 100) {
                return 0;
            }
            return prev + 10;
        };
        setValue(handleIncrement);
        const interval = setInterval(() => setValue(handleIncrement), 300);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className="container min-h-[calc(100vw/3)] flex self-center items-center justify-center">
                <AnimatedCircularProgressBar
                    max={100}
                    min={0}
                    value={value}
                    className={""}
                    gaugePrimaryColor="rgba(1, 115, 255, 1)"
                    gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                />
            </div>
        </>
    );
};

export default AnimatedSpinner;