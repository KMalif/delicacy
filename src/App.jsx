import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./layout/Layout/Layout"
import { Home } from "./pages/Home/Home"
import Favorite from "./pages/Favorite/Favorite"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path=":category" element={<Home/>}/>
            <Route path="/Favorite" element={<Favorite/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
