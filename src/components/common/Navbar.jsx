import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {CircleX, Menu, Search} from "lucide-react";
import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import serviceData from "@/data/serviceData.json";
import AutoSuggestSearch from "@/components/common/AutoSuggestSearch";

const Navbar = () => {
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation(); // Get current route

  // Function to check if the current route matches or starts with the provided href
  const isActiveLink = (href) => {
    return location.pathname === href || location.pathname.startsWith(href);
  };

  // Function to check if the current route partially matches the provided href (for sub-menus)
  const isActiveSubLink = (href) => {
    return location.pathname.startsWith(href);
  };

  // const handleSearchClick = () => {
  //   setIsSearchOpen(true);
  // };
  //
  // const handleCloseClick = () => {
  //   setIsSearchOpen(false);
  // };

  return (
    <header
      className="sticky top-0 z-[100] flex h-16 justify-between items-center gap-4 border-b bg-[#46266A] transition-all duration-300 shadow-md px-3 md:px-0">
      <nav
        className="hidden container w-full h-full flex-col gap-6 text-lg font-normal md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
        <Link to="/" className="max-h-full max-w-full text-xl font-semibold text-black">
          <img src="/images/logo.svg" height={30} width={147} alt="logo" className={"w-40 h-auto"}/>
        </Link>
        <div
          className="hidden flex-col gap-6 text-base font-normal md:flex md:flex-row md:items-center md:justify-between md:gap-5 lg:gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/services">
                  <NavigationMenuTrigger
                    className={`bg-transparent hover:bg-transparent hover:text-white data-[active]:bg-transparent p-0 ${isActiveLink("/services") ? "!text-[#fff] font-bold" : "text-white"} data-[state=open]:text-white data-[state=open]:bg-transparent focus:bg-transparent active:bg-transparent text-base`}
                  >
                    Services
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <ul className="nav-dropdown-list bg-[#46266A]">
                    {serviceData.map((service) => (
                      <li key={service.id} className="nav-dropdown-item text-white">
                        <Link
                          to={`/services/${service.slug}`}
                          className={`nav-dropdown-link ${isActiveSubLink(`/services/${service.slug}`) ? "text-white" : "text-white hover:text-white"}`}
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            to="/our-workes"
            className={`text-white transition-colors hover:text-white font-medium ${isActiveLink("/our-workes") ? "text-white font-medium" : ""}`}
          >
            Our Works
          </Link>
          <Link
            to="/clients"
            className={`text-white transition-colors hover:text-white font-medium ${isActiveLink("/clients") ? "text-white font-medium" : ""}`}
          >
            Clients
          </Link>
          <Link
            to="/about-us"
            className={`text-white transition-colors hover:text-white font-medium ${isActiveLink("/about-us") ? "text-white font-medium" : ""}`}
          >
            About Us
          </Link>
          <Link
            to="/blogs"
            className={`text-white transition-colors hover:text-white font-medium ${isActiveLink("/blogs") ? "text-white font-medium" : ""}`}
          >
            Blogs
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
          <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
            {/*<div className="relative flex items-center justify-end">*/}
            {/*  {!isSearchOpen && (*/}
            {/*    <Search*/}
            {/*      size={20}*/}
            {/*      strokeWidth={2.5}*/}
            {/*      className="text-black hover:text-primary cursor-pointer"*/}
            {/*      onClick={handleSearchClick}*/}
            {/*    />*/}
            {/*  )}*/}
            {/*  {isSearchOpen && (*/}
            {/*    <>*/}
            {/*      <AutoSuggestSearch/>*/}
            {/*      <CircleX className="text-black hover:text-primary cursor-pointer font-bold" size={20}*/}
            {/*               strokeWidth={2.2} onClick={handleCloseClick}/>*/}
            {/*    </>*/}
            {/*  )}*/}
            {/*</div>*/}
            <Link to="/contact-us" className={"inline-flex items-center justify-center h-[40px] btn bg-[#F2F3F5] border rounded-[15px] btn-sm"}>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5"/>
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className={"bg-white mt-16"} side="left">
          <nav className="grid gap-6 text-lg font-normal">
            <SheetClose asChild>
              <Link to="/" className="max-h-full max-w-full text-xl font-semibold text-black">
                <img src="/images/logo.svg" height={30} width={147} alt="logo"/>
              </Link>
            </SheetClose>
            <NavigationMenu>
              <NavigationMenuList className={""}>
                <NavigationMenuItem className={''}>
                  <div className="!text-lg font-medium flex items-center">
                    <SheetClose asChild>
                      <Link to="/services"
                            className={`${isActiveLink("/services") ? "!text-primary" : "text-foreground"}`}>
                        Services
                      </Link>
                    </SheetClose>
                    <NavigationMenuTrigger
                      className={`bg-transparent hover:bg-transparent data-[active]:bg-transparent p-0 data-[state=open]:text-primary data-[state=open]:bg-transparent focus:bg-transparent active:bg-transparent text-lg md:text-base ${isActiveLink("/services/") ? "!text-primary" : "text-foreground"}`}
                    />
                  </div>
                  <NavigationMenuContent className={""}>
                    <ul className="nav-dropdown-list">
                      {serviceData.map((service) => (
                        <li key={service.id} className="nav-dropdown-item">
                          <SheetClose asChild>
                            <Link to={`/services/${service.slug}`}
                                  className={`nav-dropdown-link ${isActiveSubLink(`/services/${service.slug}`) ? "text-primary" : ""}`}>
                              {service.title}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <SheetClose asChild>
              <Link to="/portfolio"
                    className={`text-foreground transition-colors hover:text-primary font-medium ${isActiveLink("/portfolio") ? "text-primary" : ""}`}>
                Portfolio
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/life-at-a-glance"
                    className={`text-foreground transition-colors hover:text-primary font-medium ${isActiveLink("/life-at-a-glance") ? "text-primary" : ""}`}>
                Life At A Glance
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/about-us"
                    className={`text-foreground transition-colors hover:text-primary font-medium ${isActiveLink("/about-us") ? "text-primary" : ""}`}>
                About Us
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/contact-us" className={"inline-flex items-center justify-center h-[40px] btn btn-blue btn-sm"}>
                Contact Us
              </Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
      <Link to="/contact-us"
            className={"inline-flex items-center justify-center h-[40px] btn btn-blue btn-sm sm:hidden"}>
        Contact Us
      </Link>
    </header>
  );
};

export default Navbar;
