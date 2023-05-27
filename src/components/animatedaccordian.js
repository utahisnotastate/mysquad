import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Flip from "react-reveal/Flip";

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: "1.25rem",
        fontWeight: "bold",
    },
});

const AnimatedAccordion = ({ summary, details, index }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            className={classes.root}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
            >
                <h2 className={classes.heading}>{summary}</h2>
            </AccordionSummary>
            <AccordionDetails>

            </AccordionDetails>
        </Accordion>
    );
};