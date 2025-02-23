
import { type FC } from "react";

export const ClientSection: FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary">👤 ÁREA: Cliente</h3>
      
      <div className="pl-4">
        <h4 className="font-medium">1. PÁGINA: Dashboard</h4>
        <div className="pl-4 space-y-4">
          <div>
            <h5 className="text-sm font-medium text-gray-700">ESTRUTURA:</h5>
            <div className="pl-4">
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">□ Painel de Estatísticas</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Gráfico de mentorias realizadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Total de horas de mentoria</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Valor investido</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">□ Feed de Atividades</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Lista de últimas mentorias</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Notificações pendentes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Mensagens não lidas</span>
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
                <span>Filtros de período</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Download de relatórios</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Agendamento rápido</span>
              </li>
            </ul>
          </div>
        </div>

        <h4 className="font-medium mt-4">2. PÁGINA: Mentorias</h4>
        <div className="pl-4 space-y-4">
          <div>
            <h5 className="text-sm font-medium text-gray-700">ESTRUTURA:</h5>
            <div className="pl-4">
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">□ Lista de Mentorias</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Filtros avançados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Ordenação personalizada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Visualização em lista/grid</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">□ Detalhes da Mentoria</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Informações do mentor</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Histórico de sessões</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Materiais compartilhados</span>
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
