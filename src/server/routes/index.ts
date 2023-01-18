import { Router } from 'express';

import { CitiesController } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
    return res.send('Olá, DEV!');
}); 

router.get('/cidades', CitiesController.getAllValidation, CitiesController.getAll);
router.post('/cidades', CitiesController.createValidation, CitiesController.create);
router.get('/cidades/:id', CitiesController.getByIdValidation, CitiesController.getByID);
router.put('/cidades/:id', CitiesController.updateByIdValidation, CitiesController.updateById);
router.delete('/cidades/:id', CitiesController.deleteByIdValidation, CitiesController.deleteById);

export { router };