import React from 'react'
import { FaAppStore } from 'react-icons/fa'
import { IoAnalytics } from 'react-icons/io5'
import { PiHeadCircuitLight } from 'react-icons/pi'
import { SiAdobeindesign, SiGooglemarketingplatform } from 'react-icons/si'
import { TbWorldWww } from 'react-icons/tb'

export const servicesData = [
    {
        id: 1,
        title: 'Web development',
        link: '#',
        icon: <TbWorldWww />,
        delay: 0.2,
    },
    {
        id: 2,
        title: 'Graphics Design',
        link: '#',
        icon: < SiAdobeindesign />,
        delay: 0.3,
    },
    {
        id: 3,
        title: 'Nural Network',
        link: '#',
        icon: <PiHeadCircuitLight/>,
        delay: 0.4,
    },
    {
        id: 4,
        title: 'Digital Marketing',
        link: '#',
        icon: <SiGooglemarketingplatform />,
        delay: 0.5,
    },
    {
        id: 5,
        title: 'Data Analysis',
        link: '#',
        icon: <IoAnalytics />,
        delay: 0.6,
    },
    {
        id: 6,
        title: 'App Development',
        link: '#',
        icon: <FaAppStore />,
        delay: 0.7,
    },

]