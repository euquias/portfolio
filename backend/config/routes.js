const admin = require('./admin')

module.exports = app => {
  app.post('/signup', app.api.user.save)
  app.post('/signin', app.api.auth.signin)
  app.post('/validateToken', app.api.auth.validateToken)

  app.route('/users')
    /* .all(app.config.passport.authenticate()) */
    .post(app.api.user.save)
    .get(admin(app.api.user.get))

    app.route('/users/:id')
    .all(app.config.passport.authenticate())
    .put(admin(app.api.user.save))
    .get(admin(app.api.user.getById))
    .delete(admin(app.api.user.remove))

    app.route('/categories')
      .get(app.api.category.get)
      .post(app.api.category.save)
    
      app.route('/categories/:id')
      .get(app.api.category.getById)
      .post(app.api.category.save) 
      .delete(app.api.category.remove) 
      
  /* app.route('/stats')
   .all(app.config.passport.authenticate())
  .get(app.api.stat.get) */
}