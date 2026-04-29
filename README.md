# User Dashboard Next

Современная панель управления пользователями, построенная на базе **Next.js 14** с использованием App Router.

## 🚀 Технологический стек

* **Framework:** [Next.js 14](https://nextjs.org) (React 18)
* **State Management:** [Zustand](https://github.com) — легкое и быстрое управление состоянием.
* **Styles:** [SASS (SCSS)](https://sass-lang.com) — модульные стили.
* **Icons:** [React Icons](https://github.io) — огромный выбор иконок.
* **Type Safety:** [TypeScript](https://typescriptlang.org) — строгая типизация.
* **Linting & Formatting:** ESLint + Prettier.

## 🛠 Скрипты для разработки

В корне проекта доступны следующие команды:

| Команда | Описание |
| :--- | :--- |
| `npm run dev` | Запуск сервера разработки на `localhost:3000`. |
| `npm run build` | Сборка проекта для продакшена. |
| `npm run start` | Запуск собранного приложения. |
| `npm run lint` | Проверка кода линтером. |
| `npm run type-check` | Проверка типов TypeScript. |
| `npm run format` | Форматирование кода через Prettier. |

## 📦 Установка и запуск

1. **Клонируй репозиторий:**
   ```bash
   git clone <url_вашего_репозитория>
   cd user-dashboard-next
   ```

2. **Установи зависимости:**
   ```bash
   npm install
   ```

3. **Запусти проект:**
   ```bash
   npm run dev
   ```

## 📂 Структура проекта

* `/app` — маршрутизация и страницы (App Router).
* `/components` — переиспользуемые UI компоненты.
* `/store` — конфигурация хранилищ Zustand.
* `/styles` — глобальные стили и миксины (Sass).