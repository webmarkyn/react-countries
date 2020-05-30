import { gql } from 'apollo-boost';

export const COUNTRY = gql`
  query Country($first: Int, $offset: Int, $name: String) {
    Country(first: $first, offset: $offset, name: $name) {
      name
      area
      capital
      population
      currencies {
        name
      }
      flag {
        svgFile
      }
      populationDensity
      nativeName
    }
  }
`;
