import { useState } from "react";

// ── TRINITY · Member 5 · Блок «Ask us anything» (Tailwind) ───────────────
// Карта Дубая слева + форма справа (Name / E-mail / Phone / Message).
// Состояния инпутов из макета: normal, hover, focus, error.
// Кнопка «Send the request» — secondary (обводка), при hover заливается.

const inputBase =
  "w-full bg-[#1A1A1A] border-[1.5px] rounded-[14px] px-6 py-[22px] " +
  "text-white text-base outline-none transition-colors " +
  "placeholder:text-[#7C7C7C] hover:bg-[#202020]";

const inputNormal = "border-transparent focus:border-[#2CB1B5]";
const inputError =
  "border-[#D34B4B] text-[#D34B4B] placeholder:text-[#D34B4B]";

export default function AskAnything() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: false }));
  };

  const handleSubmit = () => {
    const next = {};
    if (!values.name.trim()) next.name = true;
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = true;
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // здесь будет реальная отправка на бэкенд
      alert("Заявка отправлена ✅");
    }
  };

  return (
    <section className="bg-[#0D0D0D] text-white py-20 px-10 max-[900px]:py-14 max-[900px]:px-5">
      <div className="mx-auto max-w-[1400px] grid gap-20 items-stretch grid-cols-1 min-[900px]:grid-cols-[1.05fr_1fr] max-[900px]:gap-8">
        {/* Левая колонка — карта */}
        <div className="rounded-[20px] overflow-hidden min-h-[560px] bg-[#111] max-[900px]:min-h-[320px]">
          <iframe
            title="Trinity — Dubai location"
            src="https://www.google.com/maps?q=Dubai&z=11&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[560px] max-[900px]:min-h-[320px] border-0 block [filter:grayscale(.15)_brightness(.95)]"
          />
        </div>

        {/* Правая колонка — форма */}
        <div className="flex flex-col">
          <h2 className="font-bold leading-[1.05] tracking-[-0.5px] mb-8 text-[clamp(40px,4vw,64px)]">
            Ask us anything
          </h2>

          <div className="mb-5">
            <input
              type="text"
              placeholder="Name"
              value={values.name}
              onChange={handleChange("name")}
              className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange("email")}
              className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
            />
          </div>

          <div className="mb-5">
            <input
              type="tel"
              placeholder="+7 (999) 999 - 99 - 99"
              value={values.phone}
              onChange={handleChange("phone")}
              className={`${inputBase} ${inputNormal}`}
            />
          </div>

          <div className="mb-5">
            <textarea
              placeholder="Message"
              rows={4}
              value={values.message}
              onChange={handleChange("message")}
              className={`${inputBase} ${inputNormal} resize-y min-h-[120px] leading-relaxed`}
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="self-start mt-3 max-[900px]:self-stretch bg-transparent border-[1.5px] border-[#2CB1B5] text-white font-semibold text-sm uppercase tracking-[1.5px] px-[42px] py-5 rounded-[14px] cursor-pointer transition-colors hover:bg-[#2CB1B5] hover:text-[#04211F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#2CB1B5]"
          >
            Send the request
          </button>
        </div>
      </div>
    </section>
  );
}
