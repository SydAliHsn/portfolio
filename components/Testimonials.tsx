'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { AiFillStar } from 'react-icons/ai'



const Testimonials = (props: {}): JSX.Element => {
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            gsap.from(".fadeIn", {
                scale: 0.9,
                y: 50,
                opacity: 0,
                duration: 0.4,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 65%",
                },
                stagger: 0.3
            })
        }, container);

        return () => {
            ctx.revert();
        }
    }, [container]);



    return (
        <section
            className="section pt-32 text-darker dark:text-lightest"
            id="testimonials"
        >
            <div ref={container} className="container mx-auto px-2 sm:px-4 md:px-16 lg:px-[7.5rem] xl:px-36 2xl:max-w-7xl space-y-6">

                <div className='text-center'>
                    <h2 className="fadeIn text-4xl md:text-5xl font-bold">Testimonials</h2>
                    <p className='fadeIn text-lg md:text-xl py-4 md:py-6 leading-15'>Extremely satisfied clients from across the world. Translating their wishes into fine-tailored digital solutions.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-10 md:gap-6 mt-20">

                    <Testimonial name='Musa Yasin'
                        review='Very professional, friendly, good prices definitely recommended.'
                        numStars={5}
                        iconColor='#20f720'
                    />

                    <Testimonial name='Josh Donald'
                        review='Transparent and flexible about his way of working. He thinks along to set up a solution that works in the long run.'
                        numStars={5}
                        iconColor='#4287f5'
                    />

                    <Testimonial name='Sadeem Yasir'
                        review='Superb work. Think along and find a solution. Very good value and quality work done. Extremely satisfied. Thank you.'
                        numStars={5}
                        iconColor='#f525f1'
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

const Testimonial = ({ name, review, numStars, iconColor }: { name: string, review: string, numStars: number, iconColor: string }): JSX.Element => {
    return <article className="text-center bg-lightest dark:bg-dark rounded-4xl flex flex-col gap-2 md:w-2/3 px-6 lg:px-8 shadow-md shadow-light/10 dark:shadow-black/10 fadeIn pb-14 pt-10 relative">
        <span className='{`${iconColorClass} grid items-center text-lg absolute -top-5 left-[50%] -translate-x-[50%] justify-center h-[3.2rem] w-[3.2rem] rounded-full'
            style={{ backgroundColor: iconColor }}
        >{name[0].toUpperCase()}</span>

        <h3 className='text-xl font-medium'>{name}</h3>

        <div className='text-yellow-500 text-center'>
            {[...Array(numStars)].map((_, i) => <AiFillStar className='inline' key={i} />)}
        </div>

        <p>{review}</p>
    </article >
}