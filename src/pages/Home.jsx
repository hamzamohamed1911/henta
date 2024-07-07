import React from 'react';
import HomeHeader from '../components/HomeHeader';
import SearchFilter from '../components/SearchFilter';
import HomeSlider from '../components/HomeSlider';
import Categories from '../components/Categories';
import BooksSlider from '../components/BooksSlider';

const Home = () => {
  return (
    <section className='lg:p-20 md:p-12 p-6 flex justify-center'>
      <div className='w-full max-w-2xl'>
        <HomeHeader />
        <SearchFilter />
        <HomeSlider />
        <Categories />
        <BooksSlider />
      </div>
    </section>
  );
}

export default Home;
