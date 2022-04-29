// preliminary version

module.exports = function getKeyByValue (map, obj) {
    if ((typeof obj === "string") || (typeof obj === "number")) {
        for (let [key, value] of map.entries()){
            if(value === obj) return key;
        }
        return null;
    }
    const prop = Object.getOwnPropertyNames(obj)[0];
    for (let [key, value] of map.entries()){
        if (value[prop] === obj[prop]) {
            return key;
        }
    }
    return null;
}

