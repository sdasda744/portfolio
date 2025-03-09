import React from 'react'

import styles from './styles.module.sass'

export const GithubActivity: React.FC = () => (
    <section className={styles.activitySection}>
        <img
            style={{
                width: '100%'
            }}
            src="https://raw.githubusercontent.com/tobiasmeyhoefer/tobiasmeyhoefer/output/github-snake-dark.svg"
        />
    </section>
)

export default GithubActivity
