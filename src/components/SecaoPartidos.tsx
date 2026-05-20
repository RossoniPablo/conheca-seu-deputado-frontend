import type { DeputadoResumo } from "../types/deputado";

import { DeputadoCard } from "./DeputadoCard";
import { Link } from "react-router-dom";

type SecaoPartidoProps = {
  titulo: string;
  deputados: DeputadoResumo[];
  siglaPartido: string
  limit?: number
}

export const SecaoPartido = ({ titulo, deputados, siglaPartido, limit }: SecaoPartidoProps) => {
  return (
    <section className="mb-30">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-2xl font-bold">{titulo}</h2>

        <Link
          to={`/partido/${siglaPartido}`}
          className="text-blue-400 hover:text-blue-300 cursor-pointer">
          Ver todos
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {deputados.slice(0, limit ?? 8).map((dep, index) => (
          <DeputadoCard key={dep.id} deputado={dep} index={index} />
        ))}
      </div>
    </section>
  );
};