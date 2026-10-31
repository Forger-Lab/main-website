import assert from 'node:assert/strict';
import fs from 'node:fs';
const routes = ['/', ...fs.readdirSync('app', {withFileTypes:true}).filter(d=>d.isDirectory() && fs.existsSync(`app/${d.name}/page.tsx`)).map(d=>`/${d.name}`)];
const files=routes.map(r=>`app${r==='/'?'':r}/page.tsx`);
const sitemap=fs.readFileSync('app/sitemap.ts','utf8');
for(const route of routes) assert(sitemap.includes(`path: "${route}"`), `Sitemap missing ${route}`);
const ids=new Map(files.map((f,i)=>[routes[i],[...fs.readFileSync(f,'utf8').matchAll(/\bid="([^"]+)"/g)].map(m=>m[1])]));
for(const file of [...files,'components/Nav.tsx','components/Footer.tsx','lib/navigation.ts']) {
 const text=fs.readFileSync(file,'utf8');
 for(const match of text.matchAll(/(?:href=|, )"(\/[a-zA-Z0-9/#-]*)"/g)) {
  const [route,hash]=match[1].split('#'); assert(routes.includes(route), `${file}: ${match[1]}`);
  if(hash) assert(ids.get(route).includes(hash), `${file}: missing anchor ${match[1]}`);
 }
}
for(let i=1;i<files.length;i++) {
 const text=fs.readFileSync(files[i],'utf8');
 assert(text.includes('<Nav />') && text.includes('<Footer />'),files[i]);
 assert(text.includes('openGraph:') && text.includes('twitter:'),files[i]);
}
const home=fs.readFileSync('app/page.tsx','utf8');
assert(home.includes('faqs.map('));
console.log(`Site checks passed: ${routes.length} sitemap routes, shared navigation/footer, internal route and anchor targets, social metadata, shared FAQ schema source.`);
