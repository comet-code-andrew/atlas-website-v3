import React from "react";
import Link from "next/link";
import SectionCard from "./SectionCard";

const Section = ({
  sectionId,
  bgColor = false,
  rowOption = "row",
  topline,
  title,
  description,
  btn = false,
  btnText,
  btnLink,
  children,
}) => {
  return (
    <div
      id={sectionId}
      className={`section-container ${bgColor && "bg-regular"}`}
    >
      <div className="container">
        <div className={`section-row ${rowOption}`}>
          {/* 
              each row will have 2 columns
                - content column
                - asset column

              row options
                40/60 = row
                60/40 = row-reverse
                50/50 = even
                100 - 100 = multi-row (for services section)

              layout map
                #section id
                  .container 
                    .row (row, row-reverse, even)
                      .col (content)
                        topline
                        title
                        description
                      .col (assets eg cards, images or single image)
                        single image
                        cards
          */}
          <div className="section-col-content">
            <div className="topline">{topline}</div>
            <div className="title">{title}</div>
            {/* description section will map the json data to multiple p tags */}
            <div className="description">{description}</div>
            {btn && (
              <Link href={`/${btnLink}`} className="btn">
                {btnText}
              </Link>
            )}
          </div>
          <div className="section-col-asset">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Section;
