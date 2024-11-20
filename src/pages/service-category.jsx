import SubService from "@/components/services/subservices/SubService";
import serviceData from "@/data/serviceData.json"
import {useParams} from "react-router-dom";

const ServiceCategory = () => {
  const {category} = useParams();
  const service = serviceData?.filter(service => service?.subService && service?.subService?.slug === category);
  return (
    <>
      <SubService service={service?.[0]} subService={service?.[0]?.subService} category={category}/>
    </>
  );
};


export default ServiceCategory;