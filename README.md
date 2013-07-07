Base CSS Framework
=============


A lightweight Responsive CSS Framework

#####Demo: 

See demo folder or http://gurudayalkhalsa.github.io/base-css-framework/

###Features:

- Inspired by Bootstrap, Skeleton, Pure, Normalize.css and others
- supports all main browsers from ie8+
- no js dependencies for default features (jQuery needed  for tooltips, button effects etc.)
- includes quite a few polyfills from html5 placeholders to media queries for ie
- 16 column grid system
- six buttons with automatic new button hover and active colors
- tables
- small compared to many other frameworks
- responsive

###Files to include in html: 

- base.css, base.js

###Optional: 

- Font Awesome for icons

#####Licensed under the MIT License - http://opensource.org/licenses/MIT


=============

#Documentation:

##Navigation:

####Navigation Menus
######To make a nav, use the "nav" class on a ul element.
Here is some example HTML for creating a navigation menu

	<ul class="nav">
		<li><a href="home">Home</a></li>
		<li><a href="services">Services</a></li>
		<li><a href="about">About</a></li>
		<li><a href="contact">Contact</a></li>
	</ul>
	
The above nav will be a horizontal menu.

####Dropdowns

To make a dropdown menu, use the class "dropdown" on an element (usually an li element inside a ul), and create a ul as a child of that element.

	<ul class="nav">
		<li><a href="home">Home</a></li>
		<li class="dropdown nocaret click"><a href="services">Services</a>
			<ul>
				<li><a href="home">Home</a></li>
				<li><a href="services">Services</a></li>
				<li><a href="about">About</a></li>
				<li><a href="contact">Contact</a></li>
			</ul>
		</li>
		<li><a href="about">About</a></li>
		<li><a href="contact">Contact</a></li>
	</ul>
	

- By default, the parent of a dropdown menu (in this case the li) will have a caret to the right of the text. You can disable this by giving that element the class "nocaret". Additionally, you can give any element a caret by giving that element the class "caret".	
	
- Dropdown menus will by default open up when their parent is hovered over. This requires no js.

- Optionally, if a classname of "click" is also specified on the parent element, the dropdown menu will only drop down when the parent is clicked and not on hover. Note that this requires javascript (does not require jQuery). By require I mean javascript is used to perform this task.

####Main Menu/Header

An example header wold look like this:

    <div class="header">
      <div class="container">
        <a href="#" class="logo">Some Website</a>
        <a class="navdrop"></a>
        
        <ul class="nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>   
          <li class="dropdown"><a href="#">Portfolio</a>
            <ul>
              <li><a href="#">Art</a></li>
              <li><a href="#">Websites</a></li>
            </ul>
          </li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        
      </div>
    </div>  

- An item with classname "header" must be present to create what appears on the demo page (where the nav is aligned right and logo aligned left)

- an item with classname "container" centers and makes element fixed width (responsive), normally 960px, getting smaller as window is resized

- The element with class "navdrop" is displayed when small window viewport size, with the nav hidden until the navdrop is pressed. This all requires javascript (does not require jQuery)

##Buttons

	<button class="button button-blue">A blue button</button>
	<button class="button button-green">A green button</button>
	<button class="button button-red">A red button</button>
	<button class="button button-orange">An orange button</button>
	<button class="button button-cyan">A cyan button</button>
	<button class="button">A Regular button</button>
	
- An element is styled like a button with the class "button". This classname must be present
- More than just <button>Button</button> elements can be styled with the class "button"

New button styles can be easily made with css, only declaring: 
	
    .button-mybutton{
    	background-color: #08c;
    }
    
- Will create a new button style with automatic :hover and :focus styles

The markup for the above button could be:

	<a class="button .button-mybutton">Button</a>
	
##Tables

	<table class="table table-striped table-hover table-bordered">
     <tbody>
      <tr>
        <td>8:30am-9:30am</td>
        <td>Go for a jog</td>
        <td>Central Park</td>
      </tr>
      <tr>
        <td>10:00am-11:15am</td>
        <td>Eat Breakfast</td>
        <td>A place</td>
      </tr>
      <tr>
        <td>4:30pm-5:30pm</td>
        <td>Skype chat</td>
        <td>Denise</td>
      </tr>
      <tr>
        <td>6:00pm-7:15pm</td>
        <td>Eat dinner</td>
        <td>Home</td>
      </tr>
     </tbody>
    </table>
    
- .table class is needed
- .table-striped adds zebra striping
- .table-bordered creates a border around table, and vertical borders in between columns
- .table-hover changes background color of row when hovered
	
##Grid

- Responsive, 16-column grid
- Class syntax for width of column is .one.column, .two.columns, .three.columns, etc. 
- .one will make a box one 16th of the width of the container it is in, .two one eighth and so on
- Optional .one-third.column and .two-thirds.column for one third and two thirds of the container, respectively
- You may need to clearfix the parent div with .clearfix

Example HTML:

	<div id="products" class="clearfix">

        <h4 class="products-title">Check Out Some Products</h4>

        <div class="one-third column">
            <img src="http://placehold.it/250x150">
            <h5>This is a product</h5>
        </div>

        <div class="one-third column">
            <img src="http://placehold.it/250x150">
            <h5>This is another product</h5>
        </div>

        <div class="one-third column">
            <img src="http://placehold.it/250x150">
            <h5>This is yet another product</h5>
        </div>
    </div>
    
This will create three boxes beside eachother inside of its container

##Forms

	<form class="four columns">
        <h4>This is a form:</h4>
        <input type="text" placeholder="Enter your name.." />
        <input type="radio" name="sex" value="male"><span>Male</span>
        <input type="radio" name="sex" value="female"><span>Female</span><br/><br/>
        <textarea placeholder="This is a text area."></textarea>
        <input type="text" placeholder="This is a text field." />
        <select>
            <option>Cars</option>
            <option>Bikes</option>
            <option>Boats</option>
            <option>Planes</option>
            <option>Scooters</option>
            <input type="submit" class="button" />
        </select>
    </form>
    
The above will create a form one quarter of the container it is in

####Prepended and Appended Input

- If you want to put a span or button before a <input type="text" /> field, put the two items in order inside an element with class-name .input-prepend
- For after a <input type="text" />, put the two items in order inside a .input-append element.
- You can have both prepended and appended inputs, just make the parent element be .input-prepend.input-append
- The prepended and appended elements must be either a span or .button, and the input must be input[type="text"]

#####Examples:	

	<div class="input-append">
        <input type="text" placeholder="Write some text" />
        <button class="button button-green"><i class="icon-thumbs-up"></i></button>
    </div> 

	<div class="input-append input-prepend">
        <span>Write</span>
        <input type="text" placeholder="Write some text" />
        <li class="button dropdown click"><span>More</span>
            <ul>
                <li><a><i class="icon-edit"></i>Edit</a></li>
                <li><a><i class="icon-archive"></i>Compress</a></li>
                <li><a><i class="icon-bookmark"></i>Bookmark</a></li>
            </ul>
        </li>
    </div> 

##Button-Groups

	<ul class="button-group">
        <li class="button"><i class="icon-download-alt"></i></li>
        <li class="button"><i class="icon-expand"></i></li>
        <li class="button"><i class="icon-info"></i></li>
        <li class="button"><i class="icon-trash"></i></li>

        <li class="button dropdown click" data-tooltip="Oogadaboogada woogadashoogada">More
            <ul>
                <li><a><i class="icon-edit"></i>Edit</a></li>
                <li><a><i class="icon-archive"></i>Compress</a></li>
                <li><a><i class="icon-bookmark"></i>Bookmark</a></li>
            </ul>
        </li>
    </ul>
    
    <div class="button-group" data-toggle='button-radio'>
        <a class="button" ><i class="icon-align-left"></i></a>
        <a class="button"><i class="icon-align-center"></i></a>
        <a class="button"><i class="icon-align-right"></i></a>
    </div> 
    
- Parent must have class .button-group
- Children must be .buttons  

##Javascript Effects

###Button Effects

- A button group with data-toggle='button-radio''s children will have a radio button like behaviour, and .active when selected

Example:

	<div class="button-group" data-toggle='button-radio'>
	    <a class="button" ><i class="icon-align-left"></i></a>
	    <a class="button"><i class="icon-align-center"></i></a>
	    <a class="button"><i class="icon-align-right"></i></a>
	</div> 


###Tooltips

Any element with data-tooltip="mytooltip" will, on hover, make a tooltip appear under it with mytooltip as the tooltip
