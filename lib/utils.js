const genericResponse = {
    data: {}
}

exports.prepareResponse = (data, key) => Object.assign({}, genericResponse, { data: { [key]:data }})