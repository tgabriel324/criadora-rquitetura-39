import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import Mermaid from "@/components/ui/mermaid";
import Navbar from "@/components/ui/navbar";

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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">SaúdeJá</h1>
          <p className="text-xl text-gray-600">Plataforma Integrada de Bem-estar</p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Overview Section */}
          <Card>
            <CardHeader>
              <CardTitle>Visão Geral</CardTitle>
              <CardDescription>Entenda o panorama geral da plataforma.</CardDescription>
            </CardHeader>
            <CardContent>
              <Collapsible open={openSections.overview} onOpenChange={() => toggleSection("overview")}>
                <CollapsibleTrigger className="w-full flex justify-between items-center py-2">
                  O que é SaúdeJá?
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <p className="text-gray-700">
                    SaúdeJá é uma plataforma inovadora que visa integrar diversos aspectos do bem-estar,
                    oferecendo soluções personalizadas para seus usuários.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Users Section */}
          <Card>
            <CardHeader>
              <CardTitle>Usuários</CardTitle>
              <CardDescription>Informações sobre os usuários da plataforma.</CardDescription>
            </CardHeader>
            <CardContent>
              <Collapsible open={openSections.users} onOpenChange={() => toggleSection("users")}>
                <CollapsibleTrigger className="w-full flex justify-between items-center py-2">
                  Quem são os usuários?
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <p className="text-gray-700">
                    Nossos usuários são indivíduos preocupados com a saúde e bem-estar, buscando soluções
                    integradas e personalizadas.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Features Section */}
          <Card>
            <CardHeader>
              <CardTitle>Funcionalidades</CardTitle>
              <CardDescription>Explore as principais funcionalidades da plataforma.</CardDescription>
            </CardHeader>
            <CardContent>
              <Collapsible open={openSections.features} onOpenChange={() => toggleSection("features")}>
                <CollapsibleTrigger className="w-full flex justify-between items-center py-2">
                  Quais são as funcionalidades?
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Monitoramento de saúde</li>
                    <li>Planos de bem-estar personalizados</li>
                    <li>Acompanhamento nutricional</li>
                    <li>Suporte psicológico</li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Monetization Section */}
          <Card>
            <CardHeader>
              <CardTitle>Monetização</CardTitle>
              <CardDescription>Como a plataforma gera receita.</CardDescription>
            </CardHeader>
            <CardContent>
              <Collapsible open={openSections.monetization} onOpenChange={() => toggleSection("monetization")}>
                <CollapsibleTrigger className="w-full flex justify-between items-center py-2">
                  Como funciona a monetização?
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <p className="text-gray-700">
                    A plataforma gera receita através de assinaturas premium, parcerias com empresas de saúde e
                    venda de produtos relacionados ao bem-estar.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Mermaid Diagram */}
          <Card>
            <CardHeader>
              <CardTitle>Diagrama de Fluxo</CardTitle>
              <CardDescription>Representação visual do fluxo da plataforma.</CardDescription>
            </CardHeader>
            <CardContent>
              <Mermaid chart={`
                graph LR
                A[Usuário] --> B(Plataforma SaúdeJá);
                B --> C{Escolha de Funcionalidade};
                C --> D[Monitoramento de Saúde];
                C --> E[Planos Personalizados];
                C --> F[Suporte Nutricional];
                C --> G[Apoio Psicológico];
                D --> H((Dados de Saúde));
                E --> I((Metas de Bem-Estar));
                F --> J((Dieta Balanceada));
                G --> K((Sessões de Aconselhamento));
              `} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
