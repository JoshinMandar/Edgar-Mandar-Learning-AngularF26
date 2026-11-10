export interface Car {
  id: number;
  name: string;
  carModel: string;
  vin?: string;
  madeIn?: string;
  colour?: string;
  features?: string[];
}


export interface ApiCarModel {
  Model_ID: number;
  Model_Name: string;
  Make_Name: string;
}


export interface ApiCarResponse {
  Count: number;
  Results: ApiCarModel[];
}

export function toCar(m: ApiCarModel): Car {
  return { id: m.Model_ID, name: m.Model_Name, carModel: m.Make_Name };
}
export function isApiCarModel(x: unknown): x is ApiCarModel {
  const m = x as ApiCarModel;
  return !!m
    && typeof m.Model_ID === 'number'
    && typeof m.Model_Name === 'string'
    && typeof m.Make_Name === 'string';
}
