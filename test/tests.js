(function() {
    test('uncountable', function() {
        equal(Inflector.uncountable('fish'), true, 'Uncountable: "fish" - true');
        equal(Inflector.uncountable('cat'), false, 'Uncountable: "cat" - false');
        equal(Inflector.uncountable('deer'), true, 'Uncountable: "deer" - true');
        equal(Inflector.uncountable('bison'), true, 'Uncountable: "bison" - true');
        equal(Inflector.uncountable('friend'), false, 'Uncountable: "friend" - false');
    });

    test('singular', function() {
        equal(Inflector.singular('fish'), 'fish', 'Singular("fish") - fish');
        equal(Inflector.singular('cats'), 'cat', 'Singular("cats") - cat');
        equal(Inflector.singular('cats', 2), 'cats', 'Singular("cats", 2) - cats');
        equal(Inflector.singular('cats', '2'), 'cats', 'Singular("cats", "2") - cats');
        equal(Inflector.singular('children'), 'child', 'Singular("children") - child');
        equal(Inflector.singular('meters', 0.6), 'meters', 'Singular("meters", 0.6) - meters');
        equal(Inflector.singular('meters', 1.6), 'meters', 'Singular("meters", 1.6) - meters');
        equal(Inflector.singular('meters', 1.0), 'meter', 'Singular("meters", 1.0) - meter');
        equal(Inflector.singular('status'), 'status', 'Singular("status") - status');
        equal(Inflector.singular('statuses'), 'status', 'Singular("statuses") - status');
        equal(Inflector.singular('heroes'), 'hero', 'Singular("heroes") - hero');
    });

    test('plural', function() {
        equal(Inflector.plural('fish'), 'fish', 'Plural("fish") - fish');
        equal(Inflector.plural('cat'), 'cats', 'Plural("cat") - cats');
        equal(Inflector.plural('cats', 1), 'cats', 'Plural("cats", 1) - cats');
        equal(Inflector.plural('cats', '1'), 'cats', 'Plural("cats", "1") - cats');
        equal(Inflector.plural('movie'), 'movies', 'Plural("movie") - movies');
        equal(Inflector.plural('meter', 0.6), 'meters', 'Plural("meter", 0.6) - meters');
        equal(Inflector.plural('meter', 1.6), 'meters', 'Plural("meter", 1.6) - meters');
        equal(Inflector.plural('meter', 1.0), 'meter', 'Plural("meter", 1.0) - meter');
        equal(Inflector.plural('hero'), 'heroes', 'Plural("hero") - heroes');
        equal(Inflector.plural('Dog'), 'Dogs', 'Plural("Dog") - Dogs'); // Titlecase
        equal(Inflector.plural('DOG'), 'DOGS', 'Plural("DOG") - DOGS'); // Uppercase
    });

    test('camelize', function() {
        equal(Inflector.camelize('mother cat'), 'motherCat', 'Camelize("mother cat") - "motherCat');
        equal(Inflector.camelize('kittens in bed'), 'kittensInBed', 'Camelize("kittens in bed") - "kittensInBed');
    });

    test('underscore', function() {
        equal(Inflector.underscore('mother cat'), 'mother_cat', 'Underscore("mother cat") - "mother_cat');
        equal(Inflector.underscore('kittens in bed'), 'kittens_in_bed', 'Underscore("kittens in bed") - "kittens_in_bed');
    });

    test('humanize', function() {
        equal(Inflector.humanize('kittens-are-cats'), 'kittens are cats', 'Humanize("kittens-are-cats") - "kittens are cats');
        equal(Inflector.humanize('dogs_as_well'), 'dogs as well', 'Humanize("dogs_as_well") - "dogs as well');
    });

    test('decamelize', function() {
        equal(Inflector.decamelize('getText', '_'), 'get_text', 'Decamelize("getText", "_") - get_text');
        equal(Inflector.decamelize('getJSON', '_'), 'get_json', 'Decamelize("getJSON", "_") - get_json');
        equal(Inflector.decamelize('getLongText', '_'), 'get_long_text', 'Decamelize("getLongText", "_") - get_long_text');
        equal(Inflector.decamelize('getI18N', '_'), 'get_i18n', 'Decamelize("getI18N", "_") - get_i18n');
        equal(Inflector.decamelize('getL10n', '_'), 'get_l10n', 'Decamelize("getL10n", "_") - get_l10n');
        equal(Inflector.decamelize('getTe5t1ng', '_'), 'get_te5t1ng', 'Decamelize("getTe5t1ng", "_") - get_te5t1ng');
        equal(Inflector.decamelize('OpenFile', '_'), 'open_file', 'Decamelize("OpenFile", "_") - open_file');
        equal(Inflector.decamelize('CloseIoSocket', '_'), 'close_io_socket', 'Decamelize("CloseIoSocket", "_") - close_io_socket');
        equal(Inflector.decamelize('fooBar', ' '), 'foo bar', 'Decamelize("fooBar", " ") - foo bar');
        equal(Inflector.decamelize('camelCase', '+'), 'camel+case', 'Decamelize("camelCase", "+") - camel+case');
    });
}());
