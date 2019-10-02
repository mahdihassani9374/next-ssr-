import Link from 'next/link'
import Head from 'next/head'
const Gallery = () => (
    <div>
        <Head>
            <title>gallery</title>
        </Head>
        <p>Hello gallery</p>
        <Link href="/">
            <a>home</a>
        </Link>
    </div>
)

export default Gallery