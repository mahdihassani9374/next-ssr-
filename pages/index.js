import Link from 'next/link'
import Head from 'next/head'
function Index() {
    return (
        <div>
        <img src="../static/img/profile.jpg"/>
            <Head>
                <title>next js</title>
            </Head>
            <p>Hello Next.js</p>
            <Link href="/about">
                <a>about</a>
            </Link>
            <Link href="/project">
                <a>project</a>
            </Link>
            <Link href="/gallery">
                <a>gallery</a>
            </Link>
        </div>
    )
}

export default Index