# Video Agent Starter

Starter público, pequeno e orientado a agentes para criar vídeos locais com código e Remotion.

O pacote não instala uma stack de aplicação, não cria serviços cloud e não inclui dados privados. Ele apenas copia um kit de projeto com um prompt operacional completo para Claude Code, Codex e outros agentes.

## Uso recomendado

```bash
npx video-agent-starter init my-video
cd my-video
```

Depois, abra `my-video` no Claude Code ou Codex e peça para seguir `AGENTS.md`.

O comando também funciona na pasta atual:

```bash
npx video-agent-starter init .
```

Arquivos já existentes nunca são substituídos por padrão. Para substituir os arquivos do starter explicitamente:

```bash
npx video-agent-starter init my-video --force
```

Use `--force` somente quando quiser atualizar o kit e tiver revisado os arquivos locais.

## O que é criado

```text
my-video/
├── assets/
│   ├── audio/
│   ├── images/
│   ├── logos/
│   └── video/
├── previews/
├── renders/
├── src/
├── AGENTS.md
├── BEATMAP.md
├── CLAUDE.md
├── PROJECT.md
└── .gitignore
```

O starter não cria `package.json` no projeto de vídeo. Isso evita sobrescrever ou impor dependências em projetos existentes. O agente decide, após diagnóstico e aprovação, entre iniciar Remotion do zero ou adaptar um projeto já existente.

`AGENTS.md` contém o fluxo completo: diagnóstico do computador, consulta obrigatória à documentação oficial do Remotion, aprovação antes de instalar dependências, inspeção de assets, beat map, direção visual, preview e aprovação antes do render final.

## Bootstrap Remotion

`AGENTS.md` aponta para documentação oficial e usa o fluxo mínimo documentado por Remotion:

```bash
npx create-video@latest --yes --blank my-video
cd my-video
npx remotion skills add
npm run dev
```

Fonte de verdade:

- [Remotion](https://www.remotion.dev/)
- [Criar um novo projeto](https://www.remotion.dev/docs/)
- [Documentação Remotion](https://www.remotion.dev/docs/)

Se documentação e starter divergirem, siga Remotion. Não fixe versões ou invente comandos sem consultar a documentação atual.

## Claude Code e Codex

### Claude Code

```bash
claude
```

Na primeira mensagem, peça:

```text
Leia AGENTS.md e CLAUDE.md. Faça diagnóstico do ambiente antes de alterar arquivos. Siga a documentação oficial do Remotion para bootstrap.
```

### Codex

Abra pasta no Codex e peça:

```text
Leia AGENTS.md. Faça diagnóstico do ambiente antes de alterar arquivos. Siga a documentação oficial do Remotion para bootstrap.
```

## Desenvolvimento deste pacote

```bash
npm install
npm test
npm run pack:check
node bin/video-agent-starter.cjs init ./tmp-video
```

O pacote não tem dependências de runtime. `npm install` existe para validar o pacote no fluxo npm, mas não precisa baixar uma stack adicional.

## Publicação

Este repositório fica preparado para publicação, mas o npm publish não é executado automaticamente.

Antes de publicar:

```bash
npm whoami
npm pack --dry-run
npm publish --access public
```

Confirme o nome final `video-agent-starter` e autenticação npm antes do primeiro `npm publish`. Se o nome estiver ocupado, escolha outro nome — por exemplo, um nome com escopo próprio — antes de publicar.

## Licença

MIT. Consulte [LICENSE](LICENSE).
