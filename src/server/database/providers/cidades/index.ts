import  * as create from './Create';
import * as deleteById from './DeleteById';
import * as getAll from './GetAll';

export const CidadesProvider = {
    ...create,
    ...deleteById,
    ...getAll,
};