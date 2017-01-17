/* A function to return random number from min to max */
/*Color schemes for all pages
////////////////////////////////////////////////////////////////////
*/

/*about page colors*/
var aboutRedColors = ["#BF3F3F", "#F6BABA", "#FFFFFF", "#FF1414", "#C89C9C", "#CE4444", "#998989", "#FF7ABC", "#E81B82", "#E92F2F"]; 
// about page colors
var productsBlueColors = ["#567CF9", "#5454ED", "#9793FF", "#86E3DE", "#60EFFF", "#32ADFF", "#BFE0FC", "#F1F2FD", "#0F00EF", "#567CF9"];
// Contact page color
var contactsGreenColors = ["#F1F2FD", "#0B9C17", "#2EEF7E", "#AFFCA0", "#9EBE8C", "#B8C2B7", "#CBF9CF", "#00F420", "#126E0C", "#FFFFFF"];
// home page colors
// var rainbowColors = ["#BF3F3F", "#F6BABA", "#FFFFFF", "#567CF9", "#5454ED", "#9793FF", "#F1F2FD", "#0B9C17", "#2EEF7E", "#ECF62C", "#FFDB28", "#FB28FF", "#923DCB", "#AB6AD6", "#FFFB19"];


//combine color pallettes for home
//Created a function to push all colors from 
//products, contact, and about pages into 
//combinedColors[]
var combinedColors = [];
function combineColors(colorArray) {
	for (var color in colorArray) {
		combinedColors.push(colorArray[color]);
	}
}
combineColors(aboutRedColors);
combineColors(productsBlueColors);
combineColors(contactsGreenColors);
console.log(combinedColors.length);


//This function is set up to return a random number between
//any two given numbers. 
//We are using it to cycle through colors array
//to producte a random index, and ultimately
//a random color. 
function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

//Grabbing height of main content (includes padding)
//Will determine height of sidebar based on \
//main-content height. 
var mainContent = document.getElementById("main-content");
var mainContentHeight = mainContent.clientHeight;
var heightMinusFooterAndMargin = (mainContentHeight - 125 -74.5);
var mainContentHeightRemainder = (heightMinusFooterAndMargin % 10); 

var sidebarHeight = (mainContentHeight - 105);
console.log("Main content height: ", mainContentHeight, "Main content remainder: ", mainContentHeightRemainder, "Sidebar height: ", sidebarHeight);

//Create counter to keep track of stacking
//div height
var counter = 0;

var createSidebarBlocks = function(sidebarName) {

	//grab parent element and setting height
    var newSidebar = document.getElementById(sidebarName);
    newSidebar.style.height = sidebarHeight + "px";

	//check to see if there is room to add divs
	//Detrmining how much room I have to work with
	var sidebarHeightRemainder = sidebarHeight - counter;
    var divSpace = sidebarHeight - 60;

	//If there is space for this random div.. 
    for (counter; counter < divSpace; counter + divHeight) {

        //Creating two new arrays to set pre-determined 
        //sidebar widths and heights
        var sidebarBlockWidth = [21, 42, 63, 84, 105];
        var sidebarBlockHeight = [10, 20, 30, 40, 50];

        //grabbing random number based on height array.length
        var divHeightIndex = getRandomInt(0, sidebarBlockHeight.length - 1);
        var divHeight = sidebarBlockHeight[divHeightIndex];
        if ((sidebarHeightRemainder - divHeight) > 0) {

            console.log(counter);

    		//get random width from width array
    		var divWidthIndex = getRandomInt(0, sidebarBlockWidth.length - 1);
    		var divWidth = sidebarBlockWidth[divWidthIndex];
    		 //get random color
    		var randomCombinedColor = getRandomInt(0, combinedColors.length - 1);
            var randomAboutColor = getRandomInt(0, aboutRedColors.length - 1);
            var randomProductsColor = getRandomInt(0, productsBlueColors.length - 1);
            var randomContactsColor = getRandomInt(0, contactsGreenColors.length - 1);

    		//create div to go in sidebar
    		var sidebarDiv = document.createElement("div");
    		//assign class
            if (sidebarName === "sidebar1") {
        		sidebarDiv.className = "sidebarBlockLeft";
            } else if (sidebarName === "sidebar2") {
                sidebarDiv.className = "sidebarBlockRight";
            };

    		//assign height and width styling
    		sidebarDiv.style.height = divHeight + "px";
    		sidebarDiv.style.width = divWidth + "px";
    		//assign background color
    		sidebarDiv.style.backgroundColor = combinedColors[randomCombinedColor];

    		//append block to sidebar
    		newSidebar.appendChild(sidebarDiv);

            counter += divHeight;

        } else {
            break;
        }
    }   
}

//call function
createSidebarBlocks("sidebar1");
console.log("function 1 is good")
counter = 0;
createSidebarBlocks("sidebar2");






