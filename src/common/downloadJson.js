import { saveAs } from 'file-saver';
var _ = require('lodash');

function recursiveMap (value, fn) {
    if (_.isArray(value)) {
      return value.map(v => recursiveMap(v, fn));
    } else if (typeof value === 'object') {
        return _.mapValues(value, function(v) {
            return recursiveMap(v, fn);
        });
    } else {
        return fn(value);
    }
};

export function downloadJson (person, t, i18n) {
    const translated = recursiveMap(person, (v) => (typeof v === 'string' && i18n.exists(v)) ? t(v) : v)
    const json = JSON.stringify(translated, null, '\t')
    var blob = new Blob([json], {type: "data:text/json;charset=utf-8"});
    saveAs(blob, "resume.json");
}