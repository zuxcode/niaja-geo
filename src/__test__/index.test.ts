import { NIGERIA_CONFIG } from "../config";
import { niajaGeo } from "../";

describe("NiajaGeo", () => {
  const testState = NIGERIA_CONFIG[0];
  const testLga = testState.lgas[0];

  describe("Core Functionality", () => {
    test("getStates() returns all configured states", () => {
      const result = niajaGeo.getStates();
      expect(result).toHaveLength(NIGERIA_CONFIG.length);
      expect(result).toEqual(expect.arrayContaining(NIGERIA_CONFIG));
    });

    test("getState() finds state by name case-insensitively", () => {
      const lowerCase = niajaGeo.getState(testState.state.toLowerCase());
      const upperCase = niajaGeo.getState(testState.state.toUpperCase());

      expect(lowerCase).toEqual(testState);
      expect(upperCase).toEqual(testState);
    });

    test("getState() returns null for invalid state", () => {
      expect(niajaGeo.getState("InvalidStateName")).toBeNull();
    });
  });

  describe("Senatorial Districts", () => {
    test("getDistricts() returns correct districts for valid state", () => {
      const result = niajaGeo.getDistricts(testState.state);
      expect(result).toEqual(testState.senatorialDistricts);
    });

    test("getDistricts() returns empty array for invalid state", () => {
      expect(niajaGeo.getDistricts("InvalidState")).toHaveLength(0);
    });
  });

  describe("LGA Operations", () => {
    test("getLgas() returns unique entries", () => {
      const result = niajaGeo.getLgas(testState.state);
      const uniqueCount = new Set(result).size;
      expect(result.length).toBe(uniqueCount);
    });

    test("getLgas() combines districts and LGAs", () => {
      const result = niajaGeo.getLgas(testState.state);
      expect(result).toEqual(
        expect.arrayContaining([
          ...testState.senatorialDistricts,
          ...testState.lgas,
        ]),
      );
    });

    test("getStateByLga() finds state by LGA", () => {
      const result = niajaGeo.getStateByLga(testLga);
      expect(result?.state).toBe(testState.state);
    });

    test("getStateByLga() is case-insensitive", () => {
      const lowerCase = niajaGeo.getStateByLga(testLga.toLowerCase());
      const upperCase = niajaGeo.getStateByLga(testLga.toUpperCase());

      expect(lowerCase).toEqual(testState);
      expect(upperCase).toEqual(testState);
    });

    test("getStateByLga() returns null for unknown LGA", () => {
      expect(niajaGeo.getStateByLga("UnknownLga")).toBeNull();
    });
  });

  describe("Data Integrity", () => {
    test("All states have valid structure", () => {
      NIGERIA_CONFIG.forEach((state) => {
        expect(state).toMatchObject({
          state: expect.any(String),
          senatorialDistricts: expect.arrayContaining([expect.any(String)]),
          lgas: expect.arrayContaining([expect.any(String)]),
        });
      });
    });

    describe("NiajaGeo.getLgas", () => {
      it("should return a deduplicated list of LGAs from senatorialDistricts and lgas", () => {
        const stateName = "Lagos";
        const state = niajaGeo.getState(stateName);

        expect(state).not.toBeNull();

        if (state) {
          const expectedLgas = Array.from(
            new Set([
              ...Object.values(state.senatorialDistricts).flat(),
              ...state.lgas,
            ]),
          );

          const result = niajaGeo.getLgas(stateName);
          expect(result).toEqual(expectedLgas);
        }
      });

      it("should return an empty array for a non-existent state", () => {
        const result = niajaGeo.getLgas("Wakanda");
        expect(result).toEqual([]);
      });
    });
  });
});
