import CodeMirror from 'codemirror';

$(document).ready(function() {
    CodeMirror($('#editor-html').get(0), {
        theme: 'monokai',
        mode: 'htmlembedded',
        tabSize: 4,
        indentWithTabs: true,
        tabindex: 0,
        indentWithTabs: true,
        lineNumbers: true,
        styleActiveLine: true
    });

    CodeMirror($('#editor-css').get(0), {
        theme: 'monokai',
        mode: 'css',
        tabSize: 4,
        indentWithTabs: true,
        tabindex: 0,
        indentWithTabs: true,
        lineNumbers: true,
        styleActiveLine: true
    });

    CodeMirror($('#editor-js').get(0), {
        theme: 'monokai',
        mode: 'javascript',
        tabSize: 4,
        indentWithTabs: true,
        tabindex: 0,
        indentWithTabs: true,
        lineNumbers: true,
        styleActiveLine: true
    });

    $('#hresizer-1').mousedown(function (e) {
        $('.top-boxes').mousemove(function(event) {
            updateHTMLWidth(event);
        });
    });

    $('#hresizer-2').mousedown(function (e) {
        $('.top-boxes').mousemove(function(event) {
            var msg = "Handler for .mousemove() called at ";
            msg += event.pageX + ", " + event.pageY;
            console.log(msg);
        });
    });

    $(document).mouseup(function() {
        $('.top-boxes').off("mousemove");
    });
});


function updateHTMLWidth(event) {
    var marg = event.pageX - $('#hresizer-1').position().left;
    var htmlWidth = event.pageX - $("#box-html").position().left;
    $('#box-html').width(htmlWidth);
}

