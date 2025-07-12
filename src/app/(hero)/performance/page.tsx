import React from "react";
import performance from "/public/wtm2.jpg";
import Hero from "../../components/hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "performance",
};

export default function page() {
  return (
    <div>
      <Hero imgUrl={performance} altTxt="Home" content="Performance" />
    </div>
  );
}
