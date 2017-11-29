import CodeMirror from 'codemirror';


$(function(){
    $("#run-button").click(function() {
        var htmlCode = $('.CodeMirror')[0].CodeMirror.getValue();
        var cssCode = $('.CodeMirror')[1].CodeMirror.getValue();
        var jsCode = $('.CodeMirror')[2].CodeMirror.getValue();
        var $iframe = $('#result-frame');
        $iframe.ready(function() {
            $iframe.contents().find('head').html('');
            $iframe.contents().find('body').html('');
            $iframe.contents().find('head').append('<style>' + cssCode + '</style>');
            $iframe.contents().find('body').append(htmlCode);
            $iframe.contents().find('body').append('<script>' + jsCode + '</script>');
        });
    });
});

