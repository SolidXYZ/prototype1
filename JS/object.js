export const OBJECT_MODULE = {};
OBJECT_MODULE.getObjectType = function (t) {
    if (typeof (t) !== 'object') {
        console.warn('object type is not array or object', t, typeof(t));
        return;
    }
    let res;
    if (Array.isArray(t) === true) {
        res = 0;
    } else {
        res = 1;
    }
    return res;
}
OBJECT_MODULE.getValueFromObjectType = function (t) {
    let res;
    if (t === 0) {
        res = [];
    } else if (t === 1) {
        res = {};
    } else {
        console.warn('attempted to create object with invalid value', t);
    }
    return res;
}
OBJECT_MODULE.copyObject = function (oT, deep) {
    const type = OBJECT_MODULE.getObjectType(oT);
    let t = OBJECT_MODULE.getValueFromObjectType(OBJECT_MODULE.getObjectType(oT));
    function addNew(v) {
        let res;
        if (deep === true && typeof (v) === 'object') {
            res = OBJECT_MODULE.copyObject(v, true);
        } else {
            res = v;
        }
        return res;
    }
    if (type === 0) {
        oT.forEach(v => {
            t.push(addNew(v));
        });
    } else if (type === 1) {
        for (const [i, v] of Object.entries(oT)) {
            t[i] = addNew(v);
        }
    }
    return t;
}