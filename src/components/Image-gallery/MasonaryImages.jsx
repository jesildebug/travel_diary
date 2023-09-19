import React from 'react';
import galleryImages from './galleryImages';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const MasonaryImages = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
        <Masonry gutter='1rem'>
           {galleryImages.map((item,index) => {
            return (
              <img className='masonry_img' src={item}
              key={index}
              alt=''
              style={{width:'100%' ,dispay:"block" ,borderRadius:"10px"}}/>
            )
           })}
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonaryImages;
