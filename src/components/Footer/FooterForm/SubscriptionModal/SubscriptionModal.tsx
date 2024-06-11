import {
    subscription_mob_1x,
    subscription_mob_2x,
    subscription_tab_1x,
    subscription_tab_2x,
} from 'assets/images/subscription';
import useSubscription from 'hooks/useSubscription';

import scss from './SubscriptionModal.module.scss';

const SubscriptionModal = () => {
    const { error } = useSubscription();

    return (
        <>
            <div className={scss.subscriptionWrapper}>
                <div
                    className={`${scss.subscriptionInfo} ${error && scss.subscriptionInfoError}`}
                >
                    <h2 className={scss.subscriptionTitle}>
                        {error ? (
                            <>
                                This{' '}
                                <span className={scss.subscriptionTitleColor}>
                                    email address
                                </span>{' '}
                                has already been entered
                            </>
                        ) : (
                            <>
                                Thanks for subscribing for{' '}
                                <span className={scss.subscriptionTitleColor}>
                                    new
                                </span>{' '}
                                products
                            </>
                        )}
                    </h2>
                    <p className={scss.subscriptionDescription}>
                        {error
                            ? 'You have already subscribed to our new products. Watch for offers at the mailing address.'
                            : 'We promise you organic and high-quality products that will meet your expectations. Please stay with us and we promise you many pleasant surprises.'}
                    </p>
                </div>

                {!error && (
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcSet={`${subscription_tab_1x} 1x, ${subscription_tab_2x} 2x`}
                        />
                        <img
                            src={subscription_mob_1x}
                            srcSet={`${subscription_mob_1x} 1x, ${subscription_mob_2x} 2x`}
                            alt="Subscription image"
                            className={scss.subscriptionImage}
                        />
                    </picture>
                )}
            </div>
        </>
    );
};

export default SubscriptionModal;
