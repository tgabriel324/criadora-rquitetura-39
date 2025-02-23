
import { type FC } from "react";

export const MarketplaceSection: FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary">🛍️ ÁREA: Marketplace</h3>
      
      <div className="pl-4">
        <h4 className="font-medium">1. PÁGINA: Listagem Principal</h4>
        <div className="pl-4 space-y-4">
          <div>
            <h5 className="text-sm font-medium text-gray-700">ESTRUTURA:</h5>
            <div className="pl-4">
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">□ Sistema de Busca</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Barra de pesquisa inteligente</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Filtros avançados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Tags e categorias</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">□ Exibição de Serviços</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Cards com preview</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Informações principais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Rating e reviews</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-medium text-gray-700">FUNCIONALIDADES:</h5>
            <ul className="pl-4 space-y-1 text-sm">
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Ordenação personalizada</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Paginação infinita</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Favoritar serviços</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Compartilhamento</span>
              </li>
            </ul>
          </div>
        </div>

        <h4 className="font-medium mt-4">2. PÁGINA: Detalhe do Serviço</h4>
        <div className="pl-4 space-y-4">
          <div>
            <h5 className="text-sm font-medium text-gray-700">ESTRUTURA:</h5>
            <div className="pl-4">
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">□ Informações Detalhadas</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Descrição completa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Galeria de imagens</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Horários disponíveis</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">□ Perfil do Profissional</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Resumo do profissional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Histórico de avaliações</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Certificações</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">□ Sistema de Reviews</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Avaliações detalhadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Fotos dos clientes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Respostas do profissional</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
