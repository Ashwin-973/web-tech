import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SectionPage from "./pages/SectionPage";
import SubPage from "./pages/SubPage";
import Placements from "./pages/Placements";
import Contact from "./pages/Contact";
import menuData from "./Menudata.js";

const sectionDescriptions = {
  "/about": "Learn about Greenfield University's history, mission, and leadership.",
  "/academics": "Explore our departments, courses, faculty, and academic calendar.",
  "/admissions": "Everything you need to apply to our undergraduate, postgraduate, and PhD programs.",
  "/research": "Discover our research centers, publications, and ongoing projects.",
  "/campus-life": "Life on campus — housing, clubs, sports, and events.",
};

function App() {
  return (
    <BrowserRouter>
      <Navbar menu={menuData} collegeName="Greenfield University" />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Dynamically build a route for every section and its dropdown
              sub-items, so adding a new entry to menuData.js is enough to
              wire up new pages without touching this file again. */}
          {menuData
            .filter((item) => item.path !== "/")
            .map((item) => (
              <React.Fragment key={item.path}>
                <Route
                  path={item.path}
                  element={
                    item.dropdown ? (
                      <SectionPage
                        title={item.label}
                        description={sectionDescriptions[item.path] || ""}
                        links={item.dropdown}
                      />
                    ) : item.path === "/placements" ? (
                      <Placements />
                    ) : item.path === "/contact" ? (
                      <Contact />
                    ) : (
                      <SectionPage title={item.label} description="" links={[]} />
                    )
                  }
                />

                {item.dropdown &&
                  item.dropdown.map((sub) => (
                    <Route
                      key={sub.path}
                      path={sub.path}
                      element={
                        <SubPage
                          title={sub.label}
                          parentLabel={item.label}
                          parentPath={item.path}
                          content={`This is placeholder content for the "${sub.label}" page under ${item.label}. Replace with real university content.`}
                        />
                      }
                    />
                  ))}
              </React.Fragment>
            ))}

          {/* Fallback for unmatched routes */}
          <Route
            path="*"
            element={
              <div className="page">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;