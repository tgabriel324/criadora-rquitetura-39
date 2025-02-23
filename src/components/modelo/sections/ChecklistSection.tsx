import { CheckSquare } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import { AuthSection } from "./checklist/AuthSection";
import { ClientSection } from "./checklist/ClientSection";

interface ChecklistSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ChecklistSection = ({ isOpen, onToggle }: ChecklistSectionProps) => {
  return (
    <QuestionSection
      title="Checklist do Sistema"
      description="Lista completa de áreas, telas e funcionalidades"
      icon={CheckSquare}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-8">
        <AuthSection />
        <ClientSection />
        {/* Demais seções serão adicionadas aqui */}
      </div>
    </QuestionSection>
  );
};
