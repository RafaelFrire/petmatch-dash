import * as yup from 'yup';

const AdoptionSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  lastname: yup.string().required("Sobrenome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  zipcode: yup.string().required("CEP é obrigatório"),
  address: yup.string().required("Endereço é obrigatório"),
  state: yup.string().required("Estado é obrigatório"),
  city: yup.string().required("Cidade é obrigatória"),
  document: yup.string().required("Documento é obrigatório"),
  maritalStatus: yup.string().oneOf(["SINGLE", "MARRIED", "DIVORCED", "WIDOWED"]).required("Estado civil é obrigatório"),
  residenceType: yup.string().oneOf(["HOUSE", "APARTMENT", "OTHER"]).required("Tipo de residência é obrigatório"),
  hasOtherPets: yup.boolean().required("Campo obrigatório"),
  reasonForAdoption: yup.string().required("Campo obrigatório"),
  files: yup.mixed().required("Comprovante de residência é obrigatório"),
  termsPrivacity: yup.boolean().oneOf([true], "Você deve aceitar a Política de Privacidade"),
  termsAdopter: yup.boolean().oneOf([true], "Você deve aceitar os Termos de Adoção"),
});
export default AdoptionSchema;
