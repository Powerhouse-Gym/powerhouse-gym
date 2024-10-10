import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default function AccordionUsage(props) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <div>
<Accordion expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={
          [{ fontSize: "larger", width: "400px"},
          expanded
            ? {
                '& .MuiAccordion-region': {
                  height: 'auto',
                },
                '& .MuiAccordionDetails-root': {
                  display: 'block',
                },
              }
            : {
                '& .MuiAccordion-region': {
                  height: 0,
                },
                '& .MuiAccordionDetails-root': {
                  display: 'none',
                },
              },
        ]}>
                    <AccordionSummary
                          expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Learn More
                    </AccordionSummary>
                    <AccordionDetails>
             {props.text}
                    </AccordionDetails>
                </Accordion>
    </div>
  );
}
