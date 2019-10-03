import Header1 from './components/Header1'
import About from './components/About'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Head from 'next/head'
const about = () => (
    <div dir="rtl">
        <Head>
            <title>درباره ما - مهدی و مبین حسنی </title>
        </Head>
        <Layout />
        <Header1 icon="pe-7s-user"> درباره ما  - مهدی مبین حسنی </Header1>
        <About />
        <Footer />
    </div>
)

export default about