document.write('<p><b>DEMONSTRAÇÃO DE RESULTADOS DO EXERCICIO</b>');
document.write('<p><b>========================================</b>');


let Budget;
let Impostos;
let InvestimentoLiquido;
let CustoFixo;
let CustoVariavel;
let LucroLiquido;

Budget = parseFloat(window.prompt('Budget:'));
Impostos = parseFloat(window.prompt('Imposto:'));
CustoFixo = parseFloat(window.prompt('Custo Fixo:'));
CustoVariavel = parseFloat(window.prompt('Custo Variavel:'));

InvestimentoLiquido = Budget-Impostos;
LucroLiquido = InvestimentoLiquido-CustoFixo-CustoVariavel;


document.write('<p>Budget=>' +Budget);
document.write('<p>Impostos=>' +Impostos);
document.write('<p>Investimento Liquido=>' +InvestimentoLiquido);
document.write('<p>Custo Fixo=>' +CustoFixo);
document.write('<p>Custo Variavel=>' +CustoVariavel);
document.write('<p>Lucro Liquido=>' +LucroLiquido);