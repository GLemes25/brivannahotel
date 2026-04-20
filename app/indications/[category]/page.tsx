"use client";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { CATEGORIES } from "@/app/data/indications/categories";
import indicationsData from "@/app/data/indications/indications.json";
import { ArrowLeft, ExternalLink, Navigation } from "lucide-react";
import { motion } from "motion/react";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type Indication = {
  id: string;
  name: string;
  categorySlug: string;
  description: string;
  distance: string;
  instagramUrl: string;
  mapUrl: string;
  tags?: string[];
  businessHours?: string;
  isOpenNow?: boolean;
};

const CategoryPage = () => {
  const params = useParams();
  const router = useRouter();
  const categorySlug = params.category as string;

  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  const categoryConfig = CATEGORIES.find((c) => c.slug === categorySlug);
  const places = (indicationsData as Indication[]).filter(
    (p) => p.categorySlug === categorySlug,
  );

  const availableTags = useMemo(() => {
    const tagsSet = new Set<string>();
    places.forEach((place) => {
      if (place.tags && Array.isArray(place.tags)) {
        place.tags.forEach((tag) => tagsSet.add(tag));
      }
    });
    return Array.from(tagsSet).sort();
  }, [places]);

  const filteredPlaces = useMemo(() => {
    if (activeFilter === "Todos") return places;
    return places.filter((place) => place.tags?.includes(activeFilter));
  }, [places, activeFilter]);

  const handleBack = () => {
    router.push("/#indications");
  };

  if (!categoryConfig) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-12">
        <div className="text-center flex flex-col items-center gap-6">
          <p className="text-foreground font-serif text-2xl tracking-wide">
            Categoria não encontrada
          </p>
          <Button
            onClick={handleBack}
            className="bg-primary text-black rounded-xl font-semibold uppercase tracking-wide shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110 font-serif px-8 h-12"
          >
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  const CategoryIcon = categoryConfig.icon;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden py-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#ca993d]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 pt-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center mb-16 md:mb-20"
        >
          <div className="absolute left-0">
            <Button
              onClick={handleBack}
              variant="ghost"
              className="group flex items-center gap-3 hover:bg-transparent px-0 text-muted-foreground hover:text-[#ca993d] transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center group-hover:border-[#ca993d]/30 group-hover:bg-[#ca993d]/10 transition-all duration-300">
                <ArrowLeft size={16} />
              </div>
            </Button>
          </div>

          <div className="flex flex-col items-center text-center px-16">
            <div className="w-16 h-16 flex items-center justify-center mb-6">
              <CategoryIcon size={64} className="text-[#ca993d]" />
            </div>
            <h2 className="text-[#ca993d] uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold mb-3 font-serif">
              Nossas Recomendações
            </h2>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground tracking-wide">
              {categoryConfig.label}
            </h1>
          </div>
        </motion.div>

        {availableTags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 md:mb-14 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <Button
              onClick={() => setActiveFilter("Todos")}
              variant="outline"
              className={`rounded-full px-6 transition-all duration-300 font-serif text-sm tracking-wide ${
                activeFilter === "Todos"
                  ? "bg-[#ca993d] border-[#ca993d] text-black"
                  : "bg-transparent border-white/10 text-muted-foreground hover:border-[#ca993d]/50 hover:text-[#ca993d]"
              }`}
            >
              Todos
            </Button>
            {availableTags.map((tag) => (
              <Button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                variant="outline"
                className={`rounded-full px-6 transition-all duration-300 font-serif text-sm tracking-wide ${
                  activeFilter === tag
                    ? "bg-[#ca993d] border-[#ca993d] text-black"
                    : "bg-transparent border-white/10 text-muted-foreground hover:border-[#ca993d]/50 hover:text-[#ca993d]"
                }`}
              >
                {tag}
              </Button>
            ))}
          </motion.div>
        )}

        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-10 md:gap-14"
        >
          {filteredPlaces.length === 0 ? (
            <p className="text-center text-muted-foreground font-light py-10">
              Nenhum local encontrado para esta seleção.
            </p>
          ) : (
            filteredPlaces.map((place, index) => {
              const numberString = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="relative bg-card/5 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden group hover:bg-card/10 hover:border-[#ca993d]/30 hover:shadow-[0_8px_40px_rgba(202,153,61,0.06)] transition-all duration-500"
                >
                  <div className="absolute -top-4 -right-4 md:-top-10 md:-right-8 text-[120px] md:text-[200px] font-serif font-bold text-white/[0.02] group-hover:text-[#ca993d]/[0.05] transition-colors duration-700 select-none pointer-events-none leading-none">
                    {numberString}
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-wide leading-tight group-hover:text-[#ca993d] transition-colors duration-300">
                        {place.name}
                      </h3>
                      <div className="flex items-center gap-3">
                        {place.tags && place.tags.length > 0 && (
                          <span className="text-[#ca993d]/60 text-xs md:text-sm font-light tracking-wider hidden sm:block">
                            {place.tags.join(" • ")}
                          </span>
                        )}
                        <Badge className="bg-[#ca993d]/10 text-[#ca993d] border border-[#ca993d]/30 px-4 py-1.5 shrink-0 text-xs md:text-sm font-medium tracking-widest uppercase w-fit">
                          {place.distance}
                        </Badge>
                      </div>
                    </div>

                    {(place.isOpenNow !== undefined || place.businessHours) && (
                      <div className="flex items-center gap-2 mb-5 mt-1">
                        {place.isOpenNow !== undefined && (
                          <>
                            <div
                              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                place.isOpenNow
                                  ? "bg-emerald-500/80"
                                  : "bg-rose-500/50"
                              }`}
                            />
                            <span
                              className={`text-xs font-light tracking-wide ${
                                place.isOpenNow
                                  ? "text-white/70"
                                  : "text-rose-300/50"
                              }`}
                            >
                              {place.isOpenNow ? "Aberto agora" : "Fechado"}
                            </span>
                          </>
                        )}
                        {place.businessHours && (
                          <>
                            <span className="text-white/20 text-xs select-none">
                              •
                            </span>
                            <span className="text-xs text-muted-foreground font-light tracking-wide">
                              {place.businessHours}
                            </span>
                          </>
                        )}
                      </div>
                    )}

                    <div className="w-16 h-[1px] bg-gradient-to-r from-[#ca993d] to-transparent mb-8" />

                    <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-10 md:max-w-[85%]">
                      {place.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:max-w-md">
                      <Button
                        asChild
                        className="flex-1 gap-2 bg-gradient-to-br from-[#f4d988] via-[#ca993d] to-[#f4d988] text-black border-none rounded-xl transition-all duration-300 text-xs sm:text-sm font-semibold uppercase tracking-wide shadow-md hover:shadow-lg hover:brightness-110 font-serif h-12 md:h-14"
                      >
                        <a
                          href={place.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Navigation size={16} />
                          Traçar Rota
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 gap-2 bg-transparent border-white/10 text-white/80 hover:bg-white/5 hover:border-[#ca993d]/40 hover:text-[#ca993d] transition-all duration-300 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wide font-serif h-12 md:h-14"
                      >
                        <a
                          href={place.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          Instagram
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryPage;
