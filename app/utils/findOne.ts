const findOne = async (object) => {
    return await object[0] || {};
}

export {
    findOne
}