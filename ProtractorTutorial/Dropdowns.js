/**
 * Author: Rafael Luna Ribeiro - Protractor Studies
 */

describe('Dropdowns lesson', function(){
	
	function calc(a,b,c){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		//getAttribute will get the content inside 'value' and will loop on EACH one of them
		element.all(by.tagName("option")).each(function(item) {
			item.getAttribute("value").then(function(values){
					if(values==c){
						//item has the Element of the tagName "option", and using "all", can see each value of the option tag
						item.click();
						console.log("THE VALUE IS: "+values);
					}
				})
			})
		element(by.id("gobutton")).click();
	}
	
	it('Dropdown Test 1', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.driver.manage().window().maximize();
		
		calc(3, 5, "MULTIPLICATION");
		calc(3, 5, "DIVISION");
		calc(3, 5, "DIVISION");
		calc(10, 6, "ADDITION");

		element.all(by.repeater("result in memory")).each(function(item) {
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				console.log("Print:" + text);
			})
		})
	})
		
		
//	it('ADDITION Operation', function(){
//		
//		browser.get('http://juliemr.github.io/protractor-demo/');
//		browser.driver.manage().window().maximize();
//		
//		element(by.model("first")).sendKeys("3");
//		element(by.model("second")).sendKeys("2");
//		element(by.model("operator")).click().element(by.css("option:nth-child(1)[value='ADDITION']")).click();
//		element(by.id("gobutton")).click();
//		
//		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");
//	})		

})
	
