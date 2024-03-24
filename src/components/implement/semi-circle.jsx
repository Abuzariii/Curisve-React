"use client";

import classes from "./semi-circle.module.css";
import ReactCurvedText from "react-curved-text";
import newsData from "../../../public/data/data-15k-20k-first50.json";

export default function SemiCircle() {
  return (
    <div className={classes.mainDiv}>
      {newsData.slice(2500, 5000).map((item, index) => (
        <div key={index}>
          <ReactCurvedText
            width="480"
            height="230"
            cx="275"
            cy="220"
            rx="125"
            ry="135"
            startOffset="30"
            reversed={true}
            text={item.text}
            textProps={{
              style: { fontSize: "15", fill: "black" },
            }}
            textPathProps={null}
            tspanProps={{ dy: "7" }}
            ellipseProps={null}
            svgProps={null}
          />
        </div>
      ))}
    </div>
  );
}
