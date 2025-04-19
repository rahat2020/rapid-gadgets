"use client";

import Link from "next/link";
import { memo, useState } from "react";
import { ArrowRight } from "react-feather";

const AppButton = ({
  title = "Get Started",
  showIcon = false,
  link = "#",
  btnIcon: Icon = ArrowRight,
  hovered = false,
  iconClsname = "",
  customClass = "button_su_inner",
  handleClick = () => {},
}) => {
  const [circleStyle, setCircleStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    marginLeft: 0,
    marginTop: 0,
    backgroundColor: "#F02D35",
    transition: "all 0.5s ease-in-out",
  });

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const parentOffset = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - parentOffset.left;
    const relY = e.clientY - parentOffset.top;
    setCircleStyle({
      left: relX,
      top: relY,
      width: 400,
      height: 400,
      marginLeft: -200,
      marginTop: -200,
      backgroundColor: "#F02D35",
      transition: "all 0.5s ease-in-out", // Ensure transition is included
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const parentOffset = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - parentOffset.left;
    const relY = e.clientY - parentOffset.top;
    setCircleStyle({
      left: relX,
      top: relY,
      width: 0,
      height: 0,
      marginLeft: 0,
      marginTop: 0,
      backgroundColor: "#F02D35",
      transition: "all 0.5s ease-in-out", // Ensure transition is included
    });
  };

  return (
    <div
      className="overflow-hidden relative inline-block"
      role="button"
      tabIndex={0}
      onClick={() => handleClick()}
    >
      <span className="su_button_circle" style={circleStyle}></span>
      <Link
        href={link}
        className={`${customClass} ${hovered ? "button_su_inner" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="relative font-medium z-50 flex justify-between items-center gap-2">
          {title} {showIcon && <Icon className={`w-5 h-5 ${iconClsname}`} />}
        </span>
      </Link>
    </div>
  );
};

export default memo(AppButton);
