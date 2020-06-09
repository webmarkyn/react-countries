import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Row, Spin, Typography } from 'antd';
import {
  Country as CountryData,
  CountryVariables,
} from '../../lib/graphql/queries/Country/__generated__/Country';
import { COUNTRY } from '../../lib/graphql/queries/Country';

const { Title, Paragraph } = Typography;

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
      <Link to="/">
        <Button>{'< Back'}</Button>
      </Link>
      <Row gutter={16}>
        <Col span={14} className="country-flag">
          <img
            src={selectedCountry.flag ? selectedCountry.flag.svgFile : ''}
            alt="country flag"
            style={{ width: '100%' }}
          />
        </Col>
        <Col span={10} className="country-info">
          <Title level={2}>{selectedCountry.name}</Title>
          <Paragraph>{`Area: ${selectedCountry.area}`}</Paragraph>
          <Paragraph>{`Capital: ${selectedCountry.capital}`}</Paragraph>
          <Paragraph>{`Population: ${selectedCountry.population}`}</Paragraph>
          <Paragraph>{`Population density: ${selectedCountry.populationDensity}`}</Paragraph>
          <Paragraph>{`Native name: ${selectedCountry.nativeName}`}</Paragraph>
          <Paragraph>{`Native name: ${selectedCountry.nativeName}`}</Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Country;
