# Сайт МБОУ «Гимназия №4»

Демонстрационный сайт образовательной организации, разработанный в рамках учебной практики.

## Стек

- Astro
- Decap CMS
- Netlify
- Umami Cloud

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт откроется по адресу:

```text
http://localhost:4321/
```

## Локальная админка Decap CMS

Для локального редактирования контента нужно открыть два терминала.

Терминал 1:

```bash
npm run dev
```

Терминал 2:

```bash
npm run cms
```

Админка:

```text
http://localhost:4321/admin/index.html#/
```

## Сборка

```bash
npm run build
npm run preview
```

## Размещение на Netlify

Netlify использует файл `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

После подключения GitHub-репозитория каждый push в ветку `main` запускает новую сборку сайта.

## Decap CMS на опубликованном сайте

В продакшене `npm run cms` не запускается. Decap CMS открывается как статическая страница `/admin/`, авторизуется через GitHub и сохраняет изменения коммитами в репозиторий.

Админка после деплоя:

```text
https://адрес-сайта.netlify.app/admin/index.html#/
```

## Аналитика Umami

Для подключения Umami Cloud нужно добавить в Netlify переменные окружения:

```text
PUBLIC_UMAMI_WEBSITE_ID=<website-id из Umami>
PUBLIC_UMAMI_DOMAINS=<домен Netlify без https://>
```

После этого выполнить новый deploy.

## Структура проекта

```text
public/
  admin/          # Decap CMS
  uploads/        # изображения и документы
src/
  components/     # компоненты сайта
  content/        # markdown-контент
  layouts/        # базовый layout
  pages/          # страницы Astro
  styles/         # глобальные стили
```
