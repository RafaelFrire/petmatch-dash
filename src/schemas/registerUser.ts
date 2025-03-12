import * as yup from "yup";

const UserSchema = yup.object().shape({
  name: yup.string().required("O primeiro nome é obrigatório"),
  lastname: yup.string().required("O sobrenome é obrigatório"),
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não coincidem")
    .required("A confirmação de senha é obrigatória"),
  phone: yup
    .string()
    .min(10, "Número de telefone inválido")
    .required("O telefone é obrigatório"),
  zipcode: yup.string().min(8, "CEP inválido").required("O CEP é obrigatório"),
  address: yup.string().required("O endereço é obrigatório"),
  state: yup.string().required("O estado é obrigatório"),
  city: yup.string().required("A CCidade é obrigatória"),
  document: yup
    .string()
    .required("O documento de identificação é obrigatório"),
  files: yup
    .mixed<File>()
    .test("fileType", "O arquivo precisa ser um documento válido", (value) => {
      return value instanceof File;
    })
    .required("Anexar documento."),
  termsPrivacity: yup.boolean().oneOf([true], "Você deve aceitar os termos").required("Você deve aceitar os termos"),
  termsAdopter: yup.boolean().oneOf([true], "Você deve aceitar os termos").required("Você deve aceitar os termos"),
});

export default UserSchema;
