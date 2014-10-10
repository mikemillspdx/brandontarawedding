var assert = require('assert')
  , tests
  , Todo = geddy.model.Todo;

tests = {

  'after': function (next) {
    // cleanup DB
    Todo.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var todo = Todo.create({});
    todo.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
