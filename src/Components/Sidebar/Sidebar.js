import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ height: "580px" }}>
      <List>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Events</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Link to="event/newevents">New events</Link>
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>Create New events</Typography>
          </AccordionDetails>
        </Accordion>
      </List>

      <List>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Courses</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>All Courses</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>Create New Courses</Typography>
          </AccordionDetails>
        </Accordion>
      </List>
      <List>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Comunication</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>All Comunication</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>Create New Comunication</Typography>
          </AccordionDetails>
        </Accordion>
      </List>
      <List>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>Comunication</Typography>
          </AccordionSummary>
        </Accordion>
      </List>
    </div>
  );
};

export default Sidebar;
