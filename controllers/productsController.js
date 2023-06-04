let factory = require('../util/factory');

module.exports = class ProductsController {

    constructor() { }

    fetchAll(req, res) {
        factory.product.find({}).then(response => {
            console.log(res);
            return res.send({
                data: response
            });
        }).catch(err => {
            console.log(err);
        })

    }

}