
import { type FC } from "react";

export const ProfessionalSection: FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary">👨‍💼 ÁREA: Profissional/Mentor</h3>
      
      <div className="pl-4">
        <h4 className="font-medium">1. PÁGINA: Dashboard</h4>
        <div className="pl-4 space-y-4">
          <div>
            <h5 className="text-sm font-medium text-gray-700">ESTRUTURA:</h5>
            <div className="pl-4">
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">□ Header com Métricas</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Total de mentorias realizadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Faturamento mensal/anual</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Rating médio (estrelas)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Taxa de conversão</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">□ Gráficos de Performance</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Evolução mensal de mentorias</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Distribuição por serviço</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Horários mais populares</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">□ Agenda do Dia</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Lista de compromissos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Links rápidos para salas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Status de cada sessão</span>
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
                <span>Filtros de período personalizados</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Export de relatórios (PDF/Excel)</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Quick actions para agendamentos</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Sistema de metas e objetivos</span>
              </li>
            </ul>
          </div>
        </div>

        <h4 className="font-medium mt-4">2. PÁGINA: Perfil Profissional</h4>
        <div className="pl-4 space-y-4">
          <div>
            <h5 className="text-sm font-medium text-gray-700">ESTRUTURA:</h5>
            <div className="pl-4">
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">□ Informações Básicas</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Foto de perfil profissional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Biografia e especialidades</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Certificações e formação</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">□ Portfólio</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Cases de sucesso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Depoimentos de clientes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Artigos publicados</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="font-medium mt-4">3. PÁGINA: Gestão de Serviços</h4>
        <div className="pl-4 space-y-4">
          <div>
            <h5 className="text-sm font-medium text-gray-700">ESTRUTURA:</h5>
            <div className="pl-4">
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">□ Listagem de Serviços</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Status (ativo/inativo)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Preço e duração</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Estatísticas de vendas</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">□ Formulário de Cadastro</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Informações do serviço</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Precificação e pacotes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Disponibilidade</span>
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
