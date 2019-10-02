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
                <meta charset="UTF-8" />
                <meta name="description" content="وب سایت شخصی مهدی و مبین حسنی" />
                <meta name="keywords" content="مهدی حسنی  , مبین حسنی  , حسنی  , براردان حسنی  , دوقلوها , حسنی دوقلو , مهدی و مبین حسنی , برنامه نویسی  " />
                <meta name="author" content="John Doe" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="وب سایت شخصی مهدی و مبین حسنی" />
                <meta property="og:url" content="http://mobinmahdi.ir" />
                <meta property="og:image" content="static/images/profile.jpg" />
                <link rel="shortcut icon" type="image/png" href="static/images/icon.png" />
            </Head>

            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-123462599-1"></script>
        </div>
    )
}

export default Layout