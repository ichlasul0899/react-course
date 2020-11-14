import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { News } from '../../components/index';
import app from '../../services/firebase';
import 'firebase/database';

const DetailDate = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { dateID } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      const filteredByData = firebaseNews.data.filter((newsResp) => {
        return newsResp.date === dateID ? newsResp : 'null';
      });
      setNews(filteredByData);
      setIsLoading(false);
    });
  }, [dateID]);

  return (
    <div>
      <h1>Detail Date</h1>
      {isLoading ? <p>Laoading</p> : <News data={news[0]} />}
    </div>
  );
};

export default DetailDate;
