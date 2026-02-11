# Teste automatizado com Playwright

Este repositório contém o início de um teste E2E em Playwright para o fluxo de login do portal **Autonomia Canal Motorista**.

## Cenário automatizado

Arquivo: `tests/login.spec.ts`

Fluxo implementado:

1. Acessar a URL de login.
2. Clicar no botão **Entrar** na tela inicial.
3. Preencher o campo `#signInName` com e-mail.
4. Preencher o campo `#password` com senha.
5. Clicar em **Entrar** para enviar o login.

## Como executar

```bash
npm install
npx playwright install
npm run test:e2e
```

## Configuração de credenciais por variável de ambiente

O teste usa valores padrão (os solicitados), mas você pode sobrescrever:

```bash
PLAYWRIGHT_EMAIL="seu-email@dominio.com" PLAYWRIGHT_PASSWORD="sua-senha" npm run test:e2e
```
