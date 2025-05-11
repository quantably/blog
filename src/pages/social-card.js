import React, { useEffect, useState } from 'react';
import SocialMediaCard from '../components/SocialMediaCard';

const SocialCardPage = () => {
  const [params, setParams] = useState({ title: 'Default Title', tags: [], time: '3 min', filename: 'post-slug' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      setParams({
        title: searchParams.get('title') || 'Default Title',
        tags: searchParams.get('tags')?.split(',').filter(Boolean) || [],
        time: searchParams.get('time') || '3 min',
        filename: searchParams.get('filename') || 'post-slug',
      });
    }
  }, []);

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <SocialMediaCard title={params.title} tags={params.tags} time={params.time} filename={params.filename} />
    </div>
  );
};

export default SocialCardPage;