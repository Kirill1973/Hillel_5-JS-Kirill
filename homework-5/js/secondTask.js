for (var i = 0; i < 10; i += 1) {
    setTimeout( function () {
      i = +this;
      console.log(i);
    }.bind(i), 10)
  }

for (var i =0; i < 10; i += 1) {
    setTimeout( function (i) {
        console.log(this);
    }.bind(i), 10)
}

for (var i = 0; i < 10; i += 1) {
    (function(i) {
        setTimeout( function () {
            console.log(i);
          }, 10)
    })(i);
}