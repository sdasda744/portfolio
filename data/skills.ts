export const Frontend = {
    TypeScript: 'TypeScript',
    JavaScript: 'JavaScript',
    React: 'React',
    HTML: 'HTML',
    CSS: 'CSS',
    Bootstrap: 'Bootstrap',
    TailwindCSS: 'Tailwind CSS'
} as const

export type FrontendSkillsType = (typeof Frontend)[keyof typeof Frontend]

export const ITSupport = {
    resolvedIssues: 'Diagnosed and resolved software and hardware issues.',
    installWindows: 'Installed and maintained Windows OS (licensed and cracked versions).',
    installServer: 'Installed Windows Server (2012, 2016) and performed troubleshooting.',
    script: 'Used scripting files for standard installations.',
    reinstall: 'Reinstalled Windows OS without losing user data.',
    backup: 'Maintained important user data backups and performed scheduled backups.',
    testNetwork: 'Tested internet speed and resolved network issues.',
    configureRouter: 'Changed WiFi passwords and configured router settings.',
    backupRouter: 'Backed up router configurations and enabled dual-bandwidth settings.',
    firewallConfiguration: 'Configured and maintained firewall settings for network security.',
    officeServer: 'Created and maintained small office file servers.',
    linuxInstallation: 'Installed and managed Linux servers (Ubuntu, Rocky Linux, CentOS).',
    ftpServer: 'Set up and maintained FTP servers for secure file sharing.',
    remoteAccess: 'Managed remote access tools (Telnet, SSH, RDP, VPN).',
    osiLayers: 'Applied knowledge of OSI 7 layers for troubleshooting network issues.',
    virtualization: 'Installed and managed virtualization platforms (VMware, VirtualBox, Hyper-V).',
    cloudServices: 'Basic knowledge of cloud services like AWS, Azure, and Google Cloud.',
    hardwareMaintenance: 'Cleaned, maintained, and repaired desktop and server hardware.',
    emailSupport: 'Assisted users with email login, configuration, and troubleshooting.',
    softwareDeployment: 'Deployed and updated software across multiple systems.',
    securityManagement: 'Implemented basic IT security measures, including antivirus and system hardening.',
    printerSetup: 'Installed and configured printers, scanners.',
    networkMonitoring: 'Monitored network performance and analyzed logs for troubleshooting.'
} as const

export type ITSupportSkillsType = (typeof ITSupport)[keyof typeof ITSupport]

export type SkillsType = FrontendSkillsType | ITSupportSkillsType
