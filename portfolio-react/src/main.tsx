import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import "/src/styles/index.scss";
import i18n from './i18n'; // ⚠️ Importer i18n ici
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <AppRouter />
    </I18nextProvider>
  </React.StrictMode>
);
