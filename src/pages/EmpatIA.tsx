
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  BarChart3, 
  Brain, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Code, 
  Cpu, 
  DollarSign, 
  FileText, 
  ListChecks, 
  MessageCircle, 
  School, 
  Server, 
  Users 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Mermaid from "@/components/ui/mermaid";
import { QuestionSection } from "@/components/modelo/QuestionSection";
import { NovelaTechnicalStack } from "@/components/novela/sections/NovelaTechnicalStack";
import { NovelaSecuritySection } from "@/components/novela/sections/NovelaSecuritySection";

const EmpatIA = () => {
  const [activeTab, setActiveTab] = useState("proposta");
  const [openSection, setOpenSection] = useState<string | null>("tecnologias");

  const toggleSection = (sectionName: string) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header com logo e título */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 bg-yellow-50 rounded-full flex items-center justify-center">
              <Brain className="h-8 w-8 text-red-300" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">EmpatIA</h1>
              <p className="text-gray-500">Solução Digital para Bem-estar Docente</p>
            </div>
          </div>
          
          <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-md border border-blue-100">
            <p className="font-medium">Proposta Comercial - Ditho Soluções</p>
            <p className="text-sm">Data: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="proposta" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 w-full mb-8">
            <TabsTrigger value="proposta">Proposta</TabsTrigger>
            <TabsTrigger value="escopo">Escopo Técnico</TabsTrigger>
            <TabsTrigger value="cronograma">Cronograma</TabsTrigger>
            <TabsTrigger value="investimento">Investimento</TabsTrigger>
          </TabsList>
          
          <TabsContent value="proposta" className="space-y-8">
            {/* Resumo do Projeto */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-600 text-xl flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Resumo do Projeto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700">
                  A plataforma EmpatIA será um sistema inovador de acompanhamento de bem-estar docente, 
                  utilizando tecnologias de IA para analisar e identificar sinais precoces de estresse, 
                  ansiedade e outros fatores que podem afetar o desempenho e qualidade de vida dos professores.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Chat de anamnese interativo</p>
                        <p className="text-sm text-gray-600">Conversas estruturadas para coletar informações sobre o estado emocional e profissional dos professores.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Análise inteligente de respostas</p>
                        <p className="text-sm text-gray-600">Processamento das informações com ou sem IA para identificar padrões e sinais de alerta.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Armazenamento seguro de dados</p>
                        <p className="text-sm text-gray-600">Banco de dados protegido e em conformidade com as normas de privacidade para informações sensíveis.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Dashboard para gestores</p>
                        <p className="text-sm text-gray-600">Visualização clara de métricas e indicadores de bem-estar do corpo docente, permitindo intervenções preventivas.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Relatórios personalizados</p>
                        <p className="text-sm text-gray-600">Geração de insights e recomendações baseadas nos dados coletados para melhorar o ambiente escolar.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Sistema de alerta</p>
                        <p className="text-sm text-gray-600">Notificações automáticas para gestores quando forem detectados sinais críticos que requerem atenção.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Fluxo do Sistema */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-600 text-xl flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-blue-600" />
                  Fluxo Principal do Sistema
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
                  <Mermaid
                    chart={`
graph TD
    A[Professor] -->|Acessa| B[Chat de Anamnese]
    B -->|Responde perguntas| C[Sistema de Análise]
    C -->|Processa Respostas| D[Banco de Dados]
    D -->|Alimenta| E[Dashboard]
    
    E -->|Visualizado por| F[Gestores Educacionais]
    F -->|Tomam Ações| G[Intervenções de Apoio]
    G -->|Beneficia| A
    
    C -->|Detecta sinais críticos| H[Sistema de Alertas]
    H -->|Notifica| F
                    `}
                  />
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>
                    O diagrama acima ilustra o fluxo principal do sistema EmpatIA, onde professores interagem com o 
                    chat de anamnese, suas respostas são analisadas e os dados alimentam um dashboard para gestores 
                    educacionais, que podem então implementar medidas de apoio aos docentes.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Design System do EmpatIA */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-600 text-xl flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  Design System do EmpatIA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-700">
                    A identidade visual do EmpatIA foi cuidadosamente desenvolvida para transmitir acolhimento, 
                    tranquilidade e profissionalismo, utilizando cores que remetem a bem-estar e empatia.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                      <h3 className="font-medium text-lg mb-4 text-gray-800">Cor Principal</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-md bg-yellow-50 border border-yellow-100"></div>
                          <div>
                            <p className="font-medium">Amarelo Clarinho</p>
                            <p className="text-sm text-gray-600">Transmite acolhimento e atenção</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Aplicação:</p>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            <li>Fundos de tela</li>
                            <li>Áreas de destaque</li>
                            <li>Cards informativos</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                      <h3 className="font-medium text-lg mb-4 text-gray-800">Cor de Destaque</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-md bg-red-100 border border-red-200"></div>
                          <div>
                            <p className="font-medium">Vermelho Claro</p>
                            <p className="text-sm text-gray-600">Representa atenção e cuidado</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Aplicação:</p>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            <li>Botões de ação</li>
                            <li>Ícones importantes</li>
                            <li>Alertas e notificações</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-4">
                    <h3 className="font-medium text-lg mb-4">Exemplos de Aplicação</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium mb-2">Chat de Anamnese</h4>
                        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                          <div className="flex items-start gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                              <MessageCircle className="h-4 w-4 text-white" />
                            </div>
                            <div className="bg-white p-2 rounded-lg border border-gray-200">
                              <p className="text-sm">Como você tem se sentido em relação ao seu trabalho nas últimas semanas?</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-2 justify-end">
                            <div className="bg-red-50 p-2 rounded-lg border border-red-100">
                              <p className="text-sm">Tenho sentido um pouco de sobrecarga com as novas demandas do semestre.</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                              <Users className="h-4 w-4 text-gray-600" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium mb-2">Dashboard de Gestão</h4>
                        <div className="bg-white p-3 rounded-lg border border-gray-200">
                          <div className="mb-2">
                            <h5 className="text-sm font-medium">Indicadores de Bem-estar</h5>
                          </div>
                          
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Estresse</span>
                                <span>65%</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-red-300 h-2 rounded-full" style={{ width: "65%" }}></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Satisfação</span>
                                <span>40%</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-yellow-300 h-2 rounded-full" style={{ width: "40%" }}></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Engajamento</span>
                                <span>75%</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-green-300 h-2 rounded-full" style={{ width: "75%" }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="escopo" className="space-y-8">
            {/* Escopo Técnico */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-600 text-xl flex items-center gap-2">
                  <ListChecks className="h-5 w-5 text-blue-600" />
                  Etapas do Desenvolvimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700">
                  O desenvolvimento do EmpatIA será realizado em 5 etapas principais, seguindo uma 
                  metodologia ágil que permite ajustes e refinamentos ao longo do processo.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-2">Definição do Fluxo de Anamnese e da Lógica de IA</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium mb-1">O que será feito:</h5>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Definição das perguntas do chat (anamnese estruturada)</li>
                              <li>Decisão sobre o tipo de chat: interativo com IA ou formulário dinâmico</li>
                              <li>Criação do modelo de análise de respostas</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-1">Ferramentas e Tecnologias sugeridas:</h5>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Chatbot: Flow.ai, Dialogflow, Rasa ou próprio</li>
                              <li>Análise sem IA: Algoritmos de categorização</li>
                              <li>Análise com IA: OpenAI API (GPT-4), IBM Watson</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-2">Desenvolvimento do Chat de Anamnese</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium mb-1">O que será feito:</h5>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Criação da interface de conversação</li>
                              <li>Implementação da lógica de perguntas e respostas</li>
                              <li>Armazenamento seguro dos dados da conversa</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-1">Tecnologias sugeridas:</h5>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Front-end: React.js com Tailwind CSS</li>
                              <li>Back-end: Node.js ou Django</li>
                              <li>Banco de Dados: PostgreSQL ou MongoDB</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-2">Implementação da Análise de Dados da Conversa</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium mb-1">O que será feito:</h5>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Definição do método de interpretação das respostas</li>
                              <li>Transformação das respostas em indicadores visuais</li>
                              <li>Criação de um sistema de classificação automática</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-1">Tecnologias sugeridas:</h5>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Análise com IA: Modelos NLP (GPT-4-turbo ou Watson)</li>
                              <li>Análise com regras: Algoritmo de peso por palavras-chave</li>
                              <li>Banco de dados: Firebase ou PostgreSQL</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-2">Construção do Dashboard para os Gestores</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium mb-1">O que será feito:</h5>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Criação da interface do dashboard</li>
                              <li>Implementação de gráficos e métricas</li>
                              <li>Desenvolvimento de filtros customizáveis</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-1">Tecnologias sugeridas:</h5>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Front-end: React.js com Chart.js/D3.js</li>
                              <li>Back-end para dados: Node.js</li>
                              <li>Visualização: Grafana ou Data Studio</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-2">Testes, Validação e Ajustes Finais</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium mb-1">O que será feito:</h5>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Testes do fluxo de anamnese</li>
                              <li>Ajustes em análises imprecisas</li>
                              <li>Verificação da usabilidade do dashboard</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-1">Testes recomendados:</h5>
                            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                              <li>Testes unitários para o código</li>
                              <li>Testes de usabilidade com usuários reais</li>
                              <li>Simulações para validar a análise</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Stack Técnico */}
            <NovelaTechnicalStack 
              isOpen={openSection === "tecnologias"} 
              onToggle={() => toggleSection("tecnologias")} 
            />
            
            {/* Segurança */}
            <NovelaSecuritySection 
              isOpen={openSection === "seguranca"} 
              onToggle={() => toggleSection("seguranca")} 
            />
            
            {/* Arquitetura */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-600 text-xl flex items-center gap-2">
                  <Server className="h-5 w-5 text-blue-600" />
                  Arquitetura do Sistema
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
                  <Mermaid
                    chart={`
flowchart TD
    Client[Cliente/Browser] <-->|HTTP/HTTPS| FE[Frontend React]
    FE <-->|API Calls| BE[Backend API]
    BE <-->|Queries| DB[(Database)]
    BE <-->|Processamento NLP| AI[Serviço de IA]
    
    subgraph Frontend
    FE --> TelaLogin[Tela de Login]
    FE --> ChatAnamnese[Chat de Anamnese]
    FE --> Dashboard[Dashboard Gestores]
    end
    
    subgraph Backend
    BE --> AuthAPI[API de Autenticação]
    BE --> ChatAPI[API do Chat]
    BE --> AnalyticsAPI[API de Análise]
    end
    
    subgraph Database
    DB --> Users[Usuários]
    DB --> Conversations[Conversas]
    DB --> Analytics[Dados Analíticos]
    end
                    `}
                  />
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <p>
                    A arquitetura do EmpatIA é baseada em uma estrutura moderna e escalável, com separação clara entre frontend, 
                    backend e serviços de IA. O sistema utiliza APIs RESTful para comunicação entre as camadas, garantindo 
                    flexibilidade e facilidade de manutenção.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <School className="h-4 w-4 text-blue-600" />
                      Frontend
                    </h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      <li>Interface responsiva e acessível</li>
                      <li>Experiência intuitiva para professores</li>
                      <li>Dashboard interativo para gestores</li>
                      <li>Design baseado em componentes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Server className="h-4 w-4 text-blue-600" />
                      Backend
                    </h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      <li>APIs seguras e documentadas</li>
                      <li>Processamento e análise de dados</li>
                      <li>Integração com serviços de IA</li>
                      <li>Lógica de negócio centralizada</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Brain className="h-4 w-4 text-blue-600" />
                      Inteligência Artificial
                    </h4>
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                      <li>Análise de sentimento nas respostas</li>
                      <li>Identificação de padrões de estresse</li>
                      <li>Recomendações personalizadas</li>
                      <li>Processamento de linguagem natural</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="cronograma" className="space-y-8">
            {/* Cronograma */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-600 text-xl flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Cronograma de Desenvolvimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700">
                  O projeto EmpatIA será desenvolvido em um prazo total de 30 dias úteis, distribuídos 
                  entre as diferentes etapas conforme o cronograma abaixo:
                </p>
                
                <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
                  <Mermaid
                    chart={`
gantt
    title Cronograma EmpatIA - 30 dias úteis
    dateFormat  YYYY-MM-DD
    section Definição
    Definição do Fluxo e Lógica    :a1, 2024-04-01, 5d
    
    section Desenvolvimento
    Chat de Anamnese    :a2, after a1, 7d
    Análise de Dados    :a3, after a2, 5d
    Dashboard Gestores    :a4, after a3, 8d
    
    section Finalização
    Testes e Validação    :a5, after a4, 3d
    Ajustes Finais    :a6, after a5, 2d
                    `}
                  />
                </div>
                
                <div className="space-y-5 mt-4">
                  <h3 className="font-medium text-lg">Detalhamento das Fases</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <h4 className="font-medium">Fase 1: Definição - 5 dias úteis</h4>
                      </div>
                      
                      <div className="space-y-3 ml-7">
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Definição das perguntas de anamnese</li>
                          <li>Estruturação do fluxo de conversa</li>
                          <li>Escolha das tecnologias de IA</li>
                          <li>Modelagem inicial do banco de dados</li>
                          <li>Prototipação de baixa fidelidade</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <h4 className="font-medium">Fase 2: Chat de Anamnese - 7 dias úteis</h4>
                      </div>
                      
                      <div className="space-y-3 ml-7">
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Design da interface do chat</li>
                          <li>Desenvolvimento do front-end</li>
                          <li>Implementação das APIs de comunicação</li>
                          <li>Configuração do armazenamento de conversas</li>
                          <li>Testes iniciais de fluxo</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <h4 className="font-medium">Fase 3: Análise de Dados - 5 dias úteis</h4>
                      </div>
                      
                      <div className="space-y-3 ml-7">
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Implementação do sistema de análise</li>
                          <li>Integração com serviços de IA</li>
                          <li>Desenvolvimento de algoritmos de classificação</li>
                          <li>Criação de indicadores e métricas</li>
                          <li>Testes de precisão da análise</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <h4 className="font-medium">Fase 4: Dashboard - 8 dias úteis</h4>
                      </div>
                      
                      <div className="space-y-3 ml-7">
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Design da interface do dashboard</li>
                          <li>Implementação de gráficos e visualizações</li>
                          <li>Desenvolvimento de filtros e controles</li>
                          <li>Criação do sistema de alertas</li>
                          <li>Implementação de relatórios</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <h4 className="font-medium">Fase 5: Finalização - 5 dias úteis</h4>
                      </div>
                      
                      <div className="space-y-3 ml-7">
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Testes de integração do sistema completo</li>
                          <li>Validação com usuários finais</li>
                          <li>Ajustes baseados no feedback</li>
                          <li>Documentação do sistema</li>
                          <li>Preparação para lançamento</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center items-center gap-8 mt-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mx-auto mb-2">
                        <Calendar className="h-8 w-8 text-blue-600" />
                      </div>
                      <p className="font-medium">Início do Projeto</p>
                      <p className="text-sm text-gray-600">Imediato após aprovação</p>
                    </div>
                    
                    <div className="h-0.5 w-20 bg-gray-300"></div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mx-auto mb-2">
                        <BarChart3 className="h-8 w-8 text-blue-600" />
                      </div>
                      <p className="font-medium">Dashboard Funcional</p>
                      <p className="text-sm text-gray-600">Em 25 dias</p>
                    </div>
                    
                    <div className="h-0.5 w-20 bg-gray-300"></div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mx-auto mb-2">
                        <CheckCircle2 className="h-8 w-8 text-blue-600" />
                      </div>
                      <p className="font-medium">Entrega Final</p>
                      <p className="text-sm text-gray-600">Em 30 dias úteis</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="investimento" className="space-y-8">
            {/* Investimento */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-600 text-xl flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  Investimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Valor Total do Projeto</h3>
                    <p className="text-4xl font-bold text-blue-600 mt-2">R$ 15.000,00</p>
                    <p className="text-sm text-gray-600 mt-1">Prazo de entrega: 30 dias úteis</p>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-4">
                    <h4 className="font-medium text-center">Condições de Pagamento</h4>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mx-auto mb-3">
                          <span className="font-bold text-blue-600">1</span>
                        </div>
                        <div className="text-center">
                          <p className="font-medium">Entrada</p>
                          <p className="text-2xl font-bold text-blue-600 my-1">R$ 5.000,00</p>
                          <p className="text-sm text-gray-600">1/3 do valor total</p>
                          <p className="text-sm text-gray-600 mt-2">No início do projeto</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mx-auto mb-3">
                          <span className="font-bold text-blue-600">2</span>
                        </div>
                        <div className="text-center">
                          <p className="font-medium">Finalização</p>
                          <p className="text-2xl font-bold text-blue-600 my-1">R$ 10.000,00</p>
                          <p className="text-sm text-gray-600">2/3 do valor total</p>
                          <p className="text-sm text-gray-600 mt-2">Na entrega do projeto</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mt-6">
                  <h3 className="font-medium text-lg">O que está incluído no investimento</h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Sistema Completo</p>
                          <p className="text-sm text-gray-600">Chat de anamnese, análise de dados e dashboard para gestores.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Design Personalizado</p>
                          <p className="text-sm text-gray-600">Interface seguindo o design system definido para o EmpatIA.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Testes e Validação</p>
                          <p className="text-sm text-gray-600">Garantia de qualidade e funcionamento adequado do sistema.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Integração com IA</p>
                          <p className="text-sm text-gray-600">Análise inteligente das conversas e geração de insights.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Treinamento</p>
                          <p className="text-sm text-gray-600">Orientação para uso do sistema por gestores e professores.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Suporte Inicial</p>
                          <p className="text-sm text-gray-600">30 dias de suporte após a entrega do projeto.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
                  <h3 className="font-medium text-lg mb-3">Observações Importantes</h3>
                  
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                    <li>O valor não inclui serviços de hospedagem ou infraestrutura após a entrega do projeto.</li>
                    <li>Integrações com sistemas de terceiros não especificados nesta proposta podem gerar custos adicionais.</li>
                    <li>O prazo de 30 dias úteis pode sofrer alterações caso haja mudanças significativas nos requisitos.</li>
                    <li>A proposta tem validade de 15 dias a partir da data de apresentação.</li>
                    <li>Após o período de suporte inicial, serviços adicionais podem ser contratados separadamente.</li>
                  </ul>
                </div>
                
                <div className="flex justify-center mt-8">
                  <div className="bg-blue-600 text-white px-8 py-3 rounded-md text-center shadow-md hover:bg-blue-700 transition-colors cursor-pointer w-72">
                    <p className="font-medium">Aceitar Proposta</p>
                  </div>
                </div>
                
                <div className="text-center text-sm text-gray-600 mt-2">
                  <p>Ao aceitar a proposta, um contrato formal será enviado para assinatura.</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Sobre a Ditho Soluções */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-600 text-xl flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Sobre a Ditho Soluções
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  A Ditho Soluções é especializada em desenvolvimento de sistemas web, aplicativos e 
                  soluções digitais com foco em inovação e resultados. Nossa equipe trabalha com metodologias 
                  ágeis para entregar produtos de alta qualidade que atendem precisamente às necessidades de nossos clientes.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                  <h4 className="font-medium mb-2">Nossa Abordagem</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    <li>Desenvolvimento ágil com foco em entregas contínuas</li>
                    <li>Comunicação transparente durante todo o projeto</li>
                    <li>Soluções personalizadas para cada cliente</li>
                    <li>Inovação constante em tecnologias e processos</li>
                    <li>Compromisso com prazos e qualidade</li>
                  </ul>
                </div>
                
                <div className="text-center mt-6">
                  <p className="text-gray-700">
                    Estamos prontos para transformar o EmpatIA em realidade, oferecendo uma solução 
                    inovadora para o acompanhamento do bem-estar docente que trará benefícios significativos 
                    para instituições de ensino e seus professores.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default EmpatIA;
