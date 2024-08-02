import React from 'react'
import FrontPage from '../resuable_components/front_page'
import FeatureSection from '../resuable_components/features_section'
import { GiKangaroo } from "react-icons/gi";
import { GiHeatHaze } from "react-icons/gi";
import { CiRuler } from "react-icons/ci";
import { FaAward } from "react-icons/fa";
import {OutdoorBlindsAwningsPage, FabricPart } from './outdoor_awnings';
import BlindsSection from '../resuable_components/products';
import { awningsData } from './awnings_data';
import BookingBanner from '../booking_banner/booking_banner';
import OutdoorSpacesComponent from './outdoor_space';
import ChooseTransparency from '../blinds/transperency';
import FAQs from '../faq/faq';
import ClientReviews from '../reviews/reviews';
import reviewsData from '../reviews/reviews_data';

const Awnings_Page = () => {
  const features = [
    { icon: <GiKangaroo />, title: 'Custom Made In Australia' },
    { icon: <GiHeatHaze/>, title: 'Sun And Heat Protection' },
    { icon: <CiRuler />, title: 'Free Expert Measure And Installation' },
    { icon: <FaAward />, title: 'Limited Lifetime Warranty' },
  ];
  return (
<>
<div className="bg-white">
        <div className="container mx-auto py-3">
          {/* Main text centered at the top */}
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Add Value To Your Home & Lifestyle With Our Retractable Awnings
            </h1>
            <p className="text-gray-700 mb-8">
            Control The Weather & Enjoy Year Round Comfort? It's A No-Brainer.
            </p>
          </div>
          <div className="-mt-32">
            <FrontPage 
              imageUrl="https://watsonblinds.com.au/wp-content/uploads/2024/02/new-ad-for-site.2jpg.jpg"
              title="You Always Get More With Watson Retractable Awnings"
              description="We've been making awnings for over 54 years. It's safe to say you're in good hands."

              buttonText="GET MORE HERE"
              buttonLink="#"
            />
          </div>
        </div>
      </div>

      <FeatureSection features={features}/>

      <OutdoorBlindsAwningsPage/>

      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-0  md:p-10">
      {awningsData.map((item) => (
        <BlindsSection
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          buttonText={item.buttonText}
          buttonLink={item.buttonLink}
        />
      ))}
    </div>

    <BookingBanner
        title="Book Appointment Today And Get a Free $300 Voucher To Use Towards Your Order!"
        description="Our customer consultants have a wealth of experience and will guide you along the way to creating the home you love. Take the first step and book an appointment with our expert local advisers."
        buttonText="BOOK APPOINTMENT"
        buttonLink="#"
        imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/shutterstock_721093795.jpg"
      />

      <OutdoorSpacesComponent/>

      <ChooseTransparency
        title={"Choose Your Transparency"}
        title1={"ALPHA SRS"}
        title2={"SEMINA"}
        title3={"CASSITA II"}
        img1={"https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/SRS-scaled-awnings-q78hps5b9usfv6rvoedgio6hthsctsf5jwul8ya6xs.jpeg"}
        img2={"https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/semina-life-full-cassette-awnings-q78kgfbkhxtq9zhlo1dz6s1y37l2ma12g5j0cc0ty8.jpeg"}
        img3={"https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/green-awnings-q78kh1vp1yom0mku0b50umd0cghvr0imj96nuz3dsw.jpeg  "}
      />
      <div className='-mt-16'>
       <ChooseTransparency
        title1={"PLAZA VIVA"}
        title2={"SINTESI RETRACTABLE ROOF"}
        title3={"SUNDREAM"}
        img1={"https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/Plaza-Viva-awnings-q78khvyj4ntsc5d54o532errcsdmlbu1be277tus9s.jpeg"}
        img2={"https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/outside-awnings-e1709795294201-qkum8s40spt4lsz7aw1rpwo1al224pao6uqtt6gqe8.jpeg"}
        img3={"https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/grey-awnings-q78klb3dzyicl2ea5nd7n1p569iploevgbit32s7mo.jpeg"}
      />
      </div>
      <div className='-mt-16'>
       <ChooseTransparency
        title1={"ZIPSCREENS"}
        title2={"WINDOW AWNINGS"}
        title3={"FOLDING ARM"}
        img1={"https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/EXTSUITEZ-awnings-q78kohrp5qvbxhrpk0xp38rdn9thor24k341mu26jk.jpeg"}
        img2={"https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/pivot-arm-awnings-q78kp836h3vcykphacb9124aa27ro9ylzpdn2kz5pc.jpeg"}
        img3={"https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/Docril-Photo-awnings-q78kppy42yjt35zje215ufm1kdrqqixie5rv6u8of4.jpeg"}
      />
      </div>

      <FabricPart/>

      <FAQs/>

      <ClientReviews reviews={reviewsData}/>

</>
  )
}

export default Awnings_Page