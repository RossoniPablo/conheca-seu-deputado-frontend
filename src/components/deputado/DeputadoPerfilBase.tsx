import { useEffect, useState } from "react";
import { api } from "../../service/api";

type DeputadoDetalhe = {
  id: number;
  nomeCivil: string;
  cpf: string;
  dataNascimento: string;
  ufNascimento: string;
  municipioNascimento: string;
  escolaridade: string;
  ultimoStatus: {
    nome: string;
    siglaPartido: string;
    siglaUf: string;
    urlFoto: string;
    situacao: string;
    email: string | null;
    idLegislatura: string
    condicaoEleitoral: string;
  };
  gabinete: {
    nome: string;
    predio: string;
    sala: string;
    andar: string;
    telefone: string;
    email: string | null;
  }
};

export const DeputadoPerfilBase = ({ id }: { id: string }) => {

  const [deputado, setDeputado] = useState<DeputadoDetalhe | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!id) return;

    const fetchDeputado = async () => {
      try {
        setLoading(true);

        const res = await api.get(`/deputados/${id}`)
        // if (!res.ok) {
        //   throw new Error("Erro na API");
        // }

        setDeputado(res.data.dados ?? null);
      } catch (err) {
        console.log("Erro fetch:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeputado();
  }, [id]);

  if (loading) {
    return <p className="text-white">Carregando...</p>;
  }

  if (!deputado) {
    return <p className="text-white">Deputado não encontrado</p>;
  }

  return (
    <div className="min-h-screen py-14 text-white">
      <div className="flex flex-col justify-center items-center pb-8">
        <h1 className="text-5xl font-bold">
          {deputado.ultimoStatus.nome}
        </h1>
        <p>
          Situação: {deputado.ultimoStatus.situacao}
        </p>
      </div>

      <div className="flex justify-center gap-10 p-6 bg-[#111824]">
        {/* DADOS PESSOAIS */}
        <img
          src={deputado.ultimoStatus.urlFoto}
          className="w-60 rounded-2xl"
        />
        <div>
          <p className="mt-2">
            <span className="font-bold">Nome civíl:</span> {deputado.nomeCivil}
          </p>

          <p className="mt-2">
            <span className="font-bold">Partido:</span> {deputado.ultimoStatus.siglaPartido}
          </p>

          <p className="mt-2">
            <span className="font-bold">Data Nascimento:</span> {deputado.dataNascimento}
          </p>
          {/* <p className="mt-2">
            <span className="font-bold">CPF:</span> {deputado.cpf}
          </p> */}

          <p className="mt-2">
            <span className="font-bold">Naturalidade:</span> {deputado.municipioNascimento}
          </p>
          {/* <p className="mt-2">
            <span className="font-bold">UF nascimento:</span> {deputado.ufNascimento}
          </p> */}

          <p className="mt-2">
            <span className="font-bold">Escolaridade:</span> {deputado.escolaridade}
          </p>

          {/* DADOS PARTIDO */}

          <p className="mt-2">
            <span className="font-bold">UF:</span> {deputado.ultimoStatus.siglaUf}
          </p>

          <p className="mt-2">
            <span className="font-bold">ID legislatura:</span> {deputado.ultimoStatus.idLegislatura}
          </p>

          <p className="mt-2">
            <span className="font-bold">Condição eleitoral:</span> {deputado.ultimoStatus.condicaoEleitoral}
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto"></div>
    </div>
  );
}