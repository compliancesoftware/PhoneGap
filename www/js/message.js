var MessageBox = {
    confirm(message, title, buttons, callback){
        console.log("navigator.notification.confirm :: Confirm message.");
        window.confirm = navigator.notification.confirm;
        navigator.notification.confirm(message, callback, title, buttons);
    },
    alert(message, title){
        console.log("navigator.notification.alert :: Alert message.");
        window.alert = navigator.notification.alert;
        navigator.notification.alert(message, null, title, "Ok");
    },
    prompt(message, hint, title, callback){
        console.log("navigator.notification.prompt :: Prompt message.");
        window.prompt = navigator.notification.prompt;
        navigator.notification.prompt(message, callback, title, ["Ok"], hint);
    },
    notify(_id, _message, _title, _vib){
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