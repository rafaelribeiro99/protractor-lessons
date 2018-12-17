/**
 * Author: Rafael Luna Ribeiro - Protractor Studies
 */

describe('Dropdowns lesson', function(){
	var width = 1930;
	var height = 1030;
	var x = 1;
	var y = 1;
	
	it('Dropdown Test 1', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.driver.manage().window().setPosition(x, y);
		browser.driver.manage().window().setSize(width, height);
		
		addition(2, 2);//4
		addition(4, 2);//6
		addition(5, 15);//20
		addition(50, 50);//100
		
		//getAttribute will get the content inside 'value' and will loop on EACH one of them
		element.all(by.tagName("option")).each(function(item) {
			item.getAttribute("value").then(function(values){
				console.log(values);
				})
			})
		})
		
		
	it('ADDITION Operation', function(){
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.driver.manage().window().setPosition(x, y);
		browser.driver.manage().window().setSize(width, height);
		
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("2");
		element(by.model("operator")).click().element(by.css("option:nth-child(1)[value='ADDITION']")).click();
		element(by.id("gobutton")).click();
		
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");
	})		

})
	
