import TabsContext from "@mui/lab/TabContext";
import { Box, Tab } from "@mui/material";
import React from "react";
import { useState } from "react";
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { NavLink } from "react-router-dom";
import AddProduct from "../component/Add/AddProduct";
import { Button } from "@mui/material";
import AddStock from "../component/Add/AddStock";

const Add = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleNext = (event) => {
    setValue((parseInt(value)+1).toString());
  }

  const handlePrev = (event) => {
    setValue((parseInt(value)-1).toString());
  }

  return (  
    <React.Fragment>
    <TabsContext value={value}>      
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Add product" value="1" />
        <Tab label="Add stock" value="2" />
      </TabList>
      <TabPanel value="1">
        <AddProduct />
      </TabPanel>
      <TabPanel value="2">
        <AddStock />
      </TabPanel>
    </TabsContext>    
    <NavLink to={"/product"}><Button variant="outlined" color="error">Close</Button></NavLink>
    {parseInt(value) > 1 && <Button variant="outlined" onClick={handlePrev}>Previous step</Button>}
    {parseInt(value) < 2 && <Button variant="outlined" onClick={handleNext}>Next step</Button>}
    {parseInt(value) == 2 && <Button variant="outlined">Save</Button>}
  </React.Fragment>)
}

export default Add;