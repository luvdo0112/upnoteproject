import { registerCodeHighlighting } from "@lexical/code";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";

export default function CodeHighlightPlugin() {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (editor) {
      return registerCodeHighlighting(editor);
    }
  }, [editor]);
  return null;
}
