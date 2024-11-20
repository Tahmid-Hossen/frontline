import VTS from "@/components/portfolio/VTS.jsx";
import InventorySystem from "@/components/portfolio/InventorySystem.jsx";
import OTTPlatform from "@/components/portfolio/OTTPlatform.jsx";
import TeleHealthApp from "@/components/portfolio/TeleHealthApp.jsx";
import NotFound from "@/components/NotFound.jsx";

// eslint-disable-next-line react/prop-types
const RenderPortfolioIndex = ({portfolioId}) => {
  return (
    <>
      {!!portfolioId && (
        <>
          {(() => {
            switch (portfolioId) {
              case 'vehicle-tracking':
                return <VTS portfolioId={portfolioId}/>
              case 'inventory-system':
                return <InventorySystem portfolioId={portfolioId}/>
              case 'ott-platform':
                return <OTTPlatform portfolioId={portfolioId}/>
              case 'telehealth-app':
                return <TeleHealthApp portfolioId={portfolioId}/>
              default:
                return <NotFound/>
            }
          })()}
        </>
      )}
    </>
  );
};

export default RenderPortfolioIndex;