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
import BrandNProducts from "./BrandNProducts/BrandNProducts";
import Offer from "./Offer";

const HomeComponent = () => {
  return (
    <div>
      <Header />
      <ProductCategories />
      <NewArrival />
      <MostPopular />
      <Recommended />
      <BrandNProducts />
      <Processing />
      <Offer />
      <ClientReview />
      <NewsletterSignup />
    </div>
  );
};

export default HomeComponent;
