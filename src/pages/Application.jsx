import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import {useLocation} from "react-router-dom";
import ApplicationForm from "@/components/career/ApplicationForm.jsx";

const Application = () => {
  const location = useLocation();
  const pathName = location.pathname;

  function extractBeforeApplicationForm(path) {
    const parts = path.split('/');
    const dynamicPartIndex = parts.indexOf('application-form') - 1;
    return parts[dynamicPartIndex];
  }

  const previousPath = extractBeforeApplicationForm(pathName);

  function capitalizedPath(pathName) {
    return pathName
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const capitalizedPathName = capitalizedPath(previousPath);

  const breadcrumbs = [
    {label: 'Home', href: '/'},
    {label: 'Life at a Glance', href: '/life-at-a-glance'},
    {label: 'Career', href: '/life-at-a-glance/career'},
    {label: `${capitalizedPathName}`, href: `/life-at-a-glance/career/${previousPath}`},
    {label: `Application Form`},
  ];
  return (
    <section className="bg-white">
      <BreadCrumb
        backgroundImage={"/images/banner/our-services-banner-bg.png"}
        title={`Application Form`}
        backButton={true}
        backURL={`/life-at-a-glance/career/${previousPath}`}
        description=""
        breadcrumbs={breadcrumbs}
      />
      <div className="container mx-auto px-4 lg:px-8 lg:py-[60px] text-start text-black">
        <ApplicationForm position={capitalizedPathName}/>
      </div>
    </section>
  );
};

export default Application;