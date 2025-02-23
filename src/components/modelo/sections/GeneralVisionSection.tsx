import { Eye } from "lucide-react";
import { QuestionSection } from "../QuestionSection";
import Mermaid from "@/components/ui/mermaid";

interface GeneralVisionSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const GeneralVisionSection = ({ isOpen, onToggle }: GeneralVisionSectionProps) => {
  const ecosystemChart = `
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#006D77', 'secondaryColor': '#83c5be', 'tertiaryColor': '#FF8533', 'primaryTextColor': '#221F26' }}}%%

graph TB
    subgraph Marketplace["🛍️ Marketplace"]
        style Marketplace fill:#006D77,color:#fff
        Services[/"Serviços Profissionais"/]
        Mentoring[/"Mentorias"/]
        Knowledge[/"Conhecimento"/]
    end

    subgraph ValueProposition["💎 Proposta de Valor"]
        style ValueProposition fill:#83c5be,color:#221F26
        Connection["Conexões Inteligentes"]
        Monetization["Monetização de Conhecimento"]
        Security["Ambiente Seguro"]
        Integration["Integração Completa"]
    end

    subgraph Stakeholders["👥 Stakeholders"]
        style Stakeholders fill:#FF8533,color:#221F26
        Professionals["Profissionais"]
        Clients["Clientes"]
        Mentors["Mentores"]
        Partners["Parceiros"]
    end

    subgraph Metrics["📊 KPIs"]
        style Metrics fill:#006D77,color:#fff
        Growth["Crescimento"]
        Engagement["Engajamento"]
        Revenue["Receita"]
        Quality["Qualidade"]
    end

    Professionals --> Services
    Mentors --> Mentoring
    Services & Mentoring --> Knowledge
    Knowledge --> Monetization
    Monetization --> Revenue
    Connection --> Engagement
    Security & Integration --> Quality
    Clients --> Growth
    Partners --> Growth
`;

  return (
    <QuestionSection
      title="Visão Geral do Projeto"
      description="Visão estratégica e sistêmica do Hello Help"
      icon={Eye}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="space-y-8">
        {/* Proposta de Valor e Diferenciação */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-primary mb-4">💎 Proposta de Valor</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Diferenciais Competitivos</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Matching inteligente entre oferta e demanda</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Ambiente integrado de networking e negócios</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Sistema de mentorias com certificação</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Garantia de pagamento e qualidade</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Posicionamento</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Marketplace premium de conhecimento</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Hub de desenvolvimento profissional</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Rede de networking qualificada</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Plataforma de monetização de expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ecossistema */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">🌐 Ecossistema Hello Help</h3>
          <div className="bg-white p-4 rounded-lg shadow-inner">
            <Mermaid chart={ecosystemChart} />
          </div>
        </div>

        {/* Nova Jornada do Usuário */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">🚀 Jornadas do Usuário</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Jornada do Profissional */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-medium text-primary mb-4 flex items-center gap-2">
                <span className="text-xl">👩‍💼</span> Profissional
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h5 className="font-medium">Cadastro</h5>
                    <p className="text-sm text-gray-600">Criação de perfil profissional com dados e certificações</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h5 className="font-medium">Configuração</h5>
                    <p className="text-sm text-gray-600">Definição de serviços, preços e disponibilidade</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h5 className="font-medium">Engajamento</h5>
                    <p className="text-sm text-gray-600">Participação em salas temáticas e networking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h5 className="font-medium">Monetização</h5>
                    <p className="text-sm text-gray-600">Prestação de serviços e recebimento de pagamentos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                  <div>
                    <h5 className="font-medium">Crescimento</h5>
                    <p className="text-sm text-gray-600">Análise de métricas e expansão de serviços</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Jornada do Cliente */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-medium text-primary mb-4 flex items-center gap-2">
                <span className="text-xl">🤝</span> Cliente
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h5 className="font-medium">Registro</h5>
                    <p className="text-sm text-gray-600">Criação de conta com necessidades específicas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h5 className="font-medium">Busca</h5>
                    <p className="text-sm text-gray-600">Exploração de profissionais e serviços disponíveis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h5 className="font-medium">Contratação</h5>
                    <p className="text-sm text-gray-600">Seleção e negociação com profissionais</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h5 className="font-medium">Experiência</h5>
                    <p className="text-sm text-gray-600">Recebimento do serviço contratado</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                  <div>
                    <h5 className="font-medium">Avaliação</h5>
                    <p className="text-sm text-gray-600">Feedback e recomendações do serviço</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Jornada do Mentor */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-medium text-primary mb-4 flex items-center gap-2">
                <span className="text-xl">👨‍🏫</span> Mentor
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-400 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h5 className="font-medium">Qualificação</h5>
                    <p className="text-sm text-gray-600">Validação de experiência e especialidades</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-400 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h5 className="font-medium">Programação</h5>
                    <p className="text-sm text-gray-600">Criação de agenda e formato das mentorias</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-400 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h5 className="font-medium">Mentorias</h5>
                    <p className="text-sm text-gray-600">Condução das sessões de mentoria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-400 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h5 className="font-medium">Conteúdo</h5>
                    <p className="text-sm text-gray-600">Criação de material complementar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-400 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                  <div>
                    <h5 className="font-medium">Certificação</h5>
                    <p className="text-sm text-gray-600">Emissão de certificados e avaliações</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Métricas e KPIs */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-primary mb-4">📊 Métricas Principais</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-primary/5 rounded-lg">
              <h4 className="font-medium mb-2 text-primary">Crescimento</h4>
              <ul className="text-sm space-y-1">
                <li>• Novos usuários</li>
                <li>• Taxa de retenção</li>
                <li>• Expansão de mercado</li>
              </ul>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg">
              <h4 className="font-medium mb-2 text-primary">Engajamento</h4>
              <ul className="text-sm space-y-1">
                <li>• Sessões por usuário</li>
                <li>• Tempo na plataforma</li>
                <li>• Taxa de conversão</li>
              </ul>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg">
              <h4 className="font-medium mb-2 text-primary">Monetização</h4>
              <ul className="text-sm space-y-1">
                <li>• GMV total</li>
                <li>• Ticket médio</li>
                <li>• Receita por usuário</li>
              </ul>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg">
              <h4 className="font-medium mb-2 text-primary">Qualidade</h4>
              <ul className="text-sm space-y-1">
                <li>• NPS</li>
                <li>• Taxa de sucesso</li>
                <li>• Avaliações positivas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Arquitetura de Alto Nível */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-primary mb-4">🏗️ Arquitetura de Alto Nível</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-primary">Frontend</h4>
              <ul className="text-sm space-y-1 bg-gray-50 p-3 rounded">
                <li>• Web App React</li>
                <li>• Mobile PWA</li>
                <li>• Design System</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-primary">Backend</h4>
              <ul className="text-sm space-y-1 bg-gray-50 p-3 rounded">
                <li>• API RESTful</li>
                <li>• WebSocket</li>
                <li>• Microserviços</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-primary">Infraestrutura</h4>
              <ul className="text-sm space-y-1 bg-gray-50 p-3 rounded">
                <li>• Cloud Native</li>
                <li>• Containers</li>
                <li>• CDN Global</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-primary">Integrações</h4>
              <ul className="text-sm space-y-1 bg-gray-50 p-3 rounded">
                <li>• Pagamentos</li>
                <li>• Analytics</li>
                <li>• Storage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </QuestionSection>
  );
};
