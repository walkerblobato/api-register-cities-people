import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('Cidades - PutById', () => {
    it('JUpdate register', async () => {
        const resCreate = await testServer
            .post('/cidades')
            .send({ nome: 'Carangola' });
        
        expect(resCreate.statusCode).toEqual(StatusCodes.CREATED);

        const resUpdate = await testServer
            .put(`/cidades/${resCreate.body}`)
            .send({ nome: 'Tombos' });

        expect(resUpdate.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Try to update register that not exist', async () => {
        const res = await testServer
            .put('/cidades/99999')
            .send({ nome: 'Carangola'});
        
        expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res.body).toHaveProperty('errors.default');
    });

});