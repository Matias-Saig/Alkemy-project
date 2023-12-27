import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import RouteNotFound from "./pages/RouteNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <home />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
              path="/category/:categoryId"
              element={<Home />}
            />
            <Route path="/item/:itemId" element='' />

          <Route path="/not-found" element={<RouteNotFound />} />
          <Route path="*" element={<Navigate to={"/not-found"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
