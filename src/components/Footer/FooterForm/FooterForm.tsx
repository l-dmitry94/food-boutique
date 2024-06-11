import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import SubscriptionModal from './SubscriptionModal';

import { useAppDispatch } from 'hooks/store';
import { getSubscription } from '../../../redux/subscription/subscription-operation';

import scss from './FooterForm.module.scss';
import CustomModal from 'components/CustomModal';
import { useState } from 'react';
import useSubscription from 'hooks/useSubscription';

export interface IInputs {
    email: string;
}

const schema = yup.object({
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
});

const FooterForm = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { isLoading } = useSubscription();
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IInputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IInputs> = (data) => {
        dispatch(getSubscription(data));
        setModalIsOpen(true);
        reset();
    };

    return (
        <>
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
                        <p className={scss.inputError}>
                            {errors.email?.message}
                        </p>
                    </div>

                    <button type="submit" className={scss.formButton}>
                        Send
                    </button>
                </div>
            </form>

            <CustomModal
                modalIsOpen={modalIsOpen}
                closeModal={() => setModalIsOpen(false)}
                isLoading={isLoading}
            >
                <SubscriptionModal />
            </CustomModal>
        </>
    );
};

export default FooterForm;
