import Searchbar from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import getImages from 'helpers/pixabayAPI';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Wrapper } from 'styles/App.styled';

export default class App extends Component {
  state = {
    gallery: [],
    query: '',
    totalHits: 0,
    totalLeft: 0,
    per_page: 12,
    page: 1,
    isOpen: false,
    loading: false,
    currentImg: null,
    currentTags: null,
  };

  ref = React.createRef(null);

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      this.setState({ loading: true });

      try {
        const { hits, totalHits } = await getImages({ page, q: query });
        if (totalHits > 0) {
          this.setState(prev => ({ gallery: [...prev.gallery, ...hits] }));
          this.setState({ totalHits });
          this.setState(prev => ({
            totalLeft: prev.totalHits - this.state.per_page,
          }));
          toast.info(`We found ${totalHits} images!`);
        }
      } catch (err) {
        toast.error(err);
      } finally {
        // toast.success('Your request is ready');
        this.setState({ loading: false });
      }
    }
    if (prevState.page !== page && prevState.query === query) {
      try {
        const { hits } = await getImages({ page, q: query });
        this.setState(prev => ({ gallery: [...prev.gallery, ...hits] }));
        this.setState(prev => ({
          totalLeft: prev.totalLeft - this.state.per_page,
        }));
      } catch (err) {
        toast.error(err);
      } finally {
        setTimeout(() => {
          this.state.totalLeft <= 0
            ? toast.info(`You have no more images to load.`)
            : toast.info(
                `You have ${this.state.totalLeft} more images to load.`
              );
        }, 0);
      }
    }
  }

  onInputQuery = queryStr => {
    switch (queryStr) {
      case this.state.query:
        toast.info('Make a different request');
        break;

      case '':
        toast.info('Type something in the search input');
        break;

      default:
        this.setState({
          query: queryStr,
          gallery: [],
          page: 1,
          totalLeft: 0,
        });
        break;
    }
  };

  onOpenModal = (img, tags) => {
    this.setState(prev => ({
      isOpen: !prev.isOpen,
      currentImg: img,
      currentTags: tags,
    }));
  };

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
    this.ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    const { loading, gallery, totalLeft, isOpen, currentImg, currentTags } =
      this.state;
    const loadMore =
      loading && gallery.length ? (
        <Loader />
      ) : (
        totalLeft > 0 && (
          <Button onLoadMore={this.onLoadMore} text="Load more" />
        )
      );
    return (
      <Wrapper>
        <Searchbar onInputQuery={this.onInputQuery} />
        {loading ? (
          <Loader />
        ) : (
          !gallery.length || (
            <ImageGallery data={gallery} onOpenModal={this.onOpenModal} />
          )
        )}
        {loadMore}
        {isOpen && (
          <Modal close={this.onOpenModal}>
            <img src={currentImg} alt={currentTags} />
          </Modal>
        )}
      </Wrapper>
    );
  }
}
