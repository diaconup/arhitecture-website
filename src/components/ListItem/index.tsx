import React, { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { styles } from './styles';
import { Item } from '../../utils/types';
import './keyframes.css';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

interface ListItemProps {
  item: Item;
  index: number;
}

const ListItem: React.FC<ListItemProps> = ({ item, index }) => {
  const [isSliderActive, setIsSliderActive] = useState(false);
  const [enlargedIndex, setEnlargedIndex] = useState<number | null>(null);

  const handleInitialImageClick = useCallback(() => {
    setIsSliderActive(true);
    setEnlargedIndex(0);
  }, []);

  const handleImageClick = useCallback((idx: number) => {
    if (enlargedIndex === idx) {
      // If clicking on the currently enlarged image, reset to single view
      setIsSliderActive(false);
      setEnlargedIndex(null);
    } else {
      setEnlargedIndex(idx); // Set to new index
    }
  }, [enlargedIndex]);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.iconTextContainer,
          ...(enlargedIndex !== null ? styles.enlargedSpacing : {}),
        }}
      >
        <img src={item.iconUrl} alt={`${item.title} icon`} style={styles.icon} />
        <div style={styles.textContainer}>
          <p style={styles.title}>{item.title}</p>
          <p style={styles.location}>{item.location}</p>
        </div>
      </div>

      {!isSliderActive ? (
        <div style={styles.imageContainer} onClick={handleInitialImageClick}>
          <img
            src={item.imageUrl[0]}
            alt={item.title}
            style={styles.thumbnailImage}
          />
        </div>
      ) : (
        <Swiper
          slidesPerView={'auto' as 'auto'}
          spaceBetween={20}
          freeMode={true}
          pagination={false}
          modules={[FreeMode, Pagination]}
          style={styles.swiper}
        >
          {item.imageUrl.map((imageUrl: string, i: number) => (
            <SwiperSlide key={i} style={styles.slide}>
              <img
                src={imageUrl}
                alt={`${item.title} - slide ${i}`}
                style={{
                  ...styles.enlargedImage,
                  ...(enlargedIndex === i ? { className: 'grow-and-slide' } : {})
                }}
                className={enlargedIndex === i ? 'grow-and-slide' : ''}
                onClick={() => handleImageClick(i)}
                loading='lazy'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ListItem;
