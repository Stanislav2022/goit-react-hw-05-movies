import { useState, useEffect  } from 'react';
import { getTrending } from 'services/api';
import { Audio } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
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
      setLoading(true);
      setError(null);

      try {
        const data = await getTrending();
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false)
      }
    }
    fetchTrending();
  }, []);
    
  return (
    <div>TrandingList</div>
  )
}
