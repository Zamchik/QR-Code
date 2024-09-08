import { Link } from "react-router-dom"
import style from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <nav className={style.container}>
            <Link to="/generate">Генерировать QR код</Link>
            <Link to="/scan">Сканировать QR код</Link>
            <Link to="/scanHistory">История сканирования</Link>
            <Link to="/generateHistory">История генерирования</Link>
        </nav>
    )
}