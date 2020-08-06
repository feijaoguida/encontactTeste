import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_br from "./Translations/br/common.json";
import common_en from "./Translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "br", // language to use
  resources: {
    br: {
      common: common_br, // 'common' is our custom namespace
    },
    en: {
      common: common_en,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
