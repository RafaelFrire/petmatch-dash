

export const rgMask = (v: string) => {
    v = v.replace(/\D/g, ""); // Remove tudo que não for número
    v = v.replace(/^(\d{2})(\d)/, "$1.$2"); // Insere o primeiro ponto
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3"); // Insere o segundo ponto
    v = v.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4"); // Insere o hífen
    return v;
};

export const cepMask = (v: string) => {
    v = v.replace(/\D/g, ""); // Remove tudo que não for número
    v = v.replace(/^(\d{5})(\d)/, "$1-$2"); // Insere o hífen após os 5 primeiros dígitos
    return v;
};

export const phoneMask = (v: string) => {
    v = v.replace(/\D/g, ""); // Remove tudo que não for número
    v = v.replace(/^(\d{2})(\d)/, "($1) $2"); // Adiciona parênteses no DDD
    v = v.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o hífen no número
    return v;
};

