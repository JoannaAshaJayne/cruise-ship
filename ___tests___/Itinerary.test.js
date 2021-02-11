const { Itinerary } = require('../src/Itinerary.js');

describe('Itinerary', () => {

  let dover, calais, itinerary;

  beforeEach(() => {
    dover = jest.fn();
    calais = jest.fn();
    itinerary = new Itinerary([dover, calais]);
  });

    it('can be instantiated', () => {
      expect(itinerary).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        expect(itinerary.ports).toEqual([dover, calais]);
      });
    });


