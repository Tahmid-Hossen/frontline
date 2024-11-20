import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Keep this as is if these components are generic
import {ArrowLeft} from "lucide-react";
import {Link, useNavigate} from "react-router-dom"; // Import Link and useNavigate


const BreadCrumb = ({
                      backgroundImage,
                      title,
                      button,
                      backButton,
                      backURL,
                      description,
                      breadcrumbs,
                      jobDescription,
                      jobDescriptionDetails,
                    }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/contact-us?scrollTo=contactUsForm");
  };

  return (
    <div
      className="text-white text-center bg-cover bg-no-repeat h-40 md:h-[200px]"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="container mx-auto h-full py-4">
        <div className="flex flex-col items-center justify-center justify-self-center self-center gap-4 h-full">
          <Breadcrumb className={"flex w-full justify-between truncate"}>
            {backButton ? (
              <Link
                to={backURL ?? "/services"}
                className="justify-self-start text-white text-start font-bold mr-2"
              >
                <ArrowLeft size={20} strokeWidth={2.5}/>
              </Link>
            ) : (
              <div/>
            )}
            <BreadcrumbList className="text-white text-[14px] justify-center">
              {breadcrumbs.map((crumb, index) => (
                <BreadcrumbItem key={index}>
                  {crumb.href ? (
                    <>
                      <BreadcrumbLink
                        className={"hover:underline transition-all duration-500 ease-out"}
                        to={crumb.href}
                      >
                        {crumb.label}
                      </BreadcrumbLink>
                      {index < breadcrumbs?.length - 1 && (
                        <BreadcrumbSeparator
                          className="[&>svg]:size-3 sm:[&>svg]:size-4 md:[&>svg]:size-5 text-white font-bold"/>
                      )}
                    </>
                  ) : (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
            <div/>
          </Breadcrumb>
          <div className="px-4 w-full">
            <h2
              className="text-[24px] sm:text-[40px] md:text-[50px] leading-[36px] sm:leading-[48px] md:leading-[60px] font-bold uppercase truncate">
              {title}
            </h2>
            {/* Uncomment this if you want to use the description */}
            {/* <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[21px] max-w-2xl mx-auto">
              {description}
            </p> */}
          </div>
          {jobDescription && (
            <div className="w-full md:w-4/6 flex justify-between items-center text-white text-[11px] sm:text-sm ">
              <p>Job Type: {jobDescriptionDetails?.jobType}</p>
              <p>No. of Vacancies: {jobDescriptionDetails?.vacancies}</p>
              <p>
                Experience:&nbsp;
                {jobDescriptionDetails?.experience?.split(" ")[0] !== "Freshers"
                  ? `${jobDescriptionDetails?.experience?.split(" ")[0]} + Years`
                  : jobDescriptionDetails === ""
                    ? "At least 1 Year"
                    : jobDescriptionDetails?.experience?.split(" ")[0]}
              </p>
            </div>
          )}
          {button && (
            <Link
              className={"btn-rounded-banner"}
              to="/contact-us"
              onClick={handleClick}
            >
              {button}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
