import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import style from "./QrCodeScanner.module.css";

import { SCAN_DATA } from "../../constans"

export const QrCodeScanner = () => {
    const [scanned, setScanned] = useState(null)

    const scanHandler = (result) => {
        setScanned(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, result[0].rawValue])
        );
    };
    
    return (
        <div className={style.container}>
            <p className={style.result}>{scanned}</p>
            <Scanner 
            onScan={scanHandler}
            components={
                {audio: false, finder: false,}
            }
            styles={
                {container: {width: 300}}
                } />
        </div>
    )
}