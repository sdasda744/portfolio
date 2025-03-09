type SkillItemType = {
    name: string
    level: number
}

type SkillGroupType = {
    group: string
    skills: SkillItemType[]
}

export const data: SkillGroupType[] = [
    {
        group: 'Frontend',
        skills: [
            {
                name: 'HTML',
                level: 70
            },
            {
                name: 'CSS',
                level: 60
            },
            {
                name: 'Tailwind',
                level: 70
            },
            {
                name: 'JavaScript',
                level: 60
            },
            {
                name: 'TypeScript',
                level: 30
            },
            {
                name: 'React, Next.js',
                level: 40
            }
        ]
    }
]
