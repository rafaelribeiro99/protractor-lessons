/**
 * Author: Rafael Luna Ribeiro - Testes Automatizados utilizando Protractor
 */

describe('Suite de Teste - Exemplo 2', function(){
	
	function adicao(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.model("operator")).click().element(by.css("option:nth-child(1)[value='ADDITION']")).click();//CHAIN LOCATORS
		//element(by.css("option[value='ADDITION']")).click();
		element(by.id("gobutton")).click();
	}
	
	it('Caso de Teste - Operacao Adição', function(){
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.driver.manage().window().maximize();
		
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("2");
		element(by.model("operator")).click();
		element(by.css("option[value='ADDITION']")).click();
		//element(by.model("operator")).click().element(by.css("option:nth-child(1)[value='ADDITION']")).click();
		element(by.id("gobutton")).click();
		
		//Para assertions, Jasmine cuida de atender as promessas normalmente 
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");
		
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log("Resultado da Adição: "+ text);
		})
		//caputarar elementos usando css = tagname[attribute='content']
		
	})
	
	it('Caso de Teste - Operacao Adição 2', function(){
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.driver.manage().window().maximize();
		
		adicao(2, 3);
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("5");
		adicao(5, 5);
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");
		adicao(10, 5);
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("15");
		
//		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
//			console.log("Resultado da Adição: "+ text);
//		})
		//caputarar elementos usando css = tagname[attribute='content']
		
	})

})