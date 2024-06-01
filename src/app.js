import { Routes, Route } from "react-router-dom";
import { Entrypoint } from "./Entrypoint";
import { Introduction } from "./Introduction";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Entrypoint />} />
        <Route path="introduction" element={<Introduction />} />
      </Routes>
    </>
  );
}
