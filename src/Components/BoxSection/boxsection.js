// images
import box1 from "../assets/box/3-6-1.jpg";
import box2 from "../assets/box/2-5-1.jpg";
import box3 from "../assets/box/1-6-1.jpg";
import box4 from "../assets/box/6-1.jpg";
import box5 from "../assets/box/4-6-1.jpg";
import box6 from "../assets/box/@AjorZHivar-1.jpg";

const BoxSection = () => {
    return (
        <div className='container md:p-5 -mt-8 max-w-full mx-auto' style={{width: "1280px", direction: 'rtl'}}>
            <section className='relative mx-auto flex-wrap lg:flex-row mb-0 pb-2 md:py-5 md:px-7' style={{backgroundColor: "#f0f0f0", flexDirection: 'column'}}>
                <div className='flex flex-col md:flex-row max-w-full pb-5'>
                    <div className='w-11/12 md:w-1/3 m-2.5'>
                        <div className='p-7 shadow-gray-300'>
                            <img src={box1} alt='box-image' className='p-3 rounded-3xl'/>
                        </div>

                        <div className='flex flex-col items-center m-auto'>
                            <div className='w-fit mx-auto flex flex-row-reverse items-center text-center'>
                                <span className='w-12 h-1 ml-5 bg-amber-500'></span>
                                <h1 className='text-xl font-semibold px-4'>آجر سنتی</h1>
                                <span className='w-12 h-1 mr-5 bg-amber-500'></span>
                            </div>

                            <div className='w-11/12 mt-4 text-gray-500'>
                                <p className='text-xl leading-8' style={{direction: 'rtl'}}>
                                    آجر سنتی که در بازار با نام‌های آجر خشتی، آجر قدیمی نیز شناخته می‌شود، یکی از محبوب
                                    ترین آجرها از گذشته تا امروز است.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-11/12 md:w-1/3 m-2.5 pb-5' style={{boxShadow: "0 0 6px -2px rgba(0,0,0,0.5)"}}>
                        <div className='p-7 shadow-gray-300'>
                            <img src={box2} alt='box-image' className='py-2 px-3 rounded-3xl'/>
                        </div>

                        <div className='flex flex-col items-center m-auto'>
                            <div className='w-fit mx-auto flex flex-row-reverse items-center text-center'>
                                <span className='w-12 h-1 ml-5 bg-amber-500'></span>
                                <h1 className='text-xl font-semibold px-4'>
                                    آجر رستیک</h1>
                                <span className='w-12 h-1 mr-5 bg-amber-500'></span>
                            </div>

                            <div className='w-11/12 mt-4 text-gray-500'>
                                <p className='text-xl leading-8' style={{direction: 'rtl'}}>
                                    آجر رستیک نوعی آجر است که به دلیل وجود شیارها و سوراخ‌هایی در سطح این نوع آجرها به آن رستیک می‌گویند.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-11/12 md:w-1/3 m-2.5'>
                        <div className='p-7 shadow-gray-300'>
                            <img src={box3} alt='box-image' className='py-2 px-3 rounded-3xl'/>
                        </div>

                        <div className='flex flex-col items-center m-auto'>
                            <div className='w-fit mx-auto flex flex-row-reverse items-center text-center'>
                                <span className='w-12 h-1 ml-5 bg-amber-500'></span>
                                <h1 className='text-xl font-semibold px-4'>آجر دکوراتیو</h1>
                                <span className='w-12 h-1 mr-5 bg-amber-500'></span>
                            </div>

                            <div className='w-10/12 mt-4 text-gray-500'>
                                <p className='text-xl leading-8' style={{direction: 'rtl'}}>
                                    آجر دکوراتیو به عنوان یکی از انواع آجرهای نما، با جلوه و زیبایی خاصی که دارد محیط را صمیمی، گرم، آرامش بخش و دلنشین می کند.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative mx-auto flex mb-0 py-5 px-7' style={{backgroundColor: "#f0f0f0"}}>
                <div className='flex flex-col md:flex-row max-w-full pb-5'>
                    <div className='w-11/12 md:w-1/3 m-2.5' style={{boxShadow: "0 0 6px -2px rgba(0,0,0,0.5)"}}>
                        <div className='p-7 shadow-gray-300'>
                            <img src={box4} alt='box-image' className='p-3 rounded-3xl'/>
                        </div>

                        <div className='flex flex-col items-center m-auto'>
                            <div className='w-fit mx-auto flex flex-row-reverse items-center text-center'>
                                <span className='w-12 h-1 ml-5 bg-amber-500'></span>
                                <h1 className='text-xl font-semibold px-4'>آجر انگلیسی</h1>
                                <span className='w-12 h-1 mr-5 bg-amber-500'></span>
                            </div>

                            <div className='w-11/12 mt-4 text-gray-500'>
                                <p className='text-xl leading-8' style={{direction: 'rtl'}}>
                                    آجرهای نسوز در رنگ‌های مختلفی تولید می‌شوند و از طرفداران زیادی برخوردار است و برای نماسازی به کار می‌رود.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-11/12 md:w-1/3 m-2.5 pb-5'>
                        <div className='p-7 shadow-gray-300'>
                            <img src={box5} alt='box-image' className='py-2 px-3 rounded-3xl'/>
                        </div>

                        <div className='flex flex-col items-center m-auto'>
                            <div className='w-fit mx-auto flex flex-row-reverse items-center text-center'>
                                <span className='w-12 h-1 ml-5 bg-amber-500'></span>
                                <h1 className='text-xl font-semibold px-4'>آجر نسوز</h1>
                                <span className='w-12 h-1 mr-5 bg-amber-500'></span>
                            </div>

                            <div className='w-11/12 mt-4 text-gray-500'>
                                <p className='text-xl leading-8' style={{direction: 'rtl'}}>
                                    با استفاده از آجرهای نسوز تضمین میکنید که نمای ساختمان شما برای سالها مانند روز اول باقی خواهد ماند.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-11/12 md:w-1/3 m-2.5 pb-5' style={{boxShadow: "0 0 6px -2px rgba(0,0,0,0.5)"}}>
                        <div className='p-7 shadow-gray-300'>
                            <img src={box6} alt='box-image' className='py-2 px-3 rounded-3xl'/>
                        </div>

                        <div className='flex flex-col items-center m-auto'>
                            <div className='w-fit mx-auto flex flex-row-reverse items-center text-center'>
                                <span className='w-12 h-1 ml-5 bg-amber-500'></span>
                                <h1 className='text-xl font-semibold px-4'>آجر لفتون</h1>
                                <span className='w-12 h-1 mr-5 bg-amber-500'></span>
                            </div>

                            <div className='w-10/12 mt-4 text-gray-500'>
                                <p className='text-xl leading-8' style={{direction: 'rtl'}}>
                                    این آجر در دیوار چینی محوطه ها، حصارباغ ها و ویلاها، سوله ها و حیاط منازل و در چیدن دیوار اتاق ها، تراس ها و...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    ) ;
};

export default BoxSection;