import {HelmetProvider} from 'react-helmet-async';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/utils/ScrollToTop';
import {Toaster} from 'react-hot-toast';
import RoutesConfig from './RoutesConfig';

function App() {
  return (
    <HelmetProvider>
      <Navbar/>
      <ScrollToTop/>
      <RoutesConfig/>
      <Toaster
        toastOptions={{
          success: {
            className: 'h-16',
          },
          error: {},
        }}
        position="top-right"
        reverseOrder={false}
      />
      <Footer/>
    </HelmetProvider>
  );
}

export default App;