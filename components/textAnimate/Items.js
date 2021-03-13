import { ClassNames } from "@emotion/core";
import React from "react";
import ClassNames from "./AnimatedText.module.css";

const AnimatedText = ({ textColor, overlayColor, children, ...props }) => {
  return (
    <section className={ClassNames.AnimatedTextContainer} {...props}>
      <h1
        style={{ color: textColor }}
        className={ClassNames.AnimatedTextContent}
      >
        {children}
      </h1>
      <h1
        style={{ color: overlayColor }}
        className={ClassNames.AnimatedTextContentClone}
      >
        {children}
      </h1>
    </section>
  );
};

export { AnimatedText };
