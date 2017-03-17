var MessageBox = {
    confirm(message, title, buttons, callback){
        window.confirm = navigator.notification.confirm;
        navigator.notification.confirm(message, callback, title, buttons);
    },
    alert(message, title){
        window.alert = navigator.notification.alert;
        navigator.notification.alert(message, null, title, "Ok");
    },
    prompt(message, title, callback){
        window.prompt = navigator.notification.prompt;
        navigator.notification.prompt(message, callback, title, ["Ok"], null);
    },
    notify(_id, _message, _title, _vib){
        navigator.vibrate(_vib);
        var now = new Date().getTime();
        cordova.plugins.notification.local.schedule({
            id: _id,
            title: _title,
            text: _message,
            at: now
        });
    }
};