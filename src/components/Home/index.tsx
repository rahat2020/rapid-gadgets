"use client";
import React from "react";
import Header from "../common/Header";
import Processing from "./Processing";
import NewsletterSignup from "./NewsLetterSignup";
import ProductCategories from "./ProductCategories";
import NewArrival from "./NewArrival";
import MostPopular from "./MostPopular";
import Recommended from "./Recommended";
import ClientReview from "./ClientReview";

const HomeComponent = () => {
  return (
    <div>
      <Header />
      <Processing />
      <ProductCategories />
      <NewArrival />
      <MostPopular />
      <Recommended />
      <ClientReview />
      <NewsletterSignup />
    </div>
  );
};

export default HomeComponent;
