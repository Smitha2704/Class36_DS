class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(480, 0);

        var input = createInput("Name");
        var button = createButton("Play")
       

        input.position(420, 150);
        button.position(750, 250);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            var greeting=createElement("h3")
            greeting.html("Hello " + name);
            greeting.position(420,150);
        })
    }
}