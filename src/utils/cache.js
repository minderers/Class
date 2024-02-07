

/**
 * 存储信息
 * @param {*} key  键名
 * @param {*} value 值
 */
function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 *  通过键名获取值
 * @param {*} key 键名 
 * @returns 
 */
function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
}

/**
 * 通过键名删除值
 * @param {*} key 键名
 */
function removeItem(key) { 
    localStorage.removeItem(key);
}

/**
 * 清空所有存储信息
 */
function clear() { 
    localStorage.clear();
}

export {
    setItem,
    getItem,
    removeItem,
    clear
}

