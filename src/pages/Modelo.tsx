
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Mermaid from "@/components/ui/mermaid";

export default function Modelo() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Template de Análise de Projeto</CardTitle>
          <CardDescription>
            Estrutura base para análise e documentação de projetos digitais
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 1. Visão Geral */}
          <Collapsible>
            <CollapsibleTrigger className="w-full">
              <Card>
                <CardHeader>
                  <CardTitle>1. Visão Geral (Overview)</CardTitle>
                </CardHeader>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nome do Projeto</li>
                    <li>Subtítulo/Slogan</li>
                    <li>Descrição do Propósito</li>
                    <li>Problema que Resolve</li>
                    <li>Público-alvo Principal</li>
                  </ul>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>

          {/* 2. Diagrama Organizacional */}
          <Collapsible>
            <CollapsibleTrigger className="w-full">
              <Card>
                <CardHeader>
                  <CardTitle>2. Diagrama Organizacional</CardTitle>
                </CardHeader>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <Card>
                <CardContent className="pt-6">
                  <Mermaid
                    chart={`
                    graph TD
                      A[Área Pública] --> B[Área do Usuário]
                      A --> C[Área Profissional]
                      A --> D[Área Administrativa]
                      B --> E[Marketplace]
                      C --> E
                      D --> E
                    `}
                  />
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>

          {/* 3. Tipos de Usuários */}
          <Collapsible>
            <CollapsibleTrigger className="w-full">
              <Card>
                <CardHeader>
                  <CardTitle>3. Tipos de Usuários</CardTitle>
                </CardHeader>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Usuários Finais:</h4>
                      <ul className="list-disc pl-6">
                        <li>Plano Gratuito</li>
                        <li>Plano Básico</li>
                        <li>Plano Premium</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Profissionais:</h4>
                      <ul className="list-disc pl-6">
                        <li>Tipos de Profissionais</li>
                        <li>Níveis de Acesso</li>
                        <li>Permissões Específicas</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Administradores:</h4>
                      <ul className="list-disc pl-6">
                        <li>Super Admin</li>
                        <li>Gerentes</li>
                        <li>Suporte</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>

          {/* 4. Funcionalidades Principais */}
          <Collapsible>
            <CollapsibleTrigger className="w-full">
              <Card>
                <CardHeader>
                  <CardTitle>4. Funcionalidades Principais</CardTitle>
                </CardHeader>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <Card>
                <CardContent className="pt-6">
                  <Mermaid
                    chart={`
                    graph TD
                      A[Área do Usuário] --> B[Dashboard]
                      A --> C[Perfil]
                      A --> D[Funcionalidades Core]
                      
                      E[Área Profissional] --> F[Gestão]
                      E --> G[Agenda]
                      E --> H[Financeiro]
                      
                      I[Área Admin] --> J[Usuários]
                      I --> K[Conteúdo]
                      I --> L[Sistema]
                    `}
                  />
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>

          {/* 5. Modelo de Monetização */}
          <Collapsible>
            <CollapsibleTrigger className="w-full">
              <Card>
                <CardHeader>
                  <CardTitle>5. Modelo de Monetização</CardTitle>
                </CardHeader>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Planos e Assinaturas</li>
                    <li>Comissões</li>
                    <li>Taxas de Serviço</li>
                    <li>Outros Modelos de Receita</li>
                  </ul>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>

          {/* 6. Roadmap de Versões */}
          <Collapsible>
            <CollapsibleTrigger className="w-full">
              <Card>
                <CardHeader>
                  <CardTitle>6. Roadmap de Versões</CardTitle>
                </CardHeader>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <Card>
                <CardContent className="pt-6">
                  <Mermaid
                    chart={`
                    gantt
                      title Roadmap do Projeto
                      dateFormat  YYYY-MM-DD
                      section MVP
                      Versão 1.0           :2024-01-01, 90d
                      section Expansão
                      Versão 2.0           :2024-04-01, 90d
                      section Consolidação
                      Versão 3.0           :2024-07-01, 90d
                      section Escala
                      Versão 4.0           :2024-10-01, 90d
                    `}
                  />
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>

          {/* 7. Fluxos e Narrativas */}
          <Collapsible>
            <CollapsibleTrigger className="w-full">
              <Card>
                <CardHeader>
                  <CardTitle>7. Fluxos e Narrativas</CardTitle>
                </CardHeader>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fluxos de Entrada</li>
                    <li>Jornadas dos Usuários</li>
                    <li>Fluxos de Processos</li>
                    <li>Integrações</li>
                  </ul>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
}
