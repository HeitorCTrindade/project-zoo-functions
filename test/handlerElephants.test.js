const handlerElephants = require("../src/handlerElephants");

describe('Testes da função HandlerElephants', () => {
  it('sem parâmetros, retorna undefined.', () => {
    expect(handlerElephants()).toEqual(undefined);
  });

  it('Se o parâmetro não receber uma String, retorna mensgem de Parametro inválido.', () => {
    expect(handlerElephants(1)).toEqual('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants(true)).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('Com o parametro location passado, retorna a localização dos Elefantes', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('Com o parametro popularity passado, retorna a popularidade dos Elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Com o parametro availability passado, retorna o dia de visita dos Elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('Com o parametro count passado, retorna a quantidade de Elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Com o parametro names passado, retorna os nomes dos Elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Com o parametro averageAge passado, retorna os nomes dos Elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Com uma String sem correspondência como parametro passado, retorna null', () => {
    expect(handlerElephants('hipopotamus')).toBe(null);
    expect(handlerElephants('ipsumLoren')).toBe(null);
  });
});

// {
//     id: elephantsId,
//     name: 'elephants',
//     popularity: 5,
//     location: 'NW',
//     availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
//     residents: [
//       {
//         name: ['Ilana','Orval','Bea','Jefferson']
//         sex: 'female',
//         age: 11,
//       },
//       {
//         name: 'Orval',
//         sex: 'male',
//         age: 15,
//       },
//       {
//         name: 'Bea',
//         sex: 'female',
//         age: 12,
//       },
//       {
//         name: 'Jefferson',
//         sex: 'male',
//         age: 4,
//       },
//     ],
