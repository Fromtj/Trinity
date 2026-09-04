// ── TRINITY · Member 5 · Footer (Tailwind) ──────────────────────────────
// Лента брендов + 3 колонки ссылок + контактный блок + иконки оплаты +
// нижняя строка (Privacy Policy / копирайт / соцсети).
// Иконки соцсетей/мессенджеров — inline-SVG.
// Логотипы платёжек — картинки из папки ./payments/ (рядом с этим файлом).

// логотипы платёжных систем (в порядке макета)
import visa from "./payments/visa.png";
import mastercard from "./payments/mastercard.png";
import amex from "./payments/amex.png";
import unionpay from "./payments/unionpay.png";
import tether from "./payments/tether.png";
import gpay from "./payments/gpay.png";
import applepay from "./payments/applepay.png";
import giropay from "./payments/giropay.png";
import cashu from "./payments/cashu.png";
import safetypay from "./payments/safetypay.png";

const BRANDS = [
  "Audi",
  "BMW",
  "Rolls-Royce", // активный
  "Cadillac",
  "Maserati",
  "Lamborghini",
  "Bentley",
  "Porsche",
];
const ACTIVE_BRAND = "Rolls-Royce";

const COLUMNS = [
  {
    title: "For Customers",
    links: ["About Us", "Conditions", "Testimonials", "Articles", "Contacts"],
  },
  {
    title: "Car List",
    links: ["SUVs", "Convertibles", "Sports Cars", "Premium", "Coupe"],
    active: "Convertibles",
  },
  {
    title: "Service",
    links: ["Car List", "Yacht list", "Chauffeur"],
  },
];

const PAYMENTS = [
  { label: "Visa", src: visa },
  { label: "MasterCard", src: mastercard },
  { label: "American Express", src: amex },
  { label: "UnionPay", src: unionpay },
  { label: "Tether", src: tether },
  { label: "Google Pay", src: gpay },
  { label: "Apple Pay", src: applepay },
  { label: "giropay", src: giropay },
  { label: "CASH U", src: cashu },
  { label: "safetypay", src: safetypay },
];

/* ── иконки ─────────────────────────────────────────────────────────── */
const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.9 4.3 18.6 20c-.2 1-.9 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.5-1 .5l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L6.9 13 2.3 11.6c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.6.2 1.4 1.1Z" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.9 5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.6-.1l.9-1c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.3.1.2.1.7-.1 1.3Z" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.6V13h2.5v8h3.4Z" />
  </svg>
);
const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 3c.3 2 1.5 3.5 3.5 3.8v2.6c-1.3 0-2.5-.4-3.5-1v6.1c0 3.2-2.4 5.5-5.5 5.5A5.4 5.4 0 0 1 5.5 14c0-3 2.5-5.3 5.6-5.1v2.7a2.7 2.7 0 0 0-2.9 2.5 2.6 2.6 0 0 0 5.2.2V3h3.1Z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.7-1.7C19.3 5.2 12 5.2 12 5.2s-7.3 0-8.9.4A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.7 1.7c1.6.4 8.9.4 8.9.4s7.3 0 8.9-.4a2.5 2.5 0 0 0 1.7-1.7C23 15.2 23 12 23 12ZM9.8 15.2V8.8l5.5 3.2-5.5 3.2Z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      {/* ── Лента брендов ── */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1400px] items-center gap-12 overflow-x-auto px-10 py-8 max-[700px]:px-5 max-[700px]:gap-8 [scrollbar-width:none]">
          {BRANDS.map((brand) => {
            const active = brand === ACTIVE_BRAND;
            return (
              <button
                key={brand}
                type="button"
                className={`shrink-0 text-[clamp(22px,2.4vw,34px)] font-bold transition-colors ${
                  active
                    ? "text-white border-b-2 border-[#2CB1B5] pb-1"
                    : "text-white/25 hover:text-white/50"
                }`}
              >
                {brand}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Основной футер ── */}
      <div className="mx-auto grid max-w-[1400px] gap-10 px-10 py-14 max-[700px]:px-5 grid-cols-1 min-[640px]:grid-cols-2 min-[1000px]:grid-cols-[1fr_1fr_1fr_1.5fr]">
        {/* колонки ссылок */}
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="mb-6 text-lg font-bold">{col.title}</h4>
            <ul className="flex flex-col gap-4">
              {col.links.map((link) => {
                const active = col.active === link;
                return (
                  <li key={link}>
                    <a
                      href="#"
                      className={`text-[15px] transition-colors ${
                        active
                          ? "text-[#2CB1B5] underline underline-offset-4"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        {/* контактный блок */}
        <div className="min-[640px]:max-[1000px]:col-span-2 min-[1000px]:border-l min-[1000px]:border-white/10 min-[1000px]:pl-10">
          {/* телефон + мессенджеры */}
          <div className="mb-6 flex items-center gap-4">
            <a href="tel:+971585907875" className="text-2xl font-bold whitespace-nowrap">
              +971 58 590 7875
            </a>
            <a href="#" aria-label="Telegram" className="grid h-9 w-9 place-items-center rounded-full bg-[#29A9EA] text-white transition-transform hover:scale-110">
              <TelegramIcon />
            </a>
            <a href="#" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110">
              <WhatsAppIcon />
            </a>
          </div>

          {/* кнопка обратного звонка — secondary */}
          <button
            type="button"
            className="mb-6 rounded-[14px] border-[1.5px] border-[#2CB1B5] px-8 py-4 text-xs font-semibold uppercase tracking-[1.5px] text-white transition-colors hover:bg-[#2CB1B5] hover:text-[#04211F]"
          >
            Request a callback
          </button>

          {/* адрес */}
          <p className="mb-6 max-w-[320px] text-[15px] leading-relaxed text-white/80">
            24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai
          </p>

          {/* email + submit (поле с кнопкой внутри) */}
          <div className="flex max-w-[380px] items-center gap-2 rounded-[14px] bg-[#1A1A1A] p-2">
            <input
              type="email"
              placeholder="Write your E-mail"
              className="min-w-0 flex-1 bg-transparent px-3 text-white outline-none placeholder:text-[#7C7C7C]"
            />
            <button
              type="button"
              className="rounded-[10px] bg-[#2CB1B5] px-6 py-3 text-xs font-semibold uppercase tracking-[1px] text-white transition-colors hover:bg-[#249BA0]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* ── Иконки оплаты ── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 px-10 py-8 max-[700px]:px-5 max-[700px]:justify-center">
          {PAYMENTS.map((p) => (
            <img
              key={p.label}
              src={p.src}
              alt={p.label}
              className="h-6 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </div>

      {/* ── Нижняя строка ── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-10 py-6 max-[700px]:px-5 max-[700px]:justify-center max-[700px]:text-center">
          <a href="#" className="text-sm text-[#2CB1B5] hover:underline">
            Privacy Policy
          </a>
          <p className="text-sm text-white/40">
            ©2023 TRINITY. All rights reserved
          </p>
          <div className="flex items-center gap-4 text-white/60">
            {[FacebookIcon, TikTokIcon, YouTubeIcon, InstagramIcon].map((Icon, i) => (
              <a key={i} href="#" className="transition-colors hover:text-white">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
