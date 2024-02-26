export const Empleados = () => {
  return (
    <section className="w-full px-10 py-16 h-full flex flex-col gap-10">
      <div className="border-[1px] border-gray-300 rounded-lg py-10 px-10 shadow-black/5 shadow-md bg-slate-200 h-full flex flex-col gap-5">
        <div className="flex items-start mb-5">
          <p className="text-slate-600 border-b-[3px] border-indigo-500 text-xl">
            Empleados de todas las fabricas
          </p>
        </div>

        <div className="grid grid-cols-5 gap-10">
          <div className="bg-indigo-500 py-5 px-6 rounded-lg flex flex-col items-start justify-center gap-2 shadow-lg cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-300 max-2xl:px-4 max-2xl:py-2">
            <p className="text-white flex gap-2 items-center">
              Total empleados cargados{" "}
            </p>
            <span className="font-bold text-white text-lg bg-slate-800 px-2 py-1 rounded-lg shadow-sm">
              15
            </span>
          </div>

          <div className="bg-indigo-500 py-5 px-6 rounded-lg flex flex-col items-start justify-center gap-2 shadow-lg cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-300 max-2xl:px-4 max-2xl:py-2">
            <p className="text-white flex gap-2 items-center">
              Total fabricas cargados{" "}
            </p>
            <span className="font-bold text-white text-lg bg-slate-800 px-2 py-1 rounded-lg shadow-sm">
              5
            </span>
          </div>

          <div className="bg-indigo-500 px-5 rounded-lg flex flex-col gap-2 items-start justify-center shadow-lg cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-300 max-2xl:px-4 max-2xl:py-2">
            <p className="text-white">Total a pagar a empleados </p>
            <span className=" text-white font-bold text-lg bg-slate-800 px-4 py-1 rounded-lg shadow-sm">
              $150.000.000,02
            </span>
          </div>

          <div className="bg-indigo-500 px-5 rounded-lg flex flex-col gap-2 items-start justify-center shadow-lg cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-300 max-2xl:px-4 max-2xl:py-2">
            <p className="text-white">Total descuentos en faltas </p>
            <span className=" text-white font-bold text-lg bg-slate-800 px-4 py-1 rounded-lg shadow-sm">
              $300.000,65
            </span>
          </div>

          <div className="bg-indigo-500 px-5 rounded-lg flex flex-col gap-2 items-start justify-center shadow-lg cursor-pointer hover:translate-x-1 transition-all ease-in-out duration-300 max-2xl:px-4 max-2xl:py-2">
            <p className="text-white">Total pagos en bancos</p>
            <span className=" text-white font-bold text-lg bg-slate-800 px-4 py-1 rounded-lg shadow-sm">
              $3.000.000,24
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
