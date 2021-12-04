import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log('antes', ref.current);
    mount(ref.current);
    console.log('depois', ref.current);
  });

  return <div ref={ref} />;
};
