# Keepsake – Digital & Branding Agency

Адаптивний лендінг креативної агенції **Keepsake**, реалізований за допомогою шаблонізатора **Pug**, модульної архітектури **SCSS (БЕМ)**, **PostCSS (Autoprefixer)** та збирача **Vite** без використання клієнтського JavaScript.

- **Демо (GitHub Pages):** https://anasteiishaaaa.github.io/landing-keepsake-vite/

## Вимоги та запуск проєкту

- **Node.js** >= 20 LTS
- **npm** >= 10

```bash
npm install        # встановлення залежностей
npm run dev        # запуск локального сервера розробки
npm run build      # продакшн-збірка проєкту у директорію dist/
npm run preview    # локальний перегляд зібраної версії з dist/
npm run images     # генерація оптимізованих AVIF, WebP та JPEG (180w, 358w)
npm run format     # форматування Pug, SCSS, JS та Markdown через Prettier
npm run lint       # перевірка стилів (Stylelint) та форматування (Prettier)
```

## Структура проєкту

```text
landing-keepsake-vite/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions для автодеплою на GitHub Pages
├── .husky/
│   └── pre-commit              # pre-commit хук (lint-staged)
├── scripts/
│   └── images.js               # утиліта оптимізації зображень на базі sharp
├── src/
│   ├── assets/
│   │   └── images/             # оптимізовані зображення (AVIF, WebP, JPG у 180w та 358w)
│   ├── components/
│   │   ├── sections/           # секції лендінгу (hero, works, cta, about, clients, journal)
│   │   ├── footer.pug          # футер із формою підписки та соцмережами
│   │   └── header.pug          # шапка сайту та адаптивна навігація
│   ├── data/                   # структуровані дані секцій (nav, works, about, clients, journal, footer)
│   ├── includes/
│   │   └── svg-sprite.pug      # інлайновий SVG-спрайт іконок
│   ├── layouts/
│   │   └── main.pug            # базовий HTML-макет сторінки
│   ├── mixins/                 # перевикористовувані Pug-міксини (+btn, +icon, +picture, +section-head, +work-card)
│   ├── pages/
│   │   └── index.pug           # головна сторінка проєкту
│   └── styles/
│       ├── abstracts/          # змінні ($colors, $fonts, $breakpoints), функції (rem) та міксини (mq)
│       ├── base/               # скидання стилів, CSS custom properties (:root) та типографіка
│       ├── components/         # БЕМ-стилі компонентів (btn, hero, works, cta, about, clients, journal, to-top)
│       ├── layout/             # сітка та основні блоки макета (container, header, footer)
│       └── main.scss           # головна точка входу стилів (@use)
├── .browserslistrc             # цільові браузери для Autoprefixer
├── .prettierrc                 # конфігурація Prettier та @prettier/plugin-pug
├── .stylelintrc.json           # правила Stylelint (БЕМ, вкладеність <= 3, без ID та !important)
├── package.json                # залежності, npm-скрипти, PostCSS та lint-staged
├── vite.config.js              # конфігурація Vite та Vituum
└── README.md                   # документація проєкту
```

## Цільові браузери (Browserslist)

- `last 2 Chrome versions`
- `last 2 Firefox versions`
- `last 2 Edge versions`
- `last 2 Safari versions`
- `last 2 iOS versions`

## Оптимізація ресурсів

| Ресурс                       | До оптимізації                | Після оптимізації                       | Коефіцієнт стиснення        |
| :--------------------------- | :---------------------------- | :-------------------------------------- | :-------------------------- |
| Зображення портфоліо (9 шт.) | 195.9 KB (вихідні JPEG)       | AVIF (180w + 358w): **25.8 KB**         | у 7.6 раза менше            |
| Зображення портфоліо (9 шт.) | 195.9 KB (вихідні JPEG)       | WebP (180w + 358w): **30.7 KB**         | у 6.4 раза менше            |
| Зображення портфоліо (9 шт.) | 195.9 KB (вихідні JPEG)       | MozJPEG (180w + 358w): **56.1 KB**      | у 3.5 раза менше            |
| Стилі (CSS)                  | Модульний SCSS із коментарями | Мініфікований бандл Vite + Autoprefixer | `16.55 KB` (`3.75 KB` gzip) |
