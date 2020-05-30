/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Country
// ====================================================

export interface Country_Country_currencies {
  __typename: "Currency";
  name: string;
}

export interface Country_Country_flag {
  __typename: "Flag";
  svgFile: string;
}

export interface Country_Country {
  __typename: "Country";
  name: string;
  /**
   * The area in square kilometer, you can convert the area unit and population density through the convertedArea property
   */
  area: number | null;
  capital: string;
  population: number;
  currencies: (Country_Country_currencies | null)[] | null;
  flag: Country_Country_flag | null;
  /**
   * The population per square kilometer
   */
  populationDensity: number | null;
  nativeName: string;
}

export interface Country {
  Country: (Country_Country | null)[] | null;
}

export interface CountryVariables {
  first?: number | null;
  offset?: number | null;
  name?: string | null;
}
