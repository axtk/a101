import { PersistentState } from "react-statepod";
import type { SerializableAppState } from "../types/SerializableAppState.ts";

export function toAppState(state: SerializableAppState) {
  return new PersistentState(state, { key: "appstage-hybrid/app-state" });
}
