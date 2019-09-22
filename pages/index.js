import Link from 'next/link'
import Head from 'next/head'
function Index() {
    return (
        <div>
            <Head>
                <title>next js</title>
            </Head>
            <p>Hello Next.js</p>
            <Link href="/about">
                <a>about</a>
            </Link>
        </div>
    )
}

export default Index