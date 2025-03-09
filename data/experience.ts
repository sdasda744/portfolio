import { Frontend, ITSupport, SkillsType } from '@/data/skills'

export type RoleSkillsType = {
    area: string
    stack: SkillsType[]
}

export type ExperienceType = {
    period: string[]
    role: string
    duties: string
    skills?: RoleSkillsType[]
}

export const experience: ExperienceType[] = [
    {
        period: ['09/16/2024'],
        role: 'self-taught frontend web developer',
        duties: 'As a self-taught frontend web developer, I have gained hands-on experience through personal projects and online resources. I have developed a strong understanding of frontend technologies, design principles, and user experience, and I am continually learning to improve my skills.',
        skills: [
            {
                area: 'Frontend',
                stack: [Frontend.HTML, Frontend.CSS, Frontend.JavaScript, Frontend.TypeScript, Frontend.React, Frontend.TailwindCSS]
            }
        ]
    },
    {
        period: ['02/17/2023', '02/15/2025'],
        role: 'IT Support Technician',
        duties: 'As an IT Support Technician, I provided technical assistance to users, ensuring the smooth operation of IT systems and resolving hardware, software and network issues.',
        skills: [
            {
                area: 'IT Support Technician',
                stack: [
                    ITSupport.resolvedIssues,
                    ITSupport.installWindows,
                    ITSupport.installServer,
                    ITSupport.script,
                    ITSupport.reinstall,
                    ITSupport.backup,
                    ITSupport.testNetwork,
                    ITSupport.configureRouter,
                    ITSupport.backupRouter,
                    ITSupport.firewallConfiguration,
                    ITSupport.officeServer,
                    ITSupport.linuxInstallation,
                    ITSupport.ftpServer,
                    ITSupport.remoteAccess,
                    ITSupport.osiLayers,
                    ITSupport.virtualization,
                    ITSupport.cloudServices,
                    ITSupport.hardwareMaintenance,
                    ITSupport.emailSupport,
                    ITSupport.softwareDeployment,
                    ITSupport.securityManagement,
                    ITSupport.printerSetup,
                    ITSupport.networkMonitoring
                ]
            }
        ]
    }
]
