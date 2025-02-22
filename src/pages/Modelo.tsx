
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Modelo = () => {
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

        {/* Cards de Exemplos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Devocional 1</h2>
            <p className="text-gray-600 mb-4">
              Reflexão sobre fé e perseverança nos momentos difíceis.
            </p>
            <Button variant="outline">Ler mais</Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Devocional 2</h2>
            <p className="text-gray-600 mb-4">
              Meditação sobre gratidão e contentamento.
            </p>
            <Button variant="outline">Ler mais</Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Devocional 3</h2>
            <p className="text-gray-600 mb-4">
              Estudo sobre amor e compaixão no dia a dia.
            </p>
            <Button variant="outline">Ler mais</Button>
          </Card>
        </div>

        {/* Estrutura Organizacional */}
        <Card>
          <CardHeader>
            <CardTitle>Estrutura Organizacional</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-4 rounded-lg shadow-inner overflow-auto">
              <pre className="mermaid text-sm">
                {`
flowchart LR
    Devocionais((Devocionais))
    AreaEscritor[Área do Escritor]
    AreaLeitor[Área do Leitor]
    Monetizacao[Monetização]

    Devocionais --> AreaEscritor & AreaLeitor & Monetizacao

    AreaEscritor --> Loja[Loja Virtual]
    AreaEscritor --> GestaoConteudo[Gestão de Conteúdo]
    
    AreaLeitor --> Biblioteca[Biblioteca]
    AreaLeitor --> LeituraInterativa[Leitura]
    
    Monetizacao --> Planos[Planos]
    Monetizacao --> Pagamentos[Pagamentos]
                `}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Modelo;
