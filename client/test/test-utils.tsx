import React, { PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { AppStore, RootState, setupStore } from "@src/redux/store";
import { IntlProvider } from "react-intl";
import type { PreloadedState } from '@reduxjs/toolkit'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <IntlProvider locale="en-US">
        <Provider store={store}>{children}</Provider>
      </IntlProvider>
    )
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
export * from "@testing-library/react";
export { renderWithProviders as render };
