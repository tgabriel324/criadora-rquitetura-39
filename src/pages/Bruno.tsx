import { Card } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";

const Bruno = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Devocionais</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Devocional 1</h2>
              <p className="text-gray-700">
                Este é o conteúdo do primeiro devocional.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Devocional 2</h2>
              <p className="text-gray-700">
                Este é o conteúdo do segundo devocional.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Devocional 3</h2>
              <p className="text-gray-700">
                Este é o conteúdo do terceiro devocional.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Devocional 4</h2>
              <p className="text-gray-700">
                Este é o conteúdo do quarto devocional.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Devocional 5</h2>
              <p className="text-gray-700">
                Este é o conteúdo do quinto devocional.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Devocional 6</h2>
              <p className="text-gray-700">
                Este é o conteúdo do sexto devocional.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Bruno;
