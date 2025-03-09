import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import About from '@/components/about'
import Icon from '@/components/icon'
import { iconNames } from '@/components/icon/types'
import Introduce from '@/components/introduce'

const GithubActivity = dynamic(() => import('@/components/github-activity'), { ssr: false })

const MainPage: React.FC = () => (
    <>
        <Introduce />

        <About />

        <GithubActivity />

        <section className={'footerLinks'}>
            <Link
                href={'/projects'}
                title={'View my pet projects'}
            >
                {'Projects'}
                <Icon name={iconNames.right} />
            </Link>
        </section>
    </>
)

export default MainPage
