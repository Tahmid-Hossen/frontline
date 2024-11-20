import {useParams} from "react-router-dom";
import RenderPortfolioIndex from "@/components/portfolio/RenderPortfolioIndex.jsx";

const SinglePortfolio = () => {
  const {portfolioId} = useParams();
  return (
    <>
      <RenderPortfolioIndex portfolioId={portfolioId}/>
    </>
  );
};

export default SinglePortfolio;