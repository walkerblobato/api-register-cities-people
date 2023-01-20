import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('Cidades - GetAll', () => {

    it('Search all registers', async () => {
        const resCreate = await testServer
            .post('/cidades')
            .send({ nome: 'Carangola'});

        expect(resCreate.statusCode).toEqual(StatusCodes.CREATED);

        const resSearch = await testServer
            .get('/cidades')
            .send();

        expect(Number(resSearch.header['x-total-count'])).toBeGreaterThan(0);
        expect(resSearch.statusCode).toEqual(StatusCodes.OK);
        expect(resSearch.body.length).toBeGreaterThan(0);
    });
});