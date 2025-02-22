
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Mermaid from "@/components/ui/mermaid";

const Bruno = () => {
  const organizationalChart = `
    graph TD
      A[Sistema SaaS] --> B[Escritores]
      A --> C[Leitores]
      A --> D[Administradores]
      B --> E[Gerenciam Devocionais]
      B --> F[Configuram Loja]
      C --> G[Acessam Conteúdo]
      C --> H[Biblioteca Pessoal]
      D --> I[Backoffice]
  `;

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Seção 1: Visão Geral */}
      <Card>
        <CardHeader>
          <CardTitle>1. Visão Geral</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            O sistema será uma plataforma SaaS que permitirá que escritores e produtores de conteúdo 
            religioso criem suas próprias lojas de devocionais e vendam acesso ao seu material de forma 
            organizada e segura. Os leitores poderão comprar e acessar apenas os devocionais adquiridos, 
            dentro de um ambiente interativo e otimizado.
          </p>
        </CardContent>
      </Card>

      {/* Seção 2: Diagrama Organizacional */}
      <Card>
        <CardHeader>
          <CardTitle>2. Diagrama Organizacional</CardTitle>
          <CardDescription>Estrutura hierárquica do sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <Mermaid chart={organizationalChart} />
        </CardContent>
      </Card>

      {/* Seção 3: Tipos de Usuários */}
      <Card>
        <CardHeader>
          <CardTitle>3. Tipos de Usuários</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Collapsible>
            <CollapsibleTrigger className="text-lg font-semibold">🎯 Escritores (Clientes SaaS)</CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Criam e gerenciam suas lojas de devocionais</li>
                <li>Configuram preços e personalização da loja</li>
                <li>Publicam e gerenciam conteúdo devocional</li>
                <li>Acessam relatórios de vendas e métricas</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="text-lg font-semibold">👥 Leitores (Usuários Finais)</CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Compram e acessam devocionais</li>
                <li>Mantêm biblioteca pessoal</li>
                <li>Interagem com o conteúdo</li>
                <li>Compartilham reflexões</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="text-lg font-semibold">⚙️ Administradores</CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Gerenciam a plataforma SaaS</li>
                <li>Configuram planos e preços</li>
                <li>Monitoram métricas globais</li>
                <li>Fornecem suporte aos escritores</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Seção 4: Funcionalidades Principais */}
      <Card>
        <CardHeader>
          <CardTitle>4. Funcionalidades Principais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Collapsible>
            <CollapsibleTrigger className="text-lg font-semibold">📚 Gestão de Escritores</CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Cadastro e configuração de conta</li>
                <li>Personalização da loja (marca, cores, fontes)</li>
                <li>Gerenciamento de devocionais</li>
                <li>Configuração de preços</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="text-lg font-semibold">📱 Experiência do Leitor</CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Biblioteca pessoal de devocionais</li>
                <li>Leitura interativa otimizada</li>
                <li>Marcadores de progresso</li>
                <li>Áudio devocionais (opcional)</li>
                <li>Compartilhamento social</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="text-lg font-semibold">💰 Sistema de Pagamentos</CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Integração com gateways (QIFI, Stripe, Mercado Pago)</li>
                <li>Venda individual de devocionais</li>
                <li>Planos de assinatura</li>
                <li>Gestão de transações</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Seção 5: Modelo de Monetização */}
      <Card>
        <CardHeader>
          <CardTitle>5. Modelo de Monetização</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Collapsible>
            <CollapsibleTrigger className="text-lg font-semibold">🎯 Planos SaaS para Escritores</CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Plano Básico: Funcionalidades essenciais, limite de devocionais</li>
                <li>Plano Pro: Recursos avançados, maior limite</li>
                <li>Plano Enterprise: Personalização total, suporte dedicado</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="text-lg font-semibold">💎 Receita dos Escritores</CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Venda individual de devocionais</li>
                <li>Pacotes de devocionais</li>
                <li>Planos de assinatura para leitores</li>
                <li>Comissão da plataforma por venda</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Seção 6: Roadmap */}
      <Card>
        <CardHeader>
          <CardTitle>6. Roadmap</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Collapsible>
            <CollapsibleTrigger className="text-lg font-semibold">📅 Fase 1: MVP</CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Sistema básico de cadastro</li>
                <li>Criação e venda de devocionais</li>
                <li>Pagamentos via Stripe</li>
                <li>Interface de leitura básica</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="text-lg font-semibold">📅 Fase 2: Evolução</CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Personalização avançada das lojas</li>
                <li>Sistema de áudio devocionais</li>
                <li>Integrações sociais</li>
                <li>Analytics avançado</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="text-lg font-semibold">📅 Fase 3: Expansão</CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>App mobile</li>
                <li>Marketplace de devocionais</li>
                <li>Sistema de afiliados</li>
                <li>Internacionalização</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Seção 7: Fluxos */}
      <Card>
        <CardHeader>
          <CardTitle>7. Fluxos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Collapsible>
            <CollapsibleTrigger className="text-lg font-semibold">🔄 Fluxo do Escritor</CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Cadastro na plataforma</li>
                <li>Escolha do plano SaaS</li>
                <li>Configuração da loja</li>
                <li>Criação e publicação de devocionais</li>
                <li>Gestão de vendas e métricas</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="text-lg font-semibold">🔄 Fluxo do Leitor</CollapsibleTrigger>
            <CollapsibleContent className="p-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>Descoberta de devocionais</li>
                <li>Compra do conteúdo</li>
                <li>Acesso à biblioteca pessoal</li>
                <li>Leitura e interação</li>
                <li>Compartilhamento de reflexões</li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
};

export default Bruno;
