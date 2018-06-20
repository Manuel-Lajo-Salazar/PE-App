export interface Transporte {
    id: number;
    activo: boolean;
    fechaSalida: Date;
    fechalLegada: Date;
    sucursalSalidaId: number;
    sucursalSalidaNombre: string;
    sucursalLlegadaId: number;
    sucursalLlegadaNombre: string;
    choferId: number;
    choferNombre: string;
    auxiliarId: number;
    auxiliarNombre: string;
    vehiculoId: number;
    placa: string;
    carga: string;
    volumetria: string;
}
