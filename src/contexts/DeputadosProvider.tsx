
import { useEffect, useState } from "react";
import { DeputadosContext } from "./DeputadosContext";
import type { DeputadoBase } from "../types/deputado";
import { api } from "../service/api";

export const DeputadosProvider = ({ children }: { children: React.ReactNode }) => {
  const [deputados, setDeputados] = useState<DeputadoBase[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeputados = async () => {
      try {
        setLoading(true);

        const res = await api.get("/deputados")

        setDeputados(res.data.dados);
      } catch (err) {
        setError("Erro ao carregar deputados");
      } finally {
        setLoading(false);
      }
    };

    fetchDeputados();
  }, []);

  return (
    <DeputadosContext.Provider value={{ deputados, loading, error }}>
      {children}
    </DeputadosContext.Provider>
  );
};