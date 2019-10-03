import Head from 'next/head'
import ReactGA from 'react-ga';

import Router from "next/router";
import withGA from "next-ga";
import React, { useEffect , useState } from 'react'
import $ from 'jquery'

function Layout() {
    useEffect(() => {
        $(window).scroll(function () {
            scroll_menu()
        });
        scroll_menu();

        function scroll_menu() {
            var scroll = $(window).scrollTop();
            if (scroll > 58) {
                $('.navbar.navbar-inverse').addClass('navbar-scroll');
            }
            else {
                $('.navbar.navbar-inverse').removeClass('navbar-scroll');
            }
        }
    }, [])
    return (
        <div>
            <Head>
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

                <script src="static/lib/jquery-3.1.1/jquery-3.1.1.min.js" type="text/javascript"></script>
                <script src="static/lib/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
            </Head>
        </div>
    )
}

export default withGA("UA-123462599-1", Router)(Layout);