import CodeMirror from 'codemirror'

$(document).ready(function() {
    
    CodeMirror($('#editor-html').get(0), {
        theme: 'monokai',
        //mode: 'js',
        tabSize: 4,
        indentWithTabs: true,
        tabindex: 0,
        indentWithTabs: true,
        lineNumbers: true,
        styleActiveLine: true,
    });

        CodeMirror($('#editor-css').get(0), {
        theme: 'monokai',
        mode: 'css',
        tabSize: 4,
        indentWithTabs: true,
        tabindex: 0,
        indentWithTabs: true,
        lineNumbers: true,
        styleActiveLine: true,
    });

        CodeMirror($('#editor-js').get(0), {
        theme: 'monokai',
        mode: 'js',
        tabSize: 4,
        indentWithTabs: true,
        tabindex: 0,
        indentWithTabs: true,
        lineNumbers: true,
        styleActiveLine: true,
    });
});