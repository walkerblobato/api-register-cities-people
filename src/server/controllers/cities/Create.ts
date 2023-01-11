import { Request, Response, response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';


interface ICidade {
    nome: string;
}

const bodyValidation: yup.SchemaOf<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
})

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    let validatedData: ICidade | undefined = undefined;

    try {
        validatedData = await bodyValidation.validate(req.body, { abortEarly: false });

    } catch(err) {
        const yupError = err as yup.ValidationError;
        const validationErrors: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if (!error.path) return;

            validationErrors[error.path] = error.message;

        });

        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: validationErrors
        });
    }

    console.log(validatedData);

    return res.send('Create!');
};