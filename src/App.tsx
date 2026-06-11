import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Missing from "./pages/Missing";

function App() {
  return (
    <Routes>
      {/* Template of Website */}
      <Route path="/" element={<Layout />}>
        {/* Main Page */}
        <Route index element={<Home />} />

        {/* Post Route */}
        {/* Main */}
        {/* Individual Post Route */}
        {/* Edit Route */}
        {/* Static Pages - about and missing */}
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
