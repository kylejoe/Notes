//Create 3 instances of singleFlowerModel
var redRoses = new app.singleFlower({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img: "images/redRoses.jpg",
    link: "redRose"
});

var rainbowRoses = new app.singleFlower({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
    name: "Heirloom roses",
    price: 19.95,
    img: "images/heirloomRoses.jpg",
    link: "heirloomRose"
});

var tantalizingTulips = new app.singleFlower({
    name: "Tantalizing Tulips",
    price: 1.25,
    color: "green"
});

var fleurDeLis = new app.singleFlower({
    name: "Fleur-de-lis",
    price: 2.35,
    color: "blue"
});

var flowerGroup = new app.FlowersCollection([
    redRoses, rainbowRoses
]);


flowerGroup.add(heirloomRoses);

flowerGroup.remove(redRoses);

console.log(flowerGroup.toJSON());