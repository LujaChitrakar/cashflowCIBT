import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/page/Layout";
import Dashboard from "./components/page/Dashboard";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
