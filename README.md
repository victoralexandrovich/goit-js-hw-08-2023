# GoIT JS Homework 8 - Project Infrastructure and Web Storage (JS)
JavaScript homework assignment for the GoIT course (Module 8). Topic: project infrastructure with Node.js, npm and Webpack (via parcel-project-template), JSON, and browser Web Storage.
**What was done:**
- Set up the project using `parcel-project-template` and replaced the `src` folder with the task files
- Added `SimpleLightbox` as an npm dependency, refactored the gallery script to use `import`/`export` syntax, including a separate CSS import for the library
- Integrated the Vimeo Player library as an npm package and initialized it for a pre-existing `<iframe>` player
- Tracked the `timeupdate` event to save the current playback time to `localStorage` under the `videoplayer-current-time` key
- Restored video playback from the saved position on page reload using the `setCurrentTime()` method
- Used `lodash.throttle` to limit playback-time storage updates to once per second
- Built a feedback form that saves `email` and `message` field values to `localStorage` (`feedback-form-state` key) on the `input` event
- Restored form field values from `localStorage` on page load, and cleared both the storage and the form on `submit`, logging the final field values to the console
- Throttled the feedback form storage updates to once per 500ms using `lodash.throttle`
- Code formatted with Prettier
- Repository updated on GitHub following Git best practices, live page deployed via GitHub Pages

============================================================================

# Домашнє завдання 8 GoIT JS — Інфраструктура проєктів. Веб-сховище (JS)
Практичне завдання з курсу JavaScript від GoIT (Модуль 8). Тема: інфраструктура проєкту на Node.js, npm та Webpack (через parcel-project-template), формат JSON та робота з веб-сховищем браузера.
**Що зроблено:**
- Налаштовано проєкт на основі `parcel-project-template` з повною заміною папки `src` на файли завдання
- Додано бібліотеку `SimpleLightbox` як залежність через npm, виконано рефакторинг скрипту галереї з використанням синтаксису `import`/`export`, включно з окремим імпортом стилів бібліотеки
- Інтегровано бібліотеку Vimeo Player як npm-пакет та ініціалізовано плеєр для вже існуючого `<iframe>`
- Реалізовано відстеження події `timeupdate` для збереження поточного часу відтворення у `localStorage` за ключем `videoplayer-current-time`
- Реалізовано відновлення відтворення відео з збереженої позиції під час перезавантаження сторінки за допомогою методу `setCurrentTime()`
- Використано `lodash.throttle` для обмеження оновлень часу відтворення у сховищі до одного разу на секунду
- Створено форму зворотного зв'язку, яка зберігає значення полів `email` та `message` у `localStorage` (ключ `feedback-form-state`) під час події `input`
- Реалізовано відновлення значень полів форми зі сховища при завантаженні сторінки, а також очищення сховища й полів форми під час `submit` з виведенням фінальних значень у консоль
- Обмежено оновлення сховища форми до одного разу на 500 мс за допомогою `lodash.throttle`
- Код відформатовано за допомогою Prettier
- Зміни зафіксовані в репозиторії GitHub згідно з правилами використання Git, робоча сторінка розгорнута через GitHub Pages
