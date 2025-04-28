'use client';
import React, { JSX, useState } from 'react';
import CloudNav from './components/cloudNav';
import DarkToggle from './components/DarkToggle';
import HeadingShatter from './components/HeadingShatter';
import SkillsTicker from './components/SkillsTicker';
import QuoteDisplay from './components/QuoteDisplay';
import ImageTextSwitcher from './components/ImageTextSwitcher';
import useVisitorCount from './hooks/useVisitorCount';
import useRandomQuote from './hooks/useRandomQuote';
import { dragonVariants, bearVariants } from './lib/variants';

export default function HomePage(): JSX.Element {
  const visitorCount = useVisitorCount();
  const [quote, nextQuote] = useRandomQuote();
  const [dark, setDark] = useState(false);

  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center pt-95 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden text-white">

        <CloudNav />

        <DarkToggle
          dark={dark}
          toggleDark={() => setDark(d => !d)}
        />

        <p className="text-xl absolute bottom-150">
          You are lucky visitor nr. <strong>{visitorCount}</strong>!
        </p>

        <HeadingShatter />

        <SkillsTicker />

        <QuoteDisplay quote={quote} next={nextQuote} />
      </main>

      <ImageTextSwitcher
        variants={dragonVariants}
        className="
          fixed
          top-50     md:top-58    lg:top-52
          left-2     md:left-6     lg:left-88
        "
        imgProps={{
          width: 24,
          height: 24,
          className: 'w-20 h-30 sm:w-30 sm:h-40 md:w-34 md:h-44'
        }}
      />

<ImageTextSwitcher
       variants={bearVariants}
       className="
       fixed flex flex-col-reverse
       bottom-94     md:bottom-94    lg:bottom-94
       right-2     md:right-6     lg:right-88
     "
     imgProps={{
       width: 24,
       height: 24,
       className: 'w-20 h-30 sm:w-24 sm:h-40 md:w-24 md:h-44'
        }}
      />
    </>
  );
}