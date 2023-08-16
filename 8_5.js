let foo = {
    a: 5,

    bar: function() {
        console.log(this.a);
    },

    baz: () => console.log(this.a)
}

foo.bar(); // 5
foo.baz(); // функции-стрелки не имеют своего this
