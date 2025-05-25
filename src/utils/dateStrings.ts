export const formatDateDayMonthYear = (date: Date): string => {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};


export const formatDateLocal = (date:Date) =>{
    return new Date(date).toLocaleDateString()
  
  }

export default function calcAge(date: Date): string {
  const today = new Date();
  const birthDate = new Date(date);

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  const days = today.getDate() - birthDate.getDate();

  // Ajusta meses e anos se o dia atual ainda não atingiu o dia do aniversário
  if (days < 0) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Menor que 1 ano
  if (years < 1) {
    return `${months} ${months === 1 ? "mês" : "meses"}`;
  }

  // 1 ano
  if (years === 1) {
    return `1 ano${
      months > 0 ? ` e ${months} ${months === 1 ? "mês" : "meses"}` : ""
    }`;
  }

  // 2+ anos
  return `${years} anos${
    months > 0 ? ` e ${months} ${months === 1 ? "mês" : "meses"}` : ""
  }`;
}