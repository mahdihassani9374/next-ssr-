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
                <title>next js</title>
            </Head>
        </div>
    )
}

export default Index