/* FinMedia — Shared Components */

// ── Articles Data ─────────────────────────────────────────
const ALL_ARTICLES = [
  {
    id: 1,
    title: 'Почему инвестиции в ИИ — это новая нефть Казахстана к 2030 году',
    category: 'Инвестиции',
    thumb: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&fit=crop',
    excerpt: 'Пока весь мир гонится за чипами и моделями, Казахстан стоит на пороге уникального окна возможностей. Разбираем, почему именно сейчас — лучшее время для входа, и какие секторы дадут максимальный рост.',
    author: 'Арман Сейткали',
    school: 'Лицей «Bilim Innovation»',
    date: '6 апр 2026',
    likes: 2418,
    body: `
      <p>Когда мы говорим о «нефти» в современном контексте, мы имеем в виду не просто природный ресурс, а то, что становится основой экономической силы нации. В XX веке такой силой были углеводороды. В XXI — данные и искусственный интеллект. И Казахстан, имея уникальный набор преимуществ, стоит прямо перед этой волной.</p>
      <blockquote>«Страна, которая контролирует данные и алгоритмы, будет контролировать экономику следующих 50 лет» — и Казахстан может занять место за этим столом.</blockquote>
      <h2>Три кита конкурентного преимущества</h2>
      <p>Первое — дешёвая электроэнергия. Казахстан занимает одно из первых мест в мире по стоимости электричества для промышленных потребителей. Это критично: обучение одной GPT-подобной модели потребляет электричество как небольшой город за несколько дней.</p>
      <p>Второе — молодость населения. Средний возраст казахстанца — 31 год. Это огромный потенциал для переквалификации в новые профессии.</p>
      <p>Третье — стратегическое положение. Казахстан находится между двумя крупнейшими технологическими державами — Китаем и Россией, и при этом интегрирован в западные финансовые системы.</p>
      <h2>Куда смотреть инвестору уже сейчас?</h2>
      <p>Аналитики выделяют три перспективных направления на горизонте 2026–2030 годов. Первое — AgriTech с использованием ИИ. Второе — ИИ в добывающей промышленности. Третье — финтех. AIFC создаёт уникальную регуляторную среду.</p>
    `
  },
  {
    id: 2,
    title: 'Как казахстанский стартап вышел на рынок ОАЭ без единого доллара венчурных денег',
    category: 'Бизнес',
    thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80&fit=crop',
    author: 'Дана Нурланова',
    school: 'НИШ Алматы',
    date: '5 апр 2026',
    likes: 1205,
    body: `
      <p>Считается, что для выхода на международный рынок стартапу необходимы миллионы долларов инвестиций. Однако история алматинского стартапа, создавшего B2B-платформу для автоматизации логистики, ломает этот стереотип.</p>
      <h2>От локального к глобальному</h2>
      <p>Изначально команда сфокусировалась на местном рынке грузоперевозок, достигнув окупаемости всего за 8 месяцев. Секрет заключался в жесткой оптимизации расходов и прямом B2B-маркетинге. Вместо покупки рекламы фаундеры лично обошли 50 крупнейших логистических компаний Алматы.</p>
      <blockquote>«Мы продавали не продукт, мы продавали решение боли, которая стоила нашим клиентам миллионы тенге в месяц», — отмечает сооснователь.</blockquote>
      <p>Когда продукт был отполирован в Казахстане, выход в Дубай стал вопросом одной удачной онлайн-демонстрации местному крупному девелоперу. Использование сарафанного радио и исключительный сервис заменили венчурные миллионы.</p>
    `
  },
  { id: 4,
    title: 'EdTech или HealthTech: куда казахстанские школьники несут свои бизнес-идеи в 2026-м',
    category: 'Стартапы',
    thumb: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=300&q=80&fit=crop',
    author: 'Айгерим Касымова',
    school: 'Haileybury Almaty',
    date: '3 апр 2026',
    likes: 843,
    body: `
      <p>Индустрия школьных стартапов в Казахстане переживает настоящий бум. Если раньше вершиной творчества было создание очередного маркетплейса чехлов для телефонов, то сегодня школьники целятся в серьезные индустрии.</p>
      <p>На недавнем хакатоне в Astana Hub более 60% проектов от участников младше 18 лет относились к двум сферам: EdTech (образование) и HealthTech (здоровье).</p>
      <h2>EdTech: Персонализация обучения</h2>
      <p>Школьники лучше других понимают проблемы современного образования. Появляются проекты с использованием ИИ-репетиторов, которые адаптируются под психотип ученика и помогают готовиться к ЕНТ и SAT без стресса.</p>
      <h2>HealthTech: Ментальное здоровье</h2>
      <p>Удивительный тренд 2026 года — создание трекеров ментального здоровья для подростков. Анонимные чат-боты, алгоритмы распознавания выгорания и геймифицированные приложения для медитации показывают невероятный рост интереса со стороны инвесторов.</p>
    `
  },
  {
    id: 5,
    title: 'Зелёная энергетика в Казахстане: реальность или красивые слайды для инвесторов',
    category: 'Энергетика',
    thumb: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&q=80&fit=crop',
    author: 'Алишер Джаксыбеков',
    school: 'БИЛ Шымкент',
    date: '2 апр 2026',
    likes: 761,
    body: `
      <p>Казахстан поставил амбициозную цель по достижению углеродной нейтральности к 2060 году. Но насколько эти планы подкреплены реальными делами в 2026-м?</p>
      <p>С одной стороны, на юге страны строятся гигантские солнечные и ветряные парки. Международные корпорации охотно инвестируют в зеленую генерацию благодаря государственным гарантиям закупа электроэнергии.</p>
      <h2>Проблема инфраструктуры</h2>
      <p>Главная проблема кроется не в генерации, а в распределении. Энергосети Казахстана были спроектированы в советское время и не рассчитаны на нестабильную подачу от ветряков и солнечных панелей. Без создания крупных накопителей (industrial batteries) вся эта зеленая энергия часто просто теряется.</p>
      <p>Вывод: красивые слайды имеют под собой почву, но без триллионных инвестиций в модернизацию самих сетей, зеленая революция останется лишь наполовину реализованной.</p>
    `
  },
  {
    id: 6,
    title: 'Почему Gen Z не доверяет рекламе в Instagram и что с этим делают умные бренды',
    category: 'Маркетинг',
    thumb: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&q=80&fit=crop',
    author: 'Мадина Серикбаева',
    school: 'Kolsai School',
    date: '1 апр 2026',
    likes: 634,
    body: `
      <p>Эпоха вылизанных рекламных креативов подошла к концу. Поколение Z (и уже подрастающая Альфа) обладает врожденным "баннерным фильтром". Глянцевое фото продукта в ленте пролистывается за 0.1 секунды.</p>
      <h2>Искренность как главная валюта</h2>
      <p>Современный маркетинг работает только через искренность и сторителлинг. Умные казахстанские бренды перестали покупать посты у инфлюенсеров с миллионной аудиторией. Вместо этого бюджеты перетекают к микро-блогерам (5-10 тыс. подписчиков), у которых высочайший уровень доверия аудитории.</p>
      <h2>UGC (User Generated Content)</h2>
      <p>Бренды теперь не снимают рекламу сами. Они провоцируют пользователей снимать обзоры. Tiktok-форматы "распаковок" и честных отзывов "без купюр" продают в десятки раз лучше, чем профессиональный ролик за миллион тенге.</p>
    `
  },
  {
    id: 7,
    title: 'Покупать квартиру в Алматы в 2026-м — мудрость или ловушка для молодых?',
    category: 'Недвижимость',
    thumb: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=300&q=80&fit=crop',
    author: 'Руслан Темиров',
    school: 'NIS Павлодар',
    date: '31 мар 2026',
    likes: 590,
    body: `
      <p>Цены на квадратные метры в южной столице бьют исторические рекорды. Ипотечные ставки остаются высокими, а льготные программы часто имеют невыполнимые условия для студентов и молодых специалистов.</p>
      <h2>Стоит ли ввязываться в ипотеку?</h2>
      <p>С точки зрения финансов, покупка "первички" в ипотеку на 20 лет при текущих ставках означает переплату почти в два раза. Финансовые консультанты все чаще советуют молодым людям стратегию "арендуй и инвестируй разницу".</p>
      <h2>Сдвиг парадигмы</h2>
      <p>Для поколения наших родителей собственная квартира была символом успеха и безопасности. Для нас — это часто якорь, который мешает переехать ради карьерных возможностей в Астану, Дубай или Лондон. Рынок аренды в 2026 году становится цивилизованным, появляются качественные коливинги и доходные дома, что делает отказ от покупки вполне разумным шагом.</p>
    `
  }
];

// ── Currency Data ─────────────────────────────────────────
const CURRENCY_DATA = [
  { pair: 'USD/KZT', rate: 448.50, change: +1.20, pct: +0.27 },
  { pair: 'EUR/KZT', rate: 485.20, change: -0.80, pct: -0.16 },
  { pair: 'RUB/KZT', rate: 4.87,   change: +0.03, pct: +0.62 }
];

function renderTicker() {
  const el = document.getElementById('ticker-inner');
  if (!el) return;
  el.innerHTML = CURRENCY_DATA.map((d, i) => {
    const up = d.change >= 0;
    const arr = up ? '▲' : '▼';
    const cls = up ? 'up' : 'down';
    return `<span class="ticker-item"> <span class="label">${d.pair}</span> <span class="val">${formatRate(d.pair, d.rate)}</span> <span class="${cls}">${arr} ${Math.abs(d.pct).toFixed(2)}%</span> </span> ${i < CURRENCY_DATA.length - 1 ? '<span class="ticker-separator">|</span>' : ''}`;
  }).join('');
  // Duplicate for mobile marquee
  el.innerHTML += el.innerHTML;
}

function formatRate(pair, rate) {
  if (pair.startsWith('BTC')) return rate.toLocaleString('en-US', {minimumFractionDigits: 0});
  if (rate < 10) return rate.toFixed(2);
  return rate.toLocaleString('ru-RU', {minimumFractionDigits: 2});
}

function renderSidebarCurrency() {
  const el = document.getElementById('currency-table-body');
  if (!el) return;
  el.innerHTML = CURRENCY_DATA.map(d => {
    const up = d.change >= 0;
    const arr = up ? '▲' : '▼';
    const cls = up ? 'up-color' : 'dn-color';
    return `<tr> <td class="pair">${d.pair}</td> <td class="rate">${formatRate(d.pair, d.rate)}</td> <td class="change ${cls}">${arr} ${Math.abs(d.pct).toFixed(2)}%</td> </tr>`;
  }).join('');
}

// ── Drawer ─────────────────────────────────────────────────
function initDrawer() {
  const burger  = document.getElementById('burger-btn');
  const overlay = document.getElementById('drawer-overlay');
  const drawer  = document.getElementById('drawer');
  const close   = document.getElementById('drawer-close');

  if (burger && overlay && drawer && close) {
    burger.addEventListener('click', () => {
      overlay.classList.add('open');
      drawer.classList.add('open');
    });
    overlay.addEventListener('click', closeDrawer);
    close.addEventListener('click', closeDrawer);
  }

  function closeDrawer() {
    if (overlay && drawer) {
      overlay.classList.remove('open');
      drawer.classList.remove('open');
    }
  }

  // Drawer category switching is now handled by actual navigation to category.html
  // We just highlight the correct one based on URL
  const urlParams = new URLSearchParams(window.location.search);
  let currentCat = urlParams.get('cat');
  if (!currentCat) currentCat = 'Все';
  
  // Highlight active category across all cat-links (header and drawer)
  document.querySelectorAll('.cat-link').forEach(l => {
    const linkText = l.textContent.trim();
    if (linkText.toLowerCase() === currentCat.toLowerCase()) {
      l.classList.add('active');
      l.style.color = 'var(--red)';
      l.style.fontWeight = '700';
    } else {
      l.classList.remove('active');
      l.style.color = '';
      l.style.fontWeight = '';
    }
  });
}

// ── Sticky Header ──────────────────────────────────────────
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── Toast ──────────────────────────────────────────────────
function showToast(msg, duration = 3000) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderTicker();
  renderSidebarCurrency();
  initDrawer();
  initStickyHeader();
});


