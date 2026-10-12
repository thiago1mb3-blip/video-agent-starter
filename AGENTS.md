# Video Agent Starter

Você é agente de implementação de vídeo local. Trabalhe dentro desta pasta, preserve arquivos existentes e mantenha solução simples.

## Objetivo

Criar vídeos verticais, locais e renderizáveis com código. Use Remotion quando projeto precisar de composição, animação, áudio, vídeo, imagens ou renderização programática.

## Fonte oficial obrigatória

Antes de instalar, configurar ou escrever código Remotion, consulte:

- Site: https://www.remotion.dev/
- Documentação: https://www.remotion.dev/docs/

Esses endereços são fonte de verdade para instalação, templates, CLI, composição, mídia, áudio, skills, versões e renderização. Se este arquivo divergir da documentação oficial, siga documentação oficial.

Não invente comandos de instalação. Não fixe versões antigas sem motivo. Não adicione frameworks, serviços ou dependências que o projeto não exige.

## Etapa 0 — diagnóstico

Antes de modificar arquivos, verifique:

- sistema operacional;
- Node.js e npm;
- FFmpeg, quando necessário para mídia/renderização;
- Git;
- espaço disponível;
- conteúdo atual da pasta;
- existência de `package.json` e projeto Remotion.

Reporte de forma curta:

```text
AMBIENTE
Node.js: OK / AUSENTE
npm: OK / AUSENTE
FFmpeg: OK / AUSENTE / NÃO NECESSÁRIO AINDA
Git: OK / AUSENTE
Projeto Remotion: SIM / NÃO
Pasta de trabalho: ...
```

Não instale software de sistema silenciosamente. Se Node.js ou npm faltarem, pare e explique como instalar. Se uma instalação segura puder ser feita por gerenciador já disponível, mostre comando e peça aprovação antes de executar.

## Bootstrap mínimo Remotion

Para projeto novo, consulte documentação atual e prefira o fluxo mínimo documentado:

```bash
npx create-video@latest --yes --blank my-video
cd my-video
npx remotion skills add
npm run dev
```

Não execute esse fluxo se já houver projeto válido. Adapte projeto existente somente após inspecionar `package.json` e scripts.

## Estrutura local

- `assets/audio/`: narração e música fornecidas pelo usuário.
- `assets/images/`: imagens fornecidas pelo usuário.
- `assets/logos/`: logos e fontes de marca.
- `assets/video/`: vídeos fornecidos pelo usuário.
- `src/`: código Remotion.
- `previews/`: previews leves e temporários.
- `renders/`: renders finais locais.
- `PROJECT.md`: decisão de formato, público e restrições.
- `BEATMAP.md`: mapa de cenas, duração e áudio.

Não mova, renomeie ou apague assets sem autorização. Não inclua credenciais, dados pessoais, arquivos privados ou mídia licenciada sem confirmação.

## Regras de produção

1. Leia `PROJECT.md` e `BEATMAP.md` antes de codar.
2. Confirme formato: 1080x1920 para vertical, salvo instrução diferente.
3. Comece com composição curta e verificável.
4. Faça preview antes de render final.
5. Renderize somente após validar timing, áudio, cortes e legibilidade.
6. Explique comandos executados e arquivos alterados.

## Dependências

Stack padrão: Node.js, npm, Remotion e FFmpeg quando necessário.

Não adicionar Docker, banco de dados, Supabase, Next.js, Three.js, R3F, Python, cloud ou outro framework sem requisito explícito.

## Definition of done

- ambiente diagnosticado;
- fonte oficial consultada;
- projeto inicializado ou existente preservado;
- composição abre no Remotion Studio;
- preview revisado;
- render final gerado quando solicitado;
- nenhum segredo ou estrutura privada exposto.
