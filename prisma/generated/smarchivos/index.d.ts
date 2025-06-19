
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type so062025Payload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "so062025"
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
  }, ExtArgs["result"]["so062025"]>
  composites: {}
}

/**
 * Model so062025
 * 
 */
export type so062025 = runtime.Types.DefaultSelection<so062025Payload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more So062025s
 * const so062025s = await prisma.so062025.findMany()
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
   * // Fetch zero or more So062025s
   * const so062025s = await prisma.so062025.findMany()
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
   * `prisma.so062025`: Exposes CRUD operations for the **so062025** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more So062025s
    * const so062025s = await prisma.so062025.findMany()
    * ```
    */
  get so062025(): Prisma.so062025Delegate<GlobalReject, ExtArgs>;
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
    so062025: 'so062025'
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
      modelProps: 'so062025'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      so062025: {
        payload: so062025Payload<ExtArgs>
        fields: Prisma.so062025FieldRefs
        operations: {
          findUnique: {
            args: Prisma.so062025FindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<so062025Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.so062025FindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<so062025Payload>
          }
          findFirst: {
            args: Prisma.so062025FindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<so062025Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.so062025FindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<so062025Payload>
          }
          findMany: {
            args: Prisma.so062025FindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<so062025Payload>[]
          }
          create: {
            args: Prisma.so062025CreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<so062025Payload>
          }
          createMany: {
            args: Prisma.so062025CreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.so062025DeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<so062025Payload>
          }
          update: {
            args: Prisma.so062025UpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<so062025Payload>
          }
          deleteMany: {
            args: Prisma.so062025DeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.so062025UpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.so062025UpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<so062025Payload>
          }
          aggregate: {
            args: Prisma.So062025AggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSo062025>
          }
          groupBy: {
            args: Prisma.so062025GroupByArgs<ExtArgs>,
            result: $Utils.Optional<So062025GroupByOutputType>[]
          }
          count: {
            args: Prisma.so062025CountArgs<ExtArgs>,
            result: $Utils.Optional<So062025CountAggregateOutputType> | number
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
   * Model so062025
   */


  export type AggregateSo062025 = {
    _count: So062025CountAggregateOutputType | null
    _avg: So062025AvgAggregateOutputType | null
    _sum: So062025SumAggregateOutputType | null
    _min: So062025MinAggregateOutputType | null
    _max: So062025MaxAggregateOutputType | null
  }

  export type So062025AvgAggregateOutputType = {
    id: number | null
  }

  export type So062025SumAggregateOutputType = {
    id: number | null
  }

  export type So062025MinAggregateOutputType = {
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

  export type So062025MaxAggregateOutputType = {
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

  export type So062025CountAggregateOutputType = {
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


  export type So062025AvgAggregateInputType = {
    id?: true
  }

  export type So062025SumAggregateInputType = {
    id?: true
  }

  export type So062025MinAggregateInputType = {
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

  export type So062025MaxAggregateInputType = {
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

  export type So062025CountAggregateInputType = {
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

  export type So062025AggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which so062025 to aggregate.
     */
    where?: so062025WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of so062025s to fetch.
     */
    orderBy?: so062025OrderByWithRelationInput | so062025OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: so062025WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` so062025s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` so062025s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned so062025s
    **/
    _count?: true | So062025CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: So062025AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: So062025SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: So062025MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: So062025MaxAggregateInputType
  }

  export type GetSo062025AggregateType<T extends So062025AggregateArgs> = {
        [P in keyof T & keyof AggregateSo062025]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSo062025[P]>
      : GetScalarType<T[P], AggregateSo062025[P]>
  }




  export type so062025GroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: so062025WhereInput
    orderBy?: so062025OrderByWithAggregationInput | so062025OrderByWithAggregationInput[]
    by: So062025ScalarFieldEnum[] | So062025ScalarFieldEnum
    having?: so062025ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: So062025CountAggregateInputType | true
    _avg?: So062025AvgAggregateInputType
    _sum?: So062025SumAggregateInputType
    _min?: So062025MinAggregateInputType
    _max?: So062025MaxAggregateInputType
  }


  export type So062025GroupByOutputType = {
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
    _count: So062025CountAggregateOutputType | null
    _avg: So062025AvgAggregateOutputType | null
    _sum: So062025SumAggregateOutputType | null
    _min: So062025MinAggregateOutputType | null
    _max: So062025MaxAggregateOutputType | null
  }

  type GetSo062025GroupByPayload<T extends so062025GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<So062025GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof So062025GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], So062025GroupByOutputType[P]>
            : GetScalarType<T[P], So062025GroupByOutputType[P]>
        }
      >
    >


  export type so062025Select<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["so062025"]>

  export type so062025SelectScalar = {
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


  type so062025GetPayload<S extends boolean | null | undefined | so062025Args> = $Types.GetResult<so062025Payload, S>

  type so062025CountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<so062025FindManyArgs, 'select' | 'include'> & {
      select?: So062025CountAggregateInputType | true
    }

  export interface so062025Delegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['so062025'], meta: { name: 'so062025' } }
    /**
     * Find zero or one So062025 that matches the filter.
     * @param {so062025FindUniqueArgs} args - Arguments to find a So062025
     * @example
     * // Get one So062025
     * const so062025 = await prisma.so062025.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends so062025FindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, so062025FindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'so062025'> extends True ? Prisma__so062025Client<$Types.GetResult<so062025Payload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__so062025Client<$Types.GetResult<so062025Payload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one So062025 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {so062025FindUniqueOrThrowArgs} args - Arguments to find a So062025
     * @example
     * // Get one So062025
     * const so062025 = await prisma.so062025.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends so062025FindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, so062025FindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__so062025Client<$Types.GetResult<so062025Payload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first So062025 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {so062025FindFirstArgs} args - Arguments to find a So062025
     * @example
     * // Get one So062025
     * const so062025 = await prisma.so062025.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends so062025FindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, so062025FindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'so062025'> extends True ? Prisma__so062025Client<$Types.GetResult<so062025Payload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__so062025Client<$Types.GetResult<so062025Payload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first So062025 that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {so062025FindFirstOrThrowArgs} args - Arguments to find a So062025
     * @example
     * // Get one So062025
     * const so062025 = await prisma.so062025.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends so062025FindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, so062025FindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__so062025Client<$Types.GetResult<so062025Payload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more So062025s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {so062025FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all So062025s
     * const so062025s = await prisma.so062025.findMany()
     * 
     * // Get first 10 So062025s
     * const so062025s = await prisma.so062025.findMany({ take: 10 })
     * 
     * // Only select the `CONTRATO`
     * const so062025WithCONTRATOOnly = await prisma.so062025.findMany({ select: { CONTRATO: true } })
     * 
    **/
    findMany<T extends so062025FindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, so062025FindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<so062025Payload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a So062025.
     * @param {so062025CreateArgs} args - Arguments to create a So062025.
     * @example
     * // Create one So062025
     * const So062025 = await prisma.so062025.create({
     *   data: {
     *     // ... data to create a So062025
     *   }
     * })
     * 
    **/
    create<T extends so062025CreateArgs<ExtArgs>>(
      args: SelectSubset<T, so062025CreateArgs<ExtArgs>>
    ): Prisma__so062025Client<$Types.GetResult<so062025Payload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many So062025s.
     *     @param {so062025CreateManyArgs} args - Arguments to create many So062025s.
     *     @example
     *     // Create many So062025s
     *     const so062025 = await prisma.so062025.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends so062025CreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, so062025CreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a So062025.
     * @param {so062025DeleteArgs} args - Arguments to delete one So062025.
     * @example
     * // Delete one So062025
     * const So062025 = await prisma.so062025.delete({
     *   where: {
     *     // ... filter to delete one So062025
     *   }
     * })
     * 
    **/
    delete<T extends so062025DeleteArgs<ExtArgs>>(
      args: SelectSubset<T, so062025DeleteArgs<ExtArgs>>
    ): Prisma__so062025Client<$Types.GetResult<so062025Payload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one So062025.
     * @param {so062025UpdateArgs} args - Arguments to update one So062025.
     * @example
     * // Update one So062025
     * const so062025 = await prisma.so062025.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends so062025UpdateArgs<ExtArgs>>(
      args: SelectSubset<T, so062025UpdateArgs<ExtArgs>>
    ): Prisma__so062025Client<$Types.GetResult<so062025Payload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more So062025s.
     * @param {so062025DeleteManyArgs} args - Arguments to filter So062025s to delete.
     * @example
     * // Delete a few So062025s
     * const { count } = await prisma.so062025.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends so062025DeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, so062025DeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more So062025s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {so062025UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many So062025s
     * const so062025 = await prisma.so062025.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends so062025UpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, so062025UpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one So062025.
     * @param {so062025UpsertArgs} args - Arguments to update or create a So062025.
     * @example
     * // Update or create a So062025
     * const so062025 = await prisma.so062025.upsert({
     *   create: {
     *     // ... data to create a So062025
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the So062025 we want to update
     *   }
     * })
    **/
    upsert<T extends so062025UpsertArgs<ExtArgs>>(
      args: SelectSubset<T, so062025UpsertArgs<ExtArgs>>
    ): Prisma__so062025Client<$Types.GetResult<so062025Payload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of So062025s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {so062025CountArgs} args - Arguments to filter So062025s to count.
     * @example
     * // Count the number of So062025s
     * const count = await prisma.so062025.count({
     *   where: {
     *     // ... the filter for the So062025s we want to count
     *   }
     * })
    **/
    count<T extends so062025CountArgs>(
      args?: Subset<T, so062025CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], So062025CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a So062025.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {So062025AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends So062025AggregateArgs>(args: Subset<T, So062025AggregateArgs>): Prisma.PrismaPromise<GetSo062025AggregateType<T>>

    /**
     * Group by So062025.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {so062025GroupByArgs} args - Group by arguments.
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
      T extends so062025GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: so062025GroupByArgs['orderBy'] }
        : { orderBy?: so062025GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, so062025GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSo062025GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the so062025 model
   */
  readonly fields: so062025FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for so062025.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__so062025Client<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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
   * Fields of the so062025 model
   */ 
  interface so062025FieldRefs {
    readonly CONTRATO: FieldRef<"so062025", 'String'>
    readonly SOCIO: FieldRef<"so062025", 'String'>
    readonly ALTA: FieldRef<"so062025", 'String'>
    readonly GRUPO: FieldRef<"so062025", 'String'>
    readonly ADHERENTES: FieldRef<"so062025", 'String'>
    readonly PLAN: FieldRef<"so062025", 'String'>
    readonly ZONA: FieldRef<"so062025", 'String'>
    readonly EDAD: FieldRef<"so062025", 'String'>
    readonly CUOTA: FieldRef<"so062025", 'String'>
    readonly EMPRESA: FieldRef<"so062025", 'String'>
    readonly SUCURSAL: FieldRef<"so062025", 'String'>
    readonly CUOTAS: FieldRef<"so062025", 'String'>
    readonly PAGOS: FieldRef<"so062025", 'String'>
    readonly DEUDA: FieldRef<"so062025", 'String'>
    readonly id: FieldRef<"so062025", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * so062025 base type for findUnique actions
   */
  export type so062025FindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so062025
     */
    select?: so062025Select<ExtArgs> | null
    /**
     * Filter, which so062025 to fetch.
     */
    where: so062025WhereUniqueInput
  }

  /**
   * so062025 findUnique
   */
  export interface so062025FindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends so062025FindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * so062025 findUniqueOrThrow
   */
  export type so062025FindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so062025
     */
    select?: so062025Select<ExtArgs> | null
    /**
     * Filter, which so062025 to fetch.
     */
    where: so062025WhereUniqueInput
  }


  /**
   * so062025 base type for findFirst actions
   */
  export type so062025FindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so062025
     */
    select?: so062025Select<ExtArgs> | null
    /**
     * Filter, which so062025 to fetch.
     */
    where?: so062025WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of so062025s to fetch.
     */
    orderBy?: so062025OrderByWithRelationInput | so062025OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for so062025s.
     */
    cursor?: so062025WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` so062025s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` so062025s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of so062025s.
     */
    distinct?: So062025ScalarFieldEnum | So062025ScalarFieldEnum[]
  }

  /**
   * so062025 findFirst
   */
  export interface so062025FindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends so062025FindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * so062025 findFirstOrThrow
   */
  export type so062025FindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so062025
     */
    select?: so062025Select<ExtArgs> | null
    /**
     * Filter, which so062025 to fetch.
     */
    where?: so062025WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of so062025s to fetch.
     */
    orderBy?: so062025OrderByWithRelationInput | so062025OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for so062025s.
     */
    cursor?: so062025WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` so062025s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` so062025s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of so062025s.
     */
    distinct?: So062025ScalarFieldEnum | So062025ScalarFieldEnum[]
  }


  /**
   * so062025 findMany
   */
  export type so062025FindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so062025
     */
    select?: so062025Select<ExtArgs> | null
    /**
     * Filter, which so062025s to fetch.
     */
    where?: so062025WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of so062025s to fetch.
     */
    orderBy?: so062025OrderByWithRelationInput | so062025OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing so062025s.
     */
    cursor?: so062025WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` so062025s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` so062025s.
     */
    skip?: number
    distinct?: So062025ScalarFieldEnum | So062025ScalarFieldEnum[]
  }


  /**
   * so062025 create
   */
  export type so062025CreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so062025
     */
    select?: so062025Select<ExtArgs> | null
    /**
     * The data needed to create a so062025.
     */
    data?: XOR<so062025CreateInput, so062025UncheckedCreateInput>
  }


  /**
   * so062025 createMany
   */
  export type so062025CreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many so062025s.
     */
    data: so062025CreateManyInput | so062025CreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * so062025 update
   */
  export type so062025UpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so062025
     */
    select?: so062025Select<ExtArgs> | null
    /**
     * The data needed to update a so062025.
     */
    data: XOR<so062025UpdateInput, so062025UncheckedUpdateInput>
    /**
     * Choose, which so062025 to update.
     */
    where: so062025WhereUniqueInput
  }


  /**
   * so062025 updateMany
   */
  export type so062025UpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update so062025s.
     */
    data: XOR<so062025UpdateManyMutationInput, so062025UncheckedUpdateManyInput>
    /**
     * Filter which so062025s to update
     */
    where?: so062025WhereInput
  }


  /**
   * so062025 upsert
   */
  export type so062025UpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so062025
     */
    select?: so062025Select<ExtArgs> | null
    /**
     * The filter to search for the so062025 to update in case it exists.
     */
    where: so062025WhereUniqueInput
    /**
     * In case the so062025 found by the `where` argument doesn't exist, create a new so062025 with this data.
     */
    create: XOR<so062025CreateInput, so062025UncheckedCreateInput>
    /**
     * In case the so062025 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<so062025UpdateInput, so062025UncheckedUpdateInput>
  }


  /**
   * so062025 delete
   */
  export type so062025DeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so062025
     */
    select?: so062025Select<ExtArgs> | null
    /**
     * Filter which so062025 to delete.
     */
    where: so062025WhereUniqueInput
  }


  /**
   * so062025 deleteMany
   */
  export type so062025DeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which so062025s to delete
     */
    where?: so062025WhereInput
  }


  /**
   * so062025 without action
   */
  export type so062025Args<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the so062025
     */
    select?: so062025Select<ExtArgs> | null
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


  export const So062025ScalarFieldEnum: {
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

  export type So062025ScalarFieldEnum = (typeof So062025ScalarFieldEnum)[keyof typeof So062025ScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type so062025WhereInput = {
    AND?: so062025WhereInput | so062025WhereInput[]
    OR?: so062025WhereInput[]
    NOT?: so062025WhereInput | so062025WhereInput[]
    CONTRATO?: StringNullableFilter<"so062025"> | string | null
    SOCIO?: StringNullableFilter<"so062025"> | string | null
    ALTA?: StringNullableFilter<"so062025"> | string | null
    GRUPO?: StringNullableFilter<"so062025"> | string | null
    ADHERENTES?: StringNullableFilter<"so062025"> | string | null
    PLAN?: StringNullableFilter<"so062025"> | string | null
    ZONA?: StringNullableFilter<"so062025"> | string | null
    EDAD?: StringNullableFilter<"so062025"> | string | null
    CUOTA?: StringNullableFilter<"so062025"> | string | null
    EMPRESA?: StringNullableFilter<"so062025"> | string | null
    SUCURSAL?: StringNullableFilter<"so062025"> | string | null
    CUOTAS?: StringNullableFilter<"so062025"> | string | null
    PAGOS?: StringNullableFilter<"so062025"> | string | null
    DEUDA?: StringNullableFilter<"so062025"> | string | null
    id?: IntFilter<"so062025"> | number
  }

  export type so062025OrderByWithRelationInput = {
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

  export type so062025WhereUniqueInput = {
    id?: number
  }

  export type so062025OrderByWithAggregationInput = {
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
    _count?: so062025CountOrderByAggregateInput
    _avg?: so062025AvgOrderByAggregateInput
    _max?: so062025MaxOrderByAggregateInput
    _min?: so062025MinOrderByAggregateInput
    _sum?: so062025SumOrderByAggregateInput
  }

  export type so062025ScalarWhereWithAggregatesInput = {
    AND?: so062025ScalarWhereWithAggregatesInput | so062025ScalarWhereWithAggregatesInput[]
    OR?: so062025ScalarWhereWithAggregatesInput[]
    NOT?: so062025ScalarWhereWithAggregatesInput | so062025ScalarWhereWithAggregatesInput[]
    CONTRATO?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    SOCIO?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    ALTA?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    GRUPO?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    ADHERENTES?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    PLAN?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    ZONA?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    EDAD?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    CUOTA?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    EMPRESA?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    SUCURSAL?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    CUOTAS?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    PAGOS?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    DEUDA?: StringNullableWithAggregatesFilter<"so062025"> | string | null
    id?: IntWithAggregatesFilter<"so062025"> | number
  }

  export type so062025CreateInput = {
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

  export type so062025UncheckedCreateInput = {
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

  export type so062025UpdateInput = {
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

  export type so062025UncheckedUpdateInput = {
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

  export type so062025CreateManyInput = {
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

  export type so062025UpdateManyMutationInput = {
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

  export type so062025UncheckedUpdateManyInput = {
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

  export type so062025CountOrderByAggregateInput = {
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

  export type so062025AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type so062025MaxOrderByAggregateInput = {
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

  export type so062025MinOrderByAggregateInput = {
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

  export type so062025SumOrderByAggregateInput = {
    id?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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