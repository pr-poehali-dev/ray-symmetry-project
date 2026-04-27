import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 0,
    type: "title",
    title: "Лучевая симметрия",
    subtitle: "в геометрии",
    bg: "from-[#EEF6F0] to-[#E8F0F8]",
  },
  {
    id: 1,
    type: "definition",
    label: "Слайд 1",
    title: "Что такое лучевая симметрия?",
    content: [
      {
        icon: "RotateCcw",
        heading: "Определение",
        text: "Лучевая (радиальная) симметрия — это вид симметрии, при которой фигура совпадает сама с собой при повороте вокруг центральной оси на определённый угол.",
      },
      {
        icon: "Crosshair",
        heading: "Центр симметрии",
        text: "Все элементы фигуры расположены на одинаковом расстоянии от центра и равномерно распределены вокруг него, как лучи.",
      },
      {
        icon: "RefreshCw",
        heading: "Порядок симметрии",
        text: "Порядок n показывает, сколько раз фигура совпадает сама с собой при полном обороте на 360°. Угол поворота = 360° / n.",
      },
    ],
    image: "https://cdn.poehali.dev/projects/547ed932-68cb-4f10-880c-60984ad745dd/files/81d075cb-6f42-4f94-846a-d1869e54ca2a.jpg",
    bg: "from-[#FFF5F0] to-[#FFF9F5]",
    accent: "#E8896A",
  },
  {
    id: 2,
    type: "where",
    label: "Слайд 2",
    title: "Где встречается лучевая симметрия?",
    items: [
      { emoji: "🌸", category: "Растения", examples: "Цветы ромашки, розы, мака; снежинки; плоды апельсина в разрезе" },
      { emoji: "🪸", category: "Морские организмы", examples: "Морские звёзды, медузы, морские ежи, кораллы, актинии" },
      { emoji: "🏛️", category: "Архитектура", examples: "Купола соборов, витражные окна-розы, мозаики полов в соборах" },
      { emoji: "⚙️", category: "Технологии", examples: "Колёса, турбины, пропеллеры, шестерёнки, вентиляторы" },
      { emoji: "🔬", category: "Микромир", examples: "Диатомовые водоросли, вирусы, молекулярные структуры" },
      { emoji: "🎨", category: "Искусство", examples: "Мандалы, орнаменты, паркет, декоративные узоры" },
    ],
    bg: "from-[#F0F5FF] to-[#F5F0FF]",
    accent: "#7B8FE8",
  },
  {
    id: 3,
    type: "nature",
    label: "Слайд 3",
    title: "Виды лучевой симметрии в природе",
    types: [
      { n: "2", name: "Двулучевая", latin: "Bisymmetry", example: "Листья, крылья бабочек", color: "#F5A89A" },
      { n: "4", name: "Четырёхлучевая", latin: "Tetramerism", example: "Цветки примулы, некоторые кораллы", color: "#A8D5A2" },
      { n: "5", name: "Пятилучевая", latin: "Pentamerism", example: "Морские звёзды, яблоки в разрезе", color: "#A8C8E8" },
      { n: "6", name: "Шестилучевая", latin: "Hexamerism", example: "Снежинки, пчелиные соты, цветок льна", color: "#D5A8E8" },
      { n: "8", name: "Восьмилучевая", latin: "Octomerism", example: "Космея, часть морских анемонов", color: "#F5D5A8" },
      { n: "∞", name: "Осевая", latin: "Axial symmetry", example: "Медузы, актинии, некоторые водоросли", color: "#A8E8D5" },
    ],
    image: "https://cdn.poehali.dev/projects/547ed932-68cb-4f10-880c-60984ad745dd/files/e275dd58-455f-48dd-9962-f58be71b1137.jpg",
    bg: "from-[#F5FFF5] to-[#FAFFF0]",
    accent: "#5BA882",
  },
  {
    id: 4,
    type: "math",
    label: "Слайд 4",
    title: "Математические свойства",
    formulas: [
      {
        title: "Угол поворота",
        formula: "α = 360° / n",
        desc: "где n — порядок симметрии. При повороте на угол α фигура совпадает сама с собой.",
        color: "#E8896A",
      },
      {
        title: "Группа поворотов",
        formula: "Cₙ = { Rᵏ | k = 0, 1, …, n−1 }",
        desc: "Множество всех поворотов на углы, кратные α, образует циклическую группу порядка n.",
        color: "#7B8FE8",
      },
      {
        title: "Координаты вершин",
        formula: "xₖ = r·cos(2πk/n),  yₖ = r·sin(2πk/n)",
        desc: "Вершины правильного n-угольника на окружности радиуса r.",
        color: "#5BA882",
      },
      {
        title: "Матрица поворота",
        formula: "R(α) = [[cos α, −sin α], [sin α, cos α]]",
        desc: "Любой поворот на угол α в плоскости задаётся этой матрицей преобразования.",
        color: "#B07FD8",
      },
    ],
    image: "https://cdn.poehali.dev/projects/547ed932-68cb-4f10-880c-60984ad745dd/files/25593512-e110-4547-8145-1451a6bb8cd2.jpg",
    bg: "from-[#FFF8F0] to-[#FFF5FA]",
    accent: "#E8896A",
  },
  {
    id: 5,
    type: "comparison",
    label: "Слайд 5",
    title: "Сравнение типов симметрии",
    types: [
      {
        name: "Лучевая",
        icon: "RefreshCw",
        color: "#5BA882",
        bg: "#E8F5EF",
        desc: "Совпадение при повороте на угол 360°/n вокруг центра",
        examples: "Снежинка, морская звезда, цветок",
        key: "Центр + ось вращения",
      },
      {
        name: "Осевая",
        icon: "Minus",
        color: "#7B8FE8",
        bg: "#EEF0FC",
        desc: "Совпадение при отражении относительно прямой (оси)",
        examples: "Лист, бабочка, человеческое тело",
        key: "Ось отражения",
      },
      {
        name: "Центральная",
        icon: "Dot",
        color: "#E8896A",
        bg: "#FDF0EB",
        desc: "Совпадение при повороте на 180° вокруг точки",
        examples: "Буква S, шахматная доска, параллелограмм",
        key: "Центр поворота",
      },
      {
        name: "Трансляционная",
        icon: "MoveRight",
        color: "#B07FD8",
        bg: "#F5EEFB",
        desc: "Совпадение при сдвиге на вектор параллельного переноса",
        examples: "Кирпичная кладка, клетчатая ткань",
        key: "Вектор переноса",
      },
    ],
    note: "Фигура может обладать несколькими видами симметрии одновременно. Например, снежинка имеет и лучевую, и осевую симметрию.",
    bg: "from-[#F5F0FF] to-[#F0F5FF]",
    accent: "#7B8FE8",
  },
  {
    id: 6,
    type: "architecture",
    label: "Слайд 6",
    title: "Симметрия в архитектуре",
    buildings: [
      { emoji: "🕌", name: "Купол Пантеона", place: "Рим, Италия", sym: "8-лучевая", desc: "Кессонный потолок с восьмиугольными кассетами образует идеальную радиальную симметрию" },
      { emoji: "🌹", name: "Окно-роза", place: "Нотр-Дам, Париж", sym: "12-лучевая", desc: "Витражное окно диаметром 10 м с 12-кратной лучевой симметрией" },
      { emoji: "🕍", name: "Собор Василия Блаженного", place: "Москва, Россия", sym: "4-лучевая", desc: "Четыре пары куполов симметрично расположены вокруг центральной башни" },
      { emoji: "🏛️", name: "Пантеон", place: "Вашингтон, США", sym: "Осевая + купол", desc: "Колоннада и купол демонстрируют сочетание осевой и радиальной симметрии" },
      { emoji: "🕋", name: "Тадж-Махал", place: "Агра, Индия", sym: "4-лучевая", desc: "Четыре минарета и сады образуют строгую четырёхкратную симметрию" },
      { emoji: "🌐", name: "Геодезический купол", place: "Современная архитектура", sym: "Сферическая", desc: "Треугольные грани образуют многолучевую симметрию по поверхности сферы" },
    ],
    image: "https://cdn.poehali.dev/projects/547ed932-68cb-4f10-880c-60984ad745dd/files/88a2d7c9-13b3-479b-b479-05deb718fc8f.jpg",
    bg: "from-[#FFF8F2] to-[#F5F0FF]",
    accent: "#C47F4A",
  },
  {
    id: 7,
    type: "summary",
    label: "Слайд 7",
    title: "Итоги",
    points: [
      { icon: "Star", text: "Лучевая симметрия — поворот фигуры на угол 360°/n вокруг центра" },
      { icon: "Leaf", text: "Встречается в природе: цветы, снежинки, морские организмы" },
      { icon: "Layers", text: "Виды: 2-, 4-, 5-, 6-, 8-лучевая и осевая симметрия" },
      { icon: "Calculator", text: "Описывается группой циклических поворотов Cₙ" },
      { icon: "Globe", text: "Применяется в архитектуре, технике, декоративном искусстве" },
    ],
    quote: "«Симметрия — это та идея, с помощью которой человек веками пытался постичь и создать порядок, красоту и совершенство.»",
    quoteAuthor: "— Герман Вейль, математик",
    bg: "from-[#EEF6F0] to-[#E8F0F8]",
    accent: "#5BA882",
  },
];

function SymmetryDiagram({ n }: { n: number }) {
  const cx = 60;
  const cy = 60;
  const r = 44;
  const points = Array.from({ length: n }, (_, k) => {
    const angle = (2 * Math.PI * k) / n - Math.PI / 2;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  });
  const polygon = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#D0DFF0" strokeWidth="1.5" strokeDasharray="4,3" />
      <polygon points={polygon} fill="rgba(123,143,232,0.15)" stroke="#7B8FE8" strokeWidth="2" />
      {points.map((p, k) => (
        <g key={k}>
          <line x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#A8C8E8" strokeWidth="1" strokeDasharray="3,2" />
          <circle cx={p.x} cy={p.y} r="4" fill="#7B8FE8" />
        </g>
      ))}
      <circle cx={cx} cy={cy} r="5" fill="#E8896A" />
    </svg>
  );
}

function SlideHeader({ label, title, accent }: { label: string; title: string; accent: string }) {
  return (
    <div className="px-8 pt-7 pb-4 flex items-start gap-4">
      <div
        className="px-3 py-1 rounded-full text-xs font-golos font-semibold flex-shrink-0 mt-1"
        style={{ background: `${accent}22`, color: accent }}
      >
        {label}
      </div>
      <h2 className="font-cormorant text-3xl font-semibold text-[#2D3A2D] leading-tight">{title}</h2>
    </div>
  );
}

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const total = slides.length;

  const goTo = (idx: number, dir: "next" | "prev") => {
    if (animating || idx === current) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  const next = () => current < total - 1 && goTo(current + 1, "next");
  const prev = () => current > 0 && goTo(current - 1, "prev");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, animating]);

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-[#F2F4F8] flex flex-col items-center justify-center p-4 font-golos">
      {/* Progress */}
      <div className="flex gap-2 mb-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? 32 : 10,
              height: 10,
              background: i === current ? "#5BA882" : "#C8D8C8",
            }}
          />
        ))}
      </div>

      {/* Slide container */}
      <div
        className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden"
        style={{
          minHeight: 560,
          opacity: animating ? 0 : 1,
          transform: animating
            ? direction === "next"
              ? "translateX(24px)"
              : "translateX(-24px)"
            : "translateX(0)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        {/* ── TITLE SLIDE ── */}
        {slide.type === "title" && (
          <div
            className={`flex flex-col items-center justify-center bg-gradient-to-br ${slide.bg} relative overflow-hidden px-8`}
            style={{ minHeight: 560 }}
          >
            {[120, 200, 290, 380].map((size, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-[#B8D8C8] opacity-30"
                style={{
                  width: size,
                  height: size,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
            <svg
              className="absolute opacity-[0.07]"
              width="520"
              height="520"
              viewBox="0 0 520 520"
              style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            >
              {Array.from({ length: 8 }, (_, k) => (
                <ellipse
                  key={k}
                  cx="260"
                  cy="260"
                  rx="28"
                  ry="115"
                  fill="#5BA882"
                  transform={`rotate(${(360 / 8) * k} 260 260)`}
                />
              ))}
            </svg>
            <div className="relative z-10 text-center">
              <div className="text-5xl mb-5">✦</div>
              <h1 className="font-cormorant text-6xl md:text-7xl font-semibold text-[#2D4A3A] leading-tight mb-1">
                Лучевая
              </h1>
              <h2 className="font-cormorant text-5xl md:text-6xl text-[#5BA882] italic mb-6">
                симметрия
              </h2>
              <div className="w-16 h-0.5 bg-[#5BA882] mx-auto" />
            </div>
          </div>
        )}

        {/* ── DEFINITION ── */}
        {slide.type === "definition" && (
          <div className={`flex flex-col bg-gradient-to-br ${slide.bg}`} style={{ minHeight: 560 }}>
            <SlideHeader label={slide.label!} title={slide.title!} accent={slide.accent as string} />
            <div className="flex flex-1 gap-6 px-8 pb-8">
              <div className="flex-1 flex flex-col gap-4">
                {(slide.content as { icon: string; heading: string; text: string }[]).map((item, i) => (
                  <div key={i} className="bg-white/70 rounded-2xl p-5 flex gap-4 items-start">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${slide.accent}22` }}
                    >
                      <Icon name={item.icon} size={20} style={{ color: slide.accent as string }} />
                    </div>
                    <div>
                      <p className="font-golos font-semibold text-[#2D3A2D] text-sm mb-1">{item.heading}</p>
                      <p className="font-golos text-[#4A5A4A] text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-48 flex-shrink-0 flex items-center justify-center">
                <img
                  src={slide.image as string}
                  alt="Лучевая симметрия"
                  className="w-44 h-44 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── WHERE ── */}
        {slide.type === "where" && (
          <div className={`flex flex-col bg-gradient-to-br ${slide.bg}`} style={{ minHeight: 560 }}>
            <SlideHeader label={slide.label!} title={slide.title!} accent={slide.accent as string} />
            <div className="grid grid-cols-3 gap-4 px-8 pb-8">
              {(slide.items as { emoji: string; category: string; examples: string }[]).map((item, i) => (
                <div key={i} className="bg-white/70 rounded-2xl p-5">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <p className="font-golos font-semibold text-[#2D3A5A] text-sm mb-2">{item.category}</p>
                  <p className="font-golos text-[#4A5A7A] text-xs leading-relaxed">{item.examples}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── NATURE ── */}
        {slide.type === "nature" && (
          <div className={`flex flex-col bg-gradient-to-br ${slide.bg}`} style={{ minHeight: 560 }}>
            <SlideHeader label={slide.label!} title={slide.title!} accent={slide.accent as string} />
            <div className="flex gap-6 px-8 pb-8 flex-1">
              <div className="flex-1 grid grid-cols-2 gap-3">
                {(slide.types as { n: string; name: string; latin: string; example: string; color: string }[]).map(
                  (type, i) => (
                    <div key={i} className="bg-white/70 rounded-2xl p-4 flex gap-3 items-center">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-cormorant font-semibold text-xl"
                        style={{ background: `${type.color}50`, color: "#2D4A3A" }}
                      >
                        {type.n}
                      </div>
                      <div>
                        <p className="font-golos font-semibold text-[#2D4A3A] text-sm">{type.name}</p>
                        <p className="font-golos text-[#5A7A5A] text-xs italic mb-0.5">{type.latin}</p>
                        <p className="font-golos text-[#4A6A4A] text-xs">{type.example}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="w-44 flex-shrink-0 flex items-center justify-center">
                <img
                  src={slide.image as string}
                  alt="Природные примеры"
                  className="w-40 h-52 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── MATH ── */}
        {slide.type === "math" && (
          <div className={`flex flex-col bg-gradient-to-br ${slide.bg}`} style={{ minHeight: 560 }}>
            <SlideHeader label={slide.label!} title={slide.title!} accent={slide.accent as string} />
            <div className="flex gap-6 px-8 pb-8 flex-1">
              <div className="flex-1 flex flex-col gap-3">
                {(slide.formulas as { title: string; formula: string; desc: string; color: string }[]).map((f, i) => (
                  <div key={i} className="bg-white/70 rounded-2xl p-4 flex gap-4 items-start">
                    <div
                      className="w-1.5 rounded-full self-stretch flex-shrink-0"
                      style={{ background: f.color }}
                    />
                    <div className="flex-1">
                      <p className="font-golos font-semibold text-[#2D3A2D] text-sm mb-1.5">{f.title}</p>
                      <div
                        className="inline-block px-4 py-1.5 rounded-xl font-mono text-sm font-semibold mb-2"
                        style={{ background: `${f.color}18`, color: f.color }}
                      >
                        {f.formula}
                      </div>
                      <p className="font-golos text-[#4A5A4A] text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-44 flex-shrink-0 flex flex-col gap-4 items-center justify-center">
                <img
                  src={slide.image as string}
                  alt="Математика"
                  className="w-40 h-36 object-cover rounded-2xl shadow-md"
                />
                <div className="bg-white/80 rounded-2xl p-3 w-full text-center">
                  <p className="font-golos text-xs text-[#4A5A4A] mb-1">Пример: n = 6</p>
                  <div className="flex justify-center">
                    <SymmetryDiagram n={6} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── COMPARISON ── */}
        {slide.type === "comparison" && (
          <div className={`flex flex-col bg-gradient-to-br ${slide.bg}`} style={{ minHeight: 560 }}>
            <SlideHeader label={slide.label!} title={slide.title!} accent={slide.accent as string} />
            <div className="flex flex-col gap-4 px-8 pb-6 flex-1">
              <div className="grid grid-cols-2 gap-3 flex-1">
                {(slide.types as { name: string; icon: string; color: string; bg: string; desc: string; examples: string; key: string }[]).map((t, i) => (
                  <div key={i} className="rounded-2xl p-4 flex gap-3" style={{ background: t.bg }}>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${t.color}22` }}
                    >
                      <Icon name={t.icon} size={18} style={{ color: t.color }} />
                    </div>
                    <div>
                      <p className="font-golos font-semibold text-sm mb-0.5" style={{ color: t.color }}>{t.name} симметрия</p>
                      <p className="font-golos text-[#3A3A3A] text-xs mb-1 leading-relaxed">{t.desc}</p>
                      <p className="font-golos text-xs text-[#5A5A6A]"><span className="font-semibold">Примеры:</span> {t.examples}</p>
                      <div className="mt-1.5 inline-block px-2 py-0.5 rounded-full text-xs font-golos" style={{ background: `${t.color}18`, color: t.color }}>{t.key}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white/70 rounded-2xl px-5 py-3 flex gap-3 items-center">
                <Icon name="Info" size={16} style={{ color: slide.accent as string, flexShrink: 0 }} />
                <p className="font-golos text-xs text-[#4A5A4A] leading-relaxed">{slide.note as string}</p>
              </div>
            </div>
          </div>
        )}

        {/* ── ARCHITECTURE ── */}
        {slide.type === "architecture" && (
          <div className={`flex flex-col bg-gradient-to-br ${slide.bg}`} style={{ minHeight: 560 }}>
            <SlideHeader label={slide.label!} title={slide.title!} accent={slide.accent as string} />
            <div className="flex gap-6 px-8 pb-8 flex-1">
              <div className="flex-1 grid grid-cols-2 gap-3">
                {(slide.buildings as { emoji: string; name: string; place: string; sym: string; desc: string }[]).map((b, i) => (
                  <div key={i} className="bg-white/70 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{b.emoji}</span>
                      <div>
                        <p className="font-golos font-semibold text-[#2D2A1E] text-sm leading-tight">{b.name}</p>
                        <p className="font-golos text-xs text-[#8A7A5A]">{b.place}</p>
                      </div>
                    </div>
                    <div className="inline-block px-2 py-0.5 rounded-full text-xs font-golos font-semibold mb-1.5" style={{ background: `${slide.accent}18`, color: slide.accent as string }}>{b.sym}</div>
                    <p className="font-golos text-xs text-[#4A4A3A] leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
              <div className="w-44 flex-shrink-0 flex items-center justify-center">
                <img
                  src={slide.image as string}
                  alt="Архитектура"
                  className="w-40 h-52 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── SUMMARY ── */}
        {slide.type === "summary" && (
          <div className={`flex flex-col bg-gradient-to-br ${slide.bg}`} style={{ minHeight: 560 }}>
            <SlideHeader label={slide.label!} title={slide.title!} accent={slide.accent as string} />
            <div className="flex gap-6 px-8 pb-8 flex-1">
              <div className="flex-1 flex flex-col gap-3">
                {(slide.points as { icon: string; text: string }[]).map((point, i) => (
                  <div key={i} className="bg-white/70 rounded-2xl px-5 py-3.5 flex gap-3 items-center">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${slide.accent}22` }}
                    >
                      <Icon name={point.icon} size={16} style={{ color: slide.accent as string }} />
                    </div>
                    <p className="font-golos text-[#2D4A3A] text-sm">{point.text}</p>
                  </div>
                ))}
              </div>
              <div className="w-56 flex-shrink-0 flex flex-col gap-4 items-center justify-center">
                <div className="bg-white/80 rounded-2xl p-4 text-center">
                  <SymmetryDiagram n={5} />
                  <p className="font-golos text-xs text-[#6A8A6A] mt-1">Пятилучевая, n = 5</p>
                </div>
                <div
                  className="bg-white/80 rounded-2xl p-4 border-l-4"
                  style={{ borderColor: slide.accent as string }}
                >
                  <p className="font-cormorant italic text-[#2D4A3A] text-sm leading-relaxed mb-2">
                    {slide.quote as string}
                  </p>
                  <p className="font-golos text-xs text-[#6A8A6A]">{slide.quoteAuthor as string}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-4 mt-5">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center disabled:opacity-30 hover:bg-[#F0FAF5] transition-colors"
          style={{ color: "#5BA882" }}
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        <span className="font-golos text-sm text-[#6A8A6A] w-12 text-center">
          {current + 1} / {total}
        </span>
        <button
          onClick={next}
          disabled={current === total - 1}
          className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center disabled:opacity-30 hover:bg-[#F0FAF5] transition-colors"
          style={{ color: "#5BA882" }}
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
      <p className="font-golos text-xs text-[#9AA89A] mt-2">← → стрелки для навигации</p>
    </div>
  );
}