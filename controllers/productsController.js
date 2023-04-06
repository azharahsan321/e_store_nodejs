module.exports = class ProductsController {

    constructor() { }

    fetchAll(req, res) {
        console.log('hit')
        return res.send({
            data: 'Hello World!'
        });
    }

}