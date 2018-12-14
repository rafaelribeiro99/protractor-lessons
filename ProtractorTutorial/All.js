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
		
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("2");
		element(by.id("gobutton")).click();
		
		element(by.model("first")).sendKeys("10");
		element(by.model("second")).sendKeys("10");
		element(by.id("gobutton")).click();
		
		element(by.model("first")).sendKeys("5");
		element(by.model("second")).sendKeys("5");
		element(by.id("gobutton")).click();
		
		element.all(by.repeater("result in memory")).count().then(function(text){
			//on a repeater, count returns de number of data(rows), this makes 3 calculations will count to 3 then
			//each needs to be resolved
			console.log(text);
		})
		
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})

	})
	
})