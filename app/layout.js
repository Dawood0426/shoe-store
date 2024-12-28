// app/layout.js
"use client";

import { Provider } from "react-redux";
import { myStore } from "@/store/store";
import { Header } from "@/components/header/header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
      </head>
      <body>
        <Provider store={myStore}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
