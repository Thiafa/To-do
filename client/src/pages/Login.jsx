import React from 'react';

import imgBackground from '../assets/background.png';

export const Login = () => {
  return (
    <div
      className="bg-slate-600 w-screen h-screen flex  items-center pl-[10rem] mt-"
      style={{
        backgroundImage: `url(${imgBackground}),linear-gradient(#D9D8D6, #EAE9E7 )`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'linear-gradient(#D9D8D6, #EAE9E7 )',
      }}
    >
      <div
        className="rounded-full w-[350px] h-[450px] flex flex-col mt"
        style={{
          borderRadius: ' 35px',
          background: ' rgba(214, 214, 214, 0.70)',
          boxShadow: ' 2px 2px 10px 0px rgba(149, 149, 149, 0.25)',
          backdropFilter: ' blur(17px)',
        }}
      >
        <h1 className="text-2xl text-center mt-8" style={{}}>
          Faça seu Login
        </h1>
      </div>
    </div>
  );
};
