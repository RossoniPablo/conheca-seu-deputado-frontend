import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { PartidoPage } from "./pages/PartidoPage"
import { DeputadoPage } from "./pages/DeputadoPage"
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/partido/:siglaPartido" element={<PartidoPage />} />
      <Route path="/deputado/:id" element={<DeputadoPage />} />
    </Routes>
  )
}

export default App
