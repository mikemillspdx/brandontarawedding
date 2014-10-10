var assert = require('assert')
  , tests
  , TodoApp = geddy.model.TodoApp;

tests = {

  'after': function (next) {
    // cleanup DB
    TodoApp.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var todoapp = TodoApp.create({});
    todoapp.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
