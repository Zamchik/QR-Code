import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';

export const QrCodeGenerator = () => {

    const [value, setValue] = useState("Напишите здесь...")
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
        <div>
            {result !== "" ? <QRCodeSVG value={result} /> : null}
            
            <input type='text' value={value} onChange={onChangeHandler}></input>
            <button type='button' onClick={onClickHandler}>Сгенерировать</button> 
        </div>
    )
}