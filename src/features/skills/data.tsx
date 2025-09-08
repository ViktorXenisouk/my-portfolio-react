import { ISkillData } from "./types"
import ReactIcon from "../../assets/icons/React.svg"
import NodeIcon from "../../assets/icons/Node.svg"
import JavaScriptIcon from "../../assets/icons/JavaScript.svg"
import TypeScriptIcon from "../../assets/icons/TypeScript.svg"
import MongoIcon from "../../assets/icons/MongoDB.svg"
import TelegramIcon from "../../assets/icons/Telegram.svg"
import ZustangIcon from "../../assets/icons/Zustang.svg"
import MUIIcon from "../../assets/icons/MUI.svg"


import { TAGS } from "./tags.data"

const SKILLS: ISkillData[] = [
        {
                title: 'React',
                description_ru: 'Популярная библиотека для создания пользовательских интерфейсов',
                description_en: 'A popular library for building user interfaces.',
                experienceDescription_ru: 'Разработка интернет-магазина, лендингов и персональных проектов. Использую хуки, контекст, оптимизацию рендеров, маршрутизацию (React Router)',
                experienceDescription_en: 'Developed e-commerce platforms, landing pages, and personal projects. Experienced with hooks, context, render optimization, and routing (React Router).',
                image: ReactIcon,
                tags: ['react', 'front-end', 'web'],
                knowledgeTitle_ru: 'эксперт',
                knowledgeTitle_en: 'Mastery',
                knowledge: 10
        },
        {
                title: 'MUI',
                description_ru: 'UI-библиотека компонентов для React с поддержкой темизации.',
                description_en: 'UI component library for React with theming support.',
                experienceDescription_ru: 'Создание адаптивных интерфейсов с кастомными темами. Настраивал цветовые палитры, типографику, компоненты (Button, Card, Grid, Modal и т.д.).',
                experienceDescription_en: 'Built responsive interfaces with custom themes. Configured color palettes, typography, and components (Button, Card, Grid, Modal, etc.).',
                image: MUIIcon,
                tags: ['react', 'front-end', 'web'],
                knowledgeTitle_ru: 'эксперт',
                knowledgeTitle_en: 'Deep Knowledge',
                knowledge: 9
        },
        {
                title: 'Node',
                description_ru: 'Среда выполнения JavaScript на сервере. Позволяет писать быстрые и масштабируемые бэкенды.',
                description_en: 'JavaScript runtime environment for building fast and scalable backends.',
                experienceDescription_ru: 'Создавал серверы для онлайн-игр, REST API и backend для e-commerce проектов. Работал с асинхронными операциями, потоками и WebSockets.',
                experienceDescription_en: 'Built servers for online games, REST APIs, and e-commerce backends. Worked with async operations, streams, and WebSockets.',
                image: NodeIcon,
                tags: ['back-end'],
                knowledgeTitle_ru: 'продвинутый',
                knowledgeTitle_en: 'Highly Skilled',
                knowledge: 8
        },
        {
                title: 'Express',
                description_ru: 'Минималистичный и гибкий фреймворк для Node.js.',
                description_en: 'A minimal and flexible framework for Node.js.',
                experienceDescription_ru: 'Разработка REST API с аутентификацией (JWT), middleware, обработкой ошибок и валидацией. Использовал для backend части интернет-магазинов и телеграм-ботов.',
                experienceDescription_en: 'Developed REST APIs with authentication (JWT), middleware, error handling, and validation. Used for e-commerce backends and Telegram bots.',
                image: NodeIcon,
                tags: ['back-end'],
                knowledgeTitle_ru: 'эксперт',
                knowledgeTitle_en: 'Deep Knowledge',
                knowledge: 9
        },
        {
                title: 'Telegram Bot Api',
                description_ru: 'API для создания ботов в Telegram.',
                description_en: 'API for building Telegram bots.',
                experienceDescription_ru: 'Разработка ботов для автоматизации и онлайн-магазина. Реализовывал обработку команд, интеграцию с базой данных.',
                experienceDescription_en: 'Created bots for automation and online shops. Implemented command handling and database integration.',
                image: TelegramIcon,
                tags: ['back-end', 'node', 'telegram'],
                knowledgeTitle_ru: 'уверенный',
                knowledgeTitle_en: 'Solid Skills',
                knowledge: 7
        },
        {
                title: 'MongoDB',
                description_ru: 'Документо-ориентированная база данных NoSQL.',
                description_en: 'A document-oriented NoSQL database.',
                experienceDescription_ru: 'Проектирование схем, работа с коллекциями, индексация, оптимизация запросов. Использовал в e-commerce проектах и при хранении данных телеграм-ботов.',
                experienceDescription_en: 'Designed schemas, worked with collections, indexing, and query optimization. Used in e-commerce projects and Telegram bot data storage.',
                image: MongoIcon,
                tags: ['data_base'],
                knowledgeTitle_ru: 'продвинутый',
                knowledgeTitle_en: 'Highly Skilled',
                knowledge: 8
        },
        {
                title: 'Zustand',
                description_ru: 'Легковесное хранилище состояния для React-приложений.',
                description_en: 'A lightweight state management library for React applications.',
                experienceDescription_ru: 'Использовал в e-commerce проекте для управления фильтрами, корзиной и авторизацией. Опыт подключения middleware, хранения в localStorage, мемоизации селекторов.',
                experienceDescription_en: 'Used in e-commerce projects to manage filters, cart, and authentication. Experienced with middleware, localStorage persistence, and selector memoization.',
                image: ZustangIcon,
                tags: ['react'],
                knowledgeTitle_ru: 'продвинутый',
                knowledgeTitle_en: 'Highly Skilled',
                knowledge: 8
        },
        {
                title: 'JavaScript (ES6+)',
                description_ru: 'Основной язык веб-разработки для frontend.',
                description_en: 'The core programming language for web development (frontend and backend).',
                experienceDescription_ru: 'Работа с современными возможностями JS (async/await, fetch, ES-модули, классы). Уверенное владение как в браузере, так и на сервере (Node.js).',
                experienceDescription_en: 'Worked with modern JS features (async/await, fetch, ES modules, classes). Confident in both browser and server-side (Node.js).',
                image: JavaScriptIcon,
                tags: [...TAGS],
                knowledgeTitle_ru: 'эксперт',
                knowledgeTitle_en: 'Deep Knowledge',
                knowledge: 9
        },
        {
                title: 'TypeScript',
                description_ru: 'Надстройка над JavaScript с типизацией.',
                description_en: 'A superset of JavaScript that adds static typing.',
                experienceDescription_ru: 'Использую для React и Node проектов. Настраивал типы для API, интерфейсы, дженерики, работал с внешними типами библиотек.',
                experienceDescription_en: 'Used in React and Node projects. Configured types for APIs, created interfaces, generics, and worked with external library typings.',
                image: TypeScriptIcon,
                tags: [...TAGS],
                knowledgeTitle_ru: 'эксперт',
                knowledgeTitle_en: 'Mastery',
                knowledge: 10
        },
]

export { SKILLS }