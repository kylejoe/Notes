// Namespace our app
var app = app || {};

app.singleFlower = Backbone.Model.extend({

        defaults: {
                    color: "pink",
                    img: "images/placeholder.jpg"
        },
        // Initialize() runs anytime a model instance is created
        initialize: function () {
            console.log("A model instance named " + this.get("name") + " has been created and it costs " + this.get("price"));

            //This will execute as soon as properties of a model-instance change. On any change
            this.on('change', function(){
                console.log("Something in out model has changed!");
            });

            //Executes only on change in price
            this.on('change:price', function(){
                console.log("The price for the " + this.get("name") + " model just changed to $" + this.get("price") + " dollars.");
            });

        }


});