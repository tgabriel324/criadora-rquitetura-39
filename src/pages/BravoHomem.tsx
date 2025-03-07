
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Code, 
  Cpu, 
  DollarSign, 
  FileText, 
  MessageSquare, 
  Pin, 
  Smartphone, 
  Users 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Mermaid from "@/components/ui/mermaid";

const BravoHomem = () => {
  const [activeTab, setActiveTab] = useState("proposta");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header com logo e título */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/2f38fdf8-644d-48f0-8516-33af8c68b399.png" 
              alt="Bravo Homem Logo" 
              className="h-16 w-auto object-contain" 
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Bravo Homem</h1>
              <p className="text-gray-500">Plataforma de Tratamentos Médicos Masculinos</p>
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
                  A plataforma Bravo Homem será um sistema completo para tratamentos médicos especializados para homens, com foco em problemas como disfunção erétil e queda capilar. O sistema abrangerá:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Landing page para captação de leads</p>
                        <p className="text-sm text-gray-600">Página otimizada para conversão com apresentação dos tratamentos disponíveis.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Questionário de anamnese digital</p>
                        <p className="text-sm text-gray-600">Coleta de informações médicas relevantes para avaliação inicial do paciente.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Área do paciente</p>
                        <p className="text-sm text-gray-600">Dashboard para acompanhamento do tratamento, histórico e recompra.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Área do médico</p>
                        <p className="text-sm text-gray-600">Visualização dos pacientes, análise de questionários e prescrição de tratamentos.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Área administrativa</p>
                        <p className="text-sm text-gray-600">Gestão de usuários, produtos e pedidos, com métricas e relatórios.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Integração com WhatsApp</p>
                        <p className="text-sm text-gray-600">Comunicação direta entre médicos e pacientes via WhatsApp.</p>
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
    A[Landing Page] -->|Cadastro| B[Questionário Anamnese]
    B -->|Preenchimento| C[Recomendação de Tratamento]
    C -->|Escolha| D[Checkout/Pagamento]
    D -->|Confirmação| E[Área do Paciente]
    
    F[Área do Médico] -->|Visualiza| B
    F -->|Avalia| C
    F -->|Comunica via| G[WhatsApp]
    
    E -->|Acompanhamento| H[Tratamento em Andamento]
    E -->|Comunicação| G
    H -->|Finalização| I[Recompra/Renovação]
    
    J[Área Administrativa] -->|Gerencia| K[Usuários e Produtos]
    J -->|Monitora| D
                    `}
                  />
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>
                    O diagrama acima ilustra o fluxo principal do sistema, desde a captação do cliente na landing page, 
                    passando pelo questionário de anamnese e recomendação de tratamento, até o acompanhamento contínuo 
                    e possibilidade de recompra.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="escopo" className="space-y-8">
            {/* Escopo Técnico */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-600 text-xl flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  Implementação Técnica
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">Tecnologias Utilizadas</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium mb-2">Frontend</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>React + TypeScript</li>
                          <li>Tailwind CSS para estilização</li>
                          <li>Componentes reutilizáveis</li>
                          <li>Design responsivo (mobile-first)</li>
                          <li>Formulários otimizados para conversão</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium mb-2">Design & UX</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Interface minimalista e intuitiva</li>
                          <li>Paleta de cores alinhada com a marca</li>
                          <li>Otimização para conversão</li>
                          <li>Microcópia focada no usuário</li>
                          <li>Acessibilidade básica</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium mb-2">Backend</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>API RESTful</li>
                          <li>Banco de dados seguro</li>
                          <li>Autenticação de usuários</li>
                          <li>Integração com WhatsApp API</li>
                          <li>Sistema de notificações</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium mb-2">Segurança</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          <li>Criptografia de dados sensíveis</li>
                          <li>Conformidade com LGPD</li>
                          <li>Autenticação segura</li>
                          <li>Proteção contra ataques comuns</li>
                          <li>Backups regulares</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">Arquitetura do Sistema</h3>
                  
                  <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
                    <Mermaid
                      chart={`
flowchart TD
    Client[Cliente/Browser] <-->|HTTP/HTTPS| FE[Frontend]
    FE <-->|API Calls| BE[Backend API]
    BE <-->|Queries| DB[(Database)]
    BE <-->|Integration| WhatsApp[WhatsApp API]
    BE <-->|Integration| Payment[Gateway de Pagamento]
                      `}
                    />
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <p>
                      A arquitetura proposta é simples e eficiente, com separação clara entre frontend e backend, 
                      permitindo escalabilidade e manutenção facilitada. As integrações com WhatsApp e gateway 
                      de pagamento são realizadas através de APIs seguras.
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">Módulos do Sistema</h3>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-2">Módulo de Captação de Leads</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Landing page otimizada</li>
                        <li>Formulário de captura inicial</li>
                        <li>Questionário de anamnese em etapas</li>
                        <li>Sistema de recomendação de tratamento</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-2">Módulo de Pacientes</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Cadastro e autenticação</li>
                        <li>Dashboard personalizado</li>
                        <li>Histórico de tratamentos</li>
                        <li>Recompra facilitada</li>
                        <li>Acesso a prescrições</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-2">Módulo Médico</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Lista de pacientes</li>
                        <li>Visualização dos questionários</li>
                        <li>Sistema de prescrição</li>
                        <li>Acompanhamento de tratamentos</li>
                        <li>Comunicação via WhatsApp</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium mb-2">Módulo Administrativo</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Gestão de usuários</li>
                        <li>Cadastro de produtos/tratamentos</li>
                        <li>Visualização de pedidos</li>
                        <li>Métricas e relatórios</li>
                        <li>Configurações do sistema</li>
                      </ul>
                    </div>
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
                <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
                  <Mermaid
                    chart={`
gantt
    title Bravo Homem - Desenvolvimento
    dateFormat  YYYY-MM-DD
    section Frontend
    Design & Prototipação    :a1, 2024-03-08, 5d
    Landing Page     :a2, after a1, 3d
    Questionário     :a3, after a2, 5d
    Dashboard Paciente    :a4, after a3, 4d
    Dashboard Médico     :a5, after a3, 4d
    Área Administrativa    :a6, after a4, 3d
    Testes e Ajustes    :a7, after a6, 3d
    
    section Backend
    Modelagem     :b1, 2024-04-01, 3d
    APIs Básicas    :b2, after b1, 3d
    Autenticação    :b3, after b2, 2d
    APIs Completas    :b4, after b3, 4d
    Integrações    :b5, after b4, 2d
    Testes e Ajustes    :b6, after b5, 2d
                    `}
                  />
                </div>
                
                <div className="space-y-5 mt-4">
                  <h3 className="font-medium text-lg">Fases do Projeto</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <h4 className="font-medium">Fase 1: Desenvolvimento Frontend - 20 dias</h4>
                      </div>
                      
                      <div className="space-y-3 ml-7">
                        <div>
                          <h5 className="text-sm font-medium mb-1">Semana 1-2</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            <li>Design e prototipação das interfaces</li>
                            <li>Desenvolvimento da landing page</li>
                            <li>Implementação do questionário de anamnese</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-1">Semana 3</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            <li>Dashboard do paciente</li>
                            <li>Dashboard do médico</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-1">Semana 4</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            <li>Área administrativa</li>
                            <li>Testes, ajustes e otimizações</li>
                            <li>Documentação frontend</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <h4 className="font-medium">Fase 2: Desenvolvimento Backend - 10 dias</h4>
                      </div>
                      
                      <div className="space-y-3 ml-7">
                        <div>
                          <h5 className="text-sm font-medium mb-1">Dias 1-3</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            <li>Modelagem do banco de dados</li>
                            <li>Configuração do ambiente</li>
                            <li>Implementação das APIs básicas</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-1">Dias 4-7</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            <li>Sistema de autenticação</li>
                            <li>APIs completas para todos os módulos</li>
                            <li>Lógica de negócio</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium mb-1">Dias 8-10</h5>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            <li>Integração com WhatsApp</li>
                            <li>Testes e ajustes</li>
                            <li>Documentação backend</li>
                            <li>Deploy em produção</li>
                          </ul>
                        </div>
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
                        <Users className="h-8 w-8 text-blue-600" />
                      </div>
                      <p className="font-medium">Entrega Frontend</p>
                      <p className="text-sm text-gray-600">Em 20 dias</p>
                    </div>
                    
                    <div className="h-0.5 w-20 bg-gray-300"></div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mx-auto mb-2">
                        <CheckCircle2 className="h-8 w-8 text-blue-600" />
                      </div>
                      <p className="font-medium">Entrega Final</p>
                      <p className="text-sm text-gray-600">Em 30 dias</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Marcos do Projeto */}
            <Card className="border-gray-200 shadow-sm bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-600 text-xl flex items-center gap-2">
                  <Pin className="h-5 w-5 text-blue-600" />
                  Marcos do Projeto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Aprovação da Proposta</h4>
                        <p className="text-sm text-gray-600">
                          Início do projeto com reunião de alinhamento de expectativas e detalhamento dos requisitos.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Entrega dos Protótipos</h4>
                        <p className="text-sm text-gray-600">
                          Apresentação e validação das interfaces principais, com possibilidade de ajustes.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Entrega do Frontend</h4>
                        <p className="text-sm text-gray-600">
                          Sistema frontend completo e funcional para validação, com todas as interfaces implementadas.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Entrega Final</h4>
                        <p className="text-sm text-gray-600">
                          Sistema completo, com frontend e backend integrados, pronto para uso em produção.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Suporte Pós-Entrega</h4>
                        <p className="text-sm text-gray-600">
                          Período de 15 dias para ajustes, correções e suporte técnico após a entrega final.
                        </p>
                      </div>
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
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-blue-200 rounded-lg bg-blue-50 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Smartphone className="h-5 w-5 text-blue-600" />
                      <h3 className="font-medium text-lg">Fase 1: Frontend</h3>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="text-3xl font-bold text-blue-600">R$ 2.500,00</p>
                      <p className="text-sm text-gray-600 mt-1">Prazo: 20 dias corridos</p>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-3 mt-4">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm">Landing page otimizada</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm">Questionário de anamnese</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm">Dashboard do paciente</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm">Dashboard do médico</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm">Área administrativa</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm">Design responsivo completo</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-blue-200 rounded-lg bg-blue-50 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu className="h-5 w-5 text-blue-600" />
                      <h3 className="font-medium text-lg">Fase 2: Backend</h3>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="text-3xl font-bold text-blue-600">R$ 1.500,00</p>
                      <p className="text-sm text-gray-600 mt-1">Prazo: 10 dias corridos</p>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-3 mt-4">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm">Banco de dados completo</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm">APIs seguras</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm">Sistema de autenticação</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm">Integração com WhatsApp</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm">Implementação de regras de negócio</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm">Deploy em ambiente de produção</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold">Valor Total do Projeto</h3>
                    <p className="text-4xl font-bold text-blue-600 mt-2">R$ 4.000,00</p>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Condições de Pagamento</h4>
                    
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Frontend (R$ 2.500,00)</p>
                          <p className="text-sm text-gray-600">50% na aprovação da proposta (R$ 1.250,00)</p>
                          <p className="text-sm text-gray-600">50% na entrega do frontend (R$ 1.250,00)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Backend (R$ 1.500,00)</p>
                          <p className="text-sm text-gray-600">50% no início do desenvolvimento (R$ 750,00)</p>
                          <p className="text-sm text-gray-600">50% na entrega final (R$ 750,00)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 mt-4">
                  <p>
                    <strong>Observação:</strong> A proposta inclui 15 dias de suporte técnico após a entrega final, 
                    para ajustes, correções e esclarecimentos. Novas funcionalidades ou modificações significativas 
                    não previstas nesta proposta podem ser orçadas separadamente.
                  </p>
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
                  A Ditho Soluções é especializada em desenvolvimento de sistemas web, lojas virtuais, SaaS, aplicativos móveis e 
                  automações. Nossa equipe trabalha com processos otimizados para entregar soluções digitais de alta qualidade 
                  que atendem precisamente às necessidades de nossos clientes.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                  <h4 className="font-medium mb-2">Nossa Abordagem</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    <li>Processos de desenvolvimento ágeis e transparentes</li>
                    <li>Comunicação clara e objetiva durante todo o projeto</li>
                    <li>Foco em resultados mensuráveis para o seu negócio</li>
                    <li>Flexibilidade para adaptar às necessidades específicas</li>
                    <li>Acompanhamento contínuo do projeto com atualizações regulares</li>
                  </ul>
                </div>
                
                <div className="text-center mt-6">
                  <p className="text-gray-700">
                    Estamos prontos para transformar a visão do Bravo Homem em realidade, entregando uma plataforma 
                    de alta qualidade dentro do prazo e orçamento acordados.
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

export default BravoHomem;
