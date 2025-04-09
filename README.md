# Peter's Blog

This blog uses the [Gatsby Minimal Blog Theme](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog).

## Quick Start

1.  **Clone/Setup:** Ensure you have the project files locally.
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Run Development Server:**
    ```bash
    npm run develop
    ```
    The site will be available at `http://localhost:8000`. Draft posts are visible in this mode.
4.  **Build for Production:**
    ```bash
    npm run build
    ```
    This creates the static site in the `public` directory. Draft posts are automatically excluded.
5.  **Serve Production Build Locally:**
    ```bash
    npm run serve
    ```
    This serves the contents of the `public` directory at `http://localhost:9000`.

## Writing Content

### Blog Posts

1.  Create a new folder inside `content/posts/your-post-slug`.
2.  Create an `index.mdx` file within that folder.
3.  Add frontmatter (see below) and your content (in Markdown/MDX).
4.  Place any images for the post in the same folder and reference them relative to `index.mdx`.

### Pages

1.  Create a new folder inside `content/pages/your-page-slug`.
2.  Create an `index.mdx` file within that folder.
3.  Add frontmatter (at least `title` and `slug`) and your page content.

## Deployment

*   The production build (`npm run build`) automatically excludes draft posts.
*   Deploy the contents of the `public` directory to your hosting provider (e.g., GitHub Pages, Netlify).

