import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Cidades - GetById', () => {

    it('Search register', async () => {
        const resCreate = await testServer
            .post('/cidades')
            .send({ nome: 'Carangola' });
        
        expect(resCreate.statusCode).toEqual(StatusCodes.CREATED);

        const resSearch = await testServer
            .get(`/cidades/${resCreate.body}`)
            .send();

        expect(resSearch.statusCode).toEqual(StatusCodes.OK);
        expect(resSearch.body).toHaveProperty('nome');
    });

    it('Try to search register that not exist', async () => {
        const res = await testServer
            .get('/cidades/99999')
            .send();
        
        expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res.body).toHaveProperty('errors.default');
    });
});