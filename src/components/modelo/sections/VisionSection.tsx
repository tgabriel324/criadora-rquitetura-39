
import { Layers } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import { QuestionInput } from "../QuestionInput";
import { questions } from "../data/questions";

interface VisionSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const VisionSection = ({ isOpen, onToggle }: VisionSectionProps) => {
  return (
    <QuestionSection
      title="1. Visão Geral do Projeto"
      description="Definição clara dos objetivos e escopo"
      icon={Layers}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-4">
        {questions.vision.map((question, index) => (
          <QuestionInput key={index} question={question} />
        ))}
      </div>
    </QuestionSection>
  );
};
