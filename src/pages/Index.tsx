
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import Mermaid from "@/components/ui/mermaid";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    overview: true,
    users: false,
    features: false,
    monetization: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const projects = [
    {
      title: "SaúdeJá",
      description: "Plataforma Integrada de Bem-estar",
      route: "/"
    },
    {
      title: "Projeto Bruno",
      description: "Dashboard e Funcionalidades",
      route: "/bruno"
    },
    {
      title: "Hello Help",
      description: "Sistema de Ajuda e Suporte",
      route: "/hello-help"
    }
  ];

  const models = [
    {
      title: "Modelo 1",
      description: "Documentação Completa de Projeto",
      route: "/"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Barra de navegação com dropdowns */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
          <div> {/* Menu Projetos à esquerda */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  Projetos
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {projects.map((project) => (
                  <DropdownMenuItem
                    key={project.route}
                    onClick={() => navigate(project.route)}
                    className="flex flex-col items-start"
                  >
                    <span className="font-medium">{project.title}</span>
                    <span className="text-sm text-gray-500">{project.description}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div> {/* Menu Modelos à direita */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  Modelos
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {models.map((model) => (
                  <DropdownMenuItem
                    key={model.route}
                    onClick={() => navigate(model.route)}
                    className="flex flex-col items-start"
                  >
                    <span className="font-medium">{model.title}</span>
                    <span className="text-sm text-gray-500">{model.description}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal com padding-top para compensar a navbar fixa */}
      <div className="pt-16 p-6">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">SaúdeJá</h1>
          <p className="text-xl text-gray-600">Plataforma Integrada de Bem-estar</p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Visão Geral do Projeto</CardTitle>
              <CardDescription>
                Uma plataforma completa que integra saúde mental, física e nutricional
            </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="text-gray-600">
                  O SaúdeJá é uma plataforma inovadora que conecta usuários a profissionais de saúde,
                  oferecendo uma experiência integrada de bem-estar através de consultas online,
                  acompanhamento personalizado e marketplace de produtos relacionados à saúde.
              </p>
              </div>
            </CardContent>
          </Card>

          {/* Diagrama Organizacional */}
          <Card>
            <CardHeader>
              <CardTitle>Estrutura Organizacional Detalhada</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
                <Mermaid
                  chart={`
flowchart LR
    SaudeJa((SaúdeJá))

    %% Áreas Principais
    AreaPublica[Área Pública]
    AreaUsuario[Área do Usuário]
    AreaPro[Área Profissional]
    AreaAdmin[Área Administrativa]
    Market[Marketplace]

    %% Conexões Principais
    SaudeJa --> AreaPublica & AreaUsuario & AreaPro & AreaAdmin & Market

    %% Área Pública Detalhes
    Landing[Landing Page]
    Blog[Blog]
    Cadastro[Cadastro/Login]
    Precos[Preços/Planos]
    
    AreaPublica --> Landing & Blog & Cadastro & Precos
    Landing --> |Acesso| Cadastro
    Blog --> |Conteúdo| Landing
    Precos --> |Upgrade| AreaUsuario

    %% Área Usuário Detalhes
    Dashboard[Dashboard]
    Consultas[Consultas]
    Tracking[Tracking]
    Comunidade[Comunidade]

    AreaUsuario --> Dashboard & Consultas & Tracking & Comunidade
    Dashboard --> |Agenda| Consultas
    Tracking --> |Métricas| Dashboard
    Comunidade --> |Interação| Consultas

    %% Área Profissional Detalhes
    DashPro[Dashboard Pro]
    Pacientes[Pacientes]
    Agenda[Agenda]
    FinanceiroPro[Financeiro Pro]

    AreaPro --> DashPro & Pacientes & Agenda & FinanceiroPro
    Pacientes --> |Histórico| Agenda
    DashPro --> |Métricas| FinanceiroPro

    %% Área Admin Detalhes
    GestaoUsers[Gestão Usuários]
    Financeiro[Financeiro]
    Conteudo[Conteúdo]
    Suporte[Suporte]

    AreaAdmin --> GestaoUsers & Financeiro & Conteudo & Suporte
    GestaoUsers --> |Permissões| AreaUsuario & AreaPro
    Conteudo --> |Publicação| Blog
    Financeiro --> |Pagamentos| Market

    %% Marketplace Detalhes
    Produtos[Produtos]
    Vendedores[Vendedores]
    Pedidos[Pedidos]
    Analytics[Analytics]

    Market --> Produtos & Vendedores & Pedidos & Analytics
    Pedidos --> |Dados| Analytics
    Vendedores --> |Catálogo| Produtos
    Produtos --> |Compra| Pedidos
                `}
                />
              </div>
              <div className="mt-4 text-gray-600">
                <p className="text-sm">
                  Este diagrama ilustra a estrutura completa da plataforma SaúdeJá, demonstrando como as diferentes áreas se 
                  interconectam. A plataforma é dividida em cinco áreas principais: Pública, Usuário, Profissional, 
                  Administrativa e Marketplace. Cada área possui seus próprios módulos e funcionalidades específicas, com 
                  fluxos de dados e interações claramente definidos entre eles.
              </p>
              </div>
            </CardContent>
          </Card>

          <Collapsible open={openSections.users} onOpenChange={() => toggleSection("users")}>
            <Card>
              <CollapsibleTrigger className="w-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Tipos de Usuários
                    <span className="text-sm">{openSections.users ? "▼" : "▶"}</span>
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Usuário Final</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Acesso gratuito (limitado)</li>
                        <li>Plano Essencial (R$49/mês)</li>
                        <li>Plano Plus (R$99/mês)</li>
                        <li>Plano Premium (R$199/mês)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Profissionais de Saúde</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Médicos e Especialistas</li>
                        <li>Nutricionistas</li>
                        <li>Psicólogos/Terapeutas</li>
                        <li>Personal Trainers</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Vendedores Marketplace</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Lojas de produtos naturais</li>
                        <li>Fabricantes de suplementos</li>
                        <li>Equipamentos fitness</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          <Collapsible open={openSections.features} onOpenChange={() => toggleSection("features")}>
            <Card>
              <CollapsibleTrigger className="w-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Funcionalidades Principais
                    <span className="text-sm">{openSections.features ? "▼" : "▶"}</span>
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-8">
                    {/* Área do Usuário */}
                    <div>
                      <h3 className="font-semibold text-xl mb-4 text-primary">Área do Usuário (/dashboard)</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-lg mb-2">Consultas Online (/consultas)</h4>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                              <li>Videochamadas em tempo real</li>
                              <li>Chat integrado com profissionais</li>
                              <li>Compartilhamento de documentos</li>
                              <li>Histórico de atendimentos</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-2">Tracking de Saúde (/tracking)</h4>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                              <li>Medidas físicas e sinais vitais</li>
                              <li>Diário de humor e bem-estar</li>
                              <li>Registro de alimentação</li>
                              <li>Log de exercícios e sono</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-lg mb-2">Comunidade (/comunidade)</h4>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                              <li>Grupos de apoio temáticos</li>
                              <li>Desafios e metas coletivas</li>
                              <li>Fórum de discussão</li>
                              <li>Eventos online</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-2">Marketplace (/loja)</h4>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                              <li>Produtos recomendados</li>
                              <li>Suplementos e vitaminas</li>
                              <li>Equipamentos fitness</li>
                              <li>Produtos naturais</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Área Profissional */}
                    <div>
                      <h3 className="font-semibold text-xl mb-4 text-primary">Área Profissional (/pro)</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-lg mb-2">Gestão de Pacientes (/pro/pacientes)</h4>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                              <li>Prontuário digital</li>
                              <li>Histórico de atendimentos</li>
                              <li>Evolução e métricas</li>
                              <li>Prescrições digitais</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-2">Agenda (/pro/agenda)</h4>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                              <li>Configuração de horários</li>
                              <li>Gestão de consultas</li>
                              <li>Notificações automáticas</li>
                              <li>Reagendamentos</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-lg mb-2">Financeiro (/pro/financeiro)</h4>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                              <li>Controle de pagamentos</li>
                              <li>Relatórios de faturamento</li>
                              <li>Split de pagamentos</li>
                              <li>Notas fiscais</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-2">Analytics (/pro/analytics)</h4>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                              <li>Métricas de atendimento</li>
                              <li>Taxa de conversão</li>
                              <li>Satisfação dos pacientes</li>
                              <li>Insights e tendências</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Área Administrativa */}
                    <div>
                      <h3 className="font-semibold text-xl mb-4 text-primary">Área Administrativa (/admin)</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-lg mb-2">Gestão de Usuários (/admin/users)</h4>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                              <li>Controle de acessos</li>
                              <li>Verificação profissional</li>
                              <li>Moderação de conteúdo</li>
                              <li>Suporte ao usuário</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-2">Conteúdo (/admin/content)</h4>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                              <li>Gestão do blog</li>
                              <li>Newsletter</li>
                              <li>Materiais educativos</li>
                              <li>FAQ e ajuda</li>
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-lg mb-2">Marketplace Admin (/admin/market)</h4>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                              <li>Aprovação de vendedores</li>
                              <li>Gestão de produtos</li>
                              <li>Controle de qualidade</li>
                              <li>Análise de vendas</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-2">Sistema (/admin/system)</h4>
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                              <li>Configurações gerais</li>
                              <li>Logs do sistema</li>
                              <li>Backup e segurança</li>
                              <li>Integrações</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Conexões entre Funcionalidades */}
                    <div>
                      <h3 className="font-semibold text-xl mb-4 text-primary">Conexões entre Funcionalidades</h3>
                      <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
                        <Mermaid
                          chart={`
graph LR
    %% Área do Usuário
    Dashboard["/dashboard"] --> Consultas["/consultas"]
    Dashboard --> Tracking["/tracking"]
    Dashboard --> Comunidade["/comunidade"]
    Dashboard --> Loja["/loja"]
    
    %% Área Profissional
    Pro["/pro"] --> Pacientes["/pro/pacientes"]
    Pro --> Agenda["/pro/agenda"]
    Pro --> Financeiro["/pro/financeiro"]
    Pro --> Analytics["/pro/analytics"]
    
    %% Área Admin
    Admin["/admin"] --> Users["/admin/users"]
    Admin --> Content["/admin/content"]
    Admin --> Market["/admin/market"]
    Admin --> System["/admin/system"]
    
    %% Conexões Cruzadas
    Consultas --> |"Gera"| Tracking
    Tracking --> |"Influencia"| Loja
    Pacientes --> |"Visualiza"| Tracking
    Content --> |"Alimenta"| Dashboard
    Market --> |"Gerencia"| Loja
                      `}
                        />
                      </div>
                      <div className="mt-4 text-gray-600">
                        <p className="text-sm">
                          Este diagrama mostra as rotas e conexões entre as diferentes funcionalidades do sistema. 
                          As setas indicam as relações e dependências entre os módulos, demonstrando como os dados 
                          fluem através da aplicação. Por exemplo, as consultas geram dados de tracking, que por sua 
                          vez influenciam as recomendações da loja.
                      </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          <Collapsible open={openSections.monetization} onOpenChange={() => toggleSection("monetization")}>
            <Card>
              <CollapsibleTrigger className="w-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Modelo de Monetização
                    <span className="text-sm">{openSections.monetization ? "▼" : "▶"}</span>
                  </CardTitle>
                </CardHeader>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Assinaturas</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Plano Essencial: R$49/mês</li>
                        <li>Plano Plus: R$99/mês</li>
                        <li>Plano Premium: R$199/mês</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Marketplace</h3>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Comissão sobre vendas (15-20%)</li>
                        <li>Produtos premium</li>
                        <li>Assinatura de vendedores</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          <Collapsible>
            <Card>
              <CardHeader>
                <CardTitle>Roadmap de Versões</CardTitle>
                <CardDescription>
                  Evolução planejada do sistema, desde MVP até versões completas
              </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* MVP - Versão 1.0 */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-xl mb-3">Versão 1.0 (MVP)</h3>
                    <p className="text-gray-600 mb-4">Funcionalidades essenciais para validação do produto</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Área do Usuário</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Cadastro e login básico</li>
                          <li>Agendamento de consultas</li>
                          <li>Videochamadas simples</li>
                          <li>Tracking básico de saúde</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Área Profissional</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Perfil profissional</li>
                          <li>Agenda básica</li>
                          <li>Atendimento online</li>
                          <li>Registro de consultas</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Versão 2.0 */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-xl mb-3">Versão 2.0</h3>
                    <p className="text-gray-600 mb-4">Expansão de funcionalidades e melhorias na experiência</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Novas Funcionalidades</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Comunidade e grupos de apoio</li>
                          <li>Chat assíncrono</li>
                          <li>Marketplace básico</li>
                          <li>Blog e conteúdo educativo</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Melhorias</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Dashboard personalizado</li>
                          <li>Tracking avançado</li>
                          <li>Notificações inteligentes</li>
                          <li>Prescrições digitais</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Versão 3.0 */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-xl mb-3">Versão 3.0</h3>
                    <p className="text-gray-600 mb-4">Integração avançada e recursos premium</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Recursos Avançados</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>IA para recomendações</li>
                          <li>Integração com wearables</li>
                          <li>Marketplace completo</li>
                          <li>Analytics avançado</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Área Administrativa</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Gestão completa de usuários</li>
                          <li>Moderação de conteúdo</li>
                          <li>Gestão de marketplace</li>
                          <li>Relatórios avançados</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Versão 4.0 */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-xl mb-3">Versão 4.0</h3>
                    <p className="text-gray-600 mb-4">Expansão e recursos empresariais</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Recursos Enterprise</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>White label para clínicas</li>
                          <li>API pública</li>
                          <li>Integração com planos de saúde</li>
                          <li>Suporte multi-idioma</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Expansões</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Marketplace internacional</li>
                          <li>Programa de afiliados</li>
                          <li>Apps móveis nativos</li>
                          <li>Blockchain para prontuários</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Diagrama de Evolução */}
                  <div className="mt-8">
                    <h3 className="font-semibold text-xl mb-4">Evolução das Versões</h3>
                    <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
                      <Mermaid
                        chart={`
gantt
    title Roadmap de Desenvolvimento
    dateFormat YYYY-MM
    axisFormat %Y-%m
    
    section MVP (v1.0)
    Funcionalidades Básicas      :2024-01, 4m
    Validação com Usuários       :2024-03, 2m
    
    section Versão 2.0
    Comunidade & Marketplace     :2024-05, 3m
    Melhorias de UX             :2024-07, 2m
    
    section Versão 3.0
    IA & Analytics              :2024-09, 4m
    Integrações Avançadas       :2024-11, 3m
    
    section Versão 4.0
    Recursos Enterprise         :2025-02, 4m
    Expansão Internacional      :2025-05, 3m
                      `}
                      />
                    </div>
                    <div className="mt-4 text-gray-600">
                      <p className="text-sm">
                        Este gráfico Gantt apresenta o planejamento temporal do desenvolvimento da plataforma, 
                        desde o MVP até a versão enterprise. Cada fase tem objetivos específicos e durações 
                        estimadas, com foco inicial nas funcionalidades básicas e expansão gradual para recursos 
                        mais avançados e internacionalização.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Collapsible>

          <Collapsible>
            <Card>
              <CardHeader>
                <CardTitle>Fluxos e Narrativas do Sistema</CardTitle>
                <CardDescription>
                  Detalhamento dos principais fluxos e jornadas de usuários na plataforma
              </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
                  <Mermaid
                    chart={`
graph TD
    %% Fluxos de Entrada
    subgraph Entrada["Fluxos de Entrada"]
        Marketing["Marketing Digital"] --> Landing
        Indicacao["Indicação Profissional"] --> Landing
        Landing --> Cadastro
        Cadastro --> |"Usuário"| AreaUser["Área do Usuário"]
        Cadastro --> |"Profissional"| VerificacaoPro["Verificação Profissional"]
        VerificacaoPro --> AreaPro["Área Profissional"]
        Cadastro --> |"Vendedor"| VerificacaoVend["Verificação Vendedor"]
        VerificacaoVend --> AreaMarket["Área Marketplace"]
    end

    %% Jornada Usuário - Autocuidado
    subgraph Autocuidado["Jornada de Autocuidado"]
        TrackingDiario["Tracking Diário"] --> DashboardUser["Dashboard"]
        DashboardUser --> Recomendacoes["Recomendações"]
        Recomendacoes --> Produtos["Produtos Sugeridos"]
        
        Comunidade --> |"Participação"| Grupos["Grupos de Apoio"]
        Grupos --> Desafios["Desafios"]
        Desafios --> TrackingDiario
        
        Blog --> |"Leitura"| ContPersonalizado["Conteúdo Personalizado"]
        ContPersonalizado --> Recomendacoes
    end

    %% Jornada de Atendimento
    subgraph Atendimento["Jornada de Atendimento"]
        BuscaPro["Busca Profissional"] --> Agendamento
        Agendamento --> Consulta
        Consulta --> |"Gera"| Prescricao["Prescrição"]
        Prescricao --> |"Direciona"| Marketplace
        Consulta --> |"Gera"| PlanoAcomp["Plano Acompanhamento"]
        PlanoAcomp --> TrackingDiario
        TrackingDiario --> |"Análise"| NovaConsulta["Nova Consulta"]
    end

    %% Fluxos Profissionais
    subgraph Profissional["Fluxos do Profissional"]
        OnboardingPro["Onboarding"] --> ConfigPerfil["Configuração Perfil"]
        ConfigPerfil --> ConfigAgenda["Configuração Agenda"]
        ConfigAgenda --> AtendConsultas["Atendimento Consultas"]
        AtendConsultas --> GestaoFinanceira["Gestão Financeira"]
        AtendConsultas --> GestaoPacientes["Gestão Pacientes"]
        GestaoPacientes --> AnalyticsPro["Analytics Pro"]
    end

    %% Marketplace
    subgraph MarketFlow["Fluxos Marketplace"]
        CadastroVendedor["Cadastro Vendedor"] --> ConfigLoja["Configuração Loja"]
        ConfigLoja --> CatalogoProdutos["Catálogo Produtos"]
        Prescricao --> |"Recomenda"| CatalogoProdutos
        TrackingDiario --> |"Influencia"| RecomendacaoProdutos["Recomendação Produtos"]
        RecomendacaoProdutos --> Compra["Compra"]
        Compra --> Entrega
        Entrega --> Avaliacao["Avaliação"]
        Avaliacao --> |"Feedback"| CatalogoProdutos
    end

    %% Integrações Principais
    Blog --> |"Alimenta"| Recomendacoes
    TrackingDiario --> |"Influencia"| RecomendacaoProdutos
    Comunidade --> |"Impacta"| CatalogoProdutos
    GestaoPacientes --> |"Integra"| Marketplace
                  `}
                  />
                </div>

                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fluxos de Entrada</h3>
                    <p className="text-gray-600">
                      Múltiplos pontos de entrada garantem alcance diversificado. Marketing digital e indicações profissionais
                      direcionam para landing pages específicas, com processos de verificação diferenciados por tipo de usuário.
                  </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Jornada de Autocuidado</h3>
                    <p className="text-gray-600">
                      Ciclo contínuo de acompanhamento onde tracking diário alimenta dashboard personalizado, gerando
                      recomendações contextualizadas. Integração com comunidade promove engajamento através de desafios e grupos de apoio.
                  </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Jornada de Atendimento</h3>
                    <p className="text-gray-600">
                      Fluxo completo desde busca do profissional até follow-up pós-consulta. Prescrições integradas com
                      marketplace e planos de acompanhamento conectados ao tracking diário.
                  </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fluxos do Profissional</h3>
                    <p className="text-gray-600">
                      Processo estruturado desde onboarding até gestão completa da prática. Integração entre atendimentos,
                      gestão financeira e analytics para otimização contínua.
                  </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fluxos Marketplace</h3>
                    <p className="text-gray-600">
                      Ecossistema que conecta vendedores, produtos, prescrições e avaliações. Sistema de recomendação
                      influenciado por tracking e comportamento do usuário.
                  </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Integrações Principais</h3>
                    <p className="text-gray-600">
                      Sistema altamente integrado onde cada ação impacta múltiplas áreas. Blog alimenta recomendações,
                      tracking influencia produtos sugeridos, e comunidade impacta catálogo do marketplace.
                  </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default Index;
