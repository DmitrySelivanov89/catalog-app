import React from 'react';

import { ImageSchema } from '../../App';

import './Gallery.scss';

export default class Gallery extends React.Component<
  {
    images: ImageSchema[];
  },
  {
    images: ImageSchema[];
  }
> {
  open = false;

  constructor(props: { images: ImageSchema[] }) {
    super(props);

    this.state = {
      images: this.open ? props.images : props.images.slice(0, 5),
    };
  }

  toggle = () => {
    this.open = !this.open;
    this.setState((state) => ({
      images: this.open ? this.props.images : this.props.images.slice(0, 5),
    }));

    if (!this.open) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  get imagesGrid() {
    return this.state.images.map((image, i) => {
      return (
        <div
          className={
            'content__image' +
            (image.aspectRatio ? ' content__image--' + image.aspectRatio : '')
          }
          style={{
            background: `url(${image.url}) no-repeat center/cover`,
          }}
          key={i}
        >
          <div className="image__title">{image.title}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='gallery'>
        <h4 className='gallery__title'>Каталог техники</h4>

        <div className='gallery__content'>{this.imagesGrid}</div>

        <div className='gallery__btn-panel'>
          <button className='btn-panel__btn' onClick={this.toggle}>
            <svg
              className='btn-icon'
              width='14'
              height='15'
              viewBox='0 0 15 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect x='0.75' y='3.5' width='14' height='2' fill='#E54137' />
              <rect x='0.75' y='7.5' width='14' height='2' fill='#E54137' />
              <rect x='0.75' y='11.5' width='14' height='2' fill='#E54137' />
            </svg>
            Смотреть весь каталог
          </button>
        </div>
      </div>
    );
  }
}
