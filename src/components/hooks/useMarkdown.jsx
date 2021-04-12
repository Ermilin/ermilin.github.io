import React, { useEffect, useState } from 'react';
import marked from 'marked';
import { renderToString } from 'react-dom/server';
import Link from 'next/link';
import * as prism from 'prismjs';
import DOMPurify from 'dompurify';

const useMarkdown = (markdown) => {
  const [html, setHtml] = useState('');
  useEffect(() => {
    const renderer = {
      // link(href, title, text) {
      //   return renderToString(
      //     <Link href={href}>
      //       <a
      //         href={href}
      //         className='inline-flex items-end text-primary-main underline'
      //       >
      //         {text}
      //       </a>
      //     </Link>
      //   );
      // },
      // heading(text, level) {
      //   const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      //   return renderToString(
      //     <div>
      //       <>
      //         <a className='anchor' href={`#${escapedText}`}>
      //           <span className='mr-2'>#</span>
      //         </a>
      //         {text}
      //       </>
      //     </div>
      //   );
      // },
    };
    marked.use({ renderer });
    setHtml(
      DOMPurify.sanitize(marked(markdown), { USE_PROFILES: { html: true } })
    );
  }, []);
  useEffect(() => {
    if (html === '') return;
    prism.highlightAll();
  }, [html]);

  return html;
};

export default useMarkdown;
