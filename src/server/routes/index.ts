import { Router } from 'express';

import { CitiesController } from './../controllers';

const router = Router();

router.get('/', (_, res) => {
    return res.send('Olá, DEV!');
}); 

router.post('/cidades', CitiesController.create);

export { router };