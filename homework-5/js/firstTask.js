const maths = {
    currentValue: 0,
    sum: function(a, b) {
        this.currentValue += a + b;
        return this;
    },
    minus: function(a, b) {
        this.currentValue += a - b;
        return this;
    },
    multiplay: function(a, b) {
        this.currentValue += a * b;
        return this; 
    },
    showResult: function() {
        console.log(this.currentValue);
        return this;
    }
}