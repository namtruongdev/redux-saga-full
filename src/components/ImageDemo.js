import React, { useEffect } from 'react';
import { Image, Row, Col, Skeleton } from 'antd';
import 'antd/dist/antd.css';

import { useSelector, useDispatch } from 'react-redux';
import { loadImage } from '../redux/actions';

function ImageDemo() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.images.isLoading);
  const images = useSelector((state) => state.images.images);

  useEffect(() => {
    dispatch(loadImage());
  }, [dispatch]);
  return (
    <>
      {/* {isLoading && <p>Dang tai du lieu</p>} */}
      <Row justify={'center'} gutter={[15, 15]}>
        {images.map((image) => (
          <Col key={image.id}>
            <Skeleton
              loading={isLoading}
              active={true}
              shape={'square'}
              size={200}
            ></Skeleton>
            {!isLoading && <Image width={200} src={image.avatar} />}
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ImageDemo;
