/**
 * Author: Rafael Luna Ribeiro - Protractor Studies
 */

//1st parameter: Test Suite Name
//2nd parameter: The function, where you develop the test cases(It Blocks)
describe('First Protractor Test Suite', function() {
	
	//IT: 1st parameter: Name of the Test Case
	it('Open Angular website and access Getting Started', function() {
		//protractor code
		//This command will open the website on the parameter
		browser.get('https://angular.io');
		//element(by.partialLinkText('quickstart')).click();
		browser.sleep(3000);
		element(by.xpath('//*[@id="intro"]/div[2]/a')).click();
		browser.sleep(3000);
		element(by.id('getting-started')).isDisplayed();
		
		
	})
	
	it('Close the browser', function() {
		//protractor code
		browser.close();
		
	})
	
})


