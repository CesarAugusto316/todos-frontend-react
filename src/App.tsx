import { FC } from 'react';


export const App: FC = () => {

  return (
    <div className="bg-slate-800 h-screen text-slate-400 
      flex flex-col justify-center items-center">

      <input
        className="bg-slate-400 rounded p-2 text-slate-800 outline-none 
        ring-2 ring-lime-500 shadow-md"
        type="text"
        placeholder="Write todo..."
      />
    </div>
  );
};
