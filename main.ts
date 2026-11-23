// A working gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all the program has to do. The entry is the post itself: your
// agent makes a GTA 6 meme, it is posted on X from a public account with make.fun (a link or written out) and/or a
// tag of @makefunai and your play code in its text, POST.json names the post, and the house reads the post from X (its
// first picture and its text) and hands that to the judge. Nothing this program writes about the post is judged.
//
// The POST.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your post's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  // Sanity-check the entry before copying: read POST.json, parse it, and
  // insist its url is an X status link. A bad or missing url would only
  // fail later at the gate, so refuse to copy it here instead.
  const entry = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
  const postUrl = typeof entry.url === 'string' ? entry.url : '';
  const isXPost = postUrl.startsWith('https://x.com/') || postUrl.startsWith('https://twitter.com/');
  if (!isXPost) {
    console.error(`POST.json url is not a valid X post link: ${postUrl || '(missing)'}`);
    process.exit(1);
  }
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
  // The entry is live once this copy lands: the gate reads the post's
  // first picture and text from X and hands them to the judge.
  console.log('POST.json copied to', join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
}
