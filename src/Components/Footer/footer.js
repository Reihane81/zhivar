// images
import logo from "../assets/logo/logo.png";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer className="w-full flex items-baseline flex-wrap text-center lg:text-right m-auto justify-evenly flex-row-reverse bg-[#2e2e2e] text-white py-8">
            <section className='w-11/12 lg:w-4/12 mt-10 lg:mt-0' style={{direction: "rtl"}}>
                <h3 className='relative border-b pb-5 text-amber-500 after:right-0 after:bg-amber-600 after:absolute after:w-[10%] after:h-[1px] after:bottom-0' style={{borderColor: "rgba(167,167,167,.2)",}}>درباره ژیوار</h3>
                <div className='w-7/12 lg:w-11/12 m-auto lg:m-0 mt-6'>
                    <img src={logo} alt='logo' className='w-fit m-auto lg:m-0'/>
                    <p className='text-white text-justify m-auto w-fit'>
                        ژیوار، با استفاده از تکنولوژی روز اقدام به عرضه و فروش انواع آجر نسوز با کیفیت تضمینی نموده و با
                        در اختیار داشتن پرسنل قوی و تیم فروش به روز توانسته است محصولات خود را در بازارهای داخلی عرضه
                        نماید. داشتن تنوع بالا و عرضه محصولات با کیفیت و تحویل سفارشات در سریعترین زمان ممکن باعث افزایش
                        مشتریان دائمی این مرکز شده است.
                    </p>
                </div>
            </section>

            <section className='w-11/12 lg:w-2/12 mt-20 lg:mt-0' style={{direction: "rtl"}}>
                <h3 className='relative border-b pb-5 text-amber-500 after:right-0 after:bg-amber-600 after:absolute after:w-[10%] after:h-[1px] after:bottom-0' style={{borderColor: "rgba(167,167,167,.2)",}}>نوشته های تازه</h3>
                <div className='mt-6'>
                    <li className=''>قیمت آجر کوره ای عمده</li>
                    <li className='pt-5'>چالش‌های حقوقی در صنعت تولید و فروش آجر نسوز نما</li>
                    <li className='pt-5'>جدیدترین نما آجرنسوز صنعتی با ویژگی‌های بی‌نظیر در بازار ایران</li>
                    <li className='pt-5'>تولیدکننده آجرنسوزهای کیفیت بالا با ویژگی‌های منحصر به فرد</li>
                    <li className='pt-5'>تولیدکننده آجرنسوز منحصر به فرد با تکنولوژی پیشرفته</li>
                </div>
            </section>

            <section className='w-full lg:w-fit mt-20 lg:mt-4'>
                <h3 className='w-11/12 relative border-b m-auto pb-5 text-amber-500 after:right-0 after:bg-amber-600 after:absolute after:w-[10%] after:h-[1px] after:bottom-0' style={{borderColor: "rgba(167,167,167,.2)",}}>راه های ارتباطی</h3>
                <div className='w-fit m-auto'>
                    <div>
                        <div className='flex flex-row-reverse items-center mt-5 text-right'>
                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff", paddingLeft: '.5rem'}}/>
                            <p>دفتر مرکزی ژیوار</p>
                        </div>
                        <span>تهران، مجتمع تجاری تجریش</span>
                    </div>
                    <div>
                        <div className='flex flex-row-reverse items-center mt-5 text-right'>
                            <FontAwesomeIcon icon={faPhone} style={{color: "#ffffff", paddingLeft: '.5rem'}}/>
                            <p>ارتباط آنلاین</p>
                        </div>
                        <span>09120944583</span>
                    </div>
                    <div>
                        <div className='flex flex-row-reverse items-center mt-5'>
                            <FontAwesomeIcon icon={faWhatsapp} style={{color: "#ffffff", paddingLeft: '.5rem'}}/>
                            <p>واتساپ</p>
                        </div>
                        <span>کلیک کنید</span>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
