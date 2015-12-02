var getVariable = function(src, v) {
    var variables = src.substring(1).split('&');
    for (var i = 0; i < variables.length; i++) {
        var keyValue = variables[i].split('=');
        if (decodeURIComponent(keyValue[0]) === v) {
            return decodeURIComponent(keyValue[1]);
        }
    }
    return false;
};
document.addEventListener('DOMContentLoaded', function() {
    var accessTokenElement = document.getElementById('accessToken');
    var accessToken = getVariable(window.location.hash, 'access_token');
    if (false === accessToken) {
        accessTokenElement.innerHTML = '<em>no access token available</em>';
    } else {
        accessTokenElement.innerHTML = '<strong>'+accessToken+'</strong>';
    }
}, false);
