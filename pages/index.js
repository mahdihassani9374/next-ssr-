import Link from 'next/link'
import Head from 'next/head'
import Home from './components/Home'
import Layout from './components/Layout'
function Index() {
    return (
        <div>
            <Layout />
            <Home />
            <Head>
                <title>مهدی و مبین حسنی </title>
            </Head>
        </div>
    )
}

export default Index