# Blog Project Instructions

## Build and Deploy

This is a Gatsby blog deployed to GitHub Pages.

- `npm run build` - Builds locally only (outputs to `public/`). Does NOT deploy.
- `npm run deploy` - Cleans cache, builds, and pushes to `gh-pages` branch. **Use this to publish changes.**

Always use `npm run deploy` when the user wants to publish changes to the live site.

## Social Cards (OG Images)

New blog posts need social card images generated for link previews.

1. Start dev server: `npm run develop -- --port 9000`
2. Use agent-browser to screenshot the card:
   ```
   agent-browser open "http://localhost:9000/social-card/?title=URL+Encoded+Title&tags=Tag1%2CTag2&time=5+min&filename=post-folder-name"
   agent-browser screenshot static/social-cards/post-folder-name.png --width 1200 --height 630
   ```
3. Commit the new PNG to `static/social-cards/`
4. Run `npm run deploy`
