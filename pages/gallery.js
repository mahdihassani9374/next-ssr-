import Header1 from './components/Header1'
import About from './components/About'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Layout from './components/Layout'
import Head from 'next/head'
const Project = () => (
    <div dir="rtl">
        <Head>
            <title>  گالری عکس - مهدی و مبین حسنی </title>
        </Head>
        <Layout />
        <Header1 icon="pe-7s-diamond"> گالری عکس - مهدی مبین حسنی </Header1>
        <Gallery />
        <Footer />
    </div>
)

export default Project