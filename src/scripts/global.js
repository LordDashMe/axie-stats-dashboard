/**
 * List of Global Variables that can be export.
 */
export const GLOBAL_VERSION = '0.0.4';
export const GLOBAL_YEAR = '2022';

/**
 * The code snippet for Debounce Strategy.
 *
 * @param {Function} callback     The callback function that will be debouce.
 * @param {Number}   waitingTime  The (N) milliseconds that the callback function  
 *                                will be call after no call action made.
 *
 * @return {Function}
 */
export function debounce(callback, waitingTime) {

    if (typeof callback !== 'function') {
        throw Error('The first argument is not a type function.');
    }

    if (typeof waitingTime !== 'number') {
        throw Error('The second argument is not a type number');
    }

    var timeout = null;

    return function() {

        var context = this;
        var args = arguments;

        clearTimeout(timeout);

        timeout = setTimeout(function() {
            timeout = null;
            callback.apply(context, args);
        }, waitingTime);
    };
}

/**
 * The Get URL Query Parameter Helper.
 * 
 * To get the url query parameters.
 * 
 * @param {String} name  The key of the url query parameters.
 * @param {String} url   The base url to be use.
 * 
 * @return {*} 
 */
export function getUrlQueryParameter(name, url) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


/**
 * The Is Element In Viewport Helper.
 * 
 * This will check if the given element is indeed visible in the viewport.
 * Reference: https://stackoverflow.com/a/16270434
 * 
 * @param {*} element  The element that need to check if visibile in the viewport.
 * 
 * @return {Boolean}
 */
export function isElementInViewport(element) {

    var rect = element.getBoundingClientRect();

    return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
}

/**
 * The Convert Comma Separated Number.
 * 
 * This will convert number in to string separated with comma.
 * 
 * @param {Number} number  The value that will be convert into string format separated with comma.
 * 
 * @return {String}
 */
export function convertCommaSeparatedNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
