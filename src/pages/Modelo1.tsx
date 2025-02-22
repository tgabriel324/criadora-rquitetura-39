import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Layers, Database, Server, Cog, List, Check, X, Folder, File, MessageCircleQuestion, AlertTriangle, Lightbulb, HelpCircle, InfoIcon } from "lucide-react";
import { useState } from "react";
import Mermaid from "@/components/ui/mermaid";

const Modelo1 = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    overview: true,
    requirements: false,
    architecture: false,
    database: false,
    userProfiles: false,
    flows: false,
    monetization: false,
    roadmap: false,
    risks: false
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
        <h1 className="text-4xl font-bold text-primary mb-4">Modelo de Projeto</h1>
        <p className="text-xl text-gray-600">Estrutura Completa para Planejamento e Execução</p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid gap-6">
        {/* 1. Visão Geral */}
        <Collapsible open={openSections.overview}>
          <Card>
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("overview")}>
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                <CardTitle>1. Visão Geral do Projeto</CardTitle>
              </div>
              <CardDescription>Definição clara dos objetivos e escopo</CardDescription>
            </CardHeader>
            <CollapsibleContent>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">1.1 Objetivo Principal</h3>
                    <textarea 
                      className="w-full p-2 border rounded-md" 
                      rows={3}
                      placeholder="Descreva o objetivo principal do projeto..."
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">1.2 Público-Alvo</h3>
                    <textarea 
                      className="w-full p-2 border rounded-md" 
                      rows={3}
                      placeholder="Defina o público-alvo do projeto..."
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">1.3 Valor Agregado</h3>
                    <textarea 
                      className="w-full p-2 border rounded-md" 
                      rows={3}
                      placeholder="Descreva o valor que o projeto entregará..."
                    />
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* 2. Requisitos */}
        <Collapsible open={openSections.requirements}>
          <Card>
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("requirements")}>
              <div className="flex items-center gap-2">
                <List className="h-5 w-5" />
                <CardTitle>2. Requisitos do Sistema</CardTitle>
              </div>
              <CardDescription>Funcionais e Não-Funcionais</CardDescription>
            </CardHeader>
            <CollapsibleContent>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">2.1 Requisitos Funcionais</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-md"
                          placeholder="Adicione um requisito funcional..."
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">2.2 Requisitos Não-Funcionais</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-blue-500" />
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-md"
                          placeholder="Adicione um requisito não-funcional..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* 3. Arquitetura */}
        <Collapsible open={openSections.architecture}>
          <Card>
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("architecture")}>
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                <CardTitle>3. Arquitetura do Sistema</CardTitle>
              </div>
              <CardDescription>Estrutura e Componentes</CardDescription>
            </CardHeader>
            <CollapsibleContent>
              <CardContent>
                <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
                  <pre className="mermaid text-sm">
                    {`
flowchart TB
    Sistema((Sistema))
    Frontend[Frontend]
    Backend[Backend]
    DB[(Database)]
    Cache[(Cache)]
    
    Sistema --> Frontend & Backend
    Backend --> DB
    Backend --> Cache
    
    subgraph Frontend
    UI[Interface]
    State[Estado]
    Routes[Rotas]
    end
    
    subgraph Backend
    API[API]
    Auth[Autenticação]
    Business[Regras de Negócio]
    end
                    `}
                  </pre>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* 4. Estrutura de Dados */}
        <Collapsible open={openSections.database}>
          <Card>
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("database")}>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                <CardTitle>4. Estrutura de Dados</CardTitle>
              </div>
              <CardDescription>Modelagem do Banco de Dados</CardDescription>
            </CardHeader>
            <CollapsibleContent>
              <CardContent>
                <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
                  <pre className="mermaid text-sm">
                    {`
erDiagram
    USUARIO ||--o{ PERFIL : possui
    USUARIO ||--o{ PEDIDO : faz
    PEDIDO ||--|{ ITEM : contem
    ITEM }|--|| PRODUTO : referencia
                    `}
                  </pre>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Nova Seção: Perfis de Usuário e Áreas do Sistema */}
        <Collapsible open={openSections.userProfiles}>
          <Card>
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("userProfiles")}>
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                <CardTitle>Perfis de Usuário e Áreas do Sistema</CardTitle>
              </div>
              <CardDescription>Detalhamento por tipo de usuário e suas respectivas áreas</CardDescription>
            </CardHeader>
            <CollapsibleContent>
              <CardContent>
                <div className="space-y-8">
                  {/* Mapeamento de Perfis */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Perfis de Usuário</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Perfil A */}
                      <Card className="p-4">
                        <h4 className="font-medium mb-2">Perfil A</h4>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-600">Características principais:</p>
                          <textarea 
                            className="w-full p-2 border rounded-md text-sm" 
                            rows={3}
                            placeholder="Descreva as características do Perfil A..."
                          />
                          <p className="text-sm text-gray-600">Necessidades principais:</p>
                          <textarea 
                            className="w-full p-2 border rounded-md text-sm" 
                            rows={3}
                            placeholder="Liste as principais necessidades..."
                          />
                        </div>
                      </Card>

                      {/* Perfil B */}
                      <Card className="p-4">
                        <h4 className="font-medium mb-2">Perfil B</h4>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-600">Características principais:</p>
                          <textarea 
                            className="w-full p-2 border rounded-md text-sm" 
                            rows={3}
                            placeholder="Descreva as características do Perfil B..."
                          />
                          <p className="text-sm text-gray-600">Necessidades principais:</p>
                          <textarea 
                            className="w-full p-2 border rounded-md text-sm" 
                            rows={3}
                            placeholder="Liste as principais necessidades..."
                          />
                        </div>
                      </Card>

                      {/* Perfil C (Admin) */}
                      <Card className="p-4">
                        <h4 className="font-medium mb-2">Administrador</h4>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-600">Características principais:</p>
                          <textarea 
                            className="w-full p-2 border rounded-md text-sm" 
                            rows={3}
                            placeholder="Descreva as características do Admin..."
                          />
                          <p className="text-sm text-gray-600">Necessidades principais:</p>
                          <textarea 
                            className="w-full p-2 border rounded-md text-sm" 
                            rows={3}
                            placeholder="Liste as principais necessidades..."
                          />
                        </div>
                      </Card>
                    </div>
                  </div>

                  {/* Áreas do Sistema */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Áreas do Sistema</h3>
                    <div className="space-y-6">
                      {/* Área Perfil A */}
                      <div>
                        <h4 className="font-medium mb-3">Área do Perfil A (/perfilA/*)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-sm font-medium mb-2">Páginas/Rotas</h5>
                            <div className="space-y-2">
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md"
                                placeholder="/perfilA/dashboard"
                              />
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md"
                                placeholder="/perfilA/config"
                              />
                            </div>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium mb-2">Funcionalidades</h5>
                            <div className="space-y-2">
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md"
                                placeholder="Funcionalidade 1"
                              />
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md"
                                placeholder="Funcionalidade 2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Área Perfil B */}
                      <div>
                        <h4 className="font-medium mb-3">Área do Perfil B (/perfilB/*)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-sm font-medium mb-2">Páginas/Rotas</h5>
                            <div className="space-y-2">
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md"
                                placeholder="/perfilB/home"
                              />
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md"
                                placeholder="/perfilB/perfil"
                              />
                            </div>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium mb-2">Funcionalidades</h5>
                            <div className="space-y-2">
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md"
                                placeholder="Funcionalidade 1"
                              />
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md"
                                placeholder="Funcionalidade 2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Área Admin */}
                      <div>
                        <h4 className="font-medium mb-3">Área Administrativa (/admin/*)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-sm font-medium mb-2">Páginas/Rotas</h5>
                            <div className="space-y-2">
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md"
                                placeholder="/admin/dashboard"
                              />
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md"
                                placeholder="/admin/users"
                              />
                            </div>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium mb-2">Funcionalidades</h5>
                            <div className="space-y-2">
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md"
                                placeholder="Funcionalidade 1"
                              />
                              <input 
                                type="text" 
                                className="w-full p-2 border rounded-md"
                                placeholder="Funcionalidade 2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Diagrama de Interações */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Interações entre Áreas</h3>
                    <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
                      <pre className="mermaid text-sm">
                        {`
graph TD
    %% Áreas Principais
    PerfilA[Área Perfil A]
    PerfilB[Área Perfil B]
    Admin[Área Admin]
    
    %% Interações PerfilA
    PerfilA --> |"Cria/Gerencia"| Conteudo[Conteúdo]
    PerfilA --> |"Configura"| Config[Configurações]
    PerfilA --> |"Visualiza"| Metricas[Métricas]
    
    %% Interações PerfilB
    PerfilB --> |"Consome"| Conteudo
    PerfilB --> |"Gera"| Feedback[Feedback]
    
    %% Interações Admin
    Admin --> |"Gerencia"| PerfilA
    Admin --> |"Gerencia"| PerfilB
    Admin --> |"Monitora"| Sistema[Sistema]
    
    %% Fluxos de Dados
    Conteudo --> |"Gera"| Metricas
    Feedback --> |"Influencia"| Metricas
    Sistema --> |"Controla"| Config
                        `}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* 5. Modelo de Negócio e Monetização */}
        <Collapsible>
          <Card>
            <CardHeader>
              <CardTitle>Modelo de Negócio e Monetização</CardTitle>
              <CardDescription>
                Estratégias de monetização e análise de mercado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Modelo de Negócio */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">5.1 Modelo de Negócio</h3>
                  <div className="grid grid-cols-2 gap-4">
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
                  <h3 className="text-lg font-semibold mb-4">5.2 Análise Competitiva</h3>
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

                {/* Estrat��gia de Monetização */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">5.3 Estratégia de Monetização</h3>
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
            </CardContent>
          </Card>
        </Collapsible>

        {/* 6. Fluxos e Narrativas do Sistema */}
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
        Metricas --> |"Influencia"| NovoConteudo["Novo Conteúdo"]
    end

    %% Jornada Principal B
    subgraph Perfil_B["Jornada Principal B"]
        Descoberta --> Consumo["Consumo"]
        Consumo --> Biblioteca["Biblioteca"]
        Biblioteca --> Interacao["Interação"]
        Interacao --> |"Gera"| Compartilhamento["Compartilhamento"]
        Compartilhamento --> |"Influencia"| Descoberta
    end

    %% Fluxo Financeiro
    subgraph Financeiro["Fluxo Financeiro"]
        Receita --> ProcessamentoPagamento["Processamento"]
        ProcessamentoPagamento --> Split["Split"]
        Split --> Comissao["Comissão"]
        Split --> Repasse["Repasse"]
    end

    %% Conexões entre Fluxos
    Interacao --> |"Feedback"| Metricas
    Consumo --> |"Gera"| ProcessamentoPagamento
    ConfigInicial --> |"Configura"| Receita
                  `}
                </pre>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fluxo Principal A</h3>
                  <p className="text-gray-600">
                    Descreva aqui o fluxo principal do primeiro tipo de usuário, desde o cadastro até as principais ações.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Fluxo Principal B</h3>
                  <p className="text-gray-600">
                    Descreva aqui o fluxo principal do segundo tipo de usuário, incluindo interações e objetivos.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Fluxo Financeiro</h3>
                  <p className="text-gray-600">
                    Detalhamento do fluxo financeiro, incluindo processamento, divisões e repasses.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Collapsible>

        {/* 7. Roadmap de Versões */}
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
                      <h4 className="font-medium mb-2">Perfil A</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Funcionalidade essencial 1</li>
                        <li>Funcionalidade essencial 2</li>
                        <li>Funcionalidade essencial 3</li>
                        <li>Funcionalidade essencial 4</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Perfil B</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Funcionalidade essencial 1</li>
                        <li>Funcionalidade essencial 2</li>
                        <li>Funcionalidade essencial 3</li>
                        <li>Funcionalidade essencial 4</li>
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
                        <li>Nova funcionalidade 1</li>
                        <li>Nova funcionalidade 2</li>
                        <li>Nova funcionalidade 3</li>
                        <li>Nova funcionalidade 4</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Melhorias</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Melhoria 1</li>
                        <li>Melhoria 2</li>
                        <li>Melhoria 3</li>
                        <li>Melhoria 4</li>
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
                        <li>Recurso avançado 1</li>
                        <li>Recurso avançado 2</li>
                        <li>Recurso avançado 3</li>
                        <li>Recurso avançado 4</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Expansões</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Expansão 1</li>
                        <li>Expansão 2</li>
                        <li>Expansão 3</li>
                        <li>Expansão 4</li>
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

        {/* 8. Riscos e Mitigação */}
        <Collapsible open={openSections.risks}>
          <Card>
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("risks")}>
              <div className="flex items-center gap-2">
                <X className="h-5 w-5" />
                <CardTitle>6. Riscos e Mitigação</CardTitle>
              </div>
              <CardDescription>Identificação e Tratamento de Riscos</CardDescription>
            </CardHeader>
            <CollapsibleContent>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="font-semibold">Risco</div>
                    <div className="font-semibold">Impacto</div>
                    <div className="font-semibold">Mitigação</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <input type="text" className="p-2 border rounded-md" placeholder="Descreva o risco..." />
                    <select className="p-2 border rounded-md">
                      <option value="alto">Alto</option>
                      <option value="medio">Médio</option>
                      <option value="baixo">Baixo</option>
                    </select>
                    <input type="text" className="p-2 border rounded-md" placeholder="Estratégia de mitigação..." />
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* 9. Documentação */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5" />
              <CardTitle>7. Estrutura da Documentação</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
              {`
📦 docs
 ┣ 📂 1-visao-geral
 ┃ ┣ 📄 objetivos.md
 ┃ ┣ 📄 escopo.md
 ┃ ┗ 📄 stakeholders.md
 ┣ 📂 2-requisitos
 ┃ ┣ 📄 funcionais.md
 ┃ ┗ 📄 nao-funcionais.md
 ┣ 📂 3-arquitetura
 ┃ ┣ 📄 visao-geral.md
 ┃ ┣ 📄 frontend.md
 ┃ ┗ 📄 backend.md
 ┣ 📂 4-dados
 ┃ ┣ 📄 modelo-dados.md
 ┃ ┗ 📄 dicionario.md
 ┣ 📂 5-cronograma
 ┃ ┣ 📄 fases.md
 ┃ ┗ 📄 marcos.md
 ┗ 📂 6-riscos
   ┣ 📄 analise.md
   ┗ 📄 mitigacao.md
              `}
            </pre>
          </CardContent>
        </Card>

        {/* Seção de Perguntas Essenciais */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageCircleQuestion className="h-5 w-5" />
              <CardTitle>Perguntas Essenciais do Projeto</CardTitle>
            </div>
            <CardDescription>
              Questões fundamentais para o completo entendimento e documentação do projeto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Visão Geral */}
              <div>
                <h3 className="text-lg font-semibold mb-3">1. Visão Geral do Projeto</h3>
                <div className="space-y-2 pl-4">
                  {[
                    "Qual o problema específico que o projeto resolve?",
                    "Quem são os stakeholders principais?",
                    "Qual é o objetivo final do projeto?",
                    "Qual é o valor único que ele entrega?",
                    "Em quanto tempo precisa estar pronto?",
                    "Qual é o orçamento disponível?"
                  ].map((pergunta, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="min-w-4 mt-1">•</div>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-md" 
                        defaultValue={pergunta}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Cronograma e Marcos */}
              <div>
                <h3 className="text-lg font-semibold mb-3">12. Cronograma e Marcos</h3>
                <div className="space-y-2 pl-4">
                  {[
                    "Quais são os principais marcos do projeto?",
                    "Qual é o prazo para cada fase?",
                    "Quais são as dependências entre etapas?",
                    "Como será feito o controle de progresso?",
                    "Quais são os critérios de sucesso?"
                  ].map((pergunta, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="min-w-4 mt-1">•</div>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-md" 
                        defaultValue={pergunta}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seção de Observações Importantes */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <CardTitle>Observações Importantes</CardTitle>
            </div>
            <CardDescription>
              Pontos críticos e considerações especiais para o projeto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <InfoIcon className="h-4 w-4" />
                  Pontos de Atenção
                </h3>
                <div className="space-y-2">
                  <textarea 
                    className="w-full p-2 border rounded-md" 
                    rows={3}
                    placeholder="Decisões pendentes, riscos identificados..."
                  />
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Sugestões de Melhoria
                </h3>
                <div className="space-y-2">
                  <textarea 
                    className="w-full p-2 border rounded-md" 
                    rows={3}
                    placeholder="Ideias para evolução do projeto..."
                  />
                </div>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Pontos a Esclarecer
                </h3>
                <div className="space-y-2">
                  <textarea 
                    className="w-full p-2 border rounded-md" 
                    rows={3}
                    placeholder="Questões que precisam ser esclarecidas..."
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Modelo1;
