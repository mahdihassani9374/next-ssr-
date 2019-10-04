import ReactWOW from 'react-wow';
import Link from 'next/link'

function Header() {
    return (
        <header className="header">
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link href="/"><a>صفحه اصلی</a></Link></li>
                            <li><Link href="/project"><a>نمونه کارها </a></Link></li>
                            <li><Link href="/about"><a>درباره ما</a></Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link href="/gallery"><a>گالری عکس</a></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="header__section">
                <ReactWOW animation='bounceInDown'>
                    <h1 className="header__section__title">مهدی و مبین حسنی </h1>
                </ReactWOW>
                <ReactWOW animation='zoomIn'>
                    <div className="text-center">
                        <img src='../static/images/profile.jpg' className="header__section__img" alt="مهدی و مبین حسنی" />
                    </div>
                </ReactWOW>
                <div className="text-center">
                    <ReactWOW animation='bounceInUp'>
                        <h4 className="header__section__desc">programmer and web designer</h4>
                    </ReactWOW>
                    <ReactWOW animation='bounceInUp'>
                        <h4 className="header__section__desc">ما عاشق برنامه نویسی ایم</h4>
                    </ReactWOW>
                    <ReactWOW animation='bounceInLeft'>
                        <p className="padding-10 line-height-30"> بیشتر برنامه نویسان خوب برنامه نویسی می کنند نه
                                به این علت که انتظار دارند دستمزد بگیرند یا از سوی عموم تحسین شوند، بلکه چون برنامه نویسی برایشان
                    سرگرم کننده است</p>
                    </ReactWOW>
                </div>
                <div className="text-center col-md-12 flex">
                    <ReactWOW animation='bounceInUp'>
                        <Link href="/">
                           <a className="header__section__link"><i className="pe-7s-home"></i></a>
                        </Link>
                        <Link href="/about">
                            <a className="header__section__link"><i className="pe-7s-users"></i></a>
                        </Link>
                        <Link href="/project">
                            <a className="header__section__link"><i className="pe-7s-diamond"></i></a>
                        </Link>
                        <Link href="/gallery">
                            <a className="header__section__link"><i className="pe-7s-camera"></i></a>
                        </Link>
                    </ReactWOW>
                </div>
            </section>
        </header >
    )
}

export default Header