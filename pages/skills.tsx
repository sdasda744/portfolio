import React from 'react'
import Link from 'next/link'

import Icon from '@/components/icon'
import { iconNames } from '@/components/icon/types'
import Skills from '@/components/skills'
import SkillsCloud from '@/components/skills-cloud'

const SkillsPage: React.FC = () => (
    <>
        <section>
            <h1 className={'pageTitle'}>{'My technical skills'}</h1>
            <p>
                {
                    "I don't have any working experience in programming or a job yet. I am just a self-taught learner and I've been learning web development for about 5 to 6 months. I haven’t given up, and I will continue learning. During this time, I've gained experience in coding challenges and various web development skills. I love coding and am excited to keep improving."
                }
            </p>
        </section>

        <Skills />
        <SkillsCloud />

        <section className={'footerLinks'}>
            <Link
                href={'/experience'}
                title={'View my experience'}
            >
                <Icon name={iconNames.left} />
                {'Experience'}
            </Link>
        </section>
    </>
)

export default SkillsPage
