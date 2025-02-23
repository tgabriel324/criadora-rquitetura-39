
import { Database } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface DatabaseSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const DatabaseSection = ({ isOpen, onToggle }: DatabaseSectionProps) => {
  return (
    <QuestionSection
      title="4. Estrutura de Dados"
      description="Modelagem do Banco de Dados"
      icon={Database}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
        <pre className="mermaid text-sm">
          {`
erDiagram
    USUARIO ||--o{ PERFIL : possui
    USUARIO ||--o{ PEDIDO : faz
    PEDIDO ||--|{ ITEM : contem
    ITEM }|--|| PRODUTO : referencia
          `}
        </pre>
      </div>
    </QuestionSection>
  );
};
