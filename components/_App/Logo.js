import React from "react";
import { useTheme } from "next-themes";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const imagePath =
    resolvedTheme === "dark" ? "/images/logo_dark.png" : "/images/logo.png";
  return (
    <img
      src={imagePath}
      className={resolvedTheme}
      width="234"
      height="50"
      alt="Logo"
    />
  );
};

export default Logo;
