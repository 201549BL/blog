import { Prism } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const SyntaxHighlighter = ({ children }) => {
  return (
    <Prism language="javascript" style={dracula}>
      {children}
    </Prism>
  );
};

export default SyntaxHighlighter;
