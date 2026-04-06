"use client";
import { useEffect } from "react";

type SEOPropsType = {
  title?: string;
  description?: string;
};

const SEO = ({
  title = "Hotel Brivanna - Campo Grande, MS | Conforto e Localização Privilegiada",
  description = "Hotel no centro de Campo Grande, MS. Ideal para viagens de trabalho. Quartos confortáveis, localização estratégica e excelente custo-benefício. Reserve agora!",
}: SEOPropsType) => {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "hotel campo grande, hotel centro campo grande, hotel trabalho campo grande, hospedagem campo grande ms, hotel barato campo grande",
    );

    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement("meta");
      metaTheme.setAttribute("name", "theme-color");
      document.head.appendChild(metaTheme);
    }
    metaTheme.setAttribute("content", "#102c31");
  }, [title, description]);

  return null;
};

export default SEO;
