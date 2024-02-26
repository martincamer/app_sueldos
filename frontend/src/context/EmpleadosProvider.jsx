//imports
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

//context
export const EmpleadosContext = createContext();

//use context
export const useEmpleadosContext = () => {
  const context = useContext(EmpleadosContext);
  if (!context) {
    throw new Error("use Empleados propvider");
  }
  return context;
};

//provider
export const EmpleadosProvider = ({ children }) => {
  return (
    <EmpleadosContext.Provider value={{}}>{children}</EmpleadosContext.Provider>
  );
};
