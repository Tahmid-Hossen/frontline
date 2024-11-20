import mockSearchResults from "@/data/searchData.json";
import {Link, useLocation} from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const searchParams = useQuery();
  const query = searchParams.get('query')?.toLowerCase() || '';

  // Function to check if an item matches the search query
  const matchesQuery = (item) => {
    return item?.title?.toLowerCase().replace(/\s+/g, '-').includes(query) ||
      item?.slug?.toLowerCase().replace(/\s+/g, '-').includes(query) ||
      item?.description?.toLowerCase().replace(/\s+/g, '-').includes(query) ||
      item?.category?.some(categoryItem =>
        categoryItem.toLowerCase().replace(/\s+/g, '-').includes(query)
      );
  };

  // Function to check if any keywords match the query
  const matchesKeywords = (item) => {
    return item?.keywords?.some(keyword =>
      keyword.toLowerCase().replace(/\s+/g, '-').includes(query)
    );
  };

  // Filter results for each section
  const serviceResults = mockSearchResults.services.filter(item => matchesQuery(item));
  const portfolioResults = mockSearchResults.portfolio.filter(item => matchesQuery(item));
  const contactResults = mockSearchResults.contact_us.filter(item => matchesKeywords(item));
  const aboutResults = mockSearchResults.about_us.filter(item => matchesKeywords(item));
  const lifeResults = mockSearchResults.life_at_a_glance.filter(item => matchesKeywords(item));
  const careerResults = mockSearchResults.career.filter(item => matchesKeywords(item));

  // Combine all results with their source section
  const combinedResults = [
    ...serviceResults.map(item => ({...item, section: 'services'})),
    ...portfolioResults.map(item => ({...item, section: 'portfolio'})),
    ...contactResults.map(item => ({...item, section: 'contact-us'})),
    ...aboutResults.map(item => ({...item, section: 'about-us'})),
    ...lifeResults.map(item => ({...item, section: 'life-at-a-glance'})),
    ...careerResults.map(item => ({...item, section: 'career'})),
    ...(query.includes("services") ? mockSearchResults.services.map(item => ({...item, section: 'all_services'})) : []),
    ...((query.includes("projects") || query.includes("portfolio")) ? mockSearchResults.portfolio.map(item => ({
      ...item,
      section: "all_projects"
    })) : [])
  ];

  // Group results by section
  const resultsBySection = combinedResults.reduce((acc, result) => {
    if (!acc[result.section]) {
      acc[result.section] = [];
    }
    acc[result.section].push(result);
    return acc;
  }, {});

  // Section labels (customizable)
  const sectionLabels = {
    services: "Services",
    portfolio: "Portfolio",
    "contact-us": "Contact Us",
    "about-us": "About Us",
    "life-at-a-glance": "Life at Nexdecade",
    all_services: "All Services",
    all_projects: "All Projects"
  };

  return (
    <div className="container mx-auto px-4 min-h-[calc(100vw/3)]">
      <h1 className="text-2xl font-bold my-4">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        ({combinedResults.length}) Results Found for "<span
        className={"text-gradiant capitalize"}>{query.replace(/-/g, ' ')}</span>"
      </h1>

      {combinedResults.length > 0 ? (
        Object.keys(resultsBySection).map((section) => (
          <div key={section} className="mb-8">
            <h2 className="text-xl font-semibold capitalize">{sectionLabels[section] || section}</h2>
            <ul>
              {resultsBySection[section].map((result, index) => (
                <li key={index} className="border-b border-gray-300 py-4">
                  <Link className={"group"}
                        to={`/${(result.section === "all_services" ? "services" : (result.section === "all_projects" ? "portfolio" : (result.section === "career" ? "life-at-a-glance/career" : result.section)))}${result?.slug ? `/${result?.slug?.replace(/\s+-/g, '_')}` : ''}`}>
                    <div
                      className="flex flex-col items-start justify-center group-hover:bg-blue-50 group-hover:rounded p-2 group-hover:shadow-lg">
                      <h2 className="group-hover:text-gradiant text-xl font-semibold">{result.title}</h2>
                      <p>{result.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div className={"flex flex-col self-center items-center justify-center gap-4 mt-5"}>
          <img width={460} height={280} className={"w-2/5 h-1/5 aspect-video object-cover"}
               src={`/images/default/no-result-found.png`} alt={"no-result-found"}/>
          <h5 className={"heading2 text-gradiant"}>No results found</h5>
          <Link to={"/"} className={"btn-large-rounded"}>Go To Home</Link>
        </div>
      )}
    </div>
  );
}
