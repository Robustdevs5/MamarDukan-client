
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import CartButton from '../Cart/CartButton/CartButton';
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

const Description = ({review, setReview, singleProduct}) => {

  const classes = useStyles();
  const [ratingProducts, setRatingProducts] = useState(singleProduct._id);
  const [value, setValue] = useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const [categoryProducts, setCategoryProducts] = useState([])

  
  const {category , _id} = singleProduct;

  useEffect(() => {
      fetch(`https://mamar-dukan.herokuapp.com/products/category?category=${category}`)
      .then(res => res.json())
      .then(data => setCategoryProducts(data.result))

  }, [])

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
          <Tab label="More Product" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
{/* 
      { singleProducts.map(products => {
      return <Fragment key={products._id} products={products}> */}
        <TabPanel  value={value} index={0}>
          <p>{singleProduct._id}</p>
          <p>{singleProduct.description}</p>

          <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>



          <h3>What do you get</h3>
          <p>Sound of Marshall, unplugs the chords, and takes the show on the road.
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>

          <p>The FM radio is perhaps gone for good, the assumption apparently being that the jury has ruled in favor of streaming over the internet. The IR blaster is another feature due for retirement – the S6 had it, then the Note5 didn’t, and now with the S7 the trend is clear.</p>
        </TabPanel>
        <TabPanel className=""value={value} index={1}>
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
          <StarRating review={review} setReview={setReview} singleProduct={singleProduct}/>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:gap-4">
              {
                categoryProducts.map(categoryProduct => {
                return  <div categoryProduct={categoryProduct} key={categoryProduct._id} className="group relative w-full bg-white border cursor-pointer">
                  <div className="overflow-x-hidden relative border-b p-2">
                      <img className="h-48 w-full object-cover" src={categoryProduct.img} alt="Product Title" />
                      
                      <div className="text-sm absolute top-2 left-2 bg-custom px-4 py-2 text-white rounded flex flex-col items-center justify-center hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                          <span className="font-bold">{categoryProduct.category}</span>
                      </div>
                      <div className="w-full bottom-0 flex bg-gray-50 justify-between px-2 absolute transform duration-900 opacity-0 group-hover:opacity-100">
                        <CartButton cartProduct={categoryProduct}/>
                      </div>
                  </div>
                  <div className="p-4 flex justify-between ">
                    <div>
                      <p className="text-md font-semibold text-gray-900 mb-0">{categoryProduct.name}</p>
                      <p className="font-bold text-red-900 mt-0">${categoryProduct.price}</p>
                    </div>
                  </div>

              </div>


            })
            }
              
        </div>
        </TabPanel>
    {/* </Fragment>
    })
      } */}
    </div>
  );
}

export default Description;