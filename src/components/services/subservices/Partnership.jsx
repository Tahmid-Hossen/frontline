import GridSliderPartnerShip from "@/components/sliders/GridSlider/GridSliderPartnerShip.jsx";


const partnerships = [
    {
        name: "Salman Muqtadir",
        platform: "Facebook and Instagram",
        followerCount: "13,00,000",
        contentNiche: "Fashion, Urban Street-style",
        typeOfCollaboration:
            "sponsored posts, product reviews, giveaways, affiliate marketing, etc.",
        previousCampaigns: [
            "Sponsored posts with Zara Bangladesh",
            "Brand ambassadorship with ShowOff",
            "Product reviews for Adidas Bangladesh",
        ],
        services: [
            "Sponsored Facebook Posts",
            "Affiliate Marketing Links",
            "Sponsored YouTube Videos",
        ],
        profilePicture: "/images/services/sub-services/our-partners/salman.png",
    },
    {
        name: "Nusrat Faria",
        platform: "Instagram, YouTube",
        followerCount: "6,340,000",
        contentNiche: "Fashion, Beauty, Lifestyle",
        typeOfCollaboration:
            "sponsored posts, product reviews, giveaways, affiliate marketing, etc.",
        previousCampaigns: [
            "Sponsored posts with Zara Bangladesh",
            "Brand ambassadorship with ShowOff",
            "Product reviews for Adidas Bangladesh",
        ],
        services: [
            "Sponsored Facebook Posts",
            "Affiliate Marketing Links",
            "Sponsored YouTube Videos",
        ],
        profilePicture: "/images/services/sub-services/our-partners/nusrat.png",
    },
    {
        name: "Fahrin Zannat",
        platform: "YouTube, Facebook",
        followerCount: "6,340,000",
        contentNiche: "Food, Life-style",
        typeOfCollaboration:
            "sponsored posts, product reviews, giveaways, affiliate marketing, etc.",
        previousCampaigns: [
            "Sponsored posts with Zara Bangladesh",
            "Brand ambassadorship with ShowOff",
            "Product reviews for Adidas Bangladesh",
        ],
        services: [
            "Sponsored Facebook Posts",
            "Affiliate Marketing Links",
            "Sponsored YouTube Videos",
        ],
        profilePicture: "/images/services/sub-services/our-partners/fahrin.png",
    },
    {
        name: "Shahzad Noor",
        platform: "YouTube, Facebook",
        followerCount: "6,340,000",
        contentNiche: "Fashion, Fitness, Lifestyle",
        typeOfCollaboration:
            "sponsored posts, product reviews, giveaways, affiliate marketing, etc.",
        previousCampaigns: [
            "Sponsored posts with Zara Bangladesh",
            "Brand ambassadorship with ShowOff",
            "Product reviews for Adidas Bangladesh",
        ],
        services: [
            "Sponsored Facebook Posts",
            "Affiliate Marketing Links",
            "Sponsored YouTube Videos",
        ],
        profilePicture: "/images/services/sub-services/our-partners/shahzad.png",
    },
    {
        name: "Afana Mimi",
        platform: "YouTube, Facebook, Instagram",
        followerCount: "6,340,000",
        contentNiche: "Food, Travel, Lifestyle",
        typeOfCollaboration:
            "sponsored posts, product reviews, giveaways, affiliate marketing, etc.",
        previousCampaigns: [
            "Sponsored posts with Zara Bangladesh",
            "Brand ambassadorship with ShowOff",
            "Product reviews for Adidas Bangladesh",
        ],
        services: [
            "Sponsored Facebook Posts",
            "Affiliate Marketing Links",
            "Sponsored YouTube Videos",
        ],
        profilePicture: "/images/services/sub-services/our-partners/mimi.png",
    },
    {
        name: "Mehazabien",
        platform: "Instagram, Facebook",
        followerCount: "6,340,000",
        contentNiche: "Acting, Fashion, Lifestyle",
        typeOfCollaboration:
            "sponsored posts, product reviews, giveaways, affiliate marketing, etc.",
        previousCampaigns: [
            "Sponsored posts with Zara Bangladesh",
            "Brand ambassadorship with ShowOff",
            "Product reviews for Adidas Bangladesh",
        ],
        services: [
            "Sponsored Facebook Posts",
            "Affiliate Marketing Links",
            "Sponsored YouTube Videos",
        ],
        profilePicture: "/images/services/sub-services/our-partners/mehazabien.png",
    },
];


const Partnership = () => {
    return (
        <div className="py-12 px-4 sm:px-8 lg:px-16">
            <h1 className="text-[18px] leading-[22px] md:text-[24px] md:leading-[28px] text-center my-6"> Our Latest Partnerships </h1>
            <h1 className={"text-[32px] leading-[36px] md:text-[48px] md:leading-[52px] text-center my-6"}>Unlock Your Brand&#39;s Power with Our Proven <span className={"text-gradiant"}>Influencer Marketing</span> Services</h1>
            <GridSliderPartnerShip data={partnerships}/>
        </div>
    );
};

export default Partnership;
