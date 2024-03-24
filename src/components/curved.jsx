"use client";
import ReactCurvedText from "react-curved-text";
import classes from "./curved.module.css";

export default function Curved() {
  return (
    <div className={classes.mainDiv}>
      <ReactCurvedText
        width="450"
        height="220"
        cx="256" // Increase to drag right and decrease to drag left
        cy="142" // Increase to drag down and decrease to drag up
        rx="174" // Increase to widen the circle radius
        ry="71" // Decrease to flatten
        startOffset="0"
        reversed={true}
        text="اسلام باد سابقہ واپڈا کی مختلف ڈسٹری بیوشن"
        textProps={{ style: { fontSize: "23", color: "white" } }}
        textPathProps={null}
        tspanProps={{ dy: "7" }}
        ellipseProps={null}
        svgProps={null}
        className={classes.text}
      />
    </div>
  );
}
