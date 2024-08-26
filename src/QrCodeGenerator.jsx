import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';
import "./QrCodeGenerator.css";

export const QrCodeGenerator = () => {

    const [value, setValue] = useState("")
    const [result, setResult] = useState("")

    const onClickHandler = (event) => {
        setResult(value);
        setValue("")
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult("")
    }

    console.log("result:", result)

    return (
        <div className='container'>
            <input type='text' 
            value={value} 
            onChange={onChangeHandler} 
            className='input'
            placeholder='Введит текст...'>
            </input>

            <button type='button' 
            onClick={onClickHandler} 
            className='button'>
                Сгенерировать QR
            </button> 

            {result !== "" ? 
            (<div className='qrWrapper'>
                <QRCodeSVG value={result} size={200}/>
            </div>) : null}
        </div>
    )
}