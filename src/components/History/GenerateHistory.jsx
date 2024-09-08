import { GENERATE_DATA } from "../../constans"
import {QRCodeSVG} from 'qrcode.react';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    console.log(data);

    return (
        <div>
            {data.map((text) => (
            <p key={text}>{<QRCodeSVG value={text} size={100}/>}{text}</p>
            ))}
        </div>
    );
}