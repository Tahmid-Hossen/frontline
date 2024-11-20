import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PositionDetails = ({positionDetails}) => {
  const {
    title,
    jobContext,
    keyResponsibilities,
    additionalRequirements,
    educationalRequirements,
    experienceRequirements,
    salaryRange,
    location,
    otherBenefits,
    workPlace,
    jobNature,
    compensationAndBenefits,
    applicationProcess,
    department,
    vacancies,
    jobRequirements,
  } = positionDetails[0];
  const breadcrumbs = [
    {label: 'Home', href: '/'},
    {label: 'Life at a Glance', href: '/life-at-a-glance'},
    {label: 'Career', href: '/life-at-a-glance/career'},
    {label: `${title}`},
  ];

  return (
    <section className="bg-white">
      <BreadCrumb
        backgroundImage={"/images/banner/our-services-banner-bg.png"}
        title={`${title}`}
        backButton={true}
        backURL={"/life-at-a-glance/career"}
        description=""
        jobDescription={true}
        jobDescriptionDetails={{
          vacancies: vacancies ?? 3,
          jobType: jobNature ?? 'Not specified',
          experience: experienceRequirements ?? '',
        }}
        breadcrumbs={breadcrumbs}
      />
      <div className="container mx-auto px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-10 text-start text-black">
        {department && (
          <section className="mb-6">
            <h3 className="sub-title flex justify-start items-center gap-2">Department:<p
              className="font-normal sub-description">{department}</p></h3>
          </section>
        )}

        {vacancies && (
          <section className="mb-6">
            <h3 className="sub-title flex justify-start items-center gap-2">Vacancies: <p
              className="font-normal sub-description"> {vacancies}</p></h3>
          </section>
        )}

        {jobContext && (
          <section className="mb-9">
            <h3 className="sub-title">Job Context:</h3>
            <p className="sub-description">{jobContext}</p>
          </section>
        )}

        {keyResponsibilities && (
          <section className="mb-9">
            <h3 className="sub-title">Job Responsibilities:</h3>

            {Object.keys(keyResponsibilities).map((key, index) => {
              let responsibilities = keyResponsibilities[key];

              if (Array.isArray(responsibilities)) {
                switch (key) {
                  case 'NetworkDesignDeployment':
                    return (
                      <div key={index}>
                        <h4 className="sub-header">Network Design & Deployment</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {responsibilities.map((item, subIndex) => (
                            <li key={`${index}-${subIndex}`}
                                className="ml-2.5 sub-description">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );

                  case 'NetworkStorageManagement':
                    return (
                      <div key={index}>
                        <h4 className="sub-header">Network Storage Management</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {responsibilities.map((item, subIndex) => (
                            <li key={`${index}-${subIndex}`}
                                className="ml-2.5 sub-description">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );

                  case 'LinuxExpertise':
                    return (
                      <div key={index}>
                        <h4 className="sub-header">Linux Expertise</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {responsibilities.map((item, subIndex) => (
                            <li key={`${index}-${subIndex}`}
                                className="ml-2.5 sub-description">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );

                  case 'OTTStreamingInfrastructure':
                    return (
                      <div key={index}>
                        <h4 className="sub-header">OTT Streaming Infrastructure</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {responsibilities.map((item, subIndex) => (
                            <li key={`${index}-${subIndex}`}
                                className="ml-2.5 sub-description">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );

                  case 'ContainerizationOrchestration':
                    return (
                      <div key={index}>
                        <h4 className="sub-header">Containerization & Orchestration</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {responsibilities.map((item, subIndex) => (
                            <li key={`${index}-${subIndex}`}
                                className="ml-2.5 sub-description">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );

                  case 'CollaborationReporting':
                    return (
                      <div key={index}>
                        <h4 className="sub-header">Collaboration & Reporting</h4>
                        <ul className="list-disc list-inside space-y-2">
                          {responsibilities.map((item, subIndex) => (
                            <li key={`${index}-${subIndex}`}
                                className="ml-2.5 sub-description">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );

                  default:
                    // Default case for any additional responsibility categories
                    return (
                      <div key={index}>
                        <h4 className="sub-header">{key}</h4>
                        <ul className="list-disc list-inside space-y-3">
                          {responsibilities.map((item, subIndex) => (
                            <li key={`${index}-${subIndex}`}
                                className="ml-2.5 sub-description">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                }
              }

              return null; // Skip if not an array
            })}
          </section>
        )}
        {additionalRequirements && (
          <section className="mb-6">
            <h3 className="sub-title">Additional Requirements:</h3>
            <ul className="list-disc list-inside space-y-3">
              {additionalRequirements?.map((additional, index) => (
                <li key={index} className="ml-2.5 sub-description">
                  {additional}
                </li>
              ))}
            </ul>
          </section>
        )}
        {educationalRequirements && (
          <section className="mb-6">
            <h3 className="sub-title">Educational Requirements:</h3>
            <p className="sub-description ml-2.5">{educationalRequirements}</p>
          </section>
        )}

        {experienceRequirements && (
          <section className="mb-6">
            <h3 className="sub-title">Experience Requirements:</h3>
            <p className="sub-description ml-2.5">{experienceRequirements}</p>
          </section>
        )}
        {
          jobRequirements && (
            <section className="mb-6">
              <h3 className="sub-title">Job Requirements:</h3>
              <ul className="list-disc list-inside space-y-3 ml-2.5">
                <li className="sub-description">Age: {jobRequirements.age}</li>
                <li className="sub-description">Gender: {jobRequirements.gender}</li>
                <li className="sub-description">Work Schedule: {jobRequirements.workSchedule}</li>
                <li className="sub-description">Customer
                  Service: {jobRequirements.customerService}</li>
                <li className="sub-description">Complaints
                  Follow-Up: {jobRequirements.complaintsFollowUp}</li>
                <li className="sub-description">Customer Needs: {jobRequirements.customerNeeds}</li>
                <li className="sub-description">Communication
                  Skills: {jobRequirements.communicationSkills}</li>
                <li className="sub-description">Motivation: {jobRequirements.motivation}</li>
                <li className="sub-description">Technical
                  Skills: {jobRequirements.technicalSkills}</li>
                <li className="sub-description">Language
                  Skills: {jobRequirements.languageSkills}</li>

              </ul>
              <h4 className="sub-title mt-6">Attributes:</h4>
              <ul className="list-disc list-inside">
                {jobRequirements?.attributes?.map((attribute, index) => (
                  <li key={index} className="ml-2.5 sub-description space-y-3">{attribute}</li>
                ))}
              </ul>
            </section>
          )}

        {compensationAndBenefits && (
          <section className="mb-6">
            <h3 className="sub-title">Compensation & Other Benefits:</h3>
            <ul className="list-disc list-inside space-y-3">
              {compensationAndBenefits?.salary && (
                <li className="ml-2.5 sub-description">
                  <strong>Salary:</strong> {compensationAndBenefits?.salary}</li>
              )}
              {compensationAndBenefits?.salaryReview && (
                <li className="ml-2.5 sub-description"><strong>Salary
                  Review:</strong> {compensationAndBenefits?.salaryReview}</li>
              )}
              {compensationAndBenefits?.festivalBonus && (
                <li className="ml-2.5 sub-description"><strong>Festival
                  Bonus:</strong> {compensationAndBenefits?.festivalBonus}</li>
              )}

            </ul>
            <h4 className="sub-title mt-4">Other Benefits:</h4>
            <ul className="list-disc list-inside space-y-3 mt-3">
              {compensationAndBenefits?.otherBenefits?.map((benefit, index) => (
                <li key={index} className="ml-2.5 sub-description">{benefit}</li>
              ))}
            </ul>
          </section>
        )}

        {applicationProcess && (
          <section className="mb-6">
            <h3 className="sub-title">The Application Process:</h3>
            <ul className="list-disc list-inside">
              {applicationProcess?.map((process, index) => (
                <li key={index} className="ml-2.5 sub-description">{process}</li>
              ))}
            </ul>
          </section>
        )}
        {salaryRange && (
          <section className="mb-6">
            <h3 className="sub-title flex justify-start items-center gap-2">Salary: <p
              className="font-normal sub-description"> {salaryRange}</p></h3>
          </section>
        )}
        {workPlace && (
          <section className="mb-6">
            <h3 className="sub-title flex justify-start items-center gap-2">Work Place: <p
              className="font-normal sub-description"> {workPlace}</p></h3>
          </section>
        )}
        {jobNature && (
          <section className="mb-6">
            <h3 className="sub-title flex justify-start items-center gap-2">Employment Status: <p
              className="font-normal sub-description"> {jobNature}</p></h3>
          </section>
        )}
        {location && (
          <section className="mb-6">
            <h3 className="sub-title flex justify-start items-center gap-2">Location: <p
              className="font-normal sub-description"> {location}</p></h3>
          </section>
        )}

        {otherBenefits && (
          <section className="mb-6">
            <h3 className="sub-title">Other Benefits:</h3>
            <p className="sub-description ml-2.5">{otherBenefits}</p>
          </section>
        )}

        <section className="mb-6">
          <h3 className="text-base font-semibold">NB: <span className={"font-normal"}>Only shortlisted candidates will be communicated in the recruitment process.</span>
          </h3>
        </section>
        <div className="mt-9">
          <Link
            to={`/life-at-a-glance/career/${title?.replace(/[\s,]+/g, '_').toLowerCase()}/application-form`}
            className="py-3 btn-medium-rounded"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PositionDetails;
