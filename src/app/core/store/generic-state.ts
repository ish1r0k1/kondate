export enum GenericStoreStatus {
  Pending,
  Loading,
  Success,
  Error,
}

export type GenericState<T> = T & {
  status: GenericStoreStatus;
  error: string | null;
};
