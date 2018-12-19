/**
 * Author: Rafael Luna Ribeiro - Testes Automatizados utilizando Protractor
 */

var calcPage = require('./CalcPage');
describe('CalcPage Test',  function(){

	it('Teste Soma com PO', function(){
		calcPage.setPrimeiroCampo(5);
		calcPage.setSegundoCampo(15);
		calcPage.setSoma();
		calcPage.pressGo();
		
		//expect(calcPage.getResultadoText().toBe("20"));
	})

})