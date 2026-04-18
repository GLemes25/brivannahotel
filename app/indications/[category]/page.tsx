"use client";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { CATEGORIES } from "@/app/data/indications/categories";
import indicationsData from "@/app/data/indications/indications.json";
import { ArrowLeft, ExternalLink, Map } from "lucide-react";
import { motion } from "motion/react";
import { useParams, useRouter } from "next/navigation";

type Indication = {
  id: string;
  name: string;
  categorySlug: string;
  description: string;
  distance: string;
  instagramUrl: string;
  mapUrl: string;
};

const CategoryPage = () => {
  const params = useParams();
  const router = useRouter();
  const categorySlug = params.category as string;

  const categoryConfig = CATEGORIES.find((c) => c.slug === categorySlug);
  const places = (indicationsData as Indication[]).filter(
    (p) => p.categorySlug === categorySlug,
  );
  const handleBack = () => {
    // Redirecionamento limpo e direto, ignorando o histórico falho de hashes do Next.js
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ca993d]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center mb-16"
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
            <div className="w-12 h-12   flex items-center justify-center mb-4 ">
              <CategoryIcon size={50} className="text-[#ca993d]" />
            </div>
            <h2 className="text-[#ca993d] uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold mb-2 font-serif">
              Nossas Recomendações
            </h2>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground tracking-wide">
              {categoryConfig.label}
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {places.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="bg-card/10 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col gap-5 hover:border-[#ca993d]/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(202,153,61,0.08)] group"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-xl text-foreground tracking-wide leading-tight group-hover:text-[#ca993d] transition-colors duration-300">
                  {place.name}
                </h3>
                <Badge className="bg-[#ca993d]/10 text-[#ca993d] border border-[#ca993d]/20 px-3 py-1 shrink-0 text-xs font-medium tracking-wide">
                  {place.distance}
                </Badge>
              </div>

              <p className="text-muted-foreground text-sm font-light leading-relaxed flex-1">
                {place.description}
              </p>

              <div className="flex gap-3 mt-4 pt-5 border-t border-white/5">
                <Button
                  asChild
                  className="flex-1 gap-2 bg-primary text-black border-none rounded-xl transition-all duration-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wide shadow-md hover:shadow-lg hover:brightness-110 font-serif h-11"
                >
                  <a
                    href={place.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Map size={15} />
                    Rota
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 gap-2 bg-transparent border-white/10 text-white/80 hover:bg-white/5 hover:border-[#ca993d]/40 hover:text-[#ca993d] transition-all duration-300 rounded-xl text-[11px] sm:text-xs font-semibold uppercase tracking-wide font-serif h-11"
                >
                  <a
                    href={place.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={15} />
                    Instagram
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryPage;
