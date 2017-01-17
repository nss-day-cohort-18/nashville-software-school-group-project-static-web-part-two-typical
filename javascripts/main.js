/* Initialize and manually populate array */
var blocks = [
	{
	name: "Building Blocks",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	URL: "img/building_blocks.jpg",
	},
	{
	name: "Cinder Blocks",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	URL: "img/cinder-block.jpg",
	},
	{
	name: "Duplo Blocks",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	URL: "img/duplo.jpg",
	},
	{
	name: "Foam Blocks",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	URL: "img/foam-blocks.jpg",
	},
	{
	name: "Kids Blocks",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	URL: "img/kids-blocks.jpg",
	},
	{
	name: "One Red Lego",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	URL: "img/lego-red.jpg",
	},
	{
	name: "Lincoln Logs",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	URL: "img/lincoln-logs.jpg",
	},
	{
	name: "Slew of legos",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	URL: "img/lots-of-legos.jpg",
	},
	{
	name: "Mega Blocks",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	URL: "img/mega-blocks.jpg",
	},
	{
	name: "Minecraft Blocks",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	URL: "img/mine-craft-block.png",
	},
	{
	name: "One Red Brick",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	URL: "img/red-brick1.jpg",
	},
	{
	name: "Wooden Blocks",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	price: "$99",
	URL: "img/wooden-blocks.jpg",
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