import Layout from "@/components/MainLayout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DefaultPage from "@/pages/DefaultPage"
import CRMPage from "./pages/CRMPage"
import FinancePage from "./pages/FinancePage"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/default" element={<DefaultPage />} />
          <Route path="/crm" element={<CRMPage />} />
          <Route path="/finance" element={<FinancePage />} />
        </Routes>
      </Layout>
    </Router>
  
  )
}

export default App
