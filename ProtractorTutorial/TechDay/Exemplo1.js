/**
 * Author: Rafael Luna Ribeiro - Testes Automatizados utilizando Protractor
 */

describe('Suite de Teste - Exemplo 1', function(){
	
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
	
	it('Caso de Teste - Operacao Subtração', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.driver.manage().window().maximize();
		
		element(by.model("first")).sendKeys("10");
		element(by.model("operator")).click();
		element(by.css("option[value='SUBTRACTION']")).click();
		//element(by.model("operator")).click().element(by.css("option:nth-child(5)[value='SUBTRACTION']")).click();
		element(by.model("second")).sendKeys("2");
		element(by.id("gobutton")).click();
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
		
		//console.log(element(by.css("h2[class='ng-binding']")).getText());
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log("Resultado da Subtração: "+text);
		})
	})
	
	it('Caso de Teste - Operacao Multiplicar', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.driver.manage().window().maximize();
		
		element(by.model("first")).sendKeys("2");
		element(by.model("operator")).click();
		element(by.css("option[value='MULTIPLICATION']")).click();
		element(by.model("second")).sendKeys("25");
		element(by.id("gobutton")).click();
		//browser.sleep(5000);
		
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("50");
		
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log("Resultado da multiplicação: "+text);
		})
		
		
		
	})
	
		
})