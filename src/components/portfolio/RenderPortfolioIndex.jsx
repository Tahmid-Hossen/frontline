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
              case 'influencer-marketing':
                return <VTS portfolioId={portfolioId}/>
              case 'billboard-advertisement':
                return <InventorySystem portfolioId={portfolioId}/>
              case 'media-buying':
                return <OTTPlatform portfolioId={portfolioId}/>
              case 'digital-marketing':
                return <TeleHealthApp portfolioId={portfolioId}/>
              case 'outdoor-branding':
                return <TeleHealthApp portfolioId={portfolioId}/>
              case 'billboard-advertisement-led':
                return <TeleHealthApp portfolioId={portfolioId}/>
              case 'road-sign-board':
                return <TeleHealthApp portfolioId={portfolioId}/>
              case 'ss-letter-signage':
                return <TeleHealthApp portfolioId={portfolioId}/>
              case 'transport-sticker-branding':
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