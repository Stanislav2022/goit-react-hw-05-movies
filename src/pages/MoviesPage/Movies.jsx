import React from 'react';
import { useState, useEffect  } from 'react';
import Loader from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import { getSearch } from 'services/api';
import { Link } from 'react-router-dom';

export default function Movies() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!search) { return };

    const movieSearch = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getSearch(search);
        setItems((prevItems) => { return [...prevItems, ...data ] })
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false)
      }
    };
    movieSearch();
  }, [search]);

  const onSearch = (search) => {
      setSearch(search)
  }

  const element = items.map(({ id, title }) =>
    (<li key={id}> <Link to={`/movies/${id}`}>{title}</Link></li>));

  return (
    <div>
      <Searchbar onSubmit={onSearch}/>
      {loading && <Loader />}
      {(Boolean(items.length) && <ul>{element}</ul>)}
      {error && <p>Films load fail</p>}
    </div>
  )
}
