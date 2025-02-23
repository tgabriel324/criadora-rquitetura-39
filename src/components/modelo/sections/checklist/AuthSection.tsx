
import { type FC } from "react";

export const AuthSection: FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-primary">🔐 ÁREA: Autenticação e Acesso</h3>
      
      <div className="pl-4">
        <h4 className="font-medium">1. PÁGINA: Landing Page</h4>
        <div className="pl-4 space-y-4">
          <div>
            <h5 className="text-sm font-medium text-gray-700">ESTRUTURA:</h5>
            <div className="pl-4">
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">□ Header</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Logo e navegação principal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Botões de Login/Registro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Menu responsivo</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">□ Hero Section</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Título principal com proposta de valor</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Subtítulo explicativo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>CTA principal</span>
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
                <span>Navegação entre seções</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Formulário de contato</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Newsletter signup</span>
              </li>
            </ul>
          </div>
        </div>

        <h4 className="font-medium mt-4">2. PÁGINA: Login</h4>
        <div className="pl-4 space-y-4">
          <div>
            <h5 className="text-sm font-medium text-gray-700">ESTRUTURA:</h5>
            <div className="pl-4">
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">□ Formulário de Login</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Campo de email</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Campo de senha</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Opção "Lembrar-me"</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">□ Opções Alternativas</p>
                  <ul className="pl-4 text-sm">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Login com Google</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" disabled />
                      <span>Login com LinkedIn</span>
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
                <span>Validação de campos</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Recuperação de senha</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Redirecionamento pós-login</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" disabled />
                <span>Bloqueio após tentativas falhas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
