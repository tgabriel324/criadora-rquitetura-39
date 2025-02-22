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
mindmap
  root((SaúdeJá))
    Área Pública
      Landing Page
        Hero Section
        Features
        Depoimentos
      Blog
        Artigos
        Dicas
        Notícias
      Cadastro/Login
      Preços/Planos
    Área do Usuário
      Dashboard
        Métricas
        Progresso
        Lembretes
      Consultas
        Agendamento
        Videochamada
        Chat
        Histórico
      Tracking
        Medidas Físicas
        Humor/Bem-estar
        Alimentação
        Exercícios
        Sono
      Comunidade
        Grupos
        Fórums
        Lives
        Desafios
    Área Profissional
      Dashboard Pro
        Métricas Pro
        Notificações
        Tasks
      Pacientes
        Lista
        Prontuários
        Prescrições
      Agenda
        Horários
        Consultas
        Bloqueios
      Financeiro
    Área Administrativa
      Gestão Usuários
        Cadastros
        Permissões
        Bloqueios
      Financeiro
        Pagamentos
        Assinaturas
        Comissões
      Conteúdo
        Blog
        Emails
        Notificações
      Suporte
    Marketplace
      Produtos
        Catálogo
        Categorias
        Promoções
      Vendedores
        Cadastro
        Dashboard
        Financeiro
      Pedidos
        Carrinho
        Checkout
        Entrega
        Status
      Analytics
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
