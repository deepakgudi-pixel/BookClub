import Book from "../Book";
import { Booklist, Container, H2 } from "./styles";


export default function BooksContainer() {
  return (
    <Container>
        <H2>All Books</H2>
        <Booklist>
            <Book/>
        </Booklist> 
    </Container>
  )
}
