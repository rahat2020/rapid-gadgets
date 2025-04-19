"use client";
import React from "react";
import Header from "../common/Header";
import Collections from "./Collections";
import HomeBurka from "./HomeBurka";
import Processing from "./Processing";
import NewsletterSignup from "./NewsLetterSignup";
import DesignerSpotlight from "./DesignerSpotlight";

const HomeComponent = () => {
  return (
    <div>
      <Header />
      <DesignerSpotlight />
      <HomeBurka />
      <Collections />
      <Processing />
      <NewsletterSignup />
    </div>
  );
};

export default HomeComponent;
