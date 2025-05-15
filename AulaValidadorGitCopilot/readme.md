# Validador de Cartões de Crédito com GitHub Copilot

Este projeto é um exemplo prático de como o GitHub Copilot pode nos ajudar a criar soluções rápidas e eficientes para problemas do dia a dia, como a validação de números de cartões de crédito. Durante meus estudos, utilizei o Copilot para desenvolver este código, que valida diferentes bandeiras de cartões de crédito com base em seus padrões específicos.

## Sobre o Código

O código implementa uma função chamada `validateCreditCard`, que realiza as seguintes etapas:

1. **Sanitização do Input**:
   - Remove todos os espaços do número do cartão para garantir que a entrada seja processada corretamente.
   - Valida se o número contém apenas dígitos.

2. **Validação por Bandeira**:
   - Utiliza expressões regulares (regex) para verificar se o número do cartão corresponde aos padrões de diferentes bandeiras, como MasterCard, Visa, American Express, entre outras.

3. **Retorno**:
   - Caso o número corresponda a uma bandeira, retorna o nome da bandeira.
   - Caso contrário, retorna uma mensagem indicando que o número do cartão é inválido.

### Exemplo de Uso

```javascript
const cardNumber = '5094 1571 2145 4007'; // Número de cartão para teste
console.log(validateCreditCard(cardNumber));
```

Bandeiras Suportadas
MasterCard
Visa (16 Dígitos)
American Express
Diners Club
Discover
EnRoute
JCB
Voyager
HiperCard
Aura


O GitHub Copilot foi essencial para acelerar o desenvolvimento deste projeto. Ele sugeriu:

Expressões regulares para validação de padrões de cartões.
Estrutura lógica para sanitização e validação do input.
Mensagens de erro claras para entradas inválidas.
Além disso, o Copilot ajudou a organizar o código de forma legível e eficiente, permitindo que eu me concentrasse mais no aprendizado e menos na sintaxe.


Este projeto demonstra como ferramentas de IA, como o GitHub Copilot, podem ser grandes aliadas no desenvolvimento de software. Elas não apenas economizam tempo, mas também ajudam a aprender boas práticas de programação ao sugerir soluções inteligentes e bem estruturadas.

Espero que este exemplo inspire outros a explorar o potencial do Copilot em seus próprios projetos!