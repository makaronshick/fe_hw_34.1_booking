import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../main/Main.js";
import Hotels from "../hotels/Hotels.js";
import About from "../about/About.js";
import NotFound from "../notFound/NotFound.js";
import ErrorBoundary from "../errorBounary/ErrorBoundary.js";
import "./renderContainer.styles.css";

export default () => {
  return (
    <div className="render_container">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};
