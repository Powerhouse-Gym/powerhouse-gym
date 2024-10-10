import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TrainingItem from './TrainingItem';
import { cageAndFieldRentals, baseball, softball, soccer, volleyball, otherSportsAndTrainings } from '../training-data';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Training() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
        sx={{
          width: '100%', 
          display: 'flex',
          justifyContent: 'center', // Centering the tabs horizontally
          position: 'sticky',
          top: '9vh', // Adjusted for navbar height
          zIndex: 1000, // Keeps it above other content
          backgroundColor: 'white',
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Box sx={{ maxWidth: 960, width: '100%' }}> {/* Optional: Adjust maxWidth to control centering and width */}
          <Tabs value={value} onChange={handleChange} aria-label="sports tabs" centered>
            <Tab label="Cage & Field Rentals" {...a11yProps(0)} />
            <Tab label="Baseball" {...a11yProps(1)} />
            <Tab label="Softball" {...a11yProps(2)} />
            <Tab label="Soccer" {...a11yProps(3)} />
            <Tab label="Volleyball" {...a11yProps(4)} />
            <Tab label="Other Sports and Training" {...a11yProps(5)} />
          </Tabs>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h1>Cage & Field Rentals</h1>
        <TrainingItem arr={cageAndFieldRentals} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h1>Baseball</h1>
        <TrainingItem arr={baseball} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h1>Softball</h1>
        <TrainingItem arr={softball} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <h1>Soccer</h1>
        <TrainingItem arr={soccer} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <h1>Volleyball</h1>
        <TrainingItem arr={volleyball} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <h1>Other Sports and Training</h1>
        <TrainingItem arr={otherSportsAndTrainings} />
      </CustomTabPanel>
    </Box>
  );
}
