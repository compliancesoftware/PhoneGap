var MessageBox = {
    confirm: function(message, title, buttons, callback){
        window.confirm = navigator.notification.confirm;
        navigator.notification.confirm(message, callback, title, buttons);
    },
    alert: function(message, title){
        window.alert = navigator.notification.alert;
        navigator.notification.alert(message, null, title, "Ok");
    }
};