import Header from './Header'
import Services from './Services'
import Bg from './Bg';
import Bg1 from './Bg1';
import ProjectItem from './ProjectItem'
import About from './About'
import Footer from './Footer'
import Gallery from './Gallery'
function Home() {
    return (
        <div dir="rtl">
           <Header />
           <Services />
           <Bg />
           <ProjectItem />
           <Bg1 />
           <Gallery />
           <About />
           <Footer />
        </div>
    )
}

export default Home