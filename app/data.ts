type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Octet Turkey',
    title: 'Mid Frontend Developer',
    start: 'March 2024',
    end: 'Present',
    link: 'https://www.octet.com.tr',
    id: 'work1',
  },
  {
    company: 'ParamTech',
    title: 'Jr. Frontend Developer',
    start: 'May 2023',
    end: 'March 2024',
    link: 'https://paramtech.com.tr',
    id: 'work2',
  },
  {
    company: 'Istinye University',
    title: 'Jr. Front-end Developer',
    start: 'June 2022',
    end: 'May 2023',
    link: 'https://www.istinye.edu.tr/en',
    id: 'work3',
  },
  {
    company: 'Finartz',
    title: 'Front-end Developer Intern',
    start: 'March 2022',
    end: 'June 2022',
    link: 'https://finartz.com',
    id: 'work4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ozgurcokceken',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ozgur-cokceken',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ozgurcokceken',
  },
]

export const EMAIL = 'ozgurcokckn@email.com'
