import { visit } from "unist-util-visit";
import { select } from "unist-util-select";
import { h } from "hastscript";
import { u } from "unist-builder";

export const myRehypeToc = () => (tree) => {
  let headings = [];

  visit(tree, "element", (node) => {
    if (["h1", "h2", "h3"].includes(node.tagName)) {
      headings.push({
        type: node.tagName,
        text: node.children[0],
        href: `#${node.properties.id}`,
      });
    }
  });

  const hastHeadings = headings.map((heading) => {
    return h("li", { class: heading.type }, [
      h("a", { href: heading.href }, heading.text),
    ]);
  });

  const hastNav = h("header", h("nav", [h("ul", [...hastHeadings])]));

  const rootNode = select("root", tree);
  const newRoot = u("root", [hastNav, h("main", [...rootNode.children])]);

  return newRoot;
};
