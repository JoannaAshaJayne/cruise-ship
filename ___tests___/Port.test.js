const { Port } = require('../src/Port.js');

describe('Port', () => {
  let dover, titanic, queenMary;

  beforeEach(() => {
    dover = new Port("Dover");
    titanic = jest.fn();
    queenMary = jest.fn();
  });

  it('can be instantiated', () => {
    expect(dover).toBeInstanceOf(Object);
  });
  it('has a name property', () => {
    
    expect(dover.name).toEqual('Dover');
  });
  it('can add a ship', () => {
    
    dover.addShip(queenMary);

    expect(dover.ships).toContain(queenMary);
  });
  it('can remove a ship', () => {
    
    dover.addShip(titanic);
    dover.addShip(queenMary);
    dover.removeShip(queenMary);

    expect(dover.ships).toEqual([titanic]);
  });
});
