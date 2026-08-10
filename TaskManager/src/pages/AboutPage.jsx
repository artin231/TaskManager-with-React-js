import Header from "../components/Header"
import '../css/main.css'

let AboutPage = () => {
    return (
        <div className="container">
            <Header />
            <div className="AboutBox">
                <h1>درباره ما</h1>
                <p> این سایت یک سایت تمرینی بوده برای تمرین ریکت و در گیتهاب توسعه پیدا میکنه ما امیدواریم این سایت بتواند کار های روز را برای شما راحت تر کنه و حداقال یک درصد روی زندگی شما تاثیر داشته باشه</p>
            </div>
        </div>
    )
}

export default AboutPage