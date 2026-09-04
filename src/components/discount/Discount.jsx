import { useState } from "react";

// ── TRINITY · Member 5 · Блок «Get a discount up to 60%» (Tailwind) ──────
// Промо-баннер рассылки: заголовок + подзаголовок + поле email + кнопка.
// Декор из макета: концентрические круги за заголовком и сетка «плюсов».
// Кнопка «Receive» — primary (заливка бирюзовым).

// маленькая сетка «+» в правом нижнем углу (декор)
function PlusGrid() {
  const rows = 5;
  const cols = 5;
  // несколько плюсов подсвечены бирюзовым, как в макете
  const teal = new Set(["0-4", "2-0", "1-4"]);
  return (
    <div
      aria-hidden
      className="absolute bottom-8 right-10 grid grid-cols-5 gap-4 opacity-70 max-[700px]:hidden"
    >
      {Array.from({ length: rows * cols }).map((_, i) => {
        const key = `${Math.floor(i / cols)}-${i % cols}`;
        return (
          <span
            key={i}
            className={`text-lg leading-none select-none ${
              teal.has(key) ? "text-[#2CB1B5]" : "text-white/15"
            }`}
          >
            +
          </span>
        );
      })}
    </div>
  );
}

export default function Discount() {
  const [email, setEmail] = useState("");

  const handleReceive = () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Введите корректный e-mail");
      return;
    }
    // здесь будет подписка на рассылку
    alert("Спасибо за подписку ✅");
  };

  return (
    <section className="bg-[#0D0D0D] text-white px-10 py-16 max-[700px]:px-5">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[24px] px-6 py-16 text-center bg-[linear-gradient(135deg,#10212C_0%,#0D0D0D_55%)] max-[700px]:py-12">
        {/* декор: концентрические круги */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-14 -translate-x-1/2 h-64 w-64 rounded-full border border-white/5" />
          <div className="absolute left-1/2 top-14 -translate-x-1/2 h-96 w-96 rounded-full border border-white/5" />
          <div className="absolute left-1/2 top-14 -translate-x-1/2 h-[34rem] w-[34rem] rounded-full border border-white/[0.03]" />
        </div>

        <PlusGrid />

        {/* контент поверх декора */}
        <div className="relative z-10 mx-auto max-w-[720px]">
          <h2 className="font-medium text-white text-[clamp(30px,4vw,52px)] leading-tight">
            Get a discount of up to <span className="font-extrabold">60%</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-relaxed text-white/50">
            Get the latest articles and business updates that you need to know,
            you'll even get special recommendations weekly.
          </p>

          {/* поле email + кнопка */}
          <div className="mt-10 flex items-stretch justify-center gap-4 max-[560px]:flex-col max-[560px]:items-stretch">
            <div className="relative w-full max-w-[380px] max-[560px]:max-w-none">
              <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/40">
                {/* envelope icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[14px] border-[1.5px] border-transparent bg-[#1A1A1A] py-[18px] pl-12 pr-5 text-white outline-none transition-colors placeholder:text-[#7C7C7C] hover:bg-[#202020] focus:border-[#2CB1B5]"
              />
            </div>

            <button
              type="button"
              onClick={handleReceive}
              className="rounded-[14px] bg-[#2CB1B5] px-10 py-[18px] font-semibold uppercase tracking-[1.5px] text-sm text-white transition-colors hover:bg-[#249BA0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#2CB1B5] max-[560px]:px-6"
            >
              Receive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
