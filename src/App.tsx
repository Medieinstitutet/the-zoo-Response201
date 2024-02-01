import {  Routes, Route } from "react-router-dom";
import './sass/style.scss';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Nav from './component/Nav';
import Animals from "./pages/Animals";
import { GetAnimalData } from "./component/GetAnimalData";

function App() {
  GetAnimalData()

  return (
    <Routes>
    <Route path="/" element={<Nav   /> } errorElement={ <NoPage/> }>
    <Route index element={<Home />} />
   <Route path="animals" element={<Animals />} />
   {/*    <Route path="/:id" element={<Product  />} />  */}
  
      <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
  )
}

export default App
