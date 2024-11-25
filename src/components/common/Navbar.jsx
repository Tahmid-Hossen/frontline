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
                    className={`bg-transparent hover:bg-transparent hover:text-slate-300 data-[active]:bg-transparent p-0 ${isActiveLink("/services") ? "focus:!text-primary !text-primary font-semibold" : "focus:!text-white !text-white"} data-[state=open]:text-white data-[state=open]:bg-transparent focus:bg-transparent active:bg-transparent text-base`}
                  >
                    Services
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <ul className="nav-dropdown-list bg-[#46266A] divide-y divide-gray-200">
                    {serviceData.map((service) => (
                      <li key={service.id} className="nav-dropdown-item text-white py-3">
                        <Link
                          to={`/services/${service.slug}`}
                          className={`nav-dropdown-link ${isActiveSubLink(`/services/${service.slug}`) ? "text-slate-300 font-semibold" : "text-white font-medium"}`}
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
            to="/our-works"
            className={`transition-colors hover:text-slate-300 ${isActiveLink("/our-works") ? "text-slate-300 font-semibold" : "text-white font-medium"}`}
          >
            Our Works
          </Link>
          <Link
            to="/clients"
            className={`transition-colors hover:text-slate-300 ${isActiveLink("/clients") ? "text-slate-300 font-semibold" : "text-white font-medium"}`}
          >
            Clients
          </Link>
          <Link
            to="/about-us"
            className={`transition-colors hover:text-slate-300 ${isActiveLink("/about-us") ? "text-slate-300 font-semibold" : "text-white font-medium"}`}
          >
            About Us
          </Link>
          <Link
            to="/blogs"
            className={`transition-colors hover:text-slate-300 ${isActiveLink("/blogs") ? "text-slate-300 font-semibold" : "text-white font-medium"}`}
          > Blogs
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
          <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
            {/*<div className="relative flex items-center justify-end">
              {!isSearchOpen && (
                <Search
                  size={20}
                  strokeWidth={2.5}
                  className="text-black hover:text-primary cursor-pointer"
                  onClick={handleSearchClick}
                />
              )}
              {isSearchOpen && (
                <>
                  <AutoSuggestSearch/>
                  <CircleX className="text-black hover:text-primary cursor-pointer font-bold" size={20}
                           strokeWidth={2.2} onClick={handleCloseClick}/>
                </>
              )}
            </div>*/}
            <Link to="/contact-us" className={"inline-flex  items-center justify-center h-[40px] btn bg-[#F2F3F5] border rounded-[15px] btn-sm text-main font-bold"}>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 !text-primary md:hidden">
            <Menu className="h-5 w-5"/>
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className={"bg-primary mt-16"} side="left">
          <nav className="grid gap-6 text-lg font-normal">
            <SheetClose asChild>
              <Link to="/" className="max-h-full max-w-full text-xl font-semibold text-black">
                <img src="/images/logo.svg" height={30} width={147} alt="frontline"/>
              </Link>
            </SheetClose>
            <NavigationMenu>
              <NavigationMenuList className={""}>
                <NavigationMenuItem className={''}>
                  <div className="!text-lg font-medium flex items-center">
                    <SheetClose asChild>
                      <Link to="/services"
                            className={`${isActiveLink("/services") ? "!text-primary" : "text-white"}`}>
                        Services
                      </Link>
                    </SheetClose>
                    <NavigationMenuTrigger
                      className={`bg-transparent hover:bg-transparent data-[active]:bg-transparent p-0 data-[state=open]:text-primary data-[state=open]:bg-transparent  focus:bg-transparent active:bg-transparent text-lg md:text-base ${isActiveLink("/services/") ? "focus:!text-primary !text-primary" : "focus:!text-white !text-white"}`}
                    />
                  </div>
                  <NavigationMenuContent className={"bg-primary/80"}>
                    <ul className="nav-dropdown-list divide-y divide-gray-200">
                      {serviceData.map((service) => (
                        <li key={service.id} className="nav-dropdown-item py-2">
                          <SheetClose asChild>
                            <Link to={`/services/${service.slug}`}
                                  className={`nav-dropdown-link ${isActiveSubLink(`/services/${service.slug}`) ? "text-primary" : "text-white"}`}>
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
              <Link to="/our-works"
                    className={`transition-colors hover:text-primary font-medium ${isActiveLink("/our-works") ? "text-primary" : "text-white"}`}>
                Our Works
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/about-us"
                    className={`transition-colors hover:text-primary font-medium ${isActiveLink("/about-us") ? "text-primary" : "text-white "}`}>
                About Us
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/clients"
                    className={`transition-colors hover:text-primary font-medium ${isActiveLink("/clients") ? "text-primary" : "text-white"}`}>
                Clients
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link to="/contact-us" className={"inline-flex items-center justify-center h-[40px] btn btn-blue btn-sm "}>
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
