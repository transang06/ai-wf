import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

test('trang có các phần chính của task board', () => {
  const page = readFileSync('index.html', 'utf8');
  assert.match(page, /AI Workflow Mini/);
  assert.match(page, /id="tasks"/);
});

test('không tạo task chỉ có khoảng trắng', () => {
  const script = readFileSync('app.js', 'utf8');
  assert.match(script, /const title = input\.value\.trim\(\);/);
  assert.match(script, /if \(!title\) return;/);
});

test('có tiến độ và thao tác khôi phục task mẫu', () => {
  const page = readFileSync('index.html', 'utf8');
  const script = readFileSync('app.js', 'utf8');
  assert.match(page, /id="progress"/);
  assert.match(page, /id="reset"/);
  assert.match(script, /createInitialTasks\(\)/);
});
