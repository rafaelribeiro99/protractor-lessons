/**
 * Author: Rafael Luna Ribeiro - Protractor Studies
 */

describe('Actions Demo', function() {
	
	
	it('Open Posse website', function() {
		browser.get('https://posse.com/');
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(5000);
			//the regular expression * is use to get all object with the onSearchResultOver keyword
			expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
			
			element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
			element(by.css("a[ng-href*='London/River Island']")).click().then(function(){
				browser.getTitle().then(function(title){
					console.log("Title of the page before switch: "+title);
				})
				browser.getAllWindowHandles().then(function(handles){
					browser.switchTo().window(handles[1]);
					browser.getTitle().then(function(title){
						console.log("Title of the page after switch: "+title);
					})
				browser.switchTo().window(handles[0]);
				browser.getTitle().then(function(title){
					console.log("Title of the page 3rd switch: "+title);
				})
				})
			})
		})
	
	})
	
	
})


