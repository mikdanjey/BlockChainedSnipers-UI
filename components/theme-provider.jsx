"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import wrapper from "@/redux/withReduxStore";

export function ThemeProvider({ children, ...props }) {
  // const { store } = wrapper.useWrappedStore(props);
  return (
    <>
    {/* <Provider store={store}> */}
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    {/* </Provider> */}
    </>
  );
}
