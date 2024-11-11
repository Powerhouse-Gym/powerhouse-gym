import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TrainingItem from "./TrainingItem";
import {
  cageAndFieldRentals,
  baseball,
  softball,
  soccer,
  volleyball,
  otherSportsAndTrainings,
} from "../training-data";
import NewsLetter from "./NewsLetter";
import Youth from "./Youth";
import PTimg from "../assets/crossfit/personaltraining.jpg";
import baseballimg from "../assets/baseballbackground.jpg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Training() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const h1Styles = { textAlign: "center", margin: "15px", fontSize: "46px" };

  return (
    <div className="training-div">
      <div
        className="sports-training-header"
        style={{
          backgroundImage: `url(${baseballimg})`,
          height: "40vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="intro-section-sports">
          <h1>Powerhouse SPORTS Training</h1>
          <p>
            Elevate your game with sports-specific training programs crafted by
            expert coaches. Whether you’re just starting out or pushing for peak
            performance, we have the tools to help you succeed.
          </p>
        </div>
      </div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          alignItems: "center",
        }}
      >
        {/* Vertical Tabs for Mobile */}
        <Box
          className="training-tabs"
          sx={{
            width: "100%",
            display: { xs: "flex", md: "none" }, // Show vertical tabs on mobile screens
            justifyContent: "flex-start",
            alignItems: "flex-start", // Align tabs to the top
            height: "100vh", // Full screen height for mobile
            position: "sticky",
            top: "15vh", // Adjust for navbar height
            zIndex: 1,
            borderBottom: { xs: 0, md: 1 }, // No border on mobile
            borderRight: { xs: 1, md: 0 }, // Border on the right for vertical tabs
            borderColor: "divider",
            flexDirection: "column", // Make tabs stack vertically
            paddingTop: "10vh", // Ensure the tabs are positioned below the navbar
          }}
        >
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="sports tabs"
            sx={{
              width: "100%",
            }}
          >
            <Tab
              label="Cage & Field Rentals"
              {...a11yProps(0)}
              sx={{
                fontSize: {
                  xs: 12,
                },
              }}
            />
            <Tab
              label="Baseball"
              {...a11yProps(1)}
              sx={{
                fontSize: {
                  xs: 12,
                },
              }}
            />
            <Tab
              label="Softball"
              {...a11yProps(2)}
              sx={{
                fontSize: {
                  xs: 12,
                },
              }}
            />
            <Tab
              label="Soccer"
              {...a11yProps(3)}
              sx={{
                fontSize: {
                  xs: 12,
                },
              }}
            />
            <Tab
              label="Volleyball"
              {...a11yProps(4)}
              sx={{
                fontSize: {
                  xs: 12,
                },
              }}
            />
            <Tab
              label="Other Sports and Training"
              {...a11yProps(5)}
              sx={{
                fontSize: {
                  xs: 12,
                },
              }}
            />
            <Tab
              label="Summer Youth Training"
              {...a11yProps(6)}
              sx={{
                fontSize: {
                  xs: 12,
                },
              }}
            />
          </Tabs>
        </Box>

        {/* Horizontal Tabs for Desktop */}
        <Box
          className="training-tabs"
          sx={{
            width: "100vw",
            display: { xs: "none", md: "flex" }, // Show horizontal tabs on larger screens
            justifyContent: "center",
            alignItems: "center",
            position: "sticky",
            top: "9vh", // Adjust for navbar height
            height: "8vh",
            zIndex: 1000,
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Box sx={{ maxWidth: "90vw", width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="sports tabs"
              centered
            >
              <Tab
                label="Cage & Field Rentals"
                {...a11yProps(0)}
                sx={{ fontSize: "1.2em" }}
              />
              <Tab label="Softball" {...a11yProps(2)}sx={{ fontSize: "1.2em" }} />
              <Tab label="Soccer" {...a11yProps(3)} sx={{ fontSize: "1.2em" }}/>
              <Tab label="Volleyball" {...a11yProps(4)}sx={{ fontSize: "1.2em" }} />
              <Tab label="Other Sports and Training" {...a11yProps(5)}sx={{ fontSize: "1.2em" }} />
              <Tab label="Summer Youth Training" {...a11yProps(6)}sx={{ fontSize: "1.2em" }} />
            </Tabs>
          </Box>
        </Box>

        {/* Content Panels */}
        <CustomTabPanel value={value} index={0}>
          <h1 style={h1Styles}>Cage & Field Rentals</h1>
          <TrainingItem arr={cageAndFieldRentals} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <h1 style={h1Styles}>Baseball</h1>
          <TrainingItem arr={baseball} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <h1 style={h1Styles}>Softball</h1>
          <TrainingItem arr={softball} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <h1 style={h1Styles}>Soccer</h1>
          <TrainingItem arr={soccer} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <h1 style={h1Styles}>Volleyball</h1>
          <TrainingItem arr={volleyball} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <h1 style={h1Styles}>Other Sports and Training</h1>
          <TrainingItem arr={otherSportsAndTrainings} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          <Youth />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
