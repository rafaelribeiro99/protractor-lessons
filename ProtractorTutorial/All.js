/**
 * Author: Rafael Luna Ribeiro - Protractor Studies
 */

describe('Chain Locators', function(){
	var width = 1930;
	var height = 1030;
	var x = 1;
	var y = 1;
	
	function addition(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	
	it('Testing Add Function', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.driver.manage().window().setPosition(x, y);
		browser.driver.manage().window().setSize(width, height);
		
		addition(2, 2);//4
		addition(4, 2);//6
		addition(5, 15);//20
		addition(50, 50);//100
		
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log("Print With Addition:" + text);
			})
		})
	})
	
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
		
		//each method will get EACH element located on the repeater, and place its content inside the VAR "item"
		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log(text);
			})
		})

	})
	
})