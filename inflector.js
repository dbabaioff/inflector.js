/*!
 * inflector.js
 * http://github.com/dbabaioff/inflector.js
 */
var Inflector = (typeof module !== "undefined" && module.exports) || {};

(function (exports) {
    // Cached inflections
    var cache = {};
    // Uncountable words
    var uncountable = {access: 'access', advice: 'advice', aircraft: 'aircraft', art: 'art', baggage: 'baggage', bison: 'bison', dances: 'dances', deer: 'deer', equipment: 'equipment', fish: 'fish', fuel: 'fuel', furniture: 'furniture', heat: 'heat', honey: 'honey', homework: 'homework', impatience: 'impatience', information: 'information', knowledge: 'knowledge', luggage: 'luggage', media: 'media', money: 'money', moose: 'moose', music: 'music', news: 'news', patience: 'patience', progress: 'progress', pollution: 'pollution', research: 'research', rice: 'rice', salmon: 'salmon', sand: 'sand', series: 'series', sheep: 'sheep', sms: 'sms', spam: 'spam', species: 'species', staff: 'staff', swine: 'swine', toothpaste: 'toothpaste', traffic: 'traffic', understanding: 'understanding', water: 'water', weather: 'weather', work: 'work'};
    // Irregular words
    var irregular = {child: 'children', clothes: 'clothing', man: 'men', movie: 'movies', person: 'people', woman: 'women', mouse: 'mice', goose: 'geese', ox: 'oxen', leaf: 'leaves', course: 'courses', size: 'sizes', was: 'were', is: 'are', verse: 'verses', hero: 'heroes', purchase: 'purchases', expense: 'expenses'};

    exports.uncountable = function(str) {
        return uncountable.hasOwnProperty(str.toLowerCase());
    };

    exports.singular = function(str, count) {
        count = (typeof count === 'undefined') ? 1 : (1 * count);

        // Do nothing when count is not 1
        if (count !== 1) {
            return str;
        }

        // Remove garbage
        str = trim(str);

        var length = str.length;

        // Cache key name
        var key = 'singular_' + str + count;
        if (cache.hasOwnProperty(key)) {
            return cache[key];
        }

        if (exports.uncountable(str)) {
            return cache[key] = str;
        }

        var irregular = object_search(str, irregular);
        if (irregular) {
            str = irregular;
        }
        else if (str.match(/us$/)) {
            // http://en.wikipedia.org/wiki/Plural_form_of_words_ending_in_-us
            // Already singular, do nothing
        }
        else if (str.match(/[sxz]es$/) || str.match(/[^aeioudgkprt]hes$/)) {
            // Remove "es"
            console.log('es');
            str = str.slice(-2);
        }
        else if (str.match(/[^aeiou]ies$/)) {
            // Replace "ies" with "y"
            str = str.slice(-3) + 'y';
        }
        else if (str.charAt(length - 1) === 's' && str.charAt(length - 2) !== 'ss') {
            // Remove singular "s"
            console.log('s');
            str = str.substring(0, length - 1);
        }

        return cache[key] = str;
    };

    exports.plural = function(str, count) {
        count = (typeof count === 'undefined') ? 0 : (1 * count);

        // Do nothing when count is not 1
        if (count === 1) {
            return str;
        }

        // Remove garbage
        str = trim(str);

        // Cache key name
        var key = 'plural_' + str + count;
        if (cache.hasOwnProperty(key)) {
            return cache[key];
        }

        if (exports.uncountable(str)) {
            return cache[key] = str;
        }

        if (irregular.hasOwnProperty(str)) {
            str = irregular[str];
        }
        else if (str.match(/[sxz]$/) || str.match(/[^aeioudgkprt]h$/)) {
            str += 'es';
        }
        else if (str.match(/[^aeiou]y$/)) {
            // Change "y" to "ies"
            str = (str.slice(-1)) + 'ies';
        }
        else {
            str += 's';
        }

        return cache[key] = str;
    };

    exports.camelize = function(str) {
        str = 'x' + trim(str).toLowerCase();
        str = str.replace(/[\s_]+/g, ' ');

        return (str.replace(' ', '')).substring(1);
    };

    exports.decamelize = function(str, sep/* = ' '*/) {
        //str = str.replace(/([a-z])([A-Z])/g, )
    };

    exports.underscore = function(str) {
        return trim(str).replace(/\s+/g, '_');
    };

    exports.humanize = function(str) {
        return trim(str).replace(/[_-]+/g, ' ');
    };

    var trim = String.prototype.trim ?
        function(text) {
            return text == null ?
                '' :
                String.prototype.trim.call(text);
        } :

        // Otherwise use our own trimming functionality
        function(text) {
            return text == null ?
                '' :
                text.toString().replace(/^\s+/, "").replace(/\s+$/, "");
        }

    var object_search = function(str, obj) {
        for (var key in obj) {
            if (str === obj[key]) {
                return key;
            }
        }

        return false;
    };
}(Inflector));

