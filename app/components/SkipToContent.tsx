"use client";
export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:bg-primary focus:text-primary-foreground focus:px-6 focus:py-3 focus:rounded-lg focus:shadow-lg transition-all duration-200"
      style={{ fontSize: "1rem", fontWeight: 500 }}
    >
      Pular para o conteúdo principal
    </a>
  );
}
