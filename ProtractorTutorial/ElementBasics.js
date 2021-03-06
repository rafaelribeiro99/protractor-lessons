/**
 * Author: Rafael Luna Ribeiro - Protractor Studies
 */

describe('Protractor Element Demo', function(){
	
	it('ADDITION Operation', function(){
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.driver.manage().window().maximize();
		
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("2");
		//element(by.model("operator")).click();
		//element(by.css("option[value='ADDITION']")).click();
		element(by.model("operator")).click().element(by.css("option:nth-child(1)[value='ADDITION']")).click();
		element(by.id("gobutton")).click();
		
		//FOR ASSERTIONS, JASMINE TAKES CARE OF RESOLVING PROMISE(ASYNCRONOUS PROBLEM)
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");
//		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
//			console.log(text);
//		})
		//this command will run FIRST, because it needs you to resolve promise
		//2 potencial problems: 1.sequence is not guarenteed
		//tagname[attribute='value']
		
	})
	
	it('SUBTRACTION Operation', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.driver.manage().window().maximize();
		
		element(by.model("first")).sendKeys("10");
		//element(by.model("operator")).click();
		//element(by.css("option[value='SUBTRACTION']")).click();
		element(by.model("operator")).click().element(by.css("option:nth-child(5)[value='SUBTRACTION']")).click();
		element(by.model("second")).sendKeys("2");
		element(by.id("gobutton")).click();
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
	})
		
})