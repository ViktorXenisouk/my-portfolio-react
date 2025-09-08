import mongoDB from "../../assets/icons/MongoDB.svg"
import nodeIcon from "../../assets/icons/Node.svg"
import {fullStackImgs,telegramBotImgs,landingBlogerImgs,backEndImgs} from "../../assets/images/portfolio"

import { IPortfolioData } from "./types"

const PORTFOLIOS: IPortfolioData[] = [
{
    id: 'project_1',
    date: Date.UTC(2015, 0, 12),
    title_ru: 'Full-stack онлайн магазин',
    title_en: 'Full-stack Web Shop',
    description_ru: 'Интернет-магазин компьютерной техники с системой фильтров, корзиной и авторизацией пользователей. Использовал React, TypeScript, Node.js, Express и MongoDB.',
    description_en: 'An online computer store with filters, shopping cart, and user authentication. Built with React, TypeScript, Node.js, Express, and MongoDB.',
    tags: ['react', 'node', 'mongo-db'],
    imgs: fullStackImgs,
},
{
    id: 'project_2',
    date: Date.UTC(2015, 0, 12),
    title_ru: 'Телеграм бот',
    title_en: 'Telegram Bot',
    description_ru: 'Бот с интеграцией внешних API, поддержкой команд и хранением данных в базе. Разработан для автоматизации задач и общения с пользователями.',
    description_en: 'Telegram bot with external API integration, command support, and database storage. Designed for task automation and user interaction.',
    tags: ['node', 'telegram-bot-api', 'mongo-db'],
    imgs: telegramBotImgs,
},
{
    id: 'project_3',
    date: Date.UTC(2015, 0, 12),
    title_ru: 'Сервер для онлайн игры',
    title_en: 'Game Server',
    description_ru: 'Серверная часть онлайн-игры с авторизацией игроков, системой комнат и обменом сообщениями в реальном времени через WebSockets.',
    description_en: 'Backend server for an online game with player authentication, room system, and real-time messaging via WebSockets.',
    tags: ['node', 'websocket', 'mongo-db'],
    imgs: [nodeIcon, mongoDB],
},
{
    id: 'project_4',
    date: Date.UTC(2015, 0, 12),
    title_ru: 'Landing Page для блогера',
    title_en: 'Landing Page for Blogger',
    description_ru: 'Многостраничный сайт с адаптивным дизайном, анимациями и интеграцией с соцсетями. Сделан на React + MUI.',
    description_en: 'Multi-page website with responsive design, animations, and social media integration. Built with React and MUI.',
    tags: ['react', 'mui'],
    imgs: landingBlogerImgs,
},
{
    id: 'project_5',
    date: Date.UTC(2015, 0, 12),
    title_ru: 'Оптимизация сервера',
    title_en: 'Server Optimization',
    description_ru: 'Оптимизация скорости загрузки и SEO существующего интернет-магазина. Настроил кэширование, lazy-loading и серверный рендеринг, что повысило производительность и позиции в поисковиках.',
    description_en: 'Optimized loading speed and SEO for an existing online store. Configured caching, lazy-loading, and server-side rendering to boost performance and search rankings.',
    tags: ['node', 'seo', 'performance'],
    imgs: backEndImgs,
},
{
    id: 'project_6',
    date: Date.UTC(2015, 0, 12),
    title_ru: 'Back-end API',
    title_en: 'Back-end API',
    description_ru: 'RESTful API для e-commerce проекта: регистрация, корзина, заказы, фильтры. Использовал Express, MongoDB, JWT, middleware для валидации и логирования.',
    description_en: 'RESTful API for an e-commerce project: registration, cart, orders, and filters. Built with Express, MongoDB, JWT, and middleware for validation and logging.',
    tags: ['node', 'express', 'mongo-db', 'jwt'],
    imgs: [nodeIcon, mongoDB],
}

]

export { PORTFOLIOS }