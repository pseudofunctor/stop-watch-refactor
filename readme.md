# TimerJS Refactor

![](https://cdn-images-1.medium.com/max/1000/0*jjASXWv5AnJ5SBuZ.jpg)

For tonights assignment, you are going to use everything we have learned so far! 

You are going to *refactor* some code! 

Refactoring means changing the structure of the code *without* changing the behavior. 

This is a very important process in programming. We refactor when we want to improve the organization or patterns in the code, or when we want to upgrade to something new. Here we will do both. 

In this assignment you are going to do 5 things.

1. **Practice Git!** 
	* Fork this repo to your github account
	* Clone this repo to your local machine
	* Make a commit with a descriptive commit message for *each* of the below steps
	* Push your code to your github repo.

1. **You will refactor the CSS to be more class-based.**

	This doesn't mean you can't do some CSS using the traditional element style selection. It just means that anything that fits into a nice class-based style should be. For example, if we have an `aside` element that is styled like this: 

	```html
	<aside>This is an aside. It's not the main thing, but it is related.</aside>
	```
	```css
	aside {
	  color: blue;
	  font-size: .5em;
	  float: left;
	  width: 30%;
	}
	```

	it should become something like this:
	```html
	<aside class="blue small left">This is an aside. It's not the main thing, but it is related.</aside>
	```

	```css
	.blue  {
	  color: blue
	}
	.small {
	  font-size: .5em
	}
	.
	.left {
	  float: left;
	}
	aside {
	  width: 30%;
	}
	```

	There are no right answers here, but your refactor should look pretty similar to this. *You are not changing how the site looks. Just refactoring the structure!*

1. **Refactor the JS to use ES6 as much as possible.**
	
	This means `let` and `const` instead of `var`! And it means being thoughtful about which of those you use. Will the variable you are creating ever be changed? If not, it should be `const`.  

	This also means using *arrow functions*.

1. **Refactor your code to be Object Oriented,**

	Once you have done the above steps, its time for one more refactor: You are going to make this code more Object Oriented. For this, you will make a class called StopWatch. Your StopWatch class will need some properties and methods. 

	*Hints:* 
		- You will need to create an instance of the class. 
		- Check out [this resource](https://hackernoon.com/the-little-guide-for-poo-in-js-3cfff83ad095) for a reference
