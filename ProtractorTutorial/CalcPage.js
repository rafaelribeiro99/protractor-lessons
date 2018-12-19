/**
 * Author: Rafael Luna Ribeiro - Testes Automatizados utilizando Protractor
 */
	
var CalcPage = function(){
	var primeiroCampo = element(by.model("first"));
	var segundoCampo = element(by.model("second"));
	var operador = element(by.model("operator"));
	var soma = element(by.css("option:nth-child(1)[value='ADDITION']"));
	var botaoGo = element(by.id("gobutton"));
	var resultado = element(by.css("h2[class='ng-binding']"));
	var sistema = "http://juliemr.github.io/protractor-demo/";
	
	this.get = function() {
	    browser.get(sistema);
	};
	
	this.setPrimeiroCampo = function(num) {
		primeiroCampo.sendKeys(num);
	};
	
	this.setSegundoCampo = function(num) {
		segundoCampo.sendKeys(num);
	};
	
	this.setSoma = function(){
		operador.click();
		soma.click();
	};
	
	this.pressGo = function(){
		botaoGo.click();
	};
	
	this.getResultadoText = function(){
		return resultado.getText();
	};
	
	
};
module.exports = new CalcPage();
		
		
