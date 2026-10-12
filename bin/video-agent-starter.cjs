#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const packageJson = require('../package.json');
const templateRoot = path.join(__dirname, '..', 'templates', 'project');

function printHelp() {
  console.log(`Video Agent Starter ${packageJson.version}

Usage:
  npx video-agent-starter init [directory] [--force]
  npx video-agent-starter --help
  npx video-agent-starter --version

Commands:
  init     Copy the agent-ready video project kit into directory.

Options:
  --force  Replace starter-owned files that already exist.
`);
}

function collectFiles(directory, relative = '') {
  const current = path.join(directory, relative);
  return fs.readdirSync(current, {withFileTypes: true}).flatMap((entry) => {
    const entryRelative = path.join(relative, entry.name);
    if (entry.isDirectory()) return collectFiles(directory, entryRelative);
    return [entryRelative];
  });
}

function copyStarter(targetDirectory, force) {
  const files = collectFiles(templateRoot);
  const created = [];
  const skipped = [];
  const replaced = [];

  for (const relativeFile of files) {
    const source = path.join(templateRoot, relativeFile);
    const destination = path.join(targetDirectory, relativeFile);
    fs.mkdirSync(path.dirname(destination), {recursive: true});

    if (fs.existsSync(destination) && !force) {
      skipped.push(relativeFile);
      continue;
    }

    if (fs.existsSync(destination)) replaced.push(relativeFile);
    else created.push(relativeFile);
    fs.copyFileSync(source, destination);
  }

  return {created, skipped, replaced};
}

function init(directory, force) {
  const targetDirectory = path.resolve(directory || 'video-project');
  fs.mkdirSync(targetDirectory, {recursive: true});
  const result = copyStarter(targetDirectory, force);

  console.log(`Video Agent Starter ready: ${targetDirectory}`);
  if (result.created.length) console.log(`Created: ${result.created.length} file(s)`);
  if (result.replaced.length) console.log(`Replaced: ${result.replaced.length} file(s)`);
  if (result.skipped.length) console.log(`Skipped existing: ${result.skipped.length} file(s)`);
  console.log('\nNext steps:');
  console.log(`  cd "${targetDirectory}"`);
  console.log('  Open project in Claude Code or Codex');
  console.log('  Ask agent to read AGENTS.md and diagnose environment');
}

function main(argv) {
  const args = [...argv];
  if (args.includes('--version') || args.includes('-v')) {
    console.log(packageJson.version);
    return;
  }
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    printHelp();
    return;
  }

  const command = args.shift();
  if (command !== 'init') {
    console.error(`Unknown command: ${command}`);
    printHelp();
    process.exitCode = 1;
    return;
  }

  const force = args.includes('--force');
  const directories = args.filter((arg) => !arg.startsWith('-'));
  if (directories.length > 1) {
    console.error('init accepts one directory.');
    process.exitCode = 1;
    return;
  }
  init(directories[0], force);
}

main(process.argv.slice(2));
