import React ,{useState}from 'react'
import styled from 'styled-components'
import care1 from '../assets/c1.png'
import care2 from '../assets/c2.png'
import care3 from '../assets/c3.png'
import care4 from '../assets/c4.png'
import care5 from '../assets/c5.png'
import care6 from '../assets/c6.png'


export default function Recommended() {

  const data =[
    {
      image:care1,
      title:"Moisturizer",
      subtitle:"Best way to moist your dry skin",
      cost:"Rs.2750"
    },
    {
      image:care2,
      title:"Moisturizer",
      subtitle:"Best way to moist your dry skin",
      cost:"Rs.2750"
    },
    {
      image:care3,
      title:"Moisturizer",
      subtitle:"Best way to moist your dry skin",
      cost:"Rs.2750"
    },
    {
      image:care4,
      title:"Moisturizer",
      subtitle:"Best way to moist your dry skin",
      cost:"Rs.2750"
    },
    {
      image:care5,
      title:"Moisturizer",
      subtitle:"Best way to moist your dry skin",
      cost:"Rs.2750"
    },
    {
      image:care6,
      title:"Moisturizer",
      subtitle:"Best way to moist your dry skin",
      cost:"Rs.2750"
    }

  ];

  const packages = [
    "Most popular",
    "Best Seller",
    "Nature friendly",
    "New Arrivals"
  ];


  const [active,setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommend Products</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg,index)=>{
            return(
              <li className={active===index+1?'active':''}
              onClick={()=>setActive(index+1)}
              ></li>

            );
          })}
        </ul>
      </div>
      <div className="products">
        {
          data.map((product)=>{
            return(
              <div className="product">
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <p>{product.subtitle}</p>
                {/* <div className="info">
                  <img src={store} alt="" />
                  <img src={spa} alt="" />
                  <img src={pay} alt="" />
                </div> */}
                <h4>{product.cost}</h4>
              </div>
            )
          })
        }
      </div>

    </Section>
  );
}

const Section = styled.section`
 padding:2rem 0;
 .title{
   text-align:center;
 }
 .packages{
   display:flex;
   justify-content:center;
   margin:2rem 0;
   ul{
     display:flex;
     list-style-type:none;
     width:max-content;
     li{
       padding:1rem 2rem;
       border-bottom:0.1rem solid black;
     }
     .active{
       border-bottom:0.5rem solid #8338ec;
     }
   }
 }
.products{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:3rem;
  padding:0 3rem;
  .product{
    padding:1rem;
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    background-color:#8338ec14;
    border-radius:1rem;
    transition:0.3s ease-in-out;
    &:hover{
      transform:translate(0.4rem) translateY(-1rem);
      box-shadow:rgba(0,0,0,0.35)0px 5px 15px;
    }
    img{
      width:100%;
    }
    .info{
      display:flex;
      align-items:center;
      .services{
        display:flex;
        gap:0.3rem;
        img{
          width:2rem;
          border-radius:1rem;
          background-color:pink;
          padding:0.2rem 0.4rem;
        }
      }
      display:flex;
      justify-content:space-between;
    }
    .product{
      display:flex;
      justify-content:space-between;
    }
  }
}

@media screen and (min-width:280px) and (max-width:768px){
  .packages{
    ul{
      li{
        padding:0 0.5rem;
        font-size:2vh;
        padding-bottom:1rem;
      }
      .active{
        border-bottom-width:0.3rem;
      }
    }
  }
  .products{
    grid-template-columns:1fr;
    padding:0;
  }

}

`;