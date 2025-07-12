import React from "react";
import scale from "/public/wtm4.jpg";
import Hero from "../../components/hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "scale",
};

export default function page() {
  return (
    <div>
      <Hero imgUrl={scale} altTxt="Home" content="Scale" />
    </div>
  );
}
