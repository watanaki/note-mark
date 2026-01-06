import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor';

const MarkdownEditor = () => {
  return (
    <MDXEditor
      markdown="# Hello from MDX Editor"
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4prose-blockquote:my-4prose-ul:my-2 prose-li:my-0 prose-code:px-1prose-code:text-red-500prose-code:before:content-['']prose-code:after:content-['']"
    />
  );
};

export default MarkdownEditor;
