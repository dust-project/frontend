import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContentGenerator from "@/pages/generator.jsx";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
    <BrowserRouter>

        <Routes>
            <Route element={<ContentGenerator />} path={"/gen"} />
        </Routes>

    </BrowserRouter>
)
