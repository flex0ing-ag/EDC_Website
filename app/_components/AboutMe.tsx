'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    We believe in fostering an entrepreneurial mindset,
                    empowering students to innovate, build, and lead impactful
                    ventures.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    Who we are.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">About Us</p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                The Entrepreneurship Development Cell (EDC) of
                                IIEST Shibpur is a student-driven organization
                                dedicated to promoting innovation,
                                entrepreneurship, and startup culture among
                                students.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                We provide a platform for aspiring entrepreneurs
                                to ideate, collaborate, and transform their
                                ideas into impactful ventures through
                                mentorship, events, and industry connections.
                                Our focus is on building a strong
                                entrepreneurial ecosystem by organizing flagship
                                events, startup competitions, speaker sessions,
                                and networking opportunities with founders,
                                investors, and industry leaders. At EDC IIEST
                                Shibpur, we strive to empower students to think
                                beyond conventional boundaries and create
                                solutions that drive technological and social
                                impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
