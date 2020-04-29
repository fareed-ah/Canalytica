import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

const textColor = { color: "#FFFFFF" };

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon style={textColor} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" style={textColor} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={textColor} />
      </ListItemIcon>
      <ListItemText primary="Mentions" style={textColor} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon style={textColor} />
      </ListItemIcon>
      <ListItemText primary="Reports" style={textColor} />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon style={textColor} />
      </ListItemIcon>
      <ListItemText primary="Sources" style={textColor} />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset style={textColor}>
      Saved reports
    </ListSubheader> */}
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={textColor} />
      </ListItemIcon>
      <ListItemText primary="Settings" style={textColor} />
    </ListItem>
  </div>
);
