
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Helmet } from 'react-helmet-async';
import { CenteredGrid } from '../components/CenteredGrid';
import { Page } from '../components/Page';
import { TimetapBox } from '../components/TimetapBox';

const Booking = () => {
    const Helmeted = () => {
        const metaData = {
            title: "Booking - Chevron Dog Training",
            description: "Schedule an appointment online with us for training or walking. We provide consultation via Zoom and in-person. We give you the tools to help relax your dog.",
            url: "https://chevrondogtraining.com/booking/",
            imageUrl: "logo-words-square-large.png",
        }

        return (
            <Helmet>
                <title>Booking | Chevron Dog Training</title>
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
                    <iframe title='timetap-embed' src='https://chevrondogtraining.timetap.com' frameBorder='0' />
                </TimetapBox>
            </CenteredGrid>
            <Footer />
        </Page>
    );
}

export default Booking;