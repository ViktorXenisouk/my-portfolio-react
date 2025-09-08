import { IReviewData } from "./types";

const REVIEWS: IReviewData[] =
[
  {
    date: Date.UTC(2023, 5, 12),
    name_ru: 'Предприниматель',
    name_en: 'Entrepreneur',
    rate: 10,
    text_ru: 'Отличная работа, сайт работает быстро и без багов. Очень доволен сотрудничеством.',
    text_en: 'Excellent work, the website runs fast and without bugs. Very satisfied with the collaboration.'
  },
  {
    date: Date.UTC(2023, 7, 8),
    name_ru: 'Блогер',
    name_en: 'Blogger',
    rate: 8,
    text_ru: 'Сделал лендинг для блога, все получилось красиво и современно. Работает быстро и аккуратно.',
    text_en: 'Created a landing page for my blog, everything turned out beautiful and modern. Works quickly and smoothly.'
  },
  {
    date: Date.UTC(2023, 8, 15),
    name_ru: 'Разработчик игр',
    name_en: 'Game Developer',
    rate: 10,
    text_ru: 'Настроил сервер для моей игры, всё стабильно, даже под нагрузкой. Было несколько сложных моментов, но он нашёл решения. Теперь сервер выдерживает даже пиковые нагрузки вечером, когда онлайн больше всего.',
    text_en: 'Set up a server for my game, everything is stable even under load. There were some tricky moments, but he found solutions. Now the server handles peak loads in the evening perfectly.'
  },
  {
    date: Date.UTC(2023, 4, 20),
    name_ru: 'Фрилансер',
    name_en: 'Freelancer',
    rate: 10,
    text_ru: 'Приятно было сотрудничать, всегда на связи и внимателен к правкам. Умеет слушать заказчика, что редкость. Сделал проект именно таким, каким я хотел его видеть.',
    text_en: 'It was a pleasure to work together, always responsive and attentive to changes. Knows how to listen to the client, which is rare. Made the project exactly as I wanted it.'
  },
  {
    date: Date.UTC(2023, 6, 5),
    name_ru: 'Владелец интернет-магазина',
    name_en: 'Online Store Owner',
    rate: 8,
    text_ru: 'Заказывала оптимизацию интернет-магазина. Страницы стали загружаться значительно быстрее, а показатели в Google PageSpeed выросли. Это сразу положительно сказалось на продажах.',
    text_en: 'Ordered optimization for my online store. Pages now load much faster, and Google PageSpeed scores improved. This positively affected sales immediately.'
  },
  {
    date: Date.UTC(2023, 3, 12),
    name_ru: 'Менеджер проекта',
    name_en: 'Project Manager',
    rate: 8,
    text_ru: 'Помог с backend API. Всё чётко документировано, легко интегрировать. Особенно понравилось, что учёл требования к безопасности и сделал авторизацию через JWT.',
    text_en: 'Assisted with the backend API. Everything was clearly documented and easy to integrate. Especially appreciated that security requirements were considered and JWT authentication was implemented.'
  },
  {
    date: Date.UTC(2023, 7, 2),
    name_ru: 'Владелец бизнеса',
    name_en: 'Business Owner',
    rate: 10,
    text_ru: 'Сделал телеграм-бота, который реально упрощает жизнь. Работает без сбоев, интегрирован с базой данных, а интерфейс максимально удобный. Очень довольна, рекомендую!',
    text_en: 'Created a Telegram bot that really simplifies life. Works flawlessly, integrated with the database, and the interface is very user-friendly. Highly recommend!'
  },
  {
    date: Date.UTC(2023, 8, 9),
    name_ru: 'Студент',
    name_en: 'Student',
    rate: 7,
    text_ru: 'Понравилось внимание к деталям и быстрый отклик на вопросы. Иногда даже сам предлагал улучшения, которые в итоге сделали проект лучше, чем я ожидал.',
    text_en: 'I appreciated the attention to detail and quick response to questions. Sometimes he even suggested improvements that ultimately made the project better than I expected.'
  },
  {
    date: Date.UTC(2023, 4, 18),
    name_ru: 'Маркетолог',
    name_en: 'Marketer',
    rate: 7,
    text_ru: 'Работала с ним по лендингу. Стильный дизайн, правильная структура, всё адаптивно. Даже на старых устройствах сайт работает плавно.',
    text_en: 'Worked with him on a landing page. Stylish design, proper structure, fully responsive. Even on older devices, the site runs smoothly.'
  },
  {
    date: Date.UTC(2023, 6, 25),
    name_ru: 'Владелец интернет-магазина',
    name_en: 'Online Store Owner',
    rate: 10,
    text_ru: 'Разработка онлайн-магазина прошла быстро, результат превзошёл ожидания. Получился проект, где есть удобная корзина, фильтры и система авторизации.',
    text_en: 'The online store development went quickly, and the result exceeded expectations. The project includes a convenient cart, filters, and an authorization system.'
  }
]


export { REVIEWS }