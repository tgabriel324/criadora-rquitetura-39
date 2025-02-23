
import { GitBranch } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface FlowsSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const FlowsSection = ({ isOpen, onToggle }: FlowsSectionProps) => {
  return (
    <QuestionSection
      title="6. Fluxos e Narrativas"
      description="Fluxos principais do sistema"
      icon={GitBranch}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
        <pre className="mermaid text-sm">
          {`
graph TD
    %% Fluxos de Entrada
    subgraph Entrada["Fluxos de Entrada"]
        Marketing["Marketing Digital"] --> Landing
        Indicacao["Indicação"] --> Landing
        Landing --> Cadastro
        Cadastro --> |"Perfil A"| OnboardingA["Onboarding A"]
        Cadastro --> |"Perfil B"| OnboardingB["Onboarding B"]
        OnboardingA --> ConfigInicial["Configuração Inicial"]
        OnboardingB --> Descoberta["Descoberta"]
    end

    %% Jornada Principal A
    subgraph Perfil_A["Jornada Principal A"]
        ConfigInicial --> Criacao["Criação"]
        Criacao --> Publicacao["Publicação"]
        Publicacao --> |"Gera"| Receita["Receita"]
        Receita --> |"Gera"| Metricas["Métricas"]
        Metricas --> |"Influencia"| NovoConteudo["Novo Conteudo"]
    end

    %% Jornada Principal B
    subgraph Perfil_B["Jornada Principal B"]
        Descoberta --> Consumo["Consumo"]
        Consumo --> Biblioteca["Biblioteca"]
        Biblioteca --> Interacao["Interação"]
        Interacao --> |"Gera"| Compartilhamento["Compartilhamento"]
        Compartilhamento --> |"Influencia"| Descoberta
    end
          `}
        </pre>
      </div>
    </QuestionSection>
  );
};
