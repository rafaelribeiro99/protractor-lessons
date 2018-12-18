/**
 * Author: Rafael Luna Ribeiro - Testes Automatizados utilizando Protractor
 */

describe('Suite de Teste - Exemplo 2', function(){
		
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

})