import React from 'react'
import Image from 'next/image'

import photo from './photo.png'
import styles from './styles.module.sass'

/**
 * The About component displays information about the developer, including a photo and a brief description.
 *
 * @component
 * @example
 * return (
 *   <About />
 * )
 */
export const About: React.FC = () => (
    <section className={styles.aboutSection}>
        <h2 className={'pageTitle'}>{'About me'}</h2>
        <div className={styles.aboutContainer}>
            <Image
                src={photo}
                alt={'Photo of me'}
            />
            <div
                style={{
                    textAlign: 'justify'
                }}
            >
                <p>
                    {
                        'I love programming, especially web development and I want to make it my career. I enjoy learning new technologies and improving my skills to build useful and user-friendly websites.'
                    }
                </p>
                <p>
                    {
                        'Before learning web development, I worked as an IT Technician and Junior Network Engineer for five years. I have experience fixing hardware and software problems, setting up network devices, managing servers and keeping IT systems running smoothly. This experience has helped me develop strong problem-solving skills and a good understanding of technology.'
                    }
                </p>
                <p>
                    {
                        'Now, I am focusing on web development, learning every day and working on projects to improve my skills. I am excited to join a team where I can grow, apply my knowledge and contribute to real-world projects.'
                    }
                </p>
            </div>
        </div>
    </section>
)

export default About
