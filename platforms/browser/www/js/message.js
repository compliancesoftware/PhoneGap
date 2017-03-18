var MessageBox = {
    confirma(message, title, buttons){
        console.log("JQuery confirmation :: Confirm message.");
        var _id = "_message_dialog";
        var html = '<div id="'+_id+'" title="'+title+'">' +
                   '<p>'+message+'</p>' +
                   '</div>';

        $("body").append(html);
        $("#"+_id).dialog({
            resizable: false,
            modal: true,
            buttons,
            close: function(){
                $("#"+_id).remove();
                console.log("MessageBox dispensada.");
            }
        });
    },
    alerta(message, title){
        console.log("JQuery Alert :: Alert message.");
        var buttons = {
            "Ok": function(){
                console.log("Botão 'Ok' foi pressionado.");
                $(this).dialog("close");
            }
        };
        MessageBox.confirma(message, title, buttons);
    },
    pergunta(message, hint, title, callback){
        console.log("JQuery Form :: Prompt message.");
        var _id = "_message_prompt_dialog";
        var input_id = ""+_id+"_input_id";
        var html = '<div id="'+_id+'" title="'+title+'" style="text-align: center;">' +
                   '<p>'+message+'</p>' +
                   '<input type="text" id="'+input_id+'" placeholder="'+hint+'">' +
                   '</div>';
        var buttons = {
            "Ok":function(){
                var result = $("#"+input_id).val();
                callback(result);
                $(this).dialog("close");
            }
        };

        $("body").append(html);
        $("#"+_id).dialog({
            resizable: false,
            modal: true,
            buttons,
            close: function(){
                $("#"+_id).remove();
                console.log("MessageBox dispensada.");
            }
        });
    },
    notifica(_id, _message, _title, _vib){
        console.log("cordova.plugin.notification.local :: Local schedule with vibration by "+_vib+" milisseconds.");
        navigator.vibrate(_vib);
        var now = new Date().getTime() + 500;
        console.log("cordova.plugin.notification.local :: Local schedule at: "+new Date(now).toDateString());
        cordova.plugins.notification.local.schedule({
            id: _id,
            title: _title,
            text: _message,
            at: now
        });
    }
};