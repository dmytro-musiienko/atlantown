import { APP_TITLE } from "@/lib/app-config";

export function meta() {
  return [
    { title: APP_TITLE },
    { name: "description", content: "Атлантида — Minecraft сервер" },
  ];
}

const NAV = [
  { label: "Режими", href: "#modes" },
  { label: "Скрижалі", href: "#rules" },
  { label: "Новини", href: "#news" },
  { label: "Команда", href: "#modes" },
  { label: "Discord", href: "#modes" },
];

const MODES = [
  {
    n: "01",
    emoji: "💎",
    title: "Світ ЕДЕМ",
    text: "Основний світ виживання з економікою, земельними ділянками та спільнотою. Будуй, торгуй, виживай у класичному Minecraft з розширеними можливостями та регулярними оновленнями контенту.",
    tag: "Виживання",
  },
  {
    n: "02",
    emoji: "🛝",
    title: "Світ ПАРКУР",
    text: "Десятки паркур-карт різної складності — від новачкових до екстремальних. Встановлюй рекорди часу, змагайся з іншими гравцями та отримуй нагороди за проходження кожної карти.",
    tag: "Челендж",
  },
  {
    n: "03",
    emoji: "🎯",
    title: "Світи Івентів",
    text: "Тимчасові івенти, міні-ігри та командні змагання. Унікальні механіки, сезонні активності та ексклюзивні нагороди для учасників. Новий івент з'являється кожні кілька тижнів.",
    tag: "Івенти",
  },
  {
    n: "04",
    emoji: "🛸",
    title: "Світ МІРАЖ",
    text: "Креативний режим без обмежень. Вільне будівництво, тестування редстоун-механізмів, експерименти з архітектурою та дизайном. Ідеальний простір для творчих гравців та будівельників.",
    tag: "Креатив",
  },
  {
    n: "05",
    emoji: "🍁",
    title: "Світ СЕЗОНИ",
    text: "Сезонні проходження з унікальними правилами та обмеженнями. Кожен сезон — нові виклики, цілі та прогресія. Для тих, хто шукає свіжий досвід і готов починати з нуля разом зі спільнотою.",
    tag: "Сезонний",
  },
];

const RULES = [
  {
    n: "I",
    title: "Повага та спілкування",
    text: "На сервері Атлантида ми створюємо комфортне середовище для кожного гравця незалежно від віку та досвіду. Будь-які форми образ, дискримінації, погроз чи переслідування строго заборонені. Спілкування в чаті має бути конструктивним — критика дій інших гравців допустима, але без переходу на особистості. Спам, флуд, реклама сторонніх ресурсів та зловживання великими літерами розцінюються як порушення порядку. Модератори мають право видаляти повідомлення та обмежувати доступ до чату без попереджень, якщо повідомлення порушує атмосферу гри. Пам'ятайте, що за кожним ніком стоїть реальна людина — ставтеся до інших так, як хотіли б, щоб ставилися до вас.",
  },
  {
    n: "II",
    title: "Чесна гра та заборонені модифікації",
    text: "Використання читів, експлойтів, сторонніх клієнтів та модифікацій, що дають нечесну перевагу над іншими гравцями, строго заборонено. До заборонених відносяться: X-ray-модифікації, автокліки, макроси для бойових дій, радари, speed-hack, fly-hack та будь-які програми, що автоматизують ігровий процес. Допускаються лише клієнтські модифікації, що покращують продуктивність або доступність гри — Optifine, ресурс-паки, шейдери та мінімапи без функцій радара. Якщо ви виявили баг або експлойт у грі, негайно повідомте про це адміністрації через Discord або форму звернень. Використання помилок гри для власної вигоди призведе до перманентного бану без можливості апеляції.",
  },
  {
    n: "III",
    title: "Території, будівництво та гріфінг",
    text: "Кожен гравець має право на захист своїх будівель та територій. Гріфінг — навмисне знищення або псування чужих будівель, крадіжка речей із чужих контейнерів та самовільне будівництво на чужій території — суворо заборонені. Використовуйте систему клеймів для захисту своїх ділянок. Будівлі, розташовані за межами клеймів, не захищені від знищення мобами або природними явищами, але навмисне пошкодження чужих незаклеймених будівель все одно є порушенням. У світі ЕДЕМ діє правило сусідства — не будуйте впритул до чужих ділянок без згоди власника. У світі МІРАЖ діють окремі правила щодо спільних проєктів та колаборацій, які описані в відповідному розділі Discord.",
  },
  {
    n: "IV",
    title: "Економіка, торгівля та шахрайство",
    text: "Економіка серверу базується на чесній торгівлі між гравцями та вбудованих механізмах аукціону. Шахрайство в будь-якій формі — обман під час угод, продаж неіснуючих предметів, маніпуляція цінами через фіктивні угоди, використання дублів предметів чи багів економіки — призводить до конфіскації майна та бану. При здійсненні угод використовуйте офіційні механізми торгівлі серверу. У разі суперечок збережіть скріншоти або записи чату як доказ. Адміністрація розглядає скарги на шахрайство протягом 48 годин. Подарунки та безкоштовна передача предметів між гравцями не регламентуються, але адміністрація не несе відповідальності за добровільну передачу майна третім особам.",
  },
  {
    n: "V",
    title: "Відповідальність, покарання та апеляції",
    text: "За порушення скрижалей передбачені покарання: попередження, мут у чаті, тимчасовий бан або перманентний бан з конфіскацією майна. Тяжкість покарання визначається модератором залежно від характеру порушення та його повторюваності. Рішення модератора можна оскаржити через форму звернень на сайті або у відповідному каналі Discord протягом 7 днів з моменту покарання. Апеляції розглядаються старшими модераторами або адміністраторами. Повторні порушення після скасування покарання тягнуть за собою подовження строку бану. Адміністрація залишає за собою право змінювати та доповнювати скрижалі — про всі зміни оголошується завчасно у Discord та на сайті. Звернення до адміністрації з проханням розблокувати акаунт без обґрунтованої апеляції не розглядаються.",
  },
];

const NEWS_MAIN = {
  tag: "Оновлення",
  time: "Щойно",
  title: "Перезапуск режимів та нові локації",
  text: "Ми оновили ядра всіх режимів, переробили спавни та додили систему привату територій. Тепер регіони створюються швидше, а захист зони працює коректніше при великих навантаженнях. Зайдіть і перевірте новий вигляд Survival — спавн перебудовано з нуля.",
  img: "https://api.builder.io/api/v1/image/assets/TEMP/f9bf110cf82278eaeaf60ce40a2af8f67f3d2fec?width=1688",
};

const NEWS_SIDE = [
  {
    tag: "Івент",
    time: "Цього тижня",
    title: "Турнір з PvP на арені SkyWars",
    text: "Збираємо команди до чотирьох осіб. Переможці отримають унікальні косметичні набори та пріоритетний слот на наступний великий івент сезону.",
  },
  {
    tag: "Технічне",
    time: "Нещодавно",
    title: "Оновлення анти-чит та правил",
    text: "Встановлено оновлену систему виявлення модифікацій. Перегляньте правила гри доступні у розділі «Правила» — ознайомтеся перед поверненням на сервер.",
  },
];

const VOTES = [
  { title: "MCUA.top", text: "Український топ серверів Minecraft. Голосування щоденне, потрібна реєстрація на сайті моніторингу.", cta: "Голосувати на mcua.top →" },
  { title: "AllMC.in.ua", text: "Загальноукраїнський моніторинг серверів. Просте голосування без реєстрації — достатньо вказати нікнейм гравця.", cta: "Голосувати на allmc.in.ua →" },
  { title: "MineCore.com.ua", text: "Каталог серверів з розширеною статистикою онлайну. Голосування оновлюється кожні 24 години.", cta: "Голосувати на minecore.com.ua →" },
];

const TIERS = [
  { en: "Iron", title: "Залізо", card: "bg-white", dark: false, perks: ["Кольоровий нікнейм у чаті", "Доступ до /hat та /near", "2 додаткові регіони привату", "Пріоритетна черга при заході"] },
  { en: "Gold", title: "Золото", card: "bg-[#E2E2E2]", dark: false, perks: ["Усе зі статусу Залізо", "Доступ до /fly у спаві", "4 додаткові регіони привату", "Особистий префікс у чаті", "Доступ до /workbench та /renderchest"] },
  { en: "Emerald", title: "Смарагд", card: "bg-[#C8C8C8]", dark: false, perks: ["Усе зі статусу Золото", "Доступ до /fly в усіх світах", "8 додаткових регіонів привату", "Анімований префікс у чаті", "Доступ до /heal та /feed", "Щоденний кіт із ресурсами"] },
  { en: "Diamond", title: "Діамант", card: "bg-[#161616]", dark: true, perks: ["Усе зі статусу Смарагд", "Безлімітні регіони привату", "Доступ до /god та /vanish", "Кастомний префікс на замовлення", "10 точок телепорту /sethome", "Пріоритетний голос у опитуваннях", "Унікальний косметичний набір"] },
];

const STEPS = [
  { n: "Крок 01", title: "Отримай посилання", text: "Знайди своє унікальне реферальне посилання в особистому профілі на сервері. Воно прив'язане до твого нікнейму і не змінюється." },
  { n: "Крок 02", title: "Поділись із друзями", text: "Надішли посилання тим, хто грає в Minecraft і шукає стабільний сервер. Розкажи про режими, правила та атмосферу Атлантиди." },
  { n: "Крок 03", title: "Друзі приєднуються", text: "Коли запрошений гравець реєструється за твоїм посиланням, він автоматично закріплюється за твоїм акаунтом як реферал." },
  { n: "Крок 04", title: "Отримуй винагороди", text: "За кожного активного реферала ти отримуєш шалкер з ресурсами. Чим більше запрошених — тим багатша винагорода." },
];

const REWARDS = [
  { lvl: "Рівень I", title: "3 запрошених", text: "Базовий шалкер з стартовим набором ресурсів для комфортного початку гри.", items: ["32 алмази", "64 золотих злитки", "128 залізних злитків", "Стек будівельного каменю"], dark: false },
  { lvl: "Рівень II", title: "7 запрошених", text: "Розширений шалкер: рідкісні ресурси, незкрутові умивки та зачаровані предмети.", items: ["64 алмази", "16 незеритових умивок", "Зачарована алмазна броня", "Золоті яблука ×8"], dark: false },
  { lvl: "Рівень III", title: "15 запрошених", text: "Преміальний шалкер: повний набір незеритової зброї та броні, рідкісні артефакти.", items: ["Повний незеритовий сет", "Елітри та феєрверки", "Тотем безсмертя ×4", "Зачаровані золоті яблука ×4"], dark: true },
];

export default function HomeRoute() {
  return (
    <div className="min-h-screen bg-black font-[Arial,sans-serif]">
      <header className="absolute inset-x-0 top-0 z-20 flex h-[76px] items-center justify-between bg-black/55 px-5 sm:px-12">
        <a href="#" className="flex items-center gap-3 text-sm font-bold text-white">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1873d1dca17891ecb3c9b60549ffcee98cd6de1d?width=74"
            alt=""
            className="h-9 w-[37px] rounded border border-[#2AACD1]"
          />
          Атлантида
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm tracking-[-0.14px] text-[#BBB] transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#modes"
          className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
        >
          Приєднатися
        </a>
      </header>

      <section className="relative flex min-h-[900px] flex-col items-center justify-between overflow-hidden px-6 pb-9 pt-[305px] max-md:pt-[200px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8ce1614afa180fd254be9f89372a06be5b15bfd6?width=2880"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative flex max-w-[589px] flex-col items-center text-center">
          <h1 className="text-[clamp(48px,9vw,96px)] font-bold leading-[0.9] tracking-[-0.04em] text-white">
            АТЛАНТИДА
          </h1>
          <p className="mt-6 text-xl leading-7 tracking-[-0.2px] text-[#C9C9C9]">
            Світ, де глибини ховають можливості. П'ять режимів, одна спільнота — обери свій шлях під поверхнею.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-5">
            <span className="flex h-9 items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-5 text-sm tracking-[-0.14px] text-[#DDD]">
              <span className="size-2 rounded-full bg-[#2CD502]" />
              Сервер онлайн
            </span>
            <span className="flex h-9 items-center rounded-full border border-white/15 bg-white/10 px-5 text-sm tracking-[-0.14px] text-[#DDD]">
              Версія 1.20.x
            </span>
          </div>
          <a
            href="#modes"
            className="mt-10 flex h-[50px] w-[248px] items-center justify-center rounded-full bg-[#2AACD1] text-base font-bold text-white transition-opacity hover:opacity-90"
          >
            Приєднатися до гри
          </a>
        </div>
        <span className="relative mt-16 text-xs uppercase tracking-[2.4px] text-[#555]">
          Гортай вниз
        </span>
      </section>

      <section
        id="modes"
        className="flex flex-col items-center gap-[72px] bg-[radial-gradient(183%_101%_at_33%_27%,#F2F2F2_0%,#D8D8D8_100%)] px-5 py-[142px] max-md:py-20 lg:px-20"
      >
        <div className="max-w-[769px] text-center">
          <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-[0.9] tracking-[-0.04em] text-[#111]">
            Ігрові Режими
          </h2>
          <p className="mt-6 text-xl leading-7 tracking-[-0.2px] text-[#555]">
            П'ять світів — п'ять способів грати. Кожен режим має власні правила, механіки та спільноту. Оберіть свій шлях у глибинах Атлантиди.
          </p>
        </div>
        <div className="grid w-full max-w-[1280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {MODES.map((m) => (
            <article key={m.n} className="flex flex-col rounded-lg bg-white p-[22px] pt-7">
              <span className="text-xs tracking-[1.8px] text-[#999]">{m.n}</span>
              <div className="mt-[19px] size-6 rounded-md border border-[#BDBDBD] bg-[#E8E8E8]" />
              <span className="mt-[18px] text-[26px] leading-[31px]">{m.emoji}</span>
              <h3 className="mt-1.5 text-xl font-bold tracking-[-0.6px] text-[#111]">{m.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-[21px] text-[#555]">{m.text}</p>
              <span className="mt-6 self-start rounded-full bg-[#F0F0F0] px-3.5 py-[5px] text-xs tracking-[-0.12px] text-[#666]">
                {m.tag}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section
        id="rules"
        className="relative overflow-hidden px-5 py-20 sm:px-10 lg:py-[70px]"
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8ce1614afa180fd254be9f89372a06be5b15bfd6?width=2880"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative mx-auto max-w-[660px]">
          <div className="text-center">
            <h2 className="text-[clamp(36px,5vw,64px)] font-bold leading-none tracking-[-0.04em] text-white">
              Скрижалі Атлантиди
            </h2>
            <p className="mt-4 text-base leading-6 text-[#999]">
              Правила сервера, висічені в камені. Дотримання цих скрижалей — основа комфортної гри для всіх. Незнання правил не звільняє від відповідальності.
            </p>
          </div>
          <div className="mt-16 flex flex-col gap-[72px]">
            {RULES.map((r) => (
              <article key={r.n}>
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#2AACD1]">
                  Скрижаль {r.n}
                </span>
                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.02em] text-white">
                  {r.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.6] text-[#BBB]">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="news"
        className="flex flex-col items-center gap-[72px] bg-[radial-gradient(125%_91%_at_31%_31%,#F2F2F2_0%,#D8D8D8_100%)] px-5 py-[142px] max-md:py-20 lg:px-20"
      >
        <div className="max-w-[821px] text-center">
          <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-[0.9] tracking-[-0.04em] text-[#111]">
            Що відбувається<br />на сервері
          </h2>
          <p className="mt-6 text-xl leading-7 tracking-[-0.2px] text-[#555]">
            Оновлення, івенти та зміни — усе, що варто знати гравцю АТЛАНТИДИ. Тут все ок.
          </p>
        </div>
        <div className="grid w-full max-w-[1280px] grid-cols-1 gap-6 lg:grid-cols-[845fr_411fr]">
          <article className="overflow-hidden rounded-lg bg-white">
            <img src={NEWS_MAIN.img} alt="" className="aspect-[845/300] w-full object-cover" />
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#2AACD1] px-3.5 py-[5px] text-xs tracking-[-0.12px] text-white">
                  {NEWS_MAIN.tag}
                </span>
                <span className="text-xs uppercase tracking-[1.8px] text-[#999]">{NEWS_MAIN.time}</span>
              </div>
              <h3 className="mt-[18px] text-[30px] font-bold leading-[1.15] tracking-[-0.9px] text-[#111]">
                {NEWS_MAIN.title}
              </h3>
              <p className="mt-4 text-base leading-[24.8px] text-[#555]">{NEWS_MAIN.text}</p>
              <a href="#news" className="mt-6 inline-block text-sm font-bold tracking-[-0.14px] text-[#111]">
                Читати далі →
              </a>
            </div>
          </article>
          <div className="flex flex-col gap-6">
            {NEWS_SIDE.map((n) => (
              <article key={n.title} className="flex-1 rounded-lg bg-white p-7">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#2AACD1] px-3.5 py-[5px] text-xs tracking-[-0.12px] text-white">
                    {n.tag}
                  </span>
                  <span className="text-xs uppercase tracking-[1.8px] text-[#999]">{n.time}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold leading-[1.2] tracking-[-0.6px] text-[#111]">{n.title}</h3>
                <p className="mt-3 text-sm leading-[21px] text-[#555]">{n.text}</p>
                <a href="#news" className="mt-4 inline-block text-sm font-bold tracking-[-0.14px] text-[#111]">
                  Деталі →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 lg:py-[110px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8ce1614afa180fd254be9f89372a06be5b15bfd6?width=2880"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-16">
          <div className="max-w-[769px] text-center">
            <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-[0.9] tracking-[-0.04em] text-white">
              Підтримай сервер<br />голосом
            </h2>
            <p className="mt-6 text-xl leading-7 tracking-[-0.2px] text-[#A6A6A6]">
              Кожне голосування піднімає АТЛАНТИДУ у рейтингах і приводить нових гравців. Це безкоштовно і займає менше хвилини.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {VOTES.map((v) => (
              <article key={v.title} className="flex flex-col items-center rounded-lg bg-[#161616] px-6 py-10 text-center">
                <div className="size-6 rounded-lg border border-[#BDBDBD] bg-[#E8E8E8]" />
                <h3 className="mt-6 text-2xl font-bold tracking-[-0.72px] text-white">{v.title}</h3>
                <p className="mt-4 flex-1 text-[15px] leading-[23px] text-[#888]">{v.text}</p>
                <a href="#vote" className="mt-8 rounded-full bg-[#2AACD1] px-7 py-[11px] text-sm font-bold tracking-[-0.14px] text-white hover:opacity-90">
                  {v.cta}
                </a>
              </article>
            ))}
          </div>
          <div className="w-full max-w-[640px] rounded-lg bg-[#111]/90 px-8 py-6 text-center text-sm leading-6 text-[#666]">
            <b className="text-white">Чому це важливо:</b> чим вищий рейтинг — тим вище сервер у списках моніторингів, тим більше нових гравців бачать АТЛАНТИДУ. Голосуйте на всіх трьох майданчиках щодня — це найпростіший спосіб допомогти серверу без витрат.
          </div>
        </div>
      </section>

      <section
        id="donate"
        className="flex flex-col items-center gap-[73px] bg-[radial-gradient(125%_91%_at_31%_31%,#F2F2F2_0%,#D8D8D8_100%)] px-5 py-[142px] max-md:py-20 lg:px-20"
      >
        <div className="max-w-[821px] text-center">
          <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-[0.9] tracking-[-0.04em] text-[#111]">
            Підтримай розвиток<br />сервера
          </h2>
          <p className="mt-6 text-xl leading-7 tracking-[-0.2px] text-[#555]">
            Донат — це внесок у стабільність, апаратне забезпечення та новий контент. Усі статуси видаються назавжди.
          </p>
        </div>
        <div className="flex w-full max-w-[1280px] flex-col gap-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((t) => (
              <article key={t.en} className={`flex flex-col rounded-lg p-6 pt-8 ${t.card}`}>
                <span className="text-[13px] uppercase tracking-[2.6px] text-[#999]">{t.en}</span>
                <h3 className={`text-[32px] font-bold leading-[1.2] tracking-[-0.96px] ${t.dark ? "text-white" : "text-[#111]"}`}>{t.title}</h3>
                <ul className="mt-[30px] flex-1">
                  {t.perks.map((x) => (
                    <li key={x} className={`border-b py-2.5 text-sm leading-[21px] ${t.dark ? "border-white/10 text-[#BBB]" : "border-black/[0.07] text-[#555]"}`}>
                      {x}
                    </li>
                  ))}
                </ul>
                <a href="#donate" className={`mt-8 flex h-10 items-center justify-center rounded-full text-sm font-bold tracking-[-0.14px] hover:opacity-90 ${t.dark ? "bg-white text-[#111]" : "bg-[#111] text-white"}`}>
                  Обрати {t.title}
                </a>
              </article>
            ))}
          </div>
          <div className="flex flex-col items-start justify-between gap-6 rounded-lg bg-white p-8 md:flex-row md:items-center">
            <div className="max-w-[820px]">
              <h3 className="text-2xl font-bold tracking-[-0.72px] text-[#111]">Загальна підтримка</h3>
              <p className="mt-2 text-sm leading-[21px] text-[#555]">
                Не хочете статус — просто допоможіть серверу розвиватися. Будь-яка сума йде на оплату хостингу, оновлення апаратного забезпечення та розробку нового контенту. Усіх, хто підтримав, ми згадуємо на стіні пошани у спавні.
              </p>
            </div>
            <a href="#donate" className="shrink-0 rounded-full bg-[#2AACD1] px-8 py-3.5 text-sm font-bold tracking-[-0.14px] text-white hover:opacity-90">
              Підтримати сервер
            </a>
          </div>
        </div>
      </section>

      <section id="invite" className="flex flex-col items-center gap-[73px] bg-[#F2F2F2] px-5 py-[142px] max-md:py-20 lg:px-20">
        <div className="max-w-[821px] text-center">
          <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-[0.9] tracking-[-0.04em] text-[#111]">
            Запрошуй друзів — отримуй шалкери
          </h2>
          <p className="mt-6 text-xl leading-7 tracking-[-0.2px] text-[#555]">
            Поділись посиланням на сервер із друзями. Чим більше гравців прийде за твоїм запрошенням — тим цінніші винагороди. Шалкери з ресурсами чекають на тих, хто будує спільноту.
          </p>
        </div>
        <div className="grid w-full max-w-[1280px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((x) => (
            <article key={x.n} className="rounded-lg bg-white p-6 pt-8">
              <span className="text-xs uppercase tracking-[1.8px] text-[#999]">{x.n}</span>
              <h3 className="mt-[19px] text-xl font-bold tracking-[-0.6px] text-[#111]">{x.title}</h3>
              <p className="mt-3 text-sm leading-[21px] text-[#555]">{x.text}</p>
            </article>
          ))}
        </div>
        <span className="-my-8 text-xs uppercase tracking-[2.4px] text-[#999]">Винагороди</span>
        <div className="grid w-full max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-3">
          {REWARDS.map((r) => (
            <article key={r.lvl} className={`rounded-lg p-8 ${r.dark ? "bg-[#161616]" : "bg-white"}`}>
              <span className="text-xs uppercase tracking-[1.8px] text-[#999]">{r.lvl}</span>
              <div className="mt-6 size-6 rounded-md border border-[#BDBDBD] bg-[#E8E8E8]" />
              <h3 className={`mt-6 text-xl font-bold tracking-[-0.6px] ${r.dark ? "text-white" : "text-[#111]"}`}>{r.title}</h3>
              <p className={`mt-3 text-[13px] leading-5 ${r.dark ? "text-[#BBB]" : "text-[#555]"}`}>{r.text}</p>
              <ul className={`mt-4 flex flex-col gap-1.5 pl-4 text-xs ${r.dark ? "text-[#DDD]" : "text-[#555]"}`}>
                {r.items.map((i) => (<li key={i}>{i}</li>))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
