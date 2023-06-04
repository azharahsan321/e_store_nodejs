let productsController = new (require('../controllers/productsController'))();

module.exports = (router) => {

    router.get('/products/get/all', productsController.fetchAll)

    return router
}