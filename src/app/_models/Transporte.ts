export class Transporte {
    constructor(
        public id: number = null,
        public activo: boolean = false,
        public fechaSalida: Date = null,
        public fechaLlegada: Date = null,
        public sucursalSalidaId: number = null,
        public sucursalSalidaNombre: string = null,
        public sucursalLlegadaId: number = null,
        public sucursalLlegadaNombre: string = null,
        public choferId: number = null,
        public choferNombre: string = null,
        public auxiliarId: number = null,
        public auxiliarNombre: string = null,
        public vehiculoId: number = null,
        public placa: string = null,
        public carga: string = null,
        public volumetria: string = null,
        public tipoTransporte: number = null
    ) {}
}

// export class Transporte {
//     constructor(
//         public vehiculoId: number = null,
//         public sucursalSalidaId: number = null,
//         public sucursalLlegadaId: number = null,
//         public choferId: number = null,
//         public auxiliarId: number = null,
//         public TipoTransporte: number = null
//     ) {}
// }

// export interface Transporte {
//     id: number;
//     activo: boolean;
//     fechaSalida: Date;
//     fechaLlegada: Date;
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
