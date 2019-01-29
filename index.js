function count() {
  var num = 0
  return {
    increment: function() {
      num += 1
      document.getElementById('counter').innerText = 'Count: ' + num
    },
    decrement: function() {
      num -= 1
      document.getElementById('counter').innerText = 'Count: ' + num
    },
    reset: function() {
      num = 0
      document.getElementById('counter').innerText = 'Count: ' + num
    }
  }
}

var handler = count()
document.getElementById('increment').onclick = handler.increment
document.getElementById('decrement').onclick = handler.decrement
document.getElementById('reset').onclick = handler.reset
