/**
 * Author: Rafael Luna Ribeiro - Protractor Studies
 */

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	
	specs: ['TechDay/Exemplo3.js'],
    
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {args: ['--disable-extensions',]}
	    //,'browserName': 'firefox'
	    //,'browserName': 'internet explorer'
		//,'browserName': 'MicrosoftEdge'
		
	}

};