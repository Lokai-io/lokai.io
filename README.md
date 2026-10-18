# Lokai.io launch site

Dependency-free static launch surface for `lokai.io`.

## Local preview

From this directory:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/`.

## Deployment

Publish the contents of this `site` directory as the domain root. No build step
or server-side runtime is required. Keep the launch-access links pointed at
`licensing@lokai.io` until an approved signup or public-download endpoint exists.

The checked-in `CNAME` binds the GitHub Pages deployment to `lokai.io`, and
`.nojekyll` keeps this dependency-free static tree on the direct Pages path.

Do not change the candidate wording to general availability until release
signing, anonymous public distribution, and named launch proofs pass. The
approved freeware license is already bound separately by the release builder.

## Visual asset provenance

- `assets/lokai-local-workspace-hero.png` was generated for this project with the
  built-in OpenAI image generation tool on 2026-08-21.
- `assets/lokai-charms-sigil.svg` is the existing Lokai brand sigil copied from
  `frontend/public/lokai-charms-sigil.svg`.
