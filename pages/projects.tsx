import React from 'react'
import Link from 'next/link'

import Icon from '@/components/icon'
import { iconNames } from '@/components/icon/types'
import Projects from '@/components/projects'

const ProjectsPage: React.FC = () => (
    <>
        <section>
            <h1 className={'pageTitle'}>{'My projects'}</h1>
            <p>
                {
                    'I have built small but useful projects to improve my web development skills. Each project helped me learn important concepts like user interaction, data handling and basic design. I am still writing code and learning new technologies. I know these projects are small but I will update them in the future as I improve my skills'
                }
            </p>
        </section>

        <Projects />

        <section className={'footerLinks'}>
            <Link
                href={'/'}
                title={'View about me'}
            >
                <Icon name={iconNames.left} />
                {'About me'}
            </Link>

            <Link
                href={'/experience'}
                title={'View my experience'}
            >
                {'Experience'}
                <Icon name={iconNames.right} />
            </Link>
        </section>
    </>
)

export default ProjectsPage
