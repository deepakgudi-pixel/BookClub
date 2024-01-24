import React, { useContext } from 'react';
import { AppContext } from '../../utils/contextApi/contextApi';
import { Author, Container, Cover, Title } from './styles';

export default function Book() {
    
  const { bookData, baseUrl } = useContext(AppContext);

  console.log('bookData: ', bookData);

  if (!bookData?.attributes?.Content || bookData.attributes.Content.length === 0) {
    return <div className="app-container">No book data added</div>;
  }

  const booksRendered = bookData.attributes.Content.map((book) => {
    const {
      id,
      bookName,
      poster,
      author,
    } = book || {};

    return (
      <Container key={id}>
        {poster && <Cover src={`${baseUrl}${poster?.data?.attributes?.url}`} />}
        <figcaption>
          <Title>{bookName?.data?.attributes?.Name}</Title>
          <Author>by {author?.data?.attributes?.Name}</Author>
        </figcaption>
      </Container>
    );
  });

  return <>{booksRendered}</>;
}
