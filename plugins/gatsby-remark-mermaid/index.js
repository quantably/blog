import { visit } from 'unist-util-visit';

export default ({ markdownAST }, pluginOptions) => {
  console.log("[gatsby-remark-mermaid] Plugin loaded (ESM).");
  visit(markdownAST, "code", node => {
    // Check if the language is mermaid
    if (node?.lang === "mermaid") {
      console.log("[gatsby-remark-mermaid] Found mermaid code block:", node.value.substring(0, 50) + "...");
      // Change the node type to HTML
      node.type = "html";
      // Add the mermaid class
      node.value = '<div class="mermaid">' + node.value + "</div>";
      // Clean up unnecessary properties
      node.lang = undefined;
      node.children = undefined;
    }
  });

  return markdownAST;
}; 