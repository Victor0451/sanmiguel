
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type adherentPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "adherent"
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    SEXO: string | null
    ALTA: Date | null
    BAJA: Date | null
    VIGENCIA: Date | null
    PARENT: number | null
    OBRA_SOC: number | null
    SEGURO: number | null
    PRODUCTOR: number | null
    PLAN: string | null
    ORDEN: number | null
    EDAD: number | null
    ESTADO: boolean | null
    idadherent: number
  }, ExtArgs["result"]["adherent"]>
  composites: {}
}

/**
 * Model adherent
 * 
 */
export type adherent = runtime.Types.DefaultSelection<adherentPayload>
export type cuo_fijaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "cuo_fija"
  objects: {}
  scalars: $Extensions.GetResult<{
    CONTRATO: number | null
    IMPORTE: number | null
    CUO_ANT: number | null
    DESDE: Date | null
    VENCIM: Date | null
    OPERADOR: string | null
    idcuota: number
  }, ExtArgs["result"]["cuo_fija"]>
  composites: {}
}

/**
 * Model cuo_fija
 * 
 */
export type cuo_fija = runtime.Types.DefaultSelection<cuo_fijaPayload>
export type gruposPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "grupos"
  objects: {}
  scalars: $Extensions.GetResult<{
    CODIGO: number | null
    DESCRIP: string | null
    IVA: string | null
    CUIT: string | null
    DOMICILIO: string | null
    ORDEN: string | null
    LIN_ALTA: string | null
    LIN_BAJA: string | null
    TOTALIZA: number | null
    PAGINA: number | null
    TITULO1: string | null
    TITULO2: string | null
    DIA: number | null
    MES: number | null
    ANO: number | null
    SUCURSAL: string | null
    MARCA: string | null
    CONVENIO: string | null
    id: number
  }, ExtArgs["result"]["grupos"]>
  composites: {}
}

/**
 * Model grupos
 * 
 */
export type grupos = runtime.Types.DefaultSelection<gruposPayload>
export type historiaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "historia"
  objects: {}
  scalars: $Extensions.GetResult<{
    CONTRATO: number | null
    OPERADOR: string | null
    ACCION: string | null
    idhistoria: number
    FECHA: string | null
  }, ExtArgs["result"]["historia"]>
  composites: {}
}

/**
 * Model historia
 * 
 */
export type historia = runtime.Types.DefaultSelection<historiaPayload>
export type localidadPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "localidad"
  objects: {}
  scalars: $Extensions.GetResult<{
    CODIGO: number | null
    DETALLE: string | null
    idlocalidad: number
  }, ExtArgs["result"]["localidad"]>
  composites: {}
}

/**
 * Model localidad
 * 
 */
export type localidad = runtime.Types.DefaultSelection<localidadPayload>
export type maestroPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "maestro"
  objects: {}
  scalars: $Extensions.GetResult<{
    idmaestro: number
    ESTADO: boolean | null
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    CALLE: string | null
    LOCALIDAD: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    DOMI_COBR: string | null
    DOM_LAB: string | null
    ZONA: number | null
    ALTA: Date | null
    VIGENCIA: Date | null
    GRUPO: number | null
    SEXO: string | null
    ADHERENTES: number | null
    OPERADOR: string | null
    OBRA_SOC: number | null
    PRODUCTOR: number | null
    PLAN: string | null
    EMPRESA: string | null
    EDAD: number | null
    COD_POST: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD_PROM: number | null
    MAIL: string | null
  }, ExtArgs["result"]["maestro"]>
  composites: {}
}

/**
 * Model maestro
 * 
 */
export type maestro = runtime.Types.DefaultSelection<maestroPayload>
export type obra_socPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "obra_soc"
  objects: {}
  scalars: $Extensions.GetResult<{
    CODIGO: number | null
    NOMBRE: string | null
    DETALLE: string | null
    DOMICILIO: string | null
    FECHA_SUSP: Date | null
    OPERADOR: number | null
    ACTUALIZA: string | null
    SUSPENDIDO: number | null
    id: number
  }, ExtArgs["result"]["obra_soc"]>
  composites: {}
}

/**
 * Model obra_soc
 * 
 */
export type obra_soc = runtime.Types.DefaultSelection<obra_socPayload>
export type bajasPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "bajas"
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    CALLE: string | null
    LOCALIDAD: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    DOMI_COBR: string | null
    DOM_LAB: string | null
    ZONA: number | null
    ALTA: Date | null
    VIGENCIA: Date | null
    GRUPO: number | null
    SEXO: string | null
    ADHERENTES: number | null
    OPERADOR: number | null
    OBRA_SOC: number | null
    PRODUCTOR: number | null
    PLAN: string | null
    SUB_PLAN: string | null
    EMPRESA: string | null
    EDAD: number | null
    COD_POST: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD_PROM: number | null
    MAIL: string | null
    idbaja: number
    BAJA: Date | null
  }, ExtArgs["result"]["bajas"]>
  composites: {}
}

/**
 * Model bajas
 * 
 */
export type bajas = runtime.Types.DefaultSelection<bajasPayload>
export type gestioncasoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "gestioncaso"
  objects: {}
  scalars: $Extensions.GetResult<{
    idgestion: number
    idcaso: number | null
    contrato: number | null
    operador: string | null
    accion: string | null
    observacion: string | null
    fechaaccion: string | null
    nuevaaccion: string | null
    fechanuevaaccion: string | null
    realizado: boolean | null
    observacion_nuevaaccion: string | null
  }, ExtArgs["result"]["gestioncaso"]>
  composites: {}
}

/**
 * Model gestioncaso
 * 
 */
export type gestioncaso = runtime.Types.DefaultSelection<gestioncasoPayload>
export type pagosPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "pagos"
  objects: {}
  scalars: $Extensions.GetResult<{
    CONTRATO: number | null
    NRO_RECIBO: number | null
    SERIE: number | null
    DIA_REN: Date | null
    DIA_CAR: Date | null
    DIA_EMI: Date | null
    DIA_PAG: Date | null
    HORA_CAR: string | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    MAN_COM: string | null
    MOVIM: string | null
    OPERADOR: string | null
    SUCURSAL: string | null
    PUESTO: number | null
    ZONA: number | null
    EMPRESA: string | null
    DNI: number | null
    RENDIDO: number | null
    FECHA_CAJA: string | null
    id: number
    MED_PAG: string | null
  }, ExtArgs["result"]["pagos"]>
  composites: {}
}

/**
 * Model pagos
 * 
 */
export type pagos = runtime.Types.DefaultSelection<pagosPayload>
export type pago_bcoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "pago_bco"
  objects: {}
  scalars: $Extensions.GetResult<{
    NRO_DOC: number | null
    CONTRATO: number | null
    COD_SUC: string | null
    NRO_CTA: string | null
    FEC_ACR: string | null
    IMPORTE: number | null
    MARCA: string | null
    MES: number | null
    ANO: number | null
    DIA_PAGO: Date | null
    SUCURSAL: string | null
    SEGURO: number | null
    id: number
  }, ExtArgs["result"]["pago_bco"]>
  composites: {}
}

/**
 * Model pago_bco
 * 
 */
export type pago_bco = runtime.Types.DefaultSelection<pago_bcoPayload>
export type cajaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "caja"
  objects: {}
  scalars: $Extensions.GetResult<{
    SUCURSAL: string | null
    PUESTO: number | null
    CODIGO: number | null
    MOVIM: string | null
    CUENTA: string | null
    CUENTA_DESC: string | null
    IMPORTE: number | null
    TIPO: string | null
    SERIE: number | null
    NUMERO: number | null
    CUIT: string | null
    DETALLE: string | null
    FECHA: string | null
    FEC_COMP: string | null
    HORA: string | null
    OPERADOR: string | null
    idmovim: number
  }, ExtArgs["result"]["caja"]>
  composites: {}
}

/**
 * Model caja
 * 
 */
export type caja = runtime.Types.DefaultSelection<cajaPayload>
export type subctaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "subcta"
  objects: {}
  scalars: $Extensions.GetResult<{
    CODI: number | null
    DESC: string | null
    CUEN: number | null
    MOVIM: string | null
    id: number
  }, ExtArgs["result"]["subcta"]>
  composites: {}
}

/**
 * Model subcta
 * 
 */
export type subcta = runtime.Types.DefaultSelection<subctaPayload>
export type maestro_cuentasPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "maestro_cuentas"
  objects: {}
  scalars: $Extensions.GetResult<{
    idcuenta: number
    contrato: number | null
    dni: number | null
    grupo: number | null
    cuenta: string | null
    observacion: string | null
  }, ExtArgs["result"]["maestro_cuentas"]>
  composites: {}
}

/**
 * Model maestro_cuentas
 * 
 */
export type maestro_cuentas = runtime.Types.DefaultSelection<maestro_cuentasPayload>
export type operadorPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "operador"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    nombre: string
    apellido: string
    usuario: string
    contrasena: string
    createdAt: Date
    updatedAt: Date
    perfil: number | null
    estado: boolean | null
    codigo: number | null
    medicos: boolean | null
    sucursal: string | null
    prestamos: boolean | null
    ordenpago: boolean | null
    clubwerchow: boolean | null
    ventas: boolean | null
    administracion: boolean | null
    campanas: boolean | null
    socios: boolean | null
    sepelio: boolean | null
    gestion: boolean | null
    contabilidad: boolean | null
    cobranza: boolean | null
  }, ExtArgs["result"]["operador"]>
  composites: {}
}

/**
 * Model operador
 * 
 */
export type operador = runtime.Types.DefaultSelection<operadorPayload>
export type subcta_oldPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "subcta_old"
  objects: {}
  scalars: $Extensions.GetResult<{
    CODI: number | null
    DESC: string | null
    CUEN: number | null
    MOVIM: string | null
    id: number
  }, ExtArgs["result"]["subcta_old"]>
  composites: {}
}

/**
 * Model subcta_old
 * 
 */
export type subcta_old = runtime.Types.DefaultSelection<subcta_oldPayload>
export type soPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "so"
  objects: {}
  scalars: $Extensions.GetResult<{
    CONTRATO: string | null
    SOCIO: string | null
    ALTA: string | null
    GRUPO: string | null
    ADHERENTES: string | null
    PLAN: string | null
    ZONA: string | null
    EDAD: string | null
    CUOTA: string | null
    EMPRESA: string | null
    SUCURSAL: string | null
    CUOTAS: string | null
    PAGOS: string | null
    DEUDA: string | null
    id: number
  }, ExtArgs["result"]["so"]>
  composites: {}
}

/**
 * Model so
 * 
 */
export type so = runtime.Types.DefaultSelection<soPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Adherents
 * const adherents = await prisma.adherent.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Adherents
   * const adherents = await prisma.adherent.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.adherent`: Exposes CRUD operations for the **adherent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adherents
    * const adherents = await prisma.adherent.findMany()
    * ```
    */
  get adherent(): Prisma.adherentDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.cuo_fija`: Exposes CRUD operations for the **cuo_fija** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cuo_fijas
    * const cuo_fijas = await prisma.cuo_fija.findMany()
    * ```
    */
  get cuo_fija(): Prisma.cuo_fijaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.grupos`: Exposes CRUD operations for the **grupos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grupos
    * const grupos = await prisma.grupos.findMany()
    * ```
    */
  get grupos(): Prisma.gruposDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.historia`: Exposes CRUD operations for the **historia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historias
    * const historias = await prisma.historia.findMany()
    * ```
    */
  get historia(): Prisma.historiaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.localidad`: Exposes CRUD operations for the **localidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localidads
    * const localidads = await prisma.localidad.findMany()
    * ```
    */
  get localidad(): Prisma.localidadDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.maestro`: Exposes CRUD operations for the **maestro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maestros
    * const maestros = await prisma.maestro.findMany()
    * ```
    */
  get maestro(): Prisma.maestroDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.obra_soc`: Exposes CRUD operations for the **obra_soc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Obra_socs
    * const obra_socs = await prisma.obra_soc.findMany()
    * ```
    */
  get obra_soc(): Prisma.obra_socDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.bajas`: Exposes CRUD operations for the **bajas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bajas
    * const bajas = await prisma.bajas.findMany()
    * ```
    */
  get bajas(): Prisma.bajasDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.gestioncaso`: Exposes CRUD operations for the **gestioncaso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gestioncasos
    * const gestioncasos = await prisma.gestioncaso.findMany()
    * ```
    */
  get gestioncaso(): Prisma.gestioncasoDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.pagos`: Exposes CRUD operations for the **pagos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pagos.findMany()
    * ```
    */
  get pagos(): Prisma.pagosDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.pago_bco`: Exposes CRUD operations for the **pago_bco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pago_bcos
    * const pago_bcos = await prisma.pago_bco.findMany()
    * ```
    */
  get pago_bco(): Prisma.pago_bcoDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.caja`: Exposes CRUD operations for the **caja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cajas
    * const cajas = await prisma.caja.findMany()
    * ```
    */
  get caja(): Prisma.cajaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.subcta`: Exposes CRUD operations for the **subcta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subctas
    * const subctas = await prisma.subcta.findMany()
    * ```
    */
  get subcta(): Prisma.subctaDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.maestro_cuentas`: Exposes CRUD operations for the **maestro_cuentas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maestro_cuentas
    * const maestro_cuentas = await prisma.maestro_cuentas.findMany()
    * ```
    */
  get maestro_cuentas(): Prisma.maestro_cuentasDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.operador`: Exposes CRUD operations for the **operador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operadors
    * const operadors = await prisma.operador.findMany()
    * ```
    */
  get operador(): Prisma.operadorDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.subcta_old`: Exposes CRUD operations for the **subcta_old** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subcta_olds
    * const subcta_olds = await prisma.subcta_old.findMany()
    * ```
    */
  get subcta_old(): Prisma.subcta_oldDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.so`: Exposes CRUD operations for the **so** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sos
    * const sos = await prisma.so.findMany()
    * ```
    */
  get so(): Prisma.soDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.17.0-integration-test-dataproxy.5
   * Query Engine version: 27eb2449f178cd9fe1a4b892d732cc4795f75085
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    adherent: 'adherent',
    cuo_fija: 'cuo_fija',
    grupos: 'grupos',
    historia: 'historia',
    localidad: 'localidad',
    maestro: 'maestro',
    obra_soc: 'obra_soc',
    bajas: 'bajas',
    gestioncaso: 'gestioncaso',
    pagos: 'pagos',
    pago_bco: 'pago_bco',
    caja: 'caja',
    subcta: 'subcta',
    maestro_cuentas: 'maestro_cuentas',
    operador: 'operador',
    subcta_old: 'subcta_old',
    so: 'so'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'adherent' | 'cuo_fija' | 'grupos' | 'historia' | 'localidad' | 'maestro' | 'obra_soc' | 'bajas' | 'gestioncaso' | 'pagos' | 'pago_bco' | 'caja' | 'subcta' | 'maestro_cuentas' | 'operador' | 'subcta_old' | 'so'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      adherent: {
        payload: adherentPayload<ExtArgs>
        fields: Prisma.adherentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adherentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adherentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherentPayload>
          }
          findFirst: {
            args: Prisma.adherentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adherentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherentPayload>
          }
          findMany: {
            args: Prisma.adherentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherentPayload>[]
          }
          create: {
            args: Prisma.adherentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherentPayload>
          }
          createMany: {
            args: Prisma.adherentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.adherentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherentPayload>
          }
          update: {
            args: Prisma.adherentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherentPayload>
          }
          deleteMany: {
            args: Prisma.adherentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.adherentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.adherentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<adherentPayload>
          }
          aggregate: {
            args: Prisma.AdherentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdherent>
          }
          groupBy: {
            args: Prisma.adherentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdherentGroupByOutputType>[]
          }
          count: {
            args: Prisma.adherentCountArgs<ExtArgs>,
            result: $Utils.Optional<AdherentCountAggregateOutputType> | number
          }
        }
      }
      cuo_fija: {
        payload: cuo_fijaPayload<ExtArgs>
        fields: Prisma.cuo_fijaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cuo_fijaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cuo_fijaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cuo_fijaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cuo_fijaPayload>
          }
          findFirst: {
            args: Prisma.cuo_fijaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cuo_fijaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cuo_fijaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cuo_fijaPayload>
          }
          findMany: {
            args: Prisma.cuo_fijaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cuo_fijaPayload>[]
          }
          create: {
            args: Prisma.cuo_fijaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cuo_fijaPayload>
          }
          createMany: {
            args: Prisma.cuo_fijaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cuo_fijaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cuo_fijaPayload>
          }
          update: {
            args: Prisma.cuo_fijaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cuo_fijaPayload>
          }
          deleteMany: {
            args: Prisma.cuo_fijaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cuo_fijaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cuo_fijaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cuo_fijaPayload>
          }
          aggregate: {
            args: Prisma.Cuo_fijaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCuo_fija>
          }
          groupBy: {
            args: Prisma.cuo_fijaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Cuo_fijaGroupByOutputType>[]
          }
          count: {
            args: Prisma.cuo_fijaCountArgs<ExtArgs>,
            result: $Utils.Optional<Cuo_fijaCountAggregateOutputType> | number
          }
        }
      }
      grupos: {
        payload: gruposPayload<ExtArgs>
        fields: Prisma.gruposFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gruposFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gruposPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gruposFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gruposPayload>
          }
          findFirst: {
            args: Prisma.gruposFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gruposPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gruposFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gruposPayload>
          }
          findMany: {
            args: Prisma.gruposFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gruposPayload>[]
          }
          create: {
            args: Prisma.gruposCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gruposPayload>
          }
          createMany: {
            args: Prisma.gruposCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.gruposDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gruposPayload>
          }
          update: {
            args: Prisma.gruposUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gruposPayload>
          }
          deleteMany: {
            args: Prisma.gruposDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.gruposUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.gruposUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gruposPayload>
          }
          aggregate: {
            args: Prisma.GruposAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGrupos>
          }
          groupBy: {
            args: Prisma.gruposGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GruposGroupByOutputType>[]
          }
          count: {
            args: Prisma.gruposCountArgs<ExtArgs>,
            result: $Utils.Optional<GruposCountAggregateOutputType> | number
          }
        }
      }
      historia: {
        payload: historiaPayload<ExtArgs>
        fields: Prisma.historiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historiaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historiaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historiaPayload>
          }
          findFirst: {
            args: Prisma.historiaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historiaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historiaPayload>
          }
          findMany: {
            args: Prisma.historiaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historiaPayload>[]
          }
          create: {
            args: Prisma.historiaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historiaPayload>
          }
          createMany: {
            args: Prisma.historiaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.historiaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historiaPayload>
          }
          update: {
            args: Prisma.historiaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historiaPayload>
          }
          deleteMany: {
            args: Prisma.historiaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.historiaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.historiaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<historiaPayload>
          }
          aggregate: {
            args: Prisma.HistoriaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHistoria>
          }
          groupBy: {
            args: Prisma.historiaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HistoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.historiaCountArgs<ExtArgs>,
            result: $Utils.Optional<HistoriaCountAggregateOutputType> | number
          }
        }
      }
      localidad: {
        payload: localidadPayload<ExtArgs>
        fields: Prisma.localidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.localidadFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<localidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.localidadFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<localidadPayload>
          }
          findFirst: {
            args: Prisma.localidadFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<localidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.localidadFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<localidadPayload>
          }
          findMany: {
            args: Prisma.localidadFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<localidadPayload>[]
          }
          create: {
            args: Prisma.localidadCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<localidadPayload>
          }
          createMany: {
            args: Prisma.localidadCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.localidadDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<localidadPayload>
          }
          update: {
            args: Prisma.localidadUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<localidadPayload>
          }
          deleteMany: {
            args: Prisma.localidadDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.localidadUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.localidadUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<localidadPayload>
          }
          aggregate: {
            args: Prisma.LocalidadAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLocalidad>
          }
          groupBy: {
            args: Prisma.localidadGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LocalidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.localidadCountArgs<ExtArgs>,
            result: $Utils.Optional<LocalidadCountAggregateOutputType> | number
          }
        }
      }
      maestro: {
        payload: maestroPayload<ExtArgs>
        fields: Prisma.maestroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.maestroFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.maestroFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestroPayload>
          }
          findFirst: {
            args: Prisma.maestroFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.maestroFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestroPayload>
          }
          findMany: {
            args: Prisma.maestroFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestroPayload>[]
          }
          create: {
            args: Prisma.maestroCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestroPayload>
          }
          createMany: {
            args: Prisma.maestroCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.maestroDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestroPayload>
          }
          update: {
            args: Prisma.maestroUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestroPayload>
          }
          deleteMany: {
            args: Prisma.maestroDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.maestroUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.maestroUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestroPayload>
          }
          aggregate: {
            args: Prisma.MaestroAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMaestro>
          }
          groupBy: {
            args: Prisma.maestroGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MaestroGroupByOutputType>[]
          }
          count: {
            args: Prisma.maestroCountArgs<ExtArgs>,
            result: $Utils.Optional<MaestroCountAggregateOutputType> | number
          }
        }
      }
      obra_soc: {
        payload: obra_socPayload<ExtArgs>
        fields: Prisma.obra_socFieldRefs
        operations: {
          findUnique: {
            args: Prisma.obra_socFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<obra_socPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.obra_socFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<obra_socPayload>
          }
          findFirst: {
            args: Prisma.obra_socFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<obra_socPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.obra_socFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<obra_socPayload>
          }
          findMany: {
            args: Prisma.obra_socFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<obra_socPayload>[]
          }
          create: {
            args: Prisma.obra_socCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<obra_socPayload>
          }
          createMany: {
            args: Prisma.obra_socCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.obra_socDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<obra_socPayload>
          }
          update: {
            args: Prisma.obra_socUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<obra_socPayload>
          }
          deleteMany: {
            args: Prisma.obra_socDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.obra_socUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.obra_socUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<obra_socPayload>
          }
          aggregate: {
            args: Prisma.Obra_socAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateObra_soc>
          }
          groupBy: {
            args: Prisma.obra_socGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Obra_socGroupByOutputType>[]
          }
          count: {
            args: Prisma.obra_socCountArgs<ExtArgs>,
            result: $Utils.Optional<Obra_socCountAggregateOutputType> | number
          }
        }
      }
      bajas: {
        payload: bajasPayload<ExtArgs>
        fields: Prisma.bajasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bajasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bajasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bajasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bajasPayload>
          }
          findFirst: {
            args: Prisma.bajasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bajasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bajasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bajasPayload>
          }
          findMany: {
            args: Prisma.bajasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bajasPayload>[]
          }
          create: {
            args: Prisma.bajasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bajasPayload>
          }
          createMany: {
            args: Prisma.bajasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.bajasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bajasPayload>
          }
          update: {
            args: Prisma.bajasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bajasPayload>
          }
          deleteMany: {
            args: Prisma.bajasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.bajasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.bajasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<bajasPayload>
          }
          aggregate: {
            args: Prisma.BajasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBajas>
          }
          groupBy: {
            args: Prisma.bajasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BajasGroupByOutputType>[]
          }
          count: {
            args: Prisma.bajasCountArgs<ExtArgs>,
            result: $Utils.Optional<BajasCountAggregateOutputType> | number
          }
        }
      }
      gestioncaso: {
        payload: gestioncasoPayload<ExtArgs>
        fields: Prisma.gestioncasoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gestioncasoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gestioncasoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gestioncasoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gestioncasoPayload>
          }
          findFirst: {
            args: Prisma.gestioncasoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gestioncasoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gestioncasoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gestioncasoPayload>
          }
          findMany: {
            args: Prisma.gestioncasoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gestioncasoPayload>[]
          }
          create: {
            args: Prisma.gestioncasoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gestioncasoPayload>
          }
          createMany: {
            args: Prisma.gestioncasoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.gestioncasoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gestioncasoPayload>
          }
          update: {
            args: Prisma.gestioncasoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gestioncasoPayload>
          }
          deleteMany: {
            args: Prisma.gestioncasoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.gestioncasoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.gestioncasoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<gestioncasoPayload>
          }
          aggregate: {
            args: Prisma.GestioncasoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGestioncaso>
          }
          groupBy: {
            args: Prisma.gestioncasoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GestioncasoGroupByOutputType>[]
          }
          count: {
            args: Prisma.gestioncasoCountArgs<ExtArgs>,
            result: $Utils.Optional<GestioncasoCountAggregateOutputType> | number
          }
        }
      }
      pagos: {
        payload: pagosPayload<ExtArgs>
        fields: Prisma.pagosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pagosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pagosPayload>
          }
          findFirst: {
            args: Prisma.pagosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pagosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pagosPayload>
          }
          findMany: {
            args: Prisma.pagosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pagosPayload>[]
          }
          create: {
            args: Prisma.pagosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pagosPayload>
          }
          createMany: {
            args: Prisma.pagosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.pagosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pagosPayload>
          }
          update: {
            args: Prisma.pagosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pagosPayload>
          }
          deleteMany: {
            args: Prisma.pagosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.pagosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.pagosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pagosPayload>
          }
          aggregate: {
            args: Prisma.PagosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePagos>
          }
          groupBy: {
            args: Prisma.pagosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PagosGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagosCountArgs<ExtArgs>,
            result: $Utils.Optional<PagosCountAggregateOutputType> | number
          }
        }
      }
      pago_bco: {
        payload: pago_bcoPayload<ExtArgs>
        fields: Prisma.pago_bcoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pago_bcoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pago_bcoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pago_bcoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pago_bcoPayload>
          }
          findFirst: {
            args: Prisma.pago_bcoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pago_bcoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pago_bcoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pago_bcoPayload>
          }
          findMany: {
            args: Prisma.pago_bcoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pago_bcoPayload>[]
          }
          create: {
            args: Prisma.pago_bcoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pago_bcoPayload>
          }
          createMany: {
            args: Prisma.pago_bcoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.pago_bcoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pago_bcoPayload>
          }
          update: {
            args: Prisma.pago_bcoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pago_bcoPayload>
          }
          deleteMany: {
            args: Prisma.pago_bcoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.pago_bcoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.pago_bcoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<pago_bcoPayload>
          }
          aggregate: {
            args: Prisma.Pago_bcoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePago_bco>
          }
          groupBy: {
            args: Prisma.pago_bcoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Pago_bcoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pago_bcoCountArgs<ExtArgs>,
            result: $Utils.Optional<Pago_bcoCountAggregateOutputType> | number
          }
        }
      }
      caja: {
        payload: cajaPayload<ExtArgs>
        fields: Prisma.cajaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cajaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cajaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cajaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cajaPayload>
          }
          findFirst: {
            args: Prisma.cajaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cajaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cajaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cajaPayload>
          }
          findMany: {
            args: Prisma.cajaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cajaPayload>[]
          }
          create: {
            args: Prisma.cajaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cajaPayload>
          }
          createMany: {
            args: Prisma.cajaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cajaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cajaPayload>
          }
          update: {
            args: Prisma.cajaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cajaPayload>
          }
          deleteMany: {
            args: Prisma.cajaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cajaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cajaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<cajaPayload>
          }
          aggregate: {
            args: Prisma.CajaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCaja>
          }
          groupBy: {
            args: Prisma.cajaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CajaGroupByOutputType>[]
          }
          count: {
            args: Prisma.cajaCountArgs<ExtArgs>,
            result: $Utils.Optional<CajaCountAggregateOutputType> | number
          }
        }
      }
      subcta: {
        payload: subctaPayload<ExtArgs>
        fields: Prisma.subctaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subctaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subctaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subctaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subctaPayload>
          }
          findFirst: {
            args: Prisma.subctaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subctaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subctaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subctaPayload>
          }
          findMany: {
            args: Prisma.subctaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subctaPayload>[]
          }
          create: {
            args: Prisma.subctaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subctaPayload>
          }
          createMany: {
            args: Prisma.subctaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.subctaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subctaPayload>
          }
          update: {
            args: Prisma.subctaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subctaPayload>
          }
          deleteMany: {
            args: Prisma.subctaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.subctaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.subctaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subctaPayload>
          }
          aggregate: {
            args: Prisma.SubctaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubcta>
          }
          groupBy: {
            args: Prisma.subctaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubctaGroupByOutputType>[]
          }
          count: {
            args: Prisma.subctaCountArgs<ExtArgs>,
            result: $Utils.Optional<SubctaCountAggregateOutputType> | number
          }
        }
      }
      maestro_cuentas: {
        payload: maestro_cuentasPayload<ExtArgs>
        fields: Prisma.maestro_cuentasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.maestro_cuentasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestro_cuentasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.maestro_cuentasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestro_cuentasPayload>
          }
          findFirst: {
            args: Prisma.maestro_cuentasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestro_cuentasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.maestro_cuentasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestro_cuentasPayload>
          }
          findMany: {
            args: Prisma.maestro_cuentasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestro_cuentasPayload>[]
          }
          create: {
            args: Prisma.maestro_cuentasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestro_cuentasPayload>
          }
          createMany: {
            args: Prisma.maestro_cuentasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.maestro_cuentasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestro_cuentasPayload>
          }
          update: {
            args: Prisma.maestro_cuentasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestro_cuentasPayload>
          }
          deleteMany: {
            args: Prisma.maestro_cuentasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.maestro_cuentasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.maestro_cuentasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<maestro_cuentasPayload>
          }
          aggregate: {
            args: Prisma.Maestro_cuentasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMaestro_cuentas>
          }
          groupBy: {
            args: Prisma.maestro_cuentasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Maestro_cuentasGroupByOutputType>[]
          }
          count: {
            args: Prisma.maestro_cuentasCountArgs<ExtArgs>,
            result: $Utils.Optional<Maestro_cuentasCountAggregateOutputType> | number
          }
        }
      }
      operador: {
        payload: operadorPayload<ExtArgs>
        fields: Prisma.operadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.operadorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<operadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.operadorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<operadorPayload>
          }
          findFirst: {
            args: Prisma.operadorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<operadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.operadorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<operadorPayload>
          }
          findMany: {
            args: Prisma.operadorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<operadorPayload>[]
          }
          create: {
            args: Prisma.operadorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<operadorPayload>
          }
          createMany: {
            args: Prisma.operadorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.operadorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<operadorPayload>
          }
          update: {
            args: Prisma.operadorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<operadorPayload>
          }
          deleteMany: {
            args: Prisma.operadorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.operadorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.operadorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<operadorPayload>
          }
          aggregate: {
            args: Prisma.OperadorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOperador>
          }
          groupBy: {
            args: Prisma.operadorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OperadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.operadorCountArgs<ExtArgs>,
            result: $Utils.Optional<OperadorCountAggregateOutputType> | number
          }
        }
      }
      subcta_old: {
        payload: subcta_oldPayload<ExtArgs>
        fields: Prisma.subcta_oldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subcta_oldFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subcta_oldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subcta_oldFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subcta_oldPayload>
          }
          findFirst: {
            args: Prisma.subcta_oldFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subcta_oldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subcta_oldFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subcta_oldPayload>
          }
          findMany: {
            args: Prisma.subcta_oldFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subcta_oldPayload>[]
          }
          create: {
            args: Prisma.subcta_oldCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subcta_oldPayload>
          }
          createMany: {
            args: Prisma.subcta_oldCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.subcta_oldDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subcta_oldPayload>
          }
          update: {
            args: Prisma.subcta_oldUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subcta_oldPayload>
          }
          deleteMany: {
            args: Prisma.subcta_oldDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.subcta_oldUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.subcta_oldUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<subcta_oldPayload>
          }
          aggregate: {
            args: Prisma.Subcta_oldAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubcta_old>
          }
          groupBy: {
            args: Prisma.subcta_oldGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Subcta_oldGroupByOutputType>[]
          }
          count: {
            args: Prisma.subcta_oldCountArgs<ExtArgs>,
            result: $Utils.Optional<Subcta_oldCountAggregateOutputType> | number
          }
        }
      }
      so: {
        payload: soPayload<ExtArgs>
        fields: Prisma.soFieldRefs
        operations: {
          findUnique: {
            args: Prisma.soFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<soPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.soFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<soPayload>
          }
          findFirst: {
            args: Prisma.soFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<soPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.soFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<soPayload>
          }
          findMany: {
            args: Prisma.soFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<soPayload>[]
          }
          create: {
            args: Prisma.soCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<soPayload>
          }
          createMany: {
            args: Prisma.soCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.soDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<soPayload>
          }
          update: {
            args: Prisma.soUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<soPayload>
          }
          deleteMany: {
            args: Prisma.soDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.soUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.soUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<soPayload>
          }
          aggregate: {
            args: Prisma.SoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSo>
          }
          groupBy: {
            args: Prisma.soGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SoGroupByOutputType>[]
          }
          count: {
            args: Prisma.soCountArgs<ExtArgs>,
            result: $Utils.Optional<SoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model adherent
   */


  export type AggregateAdherent = {
    _count: AdherentCountAggregateOutputType | null
    _avg: AdherentAvgAggregateOutputType | null
    _sum: AdherentSumAggregateOutputType | null
    _min: AdherentMinAggregateOutputType | null
    _max: AdherentMaxAggregateOutputType | null
  }

  export type AdherentAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    PARENT: number | null
    OBRA_SOC: number | null
    SEGURO: number | null
    PRODUCTOR: number | null
    ORDEN: number | null
    EDAD: number | null
    idadherent: number | null
  }

  export type AdherentSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    PARENT: number | null
    OBRA_SOC: number | null
    SEGURO: number | null
    PRODUCTOR: number | null
    ORDEN: number | null
    EDAD: number | null
    idadherent: number | null
  }

  export type AdherentMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    SEXO: string | null
    ALTA: Date | null
    BAJA: Date | null
    VIGENCIA: Date | null
    PARENT: number | null
    OBRA_SOC: number | null
    SEGURO: number | null
    PRODUCTOR: number | null
    PLAN: string | null
    ORDEN: number | null
    EDAD: number | null
    ESTADO: boolean | null
    idadherent: number | null
  }

  export type AdherentMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    SEXO: string | null
    ALTA: Date | null
    BAJA: Date | null
    VIGENCIA: Date | null
    PARENT: number | null
    OBRA_SOC: number | null
    SEGURO: number | null
    PRODUCTOR: number | null
    PLAN: string | null
    ORDEN: number | null
    EDAD: number | null
    ESTADO: boolean | null
    idadherent: number | null
  }

  export type AdherentCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    NACIMIENTO: number
    SEXO: number
    ALTA: number
    BAJA: number
    VIGENCIA: number
    PARENT: number
    OBRA_SOC: number
    SEGURO: number
    PRODUCTOR: number
    PLAN: number
    ORDEN: number
    EDAD: number
    ESTADO: number
    idadherent: number
    _all: number
  }


  export type AdherentAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    PARENT?: true
    OBRA_SOC?: true
    SEGURO?: true
    PRODUCTOR?: true
    ORDEN?: true
    EDAD?: true
    idadherent?: true
  }

  export type AdherentSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    PARENT?: true
    OBRA_SOC?: true
    SEGURO?: true
    PRODUCTOR?: true
    ORDEN?: true
    EDAD?: true
    idadherent?: true
  }

  export type AdherentMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    NACIMIENTO?: true
    SEXO?: true
    ALTA?: true
    BAJA?: true
    VIGENCIA?: true
    PARENT?: true
    OBRA_SOC?: true
    SEGURO?: true
    PRODUCTOR?: true
    PLAN?: true
    ORDEN?: true
    EDAD?: true
    ESTADO?: true
    idadherent?: true
  }

  export type AdherentMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    NACIMIENTO?: true
    SEXO?: true
    ALTA?: true
    BAJA?: true
    VIGENCIA?: true
    PARENT?: true
    OBRA_SOC?: true
    SEGURO?: true
    PRODUCTOR?: true
    PLAN?: true
    ORDEN?: true
    EDAD?: true
    ESTADO?: true
    idadherent?: true
  }

  export type AdherentCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    NACIMIENTO?: true
    SEXO?: true
    ALTA?: true
    BAJA?: true
    VIGENCIA?: true
    PARENT?: true
    OBRA_SOC?: true
    SEGURO?: true
    PRODUCTOR?: true
    PLAN?: true
    ORDEN?: true
    EDAD?: true
    ESTADO?: true
    idadherent?: true
    _all?: true
  }

  export type AdherentAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which adherent to aggregate.
     */
    where?: adherentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adherents to fetch.
     */
    orderBy?: adherentOrderByWithRelationInput | adherentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adherentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adherents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adherents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned adherents
    **/
    _count?: true | AdherentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdherentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdherentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdherentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdherentMaxAggregateInputType
  }

  export type GetAdherentAggregateType<T extends AdherentAggregateArgs> = {
        [P in keyof T & keyof AggregateAdherent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdherent[P]>
      : GetScalarType<T[P], AggregateAdherent[P]>
  }




  export type adherentGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: adherentWhereInput
    orderBy?: adherentOrderByWithAggregationInput | adherentOrderByWithAggregationInput[]
    by: AdherentScalarFieldEnum[] | AdherentScalarFieldEnum
    having?: adherentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdherentCountAggregateInputType | true
    _avg?: AdherentAvgAggregateInputType
    _sum?: AdherentSumAggregateInputType
    _min?: AdherentMinAggregateInputType
    _max?: AdherentMaxAggregateInputType
  }


  export type AdherentGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    SEXO: string | null
    ALTA: Date | null
    BAJA: Date | null
    VIGENCIA: Date | null
    PARENT: number | null
    OBRA_SOC: number | null
    SEGURO: number | null
    PRODUCTOR: number | null
    PLAN: string | null
    ORDEN: number | null
    EDAD: number | null
    ESTADO: boolean | null
    idadherent: number
    _count: AdherentCountAggregateOutputType | null
    _avg: AdherentAvgAggregateOutputType | null
    _sum: AdherentSumAggregateOutputType | null
    _min: AdherentMinAggregateOutputType | null
    _max: AdherentMaxAggregateOutputType | null
  }

  type GetAdherentGroupByPayload<T extends adherentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdherentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdherentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdherentGroupByOutputType[P]>
            : GetScalarType<T[P], AdherentGroupByOutputType[P]>
        }
      >
    >


  export type adherentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    NACIMIENTO?: boolean
    SEXO?: boolean
    ALTA?: boolean
    BAJA?: boolean
    VIGENCIA?: boolean
    PARENT?: boolean
    OBRA_SOC?: boolean
    SEGURO?: boolean
    PRODUCTOR?: boolean
    PLAN?: boolean
    ORDEN?: boolean
    EDAD?: boolean
    ESTADO?: boolean
    idadherent?: boolean
  }, ExtArgs["result"]["adherent"]>

  export type adherentSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    NACIMIENTO?: boolean
    SEXO?: boolean
    ALTA?: boolean
    BAJA?: boolean
    VIGENCIA?: boolean
    PARENT?: boolean
    OBRA_SOC?: boolean
    SEGURO?: boolean
    PRODUCTOR?: boolean
    PLAN?: boolean
    ORDEN?: boolean
    EDAD?: boolean
    ESTADO?: boolean
    idadherent?: boolean
  }


  type adherentGetPayload<S extends boolean | null | undefined | adherentArgs> = $Types.GetResult<adherentPayload, S>

  type adherentCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<adherentFindManyArgs, 'select' | 'include'> & {
      select?: AdherentCountAggregateInputType | true
    }

  export interface adherentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['adherent'], meta: { name: 'adherent' } }
    /**
     * Find zero or one Adherent that matches the filter.
     * @param {adherentFindUniqueArgs} args - Arguments to find a Adherent
     * @example
     * // Get one Adherent
     * const adherent = await prisma.adherent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends adherentFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, adherentFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'adherent'> extends True ? Prisma__adherentClient<$Types.GetResult<adherentPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__adherentClient<$Types.GetResult<adherentPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Adherent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {adherentFindUniqueOrThrowArgs} args - Arguments to find a Adherent
     * @example
     * // Get one Adherent
     * const adherent = await prisma.adherent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends adherentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adherentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__adherentClient<$Types.GetResult<adherentPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Adherent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adherentFindFirstArgs} args - Arguments to find a Adherent
     * @example
     * // Get one Adherent
     * const adherent = await prisma.adherent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends adherentFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, adherentFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'adherent'> extends True ? Prisma__adherentClient<$Types.GetResult<adherentPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__adherentClient<$Types.GetResult<adherentPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Adherent that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adherentFindFirstOrThrowArgs} args - Arguments to find a Adherent
     * @example
     * // Get one Adherent
     * const adherent = await prisma.adherent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends adherentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adherentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__adherentClient<$Types.GetResult<adherentPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Adherents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adherentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adherents
     * const adherents = await prisma.adherent.findMany()
     * 
     * // Get first 10 Adherents
     * const adherents = await prisma.adherent.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const adherentWithSUCURSALOnly = await prisma.adherent.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends adherentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adherentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<adherentPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Adherent.
     * @param {adherentCreateArgs} args - Arguments to create a Adherent.
     * @example
     * // Create one Adherent
     * const Adherent = await prisma.adherent.create({
     *   data: {
     *     // ... data to create a Adherent
     *   }
     * })
     * 
    **/
    create<T extends adherentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, adherentCreateArgs<ExtArgs>>
    ): Prisma__adherentClient<$Types.GetResult<adherentPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Adherents.
     *     @param {adherentCreateManyArgs} args - Arguments to create many Adherents.
     *     @example
     *     // Create many Adherents
     *     const adherent = await prisma.adherent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends adherentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adherentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Adherent.
     * @param {adherentDeleteArgs} args - Arguments to delete one Adherent.
     * @example
     * // Delete one Adherent
     * const Adherent = await prisma.adherent.delete({
     *   where: {
     *     // ... filter to delete one Adherent
     *   }
     * })
     * 
    **/
    delete<T extends adherentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, adherentDeleteArgs<ExtArgs>>
    ): Prisma__adherentClient<$Types.GetResult<adherentPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Adherent.
     * @param {adherentUpdateArgs} args - Arguments to update one Adherent.
     * @example
     * // Update one Adherent
     * const adherent = await prisma.adherent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends adherentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, adherentUpdateArgs<ExtArgs>>
    ): Prisma__adherentClient<$Types.GetResult<adherentPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Adherents.
     * @param {adherentDeleteManyArgs} args - Arguments to filter Adherents to delete.
     * @example
     * // Delete a few Adherents
     * const { count } = await prisma.adherent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends adherentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adherentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adherents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adherentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adherents
     * const adherent = await prisma.adherent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends adherentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, adherentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Adherent.
     * @param {adherentUpsertArgs} args - Arguments to update or create a Adherent.
     * @example
     * // Update or create a Adherent
     * const adherent = await prisma.adherent.upsert({
     *   create: {
     *     // ... data to create a Adherent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adherent we want to update
     *   }
     * })
    **/
    upsert<T extends adherentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, adherentUpsertArgs<ExtArgs>>
    ): Prisma__adherentClient<$Types.GetResult<adherentPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Adherents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adherentCountArgs} args - Arguments to filter Adherents to count.
     * @example
     * // Count the number of Adherents
     * const count = await prisma.adherent.count({
     *   where: {
     *     // ... the filter for the Adherents we want to count
     *   }
     * })
    **/
    count<T extends adherentCountArgs>(
      args?: Subset<T, adherentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdherentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adherent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdherentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdherentAggregateArgs>(args: Subset<T, AdherentAggregateArgs>): Prisma.PrismaPromise<GetAdherentAggregateType<T>>

    /**
     * Group by Adherent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adherentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adherentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adherentGroupByArgs['orderBy'] }
        : { orderBy?: adherentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adherentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdherentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the adherent model
   */
  readonly fields: adherentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for adherent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__adherentClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the adherent model
   */ 
  interface adherentFieldRefs {
    readonly SUCURSAL: FieldRef<"adherent", 'String'>
    readonly CONTRATO: FieldRef<"adherent", 'Int'>
    readonly NRO_DOC: FieldRef<"adherent", 'Int'>
    readonly APELLIDOS: FieldRef<"adherent", 'String'>
    readonly NOMBRES: FieldRef<"adherent", 'String'>
    readonly NACIMIENTO: FieldRef<"adherent", 'DateTime'>
    readonly SEXO: FieldRef<"adherent", 'String'>
    readonly ALTA: FieldRef<"adherent", 'DateTime'>
    readonly BAJA: FieldRef<"adherent", 'DateTime'>
    readonly VIGENCIA: FieldRef<"adherent", 'DateTime'>
    readonly PARENT: FieldRef<"adherent", 'Int'>
    readonly OBRA_SOC: FieldRef<"adherent", 'Int'>
    readonly SEGURO: FieldRef<"adherent", 'Int'>
    readonly PRODUCTOR: FieldRef<"adherent", 'Int'>
    readonly PLAN: FieldRef<"adherent", 'String'>
    readonly ORDEN: FieldRef<"adherent", 'Int'>
    readonly EDAD: FieldRef<"adherent", 'Int'>
    readonly ESTADO: FieldRef<"adherent", 'Boolean'>
    readonly idadherent: FieldRef<"adherent", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * adherent base type for findUnique actions
   */
  export type adherentFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent
     */
    select?: adherentSelect<ExtArgs> | null
    /**
     * Filter, which adherent to fetch.
     */
    where: adherentWhereUniqueInput
  }

  /**
   * adherent findUnique
   */
  export interface adherentFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends adherentFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * adherent findUniqueOrThrow
   */
  export type adherentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent
     */
    select?: adherentSelect<ExtArgs> | null
    /**
     * Filter, which adherent to fetch.
     */
    where: adherentWhereUniqueInput
  }


  /**
   * adherent base type for findFirst actions
   */
  export type adherentFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent
     */
    select?: adherentSelect<ExtArgs> | null
    /**
     * Filter, which adherent to fetch.
     */
    where?: adherentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adherents to fetch.
     */
    orderBy?: adherentOrderByWithRelationInput | adherentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adherents.
     */
    cursor?: adherentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adherents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adherents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adherents.
     */
    distinct?: AdherentScalarFieldEnum | AdherentScalarFieldEnum[]
  }

  /**
   * adherent findFirst
   */
  export interface adherentFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends adherentFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * adherent findFirstOrThrow
   */
  export type adherentFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent
     */
    select?: adherentSelect<ExtArgs> | null
    /**
     * Filter, which adherent to fetch.
     */
    where?: adherentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adherents to fetch.
     */
    orderBy?: adherentOrderByWithRelationInput | adherentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adherents.
     */
    cursor?: adherentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adherents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adherents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adherents.
     */
    distinct?: AdherentScalarFieldEnum | AdherentScalarFieldEnum[]
  }


  /**
   * adherent findMany
   */
  export type adherentFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent
     */
    select?: adherentSelect<ExtArgs> | null
    /**
     * Filter, which adherents to fetch.
     */
    where?: adherentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adherents to fetch.
     */
    orderBy?: adherentOrderByWithRelationInput | adherentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing adherents.
     */
    cursor?: adherentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adherents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adherents.
     */
    skip?: number
    distinct?: AdherentScalarFieldEnum | AdherentScalarFieldEnum[]
  }


  /**
   * adherent create
   */
  export type adherentCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent
     */
    select?: adherentSelect<ExtArgs> | null
    /**
     * The data needed to create a adherent.
     */
    data?: XOR<adherentCreateInput, adherentUncheckedCreateInput>
  }


  /**
   * adherent createMany
   */
  export type adherentCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many adherents.
     */
    data: adherentCreateManyInput | adherentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * adherent update
   */
  export type adherentUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent
     */
    select?: adherentSelect<ExtArgs> | null
    /**
     * The data needed to update a adherent.
     */
    data: XOR<adherentUpdateInput, adherentUncheckedUpdateInput>
    /**
     * Choose, which adherent to update.
     */
    where: adherentWhereUniqueInput
  }


  /**
   * adherent updateMany
   */
  export type adherentUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update adherents.
     */
    data: XOR<adherentUpdateManyMutationInput, adherentUncheckedUpdateManyInput>
    /**
     * Filter which adherents to update
     */
    where?: adherentWhereInput
  }


  /**
   * adherent upsert
   */
  export type adherentUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent
     */
    select?: adherentSelect<ExtArgs> | null
    /**
     * The filter to search for the adherent to update in case it exists.
     */
    where: adherentWhereUniqueInput
    /**
     * In case the adherent found by the `where` argument doesn't exist, create a new adherent with this data.
     */
    create: XOR<adherentCreateInput, adherentUncheckedCreateInput>
    /**
     * In case the adherent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adherentUpdateInput, adherentUncheckedUpdateInput>
  }


  /**
   * adherent delete
   */
  export type adherentDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent
     */
    select?: adherentSelect<ExtArgs> | null
    /**
     * Filter which adherent to delete.
     */
    where: adherentWhereUniqueInput
  }


  /**
   * adherent deleteMany
   */
  export type adherentDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which adherents to delete
     */
    where?: adherentWhereInput
  }


  /**
   * adherent without action
   */
  export type adherentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adherent
     */
    select?: adherentSelect<ExtArgs> | null
  }



  /**
   * Model cuo_fija
   */


  export type AggregateCuo_fija = {
    _count: Cuo_fijaCountAggregateOutputType | null
    _avg: Cuo_fijaAvgAggregateOutputType | null
    _sum: Cuo_fijaSumAggregateOutputType | null
    _min: Cuo_fijaMinAggregateOutputType | null
    _max: Cuo_fijaMaxAggregateOutputType | null
  }

  export type Cuo_fijaAvgAggregateOutputType = {
    CONTRATO: number | null
    IMPORTE: number | null
    CUO_ANT: number | null
    idcuota: number | null
  }

  export type Cuo_fijaSumAggregateOutputType = {
    CONTRATO: number | null
    IMPORTE: number | null
    CUO_ANT: number | null
    idcuota: number | null
  }

  export type Cuo_fijaMinAggregateOutputType = {
    CONTRATO: number | null
    IMPORTE: number | null
    CUO_ANT: number | null
    DESDE: Date | null
    VENCIM: Date | null
    OPERADOR: string | null
    idcuota: number | null
  }

  export type Cuo_fijaMaxAggregateOutputType = {
    CONTRATO: number | null
    IMPORTE: number | null
    CUO_ANT: number | null
    DESDE: Date | null
    VENCIM: Date | null
    OPERADOR: string | null
    idcuota: number | null
  }

  export type Cuo_fijaCountAggregateOutputType = {
    CONTRATO: number
    IMPORTE: number
    CUO_ANT: number
    DESDE: number
    VENCIM: number
    OPERADOR: number
    idcuota: number
    _all: number
  }


  export type Cuo_fijaAvgAggregateInputType = {
    CONTRATO?: true
    IMPORTE?: true
    CUO_ANT?: true
    idcuota?: true
  }

  export type Cuo_fijaSumAggregateInputType = {
    CONTRATO?: true
    IMPORTE?: true
    CUO_ANT?: true
    idcuota?: true
  }

  export type Cuo_fijaMinAggregateInputType = {
    CONTRATO?: true
    IMPORTE?: true
    CUO_ANT?: true
    DESDE?: true
    VENCIM?: true
    OPERADOR?: true
    idcuota?: true
  }

  export type Cuo_fijaMaxAggregateInputType = {
    CONTRATO?: true
    IMPORTE?: true
    CUO_ANT?: true
    DESDE?: true
    VENCIM?: true
    OPERADOR?: true
    idcuota?: true
  }

  export type Cuo_fijaCountAggregateInputType = {
    CONTRATO?: true
    IMPORTE?: true
    CUO_ANT?: true
    DESDE?: true
    VENCIM?: true
    OPERADOR?: true
    idcuota?: true
    _all?: true
  }

  export type Cuo_fijaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuo_fija to aggregate.
     */
    where?: cuo_fijaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuo_fijas to fetch.
     */
    orderBy?: cuo_fijaOrderByWithRelationInput | cuo_fijaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cuo_fijaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuo_fijas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuo_fijas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cuo_fijas
    **/
    _count?: true | Cuo_fijaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cuo_fijaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cuo_fijaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cuo_fijaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cuo_fijaMaxAggregateInputType
  }

  export type GetCuo_fijaAggregateType<T extends Cuo_fijaAggregateArgs> = {
        [P in keyof T & keyof AggregateCuo_fija]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuo_fija[P]>
      : GetScalarType<T[P], AggregateCuo_fija[P]>
  }




  export type cuo_fijaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: cuo_fijaWhereInput
    orderBy?: cuo_fijaOrderByWithAggregationInput | cuo_fijaOrderByWithAggregationInput[]
    by: Cuo_fijaScalarFieldEnum[] | Cuo_fijaScalarFieldEnum
    having?: cuo_fijaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cuo_fijaCountAggregateInputType | true
    _avg?: Cuo_fijaAvgAggregateInputType
    _sum?: Cuo_fijaSumAggregateInputType
    _min?: Cuo_fijaMinAggregateInputType
    _max?: Cuo_fijaMaxAggregateInputType
  }


  export type Cuo_fijaGroupByOutputType = {
    CONTRATO: number | null
    IMPORTE: number | null
    CUO_ANT: number | null
    DESDE: Date | null
    VENCIM: Date | null
    OPERADOR: string | null
    idcuota: number
    _count: Cuo_fijaCountAggregateOutputType | null
    _avg: Cuo_fijaAvgAggregateOutputType | null
    _sum: Cuo_fijaSumAggregateOutputType | null
    _min: Cuo_fijaMinAggregateOutputType | null
    _max: Cuo_fijaMaxAggregateOutputType | null
  }

  type GetCuo_fijaGroupByPayload<T extends cuo_fijaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cuo_fijaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cuo_fijaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cuo_fijaGroupByOutputType[P]>
            : GetScalarType<T[P], Cuo_fijaGroupByOutputType[P]>
        }
      >
    >


  export type cuo_fijaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CONTRATO?: boolean
    IMPORTE?: boolean
    CUO_ANT?: boolean
    DESDE?: boolean
    VENCIM?: boolean
    OPERADOR?: boolean
    idcuota?: boolean
  }, ExtArgs["result"]["cuo_fija"]>

  export type cuo_fijaSelectScalar = {
    CONTRATO?: boolean
    IMPORTE?: boolean
    CUO_ANT?: boolean
    DESDE?: boolean
    VENCIM?: boolean
    OPERADOR?: boolean
    idcuota?: boolean
  }


  type cuo_fijaGetPayload<S extends boolean | null | undefined | cuo_fijaArgs> = $Types.GetResult<cuo_fijaPayload, S>

  type cuo_fijaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<cuo_fijaFindManyArgs, 'select' | 'include'> & {
      select?: Cuo_fijaCountAggregateInputType | true
    }

  export interface cuo_fijaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cuo_fija'], meta: { name: 'cuo_fija' } }
    /**
     * Find zero or one Cuo_fija that matches the filter.
     * @param {cuo_fijaFindUniqueArgs} args - Arguments to find a Cuo_fija
     * @example
     * // Get one Cuo_fija
     * const cuo_fija = await prisma.cuo_fija.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cuo_fijaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cuo_fijaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'cuo_fija'> extends True ? Prisma__cuo_fijaClient<$Types.GetResult<cuo_fijaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__cuo_fijaClient<$Types.GetResult<cuo_fijaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Cuo_fija that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cuo_fijaFindUniqueOrThrowArgs} args - Arguments to find a Cuo_fija
     * @example
     * // Get one Cuo_fija
     * const cuo_fija = await prisma.cuo_fija.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cuo_fijaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cuo_fijaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cuo_fijaClient<$Types.GetResult<cuo_fijaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Cuo_fija that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuo_fijaFindFirstArgs} args - Arguments to find a Cuo_fija
     * @example
     * // Get one Cuo_fija
     * const cuo_fija = await prisma.cuo_fija.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cuo_fijaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cuo_fijaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'cuo_fija'> extends True ? Prisma__cuo_fijaClient<$Types.GetResult<cuo_fijaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__cuo_fijaClient<$Types.GetResult<cuo_fijaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Cuo_fija that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuo_fijaFindFirstOrThrowArgs} args - Arguments to find a Cuo_fija
     * @example
     * // Get one Cuo_fija
     * const cuo_fija = await prisma.cuo_fija.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cuo_fijaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cuo_fijaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cuo_fijaClient<$Types.GetResult<cuo_fijaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Cuo_fijas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuo_fijaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuo_fijas
     * const cuo_fijas = await prisma.cuo_fija.findMany()
     * 
     * // Get first 10 Cuo_fijas
     * const cuo_fijas = await prisma.cuo_fija.findMany({ take: 10 })
     * 
     * // Only select the `CONTRATO`
     * const cuo_fijaWithCONTRATOOnly = await prisma.cuo_fija.findMany({ select: { CONTRATO: true } })
     * 
    **/
    findMany<T extends cuo_fijaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cuo_fijaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<cuo_fijaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Cuo_fija.
     * @param {cuo_fijaCreateArgs} args - Arguments to create a Cuo_fija.
     * @example
     * // Create one Cuo_fija
     * const Cuo_fija = await prisma.cuo_fija.create({
     *   data: {
     *     // ... data to create a Cuo_fija
     *   }
     * })
     * 
    **/
    create<T extends cuo_fijaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cuo_fijaCreateArgs<ExtArgs>>
    ): Prisma__cuo_fijaClient<$Types.GetResult<cuo_fijaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Cuo_fijas.
     *     @param {cuo_fijaCreateManyArgs} args - Arguments to create many Cuo_fijas.
     *     @example
     *     // Create many Cuo_fijas
     *     const cuo_fija = await prisma.cuo_fija.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cuo_fijaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cuo_fijaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cuo_fija.
     * @param {cuo_fijaDeleteArgs} args - Arguments to delete one Cuo_fija.
     * @example
     * // Delete one Cuo_fija
     * const Cuo_fija = await prisma.cuo_fija.delete({
     *   where: {
     *     // ... filter to delete one Cuo_fija
     *   }
     * })
     * 
    **/
    delete<T extends cuo_fijaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cuo_fijaDeleteArgs<ExtArgs>>
    ): Prisma__cuo_fijaClient<$Types.GetResult<cuo_fijaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Cuo_fija.
     * @param {cuo_fijaUpdateArgs} args - Arguments to update one Cuo_fija.
     * @example
     * // Update one Cuo_fija
     * const cuo_fija = await prisma.cuo_fija.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cuo_fijaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cuo_fijaUpdateArgs<ExtArgs>>
    ): Prisma__cuo_fijaClient<$Types.GetResult<cuo_fijaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Cuo_fijas.
     * @param {cuo_fijaDeleteManyArgs} args - Arguments to filter Cuo_fijas to delete.
     * @example
     * // Delete a few Cuo_fijas
     * const { count } = await prisma.cuo_fija.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cuo_fijaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cuo_fijaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cuo_fijas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuo_fijaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuo_fijas
     * const cuo_fija = await prisma.cuo_fija.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cuo_fijaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cuo_fijaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cuo_fija.
     * @param {cuo_fijaUpsertArgs} args - Arguments to update or create a Cuo_fija.
     * @example
     * // Update or create a Cuo_fija
     * const cuo_fija = await prisma.cuo_fija.upsert({
     *   create: {
     *     // ... data to create a Cuo_fija
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuo_fija we want to update
     *   }
     * })
    **/
    upsert<T extends cuo_fijaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cuo_fijaUpsertArgs<ExtArgs>>
    ): Prisma__cuo_fijaClient<$Types.GetResult<cuo_fijaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Cuo_fijas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuo_fijaCountArgs} args - Arguments to filter Cuo_fijas to count.
     * @example
     * // Count the number of Cuo_fijas
     * const count = await prisma.cuo_fija.count({
     *   where: {
     *     // ... the filter for the Cuo_fijas we want to count
     *   }
     * })
    **/
    count<T extends cuo_fijaCountArgs>(
      args?: Subset<T, cuo_fijaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cuo_fijaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cuo_fija.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cuo_fijaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cuo_fijaAggregateArgs>(args: Subset<T, Cuo_fijaAggregateArgs>): Prisma.PrismaPromise<GetCuo_fijaAggregateType<T>>

    /**
     * Group by Cuo_fija.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuo_fijaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cuo_fijaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cuo_fijaGroupByArgs['orderBy'] }
        : { orderBy?: cuo_fijaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cuo_fijaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuo_fijaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cuo_fija model
   */
  readonly fields: cuo_fijaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cuo_fija.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cuo_fijaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the cuo_fija model
   */ 
  interface cuo_fijaFieldRefs {
    readonly CONTRATO: FieldRef<"cuo_fija", 'Int'>
    readonly IMPORTE: FieldRef<"cuo_fija", 'Float'>
    readonly CUO_ANT: FieldRef<"cuo_fija", 'Float'>
    readonly DESDE: FieldRef<"cuo_fija", 'DateTime'>
    readonly VENCIM: FieldRef<"cuo_fija", 'DateTime'>
    readonly OPERADOR: FieldRef<"cuo_fija", 'String'>
    readonly idcuota: FieldRef<"cuo_fija", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * cuo_fija base type for findUnique actions
   */
  export type cuo_fijaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuo_fija
     */
    select?: cuo_fijaSelect<ExtArgs> | null
    /**
     * Filter, which cuo_fija to fetch.
     */
    where: cuo_fijaWhereUniqueInput
  }

  /**
   * cuo_fija findUnique
   */
  export interface cuo_fijaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cuo_fijaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cuo_fija findUniqueOrThrow
   */
  export type cuo_fijaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuo_fija
     */
    select?: cuo_fijaSelect<ExtArgs> | null
    /**
     * Filter, which cuo_fija to fetch.
     */
    where: cuo_fijaWhereUniqueInput
  }


  /**
   * cuo_fija base type for findFirst actions
   */
  export type cuo_fijaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuo_fija
     */
    select?: cuo_fijaSelect<ExtArgs> | null
    /**
     * Filter, which cuo_fija to fetch.
     */
    where?: cuo_fijaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuo_fijas to fetch.
     */
    orderBy?: cuo_fijaOrderByWithRelationInput | cuo_fijaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuo_fijas.
     */
    cursor?: cuo_fijaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuo_fijas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuo_fijas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuo_fijas.
     */
    distinct?: Cuo_fijaScalarFieldEnum | Cuo_fijaScalarFieldEnum[]
  }

  /**
   * cuo_fija findFirst
   */
  export interface cuo_fijaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cuo_fijaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cuo_fija findFirstOrThrow
   */
  export type cuo_fijaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuo_fija
     */
    select?: cuo_fijaSelect<ExtArgs> | null
    /**
     * Filter, which cuo_fija to fetch.
     */
    where?: cuo_fijaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuo_fijas to fetch.
     */
    orderBy?: cuo_fijaOrderByWithRelationInput | cuo_fijaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cuo_fijas.
     */
    cursor?: cuo_fijaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuo_fijas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuo_fijas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cuo_fijas.
     */
    distinct?: Cuo_fijaScalarFieldEnum | Cuo_fijaScalarFieldEnum[]
  }


  /**
   * cuo_fija findMany
   */
  export type cuo_fijaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuo_fija
     */
    select?: cuo_fijaSelect<ExtArgs> | null
    /**
     * Filter, which cuo_fijas to fetch.
     */
    where?: cuo_fijaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cuo_fijas to fetch.
     */
    orderBy?: cuo_fijaOrderByWithRelationInput | cuo_fijaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cuo_fijas.
     */
    cursor?: cuo_fijaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cuo_fijas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cuo_fijas.
     */
    skip?: number
    distinct?: Cuo_fijaScalarFieldEnum | Cuo_fijaScalarFieldEnum[]
  }


  /**
   * cuo_fija create
   */
  export type cuo_fijaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuo_fija
     */
    select?: cuo_fijaSelect<ExtArgs> | null
    /**
     * The data needed to create a cuo_fija.
     */
    data?: XOR<cuo_fijaCreateInput, cuo_fijaUncheckedCreateInput>
  }


  /**
   * cuo_fija createMany
   */
  export type cuo_fijaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cuo_fijas.
     */
    data: cuo_fijaCreateManyInput | cuo_fijaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cuo_fija update
   */
  export type cuo_fijaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuo_fija
     */
    select?: cuo_fijaSelect<ExtArgs> | null
    /**
     * The data needed to update a cuo_fija.
     */
    data: XOR<cuo_fijaUpdateInput, cuo_fijaUncheckedUpdateInput>
    /**
     * Choose, which cuo_fija to update.
     */
    where: cuo_fijaWhereUniqueInput
  }


  /**
   * cuo_fija updateMany
   */
  export type cuo_fijaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cuo_fijas.
     */
    data: XOR<cuo_fijaUpdateManyMutationInput, cuo_fijaUncheckedUpdateManyInput>
    /**
     * Filter which cuo_fijas to update
     */
    where?: cuo_fijaWhereInput
  }


  /**
   * cuo_fija upsert
   */
  export type cuo_fijaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuo_fija
     */
    select?: cuo_fijaSelect<ExtArgs> | null
    /**
     * The filter to search for the cuo_fija to update in case it exists.
     */
    where: cuo_fijaWhereUniqueInput
    /**
     * In case the cuo_fija found by the `where` argument doesn't exist, create a new cuo_fija with this data.
     */
    create: XOR<cuo_fijaCreateInput, cuo_fijaUncheckedCreateInput>
    /**
     * In case the cuo_fija was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cuo_fijaUpdateInput, cuo_fijaUncheckedUpdateInput>
  }


  /**
   * cuo_fija delete
   */
  export type cuo_fijaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuo_fija
     */
    select?: cuo_fijaSelect<ExtArgs> | null
    /**
     * Filter which cuo_fija to delete.
     */
    where: cuo_fijaWhereUniqueInput
  }


  /**
   * cuo_fija deleteMany
   */
  export type cuo_fijaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cuo_fijas to delete
     */
    where?: cuo_fijaWhereInput
  }


  /**
   * cuo_fija without action
   */
  export type cuo_fijaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuo_fija
     */
    select?: cuo_fijaSelect<ExtArgs> | null
  }



  /**
   * Model grupos
   */


  export type AggregateGrupos = {
    _count: GruposCountAggregateOutputType | null
    _avg: GruposAvgAggregateOutputType | null
    _sum: GruposSumAggregateOutputType | null
    _min: GruposMinAggregateOutputType | null
    _max: GruposMaxAggregateOutputType | null
  }

  export type GruposAvgAggregateOutputType = {
    CODIGO: number | null
    TOTALIZA: number | null
    PAGINA: number | null
    DIA: number | null
    MES: number | null
    ANO: number | null
    id: number | null
  }

  export type GruposSumAggregateOutputType = {
    CODIGO: number | null
    TOTALIZA: number | null
    PAGINA: number | null
    DIA: number | null
    MES: number | null
    ANO: number | null
    id: number | null
  }

  export type GruposMinAggregateOutputType = {
    CODIGO: number | null
    DESCRIP: string | null
    IVA: string | null
    CUIT: string | null
    DOMICILIO: string | null
    ORDEN: string | null
    LIN_ALTA: string | null
    LIN_BAJA: string | null
    TOTALIZA: number | null
    PAGINA: number | null
    TITULO1: string | null
    TITULO2: string | null
    DIA: number | null
    MES: number | null
    ANO: number | null
    SUCURSAL: string | null
    MARCA: string | null
    CONVENIO: string | null
    id: number | null
  }

  export type GruposMaxAggregateOutputType = {
    CODIGO: number | null
    DESCRIP: string | null
    IVA: string | null
    CUIT: string | null
    DOMICILIO: string | null
    ORDEN: string | null
    LIN_ALTA: string | null
    LIN_BAJA: string | null
    TOTALIZA: number | null
    PAGINA: number | null
    TITULO1: string | null
    TITULO2: string | null
    DIA: number | null
    MES: number | null
    ANO: number | null
    SUCURSAL: string | null
    MARCA: string | null
    CONVENIO: string | null
    id: number | null
  }

  export type GruposCountAggregateOutputType = {
    CODIGO: number
    DESCRIP: number
    IVA: number
    CUIT: number
    DOMICILIO: number
    ORDEN: number
    LIN_ALTA: number
    LIN_BAJA: number
    TOTALIZA: number
    PAGINA: number
    TITULO1: number
    TITULO2: number
    DIA: number
    MES: number
    ANO: number
    SUCURSAL: number
    MARCA: number
    CONVENIO: number
    id: number
    _all: number
  }


  export type GruposAvgAggregateInputType = {
    CODIGO?: true
    TOTALIZA?: true
    PAGINA?: true
    DIA?: true
    MES?: true
    ANO?: true
    id?: true
  }

  export type GruposSumAggregateInputType = {
    CODIGO?: true
    TOTALIZA?: true
    PAGINA?: true
    DIA?: true
    MES?: true
    ANO?: true
    id?: true
  }

  export type GruposMinAggregateInputType = {
    CODIGO?: true
    DESCRIP?: true
    IVA?: true
    CUIT?: true
    DOMICILIO?: true
    ORDEN?: true
    LIN_ALTA?: true
    LIN_BAJA?: true
    TOTALIZA?: true
    PAGINA?: true
    TITULO1?: true
    TITULO2?: true
    DIA?: true
    MES?: true
    ANO?: true
    SUCURSAL?: true
    MARCA?: true
    CONVENIO?: true
    id?: true
  }

  export type GruposMaxAggregateInputType = {
    CODIGO?: true
    DESCRIP?: true
    IVA?: true
    CUIT?: true
    DOMICILIO?: true
    ORDEN?: true
    LIN_ALTA?: true
    LIN_BAJA?: true
    TOTALIZA?: true
    PAGINA?: true
    TITULO1?: true
    TITULO2?: true
    DIA?: true
    MES?: true
    ANO?: true
    SUCURSAL?: true
    MARCA?: true
    CONVENIO?: true
    id?: true
  }

  export type GruposCountAggregateInputType = {
    CODIGO?: true
    DESCRIP?: true
    IVA?: true
    CUIT?: true
    DOMICILIO?: true
    ORDEN?: true
    LIN_ALTA?: true
    LIN_BAJA?: true
    TOTALIZA?: true
    PAGINA?: true
    TITULO1?: true
    TITULO2?: true
    DIA?: true
    MES?: true
    ANO?: true
    SUCURSAL?: true
    MARCA?: true
    CONVENIO?: true
    id?: true
    _all?: true
  }

  export type GruposAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which grupos to aggregate.
     */
    where?: gruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grupos to fetch.
     */
    orderBy?: gruposOrderByWithRelationInput | gruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned grupos
    **/
    _count?: true | GruposCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GruposAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GruposSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GruposMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GruposMaxAggregateInputType
  }

  export type GetGruposAggregateType<T extends GruposAggregateArgs> = {
        [P in keyof T & keyof AggregateGrupos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrupos[P]>
      : GetScalarType<T[P], AggregateGrupos[P]>
  }




  export type gruposGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: gruposWhereInput
    orderBy?: gruposOrderByWithAggregationInput | gruposOrderByWithAggregationInput[]
    by: GruposScalarFieldEnum[] | GruposScalarFieldEnum
    having?: gruposScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GruposCountAggregateInputType | true
    _avg?: GruposAvgAggregateInputType
    _sum?: GruposSumAggregateInputType
    _min?: GruposMinAggregateInputType
    _max?: GruposMaxAggregateInputType
  }


  export type GruposGroupByOutputType = {
    CODIGO: number | null
    DESCRIP: string | null
    IVA: string | null
    CUIT: string | null
    DOMICILIO: string | null
    ORDEN: string | null
    LIN_ALTA: string | null
    LIN_BAJA: string | null
    TOTALIZA: number | null
    PAGINA: number | null
    TITULO1: string | null
    TITULO2: string | null
    DIA: number | null
    MES: number | null
    ANO: number | null
    SUCURSAL: string | null
    MARCA: string | null
    CONVENIO: string | null
    id: number
    _count: GruposCountAggregateOutputType | null
    _avg: GruposAvgAggregateOutputType | null
    _sum: GruposSumAggregateOutputType | null
    _min: GruposMinAggregateOutputType | null
    _max: GruposMaxAggregateOutputType | null
  }

  type GetGruposGroupByPayload<T extends gruposGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GruposGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GruposGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GruposGroupByOutputType[P]>
            : GetScalarType<T[P], GruposGroupByOutputType[P]>
        }
      >
    >


  export type gruposSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CODIGO?: boolean
    DESCRIP?: boolean
    IVA?: boolean
    CUIT?: boolean
    DOMICILIO?: boolean
    ORDEN?: boolean
    LIN_ALTA?: boolean
    LIN_BAJA?: boolean
    TOTALIZA?: boolean
    PAGINA?: boolean
    TITULO1?: boolean
    TITULO2?: boolean
    DIA?: boolean
    MES?: boolean
    ANO?: boolean
    SUCURSAL?: boolean
    MARCA?: boolean
    CONVENIO?: boolean
    id?: boolean
  }, ExtArgs["result"]["grupos"]>

  export type gruposSelectScalar = {
    CODIGO?: boolean
    DESCRIP?: boolean
    IVA?: boolean
    CUIT?: boolean
    DOMICILIO?: boolean
    ORDEN?: boolean
    LIN_ALTA?: boolean
    LIN_BAJA?: boolean
    TOTALIZA?: boolean
    PAGINA?: boolean
    TITULO1?: boolean
    TITULO2?: boolean
    DIA?: boolean
    MES?: boolean
    ANO?: boolean
    SUCURSAL?: boolean
    MARCA?: boolean
    CONVENIO?: boolean
    id?: boolean
  }


  type gruposGetPayload<S extends boolean | null | undefined | gruposArgs> = $Types.GetResult<gruposPayload, S>

  type gruposCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<gruposFindManyArgs, 'select' | 'include'> & {
      select?: GruposCountAggregateInputType | true
    }

  export interface gruposDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['grupos'], meta: { name: 'grupos' } }
    /**
     * Find zero or one Grupos that matches the filter.
     * @param {gruposFindUniqueArgs} args - Arguments to find a Grupos
     * @example
     * // Get one Grupos
     * const grupos = await prisma.grupos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends gruposFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, gruposFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'grupos'> extends True ? Prisma__gruposClient<$Types.GetResult<gruposPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__gruposClient<$Types.GetResult<gruposPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Grupos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {gruposFindUniqueOrThrowArgs} args - Arguments to find a Grupos
     * @example
     * // Get one Grupos
     * const grupos = await prisma.grupos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends gruposFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gruposFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__gruposClient<$Types.GetResult<gruposPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Grupos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gruposFindFirstArgs} args - Arguments to find a Grupos
     * @example
     * // Get one Grupos
     * const grupos = await prisma.grupos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends gruposFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, gruposFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'grupos'> extends True ? Prisma__gruposClient<$Types.GetResult<gruposPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__gruposClient<$Types.GetResult<gruposPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Grupos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gruposFindFirstOrThrowArgs} args - Arguments to find a Grupos
     * @example
     * // Get one Grupos
     * const grupos = await prisma.grupos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends gruposFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gruposFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__gruposClient<$Types.GetResult<gruposPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Grupos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gruposFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grupos
     * const grupos = await prisma.grupos.findMany()
     * 
     * // Get first 10 Grupos
     * const grupos = await prisma.grupos.findMany({ take: 10 })
     * 
     * // Only select the `CODIGO`
     * const gruposWithCODIGOOnly = await prisma.grupos.findMany({ select: { CODIGO: true } })
     * 
    **/
    findMany<T extends gruposFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gruposFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<gruposPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Grupos.
     * @param {gruposCreateArgs} args - Arguments to create a Grupos.
     * @example
     * // Create one Grupos
     * const Grupos = await prisma.grupos.create({
     *   data: {
     *     // ... data to create a Grupos
     *   }
     * })
     * 
    **/
    create<T extends gruposCreateArgs<ExtArgs>>(
      args: SelectSubset<T, gruposCreateArgs<ExtArgs>>
    ): Prisma__gruposClient<$Types.GetResult<gruposPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Grupos.
     *     @param {gruposCreateManyArgs} args - Arguments to create many Grupos.
     *     @example
     *     // Create many Grupos
     *     const grupos = await prisma.grupos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends gruposCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gruposCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Grupos.
     * @param {gruposDeleteArgs} args - Arguments to delete one Grupos.
     * @example
     * // Delete one Grupos
     * const Grupos = await prisma.grupos.delete({
     *   where: {
     *     // ... filter to delete one Grupos
     *   }
     * })
     * 
    **/
    delete<T extends gruposDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, gruposDeleteArgs<ExtArgs>>
    ): Prisma__gruposClient<$Types.GetResult<gruposPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Grupos.
     * @param {gruposUpdateArgs} args - Arguments to update one Grupos.
     * @example
     * // Update one Grupos
     * const grupos = await prisma.grupos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends gruposUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, gruposUpdateArgs<ExtArgs>>
    ): Prisma__gruposClient<$Types.GetResult<gruposPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Grupos.
     * @param {gruposDeleteManyArgs} args - Arguments to filter Grupos to delete.
     * @example
     * // Delete a few Grupos
     * const { count } = await prisma.grupos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends gruposDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gruposDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gruposUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grupos
     * const grupos = await prisma.grupos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends gruposUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, gruposUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Grupos.
     * @param {gruposUpsertArgs} args - Arguments to update or create a Grupos.
     * @example
     * // Update or create a Grupos
     * const grupos = await prisma.grupos.upsert({
     *   create: {
     *     // ... data to create a Grupos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grupos we want to update
     *   }
     * })
    **/
    upsert<T extends gruposUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, gruposUpsertArgs<ExtArgs>>
    ): Prisma__gruposClient<$Types.GetResult<gruposPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gruposCountArgs} args - Arguments to filter Grupos to count.
     * @example
     * // Count the number of Grupos
     * const count = await prisma.grupos.count({
     *   where: {
     *     // ... the filter for the Grupos we want to count
     *   }
     * })
    **/
    count<T extends gruposCountArgs>(
      args?: Subset<T, gruposCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GruposCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GruposAggregateArgs>(args: Subset<T, GruposAggregateArgs>): Prisma.PrismaPromise<GetGruposAggregateType<T>>

    /**
     * Group by Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gruposGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gruposGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gruposGroupByArgs['orderBy'] }
        : { orderBy?: gruposGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gruposGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGruposGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the grupos model
   */
  readonly fields: gruposFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for grupos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__gruposClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the grupos model
   */ 
  interface gruposFieldRefs {
    readonly CODIGO: FieldRef<"grupos", 'Int'>
    readonly DESCRIP: FieldRef<"grupos", 'String'>
    readonly IVA: FieldRef<"grupos", 'String'>
    readonly CUIT: FieldRef<"grupos", 'String'>
    readonly DOMICILIO: FieldRef<"grupos", 'String'>
    readonly ORDEN: FieldRef<"grupos", 'String'>
    readonly LIN_ALTA: FieldRef<"grupos", 'String'>
    readonly LIN_BAJA: FieldRef<"grupos", 'String'>
    readonly TOTALIZA: FieldRef<"grupos", 'Int'>
    readonly PAGINA: FieldRef<"grupos", 'Int'>
    readonly TITULO1: FieldRef<"grupos", 'String'>
    readonly TITULO2: FieldRef<"grupos", 'String'>
    readonly DIA: FieldRef<"grupos", 'Int'>
    readonly MES: FieldRef<"grupos", 'Int'>
    readonly ANO: FieldRef<"grupos", 'Int'>
    readonly SUCURSAL: FieldRef<"grupos", 'String'>
    readonly MARCA: FieldRef<"grupos", 'String'>
    readonly CONVENIO: FieldRef<"grupos", 'String'>
    readonly id: FieldRef<"grupos", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * grupos base type for findUnique actions
   */
  export type gruposFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupos
     */
    select?: gruposSelect<ExtArgs> | null
    /**
     * Filter, which grupos to fetch.
     */
    where: gruposWhereUniqueInput
  }

  /**
   * grupos findUnique
   */
  export interface gruposFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends gruposFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * grupos findUniqueOrThrow
   */
  export type gruposFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupos
     */
    select?: gruposSelect<ExtArgs> | null
    /**
     * Filter, which grupos to fetch.
     */
    where: gruposWhereUniqueInput
  }


  /**
   * grupos base type for findFirst actions
   */
  export type gruposFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupos
     */
    select?: gruposSelect<ExtArgs> | null
    /**
     * Filter, which grupos to fetch.
     */
    where?: gruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grupos to fetch.
     */
    orderBy?: gruposOrderByWithRelationInput | gruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grupos.
     */
    cursor?: gruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grupos.
     */
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }

  /**
   * grupos findFirst
   */
  export interface gruposFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends gruposFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * grupos findFirstOrThrow
   */
  export type gruposFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupos
     */
    select?: gruposSelect<ExtArgs> | null
    /**
     * Filter, which grupos to fetch.
     */
    where?: gruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grupos to fetch.
     */
    orderBy?: gruposOrderByWithRelationInput | gruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grupos.
     */
    cursor?: gruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grupos.
     */
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }


  /**
   * grupos findMany
   */
  export type gruposFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupos
     */
    select?: gruposSelect<ExtArgs> | null
    /**
     * Filter, which grupos to fetch.
     */
    where?: gruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grupos to fetch.
     */
    orderBy?: gruposOrderByWithRelationInput | gruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing grupos.
     */
    cursor?: gruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grupos.
     */
    skip?: number
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }


  /**
   * grupos create
   */
  export type gruposCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupos
     */
    select?: gruposSelect<ExtArgs> | null
    /**
     * The data needed to create a grupos.
     */
    data?: XOR<gruposCreateInput, gruposUncheckedCreateInput>
  }


  /**
   * grupos createMany
   */
  export type gruposCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many grupos.
     */
    data: gruposCreateManyInput | gruposCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * grupos update
   */
  export type gruposUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupos
     */
    select?: gruposSelect<ExtArgs> | null
    /**
     * The data needed to update a grupos.
     */
    data: XOR<gruposUpdateInput, gruposUncheckedUpdateInput>
    /**
     * Choose, which grupos to update.
     */
    where: gruposWhereUniqueInput
  }


  /**
   * grupos updateMany
   */
  export type gruposUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update grupos.
     */
    data: XOR<gruposUpdateManyMutationInput, gruposUncheckedUpdateManyInput>
    /**
     * Filter which grupos to update
     */
    where?: gruposWhereInput
  }


  /**
   * grupos upsert
   */
  export type gruposUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupos
     */
    select?: gruposSelect<ExtArgs> | null
    /**
     * The filter to search for the grupos to update in case it exists.
     */
    where: gruposWhereUniqueInput
    /**
     * In case the grupos found by the `where` argument doesn't exist, create a new grupos with this data.
     */
    create: XOR<gruposCreateInput, gruposUncheckedCreateInput>
    /**
     * In case the grupos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gruposUpdateInput, gruposUncheckedUpdateInput>
  }


  /**
   * grupos delete
   */
  export type gruposDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupos
     */
    select?: gruposSelect<ExtArgs> | null
    /**
     * Filter which grupos to delete.
     */
    where: gruposWhereUniqueInput
  }


  /**
   * grupos deleteMany
   */
  export type gruposDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which grupos to delete
     */
    where?: gruposWhereInput
  }


  /**
   * grupos without action
   */
  export type gruposArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grupos
     */
    select?: gruposSelect<ExtArgs> | null
  }



  /**
   * Model historia
   */


  export type AggregateHistoria = {
    _count: HistoriaCountAggregateOutputType | null
    _avg: HistoriaAvgAggregateOutputType | null
    _sum: HistoriaSumAggregateOutputType | null
    _min: HistoriaMinAggregateOutputType | null
    _max: HistoriaMaxAggregateOutputType | null
  }

  export type HistoriaAvgAggregateOutputType = {
    CONTRATO: number | null
    idhistoria: number | null
  }

  export type HistoriaSumAggregateOutputType = {
    CONTRATO: number | null
    idhistoria: number | null
  }

  export type HistoriaMinAggregateOutputType = {
    CONTRATO: number | null
    OPERADOR: string | null
    ACCION: string | null
    idhistoria: number | null
    FECHA: string | null
  }

  export type HistoriaMaxAggregateOutputType = {
    CONTRATO: number | null
    OPERADOR: string | null
    ACCION: string | null
    idhistoria: number | null
    FECHA: string | null
  }

  export type HistoriaCountAggregateOutputType = {
    CONTRATO: number
    OPERADOR: number
    ACCION: number
    idhistoria: number
    FECHA: number
    _all: number
  }


  export type HistoriaAvgAggregateInputType = {
    CONTRATO?: true
    idhistoria?: true
  }

  export type HistoriaSumAggregateInputType = {
    CONTRATO?: true
    idhistoria?: true
  }

  export type HistoriaMinAggregateInputType = {
    CONTRATO?: true
    OPERADOR?: true
    ACCION?: true
    idhistoria?: true
    FECHA?: true
  }

  export type HistoriaMaxAggregateInputType = {
    CONTRATO?: true
    OPERADOR?: true
    ACCION?: true
    idhistoria?: true
    FECHA?: true
  }

  export type HistoriaCountAggregateInputType = {
    CONTRATO?: true
    OPERADOR?: true
    ACCION?: true
    idhistoria?: true
    FECHA?: true
    _all?: true
  }

  export type HistoriaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which historia to aggregate.
     */
    where?: historiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historias to fetch.
     */
    orderBy?: historiaOrderByWithRelationInput | historiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historias
    **/
    _count?: true | HistoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoriaMaxAggregateInputType
  }

  export type GetHistoriaAggregateType<T extends HistoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoria[P]>
      : GetScalarType<T[P], AggregateHistoria[P]>
  }




  export type historiaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: historiaWhereInput
    orderBy?: historiaOrderByWithAggregationInput | historiaOrderByWithAggregationInput[]
    by: HistoriaScalarFieldEnum[] | HistoriaScalarFieldEnum
    having?: historiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoriaCountAggregateInputType | true
    _avg?: HistoriaAvgAggregateInputType
    _sum?: HistoriaSumAggregateInputType
    _min?: HistoriaMinAggregateInputType
    _max?: HistoriaMaxAggregateInputType
  }


  export type HistoriaGroupByOutputType = {
    CONTRATO: number | null
    OPERADOR: string | null
    ACCION: string | null
    idhistoria: number
    FECHA: string | null
    _count: HistoriaCountAggregateOutputType | null
    _avg: HistoriaAvgAggregateOutputType | null
    _sum: HistoriaSumAggregateOutputType | null
    _min: HistoriaMinAggregateOutputType | null
    _max: HistoriaMaxAggregateOutputType | null
  }

  type GetHistoriaGroupByPayload<T extends historiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoriaGroupByOutputType[P]>
            : GetScalarType<T[P], HistoriaGroupByOutputType[P]>
        }
      >
    >


  export type historiaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CONTRATO?: boolean
    OPERADOR?: boolean
    ACCION?: boolean
    idhistoria?: boolean
    FECHA?: boolean
  }, ExtArgs["result"]["historia"]>

  export type historiaSelectScalar = {
    CONTRATO?: boolean
    OPERADOR?: boolean
    ACCION?: boolean
    idhistoria?: boolean
    FECHA?: boolean
  }


  type historiaGetPayload<S extends boolean | null | undefined | historiaArgs> = $Types.GetResult<historiaPayload, S>

  type historiaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<historiaFindManyArgs, 'select' | 'include'> & {
      select?: HistoriaCountAggregateInputType | true
    }

  export interface historiaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historia'], meta: { name: 'historia' } }
    /**
     * Find zero or one Historia that matches the filter.
     * @param {historiaFindUniqueArgs} args - Arguments to find a Historia
     * @example
     * // Get one Historia
     * const historia = await prisma.historia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends historiaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, historiaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'historia'> extends True ? Prisma__historiaClient<$Types.GetResult<historiaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__historiaClient<$Types.GetResult<historiaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Historia that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {historiaFindUniqueOrThrowArgs} args - Arguments to find a Historia
     * @example
     * // Get one Historia
     * const historia = await prisma.historia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends historiaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, historiaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__historiaClient<$Types.GetResult<historiaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Historia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historiaFindFirstArgs} args - Arguments to find a Historia
     * @example
     * // Get one Historia
     * const historia = await prisma.historia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends historiaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, historiaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'historia'> extends True ? Prisma__historiaClient<$Types.GetResult<historiaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__historiaClient<$Types.GetResult<historiaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Historia that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historiaFindFirstOrThrowArgs} args - Arguments to find a Historia
     * @example
     * // Get one Historia
     * const historia = await prisma.historia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends historiaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, historiaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__historiaClient<$Types.GetResult<historiaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Historias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historiaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historias
     * const historias = await prisma.historia.findMany()
     * 
     * // Get first 10 Historias
     * const historias = await prisma.historia.findMany({ take: 10 })
     * 
     * // Only select the `CONTRATO`
     * const historiaWithCONTRATOOnly = await prisma.historia.findMany({ select: { CONTRATO: true } })
     * 
    **/
    findMany<T extends historiaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, historiaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<historiaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Historia.
     * @param {historiaCreateArgs} args - Arguments to create a Historia.
     * @example
     * // Create one Historia
     * const Historia = await prisma.historia.create({
     *   data: {
     *     // ... data to create a Historia
     *   }
     * })
     * 
    **/
    create<T extends historiaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, historiaCreateArgs<ExtArgs>>
    ): Prisma__historiaClient<$Types.GetResult<historiaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Historias.
     *     @param {historiaCreateManyArgs} args - Arguments to create many Historias.
     *     @example
     *     // Create many Historias
     *     const historia = await prisma.historia.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends historiaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, historiaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Historia.
     * @param {historiaDeleteArgs} args - Arguments to delete one Historia.
     * @example
     * // Delete one Historia
     * const Historia = await prisma.historia.delete({
     *   where: {
     *     // ... filter to delete one Historia
     *   }
     * })
     * 
    **/
    delete<T extends historiaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, historiaDeleteArgs<ExtArgs>>
    ): Prisma__historiaClient<$Types.GetResult<historiaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Historia.
     * @param {historiaUpdateArgs} args - Arguments to update one Historia.
     * @example
     * // Update one Historia
     * const historia = await prisma.historia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends historiaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, historiaUpdateArgs<ExtArgs>>
    ): Prisma__historiaClient<$Types.GetResult<historiaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Historias.
     * @param {historiaDeleteManyArgs} args - Arguments to filter Historias to delete.
     * @example
     * // Delete a few Historias
     * const { count } = await prisma.historia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends historiaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, historiaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historias
     * const historia = await prisma.historia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends historiaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, historiaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Historia.
     * @param {historiaUpsertArgs} args - Arguments to update or create a Historia.
     * @example
     * // Update or create a Historia
     * const historia = await prisma.historia.upsert({
     *   create: {
     *     // ... data to create a Historia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historia we want to update
     *   }
     * })
    **/
    upsert<T extends historiaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, historiaUpsertArgs<ExtArgs>>
    ): Prisma__historiaClient<$Types.GetResult<historiaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Historias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historiaCountArgs} args - Arguments to filter Historias to count.
     * @example
     * // Count the number of Historias
     * const count = await prisma.historia.count({
     *   where: {
     *     // ... the filter for the Historias we want to count
     *   }
     * })
    **/
    count<T extends historiaCountArgs>(
      args?: Subset<T, historiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoriaAggregateArgs>(args: Subset<T, HistoriaAggregateArgs>): Prisma.PrismaPromise<GetHistoriaAggregateType<T>>

    /**
     * Group by Historia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historiaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends historiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historiaGroupByArgs['orderBy'] }
        : { orderBy?: historiaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, historiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the historia model
   */
  readonly fields: historiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for historia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__historiaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the historia model
   */ 
  interface historiaFieldRefs {
    readonly CONTRATO: FieldRef<"historia", 'Int'>
    readonly OPERADOR: FieldRef<"historia", 'String'>
    readonly ACCION: FieldRef<"historia", 'String'>
    readonly idhistoria: FieldRef<"historia", 'Int'>
    readonly FECHA: FieldRef<"historia", 'String'>
  }
    

  // Custom InputTypes

  /**
   * historia base type for findUnique actions
   */
  export type historiaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historia
     */
    select?: historiaSelect<ExtArgs> | null
    /**
     * Filter, which historia to fetch.
     */
    where: historiaWhereUniqueInput
  }

  /**
   * historia findUnique
   */
  export interface historiaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends historiaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * historia findUniqueOrThrow
   */
  export type historiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historia
     */
    select?: historiaSelect<ExtArgs> | null
    /**
     * Filter, which historia to fetch.
     */
    where: historiaWhereUniqueInput
  }


  /**
   * historia base type for findFirst actions
   */
  export type historiaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historia
     */
    select?: historiaSelect<ExtArgs> | null
    /**
     * Filter, which historia to fetch.
     */
    where?: historiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historias to fetch.
     */
    orderBy?: historiaOrderByWithRelationInput | historiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historias.
     */
    cursor?: historiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historias.
     */
    distinct?: HistoriaScalarFieldEnum | HistoriaScalarFieldEnum[]
  }

  /**
   * historia findFirst
   */
  export interface historiaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends historiaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * historia findFirstOrThrow
   */
  export type historiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historia
     */
    select?: historiaSelect<ExtArgs> | null
    /**
     * Filter, which historia to fetch.
     */
    where?: historiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historias to fetch.
     */
    orderBy?: historiaOrderByWithRelationInput | historiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historias.
     */
    cursor?: historiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historias.
     */
    distinct?: HistoriaScalarFieldEnum | HistoriaScalarFieldEnum[]
  }


  /**
   * historia findMany
   */
  export type historiaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historia
     */
    select?: historiaSelect<ExtArgs> | null
    /**
     * Filter, which historias to fetch.
     */
    where?: historiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historias to fetch.
     */
    orderBy?: historiaOrderByWithRelationInput | historiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historias.
     */
    cursor?: historiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historias.
     */
    skip?: number
    distinct?: HistoriaScalarFieldEnum | HistoriaScalarFieldEnum[]
  }


  /**
   * historia create
   */
  export type historiaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historia
     */
    select?: historiaSelect<ExtArgs> | null
    /**
     * The data needed to create a historia.
     */
    data?: XOR<historiaCreateInput, historiaUncheckedCreateInput>
  }


  /**
   * historia createMany
   */
  export type historiaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historias.
     */
    data: historiaCreateManyInput | historiaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * historia update
   */
  export type historiaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historia
     */
    select?: historiaSelect<ExtArgs> | null
    /**
     * The data needed to update a historia.
     */
    data: XOR<historiaUpdateInput, historiaUncheckedUpdateInput>
    /**
     * Choose, which historia to update.
     */
    where: historiaWhereUniqueInput
  }


  /**
   * historia updateMany
   */
  export type historiaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historias.
     */
    data: XOR<historiaUpdateManyMutationInput, historiaUncheckedUpdateManyInput>
    /**
     * Filter which historias to update
     */
    where?: historiaWhereInput
  }


  /**
   * historia upsert
   */
  export type historiaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historia
     */
    select?: historiaSelect<ExtArgs> | null
    /**
     * The filter to search for the historia to update in case it exists.
     */
    where: historiaWhereUniqueInput
    /**
     * In case the historia found by the `where` argument doesn't exist, create a new historia with this data.
     */
    create: XOR<historiaCreateInput, historiaUncheckedCreateInput>
    /**
     * In case the historia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historiaUpdateInput, historiaUncheckedUpdateInput>
  }


  /**
   * historia delete
   */
  export type historiaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historia
     */
    select?: historiaSelect<ExtArgs> | null
    /**
     * Filter which historia to delete.
     */
    where: historiaWhereUniqueInput
  }


  /**
   * historia deleteMany
   */
  export type historiaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which historias to delete
     */
    where?: historiaWhereInput
  }


  /**
   * historia without action
   */
  export type historiaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historia
     */
    select?: historiaSelect<ExtArgs> | null
  }



  /**
   * Model localidad
   */


  export type AggregateLocalidad = {
    _count: LocalidadCountAggregateOutputType | null
    _avg: LocalidadAvgAggregateOutputType | null
    _sum: LocalidadSumAggregateOutputType | null
    _min: LocalidadMinAggregateOutputType | null
    _max: LocalidadMaxAggregateOutputType | null
  }

  export type LocalidadAvgAggregateOutputType = {
    CODIGO: number | null
    idlocalidad: number | null
  }

  export type LocalidadSumAggregateOutputType = {
    CODIGO: number | null
    idlocalidad: number | null
  }

  export type LocalidadMinAggregateOutputType = {
    CODIGO: number | null
    DETALLE: string | null
    idlocalidad: number | null
  }

  export type LocalidadMaxAggregateOutputType = {
    CODIGO: number | null
    DETALLE: string | null
    idlocalidad: number | null
  }

  export type LocalidadCountAggregateOutputType = {
    CODIGO: number
    DETALLE: number
    idlocalidad: number
    _all: number
  }


  export type LocalidadAvgAggregateInputType = {
    CODIGO?: true
    idlocalidad?: true
  }

  export type LocalidadSumAggregateInputType = {
    CODIGO?: true
    idlocalidad?: true
  }

  export type LocalidadMinAggregateInputType = {
    CODIGO?: true
    DETALLE?: true
    idlocalidad?: true
  }

  export type LocalidadMaxAggregateInputType = {
    CODIGO?: true
    DETALLE?: true
    idlocalidad?: true
  }

  export type LocalidadCountAggregateInputType = {
    CODIGO?: true
    DETALLE?: true
    idlocalidad?: true
    _all?: true
  }

  export type LocalidadAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which localidad to aggregate.
     */
    where?: localidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of localidads to fetch.
     */
    orderBy?: localidadOrderByWithRelationInput | localidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: localidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` localidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` localidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned localidads
    **/
    _count?: true | LocalidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalidadMaxAggregateInputType
  }

  export type GetLocalidadAggregateType<T extends LocalidadAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalidad[P]>
      : GetScalarType<T[P], AggregateLocalidad[P]>
  }




  export type localidadGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: localidadWhereInput
    orderBy?: localidadOrderByWithAggregationInput | localidadOrderByWithAggregationInput[]
    by: LocalidadScalarFieldEnum[] | LocalidadScalarFieldEnum
    having?: localidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalidadCountAggregateInputType | true
    _avg?: LocalidadAvgAggregateInputType
    _sum?: LocalidadSumAggregateInputType
    _min?: LocalidadMinAggregateInputType
    _max?: LocalidadMaxAggregateInputType
  }


  export type LocalidadGroupByOutputType = {
    CODIGO: number | null
    DETALLE: string | null
    idlocalidad: number
    _count: LocalidadCountAggregateOutputType | null
    _avg: LocalidadAvgAggregateOutputType | null
    _sum: LocalidadSumAggregateOutputType | null
    _min: LocalidadMinAggregateOutputType | null
    _max: LocalidadMaxAggregateOutputType | null
  }

  type GetLocalidadGroupByPayload<T extends localidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalidadGroupByOutputType[P]>
            : GetScalarType<T[P], LocalidadGroupByOutputType[P]>
        }
      >
    >


  export type localidadSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CODIGO?: boolean
    DETALLE?: boolean
    idlocalidad?: boolean
  }, ExtArgs["result"]["localidad"]>

  export type localidadSelectScalar = {
    CODIGO?: boolean
    DETALLE?: boolean
    idlocalidad?: boolean
  }


  type localidadGetPayload<S extends boolean | null | undefined | localidadArgs> = $Types.GetResult<localidadPayload, S>

  type localidadCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<localidadFindManyArgs, 'select' | 'include'> & {
      select?: LocalidadCountAggregateInputType | true
    }

  export interface localidadDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['localidad'], meta: { name: 'localidad' } }
    /**
     * Find zero or one Localidad that matches the filter.
     * @param {localidadFindUniqueArgs} args - Arguments to find a Localidad
     * @example
     * // Get one Localidad
     * const localidad = await prisma.localidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends localidadFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, localidadFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'localidad'> extends True ? Prisma__localidadClient<$Types.GetResult<localidadPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__localidadClient<$Types.GetResult<localidadPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Localidad that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {localidadFindUniqueOrThrowArgs} args - Arguments to find a Localidad
     * @example
     * // Get one Localidad
     * const localidad = await prisma.localidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends localidadFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, localidadFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__localidadClient<$Types.GetResult<localidadPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Localidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {localidadFindFirstArgs} args - Arguments to find a Localidad
     * @example
     * // Get one Localidad
     * const localidad = await prisma.localidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends localidadFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, localidadFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'localidad'> extends True ? Prisma__localidadClient<$Types.GetResult<localidadPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__localidadClient<$Types.GetResult<localidadPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Localidad that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {localidadFindFirstOrThrowArgs} args - Arguments to find a Localidad
     * @example
     * // Get one Localidad
     * const localidad = await prisma.localidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends localidadFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, localidadFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__localidadClient<$Types.GetResult<localidadPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Localidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {localidadFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localidads
     * const localidads = await prisma.localidad.findMany()
     * 
     * // Get first 10 Localidads
     * const localidads = await prisma.localidad.findMany({ take: 10 })
     * 
     * // Only select the `CODIGO`
     * const localidadWithCODIGOOnly = await prisma.localidad.findMany({ select: { CODIGO: true } })
     * 
    **/
    findMany<T extends localidadFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, localidadFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<localidadPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Localidad.
     * @param {localidadCreateArgs} args - Arguments to create a Localidad.
     * @example
     * // Create one Localidad
     * const Localidad = await prisma.localidad.create({
     *   data: {
     *     // ... data to create a Localidad
     *   }
     * })
     * 
    **/
    create<T extends localidadCreateArgs<ExtArgs>>(
      args: SelectSubset<T, localidadCreateArgs<ExtArgs>>
    ): Prisma__localidadClient<$Types.GetResult<localidadPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Localidads.
     *     @param {localidadCreateManyArgs} args - Arguments to create many Localidads.
     *     @example
     *     // Create many Localidads
     *     const localidad = await prisma.localidad.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends localidadCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, localidadCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Localidad.
     * @param {localidadDeleteArgs} args - Arguments to delete one Localidad.
     * @example
     * // Delete one Localidad
     * const Localidad = await prisma.localidad.delete({
     *   where: {
     *     // ... filter to delete one Localidad
     *   }
     * })
     * 
    **/
    delete<T extends localidadDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, localidadDeleteArgs<ExtArgs>>
    ): Prisma__localidadClient<$Types.GetResult<localidadPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Localidad.
     * @param {localidadUpdateArgs} args - Arguments to update one Localidad.
     * @example
     * // Update one Localidad
     * const localidad = await prisma.localidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends localidadUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, localidadUpdateArgs<ExtArgs>>
    ): Prisma__localidadClient<$Types.GetResult<localidadPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Localidads.
     * @param {localidadDeleteManyArgs} args - Arguments to filter Localidads to delete.
     * @example
     * // Delete a few Localidads
     * const { count } = await prisma.localidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends localidadDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, localidadDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {localidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localidads
     * const localidad = await prisma.localidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends localidadUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, localidadUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Localidad.
     * @param {localidadUpsertArgs} args - Arguments to update or create a Localidad.
     * @example
     * // Update or create a Localidad
     * const localidad = await prisma.localidad.upsert({
     *   create: {
     *     // ... data to create a Localidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localidad we want to update
     *   }
     * })
    **/
    upsert<T extends localidadUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, localidadUpsertArgs<ExtArgs>>
    ): Prisma__localidadClient<$Types.GetResult<localidadPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Localidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {localidadCountArgs} args - Arguments to filter Localidads to count.
     * @example
     * // Count the number of Localidads
     * const count = await prisma.localidad.count({
     *   where: {
     *     // ... the filter for the Localidads we want to count
     *   }
     * })
    **/
    count<T extends localidadCountArgs>(
      args?: Subset<T, localidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalidadAggregateArgs>(args: Subset<T, LocalidadAggregateArgs>): Prisma.PrismaPromise<GetLocalidadAggregateType<T>>

    /**
     * Group by Localidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {localidadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends localidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: localidadGroupByArgs['orderBy'] }
        : { orderBy?: localidadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, localidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the localidad model
   */
  readonly fields: localidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for localidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__localidadClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the localidad model
   */ 
  interface localidadFieldRefs {
    readonly CODIGO: FieldRef<"localidad", 'Int'>
    readonly DETALLE: FieldRef<"localidad", 'String'>
    readonly idlocalidad: FieldRef<"localidad", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * localidad base type for findUnique actions
   */
  export type localidadFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localidad
     */
    select?: localidadSelect<ExtArgs> | null
    /**
     * Filter, which localidad to fetch.
     */
    where: localidadWhereUniqueInput
  }

  /**
   * localidad findUnique
   */
  export interface localidadFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends localidadFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * localidad findUniqueOrThrow
   */
  export type localidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localidad
     */
    select?: localidadSelect<ExtArgs> | null
    /**
     * Filter, which localidad to fetch.
     */
    where: localidadWhereUniqueInput
  }


  /**
   * localidad base type for findFirst actions
   */
  export type localidadFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localidad
     */
    select?: localidadSelect<ExtArgs> | null
    /**
     * Filter, which localidad to fetch.
     */
    where?: localidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of localidads to fetch.
     */
    orderBy?: localidadOrderByWithRelationInput | localidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for localidads.
     */
    cursor?: localidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` localidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` localidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of localidads.
     */
    distinct?: LocalidadScalarFieldEnum | LocalidadScalarFieldEnum[]
  }

  /**
   * localidad findFirst
   */
  export interface localidadFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends localidadFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * localidad findFirstOrThrow
   */
  export type localidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localidad
     */
    select?: localidadSelect<ExtArgs> | null
    /**
     * Filter, which localidad to fetch.
     */
    where?: localidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of localidads to fetch.
     */
    orderBy?: localidadOrderByWithRelationInput | localidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for localidads.
     */
    cursor?: localidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` localidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` localidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of localidads.
     */
    distinct?: LocalidadScalarFieldEnum | LocalidadScalarFieldEnum[]
  }


  /**
   * localidad findMany
   */
  export type localidadFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localidad
     */
    select?: localidadSelect<ExtArgs> | null
    /**
     * Filter, which localidads to fetch.
     */
    where?: localidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of localidads to fetch.
     */
    orderBy?: localidadOrderByWithRelationInput | localidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing localidads.
     */
    cursor?: localidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` localidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` localidads.
     */
    skip?: number
    distinct?: LocalidadScalarFieldEnum | LocalidadScalarFieldEnum[]
  }


  /**
   * localidad create
   */
  export type localidadCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localidad
     */
    select?: localidadSelect<ExtArgs> | null
    /**
     * The data needed to create a localidad.
     */
    data?: XOR<localidadCreateInput, localidadUncheckedCreateInput>
  }


  /**
   * localidad createMany
   */
  export type localidadCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many localidads.
     */
    data: localidadCreateManyInput | localidadCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * localidad update
   */
  export type localidadUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localidad
     */
    select?: localidadSelect<ExtArgs> | null
    /**
     * The data needed to update a localidad.
     */
    data: XOR<localidadUpdateInput, localidadUncheckedUpdateInput>
    /**
     * Choose, which localidad to update.
     */
    where: localidadWhereUniqueInput
  }


  /**
   * localidad updateMany
   */
  export type localidadUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update localidads.
     */
    data: XOR<localidadUpdateManyMutationInput, localidadUncheckedUpdateManyInput>
    /**
     * Filter which localidads to update
     */
    where?: localidadWhereInput
  }


  /**
   * localidad upsert
   */
  export type localidadUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localidad
     */
    select?: localidadSelect<ExtArgs> | null
    /**
     * The filter to search for the localidad to update in case it exists.
     */
    where: localidadWhereUniqueInput
    /**
     * In case the localidad found by the `where` argument doesn't exist, create a new localidad with this data.
     */
    create: XOR<localidadCreateInput, localidadUncheckedCreateInput>
    /**
     * In case the localidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<localidadUpdateInput, localidadUncheckedUpdateInput>
  }


  /**
   * localidad delete
   */
  export type localidadDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localidad
     */
    select?: localidadSelect<ExtArgs> | null
    /**
     * Filter which localidad to delete.
     */
    where: localidadWhereUniqueInput
  }


  /**
   * localidad deleteMany
   */
  export type localidadDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which localidads to delete
     */
    where?: localidadWhereInput
  }


  /**
   * localidad without action
   */
  export type localidadArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the localidad
     */
    select?: localidadSelect<ExtArgs> | null
  }



  /**
   * Model maestro
   */


  export type AggregateMaestro = {
    _count: MaestroCountAggregateOutputType | null
    _avg: MaestroAvgAggregateOutputType | null
    _sum: MaestroSumAggregateOutputType | null
    _min: MaestroMinAggregateOutputType | null
    _max: MaestroMaxAggregateOutputType | null
  }

  export type MaestroAvgAggregateOutputType = {
    idmaestro: number | null
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    ZONA: number | null
    GRUPO: number | null
    ADHERENTES: number | null
    OBRA_SOC: number | null
    PRODUCTOR: number | null
    EDAD: number | null
    COD_POST: number | null
    EDAD_PROM: number | null
  }

  export type MaestroSumAggregateOutputType = {
    idmaestro: number | null
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    ZONA: number | null
    GRUPO: number | null
    ADHERENTES: number | null
    OBRA_SOC: number | null
    PRODUCTOR: number | null
    EDAD: number | null
    COD_POST: number | null
    EDAD_PROM: number | null
  }

  export type MaestroMinAggregateOutputType = {
    idmaestro: number | null
    ESTADO: boolean | null
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    CALLE: string | null
    LOCALIDAD: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    DOMI_COBR: string | null
    DOM_LAB: string | null
    ZONA: number | null
    ALTA: Date | null
    VIGENCIA: Date | null
    GRUPO: number | null
    SEXO: string | null
    ADHERENTES: number | null
    OPERADOR: string | null
    OBRA_SOC: number | null
    PRODUCTOR: number | null
    PLAN: string | null
    EMPRESA: string | null
    EDAD: number | null
    COD_POST: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD_PROM: number | null
    MAIL: string | null
  }

  export type MaestroMaxAggregateOutputType = {
    idmaestro: number | null
    ESTADO: boolean | null
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    CALLE: string | null
    LOCALIDAD: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    DOMI_COBR: string | null
    DOM_LAB: string | null
    ZONA: number | null
    ALTA: Date | null
    VIGENCIA: Date | null
    GRUPO: number | null
    SEXO: string | null
    ADHERENTES: number | null
    OPERADOR: string | null
    OBRA_SOC: number | null
    PRODUCTOR: number | null
    PLAN: string | null
    EMPRESA: string | null
    EDAD: number | null
    COD_POST: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD_PROM: number | null
    MAIL: string | null
  }

  export type MaestroCountAggregateOutputType = {
    idmaestro: number
    ESTADO: number
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    NACIMIENTO: number
    CALLE: number
    LOCALIDAD: number
    NRO_CALLE: number
    BARRIO: number
    DOMI_COBR: number
    DOM_LAB: number
    ZONA: number
    ALTA: number
    VIGENCIA: number
    GRUPO: number
    SEXO: number
    ADHERENTES: number
    OPERADOR: number
    OBRA_SOC: number
    PRODUCTOR: number
    PLAN: number
    EMPRESA: number
    EDAD: number
    COD_POST: number
    TELEFONO: number
    MOVIL: number
    EDAD_PROM: number
    MAIL: number
    _all: number
  }


  export type MaestroAvgAggregateInputType = {
    idmaestro?: true
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    ZONA?: true
    GRUPO?: true
    ADHERENTES?: true
    OBRA_SOC?: true
    PRODUCTOR?: true
    EDAD?: true
    COD_POST?: true
    EDAD_PROM?: true
  }

  export type MaestroSumAggregateInputType = {
    idmaestro?: true
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    ZONA?: true
    GRUPO?: true
    ADHERENTES?: true
    OBRA_SOC?: true
    PRODUCTOR?: true
    EDAD?: true
    COD_POST?: true
    EDAD_PROM?: true
  }

  export type MaestroMinAggregateInputType = {
    idmaestro?: true
    ESTADO?: true
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    NACIMIENTO?: true
    CALLE?: true
    LOCALIDAD?: true
    NRO_CALLE?: true
    BARRIO?: true
    DOMI_COBR?: true
    DOM_LAB?: true
    ZONA?: true
    ALTA?: true
    VIGENCIA?: true
    GRUPO?: true
    SEXO?: true
    ADHERENTES?: true
    OPERADOR?: true
    OBRA_SOC?: true
    PRODUCTOR?: true
    PLAN?: true
    EMPRESA?: true
    EDAD?: true
    COD_POST?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD_PROM?: true
    MAIL?: true
  }

  export type MaestroMaxAggregateInputType = {
    idmaestro?: true
    ESTADO?: true
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    NACIMIENTO?: true
    CALLE?: true
    LOCALIDAD?: true
    NRO_CALLE?: true
    BARRIO?: true
    DOMI_COBR?: true
    DOM_LAB?: true
    ZONA?: true
    ALTA?: true
    VIGENCIA?: true
    GRUPO?: true
    SEXO?: true
    ADHERENTES?: true
    OPERADOR?: true
    OBRA_SOC?: true
    PRODUCTOR?: true
    PLAN?: true
    EMPRESA?: true
    EDAD?: true
    COD_POST?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD_PROM?: true
    MAIL?: true
  }

  export type MaestroCountAggregateInputType = {
    idmaestro?: true
    ESTADO?: true
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    NACIMIENTO?: true
    CALLE?: true
    LOCALIDAD?: true
    NRO_CALLE?: true
    BARRIO?: true
    DOMI_COBR?: true
    DOM_LAB?: true
    ZONA?: true
    ALTA?: true
    VIGENCIA?: true
    GRUPO?: true
    SEXO?: true
    ADHERENTES?: true
    OPERADOR?: true
    OBRA_SOC?: true
    PRODUCTOR?: true
    PLAN?: true
    EMPRESA?: true
    EDAD?: true
    COD_POST?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD_PROM?: true
    MAIL?: true
    _all?: true
  }

  export type MaestroAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which maestro to aggregate.
     */
    where?: maestroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maestros to fetch.
     */
    orderBy?: maestroOrderByWithRelationInput | maestroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: maestroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maestros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maestros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned maestros
    **/
    _count?: true | MaestroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaestroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaestroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaestroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaestroMaxAggregateInputType
  }

  export type GetMaestroAggregateType<T extends MaestroAggregateArgs> = {
        [P in keyof T & keyof AggregateMaestro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaestro[P]>
      : GetScalarType<T[P], AggregateMaestro[P]>
  }




  export type maestroGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: maestroWhereInput
    orderBy?: maestroOrderByWithAggregationInput | maestroOrderByWithAggregationInput[]
    by: MaestroScalarFieldEnum[] | MaestroScalarFieldEnum
    having?: maestroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaestroCountAggregateInputType | true
    _avg?: MaestroAvgAggregateInputType
    _sum?: MaestroSumAggregateInputType
    _min?: MaestroMinAggregateInputType
    _max?: MaestroMaxAggregateInputType
  }


  export type MaestroGroupByOutputType = {
    idmaestro: number
    ESTADO: boolean | null
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    CALLE: string | null
    LOCALIDAD: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    DOMI_COBR: string | null
    DOM_LAB: string | null
    ZONA: number | null
    ALTA: Date | null
    VIGENCIA: Date | null
    GRUPO: number | null
    SEXO: string | null
    ADHERENTES: number | null
    OPERADOR: string | null
    OBRA_SOC: number | null
    PRODUCTOR: number | null
    PLAN: string | null
    EMPRESA: string | null
    EDAD: number | null
    COD_POST: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD_PROM: number | null
    MAIL: string | null
    _count: MaestroCountAggregateOutputType | null
    _avg: MaestroAvgAggregateOutputType | null
    _sum: MaestroSumAggregateOutputType | null
    _min: MaestroMinAggregateOutputType | null
    _max: MaestroMaxAggregateOutputType | null
  }

  type GetMaestroGroupByPayload<T extends maestroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaestroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaestroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaestroGroupByOutputType[P]>
            : GetScalarType<T[P], MaestroGroupByOutputType[P]>
        }
      >
    >


  export type maestroSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmaestro?: boolean
    ESTADO?: boolean
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    NACIMIENTO?: boolean
    CALLE?: boolean
    LOCALIDAD?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    DOMI_COBR?: boolean
    DOM_LAB?: boolean
    ZONA?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    GRUPO?: boolean
    SEXO?: boolean
    ADHERENTES?: boolean
    OPERADOR?: boolean
    OBRA_SOC?: boolean
    PRODUCTOR?: boolean
    PLAN?: boolean
    EMPRESA?: boolean
    EDAD?: boolean
    COD_POST?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD_PROM?: boolean
    MAIL?: boolean
  }, ExtArgs["result"]["maestro"]>

  export type maestroSelectScalar = {
    idmaestro?: boolean
    ESTADO?: boolean
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    NACIMIENTO?: boolean
    CALLE?: boolean
    LOCALIDAD?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    DOMI_COBR?: boolean
    DOM_LAB?: boolean
    ZONA?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    GRUPO?: boolean
    SEXO?: boolean
    ADHERENTES?: boolean
    OPERADOR?: boolean
    OBRA_SOC?: boolean
    PRODUCTOR?: boolean
    PLAN?: boolean
    EMPRESA?: boolean
    EDAD?: boolean
    COD_POST?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD_PROM?: boolean
    MAIL?: boolean
  }


  type maestroGetPayload<S extends boolean | null | undefined | maestroArgs> = $Types.GetResult<maestroPayload, S>

  type maestroCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<maestroFindManyArgs, 'select' | 'include'> & {
      select?: MaestroCountAggregateInputType | true
    }

  export interface maestroDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['maestro'], meta: { name: 'maestro' } }
    /**
     * Find zero or one Maestro that matches the filter.
     * @param {maestroFindUniqueArgs} args - Arguments to find a Maestro
     * @example
     * // Get one Maestro
     * const maestro = await prisma.maestro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends maestroFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, maestroFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'maestro'> extends True ? Prisma__maestroClient<$Types.GetResult<maestroPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__maestroClient<$Types.GetResult<maestroPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Maestro that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {maestroFindUniqueOrThrowArgs} args - Arguments to find a Maestro
     * @example
     * // Get one Maestro
     * const maestro = await prisma.maestro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends maestroFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, maestroFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__maestroClient<$Types.GetResult<maestroPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Maestro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maestroFindFirstArgs} args - Arguments to find a Maestro
     * @example
     * // Get one Maestro
     * const maestro = await prisma.maestro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends maestroFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, maestroFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'maestro'> extends True ? Prisma__maestroClient<$Types.GetResult<maestroPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__maestroClient<$Types.GetResult<maestroPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Maestro that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maestroFindFirstOrThrowArgs} args - Arguments to find a Maestro
     * @example
     * // Get one Maestro
     * const maestro = await prisma.maestro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends maestroFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, maestroFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__maestroClient<$Types.GetResult<maestroPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Maestros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maestroFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maestros
     * const maestros = await prisma.maestro.findMany()
     * 
     * // Get first 10 Maestros
     * const maestros = await prisma.maestro.findMany({ take: 10 })
     * 
     * // Only select the `idmaestro`
     * const maestroWithIdmaestroOnly = await prisma.maestro.findMany({ select: { idmaestro: true } })
     * 
    **/
    findMany<T extends maestroFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maestroFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<maestroPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Maestro.
     * @param {maestroCreateArgs} args - Arguments to create a Maestro.
     * @example
     * // Create one Maestro
     * const Maestro = await prisma.maestro.create({
     *   data: {
     *     // ... data to create a Maestro
     *   }
     * })
     * 
    **/
    create<T extends maestroCreateArgs<ExtArgs>>(
      args: SelectSubset<T, maestroCreateArgs<ExtArgs>>
    ): Prisma__maestroClient<$Types.GetResult<maestroPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Maestros.
     *     @param {maestroCreateManyArgs} args - Arguments to create many Maestros.
     *     @example
     *     // Create many Maestros
     *     const maestro = await prisma.maestro.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends maestroCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maestroCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Maestro.
     * @param {maestroDeleteArgs} args - Arguments to delete one Maestro.
     * @example
     * // Delete one Maestro
     * const Maestro = await prisma.maestro.delete({
     *   where: {
     *     // ... filter to delete one Maestro
     *   }
     * })
     * 
    **/
    delete<T extends maestroDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, maestroDeleteArgs<ExtArgs>>
    ): Prisma__maestroClient<$Types.GetResult<maestroPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Maestro.
     * @param {maestroUpdateArgs} args - Arguments to update one Maestro.
     * @example
     * // Update one Maestro
     * const maestro = await prisma.maestro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends maestroUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, maestroUpdateArgs<ExtArgs>>
    ): Prisma__maestroClient<$Types.GetResult<maestroPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Maestros.
     * @param {maestroDeleteManyArgs} args - Arguments to filter Maestros to delete.
     * @example
     * // Delete a few Maestros
     * const { count } = await prisma.maestro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends maestroDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maestroDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maestros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maestroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maestros
     * const maestro = await prisma.maestro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends maestroUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, maestroUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maestro.
     * @param {maestroUpsertArgs} args - Arguments to update or create a Maestro.
     * @example
     * // Update or create a Maestro
     * const maestro = await prisma.maestro.upsert({
     *   create: {
     *     // ... data to create a Maestro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maestro we want to update
     *   }
     * })
    **/
    upsert<T extends maestroUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, maestroUpsertArgs<ExtArgs>>
    ): Prisma__maestroClient<$Types.GetResult<maestroPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Maestros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maestroCountArgs} args - Arguments to filter Maestros to count.
     * @example
     * // Count the number of Maestros
     * const count = await prisma.maestro.count({
     *   where: {
     *     // ... the filter for the Maestros we want to count
     *   }
     * })
    **/
    count<T extends maestroCountArgs>(
      args?: Subset<T, maestroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaestroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maestro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaestroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaestroAggregateArgs>(args: Subset<T, MaestroAggregateArgs>): Prisma.PrismaPromise<GetMaestroAggregateType<T>>

    /**
     * Group by Maestro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maestroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends maestroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: maestroGroupByArgs['orderBy'] }
        : { orderBy?: maestroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, maestroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaestroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the maestro model
   */
  readonly fields: maestroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for maestro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__maestroClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the maestro model
   */ 
  interface maestroFieldRefs {
    readonly idmaestro: FieldRef<"maestro", 'Int'>
    readonly ESTADO: FieldRef<"maestro", 'Boolean'>
    readonly SUCURSAL: FieldRef<"maestro", 'String'>
    readonly CONTRATO: FieldRef<"maestro", 'Int'>
    readonly NRO_DOC: FieldRef<"maestro", 'Int'>
    readonly APELLIDOS: FieldRef<"maestro", 'String'>
    readonly NOMBRES: FieldRef<"maestro", 'String'>
    readonly NACIMIENTO: FieldRef<"maestro", 'DateTime'>
    readonly CALLE: FieldRef<"maestro", 'String'>
    readonly LOCALIDAD: FieldRef<"maestro", 'String'>
    readonly NRO_CALLE: FieldRef<"maestro", 'Int'>
    readonly BARRIO: FieldRef<"maestro", 'String'>
    readonly DOMI_COBR: FieldRef<"maestro", 'String'>
    readonly DOM_LAB: FieldRef<"maestro", 'String'>
    readonly ZONA: FieldRef<"maestro", 'Int'>
    readonly ALTA: FieldRef<"maestro", 'DateTime'>
    readonly VIGENCIA: FieldRef<"maestro", 'DateTime'>
    readonly GRUPO: FieldRef<"maestro", 'Int'>
    readonly SEXO: FieldRef<"maestro", 'String'>
    readonly ADHERENTES: FieldRef<"maestro", 'Int'>
    readonly OPERADOR: FieldRef<"maestro", 'String'>
    readonly OBRA_SOC: FieldRef<"maestro", 'Int'>
    readonly PRODUCTOR: FieldRef<"maestro", 'Int'>
    readonly PLAN: FieldRef<"maestro", 'String'>
    readonly EMPRESA: FieldRef<"maestro", 'String'>
    readonly EDAD: FieldRef<"maestro", 'Int'>
    readonly COD_POST: FieldRef<"maestro", 'Int'>
    readonly TELEFONO: FieldRef<"maestro", 'String'>
    readonly MOVIL: FieldRef<"maestro", 'String'>
    readonly EDAD_PROM: FieldRef<"maestro", 'Float'>
    readonly MAIL: FieldRef<"maestro", 'String'>
  }
    

  // Custom InputTypes

  /**
   * maestro base type for findUnique actions
   */
  export type maestroFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro
     */
    select?: maestroSelect<ExtArgs> | null
    /**
     * Filter, which maestro to fetch.
     */
    where: maestroWhereUniqueInput
  }

  /**
   * maestro findUnique
   */
  export interface maestroFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends maestroFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * maestro findUniqueOrThrow
   */
  export type maestroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro
     */
    select?: maestroSelect<ExtArgs> | null
    /**
     * Filter, which maestro to fetch.
     */
    where: maestroWhereUniqueInput
  }


  /**
   * maestro base type for findFirst actions
   */
  export type maestroFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro
     */
    select?: maestroSelect<ExtArgs> | null
    /**
     * Filter, which maestro to fetch.
     */
    where?: maestroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maestros to fetch.
     */
    orderBy?: maestroOrderByWithRelationInput | maestroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maestros.
     */
    cursor?: maestroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maestros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maestros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maestros.
     */
    distinct?: MaestroScalarFieldEnum | MaestroScalarFieldEnum[]
  }

  /**
   * maestro findFirst
   */
  export interface maestroFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends maestroFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * maestro findFirstOrThrow
   */
  export type maestroFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro
     */
    select?: maestroSelect<ExtArgs> | null
    /**
     * Filter, which maestro to fetch.
     */
    where?: maestroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maestros to fetch.
     */
    orderBy?: maestroOrderByWithRelationInput | maestroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maestros.
     */
    cursor?: maestroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maestros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maestros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maestros.
     */
    distinct?: MaestroScalarFieldEnum | MaestroScalarFieldEnum[]
  }


  /**
   * maestro findMany
   */
  export type maestroFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro
     */
    select?: maestroSelect<ExtArgs> | null
    /**
     * Filter, which maestros to fetch.
     */
    where?: maestroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maestros to fetch.
     */
    orderBy?: maestroOrderByWithRelationInput | maestroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing maestros.
     */
    cursor?: maestroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maestros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maestros.
     */
    skip?: number
    distinct?: MaestroScalarFieldEnum | MaestroScalarFieldEnum[]
  }


  /**
   * maestro create
   */
  export type maestroCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro
     */
    select?: maestroSelect<ExtArgs> | null
    /**
     * The data needed to create a maestro.
     */
    data: XOR<maestroCreateInput, maestroUncheckedCreateInput>
  }


  /**
   * maestro createMany
   */
  export type maestroCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many maestros.
     */
    data: maestroCreateManyInput | maestroCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * maestro update
   */
  export type maestroUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro
     */
    select?: maestroSelect<ExtArgs> | null
    /**
     * The data needed to update a maestro.
     */
    data: XOR<maestroUpdateInput, maestroUncheckedUpdateInput>
    /**
     * Choose, which maestro to update.
     */
    where: maestroWhereUniqueInput
  }


  /**
   * maestro updateMany
   */
  export type maestroUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update maestros.
     */
    data: XOR<maestroUpdateManyMutationInput, maestroUncheckedUpdateManyInput>
    /**
     * Filter which maestros to update
     */
    where?: maestroWhereInput
  }


  /**
   * maestro upsert
   */
  export type maestroUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro
     */
    select?: maestroSelect<ExtArgs> | null
    /**
     * The filter to search for the maestro to update in case it exists.
     */
    where: maestroWhereUniqueInput
    /**
     * In case the maestro found by the `where` argument doesn't exist, create a new maestro with this data.
     */
    create: XOR<maestroCreateInput, maestroUncheckedCreateInput>
    /**
     * In case the maestro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<maestroUpdateInput, maestroUncheckedUpdateInput>
  }


  /**
   * maestro delete
   */
  export type maestroDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro
     */
    select?: maestroSelect<ExtArgs> | null
    /**
     * Filter which maestro to delete.
     */
    where: maestroWhereUniqueInput
  }


  /**
   * maestro deleteMany
   */
  export type maestroDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which maestros to delete
     */
    where?: maestroWhereInput
  }


  /**
   * maestro without action
   */
  export type maestroArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro
     */
    select?: maestroSelect<ExtArgs> | null
  }



  /**
   * Model obra_soc
   */


  export type AggregateObra_soc = {
    _count: Obra_socCountAggregateOutputType | null
    _avg: Obra_socAvgAggregateOutputType | null
    _sum: Obra_socSumAggregateOutputType | null
    _min: Obra_socMinAggregateOutputType | null
    _max: Obra_socMaxAggregateOutputType | null
  }

  export type Obra_socAvgAggregateOutputType = {
    CODIGO: number | null
    OPERADOR: number | null
    SUSPENDIDO: number | null
    id: number | null
  }

  export type Obra_socSumAggregateOutputType = {
    CODIGO: number | null
    OPERADOR: number | null
    SUSPENDIDO: number | null
    id: number | null
  }

  export type Obra_socMinAggregateOutputType = {
    CODIGO: number | null
    NOMBRE: string | null
    DETALLE: string | null
    DOMICILIO: string | null
    FECHA_SUSP: Date | null
    OPERADOR: number | null
    ACTUALIZA: string | null
    SUSPENDIDO: number | null
    id: number | null
  }

  export type Obra_socMaxAggregateOutputType = {
    CODIGO: number | null
    NOMBRE: string | null
    DETALLE: string | null
    DOMICILIO: string | null
    FECHA_SUSP: Date | null
    OPERADOR: number | null
    ACTUALIZA: string | null
    SUSPENDIDO: number | null
    id: number | null
  }

  export type Obra_socCountAggregateOutputType = {
    CODIGO: number
    NOMBRE: number
    DETALLE: number
    DOMICILIO: number
    FECHA_SUSP: number
    OPERADOR: number
    ACTUALIZA: number
    SUSPENDIDO: number
    id: number
    _all: number
  }


  export type Obra_socAvgAggregateInputType = {
    CODIGO?: true
    OPERADOR?: true
    SUSPENDIDO?: true
    id?: true
  }

  export type Obra_socSumAggregateInputType = {
    CODIGO?: true
    OPERADOR?: true
    SUSPENDIDO?: true
    id?: true
  }

  export type Obra_socMinAggregateInputType = {
    CODIGO?: true
    NOMBRE?: true
    DETALLE?: true
    DOMICILIO?: true
    FECHA_SUSP?: true
    OPERADOR?: true
    ACTUALIZA?: true
    SUSPENDIDO?: true
    id?: true
  }

  export type Obra_socMaxAggregateInputType = {
    CODIGO?: true
    NOMBRE?: true
    DETALLE?: true
    DOMICILIO?: true
    FECHA_SUSP?: true
    OPERADOR?: true
    ACTUALIZA?: true
    SUSPENDIDO?: true
    id?: true
  }

  export type Obra_socCountAggregateInputType = {
    CODIGO?: true
    NOMBRE?: true
    DETALLE?: true
    DOMICILIO?: true
    FECHA_SUSP?: true
    OPERADOR?: true
    ACTUALIZA?: true
    SUSPENDIDO?: true
    id?: true
    _all?: true
  }

  export type Obra_socAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which obra_soc to aggregate.
     */
    where?: obra_socWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of obra_socs to fetch.
     */
    orderBy?: obra_socOrderByWithRelationInput | obra_socOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: obra_socWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` obra_socs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` obra_socs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned obra_socs
    **/
    _count?: true | Obra_socCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Obra_socAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Obra_socSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Obra_socMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Obra_socMaxAggregateInputType
  }

  export type GetObra_socAggregateType<T extends Obra_socAggregateArgs> = {
        [P in keyof T & keyof AggregateObra_soc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObra_soc[P]>
      : GetScalarType<T[P], AggregateObra_soc[P]>
  }




  export type obra_socGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: obra_socWhereInput
    orderBy?: obra_socOrderByWithAggregationInput | obra_socOrderByWithAggregationInput[]
    by: Obra_socScalarFieldEnum[] | Obra_socScalarFieldEnum
    having?: obra_socScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Obra_socCountAggregateInputType | true
    _avg?: Obra_socAvgAggregateInputType
    _sum?: Obra_socSumAggregateInputType
    _min?: Obra_socMinAggregateInputType
    _max?: Obra_socMaxAggregateInputType
  }


  export type Obra_socGroupByOutputType = {
    CODIGO: number | null
    NOMBRE: string | null
    DETALLE: string | null
    DOMICILIO: string | null
    FECHA_SUSP: Date | null
    OPERADOR: number | null
    ACTUALIZA: string | null
    SUSPENDIDO: number | null
    id: number
    _count: Obra_socCountAggregateOutputType | null
    _avg: Obra_socAvgAggregateOutputType | null
    _sum: Obra_socSumAggregateOutputType | null
    _min: Obra_socMinAggregateOutputType | null
    _max: Obra_socMaxAggregateOutputType | null
  }

  type GetObra_socGroupByPayload<T extends obra_socGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Obra_socGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Obra_socGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Obra_socGroupByOutputType[P]>
            : GetScalarType<T[P], Obra_socGroupByOutputType[P]>
        }
      >
    >


  export type obra_socSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CODIGO?: boolean
    NOMBRE?: boolean
    DETALLE?: boolean
    DOMICILIO?: boolean
    FECHA_SUSP?: boolean
    OPERADOR?: boolean
    ACTUALIZA?: boolean
    SUSPENDIDO?: boolean
    id?: boolean
  }, ExtArgs["result"]["obra_soc"]>

  export type obra_socSelectScalar = {
    CODIGO?: boolean
    NOMBRE?: boolean
    DETALLE?: boolean
    DOMICILIO?: boolean
    FECHA_SUSP?: boolean
    OPERADOR?: boolean
    ACTUALIZA?: boolean
    SUSPENDIDO?: boolean
    id?: boolean
  }


  type obra_socGetPayload<S extends boolean | null | undefined | obra_socArgs> = $Types.GetResult<obra_socPayload, S>

  type obra_socCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<obra_socFindManyArgs, 'select' | 'include'> & {
      select?: Obra_socCountAggregateInputType | true
    }

  export interface obra_socDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['obra_soc'], meta: { name: 'obra_soc' } }
    /**
     * Find zero or one Obra_soc that matches the filter.
     * @param {obra_socFindUniqueArgs} args - Arguments to find a Obra_soc
     * @example
     * // Get one Obra_soc
     * const obra_soc = await prisma.obra_soc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends obra_socFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, obra_socFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'obra_soc'> extends True ? Prisma__obra_socClient<$Types.GetResult<obra_socPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__obra_socClient<$Types.GetResult<obra_socPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Obra_soc that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {obra_socFindUniqueOrThrowArgs} args - Arguments to find a Obra_soc
     * @example
     * // Get one Obra_soc
     * const obra_soc = await prisma.obra_soc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends obra_socFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, obra_socFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__obra_socClient<$Types.GetResult<obra_socPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Obra_soc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {obra_socFindFirstArgs} args - Arguments to find a Obra_soc
     * @example
     * // Get one Obra_soc
     * const obra_soc = await prisma.obra_soc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends obra_socFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, obra_socFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'obra_soc'> extends True ? Prisma__obra_socClient<$Types.GetResult<obra_socPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__obra_socClient<$Types.GetResult<obra_socPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Obra_soc that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {obra_socFindFirstOrThrowArgs} args - Arguments to find a Obra_soc
     * @example
     * // Get one Obra_soc
     * const obra_soc = await prisma.obra_soc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends obra_socFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, obra_socFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__obra_socClient<$Types.GetResult<obra_socPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Obra_socs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {obra_socFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Obra_socs
     * const obra_socs = await prisma.obra_soc.findMany()
     * 
     * // Get first 10 Obra_socs
     * const obra_socs = await prisma.obra_soc.findMany({ take: 10 })
     * 
     * // Only select the `CODIGO`
     * const obra_socWithCODIGOOnly = await prisma.obra_soc.findMany({ select: { CODIGO: true } })
     * 
    **/
    findMany<T extends obra_socFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, obra_socFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<obra_socPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Obra_soc.
     * @param {obra_socCreateArgs} args - Arguments to create a Obra_soc.
     * @example
     * // Create one Obra_soc
     * const Obra_soc = await prisma.obra_soc.create({
     *   data: {
     *     // ... data to create a Obra_soc
     *   }
     * })
     * 
    **/
    create<T extends obra_socCreateArgs<ExtArgs>>(
      args: SelectSubset<T, obra_socCreateArgs<ExtArgs>>
    ): Prisma__obra_socClient<$Types.GetResult<obra_socPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Obra_socs.
     *     @param {obra_socCreateManyArgs} args - Arguments to create many Obra_socs.
     *     @example
     *     // Create many Obra_socs
     *     const obra_soc = await prisma.obra_soc.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends obra_socCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, obra_socCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Obra_soc.
     * @param {obra_socDeleteArgs} args - Arguments to delete one Obra_soc.
     * @example
     * // Delete one Obra_soc
     * const Obra_soc = await prisma.obra_soc.delete({
     *   where: {
     *     // ... filter to delete one Obra_soc
     *   }
     * })
     * 
    **/
    delete<T extends obra_socDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, obra_socDeleteArgs<ExtArgs>>
    ): Prisma__obra_socClient<$Types.GetResult<obra_socPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Obra_soc.
     * @param {obra_socUpdateArgs} args - Arguments to update one Obra_soc.
     * @example
     * // Update one Obra_soc
     * const obra_soc = await prisma.obra_soc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends obra_socUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, obra_socUpdateArgs<ExtArgs>>
    ): Prisma__obra_socClient<$Types.GetResult<obra_socPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Obra_socs.
     * @param {obra_socDeleteManyArgs} args - Arguments to filter Obra_socs to delete.
     * @example
     * // Delete a few Obra_socs
     * const { count } = await prisma.obra_soc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends obra_socDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, obra_socDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obra_socs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {obra_socUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Obra_socs
     * const obra_soc = await prisma.obra_soc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends obra_socUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, obra_socUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Obra_soc.
     * @param {obra_socUpsertArgs} args - Arguments to update or create a Obra_soc.
     * @example
     * // Update or create a Obra_soc
     * const obra_soc = await prisma.obra_soc.upsert({
     *   create: {
     *     // ... data to create a Obra_soc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obra_soc we want to update
     *   }
     * })
    **/
    upsert<T extends obra_socUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, obra_socUpsertArgs<ExtArgs>>
    ): Prisma__obra_socClient<$Types.GetResult<obra_socPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Obra_socs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {obra_socCountArgs} args - Arguments to filter Obra_socs to count.
     * @example
     * // Count the number of Obra_socs
     * const count = await prisma.obra_soc.count({
     *   where: {
     *     // ... the filter for the Obra_socs we want to count
     *   }
     * })
    **/
    count<T extends obra_socCountArgs>(
      args?: Subset<T, obra_socCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Obra_socCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Obra_soc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Obra_socAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Obra_socAggregateArgs>(args: Subset<T, Obra_socAggregateArgs>): Prisma.PrismaPromise<GetObra_socAggregateType<T>>

    /**
     * Group by Obra_soc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {obra_socGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends obra_socGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: obra_socGroupByArgs['orderBy'] }
        : { orderBy?: obra_socGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, obra_socGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObra_socGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the obra_soc model
   */
  readonly fields: obra_socFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for obra_soc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__obra_socClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the obra_soc model
   */ 
  interface obra_socFieldRefs {
    readonly CODIGO: FieldRef<"obra_soc", 'Int'>
    readonly NOMBRE: FieldRef<"obra_soc", 'String'>
    readonly DETALLE: FieldRef<"obra_soc", 'String'>
    readonly DOMICILIO: FieldRef<"obra_soc", 'String'>
    readonly FECHA_SUSP: FieldRef<"obra_soc", 'DateTime'>
    readonly OPERADOR: FieldRef<"obra_soc", 'Int'>
    readonly ACTUALIZA: FieldRef<"obra_soc", 'String'>
    readonly SUSPENDIDO: FieldRef<"obra_soc", 'Int'>
    readonly id: FieldRef<"obra_soc", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * obra_soc base type for findUnique actions
   */
  export type obra_socFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obra_soc
     */
    select?: obra_socSelect<ExtArgs> | null
    /**
     * Filter, which obra_soc to fetch.
     */
    where: obra_socWhereUniqueInput
  }

  /**
   * obra_soc findUnique
   */
  export interface obra_socFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends obra_socFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * obra_soc findUniqueOrThrow
   */
  export type obra_socFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obra_soc
     */
    select?: obra_socSelect<ExtArgs> | null
    /**
     * Filter, which obra_soc to fetch.
     */
    where: obra_socWhereUniqueInput
  }


  /**
   * obra_soc base type for findFirst actions
   */
  export type obra_socFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obra_soc
     */
    select?: obra_socSelect<ExtArgs> | null
    /**
     * Filter, which obra_soc to fetch.
     */
    where?: obra_socWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of obra_socs to fetch.
     */
    orderBy?: obra_socOrderByWithRelationInput | obra_socOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for obra_socs.
     */
    cursor?: obra_socWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` obra_socs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` obra_socs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of obra_socs.
     */
    distinct?: Obra_socScalarFieldEnum | Obra_socScalarFieldEnum[]
  }

  /**
   * obra_soc findFirst
   */
  export interface obra_socFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends obra_socFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * obra_soc findFirstOrThrow
   */
  export type obra_socFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obra_soc
     */
    select?: obra_socSelect<ExtArgs> | null
    /**
     * Filter, which obra_soc to fetch.
     */
    where?: obra_socWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of obra_socs to fetch.
     */
    orderBy?: obra_socOrderByWithRelationInput | obra_socOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for obra_socs.
     */
    cursor?: obra_socWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` obra_socs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` obra_socs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of obra_socs.
     */
    distinct?: Obra_socScalarFieldEnum | Obra_socScalarFieldEnum[]
  }


  /**
   * obra_soc findMany
   */
  export type obra_socFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obra_soc
     */
    select?: obra_socSelect<ExtArgs> | null
    /**
     * Filter, which obra_socs to fetch.
     */
    where?: obra_socWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of obra_socs to fetch.
     */
    orderBy?: obra_socOrderByWithRelationInput | obra_socOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing obra_socs.
     */
    cursor?: obra_socWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` obra_socs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` obra_socs.
     */
    skip?: number
    distinct?: Obra_socScalarFieldEnum | Obra_socScalarFieldEnum[]
  }


  /**
   * obra_soc create
   */
  export type obra_socCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obra_soc
     */
    select?: obra_socSelect<ExtArgs> | null
    /**
     * The data needed to create a obra_soc.
     */
    data?: XOR<obra_socCreateInput, obra_socUncheckedCreateInput>
  }


  /**
   * obra_soc createMany
   */
  export type obra_socCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many obra_socs.
     */
    data: obra_socCreateManyInput | obra_socCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * obra_soc update
   */
  export type obra_socUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obra_soc
     */
    select?: obra_socSelect<ExtArgs> | null
    /**
     * The data needed to update a obra_soc.
     */
    data: XOR<obra_socUpdateInput, obra_socUncheckedUpdateInput>
    /**
     * Choose, which obra_soc to update.
     */
    where: obra_socWhereUniqueInput
  }


  /**
   * obra_soc updateMany
   */
  export type obra_socUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update obra_socs.
     */
    data: XOR<obra_socUpdateManyMutationInput, obra_socUncheckedUpdateManyInput>
    /**
     * Filter which obra_socs to update
     */
    where?: obra_socWhereInput
  }


  /**
   * obra_soc upsert
   */
  export type obra_socUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obra_soc
     */
    select?: obra_socSelect<ExtArgs> | null
    /**
     * The filter to search for the obra_soc to update in case it exists.
     */
    where: obra_socWhereUniqueInput
    /**
     * In case the obra_soc found by the `where` argument doesn't exist, create a new obra_soc with this data.
     */
    create: XOR<obra_socCreateInput, obra_socUncheckedCreateInput>
    /**
     * In case the obra_soc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<obra_socUpdateInput, obra_socUncheckedUpdateInput>
  }


  /**
   * obra_soc delete
   */
  export type obra_socDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obra_soc
     */
    select?: obra_socSelect<ExtArgs> | null
    /**
     * Filter which obra_soc to delete.
     */
    where: obra_socWhereUniqueInput
  }


  /**
   * obra_soc deleteMany
   */
  export type obra_socDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which obra_socs to delete
     */
    where?: obra_socWhereInput
  }


  /**
   * obra_soc without action
   */
  export type obra_socArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obra_soc
     */
    select?: obra_socSelect<ExtArgs> | null
  }



  /**
   * Model bajas
   */


  export type AggregateBajas = {
    _count: BajasCountAggregateOutputType | null
    _avg: BajasAvgAggregateOutputType | null
    _sum: BajasSumAggregateOutputType | null
    _min: BajasMinAggregateOutputType | null
    _max: BajasMaxAggregateOutputType | null
  }

  export type BajasAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    ZONA: number | null
    GRUPO: number | null
    ADHERENTES: number | null
    OPERADOR: number | null
    OBRA_SOC: number | null
    PRODUCTOR: number | null
    EDAD: number | null
    COD_POST: number | null
    EDAD_PROM: number | null
    idbaja: number | null
  }

  export type BajasSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_DOC: number | null
    NRO_CALLE: number | null
    ZONA: number | null
    GRUPO: number | null
    ADHERENTES: number | null
    OPERADOR: number | null
    OBRA_SOC: number | null
    PRODUCTOR: number | null
    EDAD: number | null
    COD_POST: number | null
    EDAD_PROM: number | null
    idbaja: number | null
  }

  export type BajasMinAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    CALLE: string | null
    LOCALIDAD: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    DOMI_COBR: string | null
    DOM_LAB: string | null
    ZONA: number | null
    ALTA: Date | null
    VIGENCIA: Date | null
    GRUPO: number | null
    SEXO: string | null
    ADHERENTES: number | null
    OPERADOR: number | null
    OBRA_SOC: number | null
    PRODUCTOR: number | null
    PLAN: string | null
    SUB_PLAN: string | null
    EMPRESA: string | null
    EDAD: number | null
    COD_POST: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD_PROM: number | null
    MAIL: string | null
    idbaja: number | null
    BAJA: Date | null
  }

  export type BajasMaxAggregateOutputType = {
    SUCURSAL: string | null
    CONTRATO: number | null
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    CALLE: string | null
    LOCALIDAD: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    DOMI_COBR: string | null
    DOM_LAB: string | null
    ZONA: number | null
    ALTA: Date | null
    VIGENCIA: Date | null
    GRUPO: number | null
    SEXO: string | null
    ADHERENTES: number | null
    OPERADOR: number | null
    OBRA_SOC: number | null
    PRODUCTOR: number | null
    PLAN: string | null
    SUB_PLAN: string | null
    EMPRESA: string | null
    EDAD: number | null
    COD_POST: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD_PROM: number | null
    MAIL: string | null
    idbaja: number | null
    BAJA: Date | null
  }

  export type BajasCountAggregateOutputType = {
    SUCURSAL: number
    CONTRATO: number
    NRO_DOC: number
    APELLIDOS: number
    NOMBRES: number
    NACIMIENTO: number
    CALLE: number
    LOCALIDAD: number
    NRO_CALLE: number
    BARRIO: number
    DOMI_COBR: number
    DOM_LAB: number
    ZONA: number
    ALTA: number
    VIGENCIA: number
    GRUPO: number
    SEXO: number
    ADHERENTES: number
    OPERADOR: number
    OBRA_SOC: number
    PRODUCTOR: number
    PLAN: number
    SUB_PLAN: number
    EMPRESA: number
    EDAD: number
    COD_POST: number
    TELEFONO: number
    MOVIL: number
    EDAD_PROM: number
    MAIL: number
    idbaja: number
    BAJA: number
    _all: number
  }


  export type BajasAvgAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    ZONA?: true
    GRUPO?: true
    ADHERENTES?: true
    OPERADOR?: true
    OBRA_SOC?: true
    PRODUCTOR?: true
    EDAD?: true
    COD_POST?: true
    EDAD_PROM?: true
    idbaja?: true
  }

  export type BajasSumAggregateInputType = {
    CONTRATO?: true
    NRO_DOC?: true
    NRO_CALLE?: true
    ZONA?: true
    GRUPO?: true
    ADHERENTES?: true
    OPERADOR?: true
    OBRA_SOC?: true
    PRODUCTOR?: true
    EDAD?: true
    COD_POST?: true
    EDAD_PROM?: true
    idbaja?: true
  }

  export type BajasMinAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    NACIMIENTO?: true
    CALLE?: true
    LOCALIDAD?: true
    NRO_CALLE?: true
    BARRIO?: true
    DOMI_COBR?: true
    DOM_LAB?: true
    ZONA?: true
    ALTA?: true
    VIGENCIA?: true
    GRUPO?: true
    SEXO?: true
    ADHERENTES?: true
    OPERADOR?: true
    OBRA_SOC?: true
    PRODUCTOR?: true
    PLAN?: true
    SUB_PLAN?: true
    EMPRESA?: true
    EDAD?: true
    COD_POST?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD_PROM?: true
    MAIL?: true
    idbaja?: true
    BAJA?: true
  }

  export type BajasMaxAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    NACIMIENTO?: true
    CALLE?: true
    LOCALIDAD?: true
    NRO_CALLE?: true
    BARRIO?: true
    DOMI_COBR?: true
    DOM_LAB?: true
    ZONA?: true
    ALTA?: true
    VIGENCIA?: true
    GRUPO?: true
    SEXO?: true
    ADHERENTES?: true
    OPERADOR?: true
    OBRA_SOC?: true
    PRODUCTOR?: true
    PLAN?: true
    SUB_PLAN?: true
    EMPRESA?: true
    EDAD?: true
    COD_POST?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD_PROM?: true
    MAIL?: true
    idbaja?: true
    BAJA?: true
  }

  export type BajasCountAggregateInputType = {
    SUCURSAL?: true
    CONTRATO?: true
    NRO_DOC?: true
    APELLIDOS?: true
    NOMBRES?: true
    NACIMIENTO?: true
    CALLE?: true
    LOCALIDAD?: true
    NRO_CALLE?: true
    BARRIO?: true
    DOMI_COBR?: true
    DOM_LAB?: true
    ZONA?: true
    ALTA?: true
    VIGENCIA?: true
    GRUPO?: true
    SEXO?: true
    ADHERENTES?: true
    OPERADOR?: true
    OBRA_SOC?: true
    PRODUCTOR?: true
    PLAN?: true
    SUB_PLAN?: true
    EMPRESA?: true
    EDAD?: true
    COD_POST?: true
    TELEFONO?: true
    MOVIL?: true
    EDAD_PROM?: true
    MAIL?: true
    idbaja?: true
    BAJA?: true
    _all?: true
  }

  export type BajasAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which bajas to aggregate.
     */
    where?: bajasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bajas to fetch.
     */
    orderBy?: bajasOrderByWithRelationInput | bajasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bajasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bajas
    **/
    _count?: true | BajasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BajasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BajasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BajasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BajasMaxAggregateInputType
  }

  export type GetBajasAggregateType<T extends BajasAggregateArgs> = {
        [P in keyof T & keyof AggregateBajas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBajas[P]>
      : GetScalarType<T[P], AggregateBajas[P]>
  }




  export type bajasGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: bajasWhereInput
    orderBy?: bajasOrderByWithAggregationInput | bajasOrderByWithAggregationInput[]
    by: BajasScalarFieldEnum[] | BajasScalarFieldEnum
    having?: bajasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BajasCountAggregateInputType | true
    _avg?: BajasAvgAggregateInputType
    _sum?: BajasSumAggregateInputType
    _min?: BajasMinAggregateInputType
    _max?: BajasMaxAggregateInputType
  }


  export type BajasGroupByOutputType = {
    SUCURSAL: string | null
    CONTRATO: number
    NRO_DOC: number | null
    APELLIDOS: string | null
    NOMBRES: string | null
    NACIMIENTO: Date | null
    CALLE: string | null
    LOCALIDAD: string | null
    NRO_CALLE: number | null
    BARRIO: string | null
    DOMI_COBR: string | null
    DOM_LAB: string | null
    ZONA: number | null
    ALTA: Date | null
    VIGENCIA: Date | null
    GRUPO: number | null
    SEXO: string | null
    ADHERENTES: number | null
    OPERADOR: number | null
    OBRA_SOC: number | null
    PRODUCTOR: number | null
    PLAN: string | null
    SUB_PLAN: string | null
    EMPRESA: string | null
    EDAD: number | null
    COD_POST: number | null
    TELEFONO: string | null
    MOVIL: string | null
    EDAD_PROM: number | null
    MAIL: string | null
    idbaja: number
    BAJA: Date | null
    _count: BajasCountAggregateOutputType | null
    _avg: BajasAvgAggregateOutputType | null
    _sum: BajasSumAggregateOutputType | null
    _min: BajasMinAggregateOutputType | null
    _max: BajasMaxAggregateOutputType | null
  }

  type GetBajasGroupByPayload<T extends bajasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BajasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BajasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BajasGroupByOutputType[P]>
            : GetScalarType<T[P], BajasGroupByOutputType[P]>
        }
      >
    >


  export type bajasSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    NACIMIENTO?: boolean
    CALLE?: boolean
    LOCALIDAD?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    DOMI_COBR?: boolean
    DOM_LAB?: boolean
    ZONA?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    GRUPO?: boolean
    SEXO?: boolean
    ADHERENTES?: boolean
    OPERADOR?: boolean
    OBRA_SOC?: boolean
    PRODUCTOR?: boolean
    PLAN?: boolean
    SUB_PLAN?: boolean
    EMPRESA?: boolean
    EDAD?: boolean
    COD_POST?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD_PROM?: boolean
    MAIL?: boolean
    idbaja?: boolean
    BAJA?: boolean
  }, ExtArgs["result"]["bajas"]>

  export type bajasSelectScalar = {
    SUCURSAL?: boolean
    CONTRATO?: boolean
    NRO_DOC?: boolean
    APELLIDOS?: boolean
    NOMBRES?: boolean
    NACIMIENTO?: boolean
    CALLE?: boolean
    LOCALIDAD?: boolean
    NRO_CALLE?: boolean
    BARRIO?: boolean
    DOMI_COBR?: boolean
    DOM_LAB?: boolean
    ZONA?: boolean
    ALTA?: boolean
    VIGENCIA?: boolean
    GRUPO?: boolean
    SEXO?: boolean
    ADHERENTES?: boolean
    OPERADOR?: boolean
    OBRA_SOC?: boolean
    PRODUCTOR?: boolean
    PLAN?: boolean
    SUB_PLAN?: boolean
    EMPRESA?: boolean
    EDAD?: boolean
    COD_POST?: boolean
    TELEFONO?: boolean
    MOVIL?: boolean
    EDAD_PROM?: boolean
    MAIL?: boolean
    idbaja?: boolean
    BAJA?: boolean
  }


  type bajasGetPayload<S extends boolean | null | undefined | bajasArgs> = $Types.GetResult<bajasPayload, S>

  type bajasCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<bajasFindManyArgs, 'select' | 'include'> & {
      select?: BajasCountAggregateInputType | true
    }

  export interface bajasDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bajas'], meta: { name: 'bajas' } }
    /**
     * Find zero or one Bajas that matches the filter.
     * @param {bajasFindUniqueArgs} args - Arguments to find a Bajas
     * @example
     * // Get one Bajas
     * const bajas = await prisma.bajas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends bajasFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, bajasFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'bajas'> extends True ? Prisma__bajasClient<$Types.GetResult<bajasPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__bajasClient<$Types.GetResult<bajasPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Bajas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {bajasFindUniqueOrThrowArgs} args - Arguments to find a Bajas
     * @example
     * // Get one Bajas
     * const bajas = await prisma.bajas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends bajasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bajasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__bajasClient<$Types.GetResult<bajasPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Bajas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bajasFindFirstArgs} args - Arguments to find a Bajas
     * @example
     * // Get one Bajas
     * const bajas = await prisma.bajas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends bajasFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, bajasFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'bajas'> extends True ? Prisma__bajasClient<$Types.GetResult<bajasPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__bajasClient<$Types.GetResult<bajasPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Bajas that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bajasFindFirstOrThrowArgs} args - Arguments to find a Bajas
     * @example
     * // Get one Bajas
     * const bajas = await prisma.bajas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends bajasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bajasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__bajasClient<$Types.GetResult<bajasPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Bajas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bajasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bajas
     * const bajas = await prisma.bajas.findMany()
     * 
     * // Get first 10 Bajas
     * const bajas = await prisma.bajas.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const bajasWithSUCURSALOnly = await prisma.bajas.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends bajasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bajasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<bajasPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Bajas.
     * @param {bajasCreateArgs} args - Arguments to create a Bajas.
     * @example
     * // Create one Bajas
     * const Bajas = await prisma.bajas.create({
     *   data: {
     *     // ... data to create a Bajas
     *   }
     * })
     * 
    **/
    create<T extends bajasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bajasCreateArgs<ExtArgs>>
    ): Prisma__bajasClient<$Types.GetResult<bajasPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Bajas.
     *     @param {bajasCreateManyArgs} args - Arguments to create many Bajas.
     *     @example
     *     // Create many Bajas
     *     const bajas = await prisma.bajas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends bajasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bajasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bajas.
     * @param {bajasDeleteArgs} args - Arguments to delete one Bajas.
     * @example
     * // Delete one Bajas
     * const Bajas = await prisma.bajas.delete({
     *   where: {
     *     // ... filter to delete one Bajas
     *   }
     * })
     * 
    **/
    delete<T extends bajasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bajasDeleteArgs<ExtArgs>>
    ): Prisma__bajasClient<$Types.GetResult<bajasPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Bajas.
     * @param {bajasUpdateArgs} args - Arguments to update one Bajas.
     * @example
     * // Update one Bajas
     * const bajas = await prisma.bajas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends bajasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bajasUpdateArgs<ExtArgs>>
    ): Prisma__bajasClient<$Types.GetResult<bajasPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Bajas.
     * @param {bajasDeleteManyArgs} args - Arguments to filter Bajas to delete.
     * @example
     * // Delete a few Bajas
     * const { count } = await prisma.bajas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends bajasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bajasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bajasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bajas
     * const bajas = await prisma.bajas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends bajasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bajasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bajas.
     * @param {bajasUpsertArgs} args - Arguments to update or create a Bajas.
     * @example
     * // Update or create a Bajas
     * const bajas = await prisma.bajas.upsert({
     *   create: {
     *     // ... data to create a Bajas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bajas we want to update
     *   }
     * })
    **/
    upsert<T extends bajasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bajasUpsertArgs<ExtArgs>>
    ): Prisma__bajasClient<$Types.GetResult<bajasPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Bajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bajasCountArgs} args - Arguments to filter Bajas to count.
     * @example
     * // Count the number of Bajas
     * const count = await prisma.bajas.count({
     *   where: {
     *     // ... the filter for the Bajas we want to count
     *   }
     * })
    **/
    count<T extends bajasCountArgs>(
      args?: Subset<T, bajasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BajasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BajasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BajasAggregateArgs>(args: Subset<T, BajasAggregateArgs>): Prisma.PrismaPromise<GetBajasAggregateType<T>>

    /**
     * Group by Bajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bajasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bajasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bajasGroupByArgs['orderBy'] }
        : { orderBy?: bajasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bajasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBajasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bajas model
   */
  readonly fields: bajasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bajas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__bajasClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the bajas model
   */ 
  interface bajasFieldRefs {
    readonly SUCURSAL: FieldRef<"bajas", 'String'>
    readonly CONTRATO: FieldRef<"bajas", 'Int'>
    readonly NRO_DOC: FieldRef<"bajas", 'Int'>
    readonly APELLIDOS: FieldRef<"bajas", 'String'>
    readonly NOMBRES: FieldRef<"bajas", 'String'>
    readonly NACIMIENTO: FieldRef<"bajas", 'DateTime'>
    readonly CALLE: FieldRef<"bajas", 'String'>
    readonly LOCALIDAD: FieldRef<"bajas", 'String'>
    readonly NRO_CALLE: FieldRef<"bajas", 'Int'>
    readonly BARRIO: FieldRef<"bajas", 'String'>
    readonly DOMI_COBR: FieldRef<"bajas", 'String'>
    readonly DOM_LAB: FieldRef<"bajas", 'String'>
    readonly ZONA: FieldRef<"bajas", 'Int'>
    readonly ALTA: FieldRef<"bajas", 'DateTime'>
    readonly VIGENCIA: FieldRef<"bajas", 'DateTime'>
    readonly GRUPO: FieldRef<"bajas", 'Int'>
    readonly SEXO: FieldRef<"bajas", 'String'>
    readonly ADHERENTES: FieldRef<"bajas", 'Int'>
    readonly OPERADOR: FieldRef<"bajas", 'Int'>
    readonly OBRA_SOC: FieldRef<"bajas", 'Int'>
    readonly PRODUCTOR: FieldRef<"bajas", 'Int'>
    readonly PLAN: FieldRef<"bajas", 'String'>
    readonly SUB_PLAN: FieldRef<"bajas", 'String'>
    readonly EMPRESA: FieldRef<"bajas", 'String'>
    readonly EDAD: FieldRef<"bajas", 'Int'>
    readonly COD_POST: FieldRef<"bajas", 'Int'>
    readonly TELEFONO: FieldRef<"bajas", 'String'>
    readonly MOVIL: FieldRef<"bajas", 'String'>
    readonly EDAD_PROM: FieldRef<"bajas", 'Float'>
    readonly MAIL: FieldRef<"bajas", 'String'>
    readonly idbaja: FieldRef<"bajas", 'Int'>
    readonly BAJA: FieldRef<"bajas", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * bajas base type for findUnique actions
   */
  export type bajasFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bajas
     */
    select?: bajasSelect<ExtArgs> | null
    /**
     * Filter, which bajas to fetch.
     */
    where: bajasWhereUniqueInput
  }

  /**
   * bajas findUnique
   */
  export interface bajasFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends bajasFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * bajas findUniqueOrThrow
   */
  export type bajasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bajas
     */
    select?: bajasSelect<ExtArgs> | null
    /**
     * Filter, which bajas to fetch.
     */
    where: bajasWhereUniqueInput
  }


  /**
   * bajas base type for findFirst actions
   */
  export type bajasFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bajas
     */
    select?: bajasSelect<ExtArgs> | null
    /**
     * Filter, which bajas to fetch.
     */
    where?: bajasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bajas to fetch.
     */
    orderBy?: bajasOrderByWithRelationInput | bajasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bajas.
     */
    cursor?: bajasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bajas.
     */
    distinct?: BajasScalarFieldEnum | BajasScalarFieldEnum[]
  }

  /**
   * bajas findFirst
   */
  export interface bajasFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends bajasFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * bajas findFirstOrThrow
   */
  export type bajasFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bajas
     */
    select?: bajasSelect<ExtArgs> | null
    /**
     * Filter, which bajas to fetch.
     */
    where?: bajasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bajas to fetch.
     */
    orderBy?: bajasOrderByWithRelationInput | bajasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bajas.
     */
    cursor?: bajasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bajas.
     */
    distinct?: BajasScalarFieldEnum | BajasScalarFieldEnum[]
  }


  /**
   * bajas findMany
   */
  export type bajasFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bajas
     */
    select?: bajasSelect<ExtArgs> | null
    /**
     * Filter, which bajas to fetch.
     */
    where?: bajasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bajas to fetch.
     */
    orderBy?: bajasOrderByWithRelationInput | bajasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bajas.
     */
    cursor?: bajasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bajas.
     */
    skip?: number
    distinct?: BajasScalarFieldEnum | BajasScalarFieldEnum[]
  }


  /**
   * bajas create
   */
  export type bajasCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bajas
     */
    select?: bajasSelect<ExtArgs> | null
    /**
     * The data needed to create a bajas.
     */
    data: XOR<bajasCreateInput, bajasUncheckedCreateInput>
  }


  /**
   * bajas createMany
   */
  export type bajasCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bajas.
     */
    data: bajasCreateManyInput | bajasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * bajas update
   */
  export type bajasUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bajas
     */
    select?: bajasSelect<ExtArgs> | null
    /**
     * The data needed to update a bajas.
     */
    data: XOR<bajasUpdateInput, bajasUncheckedUpdateInput>
    /**
     * Choose, which bajas to update.
     */
    where: bajasWhereUniqueInput
  }


  /**
   * bajas updateMany
   */
  export type bajasUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bajas.
     */
    data: XOR<bajasUpdateManyMutationInput, bajasUncheckedUpdateManyInput>
    /**
     * Filter which bajas to update
     */
    where?: bajasWhereInput
  }


  /**
   * bajas upsert
   */
  export type bajasUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bajas
     */
    select?: bajasSelect<ExtArgs> | null
    /**
     * The filter to search for the bajas to update in case it exists.
     */
    where: bajasWhereUniqueInput
    /**
     * In case the bajas found by the `where` argument doesn't exist, create a new bajas with this data.
     */
    create: XOR<bajasCreateInput, bajasUncheckedCreateInput>
    /**
     * In case the bajas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bajasUpdateInput, bajasUncheckedUpdateInput>
  }


  /**
   * bajas delete
   */
  export type bajasDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bajas
     */
    select?: bajasSelect<ExtArgs> | null
    /**
     * Filter which bajas to delete.
     */
    where: bajasWhereUniqueInput
  }


  /**
   * bajas deleteMany
   */
  export type bajasDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which bajas to delete
     */
    where?: bajasWhereInput
  }


  /**
   * bajas without action
   */
  export type bajasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bajas
     */
    select?: bajasSelect<ExtArgs> | null
  }



  /**
   * Model gestioncaso
   */


  export type AggregateGestioncaso = {
    _count: GestioncasoCountAggregateOutputType | null
    _avg: GestioncasoAvgAggregateOutputType | null
    _sum: GestioncasoSumAggregateOutputType | null
    _min: GestioncasoMinAggregateOutputType | null
    _max: GestioncasoMaxAggregateOutputType | null
  }

  export type GestioncasoAvgAggregateOutputType = {
    idgestion: number | null
    idcaso: number | null
    contrato: number | null
  }

  export type GestioncasoSumAggregateOutputType = {
    idgestion: number | null
    idcaso: number | null
    contrato: number | null
  }

  export type GestioncasoMinAggregateOutputType = {
    idgestion: number | null
    idcaso: number | null
    contrato: number | null
    operador: string | null
    accion: string | null
    observacion: string | null
    fechaaccion: string | null
    nuevaaccion: string | null
    fechanuevaaccion: string | null
    realizado: boolean | null
    observacion_nuevaaccion: string | null
  }

  export type GestioncasoMaxAggregateOutputType = {
    idgestion: number | null
    idcaso: number | null
    contrato: number | null
    operador: string | null
    accion: string | null
    observacion: string | null
    fechaaccion: string | null
    nuevaaccion: string | null
    fechanuevaaccion: string | null
    realizado: boolean | null
    observacion_nuevaaccion: string | null
  }

  export type GestioncasoCountAggregateOutputType = {
    idgestion: number
    idcaso: number
    contrato: number
    operador: number
    accion: number
    observacion: number
    fechaaccion: number
    nuevaaccion: number
    fechanuevaaccion: number
    realizado: number
    observacion_nuevaaccion: number
    _all: number
  }


  export type GestioncasoAvgAggregateInputType = {
    idgestion?: true
    idcaso?: true
    contrato?: true
  }

  export type GestioncasoSumAggregateInputType = {
    idgestion?: true
    idcaso?: true
    contrato?: true
  }

  export type GestioncasoMinAggregateInputType = {
    idgestion?: true
    idcaso?: true
    contrato?: true
    operador?: true
    accion?: true
    observacion?: true
    fechaaccion?: true
    nuevaaccion?: true
    fechanuevaaccion?: true
    realizado?: true
    observacion_nuevaaccion?: true
  }

  export type GestioncasoMaxAggregateInputType = {
    idgestion?: true
    idcaso?: true
    contrato?: true
    operador?: true
    accion?: true
    observacion?: true
    fechaaccion?: true
    nuevaaccion?: true
    fechanuevaaccion?: true
    realizado?: true
    observacion_nuevaaccion?: true
  }

  export type GestioncasoCountAggregateInputType = {
    idgestion?: true
    idcaso?: true
    contrato?: true
    operador?: true
    accion?: true
    observacion?: true
    fechaaccion?: true
    nuevaaccion?: true
    fechanuevaaccion?: true
    realizado?: true
    observacion_nuevaaccion?: true
    _all?: true
  }

  export type GestioncasoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which gestioncaso to aggregate.
     */
    where?: gestioncasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gestioncasos to fetch.
     */
    orderBy?: gestioncasoOrderByWithRelationInput | gestioncasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gestioncasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gestioncasos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gestioncasos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gestioncasos
    **/
    _count?: true | GestioncasoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GestioncasoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GestioncasoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GestioncasoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GestioncasoMaxAggregateInputType
  }

  export type GetGestioncasoAggregateType<T extends GestioncasoAggregateArgs> = {
        [P in keyof T & keyof AggregateGestioncaso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGestioncaso[P]>
      : GetScalarType<T[P], AggregateGestioncaso[P]>
  }




  export type gestioncasoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: gestioncasoWhereInput
    orderBy?: gestioncasoOrderByWithAggregationInput | gestioncasoOrderByWithAggregationInput[]
    by: GestioncasoScalarFieldEnum[] | GestioncasoScalarFieldEnum
    having?: gestioncasoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GestioncasoCountAggregateInputType | true
    _avg?: GestioncasoAvgAggregateInputType
    _sum?: GestioncasoSumAggregateInputType
    _min?: GestioncasoMinAggregateInputType
    _max?: GestioncasoMaxAggregateInputType
  }


  export type GestioncasoGroupByOutputType = {
    idgestion: number
    idcaso: number | null
    contrato: number | null
    operador: string | null
    accion: string | null
    observacion: string | null
    fechaaccion: string | null
    nuevaaccion: string | null
    fechanuevaaccion: string | null
    realizado: boolean | null
    observacion_nuevaaccion: string | null
    _count: GestioncasoCountAggregateOutputType | null
    _avg: GestioncasoAvgAggregateOutputType | null
    _sum: GestioncasoSumAggregateOutputType | null
    _min: GestioncasoMinAggregateOutputType | null
    _max: GestioncasoMaxAggregateOutputType | null
  }

  type GetGestioncasoGroupByPayload<T extends gestioncasoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GestioncasoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GestioncasoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GestioncasoGroupByOutputType[P]>
            : GetScalarType<T[P], GestioncasoGroupByOutputType[P]>
        }
      >
    >


  export type gestioncasoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idgestion?: boolean
    idcaso?: boolean
    contrato?: boolean
    operador?: boolean
    accion?: boolean
    observacion?: boolean
    fechaaccion?: boolean
    nuevaaccion?: boolean
    fechanuevaaccion?: boolean
    realizado?: boolean
    observacion_nuevaaccion?: boolean
  }, ExtArgs["result"]["gestioncaso"]>

  export type gestioncasoSelectScalar = {
    idgestion?: boolean
    idcaso?: boolean
    contrato?: boolean
    operador?: boolean
    accion?: boolean
    observacion?: boolean
    fechaaccion?: boolean
    nuevaaccion?: boolean
    fechanuevaaccion?: boolean
    realizado?: boolean
    observacion_nuevaaccion?: boolean
  }


  type gestioncasoGetPayload<S extends boolean | null | undefined | gestioncasoArgs> = $Types.GetResult<gestioncasoPayload, S>

  type gestioncasoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<gestioncasoFindManyArgs, 'select' | 'include'> & {
      select?: GestioncasoCountAggregateInputType | true
    }

  export interface gestioncasoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gestioncaso'], meta: { name: 'gestioncaso' } }
    /**
     * Find zero or one Gestioncaso that matches the filter.
     * @param {gestioncasoFindUniqueArgs} args - Arguments to find a Gestioncaso
     * @example
     * // Get one Gestioncaso
     * const gestioncaso = await prisma.gestioncaso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends gestioncasoFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, gestioncasoFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'gestioncaso'> extends True ? Prisma__gestioncasoClient<$Types.GetResult<gestioncasoPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__gestioncasoClient<$Types.GetResult<gestioncasoPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Gestioncaso that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {gestioncasoFindUniqueOrThrowArgs} args - Arguments to find a Gestioncaso
     * @example
     * // Get one Gestioncaso
     * const gestioncaso = await prisma.gestioncaso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends gestioncasoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gestioncasoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__gestioncasoClient<$Types.GetResult<gestioncasoPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Gestioncaso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gestioncasoFindFirstArgs} args - Arguments to find a Gestioncaso
     * @example
     * // Get one Gestioncaso
     * const gestioncaso = await prisma.gestioncaso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends gestioncasoFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, gestioncasoFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'gestioncaso'> extends True ? Prisma__gestioncasoClient<$Types.GetResult<gestioncasoPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__gestioncasoClient<$Types.GetResult<gestioncasoPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Gestioncaso that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gestioncasoFindFirstOrThrowArgs} args - Arguments to find a Gestioncaso
     * @example
     * // Get one Gestioncaso
     * const gestioncaso = await prisma.gestioncaso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends gestioncasoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gestioncasoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__gestioncasoClient<$Types.GetResult<gestioncasoPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Gestioncasos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gestioncasoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gestioncasos
     * const gestioncasos = await prisma.gestioncaso.findMany()
     * 
     * // Get first 10 Gestioncasos
     * const gestioncasos = await prisma.gestioncaso.findMany({ take: 10 })
     * 
     * // Only select the `idgestion`
     * const gestioncasoWithIdgestionOnly = await prisma.gestioncaso.findMany({ select: { idgestion: true } })
     * 
    **/
    findMany<T extends gestioncasoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gestioncasoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<gestioncasoPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Gestioncaso.
     * @param {gestioncasoCreateArgs} args - Arguments to create a Gestioncaso.
     * @example
     * // Create one Gestioncaso
     * const Gestioncaso = await prisma.gestioncaso.create({
     *   data: {
     *     // ... data to create a Gestioncaso
     *   }
     * })
     * 
    **/
    create<T extends gestioncasoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, gestioncasoCreateArgs<ExtArgs>>
    ): Prisma__gestioncasoClient<$Types.GetResult<gestioncasoPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Gestioncasos.
     *     @param {gestioncasoCreateManyArgs} args - Arguments to create many Gestioncasos.
     *     @example
     *     // Create many Gestioncasos
     *     const gestioncaso = await prisma.gestioncaso.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends gestioncasoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gestioncasoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gestioncaso.
     * @param {gestioncasoDeleteArgs} args - Arguments to delete one Gestioncaso.
     * @example
     * // Delete one Gestioncaso
     * const Gestioncaso = await prisma.gestioncaso.delete({
     *   where: {
     *     // ... filter to delete one Gestioncaso
     *   }
     * })
     * 
    **/
    delete<T extends gestioncasoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, gestioncasoDeleteArgs<ExtArgs>>
    ): Prisma__gestioncasoClient<$Types.GetResult<gestioncasoPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Gestioncaso.
     * @param {gestioncasoUpdateArgs} args - Arguments to update one Gestioncaso.
     * @example
     * // Update one Gestioncaso
     * const gestioncaso = await prisma.gestioncaso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends gestioncasoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, gestioncasoUpdateArgs<ExtArgs>>
    ): Prisma__gestioncasoClient<$Types.GetResult<gestioncasoPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Gestioncasos.
     * @param {gestioncasoDeleteManyArgs} args - Arguments to filter Gestioncasos to delete.
     * @example
     * // Delete a few Gestioncasos
     * const { count } = await prisma.gestioncaso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends gestioncasoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gestioncasoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gestioncasos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gestioncasoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gestioncasos
     * const gestioncaso = await prisma.gestioncaso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends gestioncasoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, gestioncasoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gestioncaso.
     * @param {gestioncasoUpsertArgs} args - Arguments to update or create a Gestioncaso.
     * @example
     * // Update or create a Gestioncaso
     * const gestioncaso = await prisma.gestioncaso.upsert({
     *   create: {
     *     // ... data to create a Gestioncaso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gestioncaso we want to update
     *   }
     * })
    **/
    upsert<T extends gestioncasoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, gestioncasoUpsertArgs<ExtArgs>>
    ): Prisma__gestioncasoClient<$Types.GetResult<gestioncasoPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Gestioncasos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gestioncasoCountArgs} args - Arguments to filter Gestioncasos to count.
     * @example
     * // Count the number of Gestioncasos
     * const count = await prisma.gestioncaso.count({
     *   where: {
     *     // ... the filter for the Gestioncasos we want to count
     *   }
     * })
    **/
    count<T extends gestioncasoCountArgs>(
      args?: Subset<T, gestioncasoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GestioncasoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gestioncaso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GestioncasoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GestioncasoAggregateArgs>(args: Subset<T, GestioncasoAggregateArgs>): Prisma.PrismaPromise<GetGestioncasoAggregateType<T>>

    /**
     * Group by Gestioncaso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gestioncasoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gestioncasoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gestioncasoGroupByArgs['orderBy'] }
        : { orderBy?: gestioncasoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gestioncasoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGestioncasoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gestioncaso model
   */
  readonly fields: gestioncasoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gestioncaso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__gestioncasoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the gestioncaso model
   */ 
  interface gestioncasoFieldRefs {
    readonly idgestion: FieldRef<"gestioncaso", 'Int'>
    readonly idcaso: FieldRef<"gestioncaso", 'Int'>
    readonly contrato: FieldRef<"gestioncaso", 'Int'>
    readonly operador: FieldRef<"gestioncaso", 'String'>
    readonly accion: FieldRef<"gestioncaso", 'String'>
    readonly observacion: FieldRef<"gestioncaso", 'String'>
    readonly fechaaccion: FieldRef<"gestioncaso", 'String'>
    readonly nuevaaccion: FieldRef<"gestioncaso", 'String'>
    readonly fechanuevaaccion: FieldRef<"gestioncaso", 'String'>
    readonly realizado: FieldRef<"gestioncaso", 'Boolean'>
    readonly observacion_nuevaaccion: FieldRef<"gestioncaso", 'String'>
  }
    

  // Custom InputTypes

  /**
   * gestioncaso base type for findUnique actions
   */
  export type gestioncasoFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestioncaso
     */
    select?: gestioncasoSelect<ExtArgs> | null
    /**
     * Filter, which gestioncaso to fetch.
     */
    where: gestioncasoWhereUniqueInput
  }

  /**
   * gestioncaso findUnique
   */
  export interface gestioncasoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends gestioncasoFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * gestioncaso findUniqueOrThrow
   */
  export type gestioncasoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestioncaso
     */
    select?: gestioncasoSelect<ExtArgs> | null
    /**
     * Filter, which gestioncaso to fetch.
     */
    where: gestioncasoWhereUniqueInput
  }


  /**
   * gestioncaso base type for findFirst actions
   */
  export type gestioncasoFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestioncaso
     */
    select?: gestioncasoSelect<ExtArgs> | null
    /**
     * Filter, which gestioncaso to fetch.
     */
    where?: gestioncasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gestioncasos to fetch.
     */
    orderBy?: gestioncasoOrderByWithRelationInput | gestioncasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gestioncasos.
     */
    cursor?: gestioncasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gestioncasos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gestioncasos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gestioncasos.
     */
    distinct?: GestioncasoScalarFieldEnum | GestioncasoScalarFieldEnum[]
  }

  /**
   * gestioncaso findFirst
   */
  export interface gestioncasoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends gestioncasoFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * gestioncaso findFirstOrThrow
   */
  export type gestioncasoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestioncaso
     */
    select?: gestioncasoSelect<ExtArgs> | null
    /**
     * Filter, which gestioncaso to fetch.
     */
    where?: gestioncasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gestioncasos to fetch.
     */
    orderBy?: gestioncasoOrderByWithRelationInput | gestioncasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gestioncasos.
     */
    cursor?: gestioncasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gestioncasos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gestioncasos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gestioncasos.
     */
    distinct?: GestioncasoScalarFieldEnum | GestioncasoScalarFieldEnum[]
  }


  /**
   * gestioncaso findMany
   */
  export type gestioncasoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestioncaso
     */
    select?: gestioncasoSelect<ExtArgs> | null
    /**
     * Filter, which gestioncasos to fetch.
     */
    where?: gestioncasoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gestioncasos to fetch.
     */
    orderBy?: gestioncasoOrderByWithRelationInput | gestioncasoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gestioncasos.
     */
    cursor?: gestioncasoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gestioncasos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gestioncasos.
     */
    skip?: number
    distinct?: GestioncasoScalarFieldEnum | GestioncasoScalarFieldEnum[]
  }


  /**
   * gestioncaso create
   */
  export type gestioncasoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestioncaso
     */
    select?: gestioncasoSelect<ExtArgs> | null
    /**
     * The data needed to create a gestioncaso.
     */
    data?: XOR<gestioncasoCreateInput, gestioncasoUncheckedCreateInput>
  }


  /**
   * gestioncaso createMany
   */
  export type gestioncasoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gestioncasos.
     */
    data: gestioncasoCreateManyInput | gestioncasoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * gestioncaso update
   */
  export type gestioncasoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestioncaso
     */
    select?: gestioncasoSelect<ExtArgs> | null
    /**
     * The data needed to update a gestioncaso.
     */
    data: XOR<gestioncasoUpdateInput, gestioncasoUncheckedUpdateInput>
    /**
     * Choose, which gestioncaso to update.
     */
    where: gestioncasoWhereUniqueInput
  }


  /**
   * gestioncaso updateMany
   */
  export type gestioncasoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gestioncasos.
     */
    data: XOR<gestioncasoUpdateManyMutationInput, gestioncasoUncheckedUpdateManyInput>
    /**
     * Filter which gestioncasos to update
     */
    where?: gestioncasoWhereInput
  }


  /**
   * gestioncaso upsert
   */
  export type gestioncasoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestioncaso
     */
    select?: gestioncasoSelect<ExtArgs> | null
    /**
     * The filter to search for the gestioncaso to update in case it exists.
     */
    where: gestioncasoWhereUniqueInput
    /**
     * In case the gestioncaso found by the `where` argument doesn't exist, create a new gestioncaso with this data.
     */
    create: XOR<gestioncasoCreateInput, gestioncasoUncheckedCreateInput>
    /**
     * In case the gestioncaso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gestioncasoUpdateInput, gestioncasoUncheckedUpdateInput>
  }


  /**
   * gestioncaso delete
   */
  export type gestioncasoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestioncaso
     */
    select?: gestioncasoSelect<ExtArgs> | null
    /**
     * Filter which gestioncaso to delete.
     */
    where: gestioncasoWhereUniqueInput
  }


  /**
   * gestioncaso deleteMany
   */
  export type gestioncasoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which gestioncasos to delete
     */
    where?: gestioncasoWhereInput
  }


  /**
   * gestioncaso without action
   */
  export type gestioncasoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestioncaso
     */
    select?: gestioncasoSelect<ExtArgs> | null
  }



  /**
   * Model pagos
   */


  export type AggregatePagos = {
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  export type PagosAvgAggregateOutputType = {
    CONTRATO: number | null
    NRO_RECIBO: number | null
    SERIE: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    PUESTO: number | null
    ZONA: number | null
    DNI: number | null
    RENDIDO: number | null
    id: number | null
  }

  export type PagosSumAggregateOutputType = {
    CONTRATO: number | null
    NRO_RECIBO: number | null
    SERIE: number | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    PUESTO: number | null
    ZONA: number | null
    DNI: number | null
    RENDIDO: number | null
    id: number | null
  }

  export type PagosMinAggregateOutputType = {
    CONTRATO: number | null
    NRO_RECIBO: number | null
    SERIE: number | null
    DIA_REN: Date | null
    DIA_CAR: Date | null
    DIA_EMI: Date | null
    DIA_PAG: Date | null
    HORA_CAR: string | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    MAN_COM: string | null
    MOVIM: string | null
    OPERADOR: string | null
    SUCURSAL: string | null
    PUESTO: number | null
    ZONA: number | null
    EMPRESA: string | null
    DNI: number | null
    RENDIDO: number | null
    FECHA_CAJA: string | null
    id: number | null
    MED_PAG: string | null
  }

  export type PagosMaxAggregateOutputType = {
    CONTRATO: number | null
    NRO_RECIBO: number | null
    SERIE: number | null
    DIA_REN: Date | null
    DIA_CAR: Date | null
    DIA_EMI: Date | null
    DIA_PAG: Date | null
    HORA_CAR: string | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    MAN_COM: string | null
    MOVIM: string | null
    OPERADOR: string | null
    SUCURSAL: string | null
    PUESTO: number | null
    ZONA: number | null
    EMPRESA: string | null
    DNI: number | null
    RENDIDO: number | null
    FECHA_CAJA: string | null
    id: number | null
    MED_PAG: string | null
  }

  export type PagosCountAggregateOutputType = {
    CONTRATO: number
    NRO_RECIBO: number
    SERIE: number
    DIA_REN: number
    DIA_CAR: number
    DIA_EMI: number
    DIA_PAG: number
    HORA_CAR: number
    MES: number
    ANO: number
    IMPORTE: number
    MAN_COM: number
    MOVIM: number
    OPERADOR: number
    SUCURSAL: number
    PUESTO: number
    ZONA: number
    EMPRESA: number
    DNI: number
    RENDIDO: number
    FECHA_CAJA: number
    id: number
    MED_PAG: number
    _all: number
  }


  export type PagosAvgAggregateInputType = {
    CONTRATO?: true
    NRO_RECIBO?: true
    SERIE?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    PUESTO?: true
    ZONA?: true
    DNI?: true
    RENDIDO?: true
    id?: true
  }

  export type PagosSumAggregateInputType = {
    CONTRATO?: true
    NRO_RECIBO?: true
    SERIE?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    PUESTO?: true
    ZONA?: true
    DNI?: true
    RENDIDO?: true
    id?: true
  }

  export type PagosMinAggregateInputType = {
    CONTRATO?: true
    NRO_RECIBO?: true
    SERIE?: true
    DIA_REN?: true
    DIA_CAR?: true
    DIA_EMI?: true
    DIA_PAG?: true
    HORA_CAR?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    MAN_COM?: true
    MOVIM?: true
    OPERADOR?: true
    SUCURSAL?: true
    PUESTO?: true
    ZONA?: true
    EMPRESA?: true
    DNI?: true
    RENDIDO?: true
    FECHA_CAJA?: true
    id?: true
    MED_PAG?: true
  }

  export type PagosMaxAggregateInputType = {
    CONTRATO?: true
    NRO_RECIBO?: true
    SERIE?: true
    DIA_REN?: true
    DIA_CAR?: true
    DIA_EMI?: true
    DIA_PAG?: true
    HORA_CAR?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    MAN_COM?: true
    MOVIM?: true
    OPERADOR?: true
    SUCURSAL?: true
    PUESTO?: true
    ZONA?: true
    EMPRESA?: true
    DNI?: true
    RENDIDO?: true
    FECHA_CAJA?: true
    id?: true
    MED_PAG?: true
  }

  export type PagosCountAggregateInputType = {
    CONTRATO?: true
    NRO_RECIBO?: true
    SERIE?: true
    DIA_REN?: true
    DIA_CAR?: true
    DIA_EMI?: true
    DIA_PAG?: true
    HORA_CAR?: true
    MES?: true
    ANO?: true
    IMPORTE?: true
    MAN_COM?: true
    MOVIM?: true
    OPERADOR?: true
    SUCURSAL?: true
    PUESTO?: true
    ZONA?: true
    EMPRESA?: true
    DNI?: true
    RENDIDO?: true
    FECHA_CAJA?: true
    id?: true
    MED_PAG?: true
    _all?: true
  }

  export type PagosAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagos to aggregate.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagos
    **/
    _count?: true | PagosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagosMaxAggregateInputType
  }

  export type GetPagosAggregateType<T extends PagosAggregateArgs> = {
        [P in keyof T & keyof AggregatePagos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagos[P]>
      : GetScalarType<T[P], AggregatePagos[P]>
  }




  export type pagosGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: pagosWhereInput
    orderBy?: pagosOrderByWithAggregationInput | pagosOrderByWithAggregationInput[]
    by: PagosScalarFieldEnum[] | PagosScalarFieldEnum
    having?: pagosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagosCountAggregateInputType | true
    _avg?: PagosAvgAggregateInputType
    _sum?: PagosSumAggregateInputType
    _min?: PagosMinAggregateInputType
    _max?: PagosMaxAggregateInputType
  }


  export type PagosGroupByOutputType = {
    CONTRATO: number | null
    NRO_RECIBO: number | null
    SERIE: number | null
    DIA_REN: Date | null
    DIA_CAR: Date | null
    DIA_EMI: Date | null
    DIA_PAG: Date | null
    HORA_CAR: string | null
    MES: number | null
    ANO: number | null
    IMPORTE: number | null
    MAN_COM: string | null
    MOVIM: string | null
    OPERADOR: string | null
    SUCURSAL: string | null
    PUESTO: number | null
    ZONA: number | null
    EMPRESA: string | null
    DNI: number | null
    RENDIDO: number | null
    FECHA_CAJA: string | null
    id: number
    MED_PAG: string | null
    _count: PagosCountAggregateOutputType | null
    _avg: PagosAvgAggregateOutputType | null
    _sum: PagosSumAggregateOutputType | null
    _min: PagosMinAggregateOutputType | null
    _max: PagosMaxAggregateOutputType | null
  }

  type GetPagosGroupByPayload<T extends pagosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagosGroupByOutputType[P]>
            : GetScalarType<T[P], PagosGroupByOutputType[P]>
        }
      >
    >


  export type pagosSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CONTRATO?: boolean
    NRO_RECIBO?: boolean
    SERIE?: boolean
    DIA_REN?: boolean
    DIA_CAR?: boolean
    DIA_EMI?: boolean
    DIA_PAG?: boolean
    HORA_CAR?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    MAN_COM?: boolean
    MOVIM?: boolean
    OPERADOR?: boolean
    SUCURSAL?: boolean
    PUESTO?: boolean
    ZONA?: boolean
    EMPRESA?: boolean
    DNI?: boolean
    RENDIDO?: boolean
    FECHA_CAJA?: boolean
    id?: boolean
    MED_PAG?: boolean
  }, ExtArgs["result"]["pagos"]>

  export type pagosSelectScalar = {
    CONTRATO?: boolean
    NRO_RECIBO?: boolean
    SERIE?: boolean
    DIA_REN?: boolean
    DIA_CAR?: boolean
    DIA_EMI?: boolean
    DIA_PAG?: boolean
    HORA_CAR?: boolean
    MES?: boolean
    ANO?: boolean
    IMPORTE?: boolean
    MAN_COM?: boolean
    MOVIM?: boolean
    OPERADOR?: boolean
    SUCURSAL?: boolean
    PUESTO?: boolean
    ZONA?: boolean
    EMPRESA?: boolean
    DNI?: boolean
    RENDIDO?: boolean
    FECHA_CAJA?: boolean
    id?: boolean
    MED_PAG?: boolean
  }


  type pagosGetPayload<S extends boolean | null | undefined | pagosArgs> = $Types.GetResult<pagosPayload, S>

  type pagosCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<pagosFindManyArgs, 'select' | 'include'> & {
      select?: PagosCountAggregateInputType | true
    }

  export interface pagosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pagos'], meta: { name: 'pagos' } }
    /**
     * Find zero or one Pagos that matches the filter.
     * @param {pagosFindUniqueArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pagosFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pagosFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pagos'> extends True ? Prisma__pagosClient<$Types.GetResult<pagosPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__pagosClient<$Types.GetResult<pagosPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Pagos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pagosFindUniqueOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pagosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pagosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__pagosClient<$Types.GetResult<pagosPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindFirstArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pagosFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pagosFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pagos'> extends True ? Prisma__pagosClient<$Types.GetResult<pagosPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__pagosClient<$Types.GetResult<pagosPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Pagos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindFirstOrThrowArgs} args - Arguments to find a Pagos
     * @example
     * // Get one Pagos
     * const pagos = await prisma.pagos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pagosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pagosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__pagosClient<$Types.GetResult<pagosPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pagos.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pagos.findMany({ take: 10 })
     * 
     * // Only select the `CONTRATO`
     * const pagosWithCONTRATOOnly = await prisma.pagos.findMany({ select: { CONTRATO: true } })
     * 
    **/
    findMany<T extends pagosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pagosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<pagosPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Pagos.
     * @param {pagosCreateArgs} args - Arguments to create a Pagos.
     * @example
     * // Create one Pagos
     * const Pagos = await prisma.pagos.create({
     *   data: {
     *     // ... data to create a Pagos
     *   }
     * })
     * 
    **/
    create<T extends pagosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, pagosCreateArgs<ExtArgs>>
    ): Prisma__pagosClient<$Types.GetResult<pagosPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Pagos.
     *     @param {pagosCreateManyArgs} args - Arguments to create many Pagos.
     *     @example
     *     // Create many Pagos
     *     const pagos = await prisma.pagos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pagosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pagosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pagos.
     * @param {pagosDeleteArgs} args - Arguments to delete one Pagos.
     * @example
     * // Delete one Pagos
     * const Pagos = await prisma.pagos.delete({
     *   where: {
     *     // ... filter to delete one Pagos
     *   }
     * })
     * 
    **/
    delete<T extends pagosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, pagosDeleteArgs<ExtArgs>>
    ): Prisma__pagosClient<$Types.GetResult<pagosPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Pagos.
     * @param {pagosUpdateArgs} args - Arguments to update one Pagos.
     * @example
     * // Update one Pagos
     * const pagos = await prisma.pagos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pagosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, pagosUpdateArgs<ExtArgs>>
    ): Prisma__pagosClient<$Types.GetResult<pagosPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Pagos.
     * @param {pagosDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pagos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pagosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pagosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pagos = await prisma.pagos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pagosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, pagosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pagos.
     * @param {pagosUpsertArgs} args - Arguments to update or create a Pagos.
     * @example
     * // Update or create a Pagos
     * const pagos = await prisma.pagos.upsert({
     *   create: {
     *     // ... data to create a Pagos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagos we want to update
     *   }
     * })
    **/
    upsert<T extends pagosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, pagosUpsertArgs<ExtArgs>>
    ): Prisma__pagosClient<$Types.GetResult<pagosPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pagos.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends pagosCountArgs>(
      args?: Subset<T, pagosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagosAggregateArgs>(args: Subset<T, PagosAggregateArgs>): Prisma.PrismaPromise<GetPagosAggregateType<T>>

    /**
     * Group by Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pagosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagosGroupByArgs['orderBy'] }
        : { orderBy?: pagosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pagosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pagos model
   */
  readonly fields: pagosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pagos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pagosClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the pagos model
   */ 
  interface pagosFieldRefs {
    readonly CONTRATO: FieldRef<"pagos", 'Int'>
    readonly NRO_RECIBO: FieldRef<"pagos", 'Int'>
    readonly SERIE: FieldRef<"pagos", 'Int'>
    readonly DIA_REN: FieldRef<"pagos", 'DateTime'>
    readonly DIA_CAR: FieldRef<"pagos", 'DateTime'>
    readonly DIA_EMI: FieldRef<"pagos", 'DateTime'>
    readonly DIA_PAG: FieldRef<"pagos", 'DateTime'>
    readonly HORA_CAR: FieldRef<"pagos", 'String'>
    readonly MES: FieldRef<"pagos", 'Int'>
    readonly ANO: FieldRef<"pagos", 'Int'>
    readonly IMPORTE: FieldRef<"pagos", 'Float'>
    readonly MAN_COM: FieldRef<"pagos", 'String'>
    readonly MOVIM: FieldRef<"pagos", 'String'>
    readonly OPERADOR: FieldRef<"pagos", 'String'>
    readonly SUCURSAL: FieldRef<"pagos", 'String'>
    readonly PUESTO: FieldRef<"pagos", 'Int'>
    readonly ZONA: FieldRef<"pagos", 'Int'>
    readonly EMPRESA: FieldRef<"pagos", 'String'>
    readonly DNI: FieldRef<"pagos", 'Int'>
    readonly RENDIDO: FieldRef<"pagos", 'Int'>
    readonly FECHA_CAJA: FieldRef<"pagos", 'String'>
    readonly id: FieldRef<"pagos", 'Int'>
    readonly MED_PAG: FieldRef<"pagos", 'String'>
  }
    

  // Custom InputTypes

  /**
   * pagos base type for findUnique actions
   */
  export type pagosFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where: pagosWhereUniqueInput
  }

  /**
   * pagos findUnique
   */
  export interface pagosFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends pagosFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pagos findUniqueOrThrow
   */
  export type pagosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where: pagosWhereUniqueInput
  }


  /**
   * pagos base type for findFirst actions
   */
  export type pagosFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }

  /**
   * pagos findFirst
   */
  export interface pagosFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends pagosFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pagos findFirstOrThrow
   */
  export type pagosFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagos.
     */
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }


  /**
   * pagos findMany
   */
  export type pagosFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Filter, which pagos to fetch.
     */
    where?: pagosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagos to fetch.
     */
    orderBy?: pagosOrderByWithRelationInput | pagosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagos.
     */
    cursor?: pagosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagos.
     */
    skip?: number
    distinct?: PagosScalarFieldEnum | PagosScalarFieldEnum[]
  }


  /**
   * pagos create
   */
  export type pagosCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * The data needed to create a pagos.
     */
    data?: XOR<pagosCreateInput, pagosUncheckedCreateInput>
  }


  /**
   * pagos createMany
   */
  export type pagosCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagos.
     */
    data: pagosCreateManyInput | pagosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * pagos update
   */
  export type pagosUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * The data needed to update a pagos.
     */
    data: XOR<pagosUpdateInput, pagosUncheckedUpdateInput>
    /**
     * Choose, which pagos to update.
     */
    where: pagosWhereUniqueInput
  }


  /**
   * pagos updateMany
   */
  export type pagosUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagos.
     */
    data: XOR<pagosUpdateManyMutationInput, pagosUncheckedUpdateManyInput>
    /**
     * Filter which pagos to update
     */
    where?: pagosWhereInput
  }


  /**
   * pagos upsert
   */
  export type pagosUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * The filter to search for the pagos to update in case it exists.
     */
    where: pagosWhereUniqueInput
    /**
     * In case the pagos found by the `where` argument doesn't exist, create a new pagos with this data.
     */
    create: XOR<pagosCreateInput, pagosUncheckedCreateInput>
    /**
     * In case the pagos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagosUpdateInput, pagosUncheckedUpdateInput>
  }


  /**
   * pagos delete
   */
  export type pagosDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
    /**
     * Filter which pagos to delete.
     */
    where: pagosWhereUniqueInput
  }


  /**
   * pagos deleteMany
   */
  export type pagosDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagos to delete
     */
    where?: pagosWhereInput
  }


  /**
   * pagos without action
   */
  export type pagosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagos
     */
    select?: pagosSelect<ExtArgs> | null
  }



  /**
   * Model pago_bco
   */


  export type AggregatePago_bco = {
    _count: Pago_bcoCountAggregateOutputType | null
    _avg: Pago_bcoAvgAggregateOutputType | null
    _sum: Pago_bcoSumAggregateOutputType | null
    _min: Pago_bcoMinAggregateOutputType | null
    _max: Pago_bcoMaxAggregateOutputType | null
  }

  export type Pago_bcoAvgAggregateOutputType = {
    NRO_DOC: number | null
    CONTRATO: number | null
    IMPORTE: number | null
    MES: number | null
    ANO: number | null
    SEGURO: number | null
    id: number | null
  }

  export type Pago_bcoSumAggregateOutputType = {
    NRO_DOC: number | null
    CONTRATO: number | null
    IMPORTE: number | null
    MES: number | null
    ANO: number | null
    SEGURO: number | null
    id: number | null
  }

  export type Pago_bcoMinAggregateOutputType = {
    NRO_DOC: number | null
    CONTRATO: number | null
    COD_SUC: string | null
    NRO_CTA: string | null
    FEC_ACR: string | null
    IMPORTE: number | null
    MARCA: string | null
    MES: number | null
    ANO: number | null
    DIA_PAGO: Date | null
    SUCURSAL: string | null
    SEGURO: number | null
    id: number | null
  }

  export type Pago_bcoMaxAggregateOutputType = {
    NRO_DOC: number | null
    CONTRATO: number | null
    COD_SUC: string | null
    NRO_CTA: string | null
    FEC_ACR: string | null
    IMPORTE: number | null
    MARCA: string | null
    MES: number | null
    ANO: number | null
    DIA_PAGO: Date | null
    SUCURSAL: string | null
    SEGURO: number | null
    id: number | null
  }

  export type Pago_bcoCountAggregateOutputType = {
    NRO_DOC: number
    CONTRATO: number
    COD_SUC: number
    NRO_CTA: number
    FEC_ACR: number
    IMPORTE: number
    MARCA: number
    MES: number
    ANO: number
    DIA_PAGO: number
    SUCURSAL: number
    SEGURO: number
    id: number
    _all: number
  }


  export type Pago_bcoAvgAggregateInputType = {
    NRO_DOC?: true
    CONTRATO?: true
    IMPORTE?: true
    MES?: true
    ANO?: true
    SEGURO?: true
    id?: true
  }

  export type Pago_bcoSumAggregateInputType = {
    NRO_DOC?: true
    CONTRATO?: true
    IMPORTE?: true
    MES?: true
    ANO?: true
    SEGURO?: true
    id?: true
  }

  export type Pago_bcoMinAggregateInputType = {
    NRO_DOC?: true
    CONTRATO?: true
    COD_SUC?: true
    NRO_CTA?: true
    FEC_ACR?: true
    IMPORTE?: true
    MARCA?: true
    MES?: true
    ANO?: true
    DIA_PAGO?: true
    SUCURSAL?: true
    SEGURO?: true
    id?: true
  }

  export type Pago_bcoMaxAggregateInputType = {
    NRO_DOC?: true
    CONTRATO?: true
    COD_SUC?: true
    NRO_CTA?: true
    FEC_ACR?: true
    IMPORTE?: true
    MARCA?: true
    MES?: true
    ANO?: true
    DIA_PAGO?: true
    SUCURSAL?: true
    SEGURO?: true
    id?: true
  }

  export type Pago_bcoCountAggregateInputType = {
    NRO_DOC?: true
    CONTRATO?: true
    COD_SUC?: true
    NRO_CTA?: true
    FEC_ACR?: true
    IMPORTE?: true
    MARCA?: true
    MES?: true
    ANO?: true
    DIA_PAGO?: true
    SUCURSAL?: true
    SEGURO?: true
    id?: true
    _all?: true
  }

  export type Pago_bcoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which pago_bco to aggregate.
     */
    where?: pago_bcoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pago_bcos to fetch.
     */
    orderBy?: pago_bcoOrderByWithRelationInput | pago_bcoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pago_bcoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pago_bcos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pago_bcos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pago_bcos
    **/
    _count?: true | Pago_bcoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pago_bcoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pago_bcoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pago_bcoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pago_bcoMaxAggregateInputType
  }

  export type GetPago_bcoAggregateType<T extends Pago_bcoAggregateArgs> = {
        [P in keyof T & keyof AggregatePago_bco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePago_bco[P]>
      : GetScalarType<T[P], AggregatePago_bco[P]>
  }




  export type pago_bcoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: pago_bcoWhereInput
    orderBy?: pago_bcoOrderByWithAggregationInput | pago_bcoOrderByWithAggregationInput[]
    by: Pago_bcoScalarFieldEnum[] | Pago_bcoScalarFieldEnum
    having?: pago_bcoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pago_bcoCountAggregateInputType | true
    _avg?: Pago_bcoAvgAggregateInputType
    _sum?: Pago_bcoSumAggregateInputType
    _min?: Pago_bcoMinAggregateInputType
    _max?: Pago_bcoMaxAggregateInputType
  }


  export type Pago_bcoGroupByOutputType = {
    NRO_DOC: number | null
    CONTRATO: number | null
    COD_SUC: string | null
    NRO_CTA: string | null
    FEC_ACR: string | null
    IMPORTE: number | null
    MARCA: string | null
    MES: number | null
    ANO: number | null
    DIA_PAGO: Date | null
    SUCURSAL: string | null
    SEGURO: number | null
    id: number
    _count: Pago_bcoCountAggregateOutputType | null
    _avg: Pago_bcoAvgAggregateOutputType | null
    _sum: Pago_bcoSumAggregateOutputType | null
    _min: Pago_bcoMinAggregateOutputType | null
    _max: Pago_bcoMaxAggregateOutputType | null
  }

  type GetPago_bcoGroupByPayload<T extends pago_bcoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pago_bcoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pago_bcoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pago_bcoGroupByOutputType[P]>
            : GetScalarType<T[P], Pago_bcoGroupByOutputType[P]>
        }
      >
    >


  export type pago_bcoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    NRO_DOC?: boolean
    CONTRATO?: boolean
    COD_SUC?: boolean
    NRO_CTA?: boolean
    FEC_ACR?: boolean
    IMPORTE?: boolean
    MARCA?: boolean
    MES?: boolean
    ANO?: boolean
    DIA_PAGO?: boolean
    SUCURSAL?: boolean
    SEGURO?: boolean
    id?: boolean
  }, ExtArgs["result"]["pago_bco"]>

  export type pago_bcoSelectScalar = {
    NRO_DOC?: boolean
    CONTRATO?: boolean
    COD_SUC?: boolean
    NRO_CTA?: boolean
    FEC_ACR?: boolean
    IMPORTE?: boolean
    MARCA?: boolean
    MES?: boolean
    ANO?: boolean
    DIA_PAGO?: boolean
    SUCURSAL?: boolean
    SEGURO?: boolean
    id?: boolean
  }


  type pago_bcoGetPayload<S extends boolean | null | undefined | pago_bcoArgs> = $Types.GetResult<pago_bcoPayload, S>

  type pago_bcoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<pago_bcoFindManyArgs, 'select' | 'include'> & {
      select?: Pago_bcoCountAggregateInputType | true
    }

  export interface pago_bcoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pago_bco'], meta: { name: 'pago_bco' } }
    /**
     * Find zero or one Pago_bco that matches the filter.
     * @param {pago_bcoFindUniqueArgs} args - Arguments to find a Pago_bco
     * @example
     * // Get one Pago_bco
     * const pago_bco = await prisma.pago_bco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends pago_bcoFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, pago_bcoFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'pago_bco'> extends True ? Prisma__pago_bcoClient<$Types.GetResult<pago_bcoPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__pago_bcoClient<$Types.GetResult<pago_bcoPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Pago_bco that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {pago_bcoFindUniqueOrThrowArgs} args - Arguments to find a Pago_bco
     * @example
     * // Get one Pago_bco
     * const pago_bco = await prisma.pago_bco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends pago_bcoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pago_bcoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__pago_bcoClient<$Types.GetResult<pago_bcoPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Pago_bco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pago_bcoFindFirstArgs} args - Arguments to find a Pago_bco
     * @example
     * // Get one Pago_bco
     * const pago_bco = await prisma.pago_bco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends pago_bcoFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, pago_bcoFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'pago_bco'> extends True ? Prisma__pago_bcoClient<$Types.GetResult<pago_bcoPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__pago_bcoClient<$Types.GetResult<pago_bcoPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Pago_bco that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pago_bcoFindFirstOrThrowArgs} args - Arguments to find a Pago_bco
     * @example
     * // Get one Pago_bco
     * const pago_bco = await prisma.pago_bco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends pago_bcoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pago_bcoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__pago_bcoClient<$Types.GetResult<pago_bcoPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Pago_bcos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pago_bcoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pago_bcos
     * const pago_bcos = await prisma.pago_bco.findMany()
     * 
     * // Get first 10 Pago_bcos
     * const pago_bcos = await prisma.pago_bco.findMany({ take: 10 })
     * 
     * // Only select the `NRO_DOC`
     * const pago_bcoWithNRO_DOCOnly = await prisma.pago_bco.findMany({ select: { NRO_DOC: true } })
     * 
    **/
    findMany<T extends pago_bcoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pago_bcoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<pago_bcoPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Pago_bco.
     * @param {pago_bcoCreateArgs} args - Arguments to create a Pago_bco.
     * @example
     * // Create one Pago_bco
     * const Pago_bco = await prisma.pago_bco.create({
     *   data: {
     *     // ... data to create a Pago_bco
     *   }
     * })
     * 
    **/
    create<T extends pago_bcoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, pago_bcoCreateArgs<ExtArgs>>
    ): Prisma__pago_bcoClient<$Types.GetResult<pago_bcoPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Pago_bcos.
     *     @param {pago_bcoCreateManyArgs} args - Arguments to create many Pago_bcos.
     *     @example
     *     // Create many Pago_bcos
     *     const pago_bco = await prisma.pago_bco.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends pago_bcoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pago_bcoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pago_bco.
     * @param {pago_bcoDeleteArgs} args - Arguments to delete one Pago_bco.
     * @example
     * // Delete one Pago_bco
     * const Pago_bco = await prisma.pago_bco.delete({
     *   where: {
     *     // ... filter to delete one Pago_bco
     *   }
     * })
     * 
    **/
    delete<T extends pago_bcoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, pago_bcoDeleteArgs<ExtArgs>>
    ): Prisma__pago_bcoClient<$Types.GetResult<pago_bcoPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Pago_bco.
     * @param {pago_bcoUpdateArgs} args - Arguments to update one Pago_bco.
     * @example
     * // Update one Pago_bco
     * const pago_bco = await prisma.pago_bco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends pago_bcoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, pago_bcoUpdateArgs<ExtArgs>>
    ): Prisma__pago_bcoClient<$Types.GetResult<pago_bcoPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Pago_bcos.
     * @param {pago_bcoDeleteManyArgs} args - Arguments to filter Pago_bcos to delete.
     * @example
     * // Delete a few Pago_bcos
     * const { count } = await prisma.pago_bco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends pago_bcoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pago_bcoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pago_bcos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pago_bcoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pago_bcos
     * const pago_bco = await prisma.pago_bco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends pago_bcoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, pago_bcoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pago_bco.
     * @param {pago_bcoUpsertArgs} args - Arguments to update or create a Pago_bco.
     * @example
     * // Update or create a Pago_bco
     * const pago_bco = await prisma.pago_bco.upsert({
     *   create: {
     *     // ... data to create a Pago_bco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pago_bco we want to update
     *   }
     * })
    **/
    upsert<T extends pago_bcoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, pago_bcoUpsertArgs<ExtArgs>>
    ): Prisma__pago_bcoClient<$Types.GetResult<pago_bcoPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Pago_bcos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pago_bcoCountArgs} args - Arguments to filter Pago_bcos to count.
     * @example
     * // Count the number of Pago_bcos
     * const count = await prisma.pago_bco.count({
     *   where: {
     *     // ... the filter for the Pago_bcos we want to count
     *   }
     * })
    **/
    count<T extends pago_bcoCountArgs>(
      args?: Subset<T, pago_bcoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pago_bcoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pago_bco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pago_bcoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pago_bcoAggregateArgs>(args: Subset<T, Pago_bcoAggregateArgs>): Prisma.PrismaPromise<GetPago_bcoAggregateType<T>>

    /**
     * Group by Pago_bco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pago_bcoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pago_bcoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pago_bcoGroupByArgs['orderBy'] }
        : { orderBy?: pago_bcoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pago_bcoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPago_bcoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pago_bco model
   */
  readonly fields: pago_bcoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pago_bco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__pago_bcoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the pago_bco model
   */ 
  interface pago_bcoFieldRefs {
    readonly NRO_DOC: FieldRef<"pago_bco", 'Int'>
    readonly CONTRATO: FieldRef<"pago_bco", 'Int'>
    readonly COD_SUC: FieldRef<"pago_bco", 'String'>
    readonly NRO_CTA: FieldRef<"pago_bco", 'String'>
    readonly FEC_ACR: FieldRef<"pago_bco", 'String'>
    readonly IMPORTE: FieldRef<"pago_bco", 'Float'>
    readonly MARCA: FieldRef<"pago_bco", 'String'>
    readonly MES: FieldRef<"pago_bco", 'Int'>
    readonly ANO: FieldRef<"pago_bco", 'Int'>
    readonly DIA_PAGO: FieldRef<"pago_bco", 'DateTime'>
    readonly SUCURSAL: FieldRef<"pago_bco", 'String'>
    readonly SEGURO: FieldRef<"pago_bco", 'Float'>
    readonly id: FieldRef<"pago_bco", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * pago_bco base type for findUnique actions
   */
  export type pago_bcoFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago_bco
     */
    select?: pago_bcoSelect<ExtArgs> | null
    /**
     * Filter, which pago_bco to fetch.
     */
    where: pago_bcoWhereUniqueInput
  }

  /**
   * pago_bco findUnique
   */
  export interface pago_bcoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends pago_bcoFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pago_bco findUniqueOrThrow
   */
  export type pago_bcoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago_bco
     */
    select?: pago_bcoSelect<ExtArgs> | null
    /**
     * Filter, which pago_bco to fetch.
     */
    where: pago_bcoWhereUniqueInput
  }


  /**
   * pago_bco base type for findFirst actions
   */
  export type pago_bcoFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago_bco
     */
    select?: pago_bcoSelect<ExtArgs> | null
    /**
     * Filter, which pago_bco to fetch.
     */
    where?: pago_bcoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pago_bcos to fetch.
     */
    orderBy?: pago_bcoOrderByWithRelationInput | pago_bcoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pago_bcos.
     */
    cursor?: pago_bcoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pago_bcos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pago_bcos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pago_bcos.
     */
    distinct?: Pago_bcoScalarFieldEnum | Pago_bcoScalarFieldEnum[]
  }

  /**
   * pago_bco findFirst
   */
  export interface pago_bcoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends pago_bcoFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * pago_bco findFirstOrThrow
   */
  export type pago_bcoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago_bco
     */
    select?: pago_bcoSelect<ExtArgs> | null
    /**
     * Filter, which pago_bco to fetch.
     */
    where?: pago_bcoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pago_bcos to fetch.
     */
    orderBy?: pago_bcoOrderByWithRelationInput | pago_bcoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pago_bcos.
     */
    cursor?: pago_bcoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pago_bcos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pago_bcos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pago_bcos.
     */
    distinct?: Pago_bcoScalarFieldEnum | Pago_bcoScalarFieldEnum[]
  }


  /**
   * pago_bco findMany
   */
  export type pago_bcoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago_bco
     */
    select?: pago_bcoSelect<ExtArgs> | null
    /**
     * Filter, which pago_bcos to fetch.
     */
    where?: pago_bcoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pago_bcos to fetch.
     */
    orderBy?: pago_bcoOrderByWithRelationInput | pago_bcoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pago_bcos.
     */
    cursor?: pago_bcoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pago_bcos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pago_bcos.
     */
    skip?: number
    distinct?: Pago_bcoScalarFieldEnum | Pago_bcoScalarFieldEnum[]
  }


  /**
   * pago_bco create
   */
  export type pago_bcoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago_bco
     */
    select?: pago_bcoSelect<ExtArgs> | null
    /**
     * The data needed to create a pago_bco.
     */
    data?: XOR<pago_bcoCreateInput, pago_bcoUncheckedCreateInput>
  }


  /**
   * pago_bco createMany
   */
  export type pago_bcoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pago_bcos.
     */
    data: pago_bcoCreateManyInput | pago_bcoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * pago_bco update
   */
  export type pago_bcoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago_bco
     */
    select?: pago_bcoSelect<ExtArgs> | null
    /**
     * The data needed to update a pago_bco.
     */
    data: XOR<pago_bcoUpdateInput, pago_bcoUncheckedUpdateInput>
    /**
     * Choose, which pago_bco to update.
     */
    where: pago_bcoWhereUniqueInput
  }


  /**
   * pago_bco updateMany
   */
  export type pago_bcoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pago_bcos.
     */
    data: XOR<pago_bcoUpdateManyMutationInput, pago_bcoUncheckedUpdateManyInput>
    /**
     * Filter which pago_bcos to update
     */
    where?: pago_bcoWhereInput
  }


  /**
   * pago_bco upsert
   */
  export type pago_bcoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago_bco
     */
    select?: pago_bcoSelect<ExtArgs> | null
    /**
     * The filter to search for the pago_bco to update in case it exists.
     */
    where: pago_bcoWhereUniqueInput
    /**
     * In case the pago_bco found by the `where` argument doesn't exist, create a new pago_bco with this data.
     */
    create: XOR<pago_bcoCreateInput, pago_bcoUncheckedCreateInput>
    /**
     * In case the pago_bco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pago_bcoUpdateInput, pago_bcoUncheckedUpdateInput>
  }


  /**
   * pago_bco delete
   */
  export type pago_bcoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago_bco
     */
    select?: pago_bcoSelect<ExtArgs> | null
    /**
     * Filter which pago_bco to delete.
     */
    where: pago_bcoWhereUniqueInput
  }


  /**
   * pago_bco deleteMany
   */
  export type pago_bcoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which pago_bcos to delete
     */
    where?: pago_bcoWhereInput
  }


  /**
   * pago_bco without action
   */
  export type pago_bcoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago_bco
     */
    select?: pago_bcoSelect<ExtArgs> | null
  }



  /**
   * Model caja
   */


  export type AggregateCaja = {
    _count: CajaCountAggregateOutputType | null
    _avg: CajaAvgAggregateOutputType | null
    _sum: CajaSumAggregateOutputType | null
    _min: CajaMinAggregateOutputType | null
    _max: CajaMaxAggregateOutputType | null
  }

  export type CajaAvgAggregateOutputType = {
    PUESTO: number | null
    CODIGO: number | null
    IMPORTE: number | null
    SERIE: number | null
    NUMERO: number | null
    idmovim: number | null
  }

  export type CajaSumAggregateOutputType = {
    PUESTO: number | null
    CODIGO: number | null
    IMPORTE: number | null
    SERIE: number | null
    NUMERO: number | null
    idmovim: number | null
  }

  export type CajaMinAggregateOutputType = {
    SUCURSAL: string | null
    PUESTO: number | null
    CODIGO: number | null
    MOVIM: string | null
    CUENTA: string | null
    CUENTA_DESC: string | null
    IMPORTE: number | null
    TIPO: string | null
    SERIE: number | null
    NUMERO: number | null
    CUIT: string | null
    DETALLE: string | null
    FECHA: string | null
    FEC_COMP: string | null
    HORA: string | null
    OPERADOR: string | null
    idmovim: number | null
  }

  export type CajaMaxAggregateOutputType = {
    SUCURSAL: string | null
    PUESTO: number | null
    CODIGO: number | null
    MOVIM: string | null
    CUENTA: string | null
    CUENTA_DESC: string | null
    IMPORTE: number | null
    TIPO: string | null
    SERIE: number | null
    NUMERO: number | null
    CUIT: string | null
    DETALLE: string | null
    FECHA: string | null
    FEC_COMP: string | null
    HORA: string | null
    OPERADOR: string | null
    idmovim: number | null
  }

  export type CajaCountAggregateOutputType = {
    SUCURSAL: number
    PUESTO: number
    CODIGO: number
    MOVIM: number
    CUENTA: number
    CUENTA_DESC: number
    IMPORTE: number
    TIPO: number
    SERIE: number
    NUMERO: number
    CUIT: number
    DETALLE: number
    FECHA: number
    FEC_COMP: number
    HORA: number
    OPERADOR: number
    idmovim: number
    _all: number
  }


  export type CajaAvgAggregateInputType = {
    PUESTO?: true
    CODIGO?: true
    IMPORTE?: true
    SERIE?: true
    NUMERO?: true
    idmovim?: true
  }

  export type CajaSumAggregateInputType = {
    PUESTO?: true
    CODIGO?: true
    IMPORTE?: true
    SERIE?: true
    NUMERO?: true
    idmovim?: true
  }

  export type CajaMinAggregateInputType = {
    SUCURSAL?: true
    PUESTO?: true
    CODIGO?: true
    MOVIM?: true
    CUENTA?: true
    CUENTA_DESC?: true
    IMPORTE?: true
    TIPO?: true
    SERIE?: true
    NUMERO?: true
    CUIT?: true
    DETALLE?: true
    FECHA?: true
    FEC_COMP?: true
    HORA?: true
    OPERADOR?: true
    idmovim?: true
  }

  export type CajaMaxAggregateInputType = {
    SUCURSAL?: true
    PUESTO?: true
    CODIGO?: true
    MOVIM?: true
    CUENTA?: true
    CUENTA_DESC?: true
    IMPORTE?: true
    TIPO?: true
    SERIE?: true
    NUMERO?: true
    CUIT?: true
    DETALLE?: true
    FECHA?: true
    FEC_COMP?: true
    HORA?: true
    OPERADOR?: true
    idmovim?: true
  }

  export type CajaCountAggregateInputType = {
    SUCURSAL?: true
    PUESTO?: true
    CODIGO?: true
    MOVIM?: true
    CUENTA?: true
    CUENTA_DESC?: true
    IMPORTE?: true
    TIPO?: true
    SERIE?: true
    NUMERO?: true
    CUIT?: true
    DETALLE?: true
    FECHA?: true
    FEC_COMP?: true
    HORA?: true
    OPERADOR?: true
    idmovim?: true
    _all?: true
  }

  export type CajaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which caja to aggregate.
     */
    where?: cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cajas to fetch.
     */
    orderBy?: cajaOrderByWithRelationInput | cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cajas
    **/
    _count?: true | CajaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CajaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CajaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CajaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CajaMaxAggregateInputType
  }

  export type GetCajaAggregateType<T extends CajaAggregateArgs> = {
        [P in keyof T & keyof AggregateCaja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaja[P]>
      : GetScalarType<T[P], AggregateCaja[P]>
  }




  export type cajaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: cajaWhereInput
    orderBy?: cajaOrderByWithAggregationInput | cajaOrderByWithAggregationInput[]
    by: CajaScalarFieldEnum[] | CajaScalarFieldEnum
    having?: cajaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CajaCountAggregateInputType | true
    _avg?: CajaAvgAggregateInputType
    _sum?: CajaSumAggregateInputType
    _min?: CajaMinAggregateInputType
    _max?: CajaMaxAggregateInputType
  }


  export type CajaGroupByOutputType = {
    SUCURSAL: string | null
    PUESTO: number | null
    CODIGO: number | null
    MOVIM: string | null
    CUENTA: string | null
    CUENTA_DESC: string | null
    IMPORTE: number | null
    TIPO: string | null
    SERIE: number | null
    NUMERO: number | null
    CUIT: string | null
    DETALLE: string | null
    FECHA: string | null
    FEC_COMP: string | null
    HORA: string | null
    OPERADOR: string | null
    idmovim: number
    _count: CajaCountAggregateOutputType | null
    _avg: CajaAvgAggregateOutputType | null
    _sum: CajaSumAggregateOutputType | null
    _min: CajaMinAggregateOutputType | null
    _max: CajaMaxAggregateOutputType | null
  }

  type GetCajaGroupByPayload<T extends cajaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CajaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CajaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CajaGroupByOutputType[P]>
            : GetScalarType<T[P], CajaGroupByOutputType[P]>
        }
      >
    >


  export type cajaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SUCURSAL?: boolean
    PUESTO?: boolean
    CODIGO?: boolean
    MOVIM?: boolean
    CUENTA?: boolean
    CUENTA_DESC?: boolean
    IMPORTE?: boolean
    TIPO?: boolean
    SERIE?: boolean
    NUMERO?: boolean
    CUIT?: boolean
    DETALLE?: boolean
    FECHA?: boolean
    FEC_COMP?: boolean
    HORA?: boolean
    OPERADOR?: boolean
    idmovim?: boolean
  }, ExtArgs["result"]["caja"]>

  export type cajaSelectScalar = {
    SUCURSAL?: boolean
    PUESTO?: boolean
    CODIGO?: boolean
    MOVIM?: boolean
    CUENTA?: boolean
    CUENTA_DESC?: boolean
    IMPORTE?: boolean
    TIPO?: boolean
    SERIE?: boolean
    NUMERO?: boolean
    CUIT?: boolean
    DETALLE?: boolean
    FECHA?: boolean
    FEC_COMP?: boolean
    HORA?: boolean
    OPERADOR?: boolean
    idmovim?: boolean
  }


  type cajaGetPayload<S extends boolean | null | undefined | cajaArgs> = $Types.GetResult<cajaPayload, S>

  type cajaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<cajaFindManyArgs, 'select' | 'include'> & {
      select?: CajaCountAggregateInputType | true
    }

  export interface cajaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['caja'], meta: { name: 'caja' } }
    /**
     * Find zero or one Caja that matches the filter.
     * @param {cajaFindUniqueArgs} args - Arguments to find a Caja
     * @example
     * // Get one Caja
     * const caja = await prisma.caja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cajaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cajaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'caja'> extends True ? Prisma__cajaClient<$Types.GetResult<cajaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__cajaClient<$Types.GetResult<cajaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Caja that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cajaFindUniqueOrThrowArgs} args - Arguments to find a Caja
     * @example
     * // Get one Caja
     * const caja = await prisma.caja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cajaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cajaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cajaClient<$Types.GetResult<cajaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Caja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cajaFindFirstArgs} args - Arguments to find a Caja
     * @example
     * // Get one Caja
     * const caja = await prisma.caja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cajaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cajaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'caja'> extends True ? Prisma__cajaClient<$Types.GetResult<cajaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__cajaClient<$Types.GetResult<cajaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Caja that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cajaFindFirstOrThrowArgs} args - Arguments to find a Caja
     * @example
     * // Get one Caja
     * const caja = await prisma.caja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cajaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cajaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cajaClient<$Types.GetResult<cajaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Cajas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cajaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cajas
     * const cajas = await prisma.caja.findMany()
     * 
     * // Get first 10 Cajas
     * const cajas = await prisma.caja.findMany({ take: 10 })
     * 
     * // Only select the `SUCURSAL`
     * const cajaWithSUCURSALOnly = await prisma.caja.findMany({ select: { SUCURSAL: true } })
     * 
    **/
    findMany<T extends cajaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cajaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<cajaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Caja.
     * @param {cajaCreateArgs} args - Arguments to create a Caja.
     * @example
     * // Create one Caja
     * const Caja = await prisma.caja.create({
     *   data: {
     *     // ... data to create a Caja
     *   }
     * })
     * 
    **/
    create<T extends cajaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cajaCreateArgs<ExtArgs>>
    ): Prisma__cajaClient<$Types.GetResult<cajaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Cajas.
     *     @param {cajaCreateManyArgs} args - Arguments to create many Cajas.
     *     @example
     *     // Create many Cajas
     *     const caja = await prisma.caja.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cajaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cajaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Caja.
     * @param {cajaDeleteArgs} args - Arguments to delete one Caja.
     * @example
     * // Delete one Caja
     * const Caja = await prisma.caja.delete({
     *   where: {
     *     // ... filter to delete one Caja
     *   }
     * })
     * 
    **/
    delete<T extends cajaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cajaDeleteArgs<ExtArgs>>
    ): Prisma__cajaClient<$Types.GetResult<cajaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Caja.
     * @param {cajaUpdateArgs} args - Arguments to update one Caja.
     * @example
     * // Update one Caja
     * const caja = await prisma.caja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cajaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cajaUpdateArgs<ExtArgs>>
    ): Prisma__cajaClient<$Types.GetResult<cajaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Cajas.
     * @param {cajaDeleteManyArgs} args - Arguments to filter Cajas to delete.
     * @example
     * // Delete a few Cajas
     * const { count } = await prisma.caja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cajaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cajaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cajaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cajas
     * const caja = await prisma.caja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cajaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cajaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Caja.
     * @param {cajaUpsertArgs} args - Arguments to update or create a Caja.
     * @example
     * // Update or create a Caja
     * const caja = await prisma.caja.upsert({
     *   create: {
     *     // ... data to create a Caja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caja we want to update
     *   }
     * })
    **/
    upsert<T extends cajaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cajaUpsertArgs<ExtArgs>>
    ): Prisma__cajaClient<$Types.GetResult<cajaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Cajas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cajaCountArgs} args - Arguments to filter Cajas to count.
     * @example
     * // Count the number of Cajas
     * const count = await prisma.caja.count({
     *   where: {
     *     // ... the filter for the Cajas we want to count
     *   }
     * })
    **/
    count<T extends cajaCountArgs>(
      args?: Subset<T, cajaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CajaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CajaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CajaAggregateArgs>(args: Subset<T, CajaAggregateArgs>): Prisma.PrismaPromise<GetCajaAggregateType<T>>

    /**
     * Group by Caja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cajaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cajaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cajaGroupByArgs['orderBy'] }
        : { orderBy?: cajaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cajaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCajaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the caja model
   */
  readonly fields: cajaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for caja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cajaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the caja model
   */ 
  interface cajaFieldRefs {
    readonly SUCURSAL: FieldRef<"caja", 'String'>
    readonly PUESTO: FieldRef<"caja", 'Int'>
    readonly CODIGO: FieldRef<"caja", 'Int'>
    readonly MOVIM: FieldRef<"caja", 'String'>
    readonly CUENTA: FieldRef<"caja", 'String'>
    readonly CUENTA_DESC: FieldRef<"caja", 'String'>
    readonly IMPORTE: FieldRef<"caja", 'Float'>
    readonly TIPO: FieldRef<"caja", 'String'>
    readonly SERIE: FieldRef<"caja", 'Int'>
    readonly NUMERO: FieldRef<"caja", 'Int'>
    readonly CUIT: FieldRef<"caja", 'String'>
    readonly DETALLE: FieldRef<"caja", 'String'>
    readonly FECHA: FieldRef<"caja", 'String'>
    readonly FEC_COMP: FieldRef<"caja", 'String'>
    readonly HORA: FieldRef<"caja", 'String'>
    readonly OPERADOR: FieldRef<"caja", 'String'>
    readonly idmovim: FieldRef<"caja", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * caja base type for findUnique actions
   */
  export type cajaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Filter, which caja to fetch.
     */
    where: cajaWhereUniqueInput
  }

  /**
   * caja findUnique
   */
  export interface cajaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cajaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * caja findUniqueOrThrow
   */
  export type cajaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Filter, which caja to fetch.
     */
    where: cajaWhereUniqueInput
  }


  /**
   * caja base type for findFirst actions
   */
  export type cajaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Filter, which caja to fetch.
     */
    where?: cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cajas to fetch.
     */
    orderBy?: cajaOrderByWithRelationInput | cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cajas.
     */
    cursor?: cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cajas.
     */
    distinct?: CajaScalarFieldEnum | CajaScalarFieldEnum[]
  }

  /**
   * caja findFirst
   */
  export interface cajaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends cajaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * caja findFirstOrThrow
   */
  export type cajaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Filter, which caja to fetch.
     */
    where?: cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cajas to fetch.
     */
    orderBy?: cajaOrderByWithRelationInput | cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cajas.
     */
    cursor?: cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cajas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cajas.
     */
    distinct?: CajaScalarFieldEnum | CajaScalarFieldEnum[]
  }


  /**
   * caja findMany
   */
  export type cajaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Filter, which cajas to fetch.
     */
    where?: cajaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cajas to fetch.
     */
    orderBy?: cajaOrderByWithRelationInput | cajaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cajas.
     */
    cursor?: cajaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cajas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cajas.
     */
    skip?: number
    distinct?: CajaScalarFieldEnum | CajaScalarFieldEnum[]
  }


  /**
   * caja create
   */
  export type cajaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * The data needed to create a caja.
     */
    data?: XOR<cajaCreateInput, cajaUncheckedCreateInput>
  }


  /**
   * caja createMany
   */
  export type cajaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cajas.
     */
    data: cajaCreateManyInput | cajaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * caja update
   */
  export type cajaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * The data needed to update a caja.
     */
    data: XOR<cajaUpdateInput, cajaUncheckedUpdateInput>
    /**
     * Choose, which caja to update.
     */
    where: cajaWhereUniqueInput
  }


  /**
   * caja updateMany
   */
  export type cajaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cajas.
     */
    data: XOR<cajaUpdateManyMutationInput, cajaUncheckedUpdateManyInput>
    /**
     * Filter which cajas to update
     */
    where?: cajaWhereInput
  }


  /**
   * caja upsert
   */
  export type cajaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * The filter to search for the caja to update in case it exists.
     */
    where: cajaWhereUniqueInput
    /**
     * In case the caja found by the `where` argument doesn't exist, create a new caja with this data.
     */
    create: XOR<cajaCreateInput, cajaUncheckedCreateInput>
    /**
     * In case the caja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cajaUpdateInput, cajaUncheckedUpdateInput>
  }


  /**
   * caja delete
   */
  export type cajaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
    /**
     * Filter which caja to delete.
     */
    where: cajaWhereUniqueInput
  }


  /**
   * caja deleteMany
   */
  export type cajaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which cajas to delete
     */
    where?: cajaWhereInput
  }


  /**
   * caja without action
   */
  export type cajaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caja
     */
    select?: cajaSelect<ExtArgs> | null
  }



  /**
   * Model subcta
   */


  export type AggregateSubcta = {
    _count: SubctaCountAggregateOutputType | null
    _avg: SubctaAvgAggregateOutputType | null
    _sum: SubctaSumAggregateOutputType | null
    _min: SubctaMinAggregateOutputType | null
    _max: SubctaMaxAggregateOutputType | null
  }

  export type SubctaAvgAggregateOutputType = {
    CODI: number | null
    CUEN: number | null
    id: number | null
  }

  export type SubctaSumAggregateOutputType = {
    CODI: number | null
    CUEN: number | null
    id: number | null
  }

  export type SubctaMinAggregateOutputType = {
    CODI: number | null
    DESC: string | null
    CUEN: number | null
    MOVIM: string | null
    id: number | null
  }

  export type SubctaMaxAggregateOutputType = {
    CODI: number | null
    DESC: string | null
    CUEN: number | null
    MOVIM: string | null
    id: number | null
  }

  export type SubctaCountAggregateOutputType = {
    CODI: number
    DESC: number
    CUEN: number
    MOVIM: number
    id: number
    _all: number
  }


  export type SubctaAvgAggregateInputType = {
    CODI?: true
    CUEN?: true
    id?: true
  }

  export type SubctaSumAggregateInputType = {
    CODI?: true
    CUEN?: true
    id?: true
  }

  export type SubctaMinAggregateInputType = {
    CODI?: true
    DESC?: true
    CUEN?: true
    MOVIM?: true
    id?: true
  }

  export type SubctaMaxAggregateInputType = {
    CODI?: true
    DESC?: true
    CUEN?: true
    MOVIM?: true
    id?: true
  }

  export type SubctaCountAggregateInputType = {
    CODI?: true
    DESC?: true
    CUEN?: true
    MOVIM?: true
    id?: true
    _all?: true
  }

  export type SubctaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which subcta to aggregate.
     */
    where?: subctaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subctas to fetch.
     */
    orderBy?: subctaOrderByWithRelationInput | subctaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subctaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subctas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subctas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subctas
    **/
    _count?: true | SubctaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubctaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubctaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubctaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubctaMaxAggregateInputType
  }

  export type GetSubctaAggregateType<T extends SubctaAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcta[P]>
      : GetScalarType<T[P], AggregateSubcta[P]>
  }




  export type subctaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: subctaWhereInput
    orderBy?: subctaOrderByWithAggregationInput | subctaOrderByWithAggregationInput[]
    by: SubctaScalarFieldEnum[] | SubctaScalarFieldEnum
    having?: subctaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubctaCountAggregateInputType | true
    _avg?: SubctaAvgAggregateInputType
    _sum?: SubctaSumAggregateInputType
    _min?: SubctaMinAggregateInputType
    _max?: SubctaMaxAggregateInputType
  }


  export type SubctaGroupByOutputType = {
    CODI: number | null
    DESC: string | null
    CUEN: number | null
    MOVIM: string | null
    id: number
    _count: SubctaCountAggregateOutputType | null
    _avg: SubctaAvgAggregateOutputType | null
    _sum: SubctaSumAggregateOutputType | null
    _min: SubctaMinAggregateOutputType | null
    _max: SubctaMaxAggregateOutputType | null
  }

  type GetSubctaGroupByPayload<T extends subctaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubctaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubctaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubctaGroupByOutputType[P]>
            : GetScalarType<T[P], SubctaGroupByOutputType[P]>
        }
      >
    >


  export type subctaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CODI?: boolean
    DESC?: boolean
    CUEN?: boolean
    MOVIM?: boolean
    id?: boolean
  }, ExtArgs["result"]["subcta"]>

  export type subctaSelectScalar = {
    CODI?: boolean
    DESC?: boolean
    CUEN?: boolean
    MOVIM?: boolean
    id?: boolean
  }


  type subctaGetPayload<S extends boolean | null | undefined | subctaArgs> = $Types.GetResult<subctaPayload, S>

  type subctaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<subctaFindManyArgs, 'select' | 'include'> & {
      select?: SubctaCountAggregateInputType | true
    }

  export interface subctaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subcta'], meta: { name: 'subcta' } }
    /**
     * Find zero or one Subcta that matches the filter.
     * @param {subctaFindUniqueArgs} args - Arguments to find a Subcta
     * @example
     * // Get one Subcta
     * const subcta = await prisma.subcta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends subctaFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, subctaFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'subcta'> extends True ? Prisma__subctaClient<$Types.GetResult<subctaPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__subctaClient<$Types.GetResult<subctaPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Subcta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {subctaFindUniqueOrThrowArgs} args - Arguments to find a Subcta
     * @example
     * // Get one Subcta
     * const subcta = await prisma.subcta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends subctaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subctaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__subctaClient<$Types.GetResult<subctaPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Subcta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subctaFindFirstArgs} args - Arguments to find a Subcta
     * @example
     * // Get one Subcta
     * const subcta = await prisma.subcta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends subctaFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, subctaFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'subcta'> extends True ? Prisma__subctaClient<$Types.GetResult<subctaPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__subctaClient<$Types.GetResult<subctaPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Subcta that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subctaFindFirstOrThrowArgs} args - Arguments to find a Subcta
     * @example
     * // Get one Subcta
     * const subcta = await prisma.subcta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends subctaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subctaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__subctaClient<$Types.GetResult<subctaPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Subctas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subctaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subctas
     * const subctas = await prisma.subcta.findMany()
     * 
     * // Get first 10 Subctas
     * const subctas = await prisma.subcta.findMany({ take: 10 })
     * 
     * // Only select the `CODI`
     * const subctaWithCODIOnly = await prisma.subcta.findMany({ select: { CODI: true } })
     * 
    **/
    findMany<T extends subctaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subctaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<subctaPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Subcta.
     * @param {subctaCreateArgs} args - Arguments to create a Subcta.
     * @example
     * // Create one Subcta
     * const Subcta = await prisma.subcta.create({
     *   data: {
     *     // ... data to create a Subcta
     *   }
     * })
     * 
    **/
    create<T extends subctaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, subctaCreateArgs<ExtArgs>>
    ): Prisma__subctaClient<$Types.GetResult<subctaPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Subctas.
     *     @param {subctaCreateManyArgs} args - Arguments to create many Subctas.
     *     @example
     *     // Create many Subctas
     *     const subcta = await prisma.subcta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends subctaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subctaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subcta.
     * @param {subctaDeleteArgs} args - Arguments to delete one Subcta.
     * @example
     * // Delete one Subcta
     * const Subcta = await prisma.subcta.delete({
     *   where: {
     *     // ... filter to delete one Subcta
     *   }
     * })
     * 
    **/
    delete<T extends subctaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, subctaDeleteArgs<ExtArgs>>
    ): Prisma__subctaClient<$Types.GetResult<subctaPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Subcta.
     * @param {subctaUpdateArgs} args - Arguments to update one Subcta.
     * @example
     * // Update one Subcta
     * const subcta = await prisma.subcta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends subctaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, subctaUpdateArgs<ExtArgs>>
    ): Prisma__subctaClient<$Types.GetResult<subctaPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Subctas.
     * @param {subctaDeleteManyArgs} args - Arguments to filter Subctas to delete.
     * @example
     * // Delete a few Subctas
     * const { count } = await prisma.subcta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends subctaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subctaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subctas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subctaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subctas
     * const subcta = await prisma.subcta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends subctaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, subctaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subcta.
     * @param {subctaUpsertArgs} args - Arguments to update or create a Subcta.
     * @example
     * // Update or create a Subcta
     * const subcta = await prisma.subcta.upsert({
     *   create: {
     *     // ... data to create a Subcta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subcta we want to update
     *   }
     * })
    **/
    upsert<T extends subctaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, subctaUpsertArgs<ExtArgs>>
    ): Prisma__subctaClient<$Types.GetResult<subctaPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Subctas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subctaCountArgs} args - Arguments to filter Subctas to count.
     * @example
     * // Count the number of Subctas
     * const count = await prisma.subcta.count({
     *   where: {
     *     // ... the filter for the Subctas we want to count
     *   }
     * })
    **/
    count<T extends subctaCountArgs>(
      args?: Subset<T, subctaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubctaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subcta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubctaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubctaAggregateArgs>(args: Subset<T, SubctaAggregateArgs>): Prisma.PrismaPromise<GetSubctaAggregateType<T>>

    /**
     * Group by Subcta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subctaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subctaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subctaGroupByArgs['orderBy'] }
        : { orderBy?: subctaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subctaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubctaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subcta model
   */
  readonly fields: subctaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subcta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__subctaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the subcta model
   */ 
  interface subctaFieldRefs {
    readonly CODI: FieldRef<"subcta", 'Int'>
    readonly DESC: FieldRef<"subcta", 'String'>
    readonly CUEN: FieldRef<"subcta", 'Int'>
    readonly MOVIM: FieldRef<"subcta", 'String'>
    readonly id: FieldRef<"subcta", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * subcta base type for findUnique actions
   */
  export type subctaFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta
     */
    select?: subctaSelect<ExtArgs> | null
    /**
     * Filter, which subcta to fetch.
     */
    where: subctaWhereUniqueInput
  }

  /**
   * subcta findUnique
   */
  export interface subctaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends subctaFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * subcta findUniqueOrThrow
   */
  export type subctaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta
     */
    select?: subctaSelect<ExtArgs> | null
    /**
     * Filter, which subcta to fetch.
     */
    where: subctaWhereUniqueInput
  }


  /**
   * subcta base type for findFirst actions
   */
  export type subctaFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta
     */
    select?: subctaSelect<ExtArgs> | null
    /**
     * Filter, which subcta to fetch.
     */
    where?: subctaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subctas to fetch.
     */
    orderBy?: subctaOrderByWithRelationInput | subctaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subctas.
     */
    cursor?: subctaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subctas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subctas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subctas.
     */
    distinct?: SubctaScalarFieldEnum | SubctaScalarFieldEnum[]
  }

  /**
   * subcta findFirst
   */
  export interface subctaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends subctaFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * subcta findFirstOrThrow
   */
  export type subctaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta
     */
    select?: subctaSelect<ExtArgs> | null
    /**
     * Filter, which subcta to fetch.
     */
    where?: subctaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subctas to fetch.
     */
    orderBy?: subctaOrderByWithRelationInput | subctaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subctas.
     */
    cursor?: subctaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subctas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subctas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subctas.
     */
    distinct?: SubctaScalarFieldEnum | SubctaScalarFieldEnum[]
  }


  /**
   * subcta findMany
   */
  export type subctaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta
     */
    select?: subctaSelect<ExtArgs> | null
    /**
     * Filter, which subctas to fetch.
     */
    where?: subctaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subctas to fetch.
     */
    orderBy?: subctaOrderByWithRelationInput | subctaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subctas.
     */
    cursor?: subctaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subctas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subctas.
     */
    skip?: number
    distinct?: SubctaScalarFieldEnum | SubctaScalarFieldEnum[]
  }


  /**
   * subcta create
   */
  export type subctaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta
     */
    select?: subctaSelect<ExtArgs> | null
    /**
     * The data needed to create a subcta.
     */
    data?: XOR<subctaCreateInput, subctaUncheckedCreateInput>
  }


  /**
   * subcta createMany
   */
  export type subctaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subctas.
     */
    data: subctaCreateManyInput | subctaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * subcta update
   */
  export type subctaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta
     */
    select?: subctaSelect<ExtArgs> | null
    /**
     * The data needed to update a subcta.
     */
    data: XOR<subctaUpdateInput, subctaUncheckedUpdateInput>
    /**
     * Choose, which subcta to update.
     */
    where: subctaWhereUniqueInput
  }


  /**
   * subcta updateMany
   */
  export type subctaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subctas.
     */
    data: XOR<subctaUpdateManyMutationInput, subctaUncheckedUpdateManyInput>
    /**
     * Filter which subctas to update
     */
    where?: subctaWhereInput
  }


  /**
   * subcta upsert
   */
  export type subctaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta
     */
    select?: subctaSelect<ExtArgs> | null
    /**
     * The filter to search for the subcta to update in case it exists.
     */
    where: subctaWhereUniqueInput
    /**
     * In case the subcta found by the `where` argument doesn't exist, create a new subcta with this data.
     */
    create: XOR<subctaCreateInput, subctaUncheckedCreateInput>
    /**
     * In case the subcta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subctaUpdateInput, subctaUncheckedUpdateInput>
  }


  /**
   * subcta delete
   */
  export type subctaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta
     */
    select?: subctaSelect<ExtArgs> | null
    /**
     * Filter which subcta to delete.
     */
    where: subctaWhereUniqueInput
  }


  /**
   * subcta deleteMany
   */
  export type subctaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which subctas to delete
     */
    where?: subctaWhereInput
  }


  /**
   * subcta without action
   */
  export type subctaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta
     */
    select?: subctaSelect<ExtArgs> | null
  }



  /**
   * Model maestro_cuentas
   */


  export type AggregateMaestro_cuentas = {
    _count: Maestro_cuentasCountAggregateOutputType | null
    _avg: Maestro_cuentasAvgAggregateOutputType | null
    _sum: Maestro_cuentasSumAggregateOutputType | null
    _min: Maestro_cuentasMinAggregateOutputType | null
    _max: Maestro_cuentasMaxAggregateOutputType | null
  }

  export type Maestro_cuentasAvgAggregateOutputType = {
    idcuenta: number | null
    contrato: number | null
    dni: number | null
    grupo: number | null
  }

  export type Maestro_cuentasSumAggregateOutputType = {
    idcuenta: number | null
    contrato: number | null
    dni: number | null
    grupo: number | null
  }

  export type Maestro_cuentasMinAggregateOutputType = {
    idcuenta: number | null
    contrato: number | null
    dni: number | null
    grupo: number | null
    cuenta: string | null
    observacion: string | null
  }

  export type Maestro_cuentasMaxAggregateOutputType = {
    idcuenta: number | null
    contrato: number | null
    dni: number | null
    grupo: number | null
    cuenta: string | null
    observacion: string | null
  }

  export type Maestro_cuentasCountAggregateOutputType = {
    idcuenta: number
    contrato: number
    dni: number
    grupo: number
    cuenta: number
    observacion: number
    _all: number
  }


  export type Maestro_cuentasAvgAggregateInputType = {
    idcuenta?: true
    contrato?: true
    dni?: true
    grupo?: true
  }

  export type Maestro_cuentasSumAggregateInputType = {
    idcuenta?: true
    contrato?: true
    dni?: true
    grupo?: true
  }

  export type Maestro_cuentasMinAggregateInputType = {
    idcuenta?: true
    contrato?: true
    dni?: true
    grupo?: true
    cuenta?: true
    observacion?: true
  }

  export type Maestro_cuentasMaxAggregateInputType = {
    idcuenta?: true
    contrato?: true
    dni?: true
    grupo?: true
    cuenta?: true
    observacion?: true
  }

  export type Maestro_cuentasCountAggregateInputType = {
    idcuenta?: true
    contrato?: true
    dni?: true
    grupo?: true
    cuenta?: true
    observacion?: true
    _all?: true
  }

  export type Maestro_cuentasAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which maestro_cuentas to aggregate.
     */
    where?: maestro_cuentasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maestro_cuentas to fetch.
     */
    orderBy?: maestro_cuentasOrderByWithRelationInput | maestro_cuentasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: maestro_cuentasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maestro_cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maestro_cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned maestro_cuentas
    **/
    _count?: true | Maestro_cuentasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Maestro_cuentasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Maestro_cuentasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Maestro_cuentasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Maestro_cuentasMaxAggregateInputType
  }

  export type GetMaestro_cuentasAggregateType<T extends Maestro_cuentasAggregateArgs> = {
        [P in keyof T & keyof AggregateMaestro_cuentas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaestro_cuentas[P]>
      : GetScalarType<T[P], AggregateMaestro_cuentas[P]>
  }




  export type maestro_cuentasGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: maestro_cuentasWhereInput
    orderBy?: maestro_cuentasOrderByWithAggregationInput | maestro_cuentasOrderByWithAggregationInput[]
    by: Maestro_cuentasScalarFieldEnum[] | Maestro_cuentasScalarFieldEnum
    having?: maestro_cuentasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Maestro_cuentasCountAggregateInputType | true
    _avg?: Maestro_cuentasAvgAggregateInputType
    _sum?: Maestro_cuentasSumAggregateInputType
    _min?: Maestro_cuentasMinAggregateInputType
    _max?: Maestro_cuentasMaxAggregateInputType
  }


  export type Maestro_cuentasGroupByOutputType = {
    idcuenta: number
    contrato: number | null
    dni: number | null
    grupo: number | null
    cuenta: string | null
    observacion: string | null
    _count: Maestro_cuentasCountAggregateOutputType | null
    _avg: Maestro_cuentasAvgAggregateOutputType | null
    _sum: Maestro_cuentasSumAggregateOutputType | null
    _min: Maestro_cuentasMinAggregateOutputType | null
    _max: Maestro_cuentasMaxAggregateOutputType | null
  }

  type GetMaestro_cuentasGroupByPayload<T extends maestro_cuentasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Maestro_cuentasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Maestro_cuentasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Maestro_cuentasGroupByOutputType[P]>
            : GetScalarType<T[P], Maestro_cuentasGroupByOutputType[P]>
        }
      >
    >


  export type maestro_cuentasSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcuenta?: boolean
    contrato?: boolean
    dni?: boolean
    grupo?: boolean
    cuenta?: boolean
    observacion?: boolean
  }, ExtArgs["result"]["maestro_cuentas"]>

  export type maestro_cuentasSelectScalar = {
    idcuenta?: boolean
    contrato?: boolean
    dni?: boolean
    grupo?: boolean
    cuenta?: boolean
    observacion?: boolean
  }


  type maestro_cuentasGetPayload<S extends boolean | null | undefined | maestro_cuentasArgs> = $Types.GetResult<maestro_cuentasPayload, S>

  type maestro_cuentasCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<maestro_cuentasFindManyArgs, 'select' | 'include'> & {
      select?: Maestro_cuentasCountAggregateInputType | true
    }

  export interface maestro_cuentasDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['maestro_cuentas'], meta: { name: 'maestro_cuentas' } }
    /**
     * Find zero or one Maestro_cuentas that matches the filter.
     * @param {maestro_cuentasFindUniqueArgs} args - Arguments to find a Maestro_cuentas
     * @example
     * // Get one Maestro_cuentas
     * const maestro_cuentas = await prisma.maestro_cuentas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends maestro_cuentasFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, maestro_cuentasFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'maestro_cuentas'> extends True ? Prisma__maestro_cuentasClient<$Types.GetResult<maestro_cuentasPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__maestro_cuentasClient<$Types.GetResult<maestro_cuentasPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Maestro_cuentas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {maestro_cuentasFindUniqueOrThrowArgs} args - Arguments to find a Maestro_cuentas
     * @example
     * // Get one Maestro_cuentas
     * const maestro_cuentas = await prisma.maestro_cuentas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends maestro_cuentasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, maestro_cuentasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__maestro_cuentasClient<$Types.GetResult<maestro_cuentasPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Maestro_cuentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maestro_cuentasFindFirstArgs} args - Arguments to find a Maestro_cuentas
     * @example
     * // Get one Maestro_cuentas
     * const maestro_cuentas = await prisma.maestro_cuentas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends maestro_cuentasFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, maestro_cuentasFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'maestro_cuentas'> extends True ? Prisma__maestro_cuentasClient<$Types.GetResult<maestro_cuentasPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__maestro_cuentasClient<$Types.GetResult<maestro_cuentasPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Maestro_cuentas that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maestro_cuentasFindFirstOrThrowArgs} args - Arguments to find a Maestro_cuentas
     * @example
     * // Get one Maestro_cuentas
     * const maestro_cuentas = await prisma.maestro_cuentas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends maestro_cuentasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, maestro_cuentasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__maestro_cuentasClient<$Types.GetResult<maestro_cuentasPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Maestro_cuentas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maestro_cuentasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maestro_cuentas
     * const maestro_cuentas = await prisma.maestro_cuentas.findMany()
     * 
     * // Get first 10 Maestro_cuentas
     * const maestro_cuentas = await prisma.maestro_cuentas.findMany({ take: 10 })
     * 
     * // Only select the `idcuenta`
     * const maestro_cuentasWithIdcuentaOnly = await prisma.maestro_cuentas.findMany({ select: { idcuenta: true } })
     * 
    **/
    findMany<T extends maestro_cuentasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maestro_cuentasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<maestro_cuentasPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Maestro_cuentas.
     * @param {maestro_cuentasCreateArgs} args - Arguments to create a Maestro_cuentas.
     * @example
     * // Create one Maestro_cuentas
     * const Maestro_cuentas = await prisma.maestro_cuentas.create({
     *   data: {
     *     // ... data to create a Maestro_cuentas
     *   }
     * })
     * 
    **/
    create<T extends maestro_cuentasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, maestro_cuentasCreateArgs<ExtArgs>>
    ): Prisma__maestro_cuentasClient<$Types.GetResult<maestro_cuentasPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Maestro_cuentas.
     *     @param {maestro_cuentasCreateManyArgs} args - Arguments to create many Maestro_cuentas.
     *     @example
     *     // Create many Maestro_cuentas
     *     const maestro_cuentas = await prisma.maestro_cuentas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends maestro_cuentasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maestro_cuentasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Maestro_cuentas.
     * @param {maestro_cuentasDeleteArgs} args - Arguments to delete one Maestro_cuentas.
     * @example
     * // Delete one Maestro_cuentas
     * const Maestro_cuentas = await prisma.maestro_cuentas.delete({
     *   where: {
     *     // ... filter to delete one Maestro_cuentas
     *   }
     * })
     * 
    **/
    delete<T extends maestro_cuentasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, maestro_cuentasDeleteArgs<ExtArgs>>
    ): Prisma__maestro_cuentasClient<$Types.GetResult<maestro_cuentasPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Maestro_cuentas.
     * @param {maestro_cuentasUpdateArgs} args - Arguments to update one Maestro_cuentas.
     * @example
     * // Update one Maestro_cuentas
     * const maestro_cuentas = await prisma.maestro_cuentas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends maestro_cuentasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, maestro_cuentasUpdateArgs<ExtArgs>>
    ): Prisma__maestro_cuentasClient<$Types.GetResult<maestro_cuentasPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Maestro_cuentas.
     * @param {maestro_cuentasDeleteManyArgs} args - Arguments to filter Maestro_cuentas to delete.
     * @example
     * // Delete a few Maestro_cuentas
     * const { count } = await prisma.maestro_cuentas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends maestro_cuentasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, maestro_cuentasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maestro_cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maestro_cuentasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maestro_cuentas
     * const maestro_cuentas = await prisma.maestro_cuentas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends maestro_cuentasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, maestro_cuentasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maestro_cuentas.
     * @param {maestro_cuentasUpsertArgs} args - Arguments to update or create a Maestro_cuentas.
     * @example
     * // Update or create a Maestro_cuentas
     * const maestro_cuentas = await prisma.maestro_cuentas.upsert({
     *   create: {
     *     // ... data to create a Maestro_cuentas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maestro_cuentas we want to update
     *   }
     * })
    **/
    upsert<T extends maestro_cuentasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, maestro_cuentasUpsertArgs<ExtArgs>>
    ): Prisma__maestro_cuentasClient<$Types.GetResult<maestro_cuentasPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Maestro_cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maestro_cuentasCountArgs} args - Arguments to filter Maestro_cuentas to count.
     * @example
     * // Count the number of Maestro_cuentas
     * const count = await prisma.maestro_cuentas.count({
     *   where: {
     *     // ... the filter for the Maestro_cuentas we want to count
     *   }
     * })
    **/
    count<T extends maestro_cuentasCountArgs>(
      args?: Subset<T, maestro_cuentasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Maestro_cuentasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maestro_cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maestro_cuentasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Maestro_cuentasAggregateArgs>(args: Subset<T, Maestro_cuentasAggregateArgs>): Prisma.PrismaPromise<GetMaestro_cuentasAggregateType<T>>

    /**
     * Group by Maestro_cuentas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maestro_cuentasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends maestro_cuentasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: maestro_cuentasGroupByArgs['orderBy'] }
        : { orderBy?: maestro_cuentasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, maestro_cuentasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaestro_cuentasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the maestro_cuentas model
   */
  readonly fields: maestro_cuentasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for maestro_cuentas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__maestro_cuentasClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the maestro_cuentas model
   */ 
  interface maestro_cuentasFieldRefs {
    readonly idcuenta: FieldRef<"maestro_cuentas", 'Int'>
    readonly contrato: FieldRef<"maestro_cuentas", 'Int'>
    readonly dni: FieldRef<"maestro_cuentas", 'Int'>
    readonly grupo: FieldRef<"maestro_cuentas", 'Int'>
    readonly cuenta: FieldRef<"maestro_cuentas", 'String'>
    readonly observacion: FieldRef<"maestro_cuentas", 'String'>
  }
    

  // Custom InputTypes

  /**
   * maestro_cuentas base type for findUnique actions
   */
  export type maestro_cuentasFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro_cuentas
     */
    select?: maestro_cuentasSelect<ExtArgs> | null
    /**
     * Filter, which maestro_cuentas to fetch.
     */
    where: maestro_cuentasWhereUniqueInput
  }

  /**
   * maestro_cuentas findUnique
   */
  export interface maestro_cuentasFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends maestro_cuentasFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * maestro_cuentas findUniqueOrThrow
   */
  export type maestro_cuentasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro_cuentas
     */
    select?: maestro_cuentasSelect<ExtArgs> | null
    /**
     * Filter, which maestro_cuentas to fetch.
     */
    where: maestro_cuentasWhereUniqueInput
  }


  /**
   * maestro_cuentas base type for findFirst actions
   */
  export type maestro_cuentasFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro_cuentas
     */
    select?: maestro_cuentasSelect<ExtArgs> | null
    /**
     * Filter, which maestro_cuentas to fetch.
     */
    where?: maestro_cuentasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maestro_cuentas to fetch.
     */
    orderBy?: maestro_cuentasOrderByWithRelationInput | maestro_cuentasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maestro_cuentas.
     */
    cursor?: maestro_cuentasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maestro_cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maestro_cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maestro_cuentas.
     */
    distinct?: Maestro_cuentasScalarFieldEnum | Maestro_cuentasScalarFieldEnum[]
  }

  /**
   * maestro_cuentas findFirst
   */
  export interface maestro_cuentasFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends maestro_cuentasFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * maestro_cuentas findFirstOrThrow
   */
  export type maestro_cuentasFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro_cuentas
     */
    select?: maestro_cuentasSelect<ExtArgs> | null
    /**
     * Filter, which maestro_cuentas to fetch.
     */
    where?: maestro_cuentasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maestro_cuentas to fetch.
     */
    orderBy?: maestro_cuentasOrderByWithRelationInput | maestro_cuentasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maestro_cuentas.
     */
    cursor?: maestro_cuentasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maestro_cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maestro_cuentas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maestro_cuentas.
     */
    distinct?: Maestro_cuentasScalarFieldEnum | Maestro_cuentasScalarFieldEnum[]
  }


  /**
   * maestro_cuentas findMany
   */
  export type maestro_cuentasFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro_cuentas
     */
    select?: maestro_cuentasSelect<ExtArgs> | null
    /**
     * Filter, which maestro_cuentas to fetch.
     */
    where?: maestro_cuentasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maestro_cuentas to fetch.
     */
    orderBy?: maestro_cuentasOrderByWithRelationInput | maestro_cuentasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing maestro_cuentas.
     */
    cursor?: maestro_cuentasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maestro_cuentas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maestro_cuentas.
     */
    skip?: number
    distinct?: Maestro_cuentasScalarFieldEnum | Maestro_cuentasScalarFieldEnum[]
  }


  /**
   * maestro_cuentas create
   */
  export type maestro_cuentasCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro_cuentas
     */
    select?: maestro_cuentasSelect<ExtArgs> | null
    /**
     * The data needed to create a maestro_cuentas.
     */
    data?: XOR<maestro_cuentasCreateInput, maestro_cuentasUncheckedCreateInput>
  }


  /**
   * maestro_cuentas createMany
   */
  export type maestro_cuentasCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many maestro_cuentas.
     */
    data: maestro_cuentasCreateManyInput | maestro_cuentasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * maestro_cuentas update
   */
  export type maestro_cuentasUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro_cuentas
     */
    select?: maestro_cuentasSelect<ExtArgs> | null
    /**
     * The data needed to update a maestro_cuentas.
     */
    data: XOR<maestro_cuentasUpdateInput, maestro_cuentasUncheckedUpdateInput>
    /**
     * Choose, which maestro_cuentas to update.
     */
    where: maestro_cuentasWhereUniqueInput
  }


  /**
   * maestro_cuentas updateMany
   */
  export type maestro_cuentasUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update maestro_cuentas.
     */
    data: XOR<maestro_cuentasUpdateManyMutationInput, maestro_cuentasUncheckedUpdateManyInput>
    /**
     * Filter which maestro_cuentas to update
     */
    where?: maestro_cuentasWhereInput
  }


  /**
   * maestro_cuentas upsert
   */
  export type maestro_cuentasUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro_cuentas
     */
    select?: maestro_cuentasSelect<ExtArgs> | null
    /**
     * The filter to search for the maestro_cuentas to update in case it exists.
     */
    where: maestro_cuentasWhereUniqueInput
    /**
     * In case the maestro_cuentas found by the `where` argument doesn't exist, create a new maestro_cuentas with this data.
     */
    create: XOR<maestro_cuentasCreateInput, maestro_cuentasUncheckedCreateInput>
    /**
     * In case the maestro_cuentas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<maestro_cuentasUpdateInput, maestro_cuentasUncheckedUpdateInput>
  }


  /**
   * maestro_cuentas delete
   */
  export type maestro_cuentasDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro_cuentas
     */
    select?: maestro_cuentasSelect<ExtArgs> | null
    /**
     * Filter which maestro_cuentas to delete.
     */
    where: maestro_cuentasWhereUniqueInput
  }


  /**
   * maestro_cuentas deleteMany
   */
  export type maestro_cuentasDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which maestro_cuentas to delete
     */
    where?: maestro_cuentasWhereInput
  }


  /**
   * maestro_cuentas without action
   */
  export type maestro_cuentasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maestro_cuentas
     */
    select?: maestro_cuentasSelect<ExtArgs> | null
  }



  /**
   * Model operador
   */


  export type AggregateOperador = {
    _count: OperadorCountAggregateOutputType | null
    _avg: OperadorAvgAggregateOutputType | null
    _sum: OperadorSumAggregateOutputType | null
    _min: OperadorMinAggregateOutputType | null
    _max: OperadorMaxAggregateOutputType | null
  }

  export type OperadorAvgAggregateOutputType = {
    id: number | null
    perfil: number | null
    codigo: number | null
  }

  export type OperadorSumAggregateOutputType = {
    id: number | null
    perfil: number | null
    codigo: number | null
  }

  export type OperadorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    usuario: string | null
    contrasena: string | null
    createdAt: Date | null
    updatedAt: Date | null
    perfil: number | null
    estado: boolean | null
    codigo: number | null
    medicos: boolean | null
    sucursal: string | null
    prestamos: boolean | null
    ordenpago: boolean | null
    clubwerchow: boolean | null
    ventas: boolean | null
    administracion: boolean | null
    campanas: boolean | null
    socios: boolean | null
    sepelio: boolean | null
    gestion: boolean | null
    contabilidad: boolean | null
    cobranza: boolean | null
  }

  export type OperadorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    usuario: string | null
    contrasena: string | null
    createdAt: Date | null
    updatedAt: Date | null
    perfil: number | null
    estado: boolean | null
    codigo: number | null
    medicos: boolean | null
    sucursal: string | null
    prestamos: boolean | null
    ordenpago: boolean | null
    clubwerchow: boolean | null
    ventas: boolean | null
    administracion: boolean | null
    campanas: boolean | null
    socios: boolean | null
    sepelio: boolean | null
    gestion: boolean | null
    contabilidad: boolean | null
    cobranza: boolean | null
  }

  export type OperadorCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    usuario: number
    contrasena: number
    createdAt: number
    updatedAt: number
    perfil: number
    estado: number
    codigo: number
    medicos: number
    sucursal: number
    prestamos: number
    ordenpago: number
    clubwerchow: number
    ventas: number
    administracion: number
    campanas: number
    socios: number
    sepelio: number
    gestion: number
    contabilidad: number
    cobranza: number
    _all: number
  }


  export type OperadorAvgAggregateInputType = {
    id?: true
    perfil?: true
    codigo?: true
  }

  export type OperadorSumAggregateInputType = {
    id?: true
    perfil?: true
    codigo?: true
  }

  export type OperadorMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    usuario?: true
    contrasena?: true
    createdAt?: true
    updatedAt?: true
    perfil?: true
    estado?: true
    codigo?: true
    medicos?: true
    sucursal?: true
    prestamos?: true
    ordenpago?: true
    clubwerchow?: true
    ventas?: true
    administracion?: true
    campanas?: true
    socios?: true
    sepelio?: true
    gestion?: true
    contabilidad?: true
    cobranza?: true
  }

  export type OperadorMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    usuario?: true
    contrasena?: true
    createdAt?: true
    updatedAt?: true
    perfil?: true
    estado?: true
    codigo?: true
    medicos?: true
    sucursal?: true
    prestamos?: true
    ordenpago?: true
    clubwerchow?: true
    ventas?: true
    administracion?: true
    campanas?: true
    socios?: true
    sepelio?: true
    gestion?: true
    contabilidad?: true
    cobranza?: true
  }

  export type OperadorCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    usuario?: true
    contrasena?: true
    createdAt?: true
    updatedAt?: true
    perfil?: true
    estado?: true
    codigo?: true
    medicos?: true
    sucursal?: true
    prestamos?: true
    ordenpago?: true
    clubwerchow?: true
    ventas?: true
    administracion?: true
    campanas?: true
    socios?: true
    sepelio?: true
    gestion?: true
    contabilidad?: true
    cobranza?: true
    _all?: true
  }

  export type OperadorAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which operador to aggregate.
     */
    where?: operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operadors to fetch.
     */
    orderBy?: operadorOrderByWithRelationInput | operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned operadors
    **/
    _count?: true | OperadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperadorMaxAggregateInputType
  }

  export type GetOperadorAggregateType<T extends OperadorAggregateArgs> = {
        [P in keyof T & keyof AggregateOperador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperador[P]>
      : GetScalarType<T[P], AggregateOperador[P]>
  }




  export type operadorGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: operadorWhereInput
    orderBy?: operadorOrderByWithAggregationInput | operadorOrderByWithAggregationInput[]
    by: OperadorScalarFieldEnum[] | OperadorScalarFieldEnum
    having?: operadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperadorCountAggregateInputType | true
    _avg?: OperadorAvgAggregateInputType
    _sum?: OperadorSumAggregateInputType
    _min?: OperadorMinAggregateInputType
    _max?: OperadorMaxAggregateInputType
  }


  export type OperadorGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    usuario: string
    contrasena: string
    createdAt: Date
    updatedAt: Date
    perfil: number | null
    estado: boolean | null
    codigo: number | null
    medicos: boolean | null
    sucursal: string | null
    prestamos: boolean | null
    ordenpago: boolean | null
    clubwerchow: boolean | null
    ventas: boolean | null
    administracion: boolean | null
    campanas: boolean | null
    socios: boolean | null
    sepelio: boolean | null
    gestion: boolean | null
    contabilidad: boolean | null
    cobranza: boolean | null
    _count: OperadorCountAggregateOutputType | null
    _avg: OperadorAvgAggregateOutputType | null
    _sum: OperadorSumAggregateOutputType | null
    _min: OperadorMinAggregateOutputType | null
    _max: OperadorMaxAggregateOutputType | null
  }

  type GetOperadorGroupByPayload<T extends operadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperadorGroupByOutputType[P]>
            : GetScalarType<T[P], OperadorGroupByOutputType[P]>
        }
      >
    >


  export type operadorSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    usuario?: boolean
    contrasena?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    perfil?: boolean
    estado?: boolean
    codigo?: boolean
    medicos?: boolean
    sucursal?: boolean
    prestamos?: boolean
    ordenpago?: boolean
    clubwerchow?: boolean
    ventas?: boolean
    administracion?: boolean
    campanas?: boolean
    socios?: boolean
    sepelio?: boolean
    gestion?: boolean
    contabilidad?: boolean
    cobranza?: boolean
  }, ExtArgs["result"]["operador"]>

  export type operadorSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    usuario?: boolean
    contrasena?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    perfil?: boolean
    estado?: boolean
    codigo?: boolean
    medicos?: boolean
    sucursal?: boolean
    prestamos?: boolean
    ordenpago?: boolean
    clubwerchow?: boolean
    ventas?: boolean
    administracion?: boolean
    campanas?: boolean
    socios?: boolean
    sepelio?: boolean
    gestion?: boolean
    contabilidad?: boolean
    cobranza?: boolean
  }


  type operadorGetPayload<S extends boolean | null | undefined | operadorArgs> = $Types.GetResult<operadorPayload, S>

  type operadorCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<operadorFindManyArgs, 'select' | 'include'> & {
      select?: OperadorCountAggregateInputType | true
    }

  export interface operadorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['operador'], meta: { name: 'operador' } }
    /**
     * Find zero or one Operador that matches the filter.
     * @param {operadorFindUniqueArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends operadorFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, operadorFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'operador'> extends True ? Prisma__operadorClient<$Types.GetResult<operadorPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__operadorClient<$Types.GetResult<operadorPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Operador that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {operadorFindUniqueOrThrowArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends operadorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, operadorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__operadorClient<$Types.GetResult<operadorPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Operador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorFindFirstArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends operadorFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, operadorFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'operador'> extends True ? Prisma__operadorClient<$Types.GetResult<operadorPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__operadorClient<$Types.GetResult<operadorPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Operador that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorFindFirstOrThrowArgs} args - Arguments to find a Operador
     * @example
     * // Get one Operador
     * const operador = await prisma.operador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends operadorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, operadorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__operadorClient<$Types.GetResult<operadorPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Operadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operadors
     * const operadors = await prisma.operador.findMany()
     * 
     * // Get first 10 Operadors
     * const operadors = await prisma.operador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operadorWithIdOnly = await prisma.operador.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends operadorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operadorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<operadorPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Operador.
     * @param {operadorCreateArgs} args - Arguments to create a Operador.
     * @example
     * // Create one Operador
     * const Operador = await prisma.operador.create({
     *   data: {
     *     // ... data to create a Operador
     *   }
     * })
     * 
    **/
    create<T extends operadorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, operadorCreateArgs<ExtArgs>>
    ): Prisma__operadorClient<$Types.GetResult<operadorPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Operadors.
     *     @param {operadorCreateManyArgs} args - Arguments to create many Operadors.
     *     @example
     *     // Create many Operadors
     *     const operador = await prisma.operador.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends operadorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operadorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Operador.
     * @param {operadorDeleteArgs} args - Arguments to delete one Operador.
     * @example
     * // Delete one Operador
     * const Operador = await prisma.operador.delete({
     *   where: {
     *     // ... filter to delete one Operador
     *   }
     * })
     * 
    **/
    delete<T extends operadorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, operadorDeleteArgs<ExtArgs>>
    ): Prisma__operadorClient<$Types.GetResult<operadorPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Operador.
     * @param {operadorUpdateArgs} args - Arguments to update one Operador.
     * @example
     * // Update one Operador
     * const operador = await prisma.operador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends operadorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, operadorUpdateArgs<ExtArgs>>
    ): Prisma__operadorClient<$Types.GetResult<operadorPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Operadors.
     * @param {operadorDeleteManyArgs} args - Arguments to filter Operadors to delete.
     * @example
     * // Delete a few Operadors
     * const { count } = await prisma.operador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends operadorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operadorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operadors
     * const operador = await prisma.operador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends operadorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, operadorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Operador.
     * @param {operadorUpsertArgs} args - Arguments to update or create a Operador.
     * @example
     * // Update or create a Operador
     * const operador = await prisma.operador.upsert({
     *   create: {
     *     // ... data to create a Operador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operador we want to update
     *   }
     * })
    **/
    upsert<T extends operadorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, operadorUpsertArgs<ExtArgs>>
    ): Prisma__operadorClient<$Types.GetResult<operadorPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Operadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorCountArgs} args - Arguments to filter Operadors to count.
     * @example
     * // Count the number of Operadors
     * const count = await prisma.operador.count({
     *   where: {
     *     // ... the filter for the Operadors we want to count
     *   }
     * })
    **/
    count<T extends operadorCountArgs>(
      args?: Subset<T, operadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OperadorAggregateArgs>(args: Subset<T, OperadorAggregateArgs>): Prisma.PrismaPromise<GetOperadorAggregateType<T>>

    /**
     * Group by Operador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends operadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operadorGroupByArgs['orderBy'] }
        : { orderBy?: operadorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, operadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the operador model
   */
  readonly fields: operadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__operadorClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the operador model
   */ 
  interface operadorFieldRefs {
    readonly id: FieldRef<"operador", 'Int'>
    readonly nombre: FieldRef<"operador", 'String'>
    readonly apellido: FieldRef<"operador", 'String'>
    readonly usuario: FieldRef<"operador", 'String'>
    readonly contrasena: FieldRef<"operador", 'String'>
    readonly createdAt: FieldRef<"operador", 'DateTime'>
    readonly updatedAt: FieldRef<"operador", 'DateTime'>
    readonly perfil: FieldRef<"operador", 'Int'>
    readonly estado: FieldRef<"operador", 'Boolean'>
    readonly codigo: FieldRef<"operador", 'Int'>
    readonly medicos: FieldRef<"operador", 'Boolean'>
    readonly sucursal: FieldRef<"operador", 'String'>
    readonly prestamos: FieldRef<"operador", 'Boolean'>
    readonly ordenpago: FieldRef<"operador", 'Boolean'>
    readonly clubwerchow: FieldRef<"operador", 'Boolean'>
    readonly ventas: FieldRef<"operador", 'Boolean'>
    readonly administracion: FieldRef<"operador", 'Boolean'>
    readonly campanas: FieldRef<"operador", 'Boolean'>
    readonly socios: FieldRef<"operador", 'Boolean'>
    readonly sepelio: FieldRef<"operador", 'Boolean'>
    readonly gestion: FieldRef<"operador", 'Boolean'>
    readonly contabilidad: FieldRef<"operador", 'Boolean'>
    readonly cobranza: FieldRef<"operador", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * operador base type for findUnique actions
   */
  export type operadorFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Filter, which operador to fetch.
     */
    where: operadorWhereUniqueInput
  }

  /**
   * operador findUnique
   */
  export interface operadorFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends operadorFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * operador findUniqueOrThrow
   */
  export type operadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Filter, which operador to fetch.
     */
    where: operadorWhereUniqueInput
  }


  /**
   * operador base type for findFirst actions
   */
  export type operadorFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Filter, which operador to fetch.
     */
    where?: operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operadors to fetch.
     */
    orderBy?: operadorOrderByWithRelationInput | operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operadors.
     */
    cursor?: operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operadors.
     */
    distinct?: OperadorScalarFieldEnum | OperadorScalarFieldEnum[]
  }

  /**
   * operador findFirst
   */
  export interface operadorFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends operadorFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * operador findFirstOrThrow
   */
  export type operadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Filter, which operador to fetch.
     */
    where?: operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operadors to fetch.
     */
    orderBy?: operadorOrderByWithRelationInput | operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operadors.
     */
    cursor?: operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operadors.
     */
    distinct?: OperadorScalarFieldEnum | OperadorScalarFieldEnum[]
  }


  /**
   * operador findMany
   */
  export type operadorFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Filter, which operadors to fetch.
     */
    where?: operadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operadors to fetch.
     */
    orderBy?: operadorOrderByWithRelationInput | operadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing operadors.
     */
    cursor?: operadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operadors.
     */
    skip?: number
    distinct?: OperadorScalarFieldEnum | OperadorScalarFieldEnum[]
  }


  /**
   * operador create
   */
  export type operadorCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * The data needed to create a operador.
     */
    data: XOR<operadorCreateInput, operadorUncheckedCreateInput>
  }


  /**
   * operador createMany
   */
  export type operadorCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operadors.
     */
    data: operadorCreateManyInput | operadorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * operador update
   */
  export type operadorUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * The data needed to update a operador.
     */
    data: XOR<operadorUpdateInput, operadorUncheckedUpdateInput>
    /**
     * Choose, which operador to update.
     */
    where: operadorWhereUniqueInput
  }


  /**
   * operador updateMany
   */
  export type operadorUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operadors.
     */
    data: XOR<operadorUpdateManyMutationInput, operadorUncheckedUpdateManyInput>
    /**
     * Filter which operadors to update
     */
    where?: operadorWhereInput
  }


  /**
   * operador upsert
   */
  export type operadorUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * The filter to search for the operador to update in case it exists.
     */
    where: operadorWhereUniqueInput
    /**
     * In case the operador found by the `where` argument doesn't exist, create a new operador with this data.
     */
    create: XOR<operadorCreateInput, operadorUncheckedCreateInput>
    /**
     * In case the operador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operadorUpdateInput, operadorUncheckedUpdateInput>
  }


  /**
   * operador delete
   */
  export type operadorDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
    /**
     * Filter which operador to delete.
     */
    where: operadorWhereUniqueInput
  }


  /**
   * operador deleteMany
   */
  export type operadorDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which operadors to delete
     */
    where?: operadorWhereInput
  }


  /**
   * operador without action
   */
  export type operadorArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operador
     */
    select?: operadorSelect<ExtArgs> | null
  }



  /**
   * Model subcta_old
   */


  export type AggregateSubcta_old = {
    _count: Subcta_oldCountAggregateOutputType | null
    _avg: Subcta_oldAvgAggregateOutputType | null
    _sum: Subcta_oldSumAggregateOutputType | null
    _min: Subcta_oldMinAggregateOutputType | null
    _max: Subcta_oldMaxAggregateOutputType | null
  }

  export type Subcta_oldAvgAggregateOutputType = {
    CODI: number | null
    CUEN: number | null
    id: number | null
  }

  export type Subcta_oldSumAggregateOutputType = {
    CODI: number | null
    CUEN: number | null
    id: number | null
  }

  export type Subcta_oldMinAggregateOutputType = {
    CODI: number | null
    DESC: string | null
    CUEN: number | null
    MOVIM: string | null
    id: number | null
  }

  export type Subcta_oldMaxAggregateOutputType = {
    CODI: number | null
    DESC: string | null
    CUEN: number | null
    MOVIM: string | null
    id: number | null
  }

  export type Subcta_oldCountAggregateOutputType = {
    CODI: number
    DESC: number
    CUEN: number
    MOVIM: number
    id: number
    _all: number
  }


  export type Subcta_oldAvgAggregateInputType = {
    CODI?: true
    CUEN?: true
    id?: true
  }

  export type Subcta_oldSumAggregateInputType = {
    CODI?: true
    CUEN?: true
    id?: true
  }

  export type Subcta_oldMinAggregateInputType = {
    CODI?: true
    DESC?: true
    CUEN?: true
    MOVIM?: true
    id?: true
  }

  export type Subcta_oldMaxAggregateInputType = {
    CODI?: true
    DESC?: true
    CUEN?: true
    MOVIM?: true
    id?: true
  }

  export type Subcta_oldCountAggregateInputType = {
    CODI?: true
    DESC?: true
    CUEN?: true
    MOVIM?: true
    id?: true
    _all?: true
  }

  export type Subcta_oldAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which subcta_old to aggregate.
     */
    where?: subcta_oldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcta_olds to fetch.
     */
    orderBy?: subcta_oldOrderByWithRelationInput | subcta_oldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subcta_oldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcta_olds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcta_olds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subcta_olds
    **/
    _count?: true | Subcta_oldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Subcta_oldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Subcta_oldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Subcta_oldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Subcta_oldMaxAggregateInputType
  }

  export type GetSubcta_oldAggregateType<T extends Subcta_oldAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcta_old]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcta_old[P]>
      : GetScalarType<T[P], AggregateSubcta_old[P]>
  }




  export type subcta_oldGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: subcta_oldWhereInput
    orderBy?: subcta_oldOrderByWithAggregationInput | subcta_oldOrderByWithAggregationInput[]
    by: Subcta_oldScalarFieldEnum[] | Subcta_oldScalarFieldEnum
    having?: subcta_oldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Subcta_oldCountAggregateInputType | true
    _avg?: Subcta_oldAvgAggregateInputType
    _sum?: Subcta_oldSumAggregateInputType
    _min?: Subcta_oldMinAggregateInputType
    _max?: Subcta_oldMaxAggregateInputType
  }


  export type Subcta_oldGroupByOutputType = {
    CODI: number | null
    DESC: string | null
    CUEN: number | null
    MOVIM: string | null
    id: number
    _count: Subcta_oldCountAggregateOutputType | null
    _avg: Subcta_oldAvgAggregateOutputType | null
    _sum: Subcta_oldSumAggregateOutputType | null
    _min: Subcta_oldMinAggregateOutputType | null
    _max: Subcta_oldMaxAggregateOutputType | null
  }

  type GetSubcta_oldGroupByPayload<T extends subcta_oldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Subcta_oldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Subcta_oldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Subcta_oldGroupByOutputType[P]>
            : GetScalarType<T[P], Subcta_oldGroupByOutputType[P]>
        }
      >
    >


  export type subcta_oldSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CODI?: boolean
    DESC?: boolean
    CUEN?: boolean
    MOVIM?: boolean
    id?: boolean
  }, ExtArgs["result"]["subcta_old"]>

  export type subcta_oldSelectScalar = {
    CODI?: boolean
    DESC?: boolean
    CUEN?: boolean
    MOVIM?: boolean
    id?: boolean
  }


  type subcta_oldGetPayload<S extends boolean | null | undefined | subcta_oldArgs> = $Types.GetResult<subcta_oldPayload, S>

  type subcta_oldCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<subcta_oldFindManyArgs, 'select' | 'include'> & {
      select?: Subcta_oldCountAggregateInputType | true
    }

  export interface subcta_oldDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subcta_old'], meta: { name: 'subcta_old' } }
    /**
     * Find zero or one Subcta_old that matches the filter.
     * @param {subcta_oldFindUniqueArgs} args - Arguments to find a Subcta_old
     * @example
     * // Get one Subcta_old
     * const subcta_old = await prisma.subcta_old.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends subcta_oldFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, subcta_oldFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'subcta_old'> extends True ? Prisma__subcta_oldClient<$Types.GetResult<subcta_oldPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__subcta_oldClient<$Types.GetResult<subcta_oldPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Subcta_old that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {subcta_oldFindUniqueOrThrowArgs} args - Arguments to find a Subcta_old
     * @example
     * // Get one Subcta_old
     * const subcta_old = await prisma.subcta_old.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends subcta_oldFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subcta_oldFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__subcta_oldClient<$Types.GetResult<subcta_oldPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Subcta_old that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcta_oldFindFirstArgs} args - Arguments to find a Subcta_old
     * @example
     * // Get one Subcta_old
     * const subcta_old = await prisma.subcta_old.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends subcta_oldFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, subcta_oldFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'subcta_old'> extends True ? Prisma__subcta_oldClient<$Types.GetResult<subcta_oldPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__subcta_oldClient<$Types.GetResult<subcta_oldPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Subcta_old that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcta_oldFindFirstOrThrowArgs} args - Arguments to find a Subcta_old
     * @example
     * // Get one Subcta_old
     * const subcta_old = await prisma.subcta_old.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends subcta_oldFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subcta_oldFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__subcta_oldClient<$Types.GetResult<subcta_oldPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Subcta_olds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcta_oldFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subcta_olds
     * const subcta_olds = await prisma.subcta_old.findMany()
     * 
     * // Get first 10 Subcta_olds
     * const subcta_olds = await prisma.subcta_old.findMany({ take: 10 })
     * 
     * // Only select the `CODI`
     * const subcta_oldWithCODIOnly = await prisma.subcta_old.findMany({ select: { CODI: true } })
     * 
    **/
    findMany<T extends subcta_oldFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subcta_oldFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<subcta_oldPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Subcta_old.
     * @param {subcta_oldCreateArgs} args - Arguments to create a Subcta_old.
     * @example
     * // Create one Subcta_old
     * const Subcta_old = await prisma.subcta_old.create({
     *   data: {
     *     // ... data to create a Subcta_old
     *   }
     * })
     * 
    **/
    create<T extends subcta_oldCreateArgs<ExtArgs>>(
      args: SelectSubset<T, subcta_oldCreateArgs<ExtArgs>>
    ): Prisma__subcta_oldClient<$Types.GetResult<subcta_oldPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Subcta_olds.
     *     @param {subcta_oldCreateManyArgs} args - Arguments to create many Subcta_olds.
     *     @example
     *     // Create many Subcta_olds
     *     const subcta_old = await prisma.subcta_old.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends subcta_oldCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subcta_oldCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subcta_old.
     * @param {subcta_oldDeleteArgs} args - Arguments to delete one Subcta_old.
     * @example
     * // Delete one Subcta_old
     * const Subcta_old = await prisma.subcta_old.delete({
     *   where: {
     *     // ... filter to delete one Subcta_old
     *   }
     * })
     * 
    **/
    delete<T extends subcta_oldDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, subcta_oldDeleteArgs<ExtArgs>>
    ): Prisma__subcta_oldClient<$Types.GetResult<subcta_oldPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Subcta_old.
     * @param {subcta_oldUpdateArgs} args - Arguments to update one Subcta_old.
     * @example
     * // Update one Subcta_old
     * const subcta_old = await prisma.subcta_old.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends subcta_oldUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, subcta_oldUpdateArgs<ExtArgs>>
    ): Prisma__subcta_oldClient<$Types.GetResult<subcta_oldPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Subcta_olds.
     * @param {subcta_oldDeleteManyArgs} args - Arguments to filter Subcta_olds to delete.
     * @example
     * // Delete a few Subcta_olds
     * const { count } = await prisma.subcta_old.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends subcta_oldDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subcta_oldDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcta_olds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcta_oldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subcta_olds
     * const subcta_old = await prisma.subcta_old.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends subcta_oldUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, subcta_oldUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subcta_old.
     * @param {subcta_oldUpsertArgs} args - Arguments to update or create a Subcta_old.
     * @example
     * // Update or create a Subcta_old
     * const subcta_old = await prisma.subcta_old.upsert({
     *   create: {
     *     // ... data to create a Subcta_old
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subcta_old we want to update
     *   }
     * })
    **/
    upsert<T extends subcta_oldUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, subcta_oldUpsertArgs<ExtArgs>>
    ): Prisma__subcta_oldClient<$Types.GetResult<subcta_oldPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Subcta_olds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcta_oldCountArgs} args - Arguments to filter Subcta_olds to count.
     * @example
     * // Count the number of Subcta_olds
     * const count = await prisma.subcta_old.count({
     *   where: {
     *     // ... the filter for the Subcta_olds we want to count
     *   }
     * })
    **/
    count<T extends subcta_oldCountArgs>(
      args?: Subset<T, subcta_oldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Subcta_oldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subcta_old.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Subcta_oldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Subcta_oldAggregateArgs>(args: Subset<T, Subcta_oldAggregateArgs>): Prisma.PrismaPromise<GetSubcta_oldAggregateType<T>>

    /**
     * Group by Subcta_old.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subcta_oldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends subcta_oldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subcta_oldGroupByArgs['orderBy'] }
        : { orderBy?: subcta_oldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, subcta_oldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubcta_oldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subcta_old model
   */
  readonly fields: subcta_oldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subcta_old.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__subcta_oldClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the subcta_old model
   */ 
  interface subcta_oldFieldRefs {
    readonly CODI: FieldRef<"subcta_old", 'Int'>
    readonly DESC: FieldRef<"subcta_old", 'String'>
    readonly CUEN: FieldRef<"subcta_old", 'Int'>
    readonly MOVIM: FieldRef<"subcta_old", 'String'>
    readonly id: FieldRef<"subcta_old", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * subcta_old base type for findUnique actions
   */
  export type subcta_oldFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta_old
     */
    select?: subcta_oldSelect<ExtArgs> | null
    /**
     * Filter, which subcta_old to fetch.
     */
    where: subcta_oldWhereUniqueInput
  }

  /**
   * subcta_old findUnique
   */
  export interface subcta_oldFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends subcta_oldFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * subcta_old findUniqueOrThrow
   */
  export type subcta_oldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta_old
     */
    select?: subcta_oldSelect<ExtArgs> | null
    /**
     * Filter, which subcta_old to fetch.
     */
    where: subcta_oldWhereUniqueInput
  }


  /**
   * subcta_old base type for findFirst actions
   */
  export type subcta_oldFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta_old
     */
    select?: subcta_oldSelect<ExtArgs> | null
    /**
     * Filter, which subcta_old to fetch.
     */
    where?: subcta_oldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcta_olds to fetch.
     */
    orderBy?: subcta_oldOrderByWithRelationInput | subcta_oldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subcta_olds.
     */
    cursor?: subcta_oldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcta_olds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcta_olds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subcta_olds.
     */
    distinct?: Subcta_oldScalarFieldEnum | Subcta_oldScalarFieldEnum[]
  }

  /**
   * subcta_old findFirst
   */
  export interface subcta_oldFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends subcta_oldFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * subcta_old findFirstOrThrow
   */
  export type subcta_oldFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta_old
     */
    select?: subcta_oldSelect<ExtArgs> | null
    /**
     * Filter, which subcta_old to fetch.
     */
    where?: subcta_oldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcta_olds to fetch.
     */
    orderBy?: subcta_oldOrderByWithRelationInput | subcta_oldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subcta_olds.
     */
    cursor?: subcta_oldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcta_olds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcta_olds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subcta_olds.
     */
    distinct?: Subcta_oldScalarFieldEnum | Subcta_oldScalarFieldEnum[]
  }


  /**
   * subcta_old findMany
   */
  export type subcta_oldFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta_old
     */
    select?: subcta_oldSelect<ExtArgs> | null
    /**
     * Filter, which subcta_olds to fetch.
     */
    where?: subcta_oldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subcta_olds to fetch.
     */
    orderBy?: subcta_oldOrderByWithRelationInput | subcta_oldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subcta_olds.
     */
    cursor?: subcta_oldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subcta_olds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subcta_olds.
     */
    skip?: number
    distinct?: Subcta_oldScalarFieldEnum | Subcta_oldScalarFieldEnum[]
  }


  /**
   * subcta_old create
   */
  export type subcta_oldCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta_old
     */
    select?: subcta_oldSelect<ExtArgs> | null
    /**
     * The data needed to create a subcta_old.
     */
    data?: XOR<subcta_oldCreateInput, subcta_oldUncheckedCreateInput>
  }


  /**
   * subcta_old createMany
   */
  export type subcta_oldCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subcta_olds.
     */
    data: subcta_oldCreateManyInput | subcta_oldCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * subcta_old update
   */
  export type subcta_oldUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta_old
     */
    select?: subcta_oldSelect<ExtArgs> | null
    /**
     * The data needed to update a subcta_old.
     */
    data: XOR<subcta_oldUpdateInput, subcta_oldUncheckedUpdateInput>
    /**
     * Choose, which subcta_old to update.
     */
    where: subcta_oldWhereUniqueInput
  }


  /**
   * subcta_old updateMany
   */
  export type subcta_oldUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subcta_olds.
     */
    data: XOR<subcta_oldUpdateManyMutationInput, subcta_oldUncheckedUpdateManyInput>
    /**
     * Filter which subcta_olds to update
     */
    where?: subcta_oldWhereInput
  }


  /**
   * subcta_old upsert
   */
  export type subcta_oldUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta_old
     */
    select?: subcta_oldSelect<ExtArgs> | null
    /**
     * The filter to search for the subcta_old to update in case it exists.
     */
    where: subcta_oldWhereUniqueInput
    /**
     * In case the subcta_old found by the `where` argument doesn't exist, create a new subcta_old with this data.
     */
    create: XOR<subcta_oldCreateInput, subcta_oldUncheckedCreateInput>
    /**
     * In case the subcta_old was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subcta_oldUpdateInput, subcta_oldUncheckedUpdateInput>
  }


  /**
   * subcta_old delete
   */
  export type subcta_oldDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta_old
     */
    select?: subcta_oldSelect<ExtArgs> | null
    /**
     * Filter which subcta_old to delete.
     */
    where: subcta_oldWhereUniqueInput
  }


  /**
   * subcta_old deleteMany
   */
  export type subcta_oldDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which subcta_olds to delete
     */
    where?: subcta_oldWhereInput
  }


  /**
   * subcta_old without action
   */
  export type subcta_oldArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subcta_old
     */
    select?: subcta_oldSelect<ExtArgs> | null
  }



  /**
   * Model so
   */


  export type AggregateSo = {
    _count: SoCountAggregateOutputType | null
    _avg: SoAvgAggregateOutputType | null
    _sum: SoSumAggregateOutputType | null
    _min: SoMinAggregateOutputType | null
    _max: SoMaxAggregateOutputType | null
  }

  export type SoAvgAggregateOutputType = {
    id: number | null
  }

  export type SoSumAggregateOutputType = {
    id: number | null
  }

  export type SoMinAggregateOutputType = {
    CONTRATO: string | null
    SOCIO: string | null
    ALTA: string | null
    GRUPO: string | null
    ADHERENTES: string | null
    PLAN: string | null
    ZONA: string | null
    EDAD: string | null
    CUOTA: string | null
    EMPRESA: string | null
    SUCURSAL: string | null
    CUOTAS: string | null
    PAGOS: string | null
    DEUDA: string | null
    id: number | null
  }

  export type SoMaxAggregateOutputType = {
    CONTRATO: string | null
    SOCIO: string | null
    ALTA: string | null
    GRUPO: string | null
    ADHERENTES: string | null
    PLAN: string | null
    ZONA: string | null
    EDAD: string | null
    CUOTA: string | null
    EMPRESA: string | null
    SUCURSAL: string | null
    CUOTAS: string | null
    PAGOS: string | null
    DEUDA: string | null
    id: number | null
  }

  export type SoCountAggregateOutputType = {
    CONTRATO: number
    SOCIO: number
    ALTA: number
    GRUPO: number
    ADHERENTES: number
    PLAN: number
    ZONA: number
    EDAD: number
    CUOTA: number
    EMPRESA: number
    SUCURSAL: number
    CUOTAS: number
    PAGOS: number
    DEUDA: number
    id: number
    _all: number
  }


  export type SoAvgAggregateInputType = {
    id?: true
  }

  export type SoSumAggregateInputType = {
    id?: true
  }

  export type SoMinAggregateInputType = {
    CONTRATO?: true
    SOCIO?: true
    ALTA?: true
    GRUPO?: true
    ADHERENTES?: true
    PLAN?: true
    ZONA?: true
    EDAD?: true
    CUOTA?: true
    EMPRESA?: true
    SUCURSAL?: true
    CUOTAS?: true
    PAGOS?: true
    DEUDA?: true
    id?: true
  }

  export type SoMaxAggregateInputType = {
    CONTRATO?: true
    SOCIO?: true
    ALTA?: true
    GRUPO?: true
    ADHERENTES?: true
    PLAN?: true
    ZONA?: true
    EDAD?: true
    CUOTA?: true
    EMPRESA?: true
    SUCURSAL?: true
    CUOTAS?: true
    PAGOS?: true
    DEUDA?: true
    id?: true
  }

  export type SoCountAggregateInputType = {
    CONTRATO?: true
    SOCIO?: true
    ALTA?: true
    GRUPO?: true
    ADHERENTES?: true
    PLAN?: true
    ZONA?: true
    EDAD?: true
    CUOTA?: true
    EMPRESA?: true
    SUCURSAL?: true
    CUOTAS?: true
    PAGOS?: true
    DEUDA?: true
    id?: true
    _all?: true
  }

  export type SoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which so to aggregate.
     */
    where?: soWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sos to fetch.
     */
    orderBy?: soOrderByWithRelationInput | soOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: soWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sos
    **/
    _count?: true | SoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoMaxAggregateInputType
  }

  export type GetSoAggregateType<T extends SoAggregateArgs> = {
        [P in keyof T & keyof AggregateSo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSo[P]>
      : GetScalarType<T[P], AggregateSo[P]>
  }




  export type soGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: soWhereInput
    orderBy?: soOrderByWithAggregationInput | soOrderByWithAggregationInput[]
    by: SoScalarFieldEnum[] | SoScalarFieldEnum
    having?: soScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoCountAggregateInputType | true
    _avg?: SoAvgAggregateInputType
    _sum?: SoSumAggregateInputType
    _min?: SoMinAggregateInputType
    _max?: SoMaxAggregateInputType
  }


  export type SoGroupByOutputType = {
    CONTRATO: string | null
    SOCIO: string | null
    ALTA: string | null
    GRUPO: string | null
    ADHERENTES: string | null
    PLAN: string | null
    ZONA: string | null
    EDAD: string | null
    CUOTA: string | null
    EMPRESA: string | null
    SUCURSAL: string | null
    CUOTAS: string | null
    PAGOS: string | null
    DEUDA: string | null
    id: number
    _count: SoCountAggregateOutputType | null
    _avg: SoAvgAggregateOutputType | null
    _sum: SoSumAggregateOutputType | null
    _min: SoMinAggregateOutputType | null
    _max: SoMaxAggregateOutputType | null
  }

  type GetSoGroupByPayload<T extends soGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoGroupByOutputType[P]>
            : GetScalarType<T[P], SoGroupByOutputType[P]>
        }
      >
    >


  export type soSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CONTRATO?: boolean
    SOCIO?: boolean
    ALTA?: boolean
    GRUPO?: boolean
    ADHERENTES?: boolean
    PLAN?: boolean
    ZONA?: boolean
    EDAD?: boolean
    CUOTA?: boolean
    EMPRESA?: boolean
    SUCURSAL?: boolean
    CUOTAS?: boolean
    PAGOS?: boolean
    DEUDA?: boolean
    id?: boolean
  }, ExtArgs["result"]["so"]>

  export type soSelectScalar = {
    CONTRATO?: boolean
    SOCIO?: boolean
    ALTA?: boolean
    GRUPO?: boolean
    ADHERENTES?: boolean
    PLAN?: boolean
    ZONA?: boolean
    EDAD?: boolean
    CUOTA?: boolean
    EMPRESA?: boolean
    SUCURSAL?: boolean
    CUOTAS?: boolean
    PAGOS?: boolean
    DEUDA?: boolean
    id?: boolean
  }


  type soGetPayload<S extends boolean | null | undefined | soArgs> = $Types.GetResult<soPayload, S>

  type soCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<soFindManyArgs, 'select' | 'include'> & {
      select?: SoCountAggregateInputType | true
    }

  export interface soDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['so'], meta: { name: 'so' } }
    /**
     * Find zero or one So that matches the filter.
     * @param {soFindUniqueArgs} args - Arguments to find a So
     * @example
     * // Get one So
     * const so = await prisma.so.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends soFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, soFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'so'> extends True ? Prisma__soClient<$Types.GetResult<soPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__soClient<$Types.GetResult<soPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one So that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {soFindUniqueOrThrowArgs} args - Arguments to find a So
     * @example
     * // Get one So
     * const so = await prisma.so.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends soFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, soFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__soClient<$Types.GetResult<soPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first So that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soFindFirstArgs} args - Arguments to find a So
     * @example
     * // Get one So
     * const so = await prisma.so.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends soFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, soFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'so'> extends True ? Prisma__soClient<$Types.GetResult<soPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__soClient<$Types.GetResult<soPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first So that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soFindFirstOrThrowArgs} args - Arguments to find a So
     * @example
     * // Get one So
     * const so = await prisma.so.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends soFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, soFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__soClient<$Types.GetResult<soPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Sos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sos
     * const sos = await prisma.so.findMany()
     * 
     * // Get first 10 Sos
     * const sos = await prisma.so.findMany({ take: 10 })
     * 
     * // Only select the `CONTRATO`
     * const soWithCONTRATOOnly = await prisma.so.findMany({ select: { CONTRATO: true } })
     * 
    **/
    findMany<T extends soFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, soFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<soPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a So.
     * @param {soCreateArgs} args - Arguments to create a So.
     * @example
     * // Create one So
     * const So = await prisma.so.create({
     *   data: {
     *     // ... data to create a So
     *   }
     * })
     * 
    **/
    create<T extends soCreateArgs<ExtArgs>>(
      args: SelectSubset<T, soCreateArgs<ExtArgs>>
    ): Prisma__soClient<$Types.GetResult<soPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Sos.
     *     @param {soCreateManyArgs} args - Arguments to create many Sos.
     *     @example
     *     // Create many Sos
     *     const so = await prisma.so.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends soCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, soCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a So.
     * @param {soDeleteArgs} args - Arguments to delete one So.
     * @example
     * // Delete one So
     * const So = await prisma.so.delete({
     *   where: {
     *     // ... filter to delete one So
     *   }
     * })
     * 
    **/
    delete<T extends soDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, soDeleteArgs<ExtArgs>>
    ): Prisma__soClient<$Types.GetResult<soPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one So.
     * @param {soUpdateArgs} args - Arguments to update one So.
     * @example
     * // Update one So
     * const so = await prisma.so.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends soUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, soUpdateArgs<ExtArgs>>
    ): Prisma__soClient<$Types.GetResult<soPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Sos.
     * @param {soDeleteManyArgs} args - Arguments to filter Sos to delete.
     * @example
     * // Delete a few Sos
     * const { count } = await prisma.so.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends soDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, soDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sos
     * const so = await prisma.so.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends soUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, soUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one So.
     * @param {soUpsertArgs} args - Arguments to update or create a So.
     * @example
     * // Update or create a So
     * const so = await prisma.so.upsert({
     *   create: {
     *     // ... data to create a So
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the So we want to update
     *   }
     * })
    **/
    upsert<T extends soUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, soUpsertArgs<ExtArgs>>
    ): Prisma__soClient<$Types.GetResult<soPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Sos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soCountArgs} args - Arguments to filter Sos to count.
     * @example
     * // Count the number of Sos
     * const count = await prisma.so.count({
     *   where: {
     *     // ... the filter for the Sos we want to count
     *   }
     * })
    **/
    count<T extends soCountArgs>(
      args?: Subset<T, soCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a So.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SoAggregateArgs>(args: Subset<T, SoAggregateArgs>): Prisma.PrismaPromise<GetSoAggregateType<T>>

    /**
     * Group by So.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {soGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends soGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: soGroupByArgs['orderBy'] }
        : { orderBy?: soGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, soGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the so model
   */
  readonly fields: soFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for so.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__soClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  /**
   * Fields of the so model
   */ 
  interface soFieldRefs {
    readonly CONTRATO: FieldRef<"so", 'String'>
    readonly SOCIO: FieldRef<"so", 'String'>
    readonly ALTA: FieldRef<"so", 'String'>
    readonly GRUPO: FieldRef<"so", 'String'>
    readonly ADHERENTES: FieldRef<"so", 'String'>
    readonly PLAN: FieldRef<"so", 'String'>
    readonly ZONA: FieldRef<"so", 'String'>
    readonly EDAD: FieldRef<"so", 'String'>
    readonly CUOTA: FieldRef<"so", 'String'>
    readonly EMPRESA: FieldRef<"so", 'String'>
    readonly SUCURSAL: FieldRef<"so", 'String'>
    readonly CUOTAS: FieldRef<"so", 'String'>
    readonly PAGOS: FieldRef<"so", 'String'>
    readonly DEUDA: FieldRef<"so", 'String'>
    readonly id: FieldRef<"so", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * so base type for findUnique actions
   */
  export type soFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so
     */
    select?: soSelect<ExtArgs> | null
    /**
     * Filter, which so to fetch.
     */
    where: soWhereUniqueInput
  }

  /**
   * so findUnique
   */
  export interface soFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends soFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * so findUniqueOrThrow
   */
  export type soFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so
     */
    select?: soSelect<ExtArgs> | null
    /**
     * Filter, which so to fetch.
     */
    where: soWhereUniqueInput
  }


  /**
   * so base type for findFirst actions
   */
  export type soFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so
     */
    select?: soSelect<ExtArgs> | null
    /**
     * Filter, which so to fetch.
     */
    where?: soWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sos to fetch.
     */
    orderBy?: soOrderByWithRelationInput | soOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sos.
     */
    cursor?: soWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sos.
     */
    distinct?: SoScalarFieldEnum | SoScalarFieldEnum[]
  }

  /**
   * so findFirst
   */
  export interface soFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends soFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * so findFirstOrThrow
   */
  export type soFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so
     */
    select?: soSelect<ExtArgs> | null
    /**
     * Filter, which so to fetch.
     */
    where?: soWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sos to fetch.
     */
    orderBy?: soOrderByWithRelationInput | soOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sos.
     */
    cursor?: soWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sos.
     */
    distinct?: SoScalarFieldEnum | SoScalarFieldEnum[]
  }


  /**
   * so findMany
   */
  export type soFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so
     */
    select?: soSelect<ExtArgs> | null
    /**
     * Filter, which sos to fetch.
     */
    where?: soWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sos to fetch.
     */
    orderBy?: soOrderByWithRelationInput | soOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sos.
     */
    cursor?: soWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sos.
     */
    skip?: number
    distinct?: SoScalarFieldEnum | SoScalarFieldEnum[]
  }


  /**
   * so create
   */
  export type soCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so
     */
    select?: soSelect<ExtArgs> | null
    /**
     * The data needed to create a so.
     */
    data?: XOR<soCreateInput, soUncheckedCreateInput>
  }


  /**
   * so createMany
   */
  export type soCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sos.
     */
    data: soCreateManyInput | soCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * so update
   */
  export type soUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so
     */
    select?: soSelect<ExtArgs> | null
    /**
     * The data needed to update a so.
     */
    data: XOR<soUpdateInput, soUncheckedUpdateInput>
    /**
     * Choose, which so to update.
     */
    where: soWhereUniqueInput
  }


  /**
   * so updateMany
   */
  export type soUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sos.
     */
    data: XOR<soUpdateManyMutationInput, soUncheckedUpdateManyInput>
    /**
     * Filter which sos to update
     */
    where?: soWhereInput
  }


  /**
   * so upsert
   */
  export type soUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so
     */
    select?: soSelect<ExtArgs> | null
    /**
     * The filter to search for the so to update in case it exists.
     */
    where: soWhereUniqueInput
    /**
     * In case the so found by the `where` argument doesn't exist, create a new so with this data.
     */
    create: XOR<soCreateInput, soUncheckedCreateInput>
    /**
     * In case the so was found with the provided `where` argument, update it with this data.
     */
    update: XOR<soUpdateInput, soUncheckedUpdateInput>
  }


  /**
   * so delete
   */
  export type soDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so
     */
    select?: soSelect<ExtArgs> | null
    /**
     * Filter which so to delete.
     */
    where: soWhereUniqueInput
  }


  /**
   * so deleteMany
   */
  export type soDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which sos to delete
     */
    where?: soWhereInput
  }


  /**
   * so without action
   */
  export type soArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so
     */
    select?: soSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdherentScalarFieldEnum: {
    SUCURSAL: 'SUCURSAL',
    CONTRATO: 'CONTRATO',
    NRO_DOC: 'NRO_DOC',
    APELLIDOS: 'APELLIDOS',
    NOMBRES: 'NOMBRES',
    NACIMIENTO: 'NACIMIENTO',
    SEXO: 'SEXO',
    ALTA: 'ALTA',
    BAJA: 'BAJA',
    VIGENCIA: 'VIGENCIA',
    PARENT: 'PARENT',
    OBRA_SOC: 'OBRA_SOC',
    SEGURO: 'SEGURO',
    PRODUCTOR: 'PRODUCTOR',
    PLAN: 'PLAN',
    ORDEN: 'ORDEN',
    EDAD: 'EDAD',
    ESTADO: 'ESTADO',
    idadherent: 'idadherent'
  };

  export type AdherentScalarFieldEnum = (typeof AdherentScalarFieldEnum)[keyof typeof AdherentScalarFieldEnum]


  export const Cuo_fijaScalarFieldEnum: {
    CONTRATO: 'CONTRATO',
    IMPORTE: 'IMPORTE',
    CUO_ANT: 'CUO_ANT',
    DESDE: 'DESDE',
    VENCIM: 'VENCIM',
    OPERADOR: 'OPERADOR',
    idcuota: 'idcuota'
  };

  export type Cuo_fijaScalarFieldEnum = (typeof Cuo_fijaScalarFieldEnum)[keyof typeof Cuo_fijaScalarFieldEnum]


  export const GruposScalarFieldEnum: {
    CODIGO: 'CODIGO',
    DESCRIP: 'DESCRIP',
    IVA: 'IVA',
    CUIT: 'CUIT',
    DOMICILIO: 'DOMICILIO',
    ORDEN: 'ORDEN',
    LIN_ALTA: 'LIN_ALTA',
    LIN_BAJA: 'LIN_BAJA',
    TOTALIZA: 'TOTALIZA',
    PAGINA: 'PAGINA',
    TITULO1: 'TITULO1',
    TITULO2: 'TITULO2',
    DIA: 'DIA',
    MES: 'MES',
    ANO: 'ANO',
    SUCURSAL: 'SUCURSAL',
    MARCA: 'MARCA',
    CONVENIO: 'CONVENIO',
    id: 'id'
  };

  export type GruposScalarFieldEnum = (typeof GruposScalarFieldEnum)[keyof typeof GruposScalarFieldEnum]


  export const HistoriaScalarFieldEnum: {
    CONTRATO: 'CONTRATO',
    OPERADOR: 'OPERADOR',
    ACCION: 'ACCION',
    idhistoria: 'idhistoria',
    FECHA: 'FECHA'
  };

  export type HistoriaScalarFieldEnum = (typeof HistoriaScalarFieldEnum)[keyof typeof HistoriaScalarFieldEnum]


  export const LocalidadScalarFieldEnum: {
    CODIGO: 'CODIGO',
    DETALLE: 'DETALLE',
    idlocalidad: 'idlocalidad'
  };

  export type LocalidadScalarFieldEnum = (typeof LocalidadScalarFieldEnum)[keyof typeof LocalidadScalarFieldEnum]


  export const MaestroScalarFieldEnum: {
    idmaestro: 'idmaestro',
    ESTADO: 'ESTADO',
    SUCURSAL: 'SUCURSAL',
    CONTRATO: 'CONTRATO',
    NRO_DOC: 'NRO_DOC',
    APELLIDOS: 'APELLIDOS',
    NOMBRES: 'NOMBRES',
    NACIMIENTO: 'NACIMIENTO',
    CALLE: 'CALLE',
    LOCALIDAD: 'LOCALIDAD',
    NRO_CALLE: 'NRO_CALLE',
    BARRIO: 'BARRIO',
    DOMI_COBR: 'DOMI_COBR',
    DOM_LAB: 'DOM_LAB',
    ZONA: 'ZONA',
    ALTA: 'ALTA',
    VIGENCIA: 'VIGENCIA',
    GRUPO: 'GRUPO',
    SEXO: 'SEXO',
    ADHERENTES: 'ADHERENTES',
    OPERADOR: 'OPERADOR',
    OBRA_SOC: 'OBRA_SOC',
    PRODUCTOR: 'PRODUCTOR',
    PLAN: 'PLAN',
    EMPRESA: 'EMPRESA',
    EDAD: 'EDAD',
    COD_POST: 'COD_POST',
    TELEFONO: 'TELEFONO',
    MOVIL: 'MOVIL',
    EDAD_PROM: 'EDAD_PROM',
    MAIL: 'MAIL'
  };

  export type MaestroScalarFieldEnum = (typeof MaestroScalarFieldEnum)[keyof typeof MaestroScalarFieldEnum]


  export const Obra_socScalarFieldEnum: {
    CODIGO: 'CODIGO',
    NOMBRE: 'NOMBRE',
    DETALLE: 'DETALLE',
    DOMICILIO: 'DOMICILIO',
    FECHA_SUSP: 'FECHA_SUSP',
    OPERADOR: 'OPERADOR',
    ACTUALIZA: 'ACTUALIZA',
    SUSPENDIDO: 'SUSPENDIDO',
    id: 'id'
  };

  export type Obra_socScalarFieldEnum = (typeof Obra_socScalarFieldEnum)[keyof typeof Obra_socScalarFieldEnum]


  export const BajasScalarFieldEnum: {
    SUCURSAL: 'SUCURSAL',
    CONTRATO: 'CONTRATO',
    NRO_DOC: 'NRO_DOC',
    APELLIDOS: 'APELLIDOS',
    NOMBRES: 'NOMBRES',
    NACIMIENTO: 'NACIMIENTO',
    CALLE: 'CALLE',
    LOCALIDAD: 'LOCALIDAD',
    NRO_CALLE: 'NRO_CALLE',
    BARRIO: 'BARRIO',
    DOMI_COBR: 'DOMI_COBR',
    DOM_LAB: 'DOM_LAB',
    ZONA: 'ZONA',
    ALTA: 'ALTA',
    VIGENCIA: 'VIGENCIA',
    GRUPO: 'GRUPO',
    SEXO: 'SEXO',
    ADHERENTES: 'ADHERENTES',
    OPERADOR: 'OPERADOR',
    OBRA_SOC: 'OBRA_SOC',
    PRODUCTOR: 'PRODUCTOR',
    PLAN: 'PLAN',
    SUB_PLAN: 'SUB_PLAN',
    EMPRESA: 'EMPRESA',
    EDAD: 'EDAD',
    COD_POST: 'COD_POST',
    TELEFONO: 'TELEFONO',
    MOVIL: 'MOVIL',
    EDAD_PROM: 'EDAD_PROM',
    MAIL: 'MAIL',
    idbaja: 'idbaja',
    BAJA: 'BAJA'
  };

  export type BajasScalarFieldEnum = (typeof BajasScalarFieldEnum)[keyof typeof BajasScalarFieldEnum]


  export const GestioncasoScalarFieldEnum: {
    idgestion: 'idgestion',
    idcaso: 'idcaso',
    contrato: 'contrato',
    operador: 'operador',
    accion: 'accion',
    observacion: 'observacion',
    fechaaccion: 'fechaaccion',
    nuevaaccion: 'nuevaaccion',
    fechanuevaaccion: 'fechanuevaaccion',
    realizado: 'realizado',
    observacion_nuevaaccion: 'observacion_nuevaaccion'
  };

  export type GestioncasoScalarFieldEnum = (typeof GestioncasoScalarFieldEnum)[keyof typeof GestioncasoScalarFieldEnum]


  export const PagosScalarFieldEnum: {
    CONTRATO: 'CONTRATO',
    NRO_RECIBO: 'NRO_RECIBO',
    SERIE: 'SERIE',
    DIA_REN: 'DIA_REN',
    DIA_CAR: 'DIA_CAR',
    DIA_EMI: 'DIA_EMI',
    DIA_PAG: 'DIA_PAG',
    HORA_CAR: 'HORA_CAR',
    MES: 'MES',
    ANO: 'ANO',
    IMPORTE: 'IMPORTE',
    MAN_COM: 'MAN_COM',
    MOVIM: 'MOVIM',
    OPERADOR: 'OPERADOR',
    SUCURSAL: 'SUCURSAL',
    PUESTO: 'PUESTO',
    ZONA: 'ZONA',
    EMPRESA: 'EMPRESA',
    DNI: 'DNI',
    RENDIDO: 'RENDIDO',
    FECHA_CAJA: 'FECHA_CAJA',
    id: 'id',
    MED_PAG: 'MED_PAG'
  };

  export type PagosScalarFieldEnum = (typeof PagosScalarFieldEnum)[keyof typeof PagosScalarFieldEnum]


  export const Pago_bcoScalarFieldEnum: {
    NRO_DOC: 'NRO_DOC',
    CONTRATO: 'CONTRATO',
    COD_SUC: 'COD_SUC',
    NRO_CTA: 'NRO_CTA',
    FEC_ACR: 'FEC_ACR',
    IMPORTE: 'IMPORTE',
    MARCA: 'MARCA',
    MES: 'MES',
    ANO: 'ANO',
    DIA_PAGO: 'DIA_PAGO',
    SUCURSAL: 'SUCURSAL',
    SEGURO: 'SEGURO',
    id: 'id'
  };

  export type Pago_bcoScalarFieldEnum = (typeof Pago_bcoScalarFieldEnum)[keyof typeof Pago_bcoScalarFieldEnum]


  export const CajaScalarFieldEnum: {
    SUCURSAL: 'SUCURSAL',
    PUESTO: 'PUESTO',
    CODIGO: 'CODIGO',
    MOVIM: 'MOVIM',
    CUENTA: 'CUENTA',
    CUENTA_DESC: 'CUENTA_DESC',
    IMPORTE: 'IMPORTE',
    TIPO: 'TIPO',
    SERIE: 'SERIE',
    NUMERO: 'NUMERO',
    CUIT: 'CUIT',
    DETALLE: 'DETALLE',
    FECHA: 'FECHA',
    FEC_COMP: 'FEC_COMP',
    HORA: 'HORA',
    OPERADOR: 'OPERADOR',
    idmovim: 'idmovim'
  };

  export type CajaScalarFieldEnum = (typeof CajaScalarFieldEnum)[keyof typeof CajaScalarFieldEnum]


  export const SubctaScalarFieldEnum: {
    CODI: 'CODI',
    DESC: 'DESC',
    CUEN: 'CUEN',
    MOVIM: 'MOVIM',
    id: 'id'
  };

  export type SubctaScalarFieldEnum = (typeof SubctaScalarFieldEnum)[keyof typeof SubctaScalarFieldEnum]


  export const Maestro_cuentasScalarFieldEnum: {
    idcuenta: 'idcuenta',
    contrato: 'contrato',
    dni: 'dni',
    grupo: 'grupo',
    cuenta: 'cuenta',
    observacion: 'observacion'
  };

  export type Maestro_cuentasScalarFieldEnum = (typeof Maestro_cuentasScalarFieldEnum)[keyof typeof Maestro_cuentasScalarFieldEnum]


  export const OperadorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    usuario: 'usuario',
    contrasena: 'contrasena',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    perfil: 'perfil',
    estado: 'estado',
    codigo: 'codigo',
    medicos: 'medicos',
    sucursal: 'sucursal',
    prestamos: 'prestamos',
    ordenpago: 'ordenpago',
    clubwerchow: 'clubwerchow',
    ventas: 'ventas',
    administracion: 'administracion',
    campanas: 'campanas',
    socios: 'socios',
    sepelio: 'sepelio',
    gestion: 'gestion',
    contabilidad: 'contabilidad',
    cobranza: 'cobranza'
  };

  export type OperadorScalarFieldEnum = (typeof OperadorScalarFieldEnum)[keyof typeof OperadorScalarFieldEnum]


  export const Subcta_oldScalarFieldEnum: {
    CODI: 'CODI',
    DESC: 'DESC',
    CUEN: 'CUEN',
    MOVIM: 'MOVIM',
    id: 'id'
  };

  export type Subcta_oldScalarFieldEnum = (typeof Subcta_oldScalarFieldEnum)[keyof typeof Subcta_oldScalarFieldEnum]


  export const SoScalarFieldEnum: {
    CONTRATO: 'CONTRATO',
    SOCIO: 'SOCIO',
    ALTA: 'ALTA',
    GRUPO: 'GRUPO',
    ADHERENTES: 'ADHERENTES',
    PLAN: 'PLAN',
    ZONA: 'ZONA',
    EDAD: 'EDAD',
    CUOTA: 'CUOTA',
    EMPRESA: 'EMPRESA',
    SUCURSAL: 'SUCURSAL',
    CUOTAS: 'CUOTAS',
    PAGOS: 'PAGOS',
    DEUDA: 'DEUDA',
    id: 'id'
  };

  export type SoScalarFieldEnum = (typeof SoScalarFieldEnum)[keyof typeof SoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type adherentWhereInput = {
    AND?: adherentWhereInput | adherentWhereInput[]
    OR?: adherentWhereInput[]
    NOT?: adherentWhereInput | adherentWhereInput[]
    SUCURSAL?: StringNullableFilter<"adherent"> | string | null
    CONTRATO?: IntNullableFilter<"adherent"> | number | null
    NRO_DOC?: IntNullableFilter<"adherent"> | number | null
    APELLIDOS?: StringNullableFilter<"adherent"> | string | null
    NOMBRES?: StringNullableFilter<"adherent"> | string | null
    NACIMIENTO?: DateTimeNullableFilter<"adherent"> | Date | string | null
    SEXO?: StringNullableFilter<"adherent"> | string | null
    ALTA?: DateTimeNullableFilter<"adherent"> | Date | string | null
    BAJA?: DateTimeNullableFilter<"adherent"> | Date | string | null
    VIGENCIA?: DateTimeNullableFilter<"adherent"> | Date | string | null
    PARENT?: IntNullableFilter<"adherent"> | number | null
    OBRA_SOC?: IntNullableFilter<"adherent"> | number | null
    SEGURO?: IntNullableFilter<"adherent"> | number | null
    PRODUCTOR?: IntNullableFilter<"adherent"> | number | null
    PLAN?: StringNullableFilter<"adherent"> | string | null
    ORDEN?: IntNullableFilter<"adherent"> | number | null
    EDAD?: IntNullableFilter<"adherent"> | number | null
    ESTADO?: BoolNullableFilter<"adherent"> | boolean | null
    idadherent?: IntFilter<"adherent"> | number
  }

  export type adherentOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrderInput | SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    NACIMIENTO?: SortOrderInput | SortOrder
    SEXO?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    BAJA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    PARENT?: SortOrderInput | SortOrder
    OBRA_SOC?: SortOrderInput | SortOrder
    SEGURO?: SortOrderInput | SortOrder
    PRODUCTOR?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    ORDEN?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    ESTADO?: SortOrderInput | SortOrder
    idadherent?: SortOrder
  }

  export type adherentWhereUniqueInput = {
    idadherent?: number
  }

  export type adherentOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrderInput | SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    NACIMIENTO?: SortOrderInput | SortOrder
    SEXO?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    BAJA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    PARENT?: SortOrderInput | SortOrder
    OBRA_SOC?: SortOrderInput | SortOrder
    SEGURO?: SortOrderInput | SortOrder
    PRODUCTOR?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    ORDEN?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    ESTADO?: SortOrderInput | SortOrder
    idadherent?: SortOrder
    _count?: adherentCountOrderByAggregateInput
    _avg?: adherentAvgOrderByAggregateInput
    _max?: adherentMaxOrderByAggregateInput
    _min?: adherentMinOrderByAggregateInput
    _sum?: adherentSumOrderByAggregateInput
  }

  export type adherentScalarWhereWithAggregatesInput = {
    AND?: adherentScalarWhereWithAggregatesInput | adherentScalarWhereWithAggregatesInput[]
    OR?: adherentScalarWhereWithAggregatesInput[]
    NOT?: adherentScalarWhereWithAggregatesInput | adherentScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter<"adherent"> | string | null
    CONTRATO?: IntNullableWithAggregatesFilter<"adherent"> | number | null
    NRO_DOC?: IntNullableWithAggregatesFilter<"adherent"> | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter<"adherent"> | string | null
    NOMBRES?: StringNullableWithAggregatesFilter<"adherent"> | string | null
    NACIMIENTO?: DateTimeNullableWithAggregatesFilter<"adherent"> | Date | string | null
    SEXO?: StringNullableWithAggregatesFilter<"adherent"> | string | null
    ALTA?: DateTimeNullableWithAggregatesFilter<"adherent"> | Date | string | null
    BAJA?: DateTimeNullableWithAggregatesFilter<"adherent"> | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter<"adherent"> | Date | string | null
    PARENT?: IntNullableWithAggregatesFilter<"adherent"> | number | null
    OBRA_SOC?: IntNullableWithAggregatesFilter<"adherent"> | number | null
    SEGURO?: IntNullableWithAggregatesFilter<"adherent"> | number | null
    PRODUCTOR?: IntNullableWithAggregatesFilter<"adherent"> | number | null
    PLAN?: StringNullableWithAggregatesFilter<"adherent"> | string | null
    ORDEN?: IntNullableWithAggregatesFilter<"adherent"> | number | null
    EDAD?: IntNullableWithAggregatesFilter<"adherent"> | number | null
    ESTADO?: BoolNullableWithAggregatesFilter<"adherent"> | boolean | null
    idadherent?: IntWithAggregatesFilter<"adherent"> | number
  }

  export type cuo_fijaWhereInput = {
    AND?: cuo_fijaWhereInput | cuo_fijaWhereInput[]
    OR?: cuo_fijaWhereInput[]
    NOT?: cuo_fijaWhereInput | cuo_fijaWhereInput[]
    CONTRATO?: IntNullableFilter<"cuo_fija"> | number | null
    IMPORTE?: FloatNullableFilter<"cuo_fija"> | number | null
    CUO_ANT?: FloatNullableFilter<"cuo_fija"> | number | null
    DESDE?: DateTimeNullableFilter<"cuo_fija"> | Date | string | null
    VENCIM?: DateTimeNullableFilter<"cuo_fija"> | Date | string | null
    OPERADOR?: StringNullableFilter<"cuo_fija"> | string | null
    idcuota?: IntFilter<"cuo_fija"> | number
  }

  export type cuo_fijaOrderByWithRelationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    CUO_ANT?: SortOrderInput | SortOrder
    DESDE?: SortOrderInput | SortOrder
    VENCIM?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    idcuota?: SortOrder
  }

  export type cuo_fijaWhereUniqueInput = {
    idcuota?: number
  }

  export type cuo_fijaOrderByWithAggregationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    CUO_ANT?: SortOrderInput | SortOrder
    DESDE?: SortOrderInput | SortOrder
    VENCIM?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    idcuota?: SortOrder
    _count?: cuo_fijaCountOrderByAggregateInput
    _avg?: cuo_fijaAvgOrderByAggregateInput
    _max?: cuo_fijaMaxOrderByAggregateInput
    _min?: cuo_fijaMinOrderByAggregateInput
    _sum?: cuo_fijaSumOrderByAggregateInput
  }

  export type cuo_fijaScalarWhereWithAggregatesInput = {
    AND?: cuo_fijaScalarWhereWithAggregatesInput | cuo_fijaScalarWhereWithAggregatesInput[]
    OR?: cuo_fijaScalarWhereWithAggregatesInput[]
    NOT?: cuo_fijaScalarWhereWithAggregatesInput | cuo_fijaScalarWhereWithAggregatesInput[]
    CONTRATO?: IntNullableWithAggregatesFilter<"cuo_fija"> | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter<"cuo_fija"> | number | null
    CUO_ANT?: FloatNullableWithAggregatesFilter<"cuo_fija"> | number | null
    DESDE?: DateTimeNullableWithAggregatesFilter<"cuo_fija"> | Date | string | null
    VENCIM?: DateTimeNullableWithAggregatesFilter<"cuo_fija"> | Date | string | null
    OPERADOR?: StringNullableWithAggregatesFilter<"cuo_fija"> | string | null
    idcuota?: IntWithAggregatesFilter<"cuo_fija"> | number
  }

  export type gruposWhereInput = {
    AND?: gruposWhereInput | gruposWhereInput[]
    OR?: gruposWhereInput[]
    NOT?: gruposWhereInput | gruposWhereInput[]
    CODIGO?: IntNullableFilter<"grupos"> | number | null
    DESCRIP?: StringNullableFilter<"grupos"> | string | null
    IVA?: StringNullableFilter<"grupos"> | string | null
    CUIT?: StringNullableFilter<"grupos"> | string | null
    DOMICILIO?: StringNullableFilter<"grupos"> | string | null
    ORDEN?: StringNullableFilter<"grupos"> | string | null
    LIN_ALTA?: StringNullableFilter<"grupos"> | string | null
    LIN_BAJA?: StringNullableFilter<"grupos"> | string | null
    TOTALIZA?: IntNullableFilter<"grupos"> | number | null
    PAGINA?: IntNullableFilter<"grupos"> | number | null
    TITULO1?: StringNullableFilter<"grupos"> | string | null
    TITULO2?: StringNullableFilter<"grupos"> | string | null
    DIA?: IntNullableFilter<"grupos"> | number | null
    MES?: IntNullableFilter<"grupos"> | number | null
    ANO?: IntNullableFilter<"grupos"> | number | null
    SUCURSAL?: StringNullableFilter<"grupos"> | string | null
    MARCA?: StringNullableFilter<"grupos"> | string | null
    CONVENIO?: StringNullableFilter<"grupos"> | string | null
    id?: IntFilter<"grupos"> | number
  }

  export type gruposOrderByWithRelationInput = {
    CODIGO?: SortOrderInput | SortOrder
    DESCRIP?: SortOrderInput | SortOrder
    IVA?: SortOrderInput | SortOrder
    CUIT?: SortOrderInput | SortOrder
    DOMICILIO?: SortOrderInput | SortOrder
    ORDEN?: SortOrderInput | SortOrder
    LIN_ALTA?: SortOrderInput | SortOrder
    LIN_BAJA?: SortOrderInput | SortOrder
    TOTALIZA?: SortOrderInput | SortOrder
    PAGINA?: SortOrderInput | SortOrder
    TITULO1?: SortOrderInput | SortOrder
    TITULO2?: SortOrderInput | SortOrder
    DIA?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    SUCURSAL?: SortOrderInput | SortOrder
    MARCA?: SortOrderInput | SortOrder
    CONVENIO?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type gruposWhereUniqueInput = {
    id?: number
  }

  export type gruposOrderByWithAggregationInput = {
    CODIGO?: SortOrderInput | SortOrder
    DESCRIP?: SortOrderInput | SortOrder
    IVA?: SortOrderInput | SortOrder
    CUIT?: SortOrderInput | SortOrder
    DOMICILIO?: SortOrderInput | SortOrder
    ORDEN?: SortOrderInput | SortOrder
    LIN_ALTA?: SortOrderInput | SortOrder
    LIN_BAJA?: SortOrderInput | SortOrder
    TOTALIZA?: SortOrderInput | SortOrder
    PAGINA?: SortOrderInput | SortOrder
    TITULO1?: SortOrderInput | SortOrder
    TITULO2?: SortOrderInput | SortOrder
    DIA?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    SUCURSAL?: SortOrderInput | SortOrder
    MARCA?: SortOrderInput | SortOrder
    CONVENIO?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: gruposCountOrderByAggregateInput
    _avg?: gruposAvgOrderByAggregateInput
    _max?: gruposMaxOrderByAggregateInput
    _min?: gruposMinOrderByAggregateInput
    _sum?: gruposSumOrderByAggregateInput
  }

  export type gruposScalarWhereWithAggregatesInput = {
    AND?: gruposScalarWhereWithAggregatesInput | gruposScalarWhereWithAggregatesInput[]
    OR?: gruposScalarWhereWithAggregatesInput[]
    NOT?: gruposScalarWhereWithAggregatesInput | gruposScalarWhereWithAggregatesInput[]
    CODIGO?: IntNullableWithAggregatesFilter<"grupos"> | number | null
    DESCRIP?: StringNullableWithAggregatesFilter<"grupos"> | string | null
    IVA?: StringNullableWithAggregatesFilter<"grupos"> | string | null
    CUIT?: StringNullableWithAggregatesFilter<"grupos"> | string | null
    DOMICILIO?: StringNullableWithAggregatesFilter<"grupos"> | string | null
    ORDEN?: StringNullableWithAggregatesFilter<"grupos"> | string | null
    LIN_ALTA?: StringNullableWithAggregatesFilter<"grupos"> | string | null
    LIN_BAJA?: StringNullableWithAggregatesFilter<"grupos"> | string | null
    TOTALIZA?: IntNullableWithAggregatesFilter<"grupos"> | number | null
    PAGINA?: IntNullableWithAggregatesFilter<"grupos"> | number | null
    TITULO1?: StringNullableWithAggregatesFilter<"grupos"> | string | null
    TITULO2?: StringNullableWithAggregatesFilter<"grupos"> | string | null
    DIA?: IntNullableWithAggregatesFilter<"grupos"> | number | null
    MES?: IntNullableWithAggregatesFilter<"grupos"> | number | null
    ANO?: IntNullableWithAggregatesFilter<"grupos"> | number | null
    SUCURSAL?: StringNullableWithAggregatesFilter<"grupos"> | string | null
    MARCA?: StringNullableWithAggregatesFilter<"grupos"> | string | null
    CONVENIO?: StringNullableWithAggregatesFilter<"grupos"> | string | null
    id?: IntWithAggregatesFilter<"grupos"> | number
  }

  export type historiaWhereInput = {
    AND?: historiaWhereInput | historiaWhereInput[]
    OR?: historiaWhereInput[]
    NOT?: historiaWhereInput | historiaWhereInput[]
    CONTRATO?: IntNullableFilter<"historia"> | number | null
    OPERADOR?: StringNullableFilter<"historia"> | string | null
    ACCION?: StringNullableFilter<"historia"> | string | null
    idhistoria?: IntFilter<"historia"> | number
    FECHA?: StringNullableFilter<"historia"> | string | null
  }

  export type historiaOrderByWithRelationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    ACCION?: SortOrderInput | SortOrder
    idhistoria?: SortOrder
    FECHA?: SortOrderInput | SortOrder
  }

  export type historiaWhereUniqueInput = {
    idhistoria?: number
  }

  export type historiaOrderByWithAggregationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    ACCION?: SortOrderInput | SortOrder
    idhistoria?: SortOrder
    FECHA?: SortOrderInput | SortOrder
    _count?: historiaCountOrderByAggregateInput
    _avg?: historiaAvgOrderByAggregateInput
    _max?: historiaMaxOrderByAggregateInput
    _min?: historiaMinOrderByAggregateInput
    _sum?: historiaSumOrderByAggregateInput
  }

  export type historiaScalarWhereWithAggregatesInput = {
    AND?: historiaScalarWhereWithAggregatesInput | historiaScalarWhereWithAggregatesInput[]
    OR?: historiaScalarWhereWithAggregatesInput[]
    NOT?: historiaScalarWhereWithAggregatesInput | historiaScalarWhereWithAggregatesInput[]
    CONTRATO?: IntNullableWithAggregatesFilter<"historia"> | number | null
    OPERADOR?: StringNullableWithAggregatesFilter<"historia"> | string | null
    ACCION?: StringNullableWithAggregatesFilter<"historia"> | string | null
    idhistoria?: IntWithAggregatesFilter<"historia"> | number
    FECHA?: StringNullableWithAggregatesFilter<"historia"> | string | null
  }

  export type localidadWhereInput = {
    AND?: localidadWhereInput | localidadWhereInput[]
    OR?: localidadWhereInput[]
    NOT?: localidadWhereInput | localidadWhereInput[]
    CODIGO?: IntNullableFilter<"localidad"> | number | null
    DETALLE?: StringNullableFilter<"localidad"> | string | null
    idlocalidad?: IntFilter<"localidad"> | number
  }

  export type localidadOrderByWithRelationInput = {
    CODIGO?: SortOrderInput | SortOrder
    DETALLE?: SortOrderInput | SortOrder
    idlocalidad?: SortOrder
  }

  export type localidadWhereUniqueInput = {
    idlocalidad?: number
  }

  export type localidadOrderByWithAggregationInput = {
    CODIGO?: SortOrderInput | SortOrder
    DETALLE?: SortOrderInput | SortOrder
    idlocalidad?: SortOrder
    _count?: localidadCountOrderByAggregateInput
    _avg?: localidadAvgOrderByAggregateInput
    _max?: localidadMaxOrderByAggregateInput
    _min?: localidadMinOrderByAggregateInput
    _sum?: localidadSumOrderByAggregateInput
  }

  export type localidadScalarWhereWithAggregatesInput = {
    AND?: localidadScalarWhereWithAggregatesInput | localidadScalarWhereWithAggregatesInput[]
    OR?: localidadScalarWhereWithAggregatesInput[]
    NOT?: localidadScalarWhereWithAggregatesInput | localidadScalarWhereWithAggregatesInput[]
    CODIGO?: IntNullableWithAggregatesFilter<"localidad"> | number | null
    DETALLE?: StringNullableWithAggregatesFilter<"localidad"> | string | null
    idlocalidad?: IntWithAggregatesFilter<"localidad"> | number
  }

  export type maestroWhereInput = {
    AND?: maestroWhereInput | maestroWhereInput[]
    OR?: maestroWhereInput[]
    NOT?: maestroWhereInput | maestroWhereInput[]
    idmaestro?: IntFilter<"maestro"> | number
    ESTADO?: BoolNullableFilter<"maestro"> | boolean | null
    SUCURSAL?: StringNullableFilter<"maestro"> | string | null
    CONTRATO?: IntFilter<"maestro"> | number
    NRO_DOC?: IntNullableFilter<"maestro"> | number | null
    APELLIDOS?: StringNullableFilter<"maestro"> | string | null
    NOMBRES?: StringNullableFilter<"maestro"> | string | null
    NACIMIENTO?: DateTimeNullableFilter<"maestro"> | Date | string | null
    CALLE?: StringNullableFilter<"maestro"> | string | null
    LOCALIDAD?: StringNullableFilter<"maestro"> | string | null
    NRO_CALLE?: IntNullableFilter<"maestro"> | number | null
    BARRIO?: StringNullableFilter<"maestro"> | string | null
    DOMI_COBR?: StringNullableFilter<"maestro"> | string | null
    DOM_LAB?: StringNullableFilter<"maestro"> | string | null
    ZONA?: IntNullableFilter<"maestro"> | number | null
    ALTA?: DateTimeNullableFilter<"maestro"> | Date | string | null
    VIGENCIA?: DateTimeNullableFilter<"maestro"> | Date | string | null
    GRUPO?: IntNullableFilter<"maestro"> | number | null
    SEXO?: StringNullableFilter<"maestro"> | string | null
    ADHERENTES?: IntNullableFilter<"maestro"> | number | null
    OPERADOR?: StringNullableFilter<"maestro"> | string | null
    OBRA_SOC?: IntNullableFilter<"maestro"> | number | null
    PRODUCTOR?: IntNullableFilter<"maestro"> | number | null
    PLAN?: StringNullableFilter<"maestro"> | string | null
    EMPRESA?: StringNullableFilter<"maestro"> | string | null
    EDAD?: IntNullableFilter<"maestro"> | number | null
    COD_POST?: IntNullableFilter<"maestro"> | number | null
    TELEFONO?: StringNullableFilter<"maestro"> | string | null
    MOVIL?: StringNullableFilter<"maestro"> | string | null
    EDAD_PROM?: FloatNullableFilter<"maestro"> | number | null
    MAIL?: StringNullableFilter<"maestro"> | string | null
  }

  export type maestroOrderByWithRelationInput = {
    idmaestro?: SortOrder
    ESTADO?: SortOrderInput | SortOrder
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    NACIMIENTO?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    DOMI_COBR?: SortOrderInput | SortOrder
    DOM_LAB?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    SEXO?: SortOrderInput | SortOrder
    ADHERENTES?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OBRA_SOC?: SortOrderInput | SortOrder
    PRODUCTOR?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    COD_POST?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD_PROM?: SortOrderInput | SortOrder
    MAIL?: SortOrderInput | SortOrder
  }

  export type maestroWhereUniqueInput = {
    idmaestro?: number
  }

  export type maestroOrderByWithAggregationInput = {
    idmaestro?: SortOrder
    ESTADO?: SortOrderInput | SortOrder
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    NACIMIENTO?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    DOMI_COBR?: SortOrderInput | SortOrder
    DOM_LAB?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    SEXO?: SortOrderInput | SortOrder
    ADHERENTES?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OBRA_SOC?: SortOrderInput | SortOrder
    PRODUCTOR?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    COD_POST?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD_PROM?: SortOrderInput | SortOrder
    MAIL?: SortOrderInput | SortOrder
    _count?: maestroCountOrderByAggregateInput
    _avg?: maestroAvgOrderByAggregateInput
    _max?: maestroMaxOrderByAggregateInput
    _min?: maestroMinOrderByAggregateInput
    _sum?: maestroSumOrderByAggregateInput
  }

  export type maestroScalarWhereWithAggregatesInput = {
    AND?: maestroScalarWhereWithAggregatesInput | maestroScalarWhereWithAggregatesInput[]
    OR?: maestroScalarWhereWithAggregatesInput[]
    NOT?: maestroScalarWhereWithAggregatesInput | maestroScalarWhereWithAggregatesInput[]
    idmaestro?: IntWithAggregatesFilter<"maestro"> | number
    ESTADO?: BoolNullableWithAggregatesFilter<"maestro"> | boolean | null
    SUCURSAL?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    CONTRATO?: IntWithAggregatesFilter<"maestro"> | number
    NRO_DOC?: IntNullableWithAggregatesFilter<"maestro"> | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    NOMBRES?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    NACIMIENTO?: DateTimeNullableWithAggregatesFilter<"maestro"> | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter<"maestro"> | number | null
    BARRIO?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    DOMI_COBR?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    DOM_LAB?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    ZONA?: IntNullableWithAggregatesFilter<"maestro"> | number | null
    ALTA?: DateTimeNullableWithAggregatesFilter<"maestro"> | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter<"maestro"> | Date | string | null
    GRUPO?: IntNullableWithAggregatesFilter<"maestro"> | number | null
    SEXO?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    ADHERENTES?: IntNullableWithAggregatesFilter<"maestro"> | number | null
    OPERADOR?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    OBRA_SOC?: IntNullableWithAggregatesFilter<"maestro"> | number | null
    PRODUCTOR?: IntNullableWithAggregatesFilter<"maestro"> | number | null
    PLAN?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    EMPRESA?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    EDAD?: IntNullableWithAggregatesFilter<"maestro"> | number | null
    COD_POST?: IntNullableWithAggregatesFilter<"maestro"> | number | null
    TELEFONO?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    MOVIL?: StringNullableWithAggregatesFilter<"maestro"> | string | null
    EDAD_PROM?: FloatNullableWithAggregatesFilter<"maestro"> | number | null
    MAIL?: StringNullableWithAggregatesFilter<"maestro"> | string | null
  }

  export type obra_socWhereInput = {
    AND?: obra_socWhereInput | obra_socWhereInput[]
    OR?: obra_socWhereInput[]
    NOT?: obra_socWhereInput | obra_socWhereInput[]
    CODIGO?: IntNullableFilter<"obra_soc"> | number | null
    NOMBRE?: StringNullableFilter<"obra_soc"> | string | null
    DETALLE?: StringNullableFilter<"obra_soc"> | string | null
    DOMICILIO?: StringNullableFilter<"obra_soc"> | string | null
    FECHA_SUSP?: DateTimeNullableFilter<"obra_soc"> | Date | string | null
    OPERADOR?: IntNullableFilter<"obra_soc"> | number | null
    ACTUALIZA?: StringNullableFilter<"obra_soc"> | string | null
    SUSPENDIDO?: IntNullableFilter<"obra_soc"> | number | null
    id?: IntFilter<"obra_soc"> | number
  }

  export type obra_socOrderByWithRelationInput = {
    CODIGO?: SortOrderInput | SortOrder
    NOMBRE?: SortOrderInput | SortOrder
    DETALLE?: SortOrderInput | SortOrder
    DOMICILIO?: SortOrderInput | SortOrder
    FECHA_SUSP?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    ACTUALIZA?: SortOrderInput | SortOrder
    SUSPENDIDO?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type obra_socWhereUniqueInput = {
    id?: number
  }

  export type obra_socOrderByWithAggregationInput = {
    CODIGO?: SortOrderInput | SortOrder
    NOMBRE?: SortOrderInput | SortOrder
    DETALLE?: SortOrderInput | SortOrder
    DOMICILIO?: SortOrderInput | SortOrder
    FECHA_SUSP?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    ACTUALIZA?: SortOrderInput | SortOrder
    SUSPENDIDO?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: obra_socCountOrderByAggregateInput
    _avg?: obra_socAvgOrderByAggregateInput
    _max?: obra_socMaxOrderByAggregateInput
    _min?: obra_socMinOrderByAggregateInput
    _sum?: obra_socSumOrderByAggregateInput
  }

  export type obra_socScalarWhereWithAggregatesInput = {
    AND?: obra_socScalarWhereWithAggregatesInput | obra_socScalarWhereWithAggregatesInput[]
    OR?: obra_socScalarWhereWithAggregatesInput[]
    NOT?: obra_socScalarWhereWithAggregatesInput | obra_socScalarWhereWithAggregatesInput[]
    CODIGO?: IntNullableWithAggregatesFilter<"obra_soc"> | number | null
    NOMBRE?: StringNullableWithAggregatesFilter<"obra_soc"> | string | null
    DETALLE?: StringNullableWithAggregatesFilter<"obra_soc"> | string | null
    DOMICILIO?: StringNullableWithAggregatesFilter<"obra_soc"> | string | null
    FECHA_SUSP?: DateTimeNullableWithAggregatesFilter<"obra_soc"> | Date | string | null
    OPERADOR?: IntNullableWithAggregatesFilter<"obra_soc"> | number | null
    ACTUALIZA?: StringNullableWithAggregatesFilter<"obra_soc"> | string | null
    SUSPENDIDO?: IntNullableWithAggregatesFilter<"obra_soc"> | number | null
    id?: IntWithAggregatesFilter<"obra_soc"> | number
  }

  export type bajasWhereInput = {
    AND?: bajasWhereInput | bajasWhereInput[]
    OR?: bajasWhereInput[]
    NOT?: bajasWhereInput | bajasWhereInput[]
    SUCURSAL?: StringNullableFilter<"bajas"> | string | null
    CONTRATO?: IntFilter<"bajas"> | number
    NRO_DOC?: IntNullableFilter<"bajas"> | number | null
    APELLIDOS?: StringNullableFilter<"bajas"> | string | null
    NOMBRES?: StringNullableFilter<"bajas"> | string | null
    NACIMIENTO?: DateTimeNullableFilter<"bajas"> | Date | string | null
    CALLE?: StringNullableFilter<"bajas"> | string | null
    LOCALIDAD?: StringNullableFilter<"bajas"> | string | null
    NRO_CALLE?: IntNullableFilter<"bajas"> | number | null
    BARRIO?: StringNullableFilter<"bajas"> | string | null
    DOMI_COBR?: StringNullableFilter<"bajas"> | string | null
    DOM_LAB?: StringNullableFilter<"bajas"> | string | null
    ZONA?: IntNullableFilter<"bajas"> | number | null
    ALTA?: DateTimeNullableFilter<"bajas"> | Date | string | null
    VIGENCIA?: DateTimeNullableFilter<"bajas"> | Date | string | null
    GRUPO?: IntNullableFilter<"bajas"> | number | null
    SEXO?: StringNullableFilter<"bajas"> | string | null
    ADHERENTES?: IntNullableFilter<"bajas"> | number | null
    OPERADOR?: IntNullableFilter<"bajas"> | number | null
    OBRA_SOC?: IntNullableFilter<"bajas"> | number | null
    PRODUCTOR?: IntNullableFilter<"bajas"> | number | null
    PLAN?: StringNullableFilter<"bajas"> | string | null
    SUB_PLAN?: StringNullableFilter<"bajas"> | string | null
    EMPRESA?: StringNullableFilter<"bajas"> | string | null
    EDAD?: IntNullableFilter<"bajas"> | number | null
    COD_POST?: IntNullableFilter<"bajas"> | number | null
    TELEFONO?: StringNullableFilter<"bajas"> | string | null
    MOVIL?: StringNullableFilter<"bajas"> | string | null
    EDAD_PROM?: FloatNullableFilter<"bajas"> | number | null
    MAIL?: StringNullableFilter<"bajas"> | string | null
    idbaja?: IntFilter<"bajas"> | number
    BAJA?: DateTimeNullableFilter<"bajas"> | Date | string | null
  }

  export type bajasOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    NACIMIENTO?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    DOMI_COBR?: SortOrderInput | SortOrder
    DOM_LAB?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    SEXO?: SortOrderInput | SortOrder
    ADHERENTES?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OBRA_SOC?: SortOrderInput | SortOrder
    PRODUCTOR?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    SUB_PLAN?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    COD_POST?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD_PROM?: SortOrderInput | SortOrder
    MAIL?: SortOrderInput | SortOrder
    idbaja?: SortOrder
    BAJA?: SortOrderInput | SortOrder
  }

  export type bajasWhereUniqueInput = {
    idbaja?: number
  }

  export type bajasOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrderInput | SortOrder
    APELLIDOS?: SortOrderInput | SortOrder
    NOMBRES?: SortOrderInput | SortOrder
    NACIMIENTO?: SortOrderInput | SortOrder
    CALLE?: SortOrderInput | SortOrder
    LOCALIDAD?: SortOrderInput | SortOrder
    NRO_CALLE?: SortOrderInput | SortOrder
    BARRIO?: SortOrderInput | SortOrder
    DOMI_COBR?: SortOrderInput | SortOrder
    DOM_LAB?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    VIGENCIA?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    SEXO?: SortOrderInput | SortOrder
    ADHERENTES?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    OBRA_SOC?: SortOrderInput | SortOrder
    PRODUCTOR?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    SUB_PLAN?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    COD_POST?: SortOrderInput | SortOrder
    TELEFONO?: SortOrderInput | SortOrder
    MOVIL?: SortOrderInput | SortOrder
    EDAD_PROM?: SortOrderInput | SortOrder
    MAIL?: SortOrderInput | SortOrder
    idbaja?: SortOrder
    BAJA?: SortOrderInput | SortOrder
    _count?: bajasCountOrderByAggregateInput
    _avg?: bajasAvgOrderByAggregateInput
    _max?: bajasMaxOrderByAggregateInput
    _min?: bajasMinOrderByAggregateInput
    _sum?: bajasSumOrderByAggregateInput
  }

  export type bajasScalarWhereWithAggregatesInput = {
    AND?: bajasScalarWhereWithAggregatesInput | bajasScalarWhereWithAggregatesInput[]
    OR?: bajasScalarWhereWithAggregatesInput[]
    NOT?: bajasScalarWhereWithAggregatesInput | bajasScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    CONTRATO?: IntWithAggregatesFilter<"bajas"> | number
    NRO_DOC?: IntNullableWithAggregatesFilter<"bajas"> | number | null
    APELLIDOS?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    NOMBRES?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    NACIMIENTO?: DateTimeNullableWithAggregatesFilter<"bajas"> | Date | string | null
    CALLE?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    LOCALIDAD?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    NRO_CALLE?: IntNullableWithAggregatesFilter<"bajas"> | number | null
    BARRIO?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    DOMI_COBR?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    DOM_LAB?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    ZONA?: IntNullableWithAggregatesFilter<"bajas"> | number | null
    ALTA?: DateTimeNullableWithAggregatesFilter<"bajas"> | Date | string | null
    VIGENCIA?: DateTimeNullableWithAggregatesFilter<"bajas"> | Date | string | null
    GRUPO?: IntNullableWithAggregatesFilter<"bajas"> | number | null
    SEXO?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    ADHERENTES?: IntNullableWithAggregatesFilter<"bajas"> | number | null
    OPERADOR?: IntNullableWithAggregatesFilter<"bajas"> | number | null
    OBRA_SOC?: IntNullableWithAggregatesFilter<"bajas"> | number | null
    PRODUCTOR?: IntNullableWithAggregatesFilter<"bajas"> | number | null
    PLAN?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    SUB_PLAN?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    EMPRESA?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    EDAD?: IntNullableWithAggregatesFilter<"bajas"> | number | null
    COD_POST?: IntNullableWithAggregatesFilter<"bajas"> | number | null
    TELEFONO?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    MOVIL?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    EDAD_PROM?: FloatNullableWithAggregatesFilter<"bajas"> | number | null
    MAIL?: StringNullableWithAggregatesFilter<"bajas"> | string | null
    idbaja?: IntWithAggregatesFilter<"bajas"> | number
    BAJA?: DateTimeNullableWithAggregatesFilter<"bajas"> | Date | string | null
  }

  export type gestioncasoWhereInput = {
    AND?: gestioncasoWhereInput | gestioncasoWhereInput[]
    OR?: gestioncasoWhereInput[]
    NOT?: gestioncasoWhereInput | gestioncasoWhereInput[]
    idgestion?: IntFilter<"gestioncaso"> | number
    idcaso?: IntNullableFilter<"gestioncaso"> | number | null
    contrato?: IntNullableFilter<"gestioncaso"> | number | null
    operador?: StringNullableFilter<"gestioncaso"> | string | null
    accion?: StringNullableFilter<"gestioncaso"> | string | null
    observacion?: StringNullableFilter<"gestioncaso"> | string | null
    fechaaccion?: StringNullableFilter<"gestioncaso"> | string | null
    nuevaaccion?: StringNullableFilter<"gestioncaso"> | string | null
    fechanuevaaccion?: StringNullableFilter<"gestioncaso"> | string | null
    realizado?: BoolNullableFilter<"gestioncaso"> | boolean | null
    observacion_nuevaaccion?: StringNullableFilter<"gestioncaso"> | string | null
  }

  export type gestioncasoOrderByWithRelationInput = {
    idgestion?: SortOrder
    idcaso?: SortOrderInput | SortOrder
    contrato?: SortOrderInput | SortOrder
    operador?: SortOrderInput | SortOrder
    accion?: SortOrderInput | SortOrder
    observacion?: SortOrderInput | SortOrder
    fechaaccion?: SortOrderInput | SortOrder
    nuevaaccion?: SortOrderInput | SortOrder
    fechanuevaaccion?: SortOrderInput | SortOrder
    realizado?: SortOrderInput | SortOrder
    observacion_nuevaaccion?: SortOrderInput | SortOrder
  }

  export type gestioncasoWhereUniqueInput = {
    idgestion?: number
  }

  export type gestioncasoOrderByWithAggregationInput = {
    idgestion?: SortOrder
    idcaso?: SortOrderInput | SortOrder
    contrato?: SortOrderInput | SortOrder
    operador?: SortOrderInput | SortOrder
    accion?: SortOrderInput | SortOrder
    observacion?: SortOrderInput | SortOrder
    fechaaccion?: SortOrderInput | SortOrder
    nuevaaccion?: SortOrderInput | SortOrder
    fechanuevaaccion?: SortOrderInput | SortOrder
    realizado?: SortOrderInput | SortOrder
    observacion_nuevaaccion?: SortOrderInput | SortOrder
    _count?: gestioncasoCountOrderByAggregateInput
    _avg?: gestioncasoAvgOrderByAggregateInput
    _max?: gestioncasoMaxOrderByAggregateInput
    _min?: gestioncasoMinOrderByAggregateInput
    _sum?: gestioncasoSumOrderByAggregateInput
  }

  export type gestioncasoScalarWhereWithAggregatesInput = {
    AND?: gestioncasoScalarWhereWithAggregatesInput | gestioncasoScalarWhereWithAggregatesInput[]
    OR?: gestioncasoScalarWhereWithAggregatesInput[]
    NOT?: gestioncasoScalarWhereWithAggregatesInput | gestioncasoScalarWhereWithAggregatesInput[]
    idgestion?: IntWithAggregatesFilter<"gestioncaso"> | number
    idcaso?: IntNullableWithAggregatesFilter<"gestioncaso"> | number | null
    contrato?: IntNullableWithAggregatesFilter<"gestioncaso"> | number | null
    operador?: StringNullableWithAggregatesFilter<"gestioncaso"> | string | null
    accion?: StringNullableWithAggregatesFilter<"gestioncaso"> | string | null
    observacion?: StringNullableWithAggregatesFilter<"gestioncaso"> | string | null
    fechaaccion?: StringNullableWithAggregatesFilter<"gestioncaso"> | string | null
    nuevaaccion?: StringNullableWithAggregatesFilter<"gestioncaso"> | string | null
    fechanuevaaccion?: StringNullableWithAggregatesFilter<"gestioncaso"> | string | null
    realizado?: BoolNullableWithAggregatesFilter<"gestioncaso"> | boolean | null
    observacion_nuevaaccion?: StringNullableWithAggregatesFilter<"gestioncaso"> | string | null
  }

  export type pagosWhereInput = {
    AND?: pagosWhereInput | pagosWhereInput[]
    OR?: pagosWhereInput[]
    NOT?: pagosWhereInput | pagosWhereInput[]
    CONTRATO?: IntNullableFilter<"pagos"> | number | null
    NRO_RECIBO?: IntNullableFilter<"pagos"> | number | null
    SERIE?: IntNullableFilter<"pagos"> | number | null
    DIA_REN?: DateTimeNullableFilter<"pagos"> | Date | string | null
    DIA_CAR?: DateTimeNullableFilter<"pagos"> | Date | string | null
    DIA_EMI?: DateTimeNullableFilter<"pagos"> | Date | string | null
    DIA_PAG?: DateTimeNullableFilter<"pagos"> | Date | string | null
    HORA_CAR?: StringNullableFilter<"pagos"> | string | null
    MES?: IntNullableFilter<"pagos"> | number | null
    ANO?: IntNullableFilter<"pagos"> | number | null
    IMPORTE?: FloatNullableFilter<"pagos"> | number | null
    MAN_COM?: StringNullableFilter<"pagos"> | string | null
    MOVIM?: StringNullableFilter<"pagos"> | string | null
    OPERADOR?: StringNullableFilter<"pagos"> | string | null
    SUCURSAL?: StringNullableFilter<"pagos"> | string | null
    PUESTO?: IntNullableFilter<"pagos"> | number | null
    ZONA?: IntNullableFilter<"pagos"> | number | null
    EMPRESA?: StringNullableFilter<"pagos"> | string | null
    DNI?: IntNullableFilter<"pagos"> | number | null
    RENDIDO?: IntNullableFilter<"pagos"> | number | null
    FECHA_CAJA?: StringNullableFilter<"pagos"> | string | null
    id?: IntFilter<"pagos"> | number
    MED_PAG?: StringNullableFilter<"pagos"> | string | null
  }

  export type pagosOrderByWithRelationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    NRO_RECIBO?: SortOrderInput | SortOrder
    SERIE?: SortOrderInput | SortOrder
    DIA_REN?: SortOrderInput | SortOrder
    DIA_CAR?: SortOrderInput | SortOrder
    DIA_EMI?: SortOrderInput | SortOrder
    DIA_PAG?: SortOrderInput | SortOrder
    HORA_CAR?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    MAN_COM?: SortOrderInput | SortOrder
    MOVIM?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    SUCURSAL?: SortOrderInput | SortOrder
    PUESTO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    DNI?: SortOrderInput | SortOrder
    RENDIDO?: SortOrderInput | SortOrder
    FECHA_CAJA?: SortOrderInput | SortOrder
    id?: SortOrder
    MED_PAG?: SortOrderInput | SortOrder
  }

  export type pagosWhereUniqueInput = {
    id?: number
  }

  export type pagosOrderByWithAggregationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    NRO_RECIBO?: SortOrderInput | SortOrder
    SERIE?: SortOrderInput | SortOrder
    DIA_REN?: SortOrderInput | SortOrder
    DIA_CAR?: SortOrderInput | SortOrder
    DIA_EMI?: SortOrderInput | SortOrder
    DIA_PAG?: SortOrderInput | SortOrder
    HORA_CAR?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    MAN_COM?: SortOrderInput | SortOrder
    MOVIM?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    SUCURSAL?: SortOrderInput | SortOrder
    PUESTO?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    DNI?: SortOrderInput | SortOrder
    RENDIDO?: SortOrderInput | SortOrder
    FECHA_CAJA?: SortOrderInput | SortOrder
    id?: SortOrder
    MED_PAG?: SortOrderInput | SortOrder
    _count?: pagosCountOrderByAggregateInput
    _avg?: pagosAvgOrderByAggregateInput
    _max?: pagosMaxOrderByAggregateInput
    _min?: pagosMinOrderByAggregateInput
    _sum?: pagosSumOrderByAggregateInput
  }

  export type pagosScalarWhereWithAggregatesInput = {
    AND?: pagosScalarWhereWithAggregatesInput | pagosScalarWhereWithAggregatesInput[]
    OR?: pagosScalarWhereWithAggregatesInput[]
    NOT?: pagosScalarWhereWithAggregatesInput | pagosScalarWhereWithAggregatesInput[]
    CONTRATO?: IntNullableWithAggregatesFilter<"pagos"> | number | null
    NRO_RECIBO?: IntNullableWithAggregatesFilter<"pagos"> | number | null
    SERIE?: IntNullableWithAggregatesFilter<"pagos"> | number | null
    DIA_REN?: DateTimeNullableWithAggregatesFilter<"pagos"> | Date | string | null
    DIA_CAR?: DateTimeNullableWithAggregatesFilter<"pagos"> | Date | string | null
    DIA_EMI?: DateTimeNullableWithAggregatesFilter<"pagos"> | Date | string | null
    DIA_PAG?: DateTimeNullableWithAggregatesFilter<"pagos"> | Date | string | null
    HORA_CAR?: StringNullableWithAggregatesFilter<"pagos"> | string | null
    MES?: IntNullableWithAggregatesFilter<"pagos"> | number | null
    ANO?: IntNullableWithAggregatesFilter<"pagos"> | number | null
    IMPORTE?: FloatNullableWithAggregatesFilter<"pagos"> | number | null
    MAN_COM?: StringNullableWithAggregatesFilter<"pagos"> | string | null
    MOVIM?: StringNullableWithAggregatesFilter<"pagos"> | string | null
    OPERADOR?: StringNullableWithAggregatesFilter<"pagos"> | string | null
    SUCURSAL?: StringNullableWithAggregatesFilter<"pagos"> | string | null
    PUESTO?: IntNullableWithAggregatesFilter<"pagos"> | number | null
    ZONA?: IntNullableWithAggregatesFilter<"pagos"> | number | null
    EMPRESA?: StringNullableWithAggregatesFilter<"pagos"> | string | null
    DNI?: IntNullableWithAggregatesFilter<"pagos"> | number | null
    RENDIDO?: IntNullableWithAggregatesFilter<"pagos"> | number | null
    FECHA_CAJA?: StringNullableWithAggregatesFilter<"pagos"> | string | null
    id?: IntWithAggregatesFilter<"pagos"> | number
    MED_PAG?: StringNullableWithAggregatesFilter<"pagos"> | string | null
  }

  export type pago_bcoWhereInput = {
    AND?: pago_bcoWhereInput | pago_bcoWhereInput[]
    OR?: pago_bcoWhereInput[]
    NOT?: pago_bcoWhereInput | pago_bcoWhereInput[]
    NRO_DOC?: IntNullableFilter<"pago_bco"> | number | null
    CONTRATO?: IntNullableFilter<"pago_bco"> | number | null
    COD_SUC?: StringNullableFilter<"pago_bco"> | string | null
    NRO_CTA?: StringNullableFilter<"pago_bco"> | string | null
    FEC_ACR?: StringNullableFilter<"pago_bco"> | string | null
    IMPORTE?: FloatNullableFilter<"pago_bco"> | number | null
    MARCA?: StringNullableFilter<"pago_bco"> | string | null
    MES?: IntNullableFilter<"pago_bco"> | number | null
    ANO?: IntNullableFilter<"pago_bco"> | number | null
    DIA_PAGO?: DateTimeNullableFilter<"pago_bco"> | Date | string | null
    SUCURSAL?: StringNullableFilter<"pago_bco"> | string | null
    SEGURO?: FloatNullableFilter<"pago_bco"> | number | null
    id?: IntFilter<"pago_bco"> | number
  }

  export type pago_bcoOrderByWithRelationInput = {
    NRO_DOC?: SortOrderInput | SortOrder
    CONTRATO?: SortOrderInput | SortOrder
    COD_SUC?: SortOrderInput | SortOrder
    NRO_CTA?: SortOrderInput | SortOrder
    FEC_ACR?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    MARCA?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    DIA_PAGO?: SortOrderInput | SortOrder
    SUCURSAL?: SortOrderInput | SortOrder
    SEGURO?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type pago_bcoWhereUniqueInput = {
    id?: number
  }

  export type pago_bcoOrderByWithAggregationInput = {
    NRO_DOC?: SortOrderInput | SortOrder
    CONTRATO?: SortOrderInput | SortOrder
    COD_SUC?: SortOrderInput | SortOrder
    NRO_CTA?: SortOrderInput | SortOrder
    FEC_ACR?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    MARCA?: SortOrderInput | SortOrder
    MES?: SortOrderInput | SortOrder
    ANO?: SortOrderInput | SortOrder
    DIA_PAGO?: SortOrderInput | SortOrder
    SUCURSAL?: SortOrderInput | SortOrder
    SEGURO?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: pago_bcoCountOrderByAggregateInput
    _avg?: pago_bcoAvgOrderByAggregateInput
    _max?: pago_bcoMaxOrderByAggregateInput
    _min?: pago_bcoMinOrderByAggregateInput
    _sum?: pago_bcoSumOrderByAggregateInput
  }

  export type pago_bcoScalarWhereWithAggregatesInput = {
    AND?: pago_bcoScalarWhereWithAggregatesInput | pago_bcoScalarWhereWithAggregatesInput[]
    OR?: pago_bcoScalarWhereWithAggregatesInput[]
    NOT?: pago_bcoScalarWhereWithAggregatesInput | pago_bcoScalarWhereWithAggregatesInput[]
    NRO_DOC?: IntNullableWithAggregatesFilter<"pago_bco"> | number | null
    CONTRATO?: IntNullableWithAggregatesFilter<"pago_bco"> | number | null
    COD_SUC?: StringNullableWithAggregatesFilter<"pago_bco"> | string | null
    NRO_CTA?: StringNullableWithAggregatesFilter<"pago_bco"> | string | null
    FEC_ACR?: StringNullableWithAggregatesFilter<"pago_bco"> | string | null
    IMPORTE?: FloatNullableWithAggregatesFilter<"pago_bco"> | number | null
    MARCA?: StringNullableWithAggregatesFilter<"pago_bco"> | string | null
    MES?: IntNullableWithAggregatesFilter<"pago_bco"> | number | null
    ANO?: IntNullableWithAggregatesFilter<"pago_bco"> | number | null
    DIA_PAGO?: DateTimeNullableWithAggregatesFilter<"pago_bco"> | Date | string | null
    SUCURSAL?: StringNullableWithAggregatesFilter<"pago_bco"> | string | null
    SEGURO?: FloatNullableWithAggregatesFilter<"pago_bco"> | number | null
    id?: IntWithAggregatesFilter<"pago_bco"> | number
  }

  export type cajaWhereInput = {
    AND?: cajaWhereInput | cajaWhereInput[]
    OR?: cajaWhereInput[]
    NOT?: cajaWhereInput | cajaWhereInput[]
    SUCURSAL?: StringNullableFilter<"caja"> | string | null
    PUESTO?: IntNullableFilter<"caja"> | number | null
    CODIGO?: IntNullableFilter<"caja"> | number | null
    MOVIM?: StringNullableFilter<"caja"> | string | null
    CUENTA?: StringNullableFilter<"caja"> | string | null
    CUENTA_DESC?: StringNullableFilter<"caja"> | string | null
    IMPORTE?: FloatNullableFilter<"caja"> | number | null
    TIPO?: StringNullableFilter<"caja"> | string | null
    SERIE?: IntNullableFilter<"caja"> | number | null
    NUMERO?: IntNullableFilter<"caja"> | number | null
    CUIT?: StringNullableFilter<"caja"> | string | null
    DETALLE?: StringNullableFilter<"caja"> | string | null
    FECHA?: StringNullableFilter<"caja"> | string | null
    FEC_COMP?: StringNullableFilter<"caja"> | string | null
    HORA?: StringNullableFilter<"caja"> | string | null
    OPERADOR?: StringNullableFilter<"caja"> | string | null
    idmovim?: IntFilter<"caja"> | number
  }

  export type cajaOrderByWithRelationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    PUESTO?: SortOrderInput | SortOrder
    CODIGO?: SortOrderInput | SortOrder
    MOVIM?: SortOrderInput | SortOrder
    CUENTA?: SortOrderInput | SortOrder
    CUENTA_DESC?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    TIPO?: SortOrderInput | SortOrder
    SERIE?: SortOrderInput | SortOrder
    NUMERO?: SortOrderInput | SortOrder
    CUIT?: SortOrderInput | SortOrder
    DETALLE?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    FEC_COMP?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    idmovim?: SortOrder
  }

  export type cajaWhereUniqueInput = {
    idmovim?: number
  }

  export type cajaOrderByWithAggregationInput = {
    SUCURSAL?: SortOrderInput | SortOrder
    PUESTO?: SortOrderInput | SortOrder
    CODIGO?: SortOrderInput | SortOrder
    MOVIM?: SortOrderInput | SortOrder
    CUENTA?: SortOrderInput | SortOrder
    CUENTA_DESC?: SortOrderInput | SortOrder
    IMPORTE?: SortOrderInput | SortOrder
    TIPO?: SortOrderInput | SortOrder
    SERIE?: SortOrderInput | SortOrder
    NUMERO?: SortOrderInput | SortOrder
    CUIT?: SortOrderInput | SortOrder
    DETALLE?: SortOrderInput | SortOrder
    FECHA?: SortOrderInput | SortOrder
    FEC_COMP?: SortOrderInput | SortOrder
    HORA?: SortOrderInput | SortOrder
    OPERADOR?: SortOrderInput | SortOrder
    idmovim?: SortOrder
    _count?: cajaCountOrderByAggregateInput
    _avg?: cajaAvgOrderByAggregateInput
    _max?: cajaMaxOrderByAggregateInput
    _min?: cajaMinOrderByAggregateInput
    _sum?: cajaSumOrderByAggregateInput
  }

  export type cajaScalarWhereWithAggregatesInput = {
    AND?: cajaScalarWhereWithAggregatesInput | cajaScalarWhereWithAggregatesInput[]
    OR?: cajaScalarWhereWithAggregatesInput[]
    NOT?: cajaScalarWhereWithAggregatesInput | cajaScalarWhereWithAggregatesInput[]
    SUCURSAL?: StringNullableWithAggregatesFilter<"caja"> | string | null
    PUESTO?: IntNullableWithAggregatesFilter<"caja"> | number | null
    CODIGO?: IntNullableWithAggregatesFilter<"caja"> | number | null
    MOVIM?: StringNullableWithAggregatesFilter<"caja"> | string | null
    CUENTA?: StringNullableWithAggregatesFilter<"caja"> | string | null
    CUENTA_DESC?: StringNullableWithAggregatesFilter<"caja"> | string | null
    IMPORTE?: FloatNullableWithAggregatesFilter<"caja"> | number | null
    TIPO?: StringNullableWithAggregatesFilter<"caja"> | string | null
    SERIE?: IntNullableWithAggregatesFilter<"caja"> | number | null
    NUMERO?: IntNullableWithAggregatesFilter<"caja"> | number | null
    CUIT?: StringNullableWithAggregatesFilter<"caja"> | string | null
    DETALLE?: StringNullableWithAggregatesFilter<"caja"> | string | null
    FECHA?: StringNullableWithAggregatesFilter<"caja"> | string | null
    FEC_COMP?: StringNullableWithAggregatesFilter<"caja"> | string | null
    HORA?: StringNullableWithAggregatesFilter<"caja"> | string | null
    OPERADOR?: StringNullableWithAggregatesFilter<"caja"> | string | null
    idmovim?: IntWithAggregatesFilter<"caja"> | number
  }

  export type subctaWhereInput = {
    AND?: subctaWhereInput | subctaWhereInput[]
    OR?: subctaWhereInput[]
    NOT?: subctaWhereInput | subctaWhereInput[]
    CODI?: IntNullableFilter<"subcta"> | number | null
    DESC?: StringNullableFilter<"subcta"> | string | null
    CUEN?: IntNullableFilter<"subcta"> | number | null
    MOVIM?: StringNullableFilter<"subcta"> | string | null
    id?: IntFilter<"subcta"> | number
  }

  export type subctaOrderByWithRelationInput = {
    CODI?: SortOrderInput | SortOrder
    DESC?: SortOrderInput | SortOrder
    CUEN?: SortOrderInput | SortOrder
    MOVIM?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type subctaWhereUniqueInput = {
    id?: number
  }

  export type subctaOrderByWithAggregationInput = {
    CODI?: SortOrderInput | SortOrder
    DESC?: SortOrderInput | SortOrder
    CUEN?: SortOrderInput | SortOrder
    MOVIM?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: subctaCountOrderByAggregateInput
    _avg?: subctaAvgOrderByAggregateInput
    _max?: subctaMaxOrderByAggregateInput
    _min?: subctaMinOrderByAggregateInput
    _sum?: subctaSumOrderByAggregateInput
  }

  export type subctaScalarWhereWithAggregatesInput = {
    AND?: subctaScalarWhereWithAggregatesInput | subctaScalarWhereWithAggregatesInput[]
    OR?: subctaScalarWhereWithAggregatesInput[]
    NOT?: subctaScalarWhereWithAggregatesInput | subctaScalarWhereWithAggregatesInput[]
    CODI?: IntNullableWithAggregatesFilter<"subcta"> | number | null
    DESC?: StringNullableWithAggregatesFilter<"subcta"> | string | null
    CUEN?: IntNullableWithAggregatesFilter<"subcta"> | number | null
    MOVIM?: StringNullableWithAggregatesFilter<"subcta"> | string | null
    id?: IntWithAggregatesFilter<"subcta"> | number
  }

  export type maestro_cuentasWhereInput = {
    AND?: maestro_cuentasWhereInput | maestro_cuentasWhereInput[]
    OR?: maestro_cuentasWhereInput[]
    NOT?: maestro_cuentasWhereInput | maestro_cuentasWhereInput[]
    idcuenta?: IntFilter<"maestro_cuentas"> | number
    contrato?: IntNullableFilter<"maestro_cuentas"> | number | null
    dni?: IntNullableFilter<"maestro_cuentas"> | number | null
    grupo?: IntNullableFilter<"maestro_cuentas"> | number | null
    cuenta?: StringNullableFilter<"maestro_cuentas"> | string | null
    observacion?: StringNullableFilter<"maestro_cuentas"> | string | null
  }

  export type maestro_cuentasOrderByWithRelationInput = {
    idcuenta?: SortOrder
    contrato?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    grupo?: SortOrderInput | SortOrder
    cuenta?: SortOrderInput | SortOrder
    observacion?: SortOrderInput | SortOrder
  }

  export type maestro_cuentasWhereUniqueInput = {
    idcuenta?: number
  }

  export type maestro_cuentasOrderByWithAggregationInput = {
    idcuenta?: SortOrder
    contrato?: SortOrderInput | SortOrder
    dni?: SortOrderInput | SortOrder
    grupo?: SortOrderInput | SortOrder
    cuenta?: SortOrderInput | SortOrder
    observacion?: SortOrderInput | SortOrder
    _count?: maestro_cuentasCountOrderByAggregateInput
    _avg?: maestro_cuentasAvgOrderByAggregateInput
    _max?: maestro_cuentasMaxOrderByAggregateInput
    _min?: maestro_cuentasMinOrderByAggregateInput
    _sum?: maestro_cuentasSumOrderByAggregateInput
  }

  export type maestro_cuentasScalarWhereWithAggregatesInput = {
    AND?: maestro_cuentasScalarWhereWithAggregatesInput | maestro_cuentasScalarWhereWithAggregatesInput[]
    OR?: maestro_cuentasScalarWhereWithAggregatesInput[]
    NOT?: maestro_cuentasScalarWhereWithAggregatesInput | maestro_cuentasScalarWhereWithAggregatesInput[]
    idcuenta?: IntWithAggregatesFilter<"maestro_cuentas"> | number
    contrato?: IntNullableWithAggregatesFilter<"maestro_cuentas"> | number | null
    dni?: IntNullableWithAggregatesFilter<"maestro_cuentas"> | number | null
    grupo?: IntNullableWithAggregatesFilter<"maestro_cuentas"> | number | null
    cuenta?: StringNullableWithAggregatesFilter<"maestro_cuentas"> | string | null
    observacion?: StringNullableWithAggregatesFilter<"maestro_cuentas"> | string | null
  }

  export type operadorWhereInput = {
    AND?: operadorWhereInput | operadorWhereInput[]
    OR?: operadorWhereInput[]
    NOT?: operadorWhereInput | operadorWhereInput[]
    id?: IntFilter<"operador"> | number
    nombre?: StringFilter<"operador"> | string
    apellido?: StringFilter<"operador"> | string
    usuario?: StringFilter<"operador"> | string
    contrasena?: StringFilter<"operador"> | string
    createdAt?: DateTimeFilter<"operador"> | Date | string
    updatedAt?: DateTimeFilter<"operador"> | Date | string
    perfil?: IntNullableFilter<"operador"> | number | null
    estado?: BoolNullableFilter<"operador"> | boolean | null
    codigo?: IntNullableFilter<"operador"> | number | null
    medicos?: BoolNullableFilter<"operador"> | boolean | null
    sucursal?: StringNullableFilter<"operador"> | string | null
    prestamos?: BoolNullableFilter<"operador"> | boolean | null
    ordenpago?: BoolNullableFilter<"operador"> | boolean | null
    clubwerchow?: BoolNullableFilter<"operador"> | boolean | null
    ventas?: BoolNullableFilter<"operador"> | boolean | null
    administracion?: BoolNullableFilter<"operador"> | boolean | null
    campanas?: BoolNullableFilter<"operador"> | boolean | null
    socios?: BoolNullableFilter<"operador"> | boolean | null
    sepelio?: BoolNullableFilter<"operador"> | boolean | null
    gestion?: BoolNullableFilter<"operador"> | boolean | null
    contabilidad?: BoolNullableFilter<"operador"> | boolean | null
    cobranza?: BoolNullableFilter<"operador"> | boolean | null
  }

  export type operadorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    perfil?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    medicos?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    prestamos?: SortOrderInput | SortOrder
    ordenpago?: SortOrderInput | SortOrder
    clubwerchow?: SortOrderInput | SortOrder
    ventas?: SortOrderInput | SortOrder
    administracion?: SortOrderInput | SortOrder
    campanas?: SortOrderInput | SortOrder
    socios?: SortOrderInput | SortOrder
    sepelio?: SortOrderInput | SortOrder
    gestion?: SortOrderInput | SortOrder
    contabilidad?: SortOrderInput | SortOrder
    cobranza?: SortOrderInput | SortOrder
  }

  export type operadorWhereUniqueInput = {
    id?: number
  }

  export type operadorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    perfil?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    medicos?: SortOrderInput | SortOrder
    sucursal?: SortOrderInput | SortOrder
    prestamos?: SortOrderInput | SortOrder
    ordenpago?: SortOrderInput | SortOrder
    clubwerchow?: SortOrderInput | SortOrder
    ventas?: SortOrderInput | SortOrder
    administracion?: SortOrderInput | SortOrder
    campanas?: SortOrderInput | SortOrder
    socios?: SortOrderInput | SortOrder
    sepelio?: SortOrderInput | SortOrder
    gestion?: SortOrderInput | SortOrder
    contabilidad?: SortOrderInput | SortOrder
    cobranza?: SortOrderInput | SortOrder
    _count?: operadorCountOrderByAggregateInput
    _avg?: operadorAvgOrderByAggregateInput
    _max?: operadorMaxOrderByAggregateInput
    _min?: operadorMinOrderByAggregateInput
    _sum?: operadorSumOrderByAggregateInput
  }

  export type operadorScalarWhereWithAggregatesInput = {
    AND?: operadorScalarWhereWithAggregatesInput | operadorScalarWhereWithAggregatesInput[]
    OR?: operadorScalarWhereWithAggregatesInput[]
    NOT?: operadorScalarWhereWithAggregatesInput | operadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"operador"> | number
    nombre?: StringWithAggregatesFilter<"operador"> | string
    apellido?: StringWithAggregatesFilter<"operador"> | string
    usuario?: StringWithAggregatesFilter<"operador"> | string
    contrasena?: StringWithAggregatesFilter<"operador"> | string
    createdAt?: DateTimeWithAggregatesFilter<"operador"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"operador"> | Date | string
    perfil?: IntNullableWithAggregatesFilter<"operador"> | number | null
    estado?: BoolNullableWithAggregatesFilter<"operador"> | boolean | null
    codigo?: IntNullableWithAggregatesFilter<"operador"> | number | null
    medicos?: BoolNullableWithAggregatesFilter<"operador"> | boolean | null
    sucursal?: StringNullableWithAggregatesFilter<"operador"> | string | null
    prestamos?: BoolNullableWithAggregatesFilter<"operador"> | boolean | null
    ordenpago?: BoolNullableWithAggregatesFilter<"operador"> | boolean | null
    clubwerchow?: BoolNullableWithAggregatesFilter<"operador"> | boolean | null
    ventas?: BoolNullableWithAggregatesFilter<"operador"> | boolean | null
    administracion?: BoolNullableWithAggregatesFilter<"operador"> | boolean | null
    campanas?: BoolNullableWithAggregatesFilter<"operador"> | boolean | null
    socios?: BoolNullableWithAggregatesFilter<"operador"> | boolean | null
    sepelio?: BoolNullableWithAggregatesFilter<"operador"> | boolean | null
    gestion?: BoolNullableWithAggregatesFilter<"operador"> | boolean | null
    contabilidad?: BoolNullableWithAggregatesFilter<"operador"> | boolean | null
    cobranza?: BoolNullableWithAggregatesFilter<"operador"> | boolean | null
  }

  export type subcta_oldWhereInput = {
    AND?: subcta_oldWhereInput | subcta_oldWhereInput[]
    OR?: subcta_oldWhereInput[]
    NOT?: subcta_oldWhereInput | subcta_oldWhereInput[]
    CODI?: IntNullableFilter<"subcta_old"> | number | null
    DESC?: StringNullableFilter<"subcta_old"> | string | null
    CUEN?: IntNullableFilter<"subcta_old"> | number | null
    MOVIM?: StringNullableFilter<"subcta_old"> | string | null
    id?: IntFilter<"subcta_old"> | number
  }

  export type subcta_oldOrderByWithRelationInput = {
    CODI?: SortOrderInput | SortOrder
    DESC?: SortOrderInput | SortOrder
    CUEN?: SortOrderInput | SortOrder
    MOVIM?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type subcta_oldWhereUniqueInput = {
    id?: number
  }

  export type subcta_oldOrderByWithAggregationInput = {
    CODI?: SortOrderInput | SortOrder
    DESC?: SortOrderInput | SortOrder
    CUEN?: SortOrderInput | SortOrder
    MOVIM?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: subcta_oldCountOrderByAggregateInput
    _avg?: subcta_oldAvgOrderByAggregateInput
    _max?: subcta_oldMaxOrderByAggregateInput
    _min?: subcta_oldMinOrderByAggregateInput
    _sum?: subcta_oldSumOrderByAggregateInput
  }

  export type subcta_oldScalarWhereWithAggregatesInput = {
    AND?: subcta_oldScalarWhereWithAggregatesInput | subcta_oldScalarWhereWithAggregatesInput[]
    OR?: subcta_oldScalarWhereWithAggregatesInput[]
    NOT?: subcta_oldScalarWhereWithAggregatesInput | subcta_oldScalarWhereWithAggregatesInput[]
    CODI?: IntNullableWithAggregatesFilter<"subcta_old"> | number | null
    DESC?: StringNullableWithAggregatesFilter<"subcta_old"> | string | null
    CUEN?: IntNullableWithAggregatesFilter<"subcta_old"> | number | null
    MOVIM?: StringNullableWithAggregatesFilter<"subcta_old"> | string | null
    id?: IntWithAggregatesFilter<"subcta_old"> | number
  }

  export type soWhereInput = {
    AND?: soWhereInput | soWhereInput[]
    OR?: soWhereInput[]
    NOT?: soWhereInput | soWhereInput[]
    CONTRATO?: StringNullableFilter<"so"> | string | null
    SOCIO?: StringNullableFilter<"so"> | string | null
    ALTA?: StringNullableFilter<"so"> | string | null
    GRUPO?: StringNullableFilter<"so"> | string | null
    ADHERENTES?: StringNullableFilter<"so"> | string | null
    PLAN?: StringNullableFilter<"so"> | string | null
    ZONA?: StringNullableFilter<"so"> | string | null
    EDAD?: StringNullableFilter<"so"> | string | null
    CUOTA?: StringNullableFilter<"so"> | string | null
    EMPRESA?: StringNullableFilter<"so"> | string | null
    SUCURSAL?: StringNullableFilter<"so"> | string | null
    CUOTAS?: StringNullableFilter<"so"> | string | null
    PAGOS?: StringNullableFilter<"so"> | string | null
    DEUDA?: StringNullableFilter<"so"> | string | null
    id?: IntFilter<"so"> | number
  }

  export type soOrderByWithRelationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    SOCIO?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ADHERENTES?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    CUOTA?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    SUCURSAL?: SortOrderInput | SortOrder
    CUOTAS?: SortOrderInput | SortOrder
    PAGOS?: SortOrderInput | SortOrder
    DEUDA?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type soWhereUniqueInput = {
    id?: number
  }

  export type soOrderByWithAggregationInput = {
    CONTRATO?: SortOrderInput | SortOrder
    SOCIO?: SortOrderInput | SortOrder
    ALTA?: SortOrderInput | SortOrder
    GRUPO?: SortOrderInput | SortOrder
    ADHERENTES?: SortOrderInput | SortOrder
    PLAN?: SortOrderInput | SortOrder
    ZONA?: SortOrderInput | SortOrder
    EDAD?: SortOrderInput | SortOrder
    CUOTA?: SortOrderInput | SortOrder
    EMPRESA?: SortOrderInput | SortOrder
    SUCURSAL?: SortOrderInput | SortOrder
    CUOTAS?: SortOrderInput | SortOrder
    PAGOS?: SortOrderInput | SortOrder
    DEUDA?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: soCountOrderByAggregateInput
    _avg?: soAvgOrderByAggregateInput
    _max?: soMaxOrderByAggregateInput
    _min?: soMinOrderByAggregateInput
    _sum?: soSumOrderByAggregateInput
  }

  export type soScalarWhereWithAggregatesInput = {
    AND?: soScalarWhereWithAggregatesInput | soScalarWhereWithAggregatesInput[]
    OR?: soScalarWhereWithAggregatesInput[]
    NOT?: soScalarWhereWithAggregatesInput | soScalarWhereWithAggregatesInput[]
    CONTRATO?: StringNullableWithAggregatesFilter<"so"> | string | null
    SOCIO?: StringNullableWithAggregatesFilter<"so"> | string | null
    ALTA?: StringNullableWithAggregatesFilter<"so"> | string | null
    GRUPO?: StringNullableWithAggregatesFilter<"so"> | string | null
    ADHERENTES?: StringNullableWithAggregatesFilter<"so"> | string | null
    PLAN?: StringNullableWithAggregatesFilter<"so"> | string | null
    ZONA?: StringNullableWithAggregatesFilter<"so"> | string | null
    EDAD?: StringNullableWithAggregatesFilter<"so"> | string | null
    CUOTA?: StringNullableWithAggregatesFilter<"so"> | string | null
    EMPRESA?: StringNullableWithAggregatesFilter<"so"> | string | null
    SUCURSAL?: StringNullableWithAggregatesFilter<"so"> | string | null
    CUOTAS?: StringNullableWithAggregatesFilter<"so"> | string | null
    PAGOS?: StringNullableWithAggregatesFilter<"so"> | string | null
    DEUDA?: StringNullableWithAggregatesFilter<"so"> | string | null
    id?: IntWithAggregatesFilter<"so"> | number
  }

  export type adherentCreateInput = {
    SUCURSAL?: string | null
    CONTRATO?: number | null
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    NACIMIENTO?: Date | string | null
    SEXO?: string | null
    ALTA?: Date | string | null
    BAJA?: Date | string | null
    VIGENCIA?: Date | string | null
    PARENT?: number | null
    OBRA_SOC?: number | null
    SEGURO?: number | null
    PRODUCTOR?: number | null
    PLAN?: string | null
    ORDEN?: number | null
    EDAD?: number | null
    ESTADO?: boolean | null
  }

  export type adherentUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO?: number | null
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    NACIMIENTO?: Date | string | null
    SEXO?: string | null
    ALTA?: Date | string | null
    BAJA?: Date | string | null
    VIGENCIA?: Date | string | null
    PARENT?: number | null
    OBRA_SOC?: number | null
    SEGURO?: number | null
    PRODUCTOR?: number | null
    PLAN?: string | null
    ORDEN?: number | null
    EDAD?: number | null
    ESTADO?: boolean | null
    idadherent?: number
  }

  export type adherentUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PARENT?: NullableIntFieldUpdateOperationsInput | number | null
    OBRA_SOC?: NullableIntFieldUpdateOperationsInput | number | null
    SEGURO?: NullableIntFieldUpdateOperationsInput | number | null
    PRODUCTOR?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableIntFieldUpdateOperationsInput | number | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    ESTADO?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type adherentUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PARENT?: NullableIntFieldUpdateOperationsInput | number | null
    OBRA_SOC?: NullableIntFieldUpdateOperationsInput | number | null
    SEGURO?: NullableIntFieldUpdateOperationsInput | number | null
    PRODUCTOR?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableIntFieldUpdateOperationsInput | number | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    ESTADO?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idadherent?: IntFieldUpdateOperationsInput | number
  }

  export type adherentCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO?: number | null
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    NACIMIENTO?: Date | string | null
    SEXO?: string | null
    ALTA?: Date | string | null
    BAJA?: Date | string | null
    VIGENCIA?: Date | string | null
    PARENT?: number | null
    OBRA_SOC?: number | null
    SEGURO?: number | null
    PRODUCTOR?: number | null
    PLAN?: string | null
    ORDEN?: number | null
    EDAD?: number | null
    ESTADO?: boolean | null
    idadherent?: number
  }

  export type adherentUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PARENT?: NullableIntFieldUpdateOperationsInput | number | null
    OBRA_SOC?: NullableIntFieldUpdateOperationsInput | number | null
    SEGURO?: NullableIntFieldUpdateOperationsInput | number | null
    PRODUCTOR?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableIntFieldUpdateOperationsInput | number | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    ESTADO?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type adherentUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    BAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PARENT?: NullableIntFieldUpdateOperationsInput | number | null
    OBRA_SOC?: NullableIntFieldUpdateOperationsInput | number | null
    SEGURO?: NullableIntFieldUpdateOperationsInput | number | null
    PRODUCTOR?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableIntFieldUpdateOperationsInput | number | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    ESTADO?: NullableBoolFieldUpdateOperationsInput | boolean | null
    idadherent?: IntFieldUpdateOperationsInput | number
  }

  export type cuo_fijaCreateInput = {
    CONTRATO?: number | null
    IMPORTE?: number | null
    CUO_ANT?: number | null
    DESDE?: Date | string | null
    VENCIM?: Date | string | null
    OPERADOR?: string | null
  }

  export type cuo_fijaUncheckedCreateInput = {
    CONTRATO?: number | null
    IMPORTE?: number | null
    CUO_ANT?: number | null
    DESDE?: Date | string | null
    VENCIM?: Date | string | null
    OPERADOR?: string | null
    idcuota?: number
  }

  export type cuo_fijaUpdateInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    CUO_ANT?: NullableFloatFieldUpdateOperationsInput | number | null
    DESDE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VENCIM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cuo_fijaUncheckedUpdateInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    CUO_ANT?: NullableFloatFieldUpdateOperationsInput | number | null
    DESDE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VENCIM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    idcuota?: IntFieldUpdateOperationsInput | number
  }

  export type cuo_fijaCreateManyInput = {
    CONTRATO?: number | null
    IMPORTE?: number | null
    CUO_ANT?: number | null
    DESDE?: Date | string | null
    VENCIM?: Date | string | null
    OPERADOR?: string | null
    idcuota?: number
  }

  export type cuo_fijaUpdateManyMutationInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    CUO_ANT?: NullableFloatFieldUpdateOperationsInput | number | null
    DESDE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VENCIM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cuo_fijaUncheckedUpdateManyInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    CUO_ANT?: NullableFloatFieldUpdateOperationsInput | number | null
    DESDE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VENCIM?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    idcuota?: IntFieldUpdateOperationsInput | number
  }

  export type gruposCreateInput = {
    CODIGO?: number | null
    DESCRIP?: string | null
    IVA?: string | null
    CUIT?: string | null
    DOMICILIO?: string | null
    ORDEN?: string | null
    LIN_ALTA?: string | null
    LIN_BAJA?: string | null
    TOTALIZA?: number | null
    PAGINA?: number | null
    TITULO1?: string | null
    TITULO2?: string | null
    DIA?: number | null
    MES?: number | null
    ANO?: number | null
    SUCURSAL?: string | null
    MARCA?: string | null
    CONVENIO?: string | null
  }

  export type gruposUncheckedCreateInput = {
    CODIGO?: number | null
    DESCRIP?: string | null
    IVA?: string | null
    CUIT?: string | null
    DOMICILIO?: string | null
    ORDEN?: string | null
    LIN_ALTA?: string | null
    LIN_BAJA?: string | null
    TOTALIZA?: number | null
    PAGINA?: number | null
    TITULO1?: string | null
    TITULO2?: string | null
    DIA?: number | null
    MES?: number | null
    ANO?: number | null
    SUCURSAL?: string | null
    MARCA?: string | null
    CONVENIO?: string | null
    id?: number
  }

  export type gruposUpdateInput = {
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    DESCRIP?: NullableStringFieldUpdateOperationsInput | string | null
    IVA?: NullableStringFieldUpdateOperationsInput | string | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    DOMICILIO?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    LIN_ALTA?: NullableStringFieldUpdateOperationsInput | string | null
    LIN_BAJA?: NullableStringFieldUpdateOperationsInput | string | null
    TOTALIZA?: NullableIntFieldUpdateOperationsInput | number | null
    PAGINA?: NullableIntFieldUpdateOperationsInput | number | null
    TITULO1?: NullableStringFieldUpdateOperationsInput | string | null
    TITULO2?: NullableStringFieldUpdateOperationsInput | string | null
    DIA?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    MARCA?: NullableStringFieldUpdateOperationsInput | string | null
    CONVENIO?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gruposUncheckedUpdateInput = {
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    DESCRIP?: NullableStringFieldUpdateOperationsInput | string | null
    IVA?: NullableStringFieldUpdateOperationsInput | string | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    DOMICILIO?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    LIN_ALTA?: NullableStringFieldUpdateOperationsInput | string | null
    LIN_BAJA?: NullableStringFieldUpdateOperationsInput | string | null
    TOTALIZA?: NullableIntFieldUpdateOperationsInput | number | null
    PAGINA?: NullableIntFieldUpdateOperationsInput | number | null
    TITULO1?: NullableStringFieldUpdateOperationsInput | string | null
    TITULO2?: NullableStringFieldUpdateOperationsInput | string | null
    DIA?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    MARCA?: NullableStringFieldUpdateOperationsInput | string | null
    CONVENIO?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type gruposCreateManyInput = {
    CODIGO?: number | null
    DESCRIP?: string | null
    IVA?: string | null
    CUIT?: string | null
    DOMICILIO?: string | null
    ORDEN?: string | null
    LIN_ALTA?: string | null
    LIN_BAJA?: string | null
    TOTALIZA?: number | null
    PAGINA?: number | null
    TITULO1?: string | null
    TITULO2?: string | null
    DIA?: number | null
    MES?: number | null
    ANO?: number | null
    SUCURSAL?: string | null
    MARCA?: string | null
    CONVENIO?: string | null
    id?: number
  }

  export type gruposUpdateManyMutationInput = {
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    DESCRIP?: NullableStringFieldUpdateOperationsInput | string | null
    IVA?: NullableStringFieldUpdateOperationsInput | string | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    DOMICILIO?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    LIN_ALTA?: NullableStringFieldUpdateOperationsInput | string | null
    LIN_BAJA?: NullableStringFieldUpdateOperationsInput | string | null
    TOTALIZA?: NullableIntFieldUpdateOperationsInput | number | null
    PAGINA?: NullableIntFieldUpdateOperationsInput | number | null
    TITULO1?: NullableStringFieldUpdateOperationsInput | string | null
    TITULO2?: NullableStringFieldUpdateOperationsInput | string | null
    DIA?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    MARCA?: NullableStringFieldUpdateOperationsInput | string | null
    CONVENIO?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gruposUncheckedUpdateManyInput = {
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    DESCRIP?: NullableStringFieldUpdateOperationsInput | string | null
    IVA?: NullableStringFieldUpdateOperationsInput | string | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    DOMICILIO?: NullableStringFieldUpdateOperationsInput | string | null
    ORDEN?: NullableStringFieldUpdateOperationsInput | string | null
    LIN_ALTA?: NullableStringFieldUpdateOperationsInput | string | null
    LIN_BAJA?: NullableStringFieldUpdateOperationsInput | string | null
    TOTALIZA?: NullableIntFieldUpdateOperationsInput | number | null
    PAGINA?: NullableIntFieldUpdateOperationsInput | number | null
    TITULO1?: NullableStringFieldUpdateOperationsInput | string | null
    TITULO2?: NullableStringFieldUpdateOperationsInput | string | null
    DIA?: NullableIntFieldUpdateOperationsInput | number | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    MARCA?: NullableStringFieldUpdateOperationsInput | string | null
    CONVENIO?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type historiaCreateInput = {
    CONTRATO?: number | null
    OPERADOR?: string | null
    ACCION?: string | null
    FECHA?: string | null
  }

  export type historiaUncheckedCreateInput = {
    CONTRATO?: number | null
    OPERADOR?: string | null
    ACCION?: string | null
    idhistoria?: number
    FECHA?: string | null
  }

  export type historiaUpdateInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    ACCION?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historiaUncheckedUpdateInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    ACCION?: NullableStringFieldUpdateOperationsInput | string | null
    idhistoria?: IntFieldUpdateOperationsInput | number
    FECHA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historiaCreateManyInput = {
    CONTRATO?: number | null
    OPERADOR?: string | null
    ACCION?: string | null
    idhistoria?: number
    FECHA?: string | null
  }

  export type historiaUpdateManyMutationInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    ACCION?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historiaUncheckedUpdateManyInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    ACCION?: NullableStringFieldUpdateOperationsInput | string | null
    idhistoria?: IntFieldUpdateOperationsInput | number
    FECHA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type localidadCreateInput = {
    CODIGO?: number | null
    DETALLE?: string | null
  }

  export type localidadUncheckedCreateInput = {
    CODIGO?: number | null
    DETALLE?: string | null
    idlocalidad?: number
  }

  export type localidadUpdateInput = {
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type localidadUncheckedUpdateInput = {
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    idlocalidad?: IntFieldUpdateOperationsInput | number
  }

  export type localidadCreateManyInput = {
    CODIGO?: number | null
    DETALLE?: string | null
    idlocalidad?: number
  }

  export type localidadUpdateManyMutationInput = {
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type localidadUncheckedUpdateManyInput = {
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    idlocalidad?: IntFieldUpdateOperationsInput | number
  }

  export type maestroCreateInput = {
    ESTADO?: boolean | null
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    NACIMIENTO?: Date | string | null
    CALLE?: string | null
    LOCALIDAD?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    DOMI_COBR?: string | null
    DOM_LAB?: string | null
    ZONA?: number | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    GRUPO?: number | null
    SEXO?: string | null
    ADHERENTES?: number | null
    OPERADOR?: string | null
    OBRA_SOC?: number | null
    PRODUCTOR?: number | null
    PLAN?: string | null
    EMPRESA?: string | null
    EDAD?: number | null
    COD_POST?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD_PROM?: number | null
    MAIL?: string | null
  }

  export type maestroUncheckedCreateInput = {
    idmaestro?: number
    ESTADO?: boolean | null
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    NACIMIENTO?: Date | string | null
    CALLE?: string | null
    LOCALIDAD?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    DOMI_COBR?: string | null
    DOM_LAB?: string | null
    ZONA?: number | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    GRUPO?: number | null
    SEXO?: string | null
    ADHERENTES?: number | null
    OPERADOR?: string | null
    OBRA_SOC?: number | null
    PRODUCTOR?: number | null
    PLAN?: string | null
    EMPRESA?: string | null
    EDAD?: number | null
    COD_POST?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD_PROM?: number | null
    MAIL?: string | null
  }

  export type maestroUpdateInput = {
    ESTADO?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    DOMI_COBR?: NullableStringFieldUpdateOperationsInput | string | null
    DOM_LAB?: NullableStringFieldUpdateOperationsInput | string | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    ADHERENTES?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OBRA_SOC?: NullableIntFieldUpdateOperationsInput | number | null
    PRODUCTOR?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    COD_POST?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD_PROM?: NullableFloatFieldUpdateOperationsInput | number | null
    MAIL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type maestroUncheckedUpdateInput = {
    idmaestro?: IntFieldUpdateOperationsInput | number
    ESTADO?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    DOMI_COBR?: NullableStringFieldUpdateOperationsInput | string | null
    DOM_LAB?: NullableStringFieldUpdateOperationsInput | string | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    ADHERENTES?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OBRA_SOC?: NullableIntFieldUpdateOperationsInput | number | null
    PRODUCTOR?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    COD_POST?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD_PROM?: NullableFloatFieldUpdateOperationsInput | number | null
    MAIL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type maestroCreateManyInput = {
    idmaestro?: number
    ESTADO?: boolean | null
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    NACIMIENTO?: Date | string | null
    CALLE?: string | null
    LOCALIDAD?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    DOMI_COBR?: string | null
    DOM_LAB?: string | null
    ZONA?: number | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    GRUPO?: number | null
    SEXO?: string | null
    ADHERENTES?: number | null
    OPERADOR?: string | null
    OBRA_SOC?: number | null
    PRODUCTOR?: number | null
    PLAN?: string | null
    EMPRESA?: string | null
    EDAD?: number | null
    COD_POST?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD_PROM?: number | null
    MAIL?: string | null
  }

  export type maestroUpdateManyMutationInput = {
    ESTADO?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    DOMI_COBR?: NullableStringFieldUpdateOperationsInput | string | null
    DOM_LAB?: NullableStringFieldUpdateOperationsInput | string | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    ADHERENTES?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OBRA_SOC?: NullableIntFieldUpdateOperationsInput | number | null
    PRODUCTOR?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    COD_POST?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD_PROM?: NullableFloatFieldUpdateOperationsInput | number | null
    MAIL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type maestroUncheckedUpdateManyInput = {
    idmaestro?: IntFieldUpdateOperationsInput | number
    ESTADO?: NullableBoolFieldUpdateOperationsInput | boolean | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    DOMI_COBR?: NullableStringFieldUpdateOperationsInput | string | null
    DOM_LAB?: NullableStringFieldUpdateOperationsInput | string | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    ADHERENTES?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    OBRA_SOC?: NullableIntFieldUpdateOperationsInput | number | null
    PRODUCTOR?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    COD_POST?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD_PROM?: NullableFloatFieldUpdateOperationsInput | number | null
    MAIL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type obra_socCreateInput = {
    CODIGO?: number | null
    NOMBRE?: string | null
    DETALLE?: string | null
    DOMICILIO?: string | null
    FECHA_SUSP?: Date | string | null
    OPERADOR?: number | null
    ACTUALIZA?: string | null
    SUSPENDIDO?: number | null
  }

  export type obra_socUncheckedCreateInput = {
    CODIGO?: number | null
    NOMBRE?: string | null
    DETALLE?: string | null
    DOMICILIO?: string | null
    FECHA_SUSP?: Date | string | null
    OPERADOR?: number | null
    ACTUALIZA?: string | null
    SUSPENDIDO?: number | null
    id?: number
  }

  export type obra_socUpdateInput = {
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    DOMICILIO?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_SUSP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OPERADOR?: NullableIntFieldUpdateOperationsInput | number | null
    ACTUALIZA?: NullableStringFieldUpdateOperationsInput | string | null
    SUSPENDIDO?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type obra_socUncheckedUpdateInput = {
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    DOMICILIO?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_SUSP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OPERADOR?: NullableIntFieldUpdateOperationsInput | number | null
    ACTUALIZA?: NullableStringFieldUpdateOperationsInput | string | null
    SUSPENDIDO?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type obra_socCreateManyInput = {
    CODIGO?: number | null
    NOMBRE?: string | null
    DETALLE?: string | null
    DOMICILIO?: string | null
    FECHA_SUSP?: Date | string | null
    OPERADOR?: number | null
    ACTUALIZA?: string | null
    SUSPENDIDO?: number | null
    id?: number
  }

  export type obra_socUpdateManyMutationInput = {
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    DOMICILIO?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_SUSP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OPERADOR?: NullableIntFieldUpdateOperationsInput | number | null
    ACTUALIZA?: NullableStringFieldUpdateOperationsInput | string | null
    SUSPENDIDO?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type obra_socUncheckedUpdateManyInput = {
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    DOMICILIO?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA_SUSP?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    OPERADOR?: NullableIntFieldUpdateOperationsInput | number | null
    ACTUALIZA?: NullableStringFieldUpdateOperationsInput | string | null
    SUSPENDIDO?: NullableIntFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type bajasCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    NACIMIENTO?: Date | string | null
    CALLE?: string | null
    LOCALIDAD?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    DOMI_COBR?: string | null
    DOM_LAB?: string | null
    ZONA?: number | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    GRUPO?: number | null
    SEXO?: string | null
    ADHERENTES?: number | null
    OPERADOR?: number | null
    OBRA_SOC?: number | null
    PRODUCTOR?: number | null
    PLAN?: string | null
    SUB_PLAN?: string | null
    EMPRESA?: string | null
    EDAD?: number | null
    COD_POST?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD_PROM?: number | null
    MAIL?: string | null
    BAJA?: Date | string | null
  }

  export type bajasUncheckedCreateInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    NACIMIENTO?: Date | string | null
    CALLE?: string | null
    LOCALIDAD?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    DOMI_COBR?: string | null
    DOM_LAB?: string | null
    ZONA?: number | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    GRUPO?: number | null
    SEXO?: string | null
    ADHERENTES?: number | null
    OPERADOR?: number | null
    OBRA_SOC?: number | null
    PRODUCTOR?: number | null
    PLAN?: string | null
    SUB_PLAN?: string | null
    EMPRESA?: string | null
    EDAD?: number | null
    COD_POST?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD_PROM?: number | null
    MAIL?: string | null
    idbaja?: number
    BAJA?: Date | string | null
  }

  export type bajasUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    DOMI_COBR?: NullableStringFieldUpdateOperationsInput | string | null
    DOM_LAB?: NullableStringFieldUpdateOperationsInput | string | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    ADHERENTES?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableIntFieldUpdateOperationsInput | number | null
    OBRA_SOC?: NullableIntFieldUpdateOperationsInput | number | null
    PRODUCTOR?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    SUB_PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    COD_POST?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD_PROM?: NullableFloatFieldUpdateOperationsInput | number | null
    MAIL?: NullableStringFieldUpdateOperationsInput | string | null
    BAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bajasUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    DOMI_COBR?: NullableStringFieldUpdateOperationsInput | string | null
    DOM_LAB?: NullableStringFieldUpdateOperationsInput | string | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    ADHERENTES?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableIntFieldUpdateOperationsInput | number | null
    OBRA_SOC?: NullableIntFieldUpdateOperationsInput | number | null
    PRODUCTOR?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    SUB_PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    COD_POST?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD_PROM?: NullableFloatFieldUpdateOperationsInput | number | null
    MAIL?: NullableStringFieldUpdateOperationsInput | string | null
    idbaja?: IntFieldUpdateOperationsInput | number
    BAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bajasCreateManyInput = {
    SUCURSAL?: string | null
    CONTRATO: number
    NRO_DOC?: number | null
    APELLIDOS?: string | null
    NOMBRES?: string | null
    NACIMIENTO?: Date | string | null
    CALLE?: string | null
    LOCALIDAD?: string | null
    NRO_CALLE?: number | null
    BARRIO?: string | null
    DOMI_COBR?: string | null
    DOM_LAB?: string | null
    ZONA?: number | null
    ALTA?: Date | string | null
    VIGENCIA?: Date | string | null
    GRUPO?: number | null
    SEXO?: string | null
    ADHERENTES?: number | null
    OPERADOR?: number | null
    OBRA_SOC?: number | null
    PRODUCTOR?: number | null
    PLAN?: string | null
    SUB_PLAN?: string | null
    EMPRESA?: string | null
    EDAD?: number | null
    COD_POST?: number | null
    TELEFONO?: string | null
    MOVIL?: string | null
    EDAD_PROM?: number | null
    MAIL?: string | null
    idbaja?: number
    BAJA?: Date | string | null
  }

  export type bajasUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    DOMI_COBR?: NullableStringFieldUpdateOperationsInput | string | null
    DOM_LAB?: NullableStringFieldUpdateOperationsInput | string | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    ADHERENTES?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableIntFieldUpdateOperationsInput | number | null
    OBRA_SOC?: NullableIntFieldUpdateOperationsInput | number | null
    PRODUCTOR?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    SUB_PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    COD_POST?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD_PROM?: NullableFloatFieldUpdateOperationsInput | number | null
    MAIL?: NullableStringFieldUpdateOperationsInput | string | null
    BAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type bajasUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CONTRATO?: IntFieldUpdateOperationsInput | number
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    APELLIDOS?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRES?: NullableStringFieldUpdateOperationsInput | string | null
    NACIMIENTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CALLE?: NullableStringFieldUpdateOperationsInput | string | null
    LOCALIDAD?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CALLE?: NullableIntFieldUpdateOperationsInput | number | null
    BARRIO?: NullableStringFieldUpdateOperationsInput | string | null
    DOMI_COBR?: NullableStringFieldUpdateOperationsInput | string | null
    DOM_LAB?: NullableStringFieldUpdateOperationsInput | string | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    ALTA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VIGENCIA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    GRUPO?: NullableIntFieldUpdateOperationsInput | number | null
    SEXO?: NullableStringFieldUpdateOperationsInput | string | null
    ADHERENTES?: NullableIntFieldUpdateOperationsInput | number | null
    OPERADOR?: NullableIntFieldUpdateOperationsInput | number | null
    OBRA_SOC?: NullableIntFieldUpdateOperationsInput | number | null
    PRODUCTOR?: NullableIntFieldUpdateOperationsInput | number | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    SUB_PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableIntFieldUpdateOperationsInput | number | null
    COD_POST?: NullableIntFieldUpdateOperationsInput | number | null
    TELEFONO?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIL?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD_PROM?: NullableFloatFieldUpdateOperationsInput | number | null
    MAIL?: NullableStringFieldUpdateOperationsInput | string | null
    idbaja?: IntFieldUpdateOperationsInput | number
    BAJA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gestioncasoCreateInput = {
    idcaso?: number | null
    contrato?: number | null
    operador?: string | null
    accion?: string | null
    observacion?: string | null
    fechaaccion?: string | null
    nuevaaccion?: string | null
    fechanuevaaccion?: string | null
    realizado?: boolean | null
    observacion_nuevaaccion?: string | null
  }

  export type gestioncasoUncheckedCreateInput = {
    idgestion?: number
    idcaso?: number | null
    contrato?: number | null
    operador?: string | null
    accion?: string | null
    observacion?: string | null
    fechaaccion?: string | null
    nuevaaccion?: string | null
    fechanuevaaccion?: string | null
    realizado?: boolean | null
    observacion_nuevaaccion?: string | null
  }

  export type gestioncasoUpdateInput = {
    idcaso?: NullableIntFieldUpdateOperationsInput | number | null
    contrato?: NullableIntFieldUpdateOperationsInput | number | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    accion?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaaccion?: NullableStringFieldUpdateOperationsInput | string | null
    nuevaaccion?: NullableStringFieldUpdateOperationsInput | string | null
    fechanuevaaccion?: NullableStringFieldUpdateOperationsInput | string | null
    realizado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observacion_nuevaaccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gestioncasoUncheckedUpdateInput = {
    idgestion?: IntFieldUpdateOperationsInput | number
    idcaso?: NullableIntFieldUpdateOperationsInput | number | null
    contrato?: NullableIntFieldUpdateOperationsInput | number | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    accion?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaaccion?: NullableStringFieldUpdateOperationsInput | string | null
    nuevaaccion?: NullableStringFieldUpdateOperationsInput | string | null
    fechanuevaaccion?: NullableStringFieldUpdateOperationsInput | string | null
    realizado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observacion_nuevaaccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gestioncasoCreateManyInput = {
    idgestion?: number
    idcaso?: number | null
    contrato?: number | null
    operador?: string | null
    accion?: string | null
    observacion?: string | null
    fechaaccion?: string | null
    nuevaaccion?: string | null
    fechanuevaaccion?: string | null
    realizado?: boolean | null
    observacion_nuevaaccion?: string | null
  }

  export type gestioncasoUpdateManyMutationInput = {
    idcaso?: NullableIntFieldUpdateOperationsInput | number | null
    contrato?: NullableIntFieldUpdateOperationsInput | number | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    accion?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaaccion?: NullableStringFieldUpdateOperationsInput | string | null
    nuevaaccion?: NullableStringFieldUpdateOperationsInput | string | null
    fechanuevaaccion?: NullableStringFieldUpdateOperationsInput | string | null
    realizado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observacion_nuevaaccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gestioncasoUncheckedUpdateManyInput = {
    idgestion?: IntFieldUpdateOperationsInput | number
    idcaso?: NullableIntFieldUpdateOperationsInput | number | null
    contrato?: NullableIntFieldUpdateOperationsInput | number | null
    operador?: NullableStringFieldUpdateOperationsInput | string | null
    accion?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    fechaaccion?: NullableStringFieldUpdateOperationsInput | string | null
    nuevaaccion?: NullableStringFieldUpdateOperationsInput | string | null
    fechanuevaaccion?: NullableStringFieldUpdateOperationsInput | string | null
    realizado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    observacion_nuevaaccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pagosCreateInput = {
    CONTRATO?: number | null
    NRO_RECIBO?: number | null
    SERIE?: number | null
    DIA_REN?: Date | string | null
    DIA_CAR?: Date | string | null
    DIA_EMI?: Date | string | null
    DIA_PAG?: Date | string | null
    HORA_CAR?: string | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    MAN_COM?: string | null
    MOVIM?: string | null
    OPERADOR?: string | null
    SUCURSAL?: string | null
    PUESTO?: number | null
    ZONA?: number | null
    EMPRESA?: string | null
    DNI?: number | null
    RENDIDO?: number | null
    FECHA_CAJA?: string | null
    MED_PAG?: string | null
  }

  export type pagosUncheckedCreateInput = {
    CONTRATO?: number | null
    NRO_RECIBO?: number | null
    SERIE?: number | null
    DIA_REN?: Date | string | null
    DIA_CAR?: Date | string | null
    DIA_EMI?: Date | string | null
    DIA_PAG?: Date | string | null
    HORA_CAR?: string | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    MAN_COM?: string | null
    MOVIM?: string | null
    OPERADOR?: string | null
    SUCURSAL?: string | null
    PUESTO?: number | null
    ZONA?: number | null
    EMPRESA?: string | null
    DNI?: number | null
    RENDIDO?: number | null
    FECHA_CAJA?: string | null
    id?: number
    MED_PAG?: string | null
  }

  export type pagosUpdateInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_RECIBO?: NullableIntFieldUpdateOperationsInput | number | null
    SERIE?: NullableIntFieldUpdateOperationsInput | number | null
    DIA_REN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DIA_CAR?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DIA_EMI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DIA_PAG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA_CAR?: NullableStringFieldUpdateOperationsInput | string | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    MAN_COM?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableIntFieldUpdateOperationsInput | number | null
    RENDIDO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA_CAJA?: NullableStringFieldUpdateOperationsInput | string | null
    MED_PAG?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pagosUncheckedUpdateInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_RECIBO?: NullableIntFieldUpdateOperationsInput | number | null
    SERIE?: NullableIntFieldUpdateOperationsInput | number | null
    DIA_REN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DIA_CAR?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DIA_EMI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DIA_PAG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA_CAR?: NullableStringFieldUpdateOperationsInput | string | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    MAN_COM?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableIntFieldUpdateOperationsInput | number | null
    RENDIDO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA_CAJA?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    MED_PAG?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pagosCreateManyInput = {
    CONTRATO?: number | null
    NRO_RECIBO?: number | null
    SERIE?: number | null
    DIA_REN?: Date | string | null
    DIA_CAR?: Date | string | null
    DIA_EMI?: Date | string | null
    DIA_PAG?: Date | string | null
    HORA_CAR?: string | null
    MES?: number | null
    ANO?: number | null
    IMPORTE?: number | null
    MAN_COM?: string | null
    MOVIM?: string | null
    OPERADOR?: string | null
    SUCURSAL?: string | null
    PUESTO?: number | null
    ZONA?: number | null
    EMPRESA?: string | null
    DNI?: number | null
    RENDIDO?: number | null
    FECHA_CAJA?: string | null
    id?: number
    MED_PAG?: string | null
  }

  export type pagosUpdateManyMutationInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_RECIBO?: NullableIntFieldUpdateOperationsInput | number | null
    SERIE?: NullableIntFieldUpdateOperationsInput | number | null
    DIA_REN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DIA_CAR?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DIA_EMI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DIA_PAG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA_CAR?: NullableStringFieldUpdateOperationsInput | string | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    MAN_COM?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableIntFieldUpdateOperationsInput | number | null
    RENDIDO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA_CAJA?: NullableStringFieldUpdateOperationsInput | string | null
    MED_PAG?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pagosUncheckedUpdateManyInput = {
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    NRO_RECIBO?: NullableIntFieldUpdateOperationsInput | number | null
    SERIE?: NullableIntFieldUpdateOperationsInput | number | null
    DIA_REN?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DIA_CAR?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DIA_EMI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DIA_PAG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    HORA_CAR?: NullableStringFieldUpdateOperationsInput | string | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    MAN_COM?: NullableStringFieldUpdateOperationsInput | string | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableIntFieldUpdateOperationsInput | number | null
    ZONA?: NullableIntFieldUpdateOperationsInput | number | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    DNI?: NullableIntFieldUpdateOperationsInput | number | null
    RENDIDO?: NullableIntFieldUpdateOperationsInput | number | null
    FECHA_CAJA?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    MED_PAG?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pago_bcoCreateInput = {
    NRO_DOC?: number | null
    CONTRATO?: number | null
    COD_SUC?: string | null
    NRO_CTA?: string | null
    FEC_ACR?: string | null
    IMPORTE?: number | null
    MARCA?: string | null
    MES?: number | null
    ANO?: number | null
    DIA_PAGO?: Date | string | null
    SUCURSAL?: string | null
    SEGURO?: number | null
  }

  export type pago_bcoUncheckedCreateInput = {
    NRO_DOC?: number | null
    CONTRATO?: number | null
    COD_SUC?: string | null
    NRO_CTA?: string | null
    FEC_ACR?: string | null
    IMPORTE?: number | null
    MARCA?: string | null
    MES?: number | null
    ANO?: number | null
    DIA_PAGO?: Date | string | null
    SUCURSAL?: string | null
    SEGURO?: number | null
    id?: number
  }

  export type pago_bcoUpdateInput = {
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_SUC?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CTA?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_ACR?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    MARCA?: NullableStringFieldUpdateOperationsInput | string | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    DIA_PAGO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    SEGURO?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type pago_bcoUncheckedUpdateInput = {
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_SUC?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CTA?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_ACR?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    MARCA?: NullableStringFieldUpdateOperationsInput | string | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    DIA_PAGO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    SEGURO?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type pago_bcoCreateManyInput = {
    NRO_DOC?: number | null
    CONTRATO?: number | null
    COD_SUC?: string | null
    NRO_CTA?: string | null
    FEC_ACR?: string | null
    IMPORTE?: number | null
    MARCA?: string | null
    MES?: number | null
    ANO?: number | null
    DIA_PAGO?: Date | string | null
    SUCURSAL?: string | null
    SEGURO?: number | null
    id?: number
  }

  export type pago_bcoUpdateManyMutationInput = {
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_SUC?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CTA?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_ACR?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    MARCA?: NullableStringFieldUpdateOperationsInput | string | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    DIA_PAGO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    SEGURO?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type pago_bcoUncheckedUpdateManyInput = {
    NRO_DOC?: NullableIntFieldUpdateOperationsInput | number | null
    CONTRATO?: NullableIntFieldUpdateOperationsInput | number | null
    COD_SUC?: NullableStringFieldUpdateOperationsInput | string | null
    NRO_CTA?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_ACR?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    MARCA?: NullableStringFieldUpdateOperationsInput | string | null
    MES?: NullableIntFieldUpdateOperationsInput | number | null
    ANO?: NullableIntFieldUpdateOperationsInput | number | null
    DIA_PAGO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    SEGURO?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type cajaCreateInput = {
    SUCURSAL?: string | null
    PUESTO?: number | null
    CODIGO?: number | null
    MOVIM?: string | null
    CUENTA?: string | null
    CUENTA_DESC?: string | null
    IMPORTE?: number | null
    TIPO?: string | null
    SERIE?: number | null
    NUMERO?: number | null
    CUIT?: string | null
    DETALLE?: string | null
    FECHA?: string | null
    FEC_COMP?: string | null
    HORA?: string | null
    OPERADOR?: string | null
  }

  export type cajaUncheckedCreateInput = {
    SUCURSAL?: string | null
    PUESTO?: number | null
    CODIGO?: number | null
    MOVIM?: string | null
    CUENTA?: string | null
    CUENTA_DESC?: string | null
    IMPORTE?: number | null
    TIPO?: string | null
    SERIE?: number | null
    NUMERO?: number | null
    CUIT?: string | null
    DETALLE?: string | null
    FECHA?: string | null
    FEC_COMP?: string | null
    HORA?: string | null
    OPERADOR?: string | null
    idmovim?: number
  }

  export type cajaUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableIntFieldUpdateOperationsInput | number | null
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    CUENTA?: NullableStringFieldUpdateOperationsInput | string | null
    CUENTA_DESC?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    TIPO?: NullableStringFieldUpdateOperationsInput | string | null
    SERIE?: NullableIntFieldUpdateOperationsInput | number | null
    NUMERO?: NullableIntFieldUpdateOperationsInput | number | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_COMP?: NullableStringFieldUpdateOperationsInput | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cajaUncheckedUpdateInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableIntFieldUpdateOperationsInput | number | null
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    CUENTA?: NullableStringFieldUpdateOperationsInput | string | null
    CUENTA_DESC?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    TIPO?: NullableStringFieldUpdateOperationsInput | string | null
    SERIE?: NullableIntFieldUpdateOperationsInput | number | null
    NUMERO?: NullableIntFieldUpdateOperationsInput | number | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_COMP?: NullableStringFieldUpdateOperationsInput | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    idmovim?: IntFieldUpdateOperationsInput | number
  }

  export type cajaCreateManyInput = {
    SUCURSAL?: string | null
    PUESTO?: number | null
    CODIGO?: number | null
    MOVIM?: string | null
    CUENTA?: string | null
    CUENTA_DESC?: string | null
    IMPORTE?: number | null
    TIPO?: string | null
    SERIE?: number | null
    NUMERO?: number | null
    CUIT?: string | null
    DETALLE?: string | null
    FECHA?: string | null
    FEC_COMP?: string | null
    HORA?: string | null
    OPERADOR?: string | null
    idmovim?: number
  }

  export type cajaUpdateManyMutationInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableIntFieldUpdateOperationsInput | number | null
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    CUENTA?: NullableStringFieldUpdateOperationsInput | string | null
    CUENTA_DESC?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    TIPO?: NullableStringFieldUpdateOperationsInput | string | null
    SERIE?: NullableIntFieldUpdateOperationsInput | number | null
    NUMERO?: NullableIntFieldUpdateOperationsInput | number | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_COMP?: NullableStringFieldUpdateOperationsInput | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cajaUncheckedUpdateManyInput = {
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    PUESTO?: NullableIntFieldUpdateOperationsInput | number | null
    CODIGO?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    CUENTA?: NullableStringFieldUpdateOperationsInput | string | null
    CUENTA_DESC?: NullableStringFieldUpdateOperationsInput | string | null
    IMPORTE?: NullableFloatFieldUpdateOperationsInput | number | null
    TIPO?: NullableStringFieldUpdateOperationsInput | string | null
    SERIE?: NullableIntFieldUpdateOperationsInput | number | null
    NUMERO?: NullableIntFieldUpdateOperationsInput | number | null
    CUIT?: NullableStringFieldUpdateOperationsInput | string | null
    DETALLE?: NullableStringFieldUpdateOperationsInput | string | null
    FECHA?: NullableStringFieldUpdateOperationsInput | string | null
    FEC_COMP?: NullableStringFieldUpdateOperationsInput | string | null
    HORA?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADOR?: NullableStringFieldUpdateOperationsInput | string | null
    idmovim?: IntFieldUpdateOperationsInput | number
  }

  export type subctaCreateInput = {
    CODI?: number | null
    DESC?: string | null
    CUEN?: number | null
    MOVIM?: string | null
  }

  export type subctaUncheckedCreateInput = {
    CODI?: number | null
    DESC?: string | null
    CUEN?: number | null
    MOVIM?: string | null
    id?: number
  }

  export type subctaUpdateInput = {
    CODI?: NullableIntFieldUpdateOperationsInput | number | null
    DESC?: NullableStringFieldUpdateOperationsInput | string | null
    CUEN?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subctaUncheckedUpdateInput = {
    CODI?: NullableIntFieldUpdateOperationsInput | number | null
    DESC?: NullableStringFieldUpdateOperationsInput | string | null
    CUEN?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type subctaCreateManyInput = {
    CODI?: number | null
    DESC?: string | null
    CUEN?: number | null
    MOVIM?: string | null
    id?: number
  }

  export type subctaUpdateManyMutationInput = {
    CODI?: NullableIntFieldUpdateOperationsInput | number | null
    DESC?: NullableStringFieldUpdateOperationsInput | string | null
    CUEN?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subctaUncheckedUpdateManyInput = {
    CODI?: NullableIntFieldUpdateOperationsInput | number | null
    DESC?: NullableStringFieldUpdateOperationsInput | string | null
    CUEN?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type maestro_cuentasCreateInput = {
    contrato?: number | null
    dni?: number | null
    grupo?: number | null
    cuenta?: string | null
    observacion?: string | null
  }

  export type maestro_cuentasUncheckedCreateInput = {
    idcuenta?: number
    contrato?: number | null
    dni?: number | null
    grupo?: number | null
    cuenta?: string | null
    observacion?: string | null
  }

  export type maestro_cuentasUpdateInput = {
    contrato?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    grupo?: NullableIntFieldUpdateOperationsInput | number | null
    cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type maestro_cuentasUncheckedUpdateInput = {
    idcuenta?: IntFieldUpdateOperationsInput | number
    contrato?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    grupo?: NullableIntFieldUpdateOperationsInput | number | null
    cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type maestro_cuentasCreateManyInput = {
    idcuenta?: number
    contrato?: number | null
    dni?: number | null
    grupo?: number | null
    cuenta?: string | null
    observacion?: string | null
  }

  export type maestro_cuentasUpdateManyMutationInput = {
    contrato?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    grupo?: NullableIntFieldUpdateOperationsInput | number | null
    cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type maestro_cuentasUncheckedUpdateManyInput = {
    idcuenta?: IntFieldUpdateOperationsInput | number
    contrato?: NullableIntFieldUpdateOperationsInput | number | null
    dni?: NullableIntFieldUpdateOperationsInput | number | null
    grupo?: NullableIntFieldUpdateOperationsInput | number | null
    cuenta?: NullableStringFieldUpdateOperationsInput | string | null
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type operadorCreateInput = {
    nombre: string
    apellido: string
    usuario: string
    contrasena: string
    createdAt: Date | string
    updatedAt: Date | string
    perfil?: number | null
    estado?: boolean | null
    codigo?: number | null
    medicos?: boolean | null
    sucursal?: string | null
    prestamos?: boolean | null
    ordenpago?: boolean | null
    clubwerchow?: boolean | null
    ventas?: boolean | null
    administracion?: boolean | null
    campanas?: boolean | null
    socios?: boolean | null
    sepelio?: boolean | null
    gestion?: boolean | null
    contabilidad?: boolean | null
    cobranza?: boolean | null
  }

  export type operadorUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    usuario: string
    contrasena: string
    createdAt: Date | string
    updatedAt: Date | string
    perfil?: number | null
    estado?: boolean | null
    codigo?: number | null
    medicos?: boolean | null
    sucursal?: string | null
    prestamos?: boolean | null
    ordenpago?: boolean | null
    clubwerchow?: boolean | null
    ventas?: boolean | null
    administracion?: boolean | null
    campanas?: boolean | null
    socios?: boolean | null
    sepelio?: boolean | null
    gestion?: boolean | null
    contabilidad?: boolean | null
    cobranza?: boolean | null
  }

  export type operadorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    medicos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    prestamos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ordenpago?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clubwerchow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ventas?: NullableBoolFieldUpdateOperationsInput | boolean | null
    administracion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campanas?: NullableBoolFieldUpdateOperationsInput | boolean | null
    socios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sepelio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gestion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contabilidad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cobranza?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type operadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    medicos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    prestamos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ordenpago?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clubwerchow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ventas?: NullableBoolFieldUpdateOperationsInput | boolean | null
    administracion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campanas?: NullableBoolFieldUpdateOperationsInput | boolean | null
    socios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sepelio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gestion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contabilidad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cobranza?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type operadorCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    usuario: string
    contrasena: string
    createdAt: Date | string
    updatedAt: Date | string
    perfil?: number | null
    estado?: boolean | null
    codigo?: number | null
    medicos?: boolean | null
    sucursal?: string | null
    prestamos?: boolean | null
    ordenpago?: boolean | null
    clubwerchow?: boolean | null
    ventas?: boolean | null
    administracion?: boolean | null
    campanas?: boolean | null
    socios?: boolean | null
    sepelio?: boolean | null
    gestion?: boolean | null
    contabilidad?: boolean | null
    cobranza?: boolean | null
  }

  export type operadorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    medicos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    prestamos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ordenpago?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clubwerchow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ventas?: NullableBoolFieldUpdateOperationsInput | boolean | null
    administracion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campanas?: NullableBoolFieldUpdateOperationsInput | boolean | null
    socios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sepelio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gestion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contabilidad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cobranza?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type operadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    medicos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sucursal?: NullableStringFieldUpdateOperationsInput | string | null
    prestamos?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ordenpago?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clubwerchow?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ventas?: NullableBoolFieldUpdateOperationsInput | boolean | null
    administracion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    campanas?: NullableBoolFieldUpdateOperationsInput | boolean | null
    socios?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sepelio?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gestion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contabilidad?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cobranza?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type subcta_oldCreateInput = {
    CODI?: number | null
    DESC?: string | null
    CUEN?: number | null
    MOVIM?: string | null
  }

  export type subcta_oldUncheckedCreateInput = {
    CODI?: number | null
    DESC?: string | null
    CUEN?: number | null
    MOVIM?: string | null
    id?: number
  }

  export type subcta_oldUpdateInput = {
    CODI?: NullableIntFieldUpdateOperationsInput | number | null
    DESC?: NullableStringFieldUpdateOperationsInput | string | null
    CUEN?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subcta_oldUncheckedUpdateInput = {
    CODI?: NullableIntFieldUpdateOperationsInput | number | null
    DESC?: NullableStringFieldUpdateOperationsInput | string | null
    CUEN?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type subcta_oldCreateManyInput = {
    CODI?: number | null
    DESC?: string | null
    CUEN?: number | null
    MOVIM?: string | null
    id?: number
  }

  export type subcta_oldUpdateManyMutationInput = {
    CODI?: NullableIntFieldUpdateOperationsInput | number | null
    DESC?: NullableStringFieldUpdateOperationsInput | string | null
    CUEN?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type subcta_oldUncheckedUpdateManyInput = {
    CODI?: NullableIntFieldUpdateOperationsInput | number | null
    DESC?: NullableStringFieldUpdateOperationsInput | string | null
    CUEN?: NullableIntFieldUpdateOperationsInput | number | null
    MOVIM?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type soCreateInput = {
    CONTRATO?: string | null
    SOCIO?: string | null
    ALTA?: string | null
    GRUPO?: string | null
    ADHERENTES?: string | null
    PLAN?: string | null
    ZONA?: string | null
    EDAD?: string | null
    CUOTA?: string | null
    EMPRESA?: string | null
    SUCURSAL?: string | null
    CUOTAS?: string | null
    PAGOS?: string | null
    DEUDA?: string | null
  }

  export type soUncheckedCreateInput = {
    CONTRATO?: string | null
    SOCIO?: string | null
    ALTA?: string | null
    GRUPO?: string | null
    ADHERENTES?: string | null
    PLAN?: string | null
    ZONA?: string | null
    EDAD?: string | null
    CUOTA?: string | null
    EMPRESA?: string | null
    SUCURSAL?: string | null
    CUOTAS?: string | null
    PAGOS?: string | null
    DEUDA?: string | null
    id?: number
  }

  export type soUpdateInput = {
    CONTRATO?: NullableStringFieldUpdateOperationsInput | string | null
    SOCIO?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableStringFieldUpdateOperationsInput | string | null
    ADHERENTES?: NullableStringFieldUpdateOperationsInput | string | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    ZONA?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableStringFieldUpdateOperationsInput | string | null
    CUOTA?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CUOTAS?: NullableStringFieldUpdateOperationsInput | string | null
    PAGOS?: NullableStringFieldUpdateOperationsInput | string | null
    DEUDA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type soUncheckedUpdateInput = {
    CONTRATO?: NullableStringFieldUpdateOperationsInput | string | null
    SOCIO?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableStringFieldUpdateOperationsInput | string | null
    ADHERENTES?: NullableStringFieldUpdateOperationsInput | string | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    ZONA?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableStringFieldUpdateOperationsInput | string | null
    CUOTA?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CUOTAS?: NullableStringFieldUpdateOperationsInput | string | null
    PAGOS?: NullableStringFieldUpdateOperationsInput | string | null
    DEUDA?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type soCreateManyInput = {
    CONTRATO?: string | null
    SOCIO?: string | null
    ALTA?: string | null
    GRUPO?: string | null
    ADHERENTES?: string | null
    PLAN?: string | null
    ZONA?: string | null
    EDAD?: string | null
    CUOTA?: string | null
    EMPRESA?: string | null
    SUCURSAL?: string | null
    CUOTAS?: string | null
    PAGOS?: string | null
    DEUDA?: string | null
    id?: number
  }

  export type soUpdateManyMutationInput = {
    CONTRATO?: NullableStringFieldUpdateOperationsInput | string | null
    SOCIO?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableStringFieldUpdateOperationsInput | string | null
    ADHERENTES?: NullableStringFieldUpdateOperationsInput | string | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    ZONA?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableStringFieldUpdateOperationsInput | string | null
    CUOTA?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CUOTAS?: NullableStringFieldUpdateOperationsInput | string | null
    PAGOS?: NullableStringFieldUpdateOperationsInput | string | null
    DEUDA?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type soUncheckedUpdateManyInput = {
    CONTRATO?: NullableStringFieldUpdateOperationsInput | string | null
    SOCIO?: NullableStringFieldUpdateOperationsInput | string | null
    ALTA?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: NullableStringFieldUpdateOperationsInput | string | null
    ADHERENTES?: NullableStringFieldUpdateOperationsInput | string | null
    PLAN?: NullableStringFieldUpdateOperationsInput | string | null
    ZONA?: NullableStringFieldUpdateOperationsInput | string | null
    EDAD?: NullableStringFieldUpdateOperationsInput | string | null
    CUOTA?: NullableStringFieldUpdateOperationsInput | string | null
    EMPRESA?: NullableStringFieldUpdateOperationsInput | string | null
    SUCURSAL?: NullableStringFieldUpdateOperationsInput | string | null
    CUOTAS?: NullableStringFieldUpdateOperationsInput | string | null
    PAGOS?: NullableStringFieldUpdateOperationsInput | string | null
    DEUDA?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adherentCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    NACIMIENTO?: SortOrder
    SEXO?: SortOrder
    ALTA?: SortOrder
    BAJA?: SortOrder
    VIGENCIA?: SortOrder
    PARENT?: SortOrder
    OBRA_SOC?: SortOrder
    SEGURO?: SortOrder
    PRODUCTOR?: SortOrder
    PLAN?: SortOrder
    ORDEN?: SortOrder
    EDAD?: SortOrder
    ESTADO?: SortOrder
    idadherent?: SortOrder
  }

  export type adherentAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    PARENT?: SortOrder
    OBRA_SOC?: SortOrder
    SEGURO?: SortOrder
    PRODUCTOR?: SortOrder
    ORDEN?: SortOrder
    EDAD?: SortOrder
    idadherent?: SortOrder
  }

  export type adherentMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    NACIMIENTO?: SortOrder
    SEXO?: SortOrder
    ALTA?: SortOrder
    BAJA?: SortOrder
    VIGENCIA?: SortOrder
    PARENT?: SortOrder
    OBRA_SOC?: SortOrder
    SEGURO?: SortOrder
    PRODUCTOR?: SortOrder
    PLAN?: SortOrder
    ORDEN?: SortOrder
    EDAD?: SortOrder
    ESTADO?: SortOrder
    idadherent?: SortOrder
  }

  export type adherentMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    NACIMIENTO?: SortOrder
    SEXO?: SortOrder
    ALTA?: SortOrder
    BAJA?: SortOrder
    VIGENCIA?: SortOrder
    PARENT?: SortOrder
    OBRA_SOC?: SortOrder
    SEGURO?: SortOrder
    PRODUCTOR?: SortOrder
    PLAN?: SortOrder
    ORDEN?: SortOrder
    EDAD?: SortOrder
    ESTADO?: SortOrder
    idadherent?: SortOrder
  }

  export type adherentSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    PARENT?: SortOrder
    OBRA_SOC?: SortOrder
    SEGURO?: SortOrder
    PRODUCTOR?: SortOrder
    ORDEN?: SortOrder
    EDAD?: SortOrder
    idadherent?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type cuo_fijaCountOrderByAggregateInput = {
    CONTRATO?: SortOrder
    IMPORTE?: SortOrder
    CUO_ANT?: SortOrder
    DESDE?: SortOrder
    VENCIM?: SortOrder
    OPERADOR?: SortOrder
    idcuota?: SortOrder
  }

  export type cuo_fijaAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    IMPORTE?: SortOrder
    CUO_ANT?: SortOrder
    idcuota?: SortOrder
  }

  export type cuo_fijaMaxOrderByAggregateInput = {
    CONTRATO?: SortOrder
    IMPORTE?: SortOrder
    CUO_ANT?: SortOrder
    DESDE?: SortOrder
    VENCIM?: SortOrder
    OPERADOR?: SortOrder
    idcuota?: SortOrder
  }

  export type cuo_fijaMinOrderByAggregateInput = {
    CONTRATO?: SortOrder
    IMPORTE?: SortOrder
    CUO_ANT?: SortOrder
    DESDE?: SortOrder
    VENCIM?: SortOrder
    OPERADOR?: SortOrder
    idcuota?: SortOrder
  }

  export type cuo_fijaSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    IMPORTE?: SortOrder
    CUO_ANT?: SortOrder
    idcuota?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type gruposCountOrderByAggregateInput = {
    CODIGO?: SortOrder
    DESCRIP?: SortOrder
    IVA?: SortOrder
    CUIT?: SortOrder
    DOMICILIO?: SortOrder
    ORDEN?: SortOrder
    LIN_ALTA?: SortOrder
    LIN_BAJA?: SortOrder
    TOTALIZA?: SortOrder
    PAGINA?: SortOrder
    TITULO1?: SortOrder
    TITULO2?: SortOrder
    DIA?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    SUCURSAL?: SortOrder
    MARCA?: SortOrder
    CONVENIO?: SortOrder
    id?: SortOrder
  }

  export type gruposAvgOrderByAggregateInput = {
    CODIGO?: SortOrder
    TOTALIZA?: SortOrder
    PAGINA?: SortOrder
    DIA?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    id?: SortOrder
  }

  export type gruposMaxOrderByAggregateInput = {
    CODIGO?: SortOrder
    DESCRIP?: SortOrder
    IVA?: SortOrder
    CUIT?: SortOrder
    DOMICILIO?: SortOrder
    ORDEN?: SortOrder
    LIN_ALTA?: SortOrder
    LIN_BAJA?: SortOrder
    TOTALIZA?: SortOrder
    PAGINA?: SortOrder
    TITULO1?: SortOrder
    TITULO2?: SortOrder
    DIA?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    SUCURSAL?: SortOrder
    MARCA?: SortOrder
    CONVENIO?: SortOrder
    id?: SortOrder
  }

  export type gruposMinOrderByAggregateInput = {
    CODIGO?: SortOrder
    DESCRIP?: SortOrder
    IVA?: SortOrder
    CUIT?: SortOrder
    DOMICILIO?: SortOrder
    ORDEN?: SortOrder
    LIN_ALTA?: SortOrder
    LIN_BAJA?: SortOrder
    TOTALIZA?: SortOrder
    PAGINA?: SortOrder
    TITULO1?: SortOrder
    TITULO2?: SortOrder
    DIA?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    SUCURSAL?: SortOrder
    MARCA?: SortOrder
    CONVENIO?: SortOrder
    id?: SortOrder
  }

  export type gruposSumOrderByAggregateInput = {
    CODIGO?: SortOrder
    TOTALIZA?: SortOrder
    PAGINA?: SortOrder
    DIA?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    id?: SortOrder
  }

  export type historiaCountOrderByAggregateInput = {
    CONTRATO?: SortOrder
    OPERADOR?: SortOrder
    ACCION?: SortOrder
    idhistoria?: SortOrder
    FECHA?: SortOrder
  }

  export type historiaAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    idhistoria?: SortOrder
  }

  export type historiaMaxOrderByAggregateInput = {
    CONTRATO?: SortOrder
    OPERADOR?: SortOrder
    ACCION?: SortOrder
    idhistoria?: SortOrder
    FECHA?: SortOrder
  }

  export type historiaMinOrderByAggregateInput = {
    CONTRATO?: SortOrder
    OPERADOR?: SortOrder
    ACCION?: SortOrder
    idhistoria?: SortOrder
    FECHA?: SortOrder
  }

  export type historiaSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    idhistoria?: SortOrder
  }

  export type localidadCountOrderByAggregateInput = {
    CODIGO?: SortOrder
    DETALLE?: SortOrder
    idlocalidad?: SortOrder
  }

  export type localidadAvgOrderByAggregateInput = {
    CODIGO?: SortOrder
    idlocalidad?: SortOrder
  }

  export type localidadMaxOrderByAggregateInput = {
    CODIGO?: SortOrder
    DETALLE?: SortOrder
    idlocalidad?: SortOrder
  }

  export type localidadMinOrderByAggregateInput = {
    CODIGO?: SortOrder
    DETALLE?: SortOrder
    idlocalidad?: SortOrder
  }

  export type localidadSumOrderByAggregateInput = {
    CODIGO?: SortOrder
    idlocalidad?: SortOrder
  }

  export type maestroCountOrderByAggregateInput = {
    idmaestro?: SortOrder
    ESTADO?: SortOrder
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    NACIMIENTO?: SortOrder
    CALLE?: SortOrder
    LOCALIDAD?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    DOMI_COBR?: SortOrder
    DOM_LAB?: SortOrder
    ZONA?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    GRUPO?: SortOrder
    SEXO?: SortOrder
    ADHERENTES?: SortOrder
    OPERADOR?: SortOrder
    OBRA_SOC?: SortOrder
    PRODUCTOR?: SortOrder
    PLAN?: SortOrder
    EMPRESA?: SortOrder
    EDAD?: SortOrder
    COD_POST?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD_PROM?: SortOrder
    MAIL?: SortOrder
  }

  export type maestroAvgOrderByAggregateInput = {
    idmaestro?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    ZONA?: SortOrder
    GRUPO?: SortOrder
    ADHERENTES?: SortOrder
    OBRA_SOC?: SortOrder
    PRODUCTOR?: SortOrder
    EDAD?: SortOrder
    COD_POST?: SortOrder
    EDAD_PROM?: SortOrder
  }

  export type maestroMaxOrderByAggregateInput = {
    idmaestro?: SortOrder
    ESTADO?: SortOrder
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    NACIMIENTO?: SortOrder
    CALLE?: SortOrder
    LOCALIDAD?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    DOMI_COBR?: SortOrder
    DOM_LAB?: SortOrder
    ZONA?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    GRUPO?: SortOrder
    SEXO?: SortOrder
    ADHERENTES?: SortOrder
    OPERADOR?: SortOrder
    OBRA_SOC?: SortOrder
    PRODUCTOR?: SortOrder
    PLAN?: SortOrder
    EMPRESA?: SortOrder
    EDAD?: SortOrder
    COD_POST?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD_PROM?: SortOrder
    MAIL?: SortOrder
  }

  export type maestroMinOrderByAggregateInput = {
    idmaestro?: SortOrder
    ESTADO?: SortOrder
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    NACIMIENTO?: SortOrder
    CALLE?: SortOrder
    LOCALIDAD?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    DOMI_COBR?: SortOrder
    DOM_LAB?: SortOrder
    ZONA?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    GRUPO?: SortOrder
    SEXO?: SortOrder
    ADHERENTES?: SortOrder
    OPERADOR?: SortOrder
    OBRA_SOC?: SortOrder
    PRODUCTOR?: SortOrder
    PLAN?: SortOrder
    EMPRESA?: SortOrder
    EDAD?: SortOrder
    COD_POST?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD_PROM?: SortOrder
    MAIL?: SortOrder
  }

  export type maestroSumOrderByAggregateInput = {
    idmaestro?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    ZONA?: SortOrder
    GRUPO?: SortOrder
    ADHERENTES?: SortOrder
    OBRA_SOC?: SortOrder
    PRODUCTOR?: SortOrder
    EDAD?: SortOrder
    COD_POST?: SortOrder
    EDAD_PROM?: SortOrder
  }

  export type obra_socCountOrderByAggregateInput = {
    CODIGO?: SortOrder
    NOMBRE?: SortOrder
    DETALLE?: SortOrder
    DOMICILIO?: SortOrder
    FECHA_SUSP?: SortOrder
    OPERADOR?: SortOrder
    ACTUALIZA?: SortOrder
    SUSPENDIDO?: SortOrder
    id?: SortOrder
  }

  export type obra_socAvgOrderByAggregateInput = {
    CODIGO?: SortOrder
    OPERADOR?: SortOrder
    SUSPENDIDO?: SortOrder
    id?: SortOrder
  }

  export type obra_socMaxOrderByAggregateInput = {
    CODIGO?: SortOrder
    NOMBRE?: SortOrder
    DETALLE?: SortOrder
    DOMICILIO?: SortOrder
    FECHA_SUSP?: SortOrder
    OPERADOR?: SortOrder
    ACTUALIZA?: SortOrder
    SUSPENDIDO?: SortOrder
    id?: SortOrder
  }

  export type obra_socMinOrderByAggregateInput = {
    CODIGO?: SortOrder
    NOMBRE?: SortOrder
    DETALLE?: SortOrder
    DOMICILIO?: SortOrder
    FECHA_SUSP?: SortOrder
    OPERADOR?: SortOrder
    ACTUALIZA?: SortOrder
    SUSPENDIDO?: SortOrder
    id?: SortOrder
  }

  export type obra_socSumOrderByAggregateInput = {
    CODIGO?: SortOrder
    OPERADOR?: SortOrder
    SUSPENDIDO?: SortOrder
    id?: SortOrder
  }

  export type bajasCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    NACIMIENTO?: SortOrder
    CALLE?: SortOrder
    LOCALIDAD?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    DOMI_COBR?: SortOrder
    DOM_LAB?: SortOrder
    ZONA?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    GRUPO?: SortOrder
    SEXO?: SortOrder
    ADHERENTES?: SortOrder
    OPERADOR?: SortOrder
    OBRA_SOC?: SortOrder
    PRODUCTOR?: SortOrder
    PLAN?: SortOrder
    SUB_PLAN?: SortOrder
    EMPRESA?: SortOrder
    EDAD?: SortOrder
    COD_POST?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD_PROM?: SortOrder
    MAIL?: SortOrder
    idbaja?: SortOrder
    BAJA?: SortOrder
  }

  export type bajasAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    ZONA?: SortOrder
    GRUPO?: SortOrder
    ADHERENTES?: SortOrder
    OPERADOR?: SortOrder
    OBRA_SOC?: SortOrder
    PRODUCTOR?: SortOrder
    EDAD?: SortOrder
    COD_POST?: SortOrder
    EDAD_PROM?: SortOrder
    idbaja?: SortOrder
  }

  export type bajasMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    NACIMIENTO?: SortOrder
    CALLE?: SortOrder
    LOCALIDAD?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    DOMI_COBR?: SortOrder
    DOM_LAB?: SortOrder
    ZONA?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    GRUPO?: SortOrder
    SEXO?: SortOrder
    ADHERENTES?: SortOrder
    OPERADOR?: SortOrder
    OBRA_SOC?: SortOrder
    PRODUCTOR?: SortOrder
    PLAN?: SortOrder
    SUB_PLAN?: SortOrder
    EMPRESA?: SortOrder
    EDAD?: SortOrder
    COD_POST?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD_PROM?: SortOrder
    MAIL?: SortOrder
    idbaja?: SortOrder
    BAJA?: SortOrder
  }

  export type bajasMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    APELLIDOS?: SortOrder
    NOMBRES?: SortOrder
    NACIMIENTO?: SortOrder
    CALLE?: SortOrder
    LOCALIDAD?: SortOrder
    NRO_CALLE?: SortOrder
    BARRIO?: SortOrder
    DOMI_COBR?: SortOrder
    DOM_LAB?: SortOrder
    ZONA?: SortOrder
    ALTA?: SortOrder
    VIGENCIA?: SortOrder
    GRUPO?: SortOrder
    SEXO?: SortOrder
    ADHERENTES?: SortOrder
    OPERADOR?: SortOrder
    OBRA_SOC?: SortOrder
    PRODUCTOR?: SortOrder
    PLAN?: SortOrder
    SUB_PLAN?: SortOrder
    EMPRESA?: SortOrder
    EDAD?: SortOrder
    COD_POST?: SortOrder
    TELEFONO?: SortOrder
    MOVIL?: SortOrder
    EDAD_PROM?: SortOrder
    MAIL?: SortOrder
    idbaja?: SortOrder
    BAJA?: SortOrder
  }

  export type bajasSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_DOC?: SortOrder
    NRO_CALLE?: SortOrder
    ZONA?: SortOrder
    GRUPO?: SortOrder
    ADHERENTES?: SortOrder
    OPERADOR?: SortOrder
    OBRA_SOC?: SortOrder
    PRODUCTOR?: SortOrder
    EDAD?: SortOrder
    COD_POST?: SortOrder
    EDAD_PROM?: SortOrder
    idbaja?: SortOrder
  }

  export type gestioncasoCountOrderByAggregateInput = {
    idgestion?: SortOrder
    idcaso?: SortOrder
    contrato?: SortOrder
    operador?: SortOrder
    accion?: SortOrder
    observacion?: SortOrder
    fechaaccion?: SortOrder
    nuevaaccion?: SortOrder
    fechanuevaaccion?: SortOrder
    realizado?: SortOrder
    observacion_nuevaaccion?: SortOrder
  }

  export type gestioncasoAvgOrderByAggregateInput = {
    idgestion?: SortOrder
    idcaso?: SortOrder
    contrato?: SortOrder
  }

  export type gestioncasoMaxOrderByAggregateInput = {
    idgestion?: SortOrder
    idcaso?: SortOrder
    contrato?: SortOrder
    operador?: SortOrder
    accion?: SortOrder
    observacion?: SortOrder
    fechaaccion?: SortOrder
    nuevaaccion?: SortOrder
    fechanuevaaccion?: SortOrder
    realizado?: SortOrder
    observacion_nuevaaccion?: SortOrder
  }

  export type gestioncasoMinOrderByAggregateInput = {
    idgestion?: SortOrder
    idcaso?: SortOrder
    contrato?: SortOrder
    operador?: SortOrder
    accion?: SortOrder
    observacion?: SortOrder
    fechaaccion?: SortOrder
    nuevaaccion?: SortOrder
    fechanuevaaccion?: SortOrder
    realizado?: SortOrder
    observacion_nuevaaccion?: SortOrder
  }

  export type gestioncasoSumOrderByAggregateInput = {
    idgestion?: SortOrder
    idcaso?: SortOrder
    contrato?: SortOrder
  }

  export type pagosCountOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_RECIBO?: SortOrder
    SERIE?: SortOrder
    DIA_REN?: SortOrder
    DIA_CAR?: SortOrder
    DIA_EMI?: SortOrder
    DIA_PAG?: SortOrder
    HORA_CAR?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    MAN_COM?: SortOrder
    MOVIM?: SortOrder
    OPERADOR?: SortOrder
    SUCURSAL?: SortOrder
    PUESTO?: SortOrder
    ZONA?: SortOrder
    EMPRESA?: SortOrder
    DNI?: SortOrder
    RENDIDO?: SortOrder
    FECHA_CAJA?: SortOrder
    id?: SortOrder
    MED_PAG?: SortOrder
  }

  export type pagosAvgOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_RECIBO?: SortOrder
    SERIE?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    PUESTO?: SortOrder
    ZONA?: SortOrder
    DNI?: SortOrder
    RENDIDO?: SortOrder
    id?: SortOrder
  }

  export type pagosMaxOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_RECIBO?: SortOrder
    SERIE?: SortOrder
    DIA_REN?: SortOrder
    DIA_CAR?: SortOrder
    DIA_EMI?: SortOrder
    DIA_PAG?: SortOrder
    HORA_CAR?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    MAN_COM?: SortOrder
    MOVIM?: SortOrder
    OPERADOR?: SortOrder
    SUCURSAL?: SortOrder
    PUESTO?: SortOrder
    ZONA?: SortOrder
    EMPRESA?: SortOrder
    DNI?: SortOrder
    RENDIDO?: SortOrder
    FECHA_CAJA?: SortOrder
    id?: SortOrder
    MED_PAG?: SortOrder
  }

  export type pagosMinOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_RECIBO?: SortOrder
    SERIE?: SortOrder
    DIA_REN?: SortOrder
    DIA_CAR?: SortOrder
    DIA_EMI?: SortOrder
    DIA_PAG?: SortOrder
    HORA_CAR?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    MAN_COM?: SortOrder
    MOVIM?: SortOrder
    OPERADOR?: SortOrder
    SUCURSAL?: SortOrder
    PUESTO?: SortOrder
    ZONA?: SortOrder
    EMPRESA?: SortOrder
    DNI?: SortOrder
    RENDIDO?: SortOrder
    FECHA_CAJA?: SortOrder
    id?: SortOrder
    MED_PAG?: SortOrder
  }

  export type pagosSumOrderByAggregateInput = {
    CONTRATO?: SortOrder
    NRO_RECIBO?: SortOrder
    SERIE?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    IMPORTE?: SortOrder
    PUESTO?: SortOrder
    ZONA?: SortOrder
    DNI?: SortOrder
    RENDIDO?: SortOrder
    id?: SortOrder
  }

  export type pago_bcoCountOrderByAggregateInput = {
    NRO_DOC?: SortOrder
    CONTRATO?: SortOrder
    COD_SUC?: SortOrder
    NRO_CTA?: SortOrder
    FEC_ACR?: SortOrder
    IMPORTE?: SortOrder
    MARCA?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    DIA_PAGO?: SortOrder
    SUCURSAL?: SortOrder
    SEGURO?: SortOrder
    id?: SortOrder
  }

  export type pago_bcoAvgOrderByAggregateInput = {
    NRO_DOC?: SortOrder
    CONTRATO?: SortOrder
    IMPORTE?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    SEGURO?: SortOrder
    id?: SortOrder
  }

  export type pago_bcoMaxOrderByAggregateInput = {
    NRO_DOC?: SortOrder
    CONTRATO?: SortOrder
    COD_SUC?: SortOrder
    NRO_CTA?: SortOrder
    FEC_ACR?: SortOrder
    IMPORTE?: SortOrder
    MARCA?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    DIA_PAGO?: SortOrder
    SUCURSAL?: SortOrder
    SEGURO?: SortOrder
    id?: SortOrder
  }

  export type pago_bcoMinOrderByAggregateInput = {
    NRO_DOC?: SortOrder
    CONTRATO?: SortOrder
    COD_SUC?: SortOrder
    NRO_CTA?: SortOrder
    FEC_ACR?: SortOrder
    IMPORTE?: SortOrder
    MARCA?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    DIA_PAGO?: SortOrder
    SUCURSAL?: SortOrder
    SEGURO?: SortOrder
    id?: SortOrder
  }

  export type pago_bcoSumOrderByAggregateInput = {
    NRO_DOC?: SortOrder
    CONTRATO?: SortOrder
    IMPORTE?: SortOrder
    MES?: SortOrder
    ANO?: SortOrder
    SEGURO?: SortOrder
    id?: SortOrder
  }

  export type cajaCountOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    PUESTO?: SortOrder
    CODIGO?: SortOrder
    MOVIM?: SortOrder
    CUENTA?: SortOrder
    CUENTA_DESC?: SortOrder
    IMPORTE?: SortOrder
    TIPO?: SortOrder
    SERIE?: SortOrder
    NUMERO?: SortOrder
    CUIT?: SortOrder
    DETALLE?: SortOrder
    FECHA?: SortOrder
    FEC_COMP?: SortOrder
    HORA?: SortOrder
    OPERADOR?: SortOrder
    idmovim?: SortOrder
  }

  export type cajaAvgOrderByAggregateInput = {
    PUESTO?: SortOrder
    CODIGO?: SortOrder
    IMPORTE?: SortOrder
    SERIE?: SortOrder
    NUMERO?: SortOrder
    idmovim?: SortOrder
  }

  export type cajaMaxOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    PUESTO?: SortOrder
    CODIGO?: SortOrder
    MOVIM?: SortOrder
    CUENTA?: SortOrder
    CUENTA_DESC?: SortOrder
    IMPORTE?: SortOrder
    TIPO?: SortOrder
    SERIE?: SortOrder
    NUMERO?: SortOrder
    CUIT?: SortOrder
    DETALLE?: SortOrder
    FECHA?: SortOrder
    FEC_COMP?: SortOrder
    HORA?: SortOrder
    OPERADOR?: SortOrder
    idmovim?: SortOrder
  }

  export type cajaMinOrderByAggregateInput = {
    SUCURSAL?: SortOrder
    PUESTO?: SortOrder
    CODIGO?: SortOrder
    MOVIM?: SortOrder
    CUENTA?: SortOrder
    CUENTA_DESC?: SortOrder
    IMPORTE?: SortOrder
    TIPO?: SortOrder
    SERIE?: SortOrder
    NUMERO?: SortOrder
    CUIT?: SortOrder
    DETALLE?: SortOrder
    FECHA?: SortOrder
    FEC_COMP?: SortOrder
    HORA?: SortOrder
    OPERADOR?: SortOrder
    idmovim?: SortOrder
  }

  export type cajaSumOrderByAggregateInput = {
    PUESTO?: SortOrder
    CODIGO?: SortOrder
    IMPORTE?: SortOrder
    SERIE?: SortOrder
    NUMERO?: SortOrder
    idmovim?: SortOrder
  }

  export type subctaCountOrderByAggregateInput = {
    CODI?: SortOrder
    DESC?: SortOrder
    CUEN?: SortOrder
    MOVIM?: SortOrder
    id?: SortOrder
  }

  export type subctaAvgOrderByAggregateInput = {
    CODI?: SortOrder
    CUEN?: SortOrder
    id?: SortOrder
  }

  export type subctaMaxOrderByAggregateInput = {
    CODI?: SortOrder
    DESC?: SortOrder
    CUEN?: SortOrder
    MOVIM?: SortOrder
    id?: SortOrder
  }

  export type subctaMinOrderByAggregateInput = {
    CODI?: SortOrder
    DESC?: SortOrder
    CUEN?: SortOrder
    MOVIM?: SortOrder
    id?: SortOrder
  }

  export type subctaSumOrderByAggregateInput = {
    CODI?: SortOrder
    CUEN?: SortOrder
    id?: SortOrder
  }

  export type maestro_cuentasCountOrderByAggregateInput = {
    idcuenta?: SortOrder
    contrato?: SortOrder
    dni?: SortOrder
    grupo?: SortOrder
    cuenta?: SortOrder
    observacion?: SortOrder
  }

  export type maestro_cuentasAvgOrderByAggregateInput = {
    idcuenta?: SortOrder
    contrato?: SortOrder
    dni?: SortOrder
    grupo?: SortOrder
  }

  export type maestro_cuentasMaxOrderByAggregateInput = {
    idcuenta?: SortOrder
    contrato?: SortOrder
    dni?: SortOrder
    grupo?: SortOrder
    cuenta?: SortOrder
    observacion?: SortOrder
  }

  export type maestro_cuentasMinOrderByAggregateInput = {
    idcuenta?: SortOrder
    contrato?: SortOrder
    dni?: SortOrder
    grupo?: SortOrder
    cuenta?: SortOrder
    observacion?: SortOrder
  }

  export type maestro_cuentasSumOrderByAggregateInput = {
    idcuenta?: SortOrder
    contrato?: SortOrder
    dni?: SortOrder
    grupo?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type operadorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    perfil?: SortOrder
    estado?: SortOrder
    codigo?: SortOrder
    medicos?: SortOrder
    sucursal?: SortOrder
    prestamos?: SortOrder
    ordenpago?: SortOrder
    clubwerchow?: SortOrder
    ventas?: SortOrder
    administracion?: SortOrder
    campanas?: SortOrder
    socios?: SortOrder
    sepelio?: SortOrder
    gestion?: SortOrder
    contabilidad?: SortOrder
    cobranza?: SortOrder
  }

  export type operadorAvgOrderByAggregateInput = {
    id?: SortOrder
    perfil?: SortOrder
    codigo?: SortOrder
  }

  export type operadorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    perfil?: SortOrder
    estado?: SortOrder
    codigo?: SortOrder
    medicos?: SortOrder
    sucursal?: SortOrder
    prestamos?: SortOrder
    ordenpago?: SortOrder
    clubwerchow?: SortOrder
    ventas?: SortOrder
    administracion?: SortOrder
    campanas?: SortOrder
    socios?: SortOrder
    sepelio?: SortOrder
    gestion?: SortOrder
    contabilidad?: SortOrder
    cobranza?: SortOrder
  }

  export type operadorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    perfil?: SortOrder
    estado?: SortOrder
    codigo?: SortOrder
    medicos?: SortOrder
    sucursal?: SortOrder
    prestamos?: SortOrder
    ordenpago?: SortOrder
    clubwerchow?: SortOrder
    ventas?: SortOrder
    administracion?: SortOrder
    campanas?: SortOrder
    socios?: SortOrder
    sepelio?: SortOrder
    gestion?: SortOrder
    contabilidad?: SortOrder
    cobranza?: SortOrder
  }

  export type operadorSumOrderByAggregateInput = {
    id?: SortOrder
    perfil?: SortOrder
    codigo?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type subcta_oldCountOrderByAggregateInput = {
    CODI?: SortOrder
    DESC?: SortOrder
    CUEN?: SortOrder
    MOVIM?: SortOrder
    id?: SortOrder
  }

  export type subcta_oldAvgOrderByAggregateInput = {
    CODI?: SortOrder
    CUEN?: SortOrder
    id?: SortOrder
  }

  export type subcta_oldMaxOrderByAggregateInput = {
    CODI?: SortOrder
    DESC?: SortOrder
    CUEN?: SortOrder
    MOVIM?: SortOrder
    id?: SortOrder
  }

  export type subcta_oldMinOrderByAggregateInput = {
    CODI?: SortOrder
    DESC?: SortOrder
    CUEN?: SortOrder
    MOVIM?: SortOrder
    id?: SortOrder
  }

  export type subcta_oldSumOrderByAggregateInput = {
    CODI?: SortOrder
    CUEN?: SortOrder
    id?: SortOrder
  }

  export type soCountOrderByAggregateInput = {
    CONTRATO?: SortOrder
    SOCIO?: SortOrder
    ALTA?: SortOrder
    GRUPO?: SortOrder
    ADHERENTES?: SortOrder
    PLAN?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    CUOTA?: SortOrder
    EMPRESA?: SortOrder
    SUCURSAL?: SortOrder
    CUOTAS?: SortOrder
    PAGOS?: SortOrder
    DEUDA?: SortOrder
    id?: SortOrder
  }

  export type soAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type soMaxOrderByAggregateInput = {
    CONTRATO?: SortOrder
    SOCIO?: SortOrder
    ALTA?: SortOrder
    GRUPO?: SortOrder
    ADHERENTES?: SortOrder
    PLAN?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    CUOTA?: SortOrder
    EMPRESA?: SortOrder
    SUCURSAL?: SortOrder
    CUOTAS?: SortOrder
    PAGOS?: SortOrder
    DEUDA?: SortOrder
    id?: SortOrder
  }

  export type soMinOrderByAggregateInput = {
    CONTRATO?: SortOrder
    SOCIO?: SortOrder
    ALTA?: SortOrder
    GRUPO?: SortOrder
    ADHERENTES?: SortOrder
    PLAN?: SortOrder
    ZONA?: SortOrder
    EDAD?: SortOrder
    CUOTA?: SortOrder
    EMPRESA?: SortOrder
    SUCURSAL?: SortOrder
    CUOTAS?: SortOrder
    PAGOS?: SortOrder
    DEUDA?: SortOrder
    id?: SortOrder
  }

  export type soSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}