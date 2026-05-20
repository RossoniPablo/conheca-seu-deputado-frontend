export type DeputadoBase = {
  id: number;
  nome: string;
  siglaPartido: string;
  siglaUf: string;
  urlFoto: string;
};

export type DeputadoResumo = DeputadoBase;

export type DeputadoDetalhe = DeputadoBase & {
  situacao: string;
};
