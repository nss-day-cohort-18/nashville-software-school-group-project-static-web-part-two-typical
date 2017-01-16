/* Initialize and manually populate array */
var blocks = [
	{
	name: "Block 0",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	url: "img/",
	},
	{
	name: "Block 1",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	url: "img/",
	},
	{
	name: "Block 2",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	url: "img/",
	},
	{
	name: "Block 3",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	url: "img/",
	},
	{
	name: "Block 4",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	url: "img/",
	},
	{
	name: "Block 5",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	url: "img/",
	},
	{
	name: "Block 6",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	url: "img/",
	},
	{
	name: "Block 7",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	url: "img/",
	},
	{
	name: "Block 8",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	url: "img/",
	},
	{
	name: "Block 9",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	url: "img/",
	},
	{
	name: "Block 10",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	url: "img/",
	},
	{
	name: "Block 11",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	url: "img/",
	},
];

/* Initialize a loop, which continues for the length of the array */
for (var i=0; i<blocks.length; i++) {

	/*Create Separate DOM Elements for the Data */
	var card = document.getElementById("productCard" + i);

	/* Create a DOM Element for the Name */
	var blockName = "<h3>" + blocks[i].name + "</h3";

	/* Populate the Element with Data */
	card.innerHTML += blockName;

	/* Wash, Rinse, Repeat. . .*/
	var blockImage = '<img src="' + blocks[i].URL + '">';
	card.innerHTML += blockImage;
	var blockDescription = "<p>" + blocks[i].description + "</p>";
	card.innerHTML += blockDescription;
	var blockPrice = "<p>" + blocks[i].price + "</p>";
	card.innerHTML += blockPrice;
}