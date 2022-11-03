import { useState, useEffect  } from 'react';
import { getTrending } from 'services/api';
import { Audio } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>

const TrandingList = () => {
    const [tranding, setTrandingList] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                setTrandingList(prevTrandingList => ({ ...prevTrandingList, loading: true, }));
                const data = await getTrending();
                setTrandingList(prevTrandingList => ({ ...prevTrandingList, items: [...data], }));
            } catch (error) {
                setTrandingList(prevTrandingList => ({ ...prevTrandingList, error, }));
            } finally {
                setTrandingList(prevTrandingList => ({ ...prevTrandingList, loading: false, }));
            }
        };
        fetchTrending();
    }, [setTrandingList]);

    const { items, loading, error } = tranding;
    console.log(items);
    const element = items.map(({ id, title }) => (<li key={id}> <Link to={`/movies:${id}`}>{title}</Link></li>));
  return (
      <div>
          {loading && <Audio />}
          {Boolean(items.length) && <ul>{element}</ul>}
          {error && <p>Films load fail</p>}

      </div>
      
  )
}
export default TrandingList;