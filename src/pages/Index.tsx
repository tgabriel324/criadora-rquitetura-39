
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
graph TD
    A[SaúdeJá Platform] --> B[Área Pública]
    A --> C[Área do Usuário]
    A --> D[Área Profissional]
    A --> E[Área Administrativa]
    A --> F[Marketplace]

    %% Área Pública
    B --> B1[Landing Page]
    B --> B2[Blog]
    B --> B3[Cadastro/Login]
    B --> B4[Preços/Planos]
    
    B1 --> B1.1[Hero Section]
    B1 --> B1.2[Features]
    B1 --> B1.3[Depoimentos]
    
    B2 --> B2.1[Artigos]
    B2 --> B2.2[Dicas]
    B2 --> B2.3[Notícias]

    %% Área do Usuário
    C --> C1[Dashboard]
    C --> C2[Consultas]
    C --> C3[Tracking]
    C --> C4[Comunidade]
    
    C1 --> C1.1[Métricas]
    C1 --> C1.2[Progresso]
    C1 --> C1.3[Lembretes]
    
    C2 --> C2.1[Agendamento]
    C2 --> C2.2[Videochamada]
    C2 --> C2.3[Chat]
    C2 --> C2.4[Histórico]
    
    C3 --> C3.1[Medidas Físicas]
    C3 --> C3.2[Humor/Bem-estar]
    C3 --> C3.3[Alimentação]
    C3 --> C3.4[Exercícios]
    C3 --> C3.5[Sono]

    C4 --> C4.1[Grupos]
    C4 --> C4.2[Fórums]
    C4 --> C4.3[Lives]
    C4 --> C4.4[Desafios]

    %% Área Profissional
    D --> D1[Dashboard Pro]
    D --> D2[Pacientes]
    D --> D3[Agenda]
    D --> D4[Financeiro]
    
    D1 --> D1.1[Métricas Pro]
    D1 --> D1.2[Notificações]
    D1 --> D1.3[Tasks]
    
    D2 --> D2.1[Lista]
    D2 --> D2.2[Prontuários]
    D2 --> D2.3[Prescrições]
    
    D3 --> D3.1[Horários]
    D3 --> D3.2[Consultas]
    D3 --> D3.3[Bloqueios]

    %% Área Administrativa
    E --> E1[Gestão Usuários]
    E --> E2[Financeiro]
    E --> E3[Conteúdo]
    E --> E4[Suporte]
    
    E1 --> E1.1[Cadastros]
    E1 --> E1.2[Permissões]
    E1 --> E1.3[Bloqueios]
    
    E2 --> E2.1[Pagamentos]
    E2 --> E2.2[Assinaturas]
    E2 --> E2.3[Comissões]
    
    E3 --> E3.1[Blog]
    E3 --> E3.2[Emails]
    E3 --> E3.3[Notificações]

    %% Marketplace
    F --> F1[Produtos]
    F --> F2[Vendedores]
    F --> F3[Pedidos]
    F --> F4[Analytics]
    
    F1 --> F1.1[Catálogo]
    F1 --> F1.2[Categorias]
    F1 --> F1.3[Promoções]
    
    F2 --> F2.1[Cadastro]
    F2 --> F2.2[Dashboard]
    F2 --> F2.3[Financeiro]
    
    F3 --> F3.1[Carrinho]
    F3 --> F3.2[Checkout]
    F3 --> F3.3[Entrega]
    F3 --> F3.4[Status]
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
      </div>
    </div>
  );
};

export default Index;
