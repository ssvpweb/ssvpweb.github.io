# Planos de Implementação (Públicos)

Esta pasta é reservada para armazenar os planos de implementação gerais e de funcionalidades do Webapp da SSVP que podem ser expostos no repositório público do GitHub.

## Diretrizes de Organização de Planos

1. **Planos Gerais:** Planos que detalham a arquitetura macro, navegação de telas ou novas interfaces (salvos nesta pasta).
2. **Planos de Feature:** Planos focados em blocos de funcionalidade específicos (ex: carrossel de cards, acessibilidade de barra inferior) que não envolvem credenciais ou privacidade (salvos nesta pasta).
3. **Planos Privados (Segurança e LGPD):** Qualquer plano que envolva:
   - Criptografia de senhas (ex: bcrypt);
   - Integração segura com o Google Drive/Sheets (ex: credenciais, OAuth2);
   - Políticas de privacidade e conformidade com LGPD;
   - Fluxos de autenticação em geral;
   *Deve ser mantido obrigatoriamente na pasta privada* [dev_local/](file:///c:/webappssvp/webappssvp.github.io/dev_local/) *(protegida pelo `.gitignore`)*.
