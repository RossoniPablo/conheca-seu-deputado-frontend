import { useParams } from "react-router-dom";
import { DeputadoPerfil } from "../components/deputado/DeputadoPerfil";

export const DeputadoPage = () => {
  const { id } = useParams()

  if (!id) return null
  return (
    <div>
      <DeputadoPerfil id={id} />
    </div>
  )
};