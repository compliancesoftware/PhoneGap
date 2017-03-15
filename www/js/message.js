var MessageBox = {
    confirm(message, title, buttons, callback){
        window.confirm = navigator.notification.confirm;
        navigator.notification.confirm(message, callback, title, buttons);
    },
    alert(message, title){
        window.alert = navigator.notification.alert;
        navigator.notification.alert(message, null, title, "Ok");
    },
    notify(_id, _message, _title){
        navigator.vibrate(500);
        var now = new Date().getTime();
        var delay = new Date(now + 1 * 1000);
        cordova.plugins.notification.local.schedule({
            id: _id,
            title: _title,
            text: _message,
            at: delay
        });
    }
};