import React from 'react';
import { Link } from 'react-router';

const SmallBtn = ({text,url}) => {
  return (
    <Link to={url} className='transition-all text-xs leading-5 bg-brand px-5 py-[6px] text-white inline-flex rounded-sm capitalize font-brand font-semibold hover:bg-fblack'>
      {text}
    </Link>
  );
};

export default SmallBtn;