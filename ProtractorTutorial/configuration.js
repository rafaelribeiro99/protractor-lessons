/**
 * Author: Rafael Luna Ribeiro - Protractor Studies
 */

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	
	//specs: ['Specs/Spec1.js'],
	specs: ['ElementBasics.js'],
	//specs: ['ChainLocators.js'],
    
	capabilities: {
		'browserName': 'chrome'
	    //,'browserName': 'firefox'
	    //,'browserName': 'internet explorer'
		//,'browserName': 'MicrosoftEdge'	
		
	}

   //directConnect: true
    
		
};