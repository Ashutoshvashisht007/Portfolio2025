export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -6.5, 0] : isMobile ? [5, -6, 0] : isTablet ? [6, -6, 0] : [9, -6, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [4.5, 5.5, 0] : isTablet ? [4.5, 5.5, 0] : [8.75, 5.5, 0],
        ringPosition: isSmall ? [-5.5, 8.5, 0] : isMobile ? [-8, 12, 0] : isTablet ? [-10, 12, 0] : [-16, 12, 0],
        targetPosition: isSmall ? [-5, -11.5, -10] : isMobile ? [-8, -11, -10] : isTablet ? [-11, -11, -10] : [-13, -10, -10],
    };
};

export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    }, {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Work',
        href: '#experience',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [
    {
        title: "SnipHub",
        desc: "An intuitive and sleek web app that empowers developers to save, organize, and share code snippets effortlessly. Built with Next.js, TailwindCSS, and modern web practices, SnipHub offers a clean interface with real-time search, syntax highlighting, and easy snippet management—making coding more productive and collaborative",
        subdesc:
            "Utilizing syntax highlighting for readability and real-time search for quick access, SnipHub ensures an efficient workflow while maintaining a responsive and minimal UI across devices.",
        live_href: 'https://snip-hub-six.vercel.app/',
        github_href: 'https://github.com/Ashutoshvashisht007',
        texture: '/textures/project/coming_soon.mp4',
        logo: '/assets/SnipHub.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/nextjs.svg',
            },
            {
                id: 2,
                name: 'MongoDB',
                path: '/assets/mongodb.png',
            },
            {
                id: 3,
                name: 'Nodejs',
                path: '/assets/node.png',
            }, {
                id: 4,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            }, {
                id: 5,
                name: 'TypeScript',
                path: 'assets/typescript.png',
            }
        ],
    },
    {
        title: "Gadgets Store",
        desc: "A fully functional e-commerce web app designed for seamless gadget shopping. Built with the MERN stack and TypeScript, it offers users an intuitive experience with secure authentication, product browsing, and smooth checkout integration.",
        subdesc:
            "Powered by Firebase Authentication for secure logins and Stripe for hassle-free payments, Gadgets Store ensures reliability, scalability, and responsiveness across all devices.",
        live_href: 'https://e-commerce-frontend-opal.vercel.app/',
        github_href: 'https://github.com/Ashutoshvashisht007/E-Commerce',
        texture: '/textures/project/coming_soon.mp4',
        logo: '/assets/gadgets.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 3,
                name: 'Node.js',
                path: 'assets/node.png',
            },
            {
                id: 4,
                name: 'Express.js',
                path: 'assets/express.png',
            },
            {
                id: 5,
                name: 'Firebase',
                path: 'assets/firebase.png',
            },
        ],
    },
    {
        title: "Video Streaming Web Application",
        desc: "A dynamic video streaming platform built with the MERN stack, offering users a smooth and interactive way to explore and watch videos online. Designed with React.js and modern UI practices, it delivers a seamless content browsing and playback experience.",
        subdesc:
            "With JWT-based authentication for secure access and MongoDB for managing user profiles and video metadata, the platform ensures scalability, data integrity, and responsiveness across devices.",
        live_href: 'https://youtubebackend.onrender.com/',
        github_href: 'https://github.com/Ashutoshvashisht007/Video-Streaming-Web-app',
        texture: '/textures/project/coming_soon.mp4',
        logo: '/assets/video.svg',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Node.js',
                path: '/assets/node.png',
            },
            {
                id: 2,
                name: 'Express.js',
                path: 'assets/express.png',
            },
            {
                id: 3,
                name: 'React',
                path: '/assets/react.svg',
            },
            {
                id: 4,
                name: 'MongoDB',
                path: '/assets/mongodb.png',
            },
        ],
    },
    {
        title: "Box-Office Application",
        desc: "A user-friendly web app that allows users to search and explore their favorite shows and actors. Built with React.js, it provides a smooth navigation flow with a clean and responsive interface.",
        subdesc:
            "Leveraging React Router for seamless page transitions and API integration for real-time show data, the app ensures an engaging browsing experience across devices.",
        live_href: 'https://ashutoshvashisht007.github.io/Box-Office-App./#/',
        github_href: 'https://github.com/Ashutoshvashisht007/Box-Office-App.',
        texture: '/textures/project/coming_soon.mp4',
        logo: '/assets/box_office.svg',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.png',
            },
            {
                id: 3,
                name: 'API',
                path: '/assets/api.svg',
            },
        ],
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const workExperiences = [
    {
        id: 1,
        name: 'Invisible Technologies',
        pos: 'Ai Data Trainer',
        duration: 'August 2024 - August 2025',
        icon: '/assets/invisible.jfif',
        points: [
            "Improved the accuracy of AI-generated responses by 60% by analyzing and refining outputs related to JavaScript and Reactjs.",
            "Reviewed and debugged AI-generated JavaScript and React.js code to ensure correctness, efficiency, and adherence to best practices",
            "Evaluated AI-provided answers, suggested optimizations, and ensured clarity, making responses more developer-friendly and aligned with industry standards.",
            "Contributed to training AI models by identifying inconsistencies, providing precise feedback, and refining generated solutions for better accuracy and usability.",
        ],
        animation: 'victory',
    },
];