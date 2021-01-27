const Itinerary = require('../src/Itinerary.js');
describe('Itinerary', () => {
    it('can be instantiated', () => {
      expect(new Itinerary('Calais')).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');

        const itinerary = new Itinerrary([dover, calais]);

        expect(port.name).toEqual([dover, calais]);
      });
    });


