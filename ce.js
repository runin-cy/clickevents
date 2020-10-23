var foo = document.getElementById("b1");
var bar = document.getElementById("b2");
var foobar = document.getElementById("b3");
var main = document.querySelector("main");

foo.addEventListener("click", function(event) {
    console.log(event.target.id);
    const h3 = document.createElement("h3");
    h3.textContent = "Foo"
    main.appendChild(h3)
})

bar.addEventListener("click", function(event) {
    console.log(event.target.id);
    const h31 = document.createElement("h3");
    h31.textContent = "Bar"
    main.appendChild(h31)
})

foobar.addEventListener("click", function(event) {
        console.log(event.target.id);
        const h2 = document.createElement("h2");
        h2.textContent ="FooBar"
        main.appendChild(h2)
})