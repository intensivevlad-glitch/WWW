# 🩸 Life in a Drop / Життя в краплині

**Білінгвальний анімований сайт благодійного фонду для підтримки людей з раком крові**

![Status](https://img.shields.io/badge/status-ready-success)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![i18n](https://img.shields.io/badge/i18n-UA%2FEN-green)

---

## 🎯 Про проєкт

Повнофункціональний сайт благодійної організації з:
- 🇺🇦 **Білінгвальною підтримкою** (Українська/English)
- ✨ **Framer Motion анімаціями** (100+ ефектів)
- 🎨 **Сучасним дизайном** (білий + червоний)
- 📱 **Повною адаптивністю** (mobile-first)
- 🚀 **Готовністю до деплою** (Vercel)

---

## 🛠️ Технології

### Frontend:
- **React 18** + TypeScript
- **Vite 7** - швидка збірка
- **TailwindCSS 3** - utility-first CSS
- **Framer Motion 11** - анімації
- **react-i18next 15** - білінгвальність
- **React Router 6** - маршрутизація
- **Lucide React** - іконки

### Backend:
- **Express 4** - REST API
- **CORS** - cross-origin requests
- **Morgan** - HTTP logger
- **JSON файли** - простий storage

---

## 🚀 Швидкий старт

### 1. Встановлення:
```bash
npm install
```

### 2. Запуск:
```bash
npm run dev
```

Сайт буде доступний:
- **Frontend:** http://localhost:5174 (або :5173)
- **Backend:** http://localhost:5000

---

## 📄 Структура сайту

### 🏠 Головна сторінка (Home):

1. **Hero Section** 🎬
   - Відео-фон (медична тематика)
   - Анімовані лічильники (350 пацієнтів, 1200 донорів, 540 курсів)
   - Карусель з мотиваційними цитатами
   - CTA кнопки

2. **Про нас** 🕊️
   - Історія фонду (з 2017 року)
   - Місія та цінності
   - Фото команди
   - Статистика: 10+ років, 1200+ пацієнтів, 15 клінік
   - 3 цінності: Прозорість, Співчуття, Надія

3. **Як ми працюємо** 🩸
   - Timeline дизайн з вертикальною лінією
   - 5 кроків процесу (зигзаг layout)
   - Детальні описи кожного етапу
   - Іконки: Пожертви → Ліки → Доставка → Підтримка → Звітність

4. **Наші проєкти** 🖼️
   - 4 реалізовані ініціативи
   - Анімовані картки з прогресом
   - Реальні фото з Unsplash
   - Статистика успіхів

5. **Підтримати нас** 💖
   - 3 способи донату (Картка, Monobank, PayPal)
   - Градієнтні кнопки з hover ефектами
   - Статистика зібраних коштів

6. **Контакти** 📬
   - Контактна форма (ім'я, email, повідомлення)
   - Адреса, телефон, email
   - Соціальні мережі (Facebook, Instagram, Telegram)
   - Декоративна карта Києва

7. **Footer** 🦋
   - Градієнтний червоний фон
   - Швидкі посилання
   - Соціальні мережі
   - Копірайт

---

## 🎨 Дизайн-система

### Кольори:
```css
--white: #FFFFFF      /* Основний фон */
--brand: #E63946      /* Червоний акцент */
--navy: #1D3557       /* Текст */
--gray: #F8F9FA       /* Світлий фон */
```

### Шрифт:
- **Montserrat** (Google Fonts)
- Ваги: 400, 500, 600, 700, 800

### Анімації:
- Duration: 0.3-0.8s
- Easing: cubic-bezier
- Spring: bounce 0.5
- Viewport: once: true

---

## 🌍 Білінгвальність

### Переклади:
- **Українська:** `frontend/src/locales/ua.json`
- **Англійська:** `frontend/src/locales/en.json`

### Використання:
```javascript
const { t } = useTranslation()
<h1>{t('hero.title')}</h1>
```

### Перемикач:
- Кнопки UA/EN у навбарі
- LocalStorage збереження вибору
- Автоматична ініціалізація при завантаженні

---

## 📦 Команди

### Розробка:
```bash
npm run dev          # Запустити обидва сервери
npm run build        # Зібрати frontend
npm run start        # Запустити backend (production)
npm install          # Встановити всі залежності
```

### Деплой:
```bash
npm run deploy       # Commit + push (→ Vercel auto-deploy)
```

### Індивідуальні:
```bash
cd frontend && npm run dev       # Тільки frontend
cd backend && npm run dev        # Тільки backend
```

---

## 🌐 Деплой на Vercel

### Автоматичний деплой:

1. **Push на GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Налаштування Vercel:**
   - Зайдіть на https://vercel.com
   - Import GitHub repository
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `frontend/dist`
   - Root Directory: (залишити порожнім)

3. **Deploy!** 🎉

### Наступні оновлення:
```bash
npm run deploy
```

Vercel автоматично задеплоїть зміни.

---

## 📁 Структура проєкту

```
D:\Projects\Nowy folder\
├── frontend/
│   ├── api/                    # Vercel serverless functions
│   │   ├── projects.js
│   │   └── contact.js
│   ├── public/
│   │   └── favicon.svg         # Червоне серце
│   ├── src/
│   │   ├── components/         # Переспроможні компоненти
│   │   │   ├── AboutUs.jsx
│   │   │   ├── HowWeWork.jsx
│   │   │   ├── ProjectsGallery.jsx
│   │   │   ├── SupportUs.jsx
│   │   │   ├── Contacts.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Carousel.jsx
│   │   │   ├── Container.tsx
│   │   │   ├── SEO.tsx
│   │   │   └── index.ts
│   │   ├── locales/            # Переклади
│   │   │   ├── ua.json         # 🇺🇦 Українська
│   │   │   └── en.json         # 🇬🇧 Англійська
│   │   ├── pages/              # Сторінки
│   │   │   ├── Home.tsx        # Головна (всі секції)
│   │   │   ├── About.tsx
│   │   │   ├── How.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Donate.tsx
│   │   │   └── Contact.tsx
│   │   ├── App.tsx             # Роутинг + навбар
│   │   ├── i18n.ts             # i18next конфігурація
│   │   └── main.tsx            # Entry point
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tailwind.css
│   ├── vite.config.ts
│   └── tsconfig.json
├── backend/
│   ├── server.js               # Express API
│   └── package.json
├── data/
│   ├── projects.json           # Дані проєктів
│   └── messages.json           # Контактні повідомлення
├── package.json                # Root scripts
├── README.md                   # Цей файл
└── [Документація].md           # Додаткові інструкції
```

---

## 🔌 API Endpoints

### GET /api/projects
Повертає список проєктів з JSON файлу.

**Response:**
```json
[
  {
    "id": "drop-of-life",
    "title": "Краплина життя / Drop of Life",
    "description": "Blood transfusions for leukemia patients.",
    "image": "https://...",
    "progress": 85
  }
]
```

### POST /api/contact
Зберігає контактне повідомлення.

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

**Response:**
```json
{ "success": true }
```

---

## 🐛 Troubleshooting

### Проблема: Vite не запускається

**Рішення:**
```bash
cd frontend
npm install vite @vitejs/plugin-react --save-dev
npm run dev
```

### Проблема: Backend не стартує

**Рішення:**
```bash
cd backend
npm install nodemon --save-dev
npm run dev
```

### Проблема: Порт зайнятий

**Рішення:**
```bash
# Vite автоматично знайде вільний порт (5174, 5175...)
# Або вручну:
cd frontend
npx vite --port 3000
```

### Очистити кеш:
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

---

## 📚 Корисні посилання

- **Vite:** https://vitejs.dev
- **React:** https://react.dev
- **TailwindCSS:** https://tailwindcss.com
- **Framer Motion:** https://framer.com/motion
- **react-i18next:** https://react.i18next.com
- **Vercel:** https://vercel.com/docs

---

## 🎁 Наступні кроки

### Покращення:
1. Підключити справжню платіжну систему (Stripe/PayPal API)
2. Додати Google Maps iframe замість декоративної карти
3. Email сповіщення (nodemailer)
4. База даних замість JSON (MongoDB/PostgreSQL)
5. Admin панель для керування проєктами
6. Google Analytics
7. SEO оптимізація (meta tags на кожну сторінку)

### Контент:
1. Додати реальні фото команди
2. Реальні історії пацієнтів
3. Відео-testimonials
4. Блог секція
5. FAQ розділ

---

## 📞 Контакти фонду

**Адреса:** вул. Свободи 12, Київ, Україна  
**Email:** info@lifeindrop.org  
**Телефон:** +380 50 123 4567  

**Соціальні мережі:**
- Facebook: [facebook.com/lifeindrop](#)
- Instagram: [@lifeindrop](#)
- Telegram: [@lifeindrop](#)

---

## 📝 Ліцензія

© 2025 Life in a Drop Foundation. All rights reserved.

Створено з ❤️, щоб рятувати життя.

---

## ✨ Автор

Розроблено senior full-stack developer з використанням:
- React + TypeScript
- TailwindCSS
- Framer Motion
- react-i18next
- Express.js

---

**🩸 Разом ми боремося за життя! 🩸**

---

## 🎉 Quick Start

```bash
# Клонуйте репозиторій
git clone <your-repo>

# Встановіть залежності
npm install

# Запустіть dev сервери
npm run dev

# Відкрийте браузер
# http://localhost:5174
```

**Готово! Сайт працює! ✅**
#   W W W 
 
 #   W W W 
 
 #   W W W 
 
 