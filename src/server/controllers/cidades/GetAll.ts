import { Request, Response } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';

import { validation } from '../../shared/middleware';
import { CidadesProvider } from '../../database/providers/cidades';


interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().integer().notRequired().moreThan(0),
        limit: yup.number().integer().notRequired().moreThan(0),
        filter: yup.string().notRequired(),
    })),
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {    
    const result = await CidadesProvider.getAll();

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }
    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', 1);
    
    return res.status(StatusCodes.OK).json(result);
};