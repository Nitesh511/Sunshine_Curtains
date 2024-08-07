import React, { useEffect, useState } from 'react'
import FrontPage from '../resuable_components/front_page'
import FeatureSection from '../resuable_components/features_section'
import { GiKangaroo } from "react-icons/gi";
import { GiBorderedShield } from "react-icons/gi";
import { GiLightBulb } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import { useGetblindproductdetailsQuery } from '../redux/api';
import LoadingPage from '../loading_page/loadingpage';
import { useParams } from 'react-router-dom';
useParams
const Productdetails = () => {
  
    const {slug}=useParams();

    const[productdetails, setProductDetails]=useState([]);

    const{data,isLoading,error}=useGetblindproductdetailsQuery(slug);

    const test= useGetblindproductdetailsQuery(slug);

    console.log(test)
    
    useEffect(()=>{
        if(data&&data.data){
            setProductDetails(data.data)
        }
    },[data])

   
    if(isLoading){
        return <LoadingPage/>
    }

    if(error){
        <div>Error Fetching Data:{error.message}</div>
    }

    console.log(slug);
    console.log(data)
    
    const features = [
        { icon: <GiKangaroo />, title: "Custom Made In Australia" },
        {
          icon: <GiBorderedShield />,
          title: "All Products 100% ACCC Compliant & Child Safe",
        },
        { icon: <GiLightBulb />, title: "Reduce Your Energy Bills Up To 49%" },
        { icon: <FaAward />, title: "Limited Lifetime Warranty" },
      ];
    
  return (
    <>
    <div className="bg-white">
    <div className="container mx-auto py-3">
      {/* Main text centered at the top */}
      {productdetails.map((items)=>(
        <React.Fragment key={items.id}>
        <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
        {items?.attributes?.productdetails[0]?.title1}
        </h1>
        <p className="text-gray-700 mb-8">
        {items.attributes.productdetails[0]?.title2}
        </p>
      </div>
      <div className="-mt-32">
        <FrontPage 
          imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/05/Vertilux_Roller_Single_Roller_Blind.jpg"
          title="Take full control of light& privacy with Roller Blinds."
          description="Pull them down for full privacy, or roll them up to enjoy the sunshine."

          buttonText="BOOK HERE & GET $300 FREE"
          buttonLink="#"
        />
      </div>

            
        </React.Fragment>
      ))}
     
    </div>
  </div>
  <FeatureSection features={features}/>


</>

  )
}

export default Productdetails