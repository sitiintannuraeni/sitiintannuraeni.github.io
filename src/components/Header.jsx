import avatar from "../assets/avatar.jpg";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {useNavigate} from "react-router-dom";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography
} from "@material-tailwind/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
  UserCircleIcon,
  XMarkIcon
} from "@heroicons/react/16/solid/index.js";
import {createElement, useEffect, useState} from "react";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const closeMenu = () => setIsMenuOpen(false);
  
  return (
  <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
    <MenuHandler>
      <Button
      ripple={false}
      variant="text"
      color="blue-gray"
      className="flex items-center text-right gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto normal-case hover:bg-transparent active:bg-transparent"
      >
        <div className="px-2">
          <Typography variant="h6" color="blue-gray" className="text-sm">
            {props.name}
          </Typography>
          <Typography variant="small">
            {props.role === 'admin' ? 'Administrator' : 'Pembimbing Siswa'}
          </Typography>
        </div>
        <Avatar
        variant="circular"
        size="sm"
        alt="tania andrew"
        className="border border-gray-900 p-0.5"
        src={avatar}
        />
        <ChevronDownIcon
        strokeWidth={2.5}
        className={`h-3 w-3 transition-transform ${
        isMenuOpen ? "rotate-180" : ""
        }`}
        />
      </Button>
    </MenuHandler>
    <MenuList className="p-1">
      {profileMenuItems.map(({ label, icon }, key) => {
        const isLastItem = key === profileMenuItems.length - 1;
        return (
        <MenuItem
        key={label}
        onClick={closeMenu}
        className={`flex items-center gap-2 rounded ${
        isLastItem
        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        : ""
        }`}
        >
          {createElement(icon, {
            className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
            strokeWidth: 2,
          })}
          <Typography
          as="span"
          variant="small"
          className="font-normal"
          color={isLastItem ? "red" : "inherit"}
          >
            {label}
          </Typography>
        </MenuItem>
        );
      })}
    </MenuList>
  </Menu>
  );
}

function Header() {
  const authUser = useAuthUser()
  const navigate = useNavigate();
  const signOut = useSignOut();
  const {name, role} = authUser;
  const [openNav, setOpenNav] = useState(false);
  
  const handleWindowResize = () =>
  window.innerWidth >= 960 && setOpenNav(false);
  
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  
  
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut()
    navigate('/login')
  }
  
  return (
  <Navbar className="sticky top-0 z-10 max-w-screen px-4 py-3 rounded-none shadow-xl shadow-blue-gray-900/5 bg-white" blurred={false}>
    <div className="flex items-center justify-between text-blue-gray-900">
      <IconButton
      variant="text"
      className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
      ripple={false}
      onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
        ) : (
        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
        )}
      </IconButton>
      <ProfileMenu name={name} role={role}/>
    </div>
  </Navbar>
  )
}

export default Header;
