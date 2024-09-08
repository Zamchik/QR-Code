import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';
import style from "./QrCodeGenerator.module.css";

import { GENERATE_DATA } from "../../constans"

export const QrCodeGenerator = () => {

    const [value, setValue] = useState("")
    const [result, setResult] = useState("")

    const onClickHandler = (event) => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

        localStorage.setItem(
            GENERATE_DATA, 
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue("")
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult("")
    }

    return (
        <div className={style.container}>
            <input type='text' 
            value={value} 
            onChange={onChangeHandler} 
            className={style.input}
            placeholder='Введит текст...'>
            </input>

            <button type='button' 
            onClick={onClickHandler} 
            className={style.button}>
                Сгенерировать QR
            </button> 

            {result !== "" ? 
            (<div className={style.qrWrapper}>
                <QRCodeSVG value={result} size={200}/>
            </div>) : null}
        </div>
    )
}