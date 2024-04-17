import { FaComment, FaIdCard, FaPlug, FaPlus, FaResolving } from "react-icons/fa"

export const navLinks = [
    {
        title: 'Home',
        id: 6,
        path: '/',
    },
    {
        title: 'Features',
        id: 1,
        path: '/Features',
    },
    {
        title: 'How to use',
        id: 2,
        path: '/howToUse',
    },
    {
        title: 'Pricing',
        id: 3,
        path: '/Pricing',
    },
    {
        title: 'RoadMap',
        id: 4,
        path: '/RoadMap',
    },
]

export const feataures = [
    {
        title: 'Ask anything',
        desc: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
        id: 1,
        icon: <FaIdCard className=" text-[30px] text-6" />
    },
    {
        title: 'Improve everyday',
        desc: 'The app uses natural language processing to understand user queries and provide accurate and relevant responses.',
        id: 2,
        icon: <FaPlus className=" text-[30px] text-5" />
    },
    {
        title: 'Connect anywhere',
        desc: 'The app uses natural language processing to understand user queries and provide accurate and relevant responses',
        id: 3,
        icon: <FaPlug className=" text-[30px] text-4" />
    },

    {
        title: 'Fast Responding',
        desc: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
        id: 4,
        icon: <FaResolving className=" text-[30px] text-3" />
    },

    {
        title: 'Ask anything',
        desc: 'Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.',
        id: 5,
        icon: <FaComment className=" text-[30px] text-1" />
    },

    {
        title: 'Ask anything',
        desc: 'Lets users quickly find answers to their questions without having to search through multiple sources.',
        id: 6,
        icon: <FaIdCard className=" text-[30px] text-2" />
    },
]