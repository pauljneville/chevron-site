

// import TestVideo from '../assets/take_me_home.mp4';
import HeadBanner from '../assets/head-banner.jpg';
// import Arch from '../assets/chevron_large.png';

import { Link } from "react-router-dom";
import { siteLinks } from "../constants/url-constants";

import { Helmet } from 'react-helmet-async';

import { useState, useEffect, useRef } from 'react';

import DiscoveryCall from "../assets/services-photos/discovery-call.png";
import InitialConsult from "../assets/services-photos/initial-consult.png";
import Packages from "../assets/services-photos/packages.png";
import GroupClasses from "../assets/services-photos/group-classes.png";
import Walking from "../assets/services-photos/walking.png";
import DoggyDayOut from "../assets/services-photos/doggy-day-out.png";
import PetSitting from "../assets/services-photos/pet-sitting.png";

// import Review1 from "../assets/review-photos/chance.jpg";
import Review2 from "../assets/review-photos/courtney.PNG";
import Review3 from "../assets/review-photos/chloe.PNG";

import Trainer1 from "../assets/staff-photos/ryan.jpg";
import Trainer2 from "../assets/staff-photos/matt.jpg";

import Recruit1 from "../assets/recruit-photos/lali-rose.jpg";
import Recruit2 from "../assets/recruit-photos/raffa.jpg";
import Recruit3 from "../assets/recruit-photos/chance.jpg";
import Recruit4 from "../assets/recruit-photos/rosie.jpg";
import Recruit5 from "../assets/recruit-photos/chilli.jpg";

import RecruitBadge from "../assets/rank-badges/shield-badge-0.png";
import MemberBadge from "../assets/rank-badges/shield-badge-1.png";
import LeaderBadge from "../assets/rank-badges/shield-badge-2.png";

import FriendList from '../sections/FriendsList';
import StaffList from '../sections/StaffList';
import ReviewList from '../sections/ReviewList';
import Services from '../sections/Services';

import Footer from '../components/Footer';
import LinkButton from '../components/LinkButton';
import { Divider } from '../components/Divider';
import { CenteredGrid } from '../components/CenteredGrid';
import Banner from '../components/Banner';
import { TopOverlay } from '../components/TopOverlay';
import { NavLinks } from '../components/NavLinks';

const StaticSite = () => {
    const Helmeted = () => {
        const metaData = {
            title: "Chevron Dog Training",
            description: "Chevron Dog Training can improve obedience, recall, loose lead walking, behaviour issues and jumping up.",
            url: "https://chevrondogtraining.com/",
            imageUrl: "logo-words-square-large.png",
        }

        return (
            <Helmet>
                <title>Chevron Dog Training</title>
                <link rel="icon" href="favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
                <link rel="manifest" href="site.webmanifest" />
                <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

                <meta name="twitter:title" content={metaData.title} />
                <meta property="og:title" name="title" content={metaData.title} />
                <meta property="og:description" name="description" content={metaData.description} />
                <meta property="og:url" name="canonical" content={metaData.url} />
                <meta property="og:image" name="image" content={metaData.imageUrl} />
            </Helmet>
        )
    };

    /*****  Pack Members  *****/
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetchFriends();
    }, []);
    const fetchFriends = () => {
        const friendsList = [
            {
                uid: '01',
                name: "Lali-Rose",
                description: "She is eh, Lali",
                photo: Recruit1,
                badge: RecruitBadge,
            },
            {
                uid: '02',
                name: "Raffa",
                description: "Pack Leader",
                photo: Recruit2,
                badge: LeaderBadge,
            },
            {
                uid: '03',
                name: "Chance",
                description: "Best Friend",
                photo: Recruit3,
                badge: MemberBadge,
            },
            {
                uid: '04',
                name: "Rosie",
                description: "Food mad Rosie",
                photo: Recruit4,
                badge: MemberBadge,
            },
            {
                uid: '05',
                name: "Chilli",
                description: "High drive",
                photo: Recruit5,
                badge: MemberBadge,
            },
        ];
        setFriends(friendsList);
    }

    /*****  STAFF  *****/
    const [staff, setStaff] = useState([]);
    useEffect(() => {
        fetchStaff();
    }, []);
    const fetchStaff = () => {
        const staffList = [
            {
                uid: '01',
                name: "Ryan",
                position: "Founder & Head Trainer",
                notes: [
                    "Ryan has over 20 years dog handling and training experience, working in high-risk areas with the British Military in Afghanistan & Iraq, with protection dogs in Germany and working with dogs in commercial security and with high-profile clients.",
                    "Utilising balanced principles, and with an appreciation of the amazing skills, companionship and relationship between dogs and humans, Ryan established Chevron Dog Training to holistically support dog owners experience the best domestic life with their companion.",
                ],
                photo: Trainer1,
            },
            {
                uid: '02',
                name: "Matt",
                position: "Longest Serving Trainer",
                notes: [
                    "Matthew has an uncanny way of attaining relationships with clients’ dogs early, calm confident and assertive he has set the bar for establishing leadership and showing clients how to do the same.",
                    "Matt has a background in dog grooming and animal welfare, leading to a natural role in dog training, helping people with their dogs is Matt’s passion.",
                    "Working with Taronga Zoo, pet groomers and boarding facilities, Matt has developed a unique set of skills to support your training journey.",
                ],
                photo: Trainer2,
            },
        ];
        setStaff(staffList);
    }

    /*****  REVIEWS  *****/
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetchReviews();
    }, []);
    const fetchReviews = () => {
        const reviewList = [
            // {
            //     uid: '01',
            //     name: "Courtney & Goose",
            //     desc1: "\"Ryan and his team are great!",
            //     desc2: "We have a very large rescue dog that was having some behavioral issues. Ryan gave us the tools to build trust, training and redirect our dogs focus.",
            //     desc3: "It’s fair to say everyone in our household is happier (including our dog) and enjoying continuing to practice what we’ve all learned.",
            //     desc4: "Recommend 1-1 & group training.\"",
            //     photo: Review2,
            // },
            {
                uid: '02',
                name: "Courtney & Goose",
                notes: [
                    "\"Ryan and his team are great!",
                    "We have a very large rescue dog that was having some behavioral issues. Ryan gave us the tools to build trust, training and redirect our dogs focus.",
                    "It’s fair to say everyone in our household is happier (including our dog) and enjoying continuing to practice what we’ve all learned.",
                    "Recommend 1-1 & group training.\"",
                ],
                photo: Review2,
            },
            {
                uid: '03',
                name: "Chloe & Scout",
                notes: [
                    "\"Highly recommend Ryan and his team he is fantastic to work with, learning all the little things when training a puppy can be very overwhelming but he made it a great learning experience and very informative, look forward to more training in the future with the team at chevron dog training\"",
                ],
                photo: Review3,
            },
        ];
        setReviews(reviewList);
    }

    /*****  Services  *****/
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetchServices();
    }, []);
    const fetchServices = () => {
        const servicesList = [
            {
                uid: '01',
                title: "Discovery Call",
                notes: [
                    "Chevron Dog Training can assist you with customised services to meet your pack and dogs needs.",
                    "For all services including Initial Consults, Training Packages, Walks and Pet Sitting please book a FREE 15-minute Discovery Call with a member of our team.",
                    "",
                ],
                photo: DiscoveryCall,
                price: 'FREE',
            },
            {
                uid: '02',
                title: "Initial Consult",
                notes: [
                    "This will provide you with a foundational set of skills to support your training journey. Upon completion, our trainers will assess your pack's needs and recommend a tailored package.",
                    "Part One is Theory - Learn how to speak and think like your furry friend 1:1 with a member of our team via zoom.",
                    "Part Two is Practical – A member of our staff will visit your home to provide a practical assessment and skills lesson.",
                ],
                photo: InitialConsult,
            },
            {
                uid: '03',
                title: "Packages",
                notes: [
                    "Successful dog training requires consistency and commitment. Our packages are designed to develop your skills, counter condition problem behaviors and establish the best relationship with your furry companion through weekly sessions with one of our experienced trainers.",
                    "Train your dog to walk comfortably without pulling, minimize barking, jumping and nipping, respond to recall and commands, toilet training and obedience through learning value of reward, voice inflection, body animation and environmental understanding.",
                ],
                photo: Packages,
            },
            {
                uid: '04',
                title: "Group Classes",
                notes: [
                    "It is often said, “we can only control what we can control, we can’t control what others do”, where as in group classes, our trainers can take control of what others do.",
                    "Our group classes give you and your dog the best opportunity to improve dog obedience, maintain focus with high level distractions and manage your dog in a group environment delivered in a 4-week course.",
                ], photo: GroupClasses,
            },
            {
                uid: '05',
                title: "Walking",
                notes: [
                    "This service is perfect for those leading a busy lifestyle and struggling to meet their dogs walking routine.",
                    "Our Chevron dog walkers are trained to burn out your furry friend’s mental energy to minimize disruptive behaviors, keep your training consistent and give your furry friend a fun adventure.",
                    "With Training packages and beyond sometimes you need your dog walked to the current standard you set daily, our walkers are the boss! They are highly trained to maintain that standard.",
                ],
                photo: Walking,
                price: "$40",
                price2: "$35 for Pack Members",
                price3: "$30 for Pack Leaders",
            },
            {
                uid: '06',
                title: "Doggy Day-Out",
                notes: [
                    "Is your dog lonely, bored, in need of an adventure?",
                    "CDT offers pick-up and drop-off Doggy Day Out service where your furry friend will enjoy walks, games and meet new friends.",
                    "Please book a Discovery Call consultation for pricing, availability & suitability.",
                ],
                photo: DoggyDayOut,
                price: "$60",
            },
            {
                uid: '07',
                title: "Pet Sitting",
                notes: [
                    "Travel with peace of mind, CDT offers a range of pet sitting options in Kiama, Gerringong and Berry to meet your needs including daily walks, over night stays in your own home and boarding options.",
                    "Please book a Discovery Call for availability, service or other locations.",
                ],
                photo: PetSitting,
            },
        ];
        setServices(servicesList);
    }

    const servicesRef = useRef(null);
    const scrollToServices = () => servicesRef.current.scrollIntoView();
    const aboutUsRef = useRef(null);
    const scrollToAboutUs = () => aboutUsRef.current.scrollIntoView();
    const ourPackRef = useRef(null);
    const scrollToOurPack = () => ourPackRef.current.scrollIntoView();
    const reviewsRef = useRef(null);
    const scrollToReviews = () => reviewsRef.current.scrollIntoView();

    const HoverPaw = () => {
        return (
            <div className="zero-space"><span className="show-paw"></span></div>
        );
    }

    return (
        <div className="static-page">
            <Helmeted />
            <main>
                <CenteredGrid style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <header className="static-showcase">
                        <img src={HeadBanner} alt="header-background" />
                        <TopOverlay>
                            <Banner white />
                            <NavLinks>
                                <button onClick={scrollToOurPack} className="nav-button"><HoverPaw />Pack</button>
                                <button onClick={scrollToServices} className="nav-button"><HoverPaw />Services</button>
                                <button onClick={scrollToAboutUs} className="nav-button"><HoverPaw />Team</button>
                                <button onClick={scrollToReviews} className="nav-button"><HoverPaw />Reviews</button>
                                <Link to={siteLinks.booking.url} className="header-link nav-button"><HoverPaw />Login/Register</Link>
                            </NavLinks>
                        </TopOverlay>
                    </header>
                    <article>
                        <div className="static-button-section">
                            <LinkButton url={siteLinks.discovery.url}>Book a call</LinkButton>
                            <LinkButton url={siteLinks.booking.url}>My account</LinkButton>
                        </div>
                    </article>
                    <Divider />
                    <article className="list-section">
                        <div className="description-section">
                            <section className="description-header">
                                <header>
                                    <h2>Our team is led by our Head Trainer and Founder Ryan with more than 20 years-experience working as a Dog Handler and Trainer.</h2>
                                </header>
                                <p>Dogs may be a significant commitment in your life; changing routines, ability to travel, finances and family dynamics. Our vision is to provide all dog companions with both the theoretical and practical skills to make your life stress free, fun and effective.</p>
                                <p>Chevron Dog Training operates across Illawarra & Shoalhaven borders providing a holistic and balanced approach to training.</p>
                                <p>Our trainers will provide you with the tools, skills, tips and strategies to minimize stress for your dog and pack.</p>
                                <p>Servicing <strong>Gerringong</strong>, <strong>Kiama</strong>, <strong>Berry</strong> and surrounding areas in the <strong>Illawarra</strong></p>
                            </section>
                            {/* <ul>
                        <li>Former British Military dog trainer</li>
                        <li>Pet Training</li>
                        <li>All behaviours tackled</li>
                    </ul> */}
                        </div>
                    </article>
                    <Divider />
                    <article className="list-section">
                        <div className="list-header">
                            <div ref={ourPackRef} className="scroll-ref"></div>
                            <h2>New Promotions</h2>
                        </div>
                        <div className="row-list-section">
                            <div className="recruits">
                                <FriendList friends={friends} />
                            </div>
                        </div>
                    </article>
                    <Divider />
                    <article className="list-section">
                        <div className="list-header">
                            <div ref={servicesRef} className="scroll-ref"></div>
                            <h2>Services</h2>
                        </div>
                        <div className="row-list-section">
                            {/* <button onClick={() => scroll(-20)}>LEFT</button> */}
                            <div className="services">
                                <Services services={services} />
                            </div>
                            {/* <button onClick={() => scroll(20)}>RIGHT</button> */}
                        </div>
                    </article>
                    <Divider />
                    <article className="list-section">
                        <header className="list-header">
                            <div ref={aboutUsRef} className="scroll-ref"></div>
                            <h2>Our Team</h2>
                        </header>
                        <div className="row-list-section">
                            {/* <button onClick={() => scroll(-20)}>LEFT</button> */}
                            <div className="large-circular">
                                <StaffList items={staff} />
                            </div>
                            {/* <button onClick={() => scroll(20)}>RIGHT</button> */}
                        </div>
                    </article>
                    <Divider />
                    <article className="list-section">
                        <div className="list-header">
                            <div ref={reviewsRef} className="scroll-ref"></div>
                            <h2>Reviews</h2>
                        </div>
                        <div className="row-list-section">
                            {/* <button onClick={() => scroll(-20)}>LEFT</button> */}
                            <div className="large-circular">
                                <ReviewList items={reviews} />
                            </div>
                            {/* <button onClick={() => scroll(20)}>RIGHT</button> */}
                        </div>
                    </article>
                </CenteredGrid>
            </main>
            <Footer />
        </div >
    );
}

export default StaticSite;