import React,{useState,useEffect} from 'react'


import axios from 'axios';
import weatherStyle from '../Styles/Weather.module.css'

import ReactCountryFlag from "react-country-flag"









function Weather2() {

const [ar,setAr]=useState({})



const[city,setCity]=useState('Novi Sad')
const[inputValue,setInputValue]=useState('')

// Default on Loading and Eror

const[laz,setlaz]=useState(true)

const[defaultCity,setDefaultCity]=useState('')
const[defaultTemp,setDefaultTemp]=useState('')
const[defaultDescription,setDefaultDescription]=useState('')
const[defaultWind,setDefaultWind]=useState('')
const[defaultHumidity,setDefaultHumidity]=useState('')




//First row Varibles

const[temp,setTemp]=useState('')
const[description,setDescription]=useState('')
const[wind,setWind]=useState('')
const[humidity,setHumidity]=useState('')
const[flag,setFlag]=useState('rs')


//Day 1 Varibles

const[day1Date,setDay1Date]=useState('')
const[day1Image,setDay1Image]=useState('')
const[day1Temp,setDay1Temp]=useState('')
const[day1Pressure,setDay1Pressure]=useState('')
const[day1Desc,setDay1Desc]=useState('')
const[day1Wind,setDay1Wind]=useState('')




//Day 2 Varibles

const[day2Date,setDay2Date]=useState('')
const[day2Image,setDay2Image]=useState('')
const[day2Temp,setDay2Temp]=useState('')
const[day2Pressure,setDay2Pressure]=useState('')
const[day2Desc,setDay2Desc]=useState('')
const[day2Wind,setDay2Wind]=useState('')






//Day 3 Varibles

const[day3Date,setDay3Date]=useState('')
const[day3Image,setDay3Image]=useState('')
const[day3Temp,setDay3Temp]=useState('')
const[day3Pressure,setDay3Pressure]=useState('')
const[day3Desc,setDay3Desc]=useState('')
const[day3Wind,setDay3Wind]=useState('')







//Day 4 Varibles

const[day4Date,setDay4Date]=useState('')
const[day4Image,setDay4Image]=useState('')
const[day4Temp,setDay4Temp]=useState('')
const[day4Pressure,setDay4Pressure]=useState('')
const[day4Desc,setDay4Desc]=useState('')
const[day4Wind,setDay4Wind]=useState('')







//Day 5 Varibles

const[day5Date,setDay5Date]=useState('')
const[day5Image,setDay5Image]=useState('')
const[day5Temp,setDay5Temp]=useState('')
const[day5Pressure,setDay5Pressure]=useState('')
const[day5Desc,setDay5Desc]=useState('')
const[day5Wind,setDay5Wind]=useState('')











useEffect(async () => {


 axios.all([

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`),
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`)

])
 .then(axios.spread((firstReq, secoondReq) => {


  

      // Default Varibales
      setDefaultCity(firstReq.data.name)
      setDefaultTemp(firstReq.data.main.temp)
      setDefaultDescription(firstReq.data.weather[0].description)
      setDefaultWind(firstReq.data.wind.speed)
      setDefaultHumidity(firstReq.data.main.humidity)


 



    //First Row items


     setCity(firstReq.data.name)
     setTemp(firstReq.data.main.temp)
     setDescription(firstReq.data.weather[0].description)
     setWind(firstReq.data.wind.speed)
     setHumidity(firstReq.data.main.humidity)
     setFlag(firstReq.data.sys.country)




     //Day 1 Items

     setDay1Date(secoondReq.data.list[6].dt_txt)
     setDay1Image(`https://openweathermap.org/img/w/${secoondReq.data.list[6].weather[0].icon}.png`)
     setDay1Temp(secoondReq.data.list[6].main.temp_max)
     setDay1Pressure(secoondReq.data.list[6].main.pressure)
     setDay1Desc(secoondReq.data.list[6].weather[0].description)
     setDay1Wind(secoondReq.data.list[6].wind.speed)



       //Day 2 Items

     setDay2Date(secoondReq.data.list[14].dt_txt)
     setDay2Image(`https://openweathermap.org/img/w/${secoondReq.data.list[14].weather[0].icon}.png`)
     setDay2Temp(secoondReq.data.list[14].main.temp_max)
     setDay2Pressure(secoondReq.data.list[14].main.pressure)
     setDay2Desc(secoondReq.data.list[14].weather[0].description)
     setDay2Wind(secoondReq.data.list[14].wind.speed)






     
       //Day 3 Items

     setDay3Date(secoondReq.data.list[22].dt_txt)
     setDay3Image(`https://openweathermap.org/img/w/${secoondReq.data.list[22].weather[0].icon}.png`)
     setDay3Temp(secoondReq.data.list[22].main.temp_max)
     setDay3Pressure(secoondReq.data.list[22].main.pressure)
     setDay3Desc(secoondReq.data.list[22].weather[0].description)
     setDay3Wind(secoondReq.data.list[22].wind.speed)






      
       //Day 4 Items

     setDay4Date(secoondReq.data.list[30].dt_txt)
     setDay4Image(`https://openweathermap.org/img/w/${secoondReq.data.list[30].weather[0].icon}.png`)
     setDay4Temp(secoondReq.data.list[30].main.temp_max)
     setDay4Pressure(secoondReq.data.list[30].main.pressure)
     setDay4Desc(secoondReq.data.list[30].weather[0].description)
     setDay4Wind(secoondReq.data.list[30].wind.speed)






       
       //Day 5 Items

     setDay5Date(secoondReq.data.list[38].dt_txt)
     setDay5Image(`https://openweathermap.org/img/w/${secoondReq.data.list[38].weather[0].icon}.png`)
     setDay5Temp(secoondReq.data.list[38].main.temp_max)
     setDay5Pressure(secoondReq.data.list[38].main.pressure)
     setDay5Desc(secoondReq.data.list[38].weather[0].description)
     setDay5Wind(secoondReq.data.list[38].wind.speed)






   
    }))
    .catch((error)=>{ 

       if (error.response.status == 404) {


      setlaz(false)
      window.location='/'

    
      
     }

      
     })



  return () => {
    setAr({})
  }
}, [])





  
    function getUserCityName(a) {


      a.preventDefault()


      axios.all([

           axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`),
           axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`)

        ])
           .then(axios.spread((firstReq, secoondReq) => {

           

              let input =document.getElementById('inputValue')

               setCity(firstReq.data.name)

                setlaz(true)






                 // Default Varibales
      setDefaultCity(firstReq.data.name)
      setDefaultTemp(firstReq.data.main.temp)
      setDefaultDescription(firstReq.data.weather[0].description)
      setDefaultWind(firstReq.data.wind.speed)
      setDefaultHumidity(firstReq.data.main.humidity)
      setFlag(firstReq.data.sys.country)


 



    //First Row items


     setCity(firstReq.data.name)
     setTemp(firstReq.data.main.temp)
     setDescription(firstReq.data.weather[0].description)
     setWind(firstReq.data.wind.speed)
     setHumidity(firstReq.data.main.humidity)



     //Day 1 Items

     setDay1Date(secoondReq.data.list[6].dt_txt)
     setDay1Image(`https://openweathermap.org/img/w/${secoondReq.data.list[6].weather[0].icon}.png`)
     setDay1Temp(secoondReq.data.list[6].main.temp_max)
     setDay1Pressure(secoondReq.data.list[6].main.pressure)
     setDay1Desc(secoondReq.data.list[6].weather[0].description)
     setDay1Wind(secoondReq.data.list[6].wind.speed)



       //Day 2 Items

     setDay2Date(secoondReq.data.list[14].dt_txt)
     setDay2Image(`https://openweathermap.org/img/w/${secoondReq.data.list[14].weather[0].icon}.png`)
     setDay2Temp(secoondReq.data.list[14].main.temp_max)
     setDay2Pressure(secoondReq.data.list[14].main.pressure)
     setDay2Desc(secoondReq.data.list[14].weather[0].description)
     setDay2Wind(secoondReq.data.list[14].wind.speed)






     
       //Day 3 Items

     setDay3Date(secoondReq.data.list[22].dt_txt)
     setDay3Image(`https://openweathermap.org/img/w/${secoondReq.data.list[22].weather[0].icon}.png`)
     setDay3Temp(secoondReq.data.list[22].main.temp_max)
     setDay3Pressure(secoondReq.data.list[22].main.pressure)
     setDay3Desc(secoondReq.data.list[22].weather[0].description)
     setDay3Wind(secoondReq.data.list[22].wind.speed)






      
       //Day 4 Items

     setDay4Date(secoondReq.data.list[30].dt_txt)
     setDay4Image(`https://openweathermap.org/img/w/${secoondReq.data.list[30].weather[0].icon}.png`)
     setDay4Temp(secoondReq.data.list[30].main.temp_max)
     setDay4Pressure(secoondReq.data.list[30].main.pressure)
     setDay4Desc(secoondReq.data.list[30].weather[0].description)
     setDay4Wind(secoondReq.data.list[30].wind.speed)






       
       //Day 5 Items

     setDay5Date(secoondReq.data.list[38].dt_txt)
     setDay5Image(`https://openweathermap.org/img/w/${secoondReq.data.list[38].weather[0].icon}.png`)
     setDay5Temp(secoondReq.data.list[38].main.temp_max)
     setDay5Pressure(secoondReq.data.list[38].main.pressure)
     setDay5Desc(secoondReq.data.list[38].weather[0].description)
     setDay5Wind(secoondReq.data.list[38].wind.speed)






           


              input.value=''
        }))
       .catch(error=>{ 

         let input =document.getElementById('inputValue')
         input.value=''
       

         if (error.response.status === 404) {

         

          setlaz(false)
          // window.location='/'
          
         }

  

          
     

      
        })
   


  
        
        }
 


  return (
    <div className={weatherStyle.main}>


      <div className={weatherStyle.firstDiv}> 
              <div className={weatherStyle.logo}> Weather App</div>
              <form className={weatherStyle.input} onSubmit={getUserCityName}> <input type="text" placeholder='  Enter City...' id='inputValue' onChange={(a)=>{setInputValue(a.target.value)}} /> <button type='submit'>Search</button></form>  
    </div>




    <div className={weatherStyle.secondDiv}>

             <div>{city} <ReactCountryFlag countryCode={flag} svg/></div>
             <div> {Math.floor(temp)+ '\xB0'}</div>
             <div>{description}</div>
             <div>Wind : {wind} m/s</div>
             <div>Humidity : {humidity} %</div>



    </div>







    {laz  ?







      <div className={weatherStyle.threddDiv}>




            <div className={weatherStyle.threddDivItems}>

                  <span>{day1Date.slice(8,10)}.{day1Date.slice(5,7)}  | {day1Date.slice(0,4)}  |  {day1Date.slice(10,16)}</span>  
                  {Math.floor(day1Temp)+'\xB0'}  
                 <span>{day1Wind}/ms  <span className={weatherStyle.weatherComment} >{day1Desc}</span>   {day1Pressure} mb </span>
                  <img src={day1Image} alt="Weather" />
                                         
            </div>






            <div className={weatherStyle.threddDivItems}>

                  <span>{day2Date.slice(8,10)}.{day2Date.slice(5,7)}  | {day2Date.slice(0,4)}  |  {day2Date.slice(10,16)}</span>  
                  {Math.floor(day2Temp)+'\xB0'}  
                 <span>{day2Wind}/ms <span className={weatherStyle.weatherComment} >{day2Desc}</span>   {day2Pressure} mb </span>
                  <img src={day2Image} alt="Weather" />
                                         
            </div>




              <div className={weatherStyle.threddDivItems}>

                  <span>{day3Date.slice(8,10)}.{day3Date.slice(5,7)}  | {day3Date.slice(0,4)}  |  {day3Date.slice(10,16)}</span>  
                  {Math.floor(day3Temp)+'\xB0'}  
                 <span>{day3Wind}/ms <span className={weatherStyle.weatherComment} >{day3Desc}</span>   {day3Pressure} mb </span>
                  <img src={day3Image} alt="Weather" />
                                         
            </div>



            
              <div className={weatherStyle.threddDivItems}>

                  <span>{day4Date.slice(8,10)}.{day4Date.slice(5,7)}  | {day4Date.slice(0,4)}  |  {day4Date.slice(10,16)}</span>  
                  {Math.floor(day4Temp)+'\xB0'}  
                 <span>{day4Wind}/ms <span className={weatherStyle.weatherComment} >{day4Desc}</span>   {day4Pressure} mb </span>
                  <img src={day4Image} alt="Weather" />
                                         
            </div>






             <div className={weatherStyle.threddDivItems}>

                  <span>{day5Date.slice(8,10)}.{day5Date.slice(5,7)}  | {day5Date.slice(0,4)}  |  {day5Date.slice(10,16)}</span>  
                  {Math.floor(day5Temp)+'\xB0'}  
                 <span>{day5Wind}/ms <span className={weatherStyle.weatherComment} >{day5Desc}</span>   {day5Pressure} mb </span>
                  <img src={day5Image} alt="Weather" />
                                         
            </div>





           
             
                    
                
                    
                
             
            
          </div>  



: <div className={weatherStyle.notFound} >Not Found!</div> }






        <div className={weatherStyle.empdtyDiv}>

        </div>
      




    </div>
  )
}

export default Weather2
