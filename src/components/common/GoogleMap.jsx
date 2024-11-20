import React from 'react';

const GoogleMap = ({width, height,style}) => {
    return (

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14607.635693972514!2d90.387744!3d23.750627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b900733627db%3A0xf0c3d6deefcbef4b!2sNexdecade%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1726983516907!5m2!1sen!2sus"
            width={`${width} ?? "100%"`}
            height={`${height ?? "200px"}`}
            className={`${style}`}
            allowFullScreen // Correctly written in JSX (camelCase)
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // Correct attribute name in JSX (camelCase)
        />
    );
};

export default GoogleMap;