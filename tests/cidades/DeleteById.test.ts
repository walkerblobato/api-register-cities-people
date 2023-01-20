import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Cidades - DeleteById', () => {

    it('Deleta register', async () => {
        const resCreate = await testServer
            .post('/cidades')
            .send({ nome: 'Carangola' });
        
        expect(resCreate.statusCode).toEqual(StatusCodes.CREATED);

        const resDelete = await testServer
            .delete(`/cidades/${resCreate.body}`)
            .send();

        expect(resDelete.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Try to delete register that not exist', async () => {
        const res = await testServer
            .delete('/cidades/99999')
            .send();
        
        expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res.body).toHaveProperty('errors.default');
    });  
});