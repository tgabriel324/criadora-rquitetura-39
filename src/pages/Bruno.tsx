
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const Bruno = () => {
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
        <h1 className="text-4xl font-bold text-primary mb-4">Devocionais</h1>
        <p className="text-xl text-gray-600">Plataforma SaaS para Conteúdo Religioso</p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid gap-6">
        {/* Visão Geral */}
        <Card>
          <CardHeader>
            <CardTitle>Visão Geral do Projeto</CardTitle>
            <CardDescription>
              Plataforma para criação e venda de devocionais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                O sistema será uma plataforma SaaS que permitirá que escritores e produtores de conteúdo 
                religioso criem suas próprias lojas de devocionais e vendam acesso ao seu material de forma 
                organizada e segura. Os leitores poderão comprar e acessar apenas os devocionais adquiridos, 
                dentro de um ambiente interativo e otimizado.
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
    Devocionais((Devocionais))

    %% Áreas Principais
    AreaEscritor[Área do Escritor]
    AreaLeitor[Área do Leitor]
    AreaAdmin[Área Administrativa]
    Monetizacao[Monetização]

    %% Conexões Principais
    Devocionais --> AreaEscritor & AreaLeitor & AreaAdmin & Monetizacao

    %% Área Escritor Detalhes
    Loja[Loja Virtual]
    GestaoConteudo[Gestão de Conteúdo]
    AnalyticsVendas[Analytics e Vendas]
    CustomizacaoLoja[Customização]
    
    AreaEscritor --> Loja & GestaoConteudo & AnalyticsVendas & CustomizacaoLoja
    Loja --> |"Vende"| Monetizacao
    GestaoConteudo --> |"Publica"| Loja
    AnalyticsVendas --> |"Monitora"| Monetizacao
    CustomizacaoLoja --> |"Personaliza"| Loja

    %% Área Leitor Detalhes
    Biblioteca[Biblioteca Pessoal]
    LeituraInterativa[Leitura Interativa]
    Compartilhamento[Compartilhamento]
    PerfilLeitor[Perfil Leitor]

    AreaLeitor --> Biblioteca & LeituraInterativa & Compartilhamento & PerfilLeitor
    Biblioteca --> |"Acessa"| LeituraInterativa
    LeituraInterativa --> |"Gera"| Compartilhamento
    PerfilLeitor --> |"Configura"| Biblioteca

    %% Área Admin Detalhes
    GestaoPlanos[Gestão de Planos]
    Metricas[Métricas Globais]
    Suporte[Suporte]
    ConfigGeral[Configurações Gerais]

    AreaAdmin --> GestaoPlanos & Metricas & Suporte & ConfigGeral
    GestaoPlanos --> |"Define"| Monetizacao
    Metricas --> |"Analisa"| AreaEscritor & AreaLeitor
    Suporte --> |"Auxilia"| AreaEscritor
    ConfigGeral --> |"Gerencia"| Monetizacao

    %% Monetização Detalhes
    PlanosSaaS[Planos SaaS]
    Transacoes[Transações]
    Pagamentos[Pagamentos]
    Comissoes[Comissões]

    Monetizacao --> PlanosSaaS & Transacoes & Pagamentos & Comissoes
    PlanosSaaS --> |"Gera"| Transacoes
    Transacoes --> |"Processa"| Pagamentos
    Pagamentos --> |"Calcula"| Comissoes
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
                    <h3 className="font-semibold mb-2">Escritores</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Criam e gerenciam lojas de devocionais</li>
                      <li>Publicam e editam conteúdo</li>
                      <li>Configuram preços e monetização</li>
                      <li>Acessam analytics e relatórios</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Leitores</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Compram e acessam devocionais</li>
                      <li>Interagem com o conteúdo</li>
                      <li>Mantêm biblioteca pessoal</li>
                      <li>Compartilham reflexões</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Administradores</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Gerenciam a plataforma</li>
                      <li>Monitoram métricas globais</li>
                      <li>Configuram planos SaaS</li>
                      <li>Fornecem suporte</li>
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
                <div className="space-y-8">
                  {/* Área do Escritor */}
                  <div>
                    <h3 className="font-semibold text-xl mb-4 text-primary">Área do Escritor (/escritor)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-lg mb-2">Gestão de Conteúdo (/escritor/devocionais)</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>Criação e edição de devocionais</li>
                            <li>Upload de mídia (textos, áudios)</li>
                            <li>Organização em coleções</li>
                            <li>Agendamento de publicações</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-2">Configuração da Loja (/escritor/loja)</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>Personalização de marca</li>
                            <li>Definição de preços</li>
                            <li>Configuração de assinaturas</li>
                            <li>Integrações de pagamento</li>
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-lg mb-2">Analytics (/escritor/analytics)</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>Métricas de vendas</li>
                            <li>Engajamento dos leitores</li>
                            <li>Relatórios financeiros</li>
                            <li>Insights de crescimento</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-2">Marketing (/escritor/marketing)</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>(a preencher)</li>
                            <li>(a preencher)</li>
                            <li>(a preencher)</li>
                            <li>(a preencher)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Área do Leitor */}
                  <div>
                    <h3 className="font-semibold text-xl mb-4 text-primary">Área do Leitor (/app)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-lg mb-2">Biblioteca (/app/biblioteca)</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>Devocionais adquiridos</li>
                            <li>Organização por coleções</li>
                            <li>Marcadores de progresso</li>
                            <li>Favoritos e notas</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-2">Leitura (/app/devocional/:id)</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>Interface otimizada</li>
                            <li>Modo áudio (quando disponível)</li>
                            <li>Marcadores e destaques</li>
                            <li>Compartilhamento de reflexões</li>
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-lg mb-2">Descoberta (/app/descobrir)</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>Explorar devocionais</li>
                            <li>Busca avançada</li>
                            <li>Recomendações</li>
                            <li>Categorias e temas</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-2">Social (/app/social)</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>(a preencher)</li>
                            <li>(a preencher)</li>
                            <li>(a preencher)</li>
                            <li>(a preencher)</li>
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
                            <li>Gerenciamento de escritores</li>
                            <li>Gerenciamento de leitores</li>
                            <li>Níveis de acesso</li>
                            <li>Moderação de conteúdo</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-2">Planos SaaS (/admin/planos)</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>Configuração de planos</li>
                            <li>Preços e limites</li>
                            <li>Recursos por plano</li>
                            <li>Promoções e descontos</li>
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-lg mb-2">Financeiro (/admin/financeiro)</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>Gestão de receitas</li>
                            <li>Comissões e repasses</li>
                            <li>Relatórios fiscais</li>
                            <li>Gestão de pagamentos</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-2">Sistema (/admin/system)</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>(a preencher)</li>
                            <li>(a preencher)</li>
                            <li>(a preencher)</li>
                            <li>(a preencher)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
                    <h3 className="font-semibold mb-2">Planos SaaS para Escritores</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Basic: R$(a preencher)/mês</li>
                      <li>Pro: R$(a preencher)/mês</li>
                      <li>Enterprise: R$(a preencher)/mês</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Modelo para Leitores</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Compra individual de devocionais</li>
                      <li>Pacotes de devocionais</li>
                      <li>Planos de assinatura (opcional por escritor)</li>
                      <li>Comissão da plataforma: (a preencher)%</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Roadmap de Versões */}
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
                      <h4 className="font-medium mb-2">Escritores</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Cadastro e configuração básica</li>
                        <li>Criação de devocionais</li>
                        <li>Precificação individual</li>
                        <li>Personalização básica da loja</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Leitores</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Cadastro e compra</li>
                        <li>Biblioteca pessoal</li>
                        <li>Interface de leitura básica</li>
                        <li>Marcadores simples</li>
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
                        <li>Áudio devocionais</li>
                        <li>Assinaturas recorrentes</li>
                        <li>Analytics avançado</li>
                        <li>Personalização avançada</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Melhorias</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Interface otimizada</li>
                        <li>Mais opções de pagamento</li>
                        <li>Sistema de notificações</li>
                        <li>Compartilhamento social</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Versão 3.0 */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-xl mb-3">Versão 3.0</h3>
                  <p className="text-gray-600 mb-4">Recursos premium e expansão de mercado</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Recursos Avançados</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>App mobile nativo</li>
                        <li>Marketplace de devocionais</li>
                        <li>Sistema de afiliados</li>
                        <li>Internacionalização</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Expansões</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>(a preencher)</li>
                        <li>(a preencher)</li>
                        <li>(a preencher)</li>
                        <li>(a preencher)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Diagrama de Evolução */}
                <div className="mt-8">
                  <h3 className="font-semibold text-xl mb-4">Evolução das Versões</h3>
                  <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
                    <pre className="mermaid text-sm">
                      {`
gantt
    title Roadmap de Desenvolvimento
    dateFormat YYYY-MM
    axisFormat %Y-%m
    
    section MVP (v1.0)
    Funcionalidades Básicas      :2024-01, 4m
    Validação com Usuários       :2024-03, 2m
    
    section Versão 2.0
    Áudio e Assinaturas         :2024-05, 3m
    Melhorias UX               :2024-07, 2m
    
    section Versão 3.0
    App Mobile                 :2024-09, 4m
    Marketplace                :2024-11, 3m
                      `}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
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
        Indicacao["Indicação"] --> Landing
        Landing --> Cadastro
        Cadastro --> |"Escritor"| OnboardingEscritor["Onboarding Escritor"]
        Cadastro --> |"Leitor"| OnboardingLeitor["Onboarding Leitor"]
        OnboardingEscritor --> EscolhaPlano["Escolha do Plano"]
        EscolhaPlano --> ConfigLoja["Configuração da Loja"]
    end

    %% Jornada Escritor
    subgraph Escritor["Jornada do Escritor"]
        ConfigLoja --> CriacaoDevocional["Criação Devocional"]
        CriacaoDevocional --> Publicacao["Publicação"]
        Publicacao --> |"Gera"| Venda["Venda"]
        Venda --> |"Gera"| Metricas["Métricas"]
        Metricas --> |"Influencia"| NovoConteudo["Novo Conteúdo"]
    end

    %% Jornada Leitor
    subgraph Leitor["Jornada do Leitor"]
        OnboardingLeitor --> Descoberta["Descoberta"]
        Descoberta --> CompraDevocional["Compra Devocional"]
        CompraDevocional --> Biblioteca["Biblioteca"]
        Biblioteca --> Leitura["Leitura"]
        Leitura --> |"Gera"| Compartilhamento["Compartilhamento"]
        Compartilhamento --> |"Influencia"| Descoberta
    end

    %% Fluxo Financeiro
    subgraph Financeiro["Fluxo Financeiro"]
        Venda --> ProcessamentoPagamento["Processamento"]
        ProcessamentoPagamento --> Split["Split de Pagamento"]
        Split --> ComissaoPlataforma["Comissão Plataforma"]
        Split --> RepesseEscritor["Repasse Escritor"]
    end

    %% Conexões entre Fluxos
    Leitura --> |"Feedback"| Metricas
    CompraDevocional --> |"Gera"| ProcessamentoPagamento
    ConfigLoja --> |"Configura"| Venda
                  `}
                </pre>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fluxo do Escritor</h3>
                  <p className="text-gray-600">
                    Jornada completa desde o cadastro até a monetização do conteúdo, passando por criação,
                    publicação e gestão dos devocionais.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Fluxo do Leitor</h3>
                  <p className="text-gray-600">
                    Processo desde a descoberta até o consumo do conteúdo, incluindo compra, 
                    organização na biblioteca pessoal e interação com os devocionais.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Fluxo Financeiro</h3>
                  <p className="text-gray-600">
                    Ciclo completo de monetização, desde a venda até a distribuição dos valores
                    entre plataforma e escritores, incluindo processamento e splits.
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

export default Bruno;

