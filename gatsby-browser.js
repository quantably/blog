// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism-solarizedlight.css"

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

// Scroll to hash element or top of page
export const shouldUpdateScroll = ({ routerProps }) => {
  const { hash } = routerProps.location;
  if (hash) {
    // Let onRouteUpdate handle hash scrolling after render
    return false;
  }
  return [0, 0];
};

// Re-run Mermaid on route updates, handle hash scrolling
export const onRouteUpdate = ({ location }) => {
  try {
    mermaid.run();
  } catch (error) {
    console.error("[gatsby-browser.js] Error rendering Mermaid on route update:", error);
  }

  if (location.hash) {
    requestAnimationFrame(() => {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  }
};

// Handle hash on initial page load (e.g. direct navigation to /#about)
export const onClientEntry = () => {
  if (window.location.hash) {
    // Wait for DOM to be ready
    const scrollToHash = () => {
      const el = document.querySelector(window.location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        requestAnimationFrame(scrollToHash);
      }
    };
    // Delay to ensure content is rendered
    setTimeout(scrollToHash, 100);
  }
};
