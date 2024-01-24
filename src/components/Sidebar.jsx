import bootstrapLogo from "../assets/bootstrap-logo.svg";
import {Link} from "react-router-dom";
import {Card, Chip, List, ListItem, ListItemPrefix, ListItemSuffix, Typography} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon
} from "@heroicons/react/16/solid/index.js";

function Sidebar() {
  return (
  <aside className="hidden lg:block">
    <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none" shadow={false}>
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Record Delays
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <Link to={`users`} className="w-full flex items-center">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Users
          </Link>
        </ListItem>
        <ListItem>
          <Link to={`rombels`} className="w-full flex items-center">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Rombels
          </Link>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Rayons
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Students
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Lates
        </ListItem>
      </List>
    </Card>
  </aside>
  )
}

export default Sidebar;
