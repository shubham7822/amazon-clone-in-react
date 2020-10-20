import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className='Home'>
      <img
        className='home_image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />

      <div className='home_row'>
        <Product
          id='12345'
          title='EDICT by Boat ETWS01 True Wireless Earbuds with Easy Tap Controls, Bluetooth V5.0, Up to 14H Playback with Case, Engaging Sound and Instant Voice Assistant(Black)'
          price={400}
          rating={5}
          image='https://m.media-amazon.com/images/I/61VevlF1FHL._AC_UY218_.jpg'
        />

        <Product
          id='445566'
          title='HP 15 10th Gen Intel Core i5 15.6-inch FHD Laptop (i5-10210U/8GB/1TB/Win 10/NVIDIA MX110 2GB Graphics /MS Office/1.74kg), 15s-du1079tx, Up to 14H Playback with Case, Engaging Sound and Instant Voice Assistant(Black)'
          price={61000}
          rating={4}
          image='https://m.media-amazon.com/images/I/81Ne5qKmE8L._AC_UY218_.jpg'
        />
      </div>

      <div className='home_row'>
        <Product
          id='555555'
          title='Converse Unisex Canvas Sneakers'
          price={2450}
          rating={3}
          image='https://images-na.ssl-images-amazon.com/images/I/81BXvsaMgyL._UX625_.jpg'
        />

        <Product
          id='666666'
          title='Skipping Rope for Men Gym, Women, Weight Loss, Kids, Girls, Children, Adult Best in'
          price={500}
          rating={4}
          image='https://m.media-amazon.com/images/I/61YiwNRfk8L._AC_UL320_.jpg'
        />

        <Product
          id='234667'
          title='Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)'
          price={5000}
          rating={4}
          image='https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY218_.jpg'
        />
      </div>

      <div className='home_row'>
        <Product
          id='678901'
          title='Panasonic 100 cm (40 inches) Full HD Android Smart LED TV TH-40HS450DX (Black) (2020 Model)'
          price={19990}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/91auveGcURL._SX425_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
