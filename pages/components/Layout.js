import Head from 'next/head'
function Layout() {
    return (
        <div>
            <Head>
                <title>next js</title>
                <link rel="stylesheet" href="static/lib/bootstrap/dist/css/bootstrap.min.rtl.css" />
                <link rel="stylesheet" href="static/lib/font-awesome-4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="static/fonts/font-fa.css" />
                <link rel="stylesheet" href="static/css/animate.css" />
                <link rel="stylesheet" href="static/css/styles.css?v=0.0.1" />
                <link rel="stylesheet" href="static/lib/pe-icon-7-stroke/css/helper.css" />
                <link rel="stylesheet" href="static/lib/pe-icon-7-stroke/css/pe-icon-7-stroke.css" />
                <link rel="stylesheet" href="static/css/override.css" />
            </Head>
        </div>
    )
}

export default Layout