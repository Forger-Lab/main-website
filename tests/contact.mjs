import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const source = ts.transpileModule(fs.readFileSync('app/api/contact/route.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
function handler(outcome, sends = [{}, {}]) {
  const calls = [];
  const exports = {};
  vm.runInNewContext(source, { exports, process: { env: { RESEND_API_KEY: 'test', RECAPTCHA_SECRET_KEY: 'test' } }, console: { log() {}, warn() {}, error() {} }, fetch: async () => ({ json: async () => outcome }), require: name => name === 'resend' ? { Resend: class { emails = { send: async payload => { calls.push(payload); const result = sends.shift() ?? {}; if (result instanceof Error) throw result; return result; } }; } } : { NextResponse: { json: (body, init) => ({ body, status: init?.status ?? 200 }) } } });
  return { post: exports.POST, calls };
}
const valid = { success: true, action: 'CONTACT_SUBMIT', hostname: 'www.solvolab.com' };
const body = { name: '<Alice>', email: 'alice@example.com', message: 'https://one.test https://two.test https://three.test', turnstileToken: 'token', elapsedMs: 1 };
const request = data => new Request('https://www.solvolab.com/api/contact', { method: 'POST', body: JSON.stringify(data) });
let h = handler(valid);
assert.equal((await h.post(request(body))).status, 200);
assert.equal(h.calls.length, 2);
assert(h.calls[0].html.includes('&lt;Alice&gt;'));
h = handler(valid, [{ error: { message: 'Rejected' } }]);
assert.equal((await h.post(request(body))).status, 500);
assert.equal(h.calls.length, 1);
for (const failure of [{ error: { message: 'Rejected' } }, new Error('Network')]) {
  h = handler(valid, [{}, failure]);
  assert.equal((await h.post(request(body))).status, 200);
}
h = handler({ success: false });
for (let i = 0; i < 4; i++) assert.equal((await h.post(request(body))).status, 400);
assert.equal(h.calls.length, 0);
h = handler(valid);
assert.equal((await h.post(request(null))).status, 400);
assert.equal((await h.post(request({ ...body, turnstileToken: {} }))).status, 400);
for (let i = 0; i < 2; i++) assert.equal((await h.post(request(body))).status, 200);
assert.equal((await h.post(request(body))).status, 429);
console.log('Contact checks passed: delivery, provider rejection, confirmation failures, CAPTCHA rejection, validation, escaping, fast submissions, three links, rate limit.');

