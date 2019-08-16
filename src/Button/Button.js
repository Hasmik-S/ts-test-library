import React from 'react';
import PropTypes from 'prop-types';
import ButtonM from '@material-ui/core';

const Button = props => < ButtonM {...props}/>;


Button.PropTypes = {

    /**
         * The content of the button.
         */
        children: PropTypes.node.isRequired,
      
        /**
         * Override or extend the styles applied to the component.
         * See [CSS API](#css) below for more details.
         */
        classes: PropTypes.object.isRequired,
      
        /**
         * @ignore
         */
        className: PropTypes.string,
      
        /**
         * The color of the component. It supports those theme colors that make sense for this component.
         */
        color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
      
        /**
         * The component used for the root node.
         * Either a string to use a DOM element or a component.
         */
        component: PropTypes.node,
      
        /**
         * If `true`, the button will be disabled.
         */
        disabled: PropTypes.bool,
      
        /**
         * If `true`, the  keyboard focus ripple will be disabled.
         * `disableRipple` must also be true.
         */
        disableFocusRipple: PropTypes.bool,
      
        /**
         * If `true`, the ripple effect will be disabled.
         *
         * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
         * to highlight the element by applying separate styles with the `focusVisibleClassName`.
         */
        disableRipple: PropTypes.bool,
      
        /**
         * @ignore
         */
        focusVisibleClassName: PropTypes.string,
      
        /**
         * If `true`, the button will take up the full width of its container.
         */
        fullWidth: PropTypes.bool,
      
        /**
         * The size of the button.
         * `small` is equivalent to the dense button styling.
         */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
      
        /**
         * @ignore
         */
        type: PropTypes.string,
      
        /**
         * The variant to use.
         */
        variant: PropTypes.oneOf(['text', 'outlined', 'contained'])
};
        

Button.defaultProps = {
    color: 'primary',
    variant: 'contained',
    size: 'medium',
    disabled: false,
    disableRipple: false,
    fullWidth: false,
};



export default Button;