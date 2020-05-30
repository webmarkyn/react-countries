import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  Country_Country as CountryData,
  CountryVariables,
} from '../../lib/graphql/queries/Country/__generated__/Country';
import { COUNTRY } from '../../lib/graphql/queries/Country';

const OFFSET = 10;
const CountriesList = () => {
  const [page, setPage] = useState<number>(0);
  const { data, loading, error } = useQuery<CountryData, CountryVariables>(
    COUNTRY,
    {
      variables: {
        offset: page * OFFSET,
        first: 12,
      },
    },
  );
  return <h1>CountriesList</h1>;
};

export default CountriesList;
