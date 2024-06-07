import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import QuickView from "./QuickView/QuickView";
import ServiceView from "./ServiceView/ServiceView";
import icons from "../../assets/icons";

const HomePage = () => {
  return (
    <div>
      <div className="top-header" style={{ backgroundColor: "#FFEFE6" }}>
        <Navbar />
        <QuickView />
        <div
          className="bottom-view"
          style={{
            position: "absolute",
            width: "90%",
            marginTop: "-50px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            flexWrap: "wrap", // Add this to allow items to wrap
          }}
        >
          <ServiceView
            imageUrl={icons.icFastDelivery}
            title="Fast Delivery"
            description="Promise To Deliver Within 30 Mins."
          />
          <ServiceView
            imageUrl={icons.icFreshFood}
            title="Fresh Food"
            description="Your Food Will Be Delivered 100% Fresh To Your Home."
          />
          <ServiceView
            imageUrl={icons.icFreeDelivery}
            title="Free Delivery"
            description="Your Food Delivery Is Absolutely Free. No Cost Just Order."
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
