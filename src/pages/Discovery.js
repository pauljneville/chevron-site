
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Helmet } from 'react-helmet-async';
import { CenteredGrid } from '../components/CenteredGrid';
import { Page } from '../components/Page';
import { TimetapBox } from '../components/TimetapBox';

const Discovery = () => {
    const Helmeted = () => {
        const metaData = {
            title: "Discovery Call - Chevron Dog Training",
            description: "Use our online scheduler to book a discovery call with us to discuss training to improve obedience, recall, loose lead walking and behaviour issues.",
            url: "https://chevrondogtraining.com/discovery/",
            imageUrl: "logo-words-square-large.png",
        }

        return (
            <Helmet>
                <title>Discovery Call | Chevron Dog Training</title>
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

    return (
        <Page>
            <Helmeted />
            <Navbar />
            <CenteredGrid>
                <TimetapBox>
                    <iframe title='timetap-embed' src='https://discovery-chevrondogtraining.timetap.com' frameBorder='0' />
                </TimetapBox>
            </CenteredGrid>
            <Footer />
        </Page>
    );
}

export default Discovery;