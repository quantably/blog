// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import mermaid from 'mermaid';

// Switch back to onInitialClientRender
export const onInitialClientRender = () => {
  console.log("[gatsby-browser.js] Initializing Mermaid via onInitialClientRender...");
  mermaid.initialize({
    startOnLoad: false, // Explicitly prevent auto-start
    theme: 'default',
  });
  // Trigger rendering manually after initial client render
  try {
    // Call run() without arguments to render all detected diagrams
    mermaid.run();
    console.log("[gatsby-browser.js] Mermaid rendering triggered.");
  } catch (error) {
    console.error("[gatsby-browser.js] Error triggering Mermaid rendering:", error);
  }
};

// Optional: Re-run Mermaid on route updates if diagrams might be added dynamically
export const onRouteUpdate = () => {
  try {
    mermaid.run(); // Keep run() without args here too
    console.log("[gatsby-browser.js] Mermaid rendering triggered on route update.");
  } catch (error) {
    console.error("[gatsby-browser.js] Error rendering Mermaid on route update:", error);
  }
};
