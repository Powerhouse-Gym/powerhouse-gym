import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="sports tabs">
          <Tab label="Cage & Field Rentals" {...a11yProps(0)} />
          <Tab label="Baseball" {...a11yProps(1)} />
          <Tab label="Softball" {...a11yProps(2)} />
          <Tab label="Soccer" {...a11yProps(3)} />
          <Tab label="Volleyball" {...a11yProps(4)} />
          <Tab label="Other Sports and Training" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Cage & Field Rentals content here.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Baseball content here.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Softball content here.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Soccer content here.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Volleyball content here.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Other Sports and Training content here.
      </CustomTabPanel>
    </Box>
  );
}
