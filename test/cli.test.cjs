const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const {execFileSync} = require('node:child_process');

const cli = path.join(__dirname, '..', 'bin', 'video-agent-starter.cjs');

test('init creates an agent-ready project kit', () => {
  const tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'video-agent-starter-'));
  const target = path.join(tempDirectory, 'my-video');
  const output = execFileSync(process.execPath, [cli, 'init', target], {encoding: 'utf8'});

  assert.match(output, /Video Agent Starter ready/);
  assert.equal(fs.existsSync(path.join(target, 'AGENTS.md')), true);
  assert.equal(fs.existsSync(path.join(target, 'CLAUDE.md')), true);
  assert.equal(fs.existsSync(path.join(target, 'assets', 'audio', '.gitkeep')), true);
  assert.equal(fs.existsSync(path.join(target, 'src', '.gitkeep')), true);
});

test('init preserves existing files without force', () => {
  const tempDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'video-agent-starter-'));
  const target = path.join(tempDirectory, 'my-video');
  fs.mkdirSync(target, {recursive: true});
  fs.writeFileSync(path.join(target, 'AGENTS.md'), 'local instructions\n');

  execFileSync(process.execPath, [cli, 'init', target], {encoding: 'utf8'});

  assert.equal(fs.readFileSync(path.join(target, 'AGENTS.md'), 'utf8'), 'local instructions\n');
});
