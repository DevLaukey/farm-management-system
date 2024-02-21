import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GrassIcon from "@mui/icons-material/Grass";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "react-router-dom";
import { Add, ExpandLess, ExpandMore} from "@mui/icons-material";
import { Collapse, List } from "@mui/material";

export const MainListItems = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [color, setColor] = React.useState("");

  const [open, setOpen] = React.useState(true);
  const [openInventory, setOpenInventory] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleInventoryClick = () => {
    setOpenInventory(!openInventory);
  }
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setColor("#8c5000");
  };

  
  return (
    <>
      <ListItemButton
        component={Link}
        to="/"
        selected={selectedIndex === 0}
        color={color}
        onClick={(e) => handleListItemClick(e, 0)}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/add"
        selected={selectedIndex === 0}
        onClick={(e) => {
          handleClick();
          handleListItemClick(e, 0);
        }}
      >
        <ListItemIcon>
          <GrassIcon />
        </ListItemIcon>
        <ListItemText primary="Crop Monitoring" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          <ListItemButton component={Link} to="/add">
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="Add Crop" />
          </ListItemButton>
          <ListItemButton component={Link} to="/view">
            <ListItemIcon>
              <GrassIcon />
            </ListItemIcon>
            <ListItemText primary="View Crop" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={(e) => handleListItemClick(e, 0)}
      >
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Financial Analysis" />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 0}
        component={Link}
        to="/addInventory"
        onClick={(e) => {
          handleInventoryClick()
          handleListItemClick(e, 0)
          }}
      >
        <ListItemIcon>
          <InventoryIcon />
        </ListItemIcon>
        <ListItemText primary="Inventory Tracking" />
        {openInventory ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openInventory} timeout="auto" unmountOnExit>
        <List>
          <ListItemButton component={Link} to="/addInventory">
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="Add Machine" />
          </ListItemButton>
          <ListItemButton component={Link} to="/addLivestock">
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary="Add Livestock" />
          </ListItemButton>
          <ListItemButton component={Link} to="/viewInventory">
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary="View Inventory" />
          </ListItemButton>
        </List>
    </Collapse>
    </>
  );
};

