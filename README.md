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

## Como executar localmente

```bash
npm install
npx playwright install
PLAYWRIGHT_EMAIL="seu-email@dominio.com" PLAYWRIGHT_PASSWORD="sua-senha" npm run test:e2e
```

## Pipeline no GitHub Actions

Foi adicionada a workflow `.github/workflows/playwright.yml` para rodar os testes em:

- `pull_request`
- `push` para `main`/`master`
- execução manual (`workflow_dispatch`)

### Secrets necessários

Cadastre no repositório (Settings → Secrets and variables → Actions):

- `PLAYWRIGHT_EMAIL`
- `PLAYWRIGHT_PASSWORD`

Sem esses secrets, o teste é marcado como **skipped** com mensagem explicativa.
