import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.sass'

import Icon from '@/components/icon'
import { IconTypes } from '@/components/icon/types'
import { experience, ExperienceType } from '@/data/experience'
import avatarPic from '@/public/avatar.jpg'
import { update } from '@/update'
import { cn } from '@/utils/tools'

type FactType = {
    title?: string
    value?: string
}

type LinkType = {
    link: string
    label: string
    icon: IconTypes
}

const findEarliestDate = (experience: ExperienceType[]): string | undefined => {
    const allDates = experience
        .flatMap((exp) => exp.period)
        .map((dateStr) => new Date(dateStr))
        .filter((date) => !isNaN(date.getTime()))

    if (allDates.length === 0) {
        return undefined
    }

    const earliestDate = new Date(Math.min(...allDates.map((date) => date.getTime())))

    return earliestDate.toISOString().split('T')[0]
}

const divisor = 1000 * 60 * 60 * 24 * 365.2421897
const birthTime = new Date('1999-02-25').getTime()
const expTime = new Date(findEarliestDate(experience) ?? '2019-02-14').getTime()

export const Introduce: React.FC = () => {
    const [myAge, setMyAge] = React.useState<string>('')
    const [myExp, setMyExp] = React.useState<string>('')

    const dateUpdate = new Date(update).toLocaleDateString('en-us', {
        day: 'numeric',
        month: 'short',
        weekday: 'long',
        year: 'numeric'
    })

    const tick = () => {
        const ageCalc = ((Date.now() - birthTime) / divisor).toFixed(7)
        const expCalc = ((Date.now() - expTime) / divisor).toFixed(7)

        setMyAge(ageCalc)
        setMyExp(expCalc)
    }

    const factsList: FactType[] = [
        {
            title: 'My age',
            value: myAge
        },
        {
            title: 'Experience',
            value: myExp
        },
        {
            title: 'Location',
            value: 'Thailand'
        },
        {
            title: 'Today',
            value: dateUpdate
        }
    ]

    const linksList: LinkType[] = [
        {
            icon: 'github',
            label: 'GitHub',
            link: 'https://t.me/dtsh39'
        },
        {
            icon: 'telegram',
            label: 'Telegram',
            link: 'https://t.me/dtsh39'
        },
        {
            icon: 'facebook',
            label: 'Facebook',
            link: 'https://t.me/dtsh39'
        },
        {
            icon: 'linkedin',
            label: 'LinkedIn',
            link: 'https://t.me/dtsh39'
        }
    ]

    React.useEffect(() => {
        const timer = setInterval(() => tick(), 50)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className={cn(styles.introduceSection)}>
            <div className={styles.avatarContainer}>
                <Image
                    src={avatarPic}
                    layout={'fill'}
                    objectFit={'cover'}
                    alt={"Hi I'm - Da Shan - Picture of the author"}
                />
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <h1>
                            {"Hi I'm - "}
                            <span>{'Da Shan'}</span>
                        </h1>

                        <div className={styles.links}>
                            {linksList?.map((item) => (
                                <Link
                                    key={`link-${item.link}`}
                                    href={item.link}
                                    title={item.label}
                                    target={'_blank'}
                                    className={styles.link}
                                >
                                    <Icon name={item.icon} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <h3 className={styles.subTitle}>{'Self-Taught Web Developer, IT support and Dreamer...'}</h3>
                </div>

                <ul className={styles.factsList}>
                    {factsList?.map(({ title, value }) => (
                        <li key={`fact-${title}`}>
                            <div className={styles.key}>{title}</div>
                            <div className={styles.value}>{value}</div>
                        </li>
                    ))}
                </ul>

                <div className={styles.description}>
                    <p style={{ textAlign: 'justify', fontSize: 14 }}>
                        {
                            'I am a Self-Taught Web Developer, IT support technician and Junior Network Engineer. Right now, I am focusing on web development and learning new skills every day. Sometimes it is difficult but I never give up because I love learning.'
                        }
                    </p>
                    <p style={{ textAlign: 'justify', fontSize: 14 }}>
                        {
                            'In my free time, I like to read the news, watch good movies and I also like to see the stars . I am looking for a job where I can use my skills, learn more and grow in my career.'
                        }
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Introduce
