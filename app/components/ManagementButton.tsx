import { Lock } from "lucide-react";

const ManagementButton = () => {
  return (
    <a
      href="https://sistema.brivannahotel.com.br"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Gestão - Portal de Gestão"
      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-[13px] font-normal"
    >
      <Lock size={16} />
      <span>Gestão</span>
    </a>
  );
};
