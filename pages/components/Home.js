import Header from './Header'
import Services from './Services'
import Bg from './Bg';
import Bg1 from './Bg1';
import ProjectItem from './ProjectItem'
import About from './About'
import Footer from './Footer'
function Home() {
    return (
        <div>
           <Header />
           <Services />
           <Bg />
           <ProjectItem />
           <Bg1 />
           <About />
           <Footer />
        </div>
    )
}

export default Home