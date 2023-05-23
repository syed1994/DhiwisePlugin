import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Productpage = React.lazy(() => import("pages/Productpage"));
const Shoppingcart = React.lazy(() => import("pages/Shoppingcart"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Practicedesigns = React.lazy(() => import("pages/Practicedesigns"));
const Whatsinthis = React.lazy(() => import("pages/Whatsinthis"));
const Aboutthisfile = React.lazy(() => import("pages/Aboutthisfile"));
const Thumbnail = React.lazy(() => import("pages/Thumbnail"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/thumbnail" element={<Thumbnail />} />
          <Route path="/aboutthisfile" element={<Aboutthisfile />} />
          <Route path="/whatsinthis" element={<Whatsinthis />} />
          <Route path="/practicedesigns" element={<Practicedesigns />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
          <Route path="/productpage" element={<Productpage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
