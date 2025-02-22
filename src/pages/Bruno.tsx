
import Navbar from "@/components/ui/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Bruno = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16 p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Página do Bruno</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards de Devocionais */}
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
        </div>
      </div>
    </div>
  );
};

export default Bruno;
