
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Layers, Database, Server, Cog, List, Check, X, Folder, File } from "lucide-react";
import { useState } from "react";
import Mermaid from "@/components/ui/mermaid";

const Modelo1 = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    overview: true,
    requirements: false,
    architecture: false,
    database: false,
    frontend: false,
    backend: false,
    infrastructure: false,
    planning: false,
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

        {/* 5. Cronograma */}
        <Collapsible open={openSections.planning}>
          <Card>
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("planning")}>
              <div className="flex items-center gap-2">
                <List className="h-5 w-5" />
                <CardTitle>5. Cronograma e Marcos</CardTitle>
              </div>
              <CardDescription>Planejamento e Prazos</CardDescription>
            </CardHeader>
            <CollapsibleContent>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">5.1 Fases do Projeto</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="text" className="w-full p-2 border rounded-md" placeholder="Fase 1: Planejamento" />
                        <input type="date" className="p-2 border rounded-md" />
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="text" className="w-full p-2 border rounded-md" placeholder="Fase 2: Desenvolvimento" />
                        <input type="date" className="p-2 border rounded-md" />
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="text" className="w-full p-2 border rounded-md" placeholder="Fase 3: Testes" />
                        <input type="date" className="p-2 border rounded-md" />
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="text" className="w-full p-2 border rounded-md" placeholder="Fase 4: Implantação" />
                        <input type="date" className="p-2 border rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* 6. Riscos e Mitigação */}
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

        {/* 7. Documentação */}
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
      </div>
    </div>
  );
};

export default Modelo1;
