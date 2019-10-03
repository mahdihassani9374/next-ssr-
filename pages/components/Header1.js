import ReactWOW from 'react-wow';
import Link from 'next/link'

function Header1({icon,children}) {
    return (
        <header className="header header-custom">
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
            <section className="header__section header__section-custom">
                    <ReactWOW animation='bounceInUp'>
                        <h1 className="header__section__title">{children}</h1>
                    </ReactWOW>
                    <ReactWOW animation='bounceInDown'>
                        <div className="mt-20">
                            <i className={icon} style={{ fontSize: '50px' }}></i>
                        </div>
                    </ReactWOW>
                </section>
        </header >
    )
}

export default Header1