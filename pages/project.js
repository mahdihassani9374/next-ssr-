import Link from 'next/link'
import Head from 'next/head'
function Project() {
    return (
        <div>
            <Head>
                <title>project</title>
            </Head>
            <p>Hello project</p>
            <Link href="/">
                <a>home</a>
            </Link>
        </div>
    )
}

export default Project