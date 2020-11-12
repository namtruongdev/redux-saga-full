import React from 'react';
import { Image, Button, Space } from 'antd';
import 'antd/dist/antd.css';
function ImageDemo() {
  return (
    <Space size={12}>
      <Image
        width={200}
        src={`https://techkalzen.com/wp-content/uploads/2020/02/tron-bo-nhung-hinh-anh-dep-buon-mang-tam-trang-suy-tu.jpg`}
      />
    </Space>
  );
}

export default ImageDemo;
