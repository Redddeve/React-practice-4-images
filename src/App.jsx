import Searchbar from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import getImages from 'helpers/pixabayAPI';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Wrapper } from 'styles/App.styled';

const App = () => {
  const [gallery, setGallery] = useState([]);
  const [query, setQuery] = useState('');
  const [totalHitsNum, setTotalHits] = useState(0);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  const [currentTags, setCurrentTags] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = async params => {
      try {
        setLoading(true);
        const { hits, totalHits } = await getImages(params);

        if (totalHits > 0) {
          setGallery(prev => [...prev, ...hits]);
          if (page === 1) {
            setTotalHits(totalHits);
            toast.success(`We found ${totalHits} images!`, {
              position: 'top-right',
              autoClose: 1000,
            });
          }
        }
      } catch (err) {
        toast.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchImages({ page, q: query });
  }, [page, query]);

  const onInputQuery = queryStr => {
    switch (queryStr) {
      case query:
        toast.info('Make a different request');
        break;

      case '':
        toast.info('Type something in the search input');
        break;

      default:
        setQuery(queryStr);
        setGallery([]);
        setPage(1);
        break;
    }
  };

  const onOpenModal = (img, tags) => {
    setIsOpen(prev => !prev);
    setCurrentImg(img);
    setCurrentTags(tags);
  };

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const loadMore = loading ? (
    <Loader />
  ) : (
    gallery.length !== totalHitsNum && (
      <Button onLoadMore={onLoadMore} text="Load more" />
    )
  );
  return (
    <Wrapper>
      <Searchbar onInputQuery={onInputQuery} />
      {!gallery.length || (
        <ImageGallery data={gallery} onOpenModal={onOpenModal} />
      )}
      {loading && <Loader />}
      {loadMore}
      {isOpen && (
        <Modal close={onOpenModal}>
          <img src={currentImg} alt={currentTags} />
        </Modal>
      )}
    </Wrapper>
  );
};

export default App;
