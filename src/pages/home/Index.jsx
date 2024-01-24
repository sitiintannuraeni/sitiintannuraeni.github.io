import {Button, Collapse, IconButton, Navbar, Typography} from "@material-tailwind/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/16/solid/index.js";
import {useEffect, useState} from "react";
import logo from "../../assets/logo.png";
import banner from "../../assets/banner-1.png";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import bgParfum from "../../assets/bgParfum.png"
import {HeartIcon} from "@heroicons/react/24/outline/index.js";

function NavList() {
  return (
  <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-medium hidden"
    >
      <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
        Pages
      </a>
    </Typography>
    <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-medium hidden"
    >
      <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
        Account
      </a>
    </Typography>
    <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-medium hidden"
    >
      <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
        Blocks
      </a>
    </Typography>
    <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-medium hidden"
    >
      <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
        Docs
      </a>
    </Typography>
  </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);
  
  const handleWindowResize = () =>
  window.innerWidth >= 960 && setOpenNav(false);
  
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  
  return (
  <Navbar className="px-3 py-4 fixed top-0 z-50" fullWidth shadow={false} blurred={false}>
    <div className="flex items-center justify-between text-blue-gray-900">
      <img src={logo} className="w-full max-w-[120px] cursor-pointer" alt="logo"/>
      <div className="hidden lg:block">
        <NavList />
      </div>
      <IconButton
      variant="text"
      className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
      ripple={false}
      onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
        ) : (
        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
        )}
      </IconButton>
    </div>
    <Collapse open={openNav}>
      <NavList />
    </Collapse>
  </Navbar>
  );
}

function CardProduct(props) {
  return (
    <>
      <div className="bg-image relative">
        <img src={props.img} alt="product-img" className="rounded-lg w-full relative z-10" height={300}/>
        <div className="absolute z-20 top-2 right-2 bg-transparent">
          <IconButton variant="text" size="sm" className="rounded-full bg-white">
            <HeartIcon className="h-4 w-4" />
          </IconButton>
        </div>
        <Button variant="outlined" size="lg" className="px-3 lg:flex hidden bg-black !bg-opacity-20 border-white border-[1px] text-white gap-2 justify-center items-center absolute z-20 bottom-2 right-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <Typography className="font-['Helvetica'] font-medium">Quick View</Typography>
        </Button>
      </div>
      <div className="bg-body py-2">
        <div className="flex flex-col justify-start items-start lg:items-center lg:flex-row lg:justify-between">
          <Typography variant="small" className="font-['Helvetica'] font-semibold">
            Elegant basic shirt black
          </Typography>
          <Typography variant="small" className="font-['Helvetica'] font-normal text-right text-[13px] text-black">
            Rp 185.000
          </Typography>
        </div>
        <Typography variant="small" className="font-['Helvetica'] text-black text-[13px] font-medium">
          XLS S M
        </Typography>
        <Typography variant="small" className="font-['Helvetica'] text-[#7D7D7D] font-medium text-[13px]">
          10.3080 sold out
        </Typography>
      </div>
    </>
  )
}

function ListProducts() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h4" className="font-['Helvetica']">ELGANT SHIRT</Typography>
        <Button variant="outlined">View All</Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="flex flex-col">
          <CardProduct img={product1}/>
        </div>
        
        <div className="flex flex-col">
          <CardProduct img={product1}/>
        </div>
        
        <div className="flex flex-col">
          <CardProduct img={product1}/>
        </div>
        
        <div className="flex flex-col">
          <CardProduct img={product1}/>
        </div>
        
        <div className="flex flex-col">
          <CardProduct img={product2}/>
        </div>
        
        <div className="flex flex-col">
          <CardProduct img={product2}/>
        </div>
        
        <div className="flex flex-col">
          <CardProduct img={product2}/>
        </div>
        
        <div className="flex flex-col">
          <CardProduct img={product2}/>
        </div>
      </div>
    </div>
  )
}

function HomePage() {
  return (
  <>
    <NavbarSimple/>
    <img src={banner} alt={"banner"} className="max-w-full mt-[52px]"/>
    <ListProducts/>
    <img src={bgParfum} alt={"parfum"} className="max-w-full"/>
    <ListProducts/>
  </>
  )
}

export default HomePage;
