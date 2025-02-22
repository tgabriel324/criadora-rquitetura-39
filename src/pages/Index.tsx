import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">SaúdeJá</h1>
        <p className="text-xl text-gray-600">Plataforma Integrada de Bem-estar</p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid gap-6">
        {/* Visão Geral */}
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
              <pre className="mermaid text-sm">
                {`
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

    %% Conexões Cruzadas
    Consultas --> |Recomendação| Produtos
    Tracking --> |Dados| Analytics
    Comunidade --> |Avaliações| Produtos
    DashPro --> |Prescrição| Pedidos
                `}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Tipos de Usuários */}
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

        {/* Funcionalidades */}
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Consultas Online</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Videochamadas</li>
                      <li>Chat em tempo real</li>
                      <li>Compartilhamento de documentos</li>
                      <li>Prescrições digitais</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Tracking de Saúde</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Medidas físicas</li>
                      <li>Humor e bem-estar</li>
                      <li>Alimentação</li>
                      <li>Exercícios e sono</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Monetização */}
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

        {/* Fluxos e Narrativas */}
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
                <pre className="mermaid text-sm">
                  {`
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
                </pre>
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
  );
};

export default Index;
