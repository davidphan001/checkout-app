import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShowPage, Error } from "./pages";
import Checkout from "./pages/Checkout";
import ShowFullPage from "./pages/ShowFullPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowPage />}></Route>
        <Route path="/:id" element={<ShowFullPage />}></Route>
        <Route path="/Checkout/:id" element={<Checkout />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
