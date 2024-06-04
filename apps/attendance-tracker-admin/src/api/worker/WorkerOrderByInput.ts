import { SortOrder } from "../../util/SortOrder";

export type WorkerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
