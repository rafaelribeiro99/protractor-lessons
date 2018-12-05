/**
 * Author: Rafael Luna Ribeiro - Protractor Studies
 */

//1st parameter: Test Suite Name
//2nd parameter: The function, where you develop the test cases(It Blocks)
describe('First Protractor Test Suite', function() {
	
	//IT: 1st parameter: Name of the Test Case
	it('Open Angular website', function() {
		//protractor code
		//This command will open the website on the parameter
		browser.get('https://angular.io');
		//element(by.partialLinkText('quickstart')).click();
		browser.sleep(5000);
		
		
	})
	
	it('Close browser', function() {
		//protractor code
		browser.close();
		
	})
	
})


