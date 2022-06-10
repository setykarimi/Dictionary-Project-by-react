import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import Image from '../img/sety.jpg'
import '../styles/about.scss'

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <Sidebar />

                <div className="content">
                    <div className="about-section">
                        <div>
                            <p> این وبسایت با استفاده از api که سایت واژه یاب از لغت نامه‌های مختلف در اختیار توسعه دهندگان وب قرار می‌دهد، راه‌اندازه شده‌است.
                                <br></br> هدف این پروژه دسترسی هر چه سریعتر و راه‌تر به لغت نامه‌های زبان فارسی است تا پارسی زبانان بتوانند در کمترین سرعت معنی واژه مورد نظر خودشان را در برترین لغت‌نامه‌های فارسی بیابند.
                                <br></br>
                                من، ستایش کریمی سعی کردم تا با طراحی رابط کاربری ساده و کاربرپسند، وبسایتی در اختیار شما کاربران عزیز قرار دهم.
                                در آپدیت بعدی پروژه تبدیل گفتار به متن نیز اضافه خواهد شد تا با استفاده از api مربوطه بتوان با کلام واژه مورد نظر خود را جستجو کرد. </p>
                        </div>
                        <div>
                            <div className="box">
                                <div className="box__profile">
                                    <img src={Image}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs