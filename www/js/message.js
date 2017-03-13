var MessageBox = {
    show: function(message, title, buttons){
        var html = '<div id="message_box_" title="'+title+'">';
            html += '<h3>'+message+'</h3>';
            html += '</div>';

            $(document.body).append(html);

            $("#message_box_").dialog({
                buttons,
                close: function(event, ui) {
                    $("#message_box_").remove();
                }
            });
    }
};