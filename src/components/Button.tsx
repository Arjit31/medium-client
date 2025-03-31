export function Button({text, clickHandler}: {text: string, clickHandler: React.MouseEventHandler<HTMLButtonElement>}) {
  return (
    <button
      className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-md text-center text-white transition-all shadow-md hover:shadow-lg  active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
      type="button" onClick={clickHandler}
    >
      {text}
    </button>
  );
}
