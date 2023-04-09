import React from 'react'
import { MdOutlineReportOff, MdOutlineReportProblem, MdOutlineZoomOutMap, MdReport } from 'react-icons/md'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { FiRefreshCw } from 'react-icons/fi'
import { BsBookmark, BsPhone } from 'react-icons/bs'
import Image from '../../../assets/images/download.jpg'
const ProductLeftPart = () => {
  return (
    <div className="productLeftPart">
        <div className="productLeftPartImage">
            <IoMdArrowDropleft className="icon"/>
            <img src={Image} alt="productImage" />
            <IoMdArrowDropright className="icon" />
            <MdOutlineZoomOutMap className="iconAbs"/>
        </div>
        <div className="productDescription">
            <p className="productTime"> Postat la 08 aprilie 2023 </p>
            <h3 className="productTitle"> Dezmembrez bmw </h3>
            <p className="productPrice"> 1 000 lei </p>
            <div className="productButtonContainer">
                <button 
                className="productButton">
                <BsBookmark className="icon"/>
                Promoveaza </button>
                <button className="productButton"> 
                <FiRefreshCw className="icon"/>
                Reactualizeaza 
                </button>
            </div>
            <button className="productPerson"> Persoana fizica </button>
            <div className="productDesc">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus architecto iste hic dolore quo id ea provident voluptatum neque nihil! </p>
            </div>
            <div className='productMiscInfo'> 
                <p> ID: 25325253252 </p>
                <p> Vizualizari: 532 </p>
                <div className="reportContainer"> 
                <MdOutlineReportProblem className="icon"/>
                <button className="reportButton"> 
                 Raporteaza </button>
                </div>
            </div>
        </div>
        <div className="productSellerContainer">
            <div className="productSellerLeftPart">
                <p className="productSeller"> Contacteaza vanzatorul </p>
                <div className="productSellerInfo">
                    <img src={Image} className="sellerImage" alt="sellerImage" />
                    <div className="sellerInfo">
                        <p className="sellerName"> Mihai </p>
                        <p className="sellerRegister"> Pe olx din aprilie 2014 </p>
                        <p className="lastLogin"> Activ pe 05 aprilie 2023 </p>
                    </div>
                </div>
            </div>
            <div className="productSellerRightPart">
                <div className="sendMessageContainer"> 
                <button className="productSellerButton"> Trimite mesaj </button>
                </div>
                <div className="phoneNumberContainer"> 
                    <BsPhone className="icon"/>
                    <p className="phoneNumber"> xxxx xxxx xxx </p>
                    <button className="showNumberButton"> Arata numarul </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProductLeftPart