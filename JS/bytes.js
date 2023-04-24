export const BYTES_MODULE = {};
BYTES_MODULE.formatBytes = function(data) {
    if (data === 'unlimited') {
        return 'unlimited';
    }
    return data[0].toString() + ' ' + data[1];
}
BYTES_MODULE.toNum = function(data) {
    if (data === 'unlimited') {
        return Infinity;
    }
    return data[0];
}