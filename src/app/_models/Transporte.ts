export class Transporte {
    constructor(
        public vehiculoId: number = null,
        public sucursalSalidaId: number = null,
        public sucursalLlegadaId: number = null,
        public choferId: number = null,
        public auxiliarId: number = null,
        public TipoTransporte: string = ''
    ) {}
}

// export interface Transporte {
//     id: number;
//     activo: boolean;
//     fechaSalida: Date;
//     fechalLegada: Date;
//     sucursalSalidaId: number;
//     sucursalSalidaNombre: string;
//     sucursalLlegadaId: number;
//     sucursalLlegadaNombre: string;
//     choferId: number;
//     choferNombre: string;
//     auxiliarId: number;
//     auxiliarNombre: string;
//     vehiculoId: number;
//     placa: string;
//     carga: string;
//     volumetria: string;
// }
