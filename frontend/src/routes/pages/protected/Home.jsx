export const Home = () => {
  return (
    <section className="w-full px-10 py-16 h-full flex flex-col gap-10">
      <div className="border-[1px] border-gray-300 rounded-lg py-10 px-10 shadow-black/5 shadow-md bg-slate-200">
        <div className="grid grid-cols-4 gap-10">
          <div className="bg-indigo-500 py-10 px-6 rounded-lg flex flex-col justify-center gap-2 shadow-lg cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-300 max-2xl:px-4 max-2xl:py-2">
            <p className="text-white flex gap-2 items-center">
              Total empleados{" "}
              <span className="font-bold text-lg bg-slate-800 px-2 py-1 rounded-lg shadow-sm">
                15
              </span>
            </p>
            <p className="text-white flex items-center gap-3 max-2xl:flex-col max-2xl:items-start">
              Total gastos en empleados{" "}
              <span className="text-white font-bold bg-slate-800 px-4 py-1 rounded-lg shadow-sm">
                $12.50000
              </span>
            </p>
          </div>

          <div className="bg-indigo-500 py-10 px-6 rounded-lg flex flex-col justify-center gap-2 shadow-lg cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-300 max-2xl:px-4 max-2xl:py-2 items-start">
            <p className="text-white flex items-start">Total pagado fabricas</p>
            <span className="text-white font-bold bg-slate-800 px-4 py-1 rounded-lg shadow-sm">
              $12.50000
            </span>
          </div>

          <div className="bg-indigo-500 py-10 px-6 rounded-lg flex flex-col justify-center gap-2 shadow-lg cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-300 max-2xl:px-4 max-2xl:py-2 items-start">
            <p className="text-white">Total pagado en producción</p>
            <span className="text-white font-bold bg-slate-800 px-4 py-1 rounded-lg shadow-sm">
              $12.50000
            </span>
          </div>

          <div className="bg-indigo-500 py-10 px-6 rounded-lg flex flex-col justify-center gap-2 shadow-lg cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-300 max-2xl:px-4 max-2xl:py-2 items-start">
            <p className="text-white">Total perdidas en faltas</p>
            <span className="text-white font-bold bg-slate-800 px-4 py-1 rounded-lg shadow-sm">
              $12.50000
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-start">
        <p className="text-slate-700 text-xl border-b-4 border-slate-700">
          Grafico mensual en empleados
        </p>
      </div>
      <div className="border-[1px] border-gray-300 rounded-lg py-10 px-10 shadow-black/5 shadow-md bg-slate-200"></div>
    </section>
  );
};
