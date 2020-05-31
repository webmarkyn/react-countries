import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Card, List } from 'antd';
import {
  Country as CountryData,
  CountryVariables,
} from '../../lib/graphql/queries/Country/__generated__/Country';
import { COUNTRY } from '../../lib/graphql/queries/Country';

import './countries-list.css';

const OFFSET = 10;
const CountriesList = () => {
  const [page, setPage] = useState<number>(0);
  const { data, loading, error } = useQuery<CountryData, CountryVariables>(
    COUNTRY,
    {
      variables: {
        offset: page * OFFSET,
      },
    },
  );
  if (error) return <h1>Error happened</h1>;
  if (!data || !data.Country) return <h1>There is nothing no show here</h1>;
  return (
    <div className="countries-list-wrapper">
      <List
        className="countries-list-wrapper"
        itemLayout="vertical"
        loading={loading}
        dataSource={data.Country}
        grid={{ gutter: 16, column: 4, sm: 2, xs: 1 }}
        pagination={{
          onChange: (pageValue) => setPage(pageValue),
          pageSize: 12,
          hideOnSinglePage: true,
          showLessItems: true,
          showSizeChanger: false,
        }}
        renderItem={(country) => (
          <List.Item>
            {country && country.flag ? (
              <Card
                title={country.name}
                cover={
                  <img
                    alt="flag"
                    src={country.flag.svgFile}
                    className="country-image"
                  />
                }
              >
                Country
              </Card>
            ) : (
              <Card title="Unknown" />
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

export default CountriesList;
