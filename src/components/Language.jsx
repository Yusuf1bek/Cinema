import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import iconUz from "../assets/images/uz.webp";
import iconEn from "../assets/images/en.jpg";
import iconRu from "../assets/images/ru.jpg";

const FLAGS = {
  ru: iconRu,
  uz: iconUz,
  en: iconEn
};

const Language = () => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "ru");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang); 
  }, [lang, i18n]);

  return (
    <div className="relative inline-block">
      <select
        value={lang}
        onChange={e => setLang(e.target.value)}
        className="appearance-none bg-black text-white rounded-md py-2 pl-10 pr-8 cursor-pointer border border-gray-600"
      >
        <option value="ru">RU</option>
        <option value="uz">UZ</option>
        <option value="en">EN</option>
      </select>
      <div className="absolute top-[24px] left-3 transform -translate-y-1/2">
        <span className="inline-block w-5 h-5 rounded-full overflow-hidden">
          <img src={FLAGS[t("l")]} alt={lang} width={20} height={20} />
        </span>
      </div>
      <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Language;
