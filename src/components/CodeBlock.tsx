
import React from 'react';

interface CodeBlockProps {
  language?: string;
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language = 'cpp', children }) => {
  // Simple syntax highlighting for common keywords
  const highlightCode = (code: string, language: string) => {
    if (language === 'cpp') {
      return code
        .replace(/(#include|using|namespace|int|void|return|const|auto|for|if|else|while|class|struct|template|public|private|protected)/g, '<span class="text-tech-purple">$1</span>')
        .replace(/(std|string|vector|map|set|pair|queue|stack|priority_queue|unordered_map|unordered_set)/g, '<span class="text-tech-blue">$1</span>')
        .replace(/(".*?")/g, '<span class="text-tech-green">$1</span>')
        .replace(/(\/\/.*$)/gm, '<span class="text-tech-yellow">$1</span>')
        .replace(/(\d+)/g, '<span class="text-tech-cyan">$1</span>');
    }
    
    if (language === 'python') {
      return code
        .replace(/(def|class|import|from|as|if|elif|else|for|while|return|with|try|except|finally|raise)/g, '<span class="text-tech-purple">$1</span>')
        .replace(/(self|True|False|None|and|or|not|in|is|lambda|print)/g, '<span class="text-tech-blue">$1</span>')
        .replace(/(".*?")/g, '<span class="text-tech-green">$1</span>')
        .replace(/('.*?')/g, '<span class="text-tech-green">$1</span>')
        .replace(/(#.*$)/gm, '<span class="text-tech-yellow">$1</span>')
        .replace(/(\d+)/g, '<span class="text-tech-cyan">$1</span>');
    }

    return code;
  };

  return (
    <pre className="code-block">
      <code dangerouslySetInnerHTML={{ __html: highlightCode(children, language) }} />
    </pre>
  );
};

export default CodeBlock;
