import {Mail, Phone} from "lucide-react";
import GoogleMap from "@/components/common/GoogleMap";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#46266A] pt-8 text-[#fff]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Company Information */}
            <div className="flex-1 self-start">
              <Link to="/">
                <img
                  width={147}
                  height={30}
                  src="/images/logo.svg"
                  alt="Frontline Logo"
                  className="mx-auto md:mx-0 mb-4 h-auto w-40"
                />
              </Link>
              <p className="text-sm leading-[18.75px]">
                Lorem ipsum dolor sit amet consectetur. Egestas faucibus velit adipiscing eget eleifend arcu. Elementum in sed nulla mi vivamus amet faucibus. Sed sed sed aenean id ipsum quam. Id dictum cursus ornare feugiat convallis scelerisque duis cursus.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
                <Link target={"_blank"} to="https://www.linkedin.com/company/nexdecade"
                      className=" text-[#0A142F] hover:bg-primary p-3 hover:text-white rounded-full border border-[#0A142F]/40 hover:border-transparent hover:fill-white">
                  {/*<Linkedin fill size={16} strokeWidth={0} />*/}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_959_16884)">
                      <path
                        d="M2.67889 1.21484C3.36316 1.21484 3.89893 1.43056 4.28823 1.85998C4.67752 2.28941 4.88621 2.83121 4.9143 3.48036C4.9143 4.12149 4.69558 4.66228 4.25512 5.10174C3.81466 5.54019 3.21266 5.75992 2.45113 5.75992H2.42404C1.68058 5.75992 1.09162 5.54019 0.653167 5.10174C0.219729 4.66228 0 4.12149 0 3.48036C0 2.82117 0.238792 2.27938 0.72039 1.85296C1.20199 1.42755 1.85616 1.21484 2.67889 1.21484ZM0.287955 7.55989H4.98654V20.7597H0.287955V7.55989ZM21.9759 13.1916V20.7597H17.2783V13.7003C17.2783 12.8023 17.0937 12.0829 16.7265 11.5351C16.3613 10.9923 15.7503 10.7204 14.8874 10.7204C14.2302 10.7204 13.7025 10.8869 13.3092 11.222C12.9148 11.5551 12.6289 11.9234 12.4563 12.3277C12.4001 12.4742 12.365 12.6357 12.346 12.8153C12.3279 12.9919 12.3199 13.1835 12.3199 13.3852V20.7607H7.59319C7.61326 18.5273 7.62429 16.4785 7.62429 14.6203V12.2735V10.1415C7.62429 9.4923 7.61727 8.93847 7.60623 8.47894C7.60021 8.02343 7.59319 7.71541 7.59319 7.55989H12.3199V9.42909L12.2938 9.48327H12.3199V9.42909C12.4664 9.19933 12.654 8.95954 12.8827 8.7077C13.1145 8.45687 13.3914 8.22209 13.7285 8.00537C14.0627 7.79066 14.465 7.61407 14.9366 7.4706C15.4111 7.32913 15.9509 7.25889 16.566 7.25889C17.3305 7.25889 18.0449 7.37528 18.7111 7.60906C19.3753 7.84283 19.9462 8.20905 20.4318 8.7087C20.9144 9.20535 21.2926 9.8234 21.5676 10.5619C21.8415 11.2983 21.9759 12.1752 21.9759 13.1916Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_959_16884">
                        <rect width="21.9759" height="21.9759"/>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link target={"_blank"} to="https://www.facebook.com/NexdecadeTechnology"
                      className=" text-[#0A142F] hover:bg-primary p-3 hover:text-white rounded-full border border-[#0A142F]/40 hover:border-transparent hover:fill-white">
                  {/*<Facebook fill size={18} strokeWidth={0}/>*/}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_959_16881)">
                      <path
                        d="M5.79199 11.7044H8.20088V21.6215C8.20088 21.8173 8.35952 21.9759 8.55533 21.9759H12.6397C12.8355 21.9759 12.9942 21.8173 12.9942 21.6215V11.7511H15.7634C15.9435 11.7511 16.095 11.616 16.1156 11.4371L16.5361 7.78617C16.5477 7.68573 16.5159 7.58512 16.4487 7.50975C16.3814 7.43434 16.2851 7.39116 16.1841 7.39116H12.9943V5.10253C12.9943 4.41265 13.3658 4.0628 14.0985 4.0628C14.203 4.0628 16.1841 4.0628 16.1841 4.0628C16.3799 4.0628 16.5386 3.90407 16.5386 3.70835V0.357066C16.5386 0.161257 16.3799 0.00261822 16.1841 0.00261822H13.3099C13.2896 0.00163102 13.2446 0 13.1782 0C12.6795 0 10.946 0.0979043 9.5767 1.35761C8.0595 2.7536 8.27042 4.42501 8.32081 4.71482V7.39107H5.79195C5.59614 7.39107 5.4375 7.54971 5.4375 7.74552V11.3499C5.43754 11.5456 5.59618 11.7044 5.79199 11.7044Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_959_16881">
                        <rect width="21.9759" height="21.9759"/>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link target={"_blank"} to="https://twitter.com/nexdecade"
                      className=" text-[#0A142F] hover:bg-primary p-3 hover:text-white rounded-full border border-[#0A142F]/40 hover:border-transparent hover:fill-white">
                  {/*<Twitter  size={16} />*/}
                  <svg
                    width="16"
                    height="16"
                    className="mx-auto"
                    viewBox="0 0 22 22"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_396_294)">
                      <path
                        d="M13.0336 9.3053L21.0387 0H19.1418L12.191 8.07966L6.63934 0H0.236206L8.63134 12.2179L0.236206 21.9759H2.13327L9.47353 13.4435L15.3364 21.9759H21.7396L13.0332 9.3053H13.0336ZM10.4353 12.3255L9.58474 11.1089L2.81681 1.42807H5.73059L11.1924 9.2408L12.043 10.4574L19.1427 20.6128H16.2289L10.4353 12.326V12.3255Z"

                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_396_294">
                        <rect width="21.9759" height="21.9759"/>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-full flex-1 flex md:hidden self-center justify-between items-center gap-4 px-3">
              {/* Quick Links */}
              <div className="flex-1 flex flex-col items-center justify-center self-start space-y-4">
                <h3 className="font-semibold mb-1">Quick Links</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
                  <li><Link to="/about-us" className="hover:text-primary">About Us</Link></li>
                  <li><Link to="/life-at-a-glance/career" className="hover:text-primary">Career</Link></li>
                  <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
                  <li><Link to="/contact-us" className="hover:text-primary">Contact</Link></li>
                </ul>
              </div>

              {/* Location & Contact */}
              <div className="text-[#0A142F] self-start  space-y-4">
                <h3 className="font-semibold mb-1">Location & Contact</h3>
                <div className="space-y-4">
                  <p className="text-sm text-wrap">
                    69/1 Chandrashila Suvastu<br/>Tower
                    Panthapath Dhaka 1215.
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <Mail size={12}/> info@nexdecade.com
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <Phone size={12}/> Call For Support : +8801713189710
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <Phone size={12}/> Call For Sales : +8801711204695
                  </p>
                </div>
              </div>
            </div>
            {/* Quick Links */}
            <div className="flex-1 hidden md:flex flex-col items-center justify-center self-start space-y-4">
              <h3 className="font-semibold mb-1">Quick Links</h3>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
                <li><Link to="/about-us" className="hover:text-primary">About Us</Link></li>
                <li><Link to="/life-at-a-glance/career" className="hover:text-primary">Career</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/contact-us" className="hover:text-primary">Contact</Link></li>
              </ul>
            </div>

            {/* Location & Contact */}
            <div className="flex-1 hidden md:block text-[#0A142F] self-start space-y-4">
              <h3 className="font-semibold mb-1">Location & Contact</h3>
              <div className="space-y-4">
                <p className="text-sm">
                  69/1 Chandrashila Suvastu Tower<br/>
                  Panthapath Dhaka 1215.
                </p>
                <p className="text-sm flex items-center gap-2">
                  <Mail size={12}/> info@nexdecade.com
                </p>
                <p className="text-sm flex items-center gap-2">
                  <Phone size={12}/> Call For Support : +8801713189710
                </p>
                <p className="text-sm flex items-center gap-2">
                  <Phone size={12}/> Call For Sales : +8801711204695
                </p>
              </div>
            </div>
            {/* Map (Optional, example static image or embedded map) */}
            <div className="flex-1 mx-auto md:mx-0">
              <GoogleMap width={''} height={''} style={"w-[300px] h-[200px] md:w-[360px] md:h-[200px] rounded-lg"}/>
            </div>
          </div>

          {/* Certifications & Copyright */}
          <div className="mt-8 border-t py-3">
            <ul className="text-sm flex justify-center items-center gap-4">
              <li><Link to="/faq" className="hover:text-primary">Privacy & Policies</Link></li>
              <li><Link to="/about-us" className="hover:text-primary">Terms and Conditions</Link></li>
              <li><Link to="/life-at-a-glance/career" className="hover:text-primary">Code of Conduct</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;