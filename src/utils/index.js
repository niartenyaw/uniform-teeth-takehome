import debounce from 'underscore/modules/debounce.js';
import * as Api from './api';
import * as Support from './support';

export const search = debounce((term, func) => {
  Api.search(term)
    .then(result => Support.filter(result, term))
    .then(result => Support.toObject(result))
    .then(result => func(result))
}, 200);

export const sort = Support.sort;
