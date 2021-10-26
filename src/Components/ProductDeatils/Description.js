import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import StarRating from "../Utilities/StarRating";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

const Description = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Specification" {...a11yProps(1)} />
          <Tab label="Reviews" {...a11yProps(2)} />
          <Tab label="Vendor Info" {...a11yProps(3)} />
          <Tab label="More Product" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <p>Embodying the Raw, Wayward Spirit of Rock ‘N’ Roll
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>

        <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>



        <h3>What do you get</h3>
        <p>Sound of Marshall, unplugs the chords, and takes the show on the road.
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>

        <p>The FM radio is perhaps gone for good, the assumption apparently being that the jury has ruled in favor of streaming over the internet. The IR blaster is another feature due for retirement – the S6 had it, then the Note5 didn’t, and now with the S7 the trend is clear.</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="">
                <tr>
                  <th
                    scope="col"
                    className="bg-gray-50 px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Color
                  </th>
                  <td
                    scope="col"
                    className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Black, White
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="bg-gray-50 px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Resolution
                  </th>
                  <td
                    scope="col"
                    className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    HD 1080
                  </td>
                </tr>
                
                <tr>
                  <th
                    scope="col"
                    className="bg-gray-50 px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Number Of Cameras	
                  </th>
                  <td
                    scope="col"
                    className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    1
                  </td>
                </tr>
                <tr>
                  <th
                    scope="col"
                    className="bg-gray-50 px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Night Vision	
                  </th>
                  <td
                    scope="col"
                    className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider"
                  >
                    32 feet / 10 meters
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <StarRating/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </div>
  );
}

export default Description;