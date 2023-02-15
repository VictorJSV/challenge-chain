import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@src/redux/store";
import { IntlProvider } from "react-intl";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <IntlProvider locale="en-US">
      <Provider store={store}>{children}</Provider>
    </IntlProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
