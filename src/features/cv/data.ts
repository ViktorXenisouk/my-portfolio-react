import { ICV } from "./type"

const ru: ICV = {
    personalInformation: 'Личная информация',
    name_label: 'Имя',
    name_text: 'Виктор Ксенжук',
    languages_label: 'Языки',
    languages_nodes: [
        'Русский – родной',
        'Чешский – свободно',
        'Английский – продвинутый (B1)'
    ],
    profileSummary_label: 'О себе',
    profileSummary_text: 'Мотивированный Full-Stack разработчик с опытом создания масштабируемых веб-приложений на React, TypeScript, Node.js, Express и MongoDB. Перехожу из сферы гостиничного бизнеса в IT, обладаю способностью быстро обучаться, самостоятельно управлять проектами и доводить задачи до результата.',
    technicalSkills_label: 'Технические навыки',
    technicalSkills_nodes: {
        'Frontend': 'React, TypeScript, JavaScript (ES6+), Zustand, MUI',
        'Backend': 'Node.js, Express.js, разработка REST API, аутентификация JWT',
        'Базы данных': 'MongoDB, Mongoose',
        'Инструменты': 'Git, GitHub, VSCode',
        'Другое': 'Адаптивная верстка, SEO-оптимизация, оптимизация серверов, основы Agile'
    },
    freelanceProjects_label: 'Фриланс-проекты (2023–наст. время)',
    freelanceProjects_nodes: {
        'Full-stack Web Shop': 'Интернет-магазин с фильтрацией товаров, корзиной и авторизацией (React, TS, Node, MongoDB).',
        'Telegram Bot': 'Автоматизированный бот с интеграцией внешних API, командами и базой данных.',
        'Game Server': 'Сервер для многопользовательской онлайн-игры с комнатами и WebSockets.',
        'Landing Page для блогера': 'Адаптивный сайт с анимациями и интеграцией соцсетей (React + MUI).',
        'Server Optimization': 'Оптимизация скорости и SEO существующего интернет-магазина (кэширование, lazy loading, SSR).',
        'Back-end API “ShopCore”': 'RESTful API для e-commerce: регистрация, корзина, заказы, фильтры, JWT-защита.',
    },
    contacts_label: 'Контакты',
    contacts_nodes: {
        'Email': '',
        'GitHub': '',
        'Портфолио': '',
    }
}

const en: ICV = {
    personalInformation: 'Personal Information',
    name_label: 'Name',
    name_text: 'Viktor Xenisouk',
    languages_label: 'Languages',
    languages_nodes: [
        'Russian – Native',
        'Czech – Fluent',
        'English – intermediate (B1)'
    ],
    profileSummary_label: 'Profile Summary',
    profileSummary_text: 'Motivated Full-Stack Developer with strong skills in building scalable web applications using React, TypeScript, Node.js, Express, and MongoDB. Currently transitioning from hospitality studies into IT, with proven ability to learn fast, manage projects independently, and deliver results.',
    technicalSkills_label: 'Technical Skills',
    technicalSkills_nodes: {
        'Frontend': 'React, TypeScript, JavaScript (ES6+), Zustand, MUI',
        'Backend': 'Node.js, Express.js, REST API development, JWT authentication',
        'Databases': 'MongoDB, Mongoose',
        'Tools': 'Git, GitHub, VSCode',
        'Other': 'Responsive design, SEO optimization, Server optimization, Agile basics'
    },
    freelanceProjects_label: 'Freelance Projects (2023–Present)',
    freelanceProjects_nodes: {
        'Full-stack Web Shop': 'E-commerce platform with product filters, cart system, and user authentication (React, TS, Node, MongoDB).',
        'Telegram Bot': 'Automated bot with API integrations, commands, and database support.',
        'Game Server': 'Real-time multiplayer server with authentication, room system, and WebSockets.',
        'Landing Page for Blogger ': 'Responsive multi-page website with animations and social media integration.',
        'Server Optimization': 'Improved loading speed and SEO of an existing shop (caching, lazy loading, SSR).',
        'Back-end API “ShopCore”': 'RESTful API for e-commerce: cart, orders, filters, with secure JWT authentication.',
    },
    contacts_label: 'Contacts',
    contacts_nodes: {
        'Email': '',
        'GitHub': '',
        'Портфолио': '',
    }
}

export { ru, en }