
import { DollarSign } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import { Card } from "@/components/ui/card";

interface MonetizationSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MonetizationSection = ({ isOpen, onToggle }: MonetizationSectionProps) => {
  const monetizationModel = {
    revenue: [
      "Comissão sobre transações",
      "Assinaturas premium",
      "Taxa sobre mentorias",
      "Serviços para empresas"
    ],
    pricing: [
      "Comissão por transação",
      "Planos de assinatura (incluindo Plano Pro)"
    ],
    acquisition: [
      "Marketing digital",
      "Indicações",
      "Parcerias estratégicas"
    ]
  };

  return (
    <QuestionSection
      title="7. Modelo de Negócio e Monetização"
      description="Estratégias de monetização e análise de mercado"
      icon={DollarSign}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">7.1 Modelo de Negócio</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Fontes de Receita</h4>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={4}
                defaultValue={monetizationModel.revenue.join("\n")}
              />
            </div>
            <div>
              <h4 className="font-medium mb-2">Modelo de Precificação</h4>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={4}
                defaultValue={monetizationModel.pricing.join("\n")}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">7.2 Aquisição de Usuários</h3>
          <div className="space-y-2">
            {monetizationModel.acquisition.map((strategy, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-2 border rounded-md"
                defaultValue={strategy}
              />
            ))}
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
