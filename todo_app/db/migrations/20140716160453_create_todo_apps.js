var CreateTodoApps = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('title', 'string');
          t.column('status', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('todo_app', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('todo_app', callback);
  };
};

exports.CreateTodoApps = CreateTodoApps;
