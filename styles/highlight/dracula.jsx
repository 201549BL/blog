import { css } from "styled-components";
import { boxShadow } from "../utils/boxShadow";

/* Dracula Theme v1.2.5
 *
 * https://github.com/dracula/highlightjs
 *
 * Copyright 2016-present, All rights reserved
 *
 * Code licensed under the MIT license
 *
 * @author Denis Ciccale <dciccale@gmail.com>
 * @author Zeno Rocha <hi@zenorocha.com>
 */

export const dracula = css`
  @import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400&display=swap");
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #282a36;
    font-family: "JetBrains Mono", monospace;
    border-radius: var(--border-radius-sm);
    ${boxShadow("md")};
  }

  .hljs-built_in,
  .hljs-selector-tag,
  .hljs-section,
  .hljs-link {
    color: #8be9fd;
  }

  .hljs-keyword {
    color: #ff79c6;
  }

  .hljs,
  .hljs-subst {
    color: #f8f8f2;
  }

  .hljs-title,
  .hljs-attr,
  .hljs-meta-keyword {
    font-style: italic;
    color: #50fa7b;
  }

  .hljs-string,
  .hljs-meta,
  .hljs-name,
  .hljs-type,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition,
  .hljs-variable,
  .hljs-template-tag,
  .hljs-template-variable {
    color: #f1fa8c;
  }

  .hljs-comment,
  .hljs-quote,
  .hljs-deletion {
    color: #6272a4;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-title,
  .hljs-section,
  .hljs-doctag,
  .hljs-type,
  .hljs-name,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-literal,
  .hljs-number {
    color: #bd93f9;
  }

  .hljs-emphasis {
    font-style: italic;
  }
`;
