'use client';

import React, { useState, JSX } from 'react';

export interface Variant {
  img: string;   
  text: string;  
}

interface Props {
  variants: Variant[];     
  className?: string;       
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export default function ImageTextSwitcher({
  variants,
  className = '',
  imgProps = {},
}: Props): JSX.Element {
  const [idx, setIdx] = useState(0);

  const handleClick = () => {
    setIdx((i) => {
      if (i < variants.length - 1) {
        return i + 1;
      }
      return i;
    });
  };
  
  const { img, text } = variants[idx];

  return (
    <div
      onClick={handleClick}
      className={`${className} cursor-pointer select-none flex items-center gap-2`}
    >
      <img src={img} alt={text} {...imgProps} />
      <span className="text-white font-medium text-3xl">{text}</span>
    </div>
  );
}
