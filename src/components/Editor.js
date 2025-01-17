import { useEffect } from "react";
import { getTemplates } from "../api/request";

import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';

export default function Editor({ content, setContent }) {
    useEffect(() => {
        const fetchDetails = async () => {
            const response = await getTemplates()
            console.log(response)
        }
        fetchDetails();
    }, [])
    const handleEditorChange = (content) => {
        setContent(content);
    };


    return (
        <div className="h-full w-full">
            <TinyMCEEditor
                apiKey="your-api-key"
                init={{
                    height: '100%',
                    menubar: false,
                    statusbar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks',
                        'insertdatetime', 'table', 'wordcount'
                    ],
                    toolbar: 'blocks | ' +
                        'bold italic | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist | ' +
                        'removeformat',
                    content_style: `
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              font-size: 14px;
              line-height: 1.5;
              padding: 0;
              margin: 0;
            }
          `,
                    readonly: false,
                    auto_focus: true,
                    branding: false,
                    resize: false,
                    min_height: 500,
                    setup: (editor) => {
                        editor.on('init', () => {
                            editor.getBody().style.backgroundColor = 'transparent';
                        });
                    }
                }}
                value={content}
                onEditorChange={handleEditorChange}
            />
        </div>
    );
}

