import Link from 'next/link'
import Head from 'next/head'
const About = () => (
    <div>
        <Head>
            <title>about</title>
        </Head>
        <p>Hello about</p>
        <Link href="/">
            <a>home</a>
        </Link>
    </div>
)

export default About