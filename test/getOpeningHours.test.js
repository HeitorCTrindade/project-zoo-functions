const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Sem parâmetros, retorna o quadro completo de horários.', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });

  it('Se receber a String "Tuesday e 09:00-AM", retorna mensgem: "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });

  it('Se receber a String "Sunday e 05:00-PM", retorna mensgem: "The zoo is open"', () => {
    expect(getOpeningHours('Sunday', '05:00-pM')).toEqual('The zoo is open');
  });

  it('caso não seja enviado um dia válido como parâmetro deve ser lançado um error', () => {
    expect(() => getOpeningHours('segunda', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('caso não seja enviado um numero como parâmetro de horas deve ser lançado um error', () => {
    expect(() => getOpeningHours('Monday', 'Hh:90-AM')).toThrow('The hour should represent a number');
  });

  it('caso não seja enviado um numero como parâmetro de minuts deve ser lançado um error', () => {
    expect(() => getOpeningHours('Monday', '12:xp-AM')).toThrow('The minutes should represent a number');
  });

  it('caso não seja enviado uma abreviação de periodo (AM-PM) correto como parâmetro de minuts deve ser lançado um error', () => {
    expect(() => getOpeningHours('Monday', '12:58-AC')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });


  it('caso não seja enviado uma hora valida (0-12) como parâmetro deve ser lançado um error', () => {
    expect(() => getOpeningHours('Monday', '58:20-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('caso não sejam enviado minutos validos (0-59) como parâmetro deve ser lançado um error', () => {
    expect(() => getOpeningHours('Monday', '12:250-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('caso o zoológico não funcione no dia (currently monday does not open) deve ser retornado "the zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Tuesday', '10:30-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Wednesday', '12:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Thursday', '12:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Friday', '12:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('SatuRday', '12:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('SundAy', '12:00-AM')).toEqual('The zoo is open');
  });

  it('caso o zoológico não funcione no dia (currently monday does not open) deve ser retornado "the zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Tuesday', '10:30-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Wednesday', '12:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Thursday', '12:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Friday', '12:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('SatuRday', '12:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('SundAy', '12:00-AM')).toEqual('The zoo is open');
  });

  it('Verifica se passando os prametros corretos a função tem o funcionamento esperado, respondendo corretamente se o zoologico esta aberto naquele horario', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Friday', '11:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('Friday', '08:01-PM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Sunday', '07:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Sunday', '07:00-PM')).toEqual('The zoo is open');
  });
});
