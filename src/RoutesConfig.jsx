import {Route, Routes} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

import AboutUs from '@/pages/about-us.jsx';
import ContactUs from '@/pages/contact-us.jsx';
import FAQ from '@/components/common/FAQ.jsx';
import Portfolio from '@/pages/our-works.jsx';
import Search from '@/pages/search.jsx';
import Services from '@/pages/services.jsx';
import ServiceCategory from '@/pages/service-category.jsx';
import LifeAtAGlance from '@/pages/life-at-a-glance.jsx';
import Career from '@/pages/career.jsx';
import JobPosition from '@/pages/job-position.jsx';
import Application from '@/pages/Application.jsx';
import Home from '@/pages/home.jsx';
import NotFound from "@/components/NotFound.jsx";
import SinglePortfolio from "@/pages/single-portfolio.jsx";
import PrivacyPolicy from "@/pages/PrivacyPolicy.jsx";
import OurWorks from "@/pages/our-works.jsx";

const RoutesConfig = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Helmet>
            <title>Home - Frontline</title>
            <meta name="description"
                  content="Welcome to Frontline"/>
            <meta property="og:title" content="Home - Frontline"/>
            <meta property="og:description" content="Frontline"/>
          </Helmet>
          <Home/>
        </>
      }
    />
    <Route
      path="/about-us"
      element={
        <>
          <Helmet>
            <title>About Us - Frontline.</title>
            <meta name="description" content="Learn more about Frontline."/>
          </Helmet>
          <AboutUs/>
        </>
      }
    />
    <Route
      path="/contact-us"
      element={
        <>
          <Helmet>
            <title>Contact Us - Frontline.</title>
            <meta name="description" content="Contact Frontline. for more information."/>
          </Helmet>
          <ContactUs/>
        </>
      }
    />
    <Route
      path="/privacy-policy"
      element={
        <>
          <Helmet>
            <title>Privacy Policy - Frontline.</title>
            <meta name="description" content="Privacy Policy Frontline. for more information."/>
          </Helmet>
          <PrivacyPolicy/>
        </>
      }
    />
    <Route
      path="/faq"
      element={
        <>
          <Helmet>
            <title>FAQ - Frontline.</title>
          </Helmet>
          <FAQ/>
        </>
      }
    />
      <Route
          path="/our-works"
          element={
              <>
                  <Helmet>
                      <title>Our Works - Nexdecade Technology Private Ltd.</title>
                  </Helmet>
                  <OurWorks/>
              </>
          }
      />
      <Route
          path="/our-works/:portfolioId"
          element={
              <>
                  <Helmet>
                      <title>Our Work - Nexdecade Technology Private Ltd.</title>
                  </Helmet>
                  <SinglePortfolio/>
              </>
          }
      />
    <Route
      path="/services"
      element={
        <>
          <Helmet>
            <title>Services - Frontline.</title>
            <meta name="description" content="Discover the services offered by Frontline."/>
          </Helmet>
          <Services/>
        </>
      }
    />
    <Route
      path="/services/:category"
      element={
        <>
          <Helmet>
            <title>Service Category - Frontline.</title>
          </Helmet>
          <ServiceCategory/>
        </>
      }
    />
    <Route
      path="/search"
      element={
        <>
          <Helmet>
            <title>Search - Frontline.</title>
          </Helmet>
          <Search/>
        </>
      }
    />
    <Route
      path="/life-at-a-glance"
      element={
        <>
          <Helmet>
            <title>Life at a Glance - Frontline.</title>
          </Helmet>
          <LifeAtAGlance/>
        </>
      }
    />
    <Route
      path="/life-at-a-glance/career"
      element={
        <>
          <Helmet>
            <title>Career - Frontline.</title>
          </Helmet>
          <Career/>
        </>
      }
    />
    <Route
      path="/life-at-a-glance/career/:position"
      element={
        <>
          <Helmet>
            <title>Job Position - Frontline.</title>
          </Helmet>
          <JobPosition/>
        </>
      }
    />
    <Route
      path="/life-at-a-glance/career/:position/application-form"
      element={
        <>
          <Helmet>
            <title>Application Form - Frontline.</title>
          </Helmet>
          <Application/>
        </>
      }
    />
    <Route
      path="*"
      element={
        <>
          <Helmet>
            <title>Page Not Found - Frontline.</title>
          </Helmet>
          <NotFound/>
        </>

      }/>
  </Routes>
);

export default RoutesConfig;