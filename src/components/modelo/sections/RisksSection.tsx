
import { AlertTriangle } from "lucide-react";
import { QuestionSection } from "../QuestionSection";

interface RisksSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const RisksSection = ({ isOpen, onToggle }: RisksSectionProps) => {
  return (
    <QuestionSection
      title="9. Riscos e Mitigação"
      description="Identificação e tratamento de riscos"
      icon={AlertTriangle}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="font-semibold">Risco</div>
          <div className="font-semibold">Impacto</div>
          <div className="font-semibold">Mitigação</div>
        </div>
        {[1, 2, 3].map((index) => (
          <div key={index} className="grid grid-cols-3 gap-4">
            <input type="text" className="p-2 border rounded-md" placeholder="Descreva o risco..." />
            <select className="p-2 border rounded-md">
              <option value="alto">Alto</option>
              <option value="medio">Médio</option>
              <option value="baixo">Baixo</option>
            </select>
            <input type="text" className="p-2 border rounded-md" placeholder="Estratégia de mitigação..." />
          </div>
        ))}
      </div>
    </QuestionSection>
  );
};
