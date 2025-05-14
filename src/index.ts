import { NIGERIA_CONFIG } from "./config";
import { NiajaState } from "./types/types";

class NiajaGeo implements NiajaGeoInterface {
  states: NiajaState[];
  constructor() {
    this.states = NIGERIA_CONFIG;
  }

  getStates: () => NiajaState[] = () => this.states;

  getState: (targetState: string) => NiajaState | null = (targetState) => {
    const matchedState = this.states.find(
      (currentState) =>
        currentState.state.toLowerCase() === targetState.toLowerCase()
    );
    return matchedState || null;
  };

  getDistricts: (targetState: string) => string[] = (targetState) => {
    const matchedState = this.getState(targetState);
    if (!matchedState) return [];

    return Object.values(matchedState.senatorialDistricts).flat();
  };

  getLgas: (targetState: string) => string[] = (targetState) => {
    const matchedState = this.getState(targetState);
    if (!matchedState) return [];

    const uniqueLgas = Array.from(
      new Set([
        ...Object.values(matchedState.senatorialDistricts).flat(),
        ...matchedState.lgas,
      ])
    );

    return uniqueLgas;
  };

  // Proper state-by-LGA implementation
  getStateByLga = (targetLga: string): NiajaState | null => {
    const normalizedLga = targetLga.toLowerCase();
    return (
      this.states.find((state) =>
        state.lgas.some((lga) => lga.toLowerCase() === normalizedLga)
      ) || null
    );
  };
}

interface NiajaGeoInterface {
  getStates: () => NiajaState[];
  getState: (targetState: string) => NiajaState | null;
  getDistricts: (targetState: string) => string[];
  getLgas: (targetState: string) => string[];
  getStateByLga: (targetLga: string) => NiajaState | null;
}

const niajaGeo = new NiajaGeo();

export { niajaGeo };

export default NiajaGeo;
