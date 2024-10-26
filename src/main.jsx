import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentGenerator from "@/pages/generator.jsx";
import Authenticator from './pages/auth.jsx';

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    //   <App />
    // </StrictMode>
    <BrowserRouter>

        <Routes>
            <Route element={<ContentGenerator />} path={"/"} />
            <Route element={<Authenticator />} path={"/login"} />
        </Routes>

    </BrowserRouter>
)
