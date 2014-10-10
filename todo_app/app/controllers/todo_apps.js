var TodoApps = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.TodoApp.all(function(err, todoApps) {
      if (err) {
        throw err;
      }
      self.respondWith(todoApps, {type:'TodoApp'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , todoApp = geddy.model.TodoApp.create(params);

    if (!todoApp.isValid()) {
      this.respondWith(todoApp);
    }
    else {
      todoApp.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(todoApp, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.TodoApp.first(params.id, function(err, todoApp) {
      if (err) {
        throw err;
      }
      if (!todoApp) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(todoApp);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.TodoApp.first(params.id, function(err, todoApp) {
      if (err) {
        throw err;
      }
      if (!todoApp) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(todoApp);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.TodoApp.first(params.id, function(err, todoApp) {
      if (err) {
        throw err;
      }
      todoApp.updateProperties(params);

      if (!todoApp.isValid()) {
        self.respondWith(todoApp);
      }
      else {
        todoApp.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(todoApp, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.TodoApp.first(params.id, function(err, todoApp) {
      if (err) {
        throw err;
      }
      if (!todoApp) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.TodoApp.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(todoApp);
        });
      }
    });
  };

};

exports.TodoApps = TodoApps;
