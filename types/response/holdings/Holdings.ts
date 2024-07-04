import { UserHolding } from "./UserHolding";

export interface HoldingsResponse {
  data?: Data;
}

interface Data {
  userHolding: UserHolding[];
}
