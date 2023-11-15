import bqs from './buildQueryString.js';

bqs({ per: 10, page: 1 });
// page=1&per=10
bqs({ param1: 'all', param: true });
// param=all&param1=true
