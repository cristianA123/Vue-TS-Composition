export interface EmployedResponse {
    status: string;
    data:   Datum[];
    total:  number;
}

export interface Datum {
    id:           number;
    nombre:       string;
    correo:       string;
    cargo:        string;
    departamento: string;
    oficina:      Oficina;
    estadoCuenta: EstadoCuenta;
}

export enum EstadoCuenta {
    Activada = "Activada",
    Desactivada = "Desactivada",
}

export enum Oficina {
    CulqiOffice = "Culqi Office",
}