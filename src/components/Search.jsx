import Form from 'react-bootstrap/Form';

const Search = ({handleChange}) => {
  return (
    <Form.Control
    style={{marginTop: "2.5rem"}}
        type='search'
        placeholder='Oyuncu ara...'
        onChange={handleChange}/>
  )
}

export default Search;