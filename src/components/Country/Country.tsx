import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Col, Row, Spin, Typography } from 'antd';
import {
  Country as CountryData,
  CountryVariables,
} from '../../lib/graphql/queries/Country/__generated__/Country';
import { COUNTRY } from '../../lib/graphql/queries/Country';

const { Title, Text } = Typography;

const Country = () => {
  const { country } = useParams();
  const { data, loading, error } = useQuery<CountryData, CountryVariables>(
    COUNTRY,
    {
      variables: {
        name: country,
      },
    },
  );
  if (error) return <h2>Error occurred</h2>;
  if (!data || !data.Country || !data.Country[0]) {
    return <h2>There is nothing no show here</h2>;
  }
  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Spin size="large" />{' '}
      </div>
    );
  }

  const selectedCountry = data.Country[0];

  if (!selectedCountry) return <h2>Country does not exist</h2>;

  return (
    <div className="country">
      <Row gutter={16}>
        <Col xs={5} className="country-flag">
          <img
            src={selectedCountry.flag ? selectedCountry.flag.svgFile : ''}
            alt="country flag"
          />
        </Col>
        <Col xs={7} className="country-info">
          <Title level={2}>{selectedCountry.name}</Title>
          <Text>{`Area: ${selectedCountry.area}`}</Text>
          <Text>{`Capital: ${selectedCountry.capital}`}</Text>
          <Text>{`Population: ${selectedCountry.population}`}</Text>
          <Text>{`Population density: ${selectedCountry.populationDensity}`}</Text>
          <Text>{`Native name: ${selectedCountry.nativeName}`}</Text>
          <Text>{`Native name: ${selectedCountry.nativeName}`}</Text>
        </Col>
      </Row>
    </div>
  );
};

export default Country;
