import { GenericStoreStatus } from './../core/store/generic-state';

export class SelectorUtil {
  static isLoading = (status: GenericStoreStatus) =>
    status === GenericStoreStatus.Loading;
  static isLoaded = (status: GenericStoreStatus) =>
    status === GenericStoreStatus.Success ||
    status === GenericStoreStatus.Error;
}
