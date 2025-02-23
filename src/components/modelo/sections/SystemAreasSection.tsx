
import { Grid } from "lucide-react";
import { QuestionSection } from "../QuestionSection";

interface SystemAreasSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const SystemAreasSection = ({ isOpen, onToggle }: SystemAreasSectionProps) => {
  const areas = [
    {
      name: "Dashboard",
      features: ["Visão geral", "Métricas", "Notificações", "Atividades recentes"]
    },
    {
      name: "Marketplace",
      features: ["Listagem de serviços", "Busca avançada", "Filtros", "Categorias"]
    },
    {
      name: "Mentorias",
      features: ["Agendamento", "Salas virtuais", "Material de apoio", "Certificados"]
    },
    {
      name: "Financeiro",
      features: ["Pagamentos", "Relatórios", "Comissões", "Extratos"]
    }
  ];

  return (
    <QuestionSection
      title="3. Áreas do Sistema"
      description="Detalhamento das áreas principais"
      icon={Grid}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {areas.map((area, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold text-primary mb-3">{area.name}</h3>
            <ul className="space-y-2">
              {area.features.map((feature, fIndex) => (
                <li key={fIndex} className="text-sm text-gray-600 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary/20 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </QuestionSection>
  );
};
