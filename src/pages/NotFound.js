
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CenteredGrid } from '../components/CenteredGrid';

import {
    useNavigate,
    useLocation,
} from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { siteLinks } from '../constants/url-constants';
import { useEffect } from 'react';
import { Page } from '../components/Page';
import { Image404 } from '../components/Image404';

const NotFound = () => {
    const Helmeted = () => {
        const metaData = {
            title: "404 Not Found - Chevron Dog Training",
            description: "Book online. 20 years experience and 11 years British military dog training. Handle dogs jumping up, recall, loose lead walking and behaviour issues.",
            url: "https://chevrondogtraining.com/notfound/",
            imageUrl: "logo-words-square-large.png",
        }

        return (
            <Helmet>
                <title>404 Not Found | Chevron Dog Training</title>
                <link rel="icon" href="favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
                <link rel="manifest" href="site.webmanifest" />
                <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>

                <meta name="twitter:title" content={metaData.title} />
                <meta property="og:title" name="title" content={metaData.title} />
                <meta property="og:description" name="description" content={metaData.description} />
                <meta property="og:url" name="canonical" content={metaData.url} />
                <meta property="og:image" name="image" content={metaData.imageUrl} />
            </Helmet>
        )
    };
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const from = location.state?.from?.pathname || siteLinks.home.url;
        const timer = setTimeout(function () {
            navigate(from, { replace: true });
        }, 5000);
        return () => clearTimeout(timer);
    }, [location, navigate]);

    return (
        <Page>
            <Helmeted />
            <Navbar />
            <CenteredGrid>
                <Image404 />
                <h1 style={{ fontSize: '2em' }}>404 Not Found - <Link to={siteLinks.home.url}>Home</Link></h1>
                <p>Redirecting to Home in 5 seconds.</p>
            </CenteredGrid>
            <Footer />
        </Page >
    );
}

export default NotFound;