// Disable and Enable any element
// https://stackoverflow.com/questions/625109/jquery-script-load-timing/625126#625126

$.fn.disable = function () {
    return this.each(function () {
        if (typeof this.disabled != "undefined") this.disabled = true;
    });
} // https://stackoverflow.com/questions/625109/jquery-script-load-timing/625126#625126

$.fn.enable = function () {
    return this.each(function () {
        if (typeof this.disabled != "undefined") this.disabled = false;
    });
} 

