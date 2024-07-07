import React from 'react'
import BooksSliderItem from './BooksSliderItem'

const BooksSlider = () => {
  return (
    <div className='py-12'>
        <BooksSliderItem label=" الأكثر قراءة"/>
        <BooksSliderItem label=" جديد هينتا"/>
        <BooksSliderItem label="الأعلى تقيما "/>

    </div>
  )
}

export default BooksSlider