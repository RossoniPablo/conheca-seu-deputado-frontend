import { createContext } from "react";


export type DeputadoBase = {
  id: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  urlFoto: string;
};

type DeputadosContextType = {
  deputados: DeputadoBase[];
  loading: boolean;
  error: string | null;
};

export const DeputadosContext = createContext<DeputadosContextType>({
  deputados: [],
  loading: false,
  error: null,
});

