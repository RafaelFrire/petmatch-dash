import * as yup from "yup";

const PetSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  species: yup.string().required("Espécie é obrigatória"),
  breed: yup.string().required("Raça é obrigatória"),
  color: yup.string().required("Cor é obrigatória"),
  size: yup.string().required("Tamanho é obrigatório"),
  health: yup.string().required("Informação de saúde é obrigatória"),
  temperament: yup.string().required("Temperamento é obrigatório"),
  birthdate: yup.date().required("Data de nascimento é obrigatória"),
  history: yup.string().required("Histórico é obrigatório"),
  files: yup
    .mixed<File>()
    .test("fileType", "O arquivo precisa ser um documento válido", (value) => {
      return value instanceof File;
    })
    .required("Anexar documento."),
});

export default PetSchema;
