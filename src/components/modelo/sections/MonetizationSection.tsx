
import { DollarSign } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import { Card } from "@/components/ui/card";

interface MonetizationSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MonetizationSection = ({ isOpen, onToggle }: MonetizationSectionProps) => {
  return (
    <QuestionSection
      title="7. Modelo de Negócio e Monetização"
      description="Estratégias de monetização e análise de mercado"
      icon={DollarSign}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-8">
        {/* Modelo de Negócio */}
        <div>
          <h3 className="text-lg font-semibold mb-4">7.1 Modelo de Negócio</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Proposta de Valor</h4>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={3}
                placeholder="Descreva a proposta de valor única do projeto..."
              />
            </div>
            <div>
              <h4 className="font-medium mb-2">Mercado-Alvo</h4>
              <textarea
                className="w-full p-2 border rounded-md"
                rows={3}
                placeholder="Defina o mercado-alvo e seu tamanho..."
              />
            </div>
          </div>
        </div>

        {/* Análise Competitiva */}
        <div>
          <h3 className="text-lg font-semibold mb-4">7.2 Análise Competitiva</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">Concorrente</div>
            <div className="font-medium">Diferenciais</div>
            <div className="font-medium">Nossa Vantagem</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <input type="text" className="p-2 border rounded-md" placeholder="Nome do concorrente..." />
            <input type="text" className="p-2 border rounded-md" placeholder="Principais diferenciais..." />
            <input type="text" className="p-2 border rounded-md" placeholder="Nossa vantagem competitiva..." />
          </div>
        </div>

        {/* Estratégia de Monetização */}
        <div>
          <h3 className="text-lg font-semibold mb-4">7.3 Estratégia de Monetização</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Fontes de Receita</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input type="text" className="p-2 border rounded-md flex-grow" placeholder="Fonte de receita..." />
                  <select className="p-2 border rounded-md w-32">
                    <option value="recorrente">Recorrente</option>
                    <option value="unica">Única</option>
                  </select>
                  <input type="text" className="p-2 border rounded-md w-32" placeholder="Valor (R$)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
