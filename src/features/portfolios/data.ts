import { IPortfolio } from "./types";
import image from "../../assets/icons/mongo-db-icon.svg"

const PORTFOLIOS: IPortfolio[] = [
    {
        id:'project_1',
        date: Date.UTC(2015, 0, 12),
        title_ru: 'Full-stack Web Shop',
        description_ru: 'Интернет-магазин компьютерной техники с системой фильтров, корзиной и авторизацией пользователей. Использовал React, TypeScript, Node.js, Express и MongoDB.',
        tags: ['react', 'node', 'mongo-db'],
        imgs: [image],
    },
     {
        id:'project_2',
        date: Date.UTC(2015, 0, 12),
        title_ru: 'Telegram Bot “SmartHelper”',
        description_ru: 'Бот с интеграцией внешних API, поддержкой команд и хранением данных в базе. Разработан для автоматизации задач и общения с пользователями.',
        tags: ['react', 'node', 'mongo-db'],
        imgs: [image],
    },
    {
        id:'project_3',
        date: Date.UTC(2015, 0, 12),
        title_ru: 'Game Server “BattleCore”',
        description_ru: 'Серверная часть онлайн-игры с авторизацией игроков, системой комнат и обменом сообщениями в реальном времени через WebSockets.',
        tags: ['react', 'node', 'mongo-db'],
        imgs: [image],
    },
     {
        id:'project_4',
        date: Date.UTC(2015, 0, 12),
        title_ru: 'Landing Page для блогера',
        description_ru: 'Многостраничный сайт с адаптивным дизайном, анимациями и интеграцией с соцсетями. Сделан на React + MUI.',
        tags: ['react', 'node', 'mongo-db'],
        imgs: [image],
    },
      {
        id:'project_5',
        date: Date.UTC(2015, 0, 12),
        title_ru: 'Optimization for Online Shop',
        description_ru: 'Оптимизация скорости загрузки и SEO существующего интернет-магазина. Настроил кэширование, lazy-loading и серверный рендеринг, что повысило производительность и позиции в поисковиках.',
        tags: ['react', 'node', 'mongo-db'],
        imgs: [image],
    },
    {
        id:'project_6',
        date: Date.UTC(2015, 0, 12),
        title_ru: 'Back-end API “ShopCore”',
        description_ru: 'RESTful API для e-commerce проекта: регистрация, корзина, заказы, фильтры. Использовал Express, MongoDB, JWT, middleware для валидации и логирования.',
        tags: ['react', 'node', 'mongo-db'],
        imgs: [image],
    }
]

export { PORTFOLIOS }