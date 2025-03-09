import React from 'react'
import Link from 'next/link'

import Experience from '@/components/experience'
import Icon from '@/components/icon'
import { iconNames } from '@/components/icon/types'

const ProjectsPage: React.FC = () => (
    <>
        <section>
            <h1 className={'pageTitle'}>{'My experience'}</h1>
            <p>
                {
                    'I have a solid background in IT support and a few in frontend web development. In IT support, I helped users with hardware, software and network issues, performed OS installations, configured routers and maintained system stability through regular backups. I also automated tasks using scripting, assisted with email configurations and worked with networking tools like FTP, Telnet, and SSH'
                }
            </p>
            <br />
            <p>
                {
                    'As a self-taught frontend web developer, I have built responsive websites using HTML5, CSS3 and JavaScript and developed interactive user interfaces with React. I’m experienced in creating mobile-first designs and implementing responsive layouts with Flexbox and Grid. I manage my code using Git and GitHub and have worked on projects such as to-do list apps and a furniture website. I am always learning and improving my skills through online resources.'
                }
            </p>
        </section>

        <Experience />

        <section className={'footerLinks'}>
            <Link
                href={'/projects'}
                title={'View my pet projects'}
            >
                <Icon name={iconNames.left} />
                {'Projects'}
            </Link>

            <Link
                href={'/skills'}
                title={'View my technical skills'}
            >
                {'Skills'}
                <Icon name={iconNames.right} />
            </Link>
        </section>
    </>
)

export default ProjectsPage
