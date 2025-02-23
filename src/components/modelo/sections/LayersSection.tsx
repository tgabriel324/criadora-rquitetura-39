
import { type FC } from "react";
import { Layers } from "lucide-react";
import { QuestionSection } from "../QuestionSection";

interface LayersSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const LayersSection: FC<LayersSectionProps> = ({ isOpen, onToggle }) => {
  const layers = [
    {
      level: 1,
      name: "Fundação",
      description: "Base estrutural do sistema",
      color: "bg-blue-50 border-blue-200",
      textColor: "text-blue-800",
      items: [
        "Arquitetura base do projeto",
        "Sistema de autenticação e autorização",
        "Layout base responsivo",
        "Componentes base UI/UX",
        "Setup de banco de dados",
        "Estrutura de API",
        "Sistema de rotas",
        "Gerenciamento de estado global"
      ]
    },
    {
      level: 2,
      name: "Core Features",
      description: "Funcionalidades essenciais",
      color: "bg-green-50 border-green-200",
      textColor: "text-green-800",
      items: [
        "Cadastro e perfil de usuários",
        "Dashboard básico",
        "Sistema de mensagens simples",
        "Catálogo de serviços",
        "Agendamento básico",
        "Sistema de pagamentos",
        "Notificações básicas",
        "Módulo de configurações"
      ]
    },
    {
      level: 3,
      name: "Expansão",
      description: "Recursos avançados",
      color: "bg-purple-50 border-purple-200",
      textColor: "text-purple-800",
      items: [
        "Sistema avançado de mentorias",
        "Chat em tempo real",
        "Reviews e avaliações",
        "Sistema de gamificação",
        "Marketplace completo",
        "Analytics e métricas",
        "Integração com calendários",
        "Sistema de affiliate"
      ]
    },
    {
      level: 4,
      name: "Otimização",
      description: "Melhorias e automações",
      color: "bg-orange-50 border-orange-200",
      textColor: "text-orange-800",
      items: [
        "SEO e performance",
        "Sistema de cache",
        "Otimização de queries",
        "Automações avançadas",
        "Machine Learning",
        "Sistema de recomendação",
        "Backup e redundância",
        "Escalabilidade horizontal"
      ]
    },
    {
      level: 5,
      name: "Escalabilidade",
      description: "Expansão do ecossistema",
      color: "bg-red-50 border-red-200",
      textColor: "text-red-800",
      items: [
        "App mobile nativo",
        "API pública",
        "Sistema de plugins",
        "Multi-idiomas",
        "Multi-moedas",
        "White label",
        "Integração com ERPs",
        "Sistema de franquias"
      ]
    }
  ];

  return (
    <QuestionSection
      title="2. Camadas do Sistema"
      description="Estrutura em camadas para desenvolvimento progressivo"
      icon={Layers}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-6">
        {layers.map((layer) => (
          <div 
            key={layer.level}
            className={`rounded-lg border p-4 ${layer.color}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className={`font-semibold ${layer.textColor}`}>
                  Camada {layer.level}: {layer.name}
                </h3>
                <p className="text-sm text-gray-600">{layer.description}</p>
              </div>
              <span className={`text-2xl font-bold ${layer.textColor}`}>
                L{layer.level}
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-3">
              {layer.items.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2"
                >
                  <div className={`w-2 h-2 rounded-full ${layer.textColor.replace('text', 'bg')}`} />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gray-50 p-4 rounded-lg mt-6">
          <h4 className="font-semibold text-gray-700 mb-2">Observações Importantes:</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full" />
              Cada camada deve estar estável antes de avançar para a próxima
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full" />
              Testes e documentação devem ser feitos em cada camada
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full" />
              Feedback dos usuários deve ser coletado progressivamente
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full" />
              Segurança e performance são prioridades em todas as camadas
            </li>
          </ul>
        </div>
      </div>
    </QuestionSection>
  );
};

export default LayersSection;
