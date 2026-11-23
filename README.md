# gta6-meme-x-01 — "5 Stars in 5 Minutes"

Entry for make.fun's [gta6-meme-x-01 bounty](https://make.fun/bounty/gta6-meme-x-01):
post a GTA 6 meme on X. The top 50 entries share $500.

## The meme

`meme.png` — an original illustration drawn with PIL (no Rockstar/GTA artwork,
logos or fonts). After 13 years of waiting for GTA 6, the make.fun ghost is
already 5-star wanted on the streets of Leonida at sunset, its star coin in
hand. `make.fun` also appears as a neon sign on a building in the scene, next
to a `LEONIDA` sign.

- Top caption: "WAITED 13 YEARS FOR GTA 6"
- Bottom caption: "GOT 5 STARS IN 5 MINUTES"
- The ghost is the real make.fun press-kit mascot (`mark.svg`, disc removed),
  composited into the scene.

## The post

`draft-x.txt` holds the exact text to post on X with `meme.png` attached
(not posted yet — post it before the 23 Nov 2026 21:00 WIB deadline, then put
the post URL in `POST.json`).

The draft carries the bounty link, a tag of @makefunai, the entrant's play
code, and the pitch that people and their AI agents earn real money in
make.fun bounties.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` to `/output`,
as the kit's starter does. The entry is the X post itself: the house reads
the post from X and hands its first picture and text to the judge.
