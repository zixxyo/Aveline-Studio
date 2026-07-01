import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { Dashboard } from "./features/dashboard/Dashboard";
import { FormulaLab } from "./features/formula-lab/FormulaLab";
import { IngredientsPage } from "./pages/IngredientsPage";
import { SuppliersPage } from "./pages/SuppliersPage"; // Import the new Suppliers page

function App() {
  return (
    <Router>
      <AppShell>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/formula-lab" element={<FormulaLab />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/suppliers" element={<SuppliersPage />} /> {/* Add new route for Suppliers */}
        </Routes>
      </AppShell>
    </Router>
  );
}

export default App;
