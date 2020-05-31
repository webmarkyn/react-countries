import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { List } from 'antd';
import {
  Country as CountryData,
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
        first: 10,
      },
    },
  );
  if (!data || !data.Country) return <h1>Please Wait</h1>;
  return (
    <div className="countries-list-wrapper">
      <List
        className="countries-list-wrapper"
        itemLayout="vertical"
        loading={loading}
        dataSource={data.Country}
        pagination={{
          onChange: (pageValue) => setPage(pageValue),
          pageSize: 10,
        }}
      />
    </div>
  );
};

export default CountriesList;
