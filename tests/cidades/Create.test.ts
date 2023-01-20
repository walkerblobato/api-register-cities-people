import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Cidades - Create', () => {

    it('Create register', async () => {
        const res = await testServer
            .post('/cidades')
            .send({ nome: 'Carangola' });
        
        expect(res.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res.body).toEqual('number');
    });

    it('Try to create a record with a very short nome', async () => {
        const res = await testServer
            .post('/cidades')
            .send({ nome: 'Ca' });
        
        expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res.body).toHaveProperty('errors.body.nome');
    });
});