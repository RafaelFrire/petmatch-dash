import * as yup from "yup";

const eventSchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  categorie: yup.string().required("Campo obrigatório"),
  date: yup.string().required("Campo obrigatório"),
  time: yup.string().required("Campo obrigatório"),
  location: yup.string().required("Campo obrigatório"),
  address: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  additionalInfo: yup.string().optional(),
  files: (yup.mixed<File>()).optional(),
});

export default eventSchema;