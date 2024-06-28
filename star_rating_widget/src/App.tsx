import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StarComponent } from "./components/Star"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/star" element={<StarComponent />} />
        </Routes>
      </BrowserRouter>
     {/* Hi there */}
    </>
  )
}

export default App
