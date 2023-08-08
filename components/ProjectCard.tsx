import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BiLogoGithub, BiLinkExternal } from 'react-icons/bi';

import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';

interface Props { technologies: string[], badge: string, title: string, content: string, img: string, repoName: string, url: string, reverse?: boolean }

const ProjectCard = ({ technologies, badge, title, content, img, repoName, url, reverse }: Props): JSX.Element => {
    const container = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            gsap.from(".fadeIn", {
                scale: 0.85,
                y: 70,
                opacity: 0,
                duration: 0.6,
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 65%",
                },
                stagger: {
                    amount: 1,
                },
            })
        }, container);

        return () => ctx.revert()
    }, [])

    return <div
        ref={container}
        className={`bg-lightest dark:bg-dark md:!bg-transparent relative p-4 sm:p-6 md:p-0 rounded-3xl flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-4 shadow-md shadow-light/10 dark:shadow-black/10 md:shadow-none`}>

        {/* Image Container */}
        <Link href='https://todo.syyed.me' target='_blank' className='md:w-[65%] h-full aspect-[14/10] rounded-3xl overflow-hidden relative shadow-project'>
            <Image fill src={img} alt="my project" />
        </Link>
        {/* End of Image Container */}

        {/* Text/Content Container */}
        <div className={`fadeIn rounded-3xl md:absolute ${reverse ? 'left-0' : 'right-0 md:text-right'} top-1/2 md:-translate-y-1/2 md:w-[28rem] xl:w-1/2`}>

            <h5 className='text-[0.95rem] font-medium text-primary-light dark:text-secondary'>{badge}</h5>
            <h3 className='text-2xl pb-3 lg:pb-5 font-semibold dark:text-lighter'>{title}</h3>

            <p className='text-sm lg:text-base bg-lightest dark:bg-dark rounded-3xl md:p-6 dark:text-light
    md:shadow-md shadow-light/10 dark:shadow-black/10 dark:shadow-black/10/10'>{content}</p>

            {/* Technology bubbles */}
            <ul className={`flex flex-wrap mt-4 gap-[0.6rem] ${!reverse && 'md:justify-end'}`}>
                {technologies.map(tech => (<li key={tech} className="bg-lighter bg-opacity-70 dark:bg-transparent border-2 px-2 py-1 rounded-2xl border-light text-dark dark:text-lighter md:text-sm text-xs">
                    {tech}
                </li>))}
            </ul>
            {/* End of Technology bubbles */}

            {/* Big Buttons (only for smaller screen) */}
            <div className="md:hidden flex flex-wrap justify-center xs:justify-start gap-2 xs:gap-4 mt-8 lg:mt-14">
                <PrimaryButton href={`https://github.com/sydalihsn/${repoName}`}
                    className='flex-grow xs:flex-grow-0 '
                >
                    Source <BiLogoGithub className="font-medium text-2xl" />
                </PrimaryButton>

                <SecondaryButton href={url} className='flex-grow xs:flex-grow-0 '>
                    <BiLinkExternal /> Live View
                </SecondaryButton>
            </div>
            {/* End of Big Buttons (only for smaller screen) */}

            {/* Small Buttons (only for bigger screen) */}
            <div className={`hidden md:flex text-dark/90 dark:text-light gap-5 text-2xl pt-4 ${!reverse && 'md:justify-end'}`}>
                <Link className='duration-200 hover:scale-110 hover:text-primary-light dark:hover:text-secondary-dark' href={`https://github.com/sydalihsn/${repoName}`} target='_blank'><BiLogoGithub /></Link>

                <Link className='duration-200 hover:scale-110 hover:text-primary-light dark:hover:text-secondary-dark' href={url} target='_blank'><BiLinkExternal /></Link>
            </div>
            {/* End of Small Buttons (only for bigger screen) */}
        </div>
    </div>
    {/* End of Text/Content Container */ }
}

export default ProjectCard;