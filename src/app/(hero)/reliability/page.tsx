import React from "react";
import reliability from "/public/wtm3.jpg";
import Hero from "../../components/hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "reliability",
};

export default function page() {
  return (
    <div>
      <Hero imgUrl={reliability} altTxt="Home" content="Reliability" />
    </div>
  );
}
