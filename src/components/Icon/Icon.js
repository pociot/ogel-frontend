import React from 'react';

import icons from './icons';

const Icon = ({glyph}) => (
  icons[glyph] ? <img src={icons[glyph]} alt={`${glyph}-icon`} /> : null
);

export default Icon;