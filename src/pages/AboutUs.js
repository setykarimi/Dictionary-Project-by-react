import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import Image from '../img/sety.jpg'
import Instagram from '../img/instagram.svg'
import Linkedin from '../img/linkedin.svg'
import Whatsapp from '../img/whatsapp.svg'
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
                                <br></br> هدف این پروژه دسترسی هر چه سریعتر و راحت‌تر به لغت نامه‌های زبان فارسی است تا پارسی زبانان بتوانند در کمترین سرعت معنی واژه مورد نظر خودشان را در برترین لغت‌نامه‌های فارسی بیابند.
                                <br></br>
                                من، ستایش کریمی سعی کردم تا با طراحی رابط کاربری ساده و کاربرپسند، وبسایتی در اختیار شما کاربران عزیز قرار دهم.
                                در آپدیت بعدی پروژه تبدیل گفتار به متن نیز اضافه خواهد شد تا با استفاده از api مربوطه بتوان با کلام واژه مورد نظر خود را جستجو کرد. </p>
                        </div>
                        <div>
                            <div className="box">
                                <div className="box__profile">
                                    <img src={Image} alt="profile"/>
                                </div>

                                <div className="social-medias">
                                    <a className="media" href="https://www.instagram.com/setykarimi/">
                                        <div className="media__icon"><img src={Instagram} alt="instagram"/></div>
                                        <div className="media__address">setykarimi</div>
                                    </a>
                                    <a className="media" href="https://www.linkedin.com/in/setayesh-karimi-1a5669179/">
                                        <div className="media__icon"><img src={Linkedin} alt="likedin"/></div>
                                        <div className="media__address">setykarimi</div>
                                    </a>
                                    <a className="media" href="https://wa.me/09190979722">
                                        <div className="media__icon"><img src={Whatsapp} alt="whatsapp"/></div>
                                        <div className="media__address">+98 9190979722</div>
                                    </a>
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