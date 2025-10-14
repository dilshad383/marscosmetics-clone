import React, { useState } from "react";
import ProductsSlider from "../components/ProductsSlider";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
const Bestseller = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="w-full">
      <TabContext value={value}>
        <Box display="flex" width="100%" justifyContent="center">
          <TabList
            onChange={handleChange}
            textColor="inherit"
            sx={{
              "& .MuiTabs-indicator": {
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
              },
              "& .MuiTabs-indicatorSpan": {
                maxWidth: 60, 
                width: "100%",
                backgroundColor: "black",
                borderRadius: "2px",
              },
              "& .MuiTab-root": {
                color: "black",
                textTransform: "none",
                fontWeight: 500,
                fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" },
                minWidth: "auto", 
                paddingX: { xs: 0.5, sm: 1.5, md: 2 },
                paddingY: 1,
                "&.Mui-selected": {
                  color: "black",
                },
              },
            }}
            TabIndicatorProps={{
              children: <span className="MuiTabs-indicatorSpan" />,
            }}
          >
            <Tab label="Lips" value="1" sx={{ color: "black" }} />
            <Tab label="Face" value="2" sx={{ color: "black" }} />
            <Tab label="Eyes" value="3" sx={{ color: "black" }} />
            <Tab label="Tools" value="4" sx={{ color: "black" }} />
            <Tab label="Sale" value="5" sx={{ color: "black" }} />
          </TabList>
        </Box>
        <TabPanel value="1" className="">
          <ProductsSlider category="Lips"/>
        </TabPanel>
        <TabPanel value="2">
          <ProductsSlider category="Face"/>
        </TabPanel>
        <TabPanel value="3">
          <ProductsSlider category="Eyes"/>
        </TabPanel>
        <TabPanel value="4">
          <ProductsSlider category="Tools"/>
        </TabPanel>
        <TabPanel value="5">
          <ProductsSlider category="Sale"/>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default Bestseller;
