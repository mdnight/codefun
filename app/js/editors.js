import CodeMirror from 'codemirror';
//var ui = require('webpack-jquery-ui');


$(document).ready(function() {
    CodeMirror($('#editor-html').get(0), {
        theme: 'monokai',
        mode: 'htmlembedded',
        tabSize: 4,
        indentWithTabs: true,
        tabindex: 0,
        indentWithTabs: true,
        lineNumbers: true,
        styleActiveLine: true,
        lineWrapping: true
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
        lineWrapping: true
    });

    CodeMirror($('#editor-js').get(0), {
        theme: 'monokai',
        mode: 'javascript',
        tabSize: 4,
        indentWithTabs: true,
        tabindex: 0,
        indentWithTabs: true,
        lineNumbers: true,
        styleActiveLine: true,
        lineWrapping:true
    });

    // $('#hresizer-1').draggable({
    //     drag: function(e, ui) {
    //         $('#box-html').css('flex', '0 1', + ui.offset.left + 'px');
    //     },
    //     axis: 'x'
    // });

    // $('#hresizer-2').draggable({
    //     drag: function(e, ui) {
    //         $('#box-css').css('flex', '0 1', + ui.offset.left + 'px');
    //     },
    //     axis: 'x'
    // });

});
