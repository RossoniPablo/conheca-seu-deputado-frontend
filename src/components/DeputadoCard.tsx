
import { motion } from 'framer-motion';
import type { DeputadoResumo } from "../types/deputado";
import { Link } from 'react-router-dom';

type DeputadoCardProps = {
  deputado: DeputadoResumo;
  index?: number;
};

export const DeputadoCard = ({ index = 0, deputado }: DeputadoCardProps) => {
  if (!deputado) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link to={`/deputado/${deputado.id}`}>
        <div className="relative overflow-hidden aspect-[2/3] rounded-2xl cursor-pointer hover:opacity-60 hover:transition" >
          <img
            src={deputado.urlFoto}
            alt={deputado.nome}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 font-medium text-white">
            {deputado.siglaPartido}
          </div>

          <div className="absolute bottom-3 left-3">
            <h3 className="text-white text-xl font-bold drop-shadow-lg">{deputado.nome}</h3>
          </div>
        </div >
      </Link>
    </motion.div >
  );
};