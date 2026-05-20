import { useContext, useMemo, } from "react";
import { SecaoPartido } from "../components/SecaoPartidos";
import { DeputadosContext } from "../contexts/DeputadosContext";
import { ScrollTopButton } from "../components/ScrollToTopButton";


export const HomePage = () => {
  const { deputados, loading, error } = useContext(DeputadosContext);

  // proteção caso ainda não tenha dados
  const partidosOrdenados = useMemo(() => {
    const map = (deputados ?? []).reduce((acc: Record<string, any[]>, dep) => {
      if (!dep?.siglaPartido) return acc;

      if (!acc[dep.siglaPartido]) {
        acc[dep.siglaPartido] = [];
      }

      acc[dep.siglaPartido].push(dep);
      return acc;
    }, {});

    return Object.entries(map)
      .map(([siglaPartido, listaDeputados]) => ({
        siglaPartido,
        deputados: listaDeputados,
        quantidade: listaDeputados.length,
      }))
      .sort((a, b) => b.quantidade - a.quantidade);
  }, [deputados]);

  // loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Carregando deputados...
      </div>
    );
  }

  // error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (

    <div className="min-h-screen max-w-7xl mx-auto px-4">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center gap-5">
        <h1 className="text-7xl font-medium text-slate-100">
          Conheça seu deputado
        </h1>
        <h3 className="text-5xl text-slate-100">
          De forma fácil e simples
        </h3>
      </section>

      {/* PARTIDOS */}
      {partidosOrdenados.map((partido) => (
        <SecaoPartido
          key={partido.siglaPartido}
          titulo={`${partido.siglaPartido} (${partido.quantidade})`}
          deputados={partido.deputados}
          siglaPartido={partido.siglaPartido}
        />
      ))}

      <ScrollTopButton />
    </div>
  );
};