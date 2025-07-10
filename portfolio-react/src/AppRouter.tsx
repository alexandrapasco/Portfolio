import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App/App";
import Error404 from "./pages/Error404/Error404";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
