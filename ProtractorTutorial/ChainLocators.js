/**
 * Author: Rafael Luna Ribeiro - Protractor Studies
 */

describe('Chain Locators', function(){
	var width = 1930;
	var height = 1030;
	var x = 1;
	var y = 1;
	
	it('Repeater locator', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.driver.manage().window().setPosition(x, y);
		browser.driver.manage().window().setSize(width, height);
		//repeater locator
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("2");
		element(by.id("gobutton")).click();
		
		//using element more then once will limit protractor on looking for an element inside the current element 'child', page being 'Father'
		//creating more elements, means multiple childs
		//Example, can exists multiple css with only one tag or tagvalue, when that happens u need to specify where is the one u want to use
		//If u dont specify, ur only gonna use the first in the page
		//Using multiple element captures is what we call: Chaining Locators
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
			console.log(text);
		})
		//The td:nth-child(2) CSS, is used when the child has MULTIPLE td tags, Angular wont know which tag u want to access
		//use tagname:nth-child(n), n = the td u want to access: 
		//Example:  td:nth-child(2) // This will capture the SECOND (2) td tag in the child block
	})
	
})