import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { api } from "../../service/api";

type DeputadoDespesas = {
  ano: string;
  mes: string;
  tipoDespesa: string
  codDocumento: string
  tipoDocumento: string
  dataDocumento: string
  numDocumento: string
  valorDocumento: string
  urlDocumento: string
  nomeFornecedor: string
  cnpjCpfFornecedor: string
  valorLiquido: string
}

export const DeputadoDespesas = ({ id }: { id: string }) => {
  const [despesa, setDespesa] = useState<DeputadoDespesas[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return

    const fetchDeputadoDespesas = async () => {
      try {
        setLoading(true);

        const res = await api.get(`/deputados/${id}/despesas`)
        setDespesa(res.data.dados ?? []);
      } catch (err) {
        console.log("Erro fetch:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchDeputadoDespesas()
  }, [id])

  if (loading) {
    return <p className="text-white">Carregando...</p>;
  }

  if (despesa.length === 0) {
    return <p className="text-white">Despesas do Deputado não encontrado</p>;
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-6 text-white">
      {despesa.length === 0 ? (
        <p className="text-white">Despesas do Deputado não encontrado</p>
      ) : (
        <div>
          {despesa.map((d, index) => (
            <div key={index}>
              <p className="mt-2">
                Ano: {d.ano}
              </p>
              <p className="mt-2">
                Mês: {d.mes}
              </p>
              <p className="mt-2">
                Tipo da despesa: {d.tipoDespesa}
              </p>
              <p className="mt-2">
                Valor gasto: {d.valorDocumento}
              </p>
            </div>
          ))}

        </div>
      )}
    </div>
  )
}