import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import productsData from "../components/productsData";

const Bestseller = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Helper function to render Swiper per category
  const renderProductsSlider = (category) => {
    const data = productsData[category] || [];

    return (
      <div className="relative">
        <Swiper
          cssMode={true}
          slidesPerView={4}
          spaceBetween={20}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          breakpoints={{
            1020: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            600: { slidesPerView: 2 },
            0: { slidesPerView: 2, spaceBetween: 10 },
          }}
          className="mySwiper !overflow-visible"
        >
          {data.map((card, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard product={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
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

        <TabPanel value="1">{renderProductsSlider("Lips")}</TabPanel>
        <TabPanel value="2">{renderProductsSlider("Face")}</TabPanel>
        <TabPanel value="3">{renderProductsSlider("Eyes")}</TabPanel>
        <TabPanel value="4">{renderProductsSlider("Tools")}</TabPanel>
        <TabPanel value="5">{renderProductsSlider("Sale")}</TabPanel>
      </TabContext>
    </div>
  );
};

export default Bestseller;
