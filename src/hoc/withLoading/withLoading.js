/** @format */
import React from 'react';

import { Spinner } from 'components/UI';

const withLoading = (Component) =>
    class WithLoading extends React.Component {
        render() {
            const { loading, ...props } = this.props;
            return loading ? <Spinner /> : <Component {...props} />;
        }
    };

export default withLoading;
