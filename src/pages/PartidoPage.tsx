import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react";
import { DeputadosContext } from "../contexts/DeputadosContext";
import { DeputadoCard } from "../components/DeputadoCard";

export const PartidoPage = () => {
  const { siglaPartido } = useParams();
  const { deputados } = useContext(DeputadosContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deputadosFiltrados = deputados.filter(
    (d) => d.siglaPartido === siglaPartido
  );


  return (
    <div className="min-h-screen max-w-7xl mx-auto  py-30">
      <h2 className="text-white text-3xl mb-6">
        Partido: <span className="font-bold">{siglaPartido}</span>
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {deputadosFiltrados.map((dep) => (

          <DeputadoCard key={dep.id} deputado={dep} nome={""} idDep={0} siglaPartido={""} />
        ))}
      </div>
    </div>
  );
};