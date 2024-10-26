import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentGenerator from "@/pages/generator.jsx";
import Error404 from './pages/pagenotfound.jsx'

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    //   <App />
    // </StrictMode>
    <BrowserRouter>

        <Routes>
            <Route element=<ContentGenerator /> path={"/generate"} />
            <Route element=<Error404 /> path={"*"} />
        </Routes>

    </BrowserRouter>
)
