import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Template, { Main, Footer } from './Template';
import Button from '../UI/Button';

class Done extends React.PureComponent {
    static propTypes = {
        t: PropTypes.func.isRequired,
    };

    render() {
        const { t } = this.props;
        return (
            <Template>
                <Main>
                    <p>{t('text')}</p>
                </Main>
                <Footer>
                    <Button to="/" variant="success">
                        {t('button')}
                    </Button>
                </Footer>
            </Template>
        );
    }
}

export default translate('onboardingComplete')(Done);
