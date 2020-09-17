const genericResponse = {
    data: {}
}

exports.prepareResponse = (data, key) => Object.assign({}, genericResponse, { data: { [key]:data }})

exports.isValidUpdate = (updates, allowedUpdates) => updates.every(field => allowedUpdates.includes(field))

exports.prepareModelForUpdate = (newInfo, model) => {
    const updates = Object.keys(newInfo)
    updates.forEach(field => {
        model[field] = newInfo[field]
    })
    return model
}