
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import Mermaid from "@/components/ui/mermaid";

const Modelo1 = () => {
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
        <h1 className="text-4xl font-bold text-primary mb-4">Modelo 1</h1>
        <p className="text-xl text-gray-600">Sistema Base para Desenvolvimento</p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto grid gap-6">
        {/* Visão Geral */}
        <Card>
          <CardHeader>
            <CardTitle>Visão Geral do Projeto</CardTitle>
            <CardDescription>
              Estrutura base para desenvolvimento de sistemas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Este é um modelo base que pode ser utilizado como ponto de partida para o desenvolvimento
                de diferentes tipos de sistemas. Ele inclui uma estrutura organizada, componentes reutilizáveis
                e boas práticas de desenvolvimento.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Diagrama Organizacional */}
        <Card>
          <CardHeader>
            <CardTitle>Estrutura Organizacional</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
              <pre className="mermaid text-sm">
                {`
flowchart LR
    Sistema((Sistema))

    %% Áreas Principais
    Frontend[Frontend]
    Backend[Backend]
    Infraestrutura[Infraestrutura]
    Gestao[Gestão]

    %% Conexões Principais
    Sistema --> Frontend & Backend & Infraestrutura & Gestao

    %% Frontend Detalhes
    Interface[Interface]
    Componentes[Componentes]
    Rotas[Rotas]
    Estado[Estado]
    
    Frontend --> Interface & Componentes & Rotas & Estado
    Interface --> |"Usa"| Componentes
    Rotas --> |"Renderiza"| Interface
    Estado --> |"Atualiza"| Interface

    %% Backend Detalhes
    API[API]
    Database[Database]
    Autenticacao[Autenticação]
    Cache[Cache]

    Backend --> API & Database & Autenticacao & Cache
    API --> |"Acessa"| Database
    Autenticacao --> |"Verifica"| API
    Cache --> |"Otimiza"| API

    %% Infraestrutura Detalhes
    Servidor[Servidor]
    Deploy[Deploy]
    Monitoramento[Monitoramento]
    Backup[Backup]

    Infraestrutura --> Servidor & Deploy & Monitoramento & Backup
    Servidor --> |"Executa"| Backend
    Deploy --> |"Atualiza"| Servidor
    Monitoramento --> |"Analisa"| Servidor
    Backup --> |"Preserva"| Database

    %% Gestão Detalhes
    Sprints[Sprints]
    Tarefas[Tarefas]
    Documentacao[Documentação]
    Qualidade[Qualidade]

    Gestao --> Sprints & Tarefas & Documentacao & Qualidade
    Sprints --> |"Define"| Tarefas
    Tarefas --> |"Gera"| Documentacao
    Qualidade --> |"Avalia"| Sistema
                `}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Recursos */}
        <Card>
          <CardHeader>
            <CardTitle>Recursos do Sistema</CardTitle>
            <CardDescription>
              Principais recursos e funcionalidades disponíveis no modelo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Frontend</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Componentes reutilizáveis</li>
                  <li>Sistema de rotas</li>
                  <li>Gerenciamento de estado</li>
                  <li>Interface responsiva</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Backend</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>API RESTful</li>
                  <li>Banco de dados</li>
                  <li>Autenticação e autorização</li>
                  <li>Cache e otimização</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estrutura de Arquivos */}
        <Card>
          <CardHeader>
            <CardTitle>Estrutura de Arquivos</CardTitle>
            <CardDescription>
              Organização do código fonte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
              {`
📦 src
 ┣ 📂 components
 ┃ ┣ 📂 ui
 ┃ ┗ 📂 features
 ┣ 📂 pages
 ┃ ┣ 📂 auth
 ┃ ┗ 📂 dashboard
 ┣ 📂 hooks
 ┣ 📂 services
 ┣ 📂 utils
 ┣ 📂 types
 ┗ 📂 styles
              `}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Modelo1;
