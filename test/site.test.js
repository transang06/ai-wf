import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

test('trang có các phần chính của task board', () => {
  const page = readFileSync('index.html', 'utf8');
  assert.match(page, /AI Workflow Mini/);
  assert.match(page, /id="tasks"/);
});
