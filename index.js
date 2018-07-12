import React from 'react';
import PropTypes from 'prop-types';

const InlineScript = ({ children }) => (
  <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }} /> // eslint-disable-line
);

InlineScript.propTypes = {
  children: PropTypes.any.isRequired, // eslint-disable-line
};

export default InlineScript;