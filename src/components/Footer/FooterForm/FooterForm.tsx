import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import scss from './FooterForm.module.scss';

interface IInputs {
    email: string;
}

const schema = yup.object({
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
});

const FooterForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IInputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IInputs> = (data) => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={scss.footerForm}>
            <p className={scss.footerText}>
                Subscribe and learn about new products!
            </p>

            <div className={scss.formWrapper}>
                <div className={scss.inputWrapper}>
                    <input
                        type="text"
                        {...register('email')}
                        placeholder="Email"
                        className={scss.input}
                    />
                    <p className={scss.inputError}>{errors.email?.message}</p>
                </div>

                <button type="submit" className={scss.formButton}>
                    Send
                </button>
            </div>
        </form>
    );
};

export default FooterForm;
