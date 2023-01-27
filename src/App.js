import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShowPage, Error } from "./pages";
import Checkout from "./pages/Checkout";
import ShowFullPage from "./pages/ShowFullPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/checkout-app" element={<ShowPage />}></Route>
        <Route path="/checkout-app/:id" element={<ShowFullPage />}></Route>
        <Route path="/checkout-app/Checkout/:id" element={<Checkout />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
