const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt');
const Products = require('../models').producto;





const productsView = (req, res, next) => {
  return Products.findAll()
    .then(products => {
      if (products.length > 0) {
        res.json(products); // Devuelve los productos como respuesta JSON
      } else {
        const err = new Error('No hay productos');
        err.status = 404;
        return next(err);
      }
    })
    .catch(error => {
      console.log(error);
      const err = new Error(error);
      err.status = 500;
      return next(err);
    });
};

  const detailProduct = async (req, res, next) => {
    try {
  const product = await Products.findOne({where: {id: req.params.id}}); 
  if (!product) {
  res.status(404).render('error', {
      title: 'Página no encontrada',
      subtitle: 'Página no encontrada',
      errorNumber: '404'
  })
  return
  }
  res.render(path.join(__dirname,'../views/detail-product.ejs'))

}catch (error) {
  console.error('Error al obtener productos:', error);
  res.status(500).send('Error al obtener productos');
}

}

  
 
module.exports = {
  productsView,
  detailProduct,
}

