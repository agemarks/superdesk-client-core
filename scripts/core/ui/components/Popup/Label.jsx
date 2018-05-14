import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {gettextCatalog} from '../utils';

/**
 * @ngdoc react
 * @name Label
 * @description Label used in a popup, typically in header
 */

const Label = ({text, children, centerText}) => (
    <span className={classNames(
        'popup__menu-label',
        {'popup__menu-label--center': centerText}
    )}>
        {gettextCatalog(text)}
        {children}
    </span>
);

Label.propTypes = {
    text: PropTypes.string,
    children: PropTypes.node,
    centerText: PropTypes.bool,
};

Label.defaultProps = {centerText: false};

export default Label;
