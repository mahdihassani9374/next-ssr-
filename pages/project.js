import Header1 from './components/Header1'
import About from './components/About'
import Footer from './components/Footer'
import ProjectItem from './components/ProjectItem'
import Layout from './components/Layout'
import Head from 'next/head'
const Project = () => (
    <div dir="rtl">
        <Head>
            <title> پروژه ها - مهدی و مبین حسنی </title>
        </Head>
        <Layout />
        <Header1 icon="pe-7s-diamond">پروژه ها - مهدی مبین حسنی </Header1>
        <ProjectItem />
        <Footer />
    </div>
)

export default Project