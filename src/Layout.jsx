import { Routes, Route } from "react-router-dom";
import { QrCodeGenerator} from "./components/Generate/QrCodeGenerator"
import { QrCodeScanner} from "./components/Scan/QrCodeScanner"
import { Navigation } from "./components/Navigation/Navigation"
import { ScanHistory } from "./components/History/ScanHistory";
import { GenerateHistory } from "./components/History/GenerateHistory";

const Layout = () => {
    return (
        <div>
            <Navigation />
            {/* <QrCodeGenerator /> */}
            {/* <QrCodeScanner /> */}
            <Routes>
        <Route path="/generate" element={<QrCodeGenerator />}/>
        <Route path="/scan" element={<QrCodeScanner />}/>
        <Route path="/scanHistory" element={<ScanHistory />}/>
        <Route path="/generateHistory" element={<GenerateHistory />}/>
            </Routes>
        </div>
    )
}

export { Layout };