import React from 'react';
import Navbar from '../components/Navbar';
import Planswiper from '../components/Planswiper';
import './style.css';
import './Planning.css';

// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Planning_swiper.css";

import { useState } from 'react';
import Calendar from 'react-calendar';
import './Planning_calendar.css';

import Modal from 'react-modal';


function Planning(props) {

    const [value, onChange] = useState(new Date());

    const [modalIsOpen, setModalIsOpen] = useState(false);
    

    //날짜 선택
    // let setStartMonth=0;
    let setStartMonth;
    let setStartDate;
    


    const onClickComplete = (event) => {
        setStartMonth =  value.getMonth()+1;
        setStartDate =  value.getDate();
        
        console.log(setStartMonth);
        console.log(setStartDate);

        
        settest((prevState)=>{
            return{ ...prevState, dateM:setStartMonth}
        });
        settest((prevState)=>{
            return{ ...prevState, dateD:setStartDate}
        });

    }


    // 일정 추가하기
    let day;
    let start_time_h;
    let start_time_m;
    let end_time_h;
    let end_time_m;
    let schedule;
    let kategorie;

    const [test, settest] = useState({
        info1: '',
        info2: '',
        info3: '',
        info4: '',
        info5: '',
        info6: '',
        info7: '',
        dateM:'',
        dateD:'',
    });
    
    const putIn = () => {
        console.log("putin");
        console.log(day);
        console.log(start_time_h);
        console.log(start_time_m);
        console.log(end_time_h);
        console.log(end_time_m);
        console.log(schedule);
        console.log(kategorie);
        console.log(setStartDate);


        settest((prevState)=>{
            return{ ...prevState, info1:day}
        });
        settest((prevState)=>{
            return{ ...prevState, info2:start_time_h}
        });
        settest((prevState)=>{
            return{ ...prevState, info3: start_time_m}
        });
        settest((prevState)=>{
            return{ ...prevState, info4: end_time_h}
        });
        settest((prevState)=>{
            return{ ...prevState, info5: end_time_m}
        });
        settest((prevState)=>{
            return{ ...prevState, info6: schedule}
        });
        settest((prevState)=>{
            return{ ...prevState, info7: kategorie}
        });
    };

    
    const setAddDay = (event) => {
        day=event;
    }
    const onselectStartHour = (event) => {
        start_time_h=event.target.value;
    }
    const onselectStartMinute = (event) => {
        start_time_m=event.target.value;
    }
    const onselectEndHour = (event) => {
        end_time_h=event.target.value;
    }
    const onselectEndMinute = (event) => {
        end_time_m=event.target.value;
    }
    const setAddSchedule = event =>{
        schedule=event.target.value;
    }
    const setAddKategorie = (event) => {
        kategorie=event;
    }


 
    




    return (
        <div>
            <Navbar />
            <div id='plannig' className='inner'>
                <div id='calender'>
                        <p>일정을 추가할 날짜를 선택해주세요</p>
                        <button onClick={onClickComplete} className='btn' id='complete_btn'>선택완료</button>

                        <div>
                            <Calendar onChange={onChange} value={value} />
                                
                        </div>

                </div>
                
                

   

                <div id='plan'>
                    

                    <Planswiper test={test}></Planswiper>

                    <button onClick={()=> setModalIsOpen(true)} className='btn'>일정 추가하기</button>
                    <Modal 
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        style={
                            {
                                overlay: {
                                    backgroundColor: 'rgba(220,220,220, 0.5)',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    zIndex: 10
                                },
                                content: {
                                    flexDirection: 'column',
                                    backgroundColor: 'white',
                                    color: 'black',
                                    top: '25%',
                                    left: '610px',
                                    borderRadius: '10px',
                                    width: '700px',
                                    height: '415px',
                                    zIndex: 10,
                                    padding: '30px'
                                }
                            }
                        }



                        >

                    <h6 className='add_plan_title'>
                        일정 추가하기
                    <button onClick={() => setModalIsOpen(false)} style={{ float: 'right', border: 'none', backgroundColor: 'white' }}>
                        <img src='images/close_btn.png' alt=''></img></button>
                    </h6>

                    <div className='add_plan_box'>
                        <div>
                            <p>날짜</p>
                            <button onClick={()=> setAddDay(1)}>1일차</button>
                            <button onClick={()=> setAddDay(2)}>2일차</button>
                            <button onClick={()=> setAddDay(3)}>3일차</button>
                        </div>
                        <div>
                            <p>시간</p>
                            <div className='start_time'>
                                <select onChange={onselectStartHour} 
                                name='start_time' className='choicebox'>
                                    <option value="0">00시</option>
                                    <option value="1">01시</option>
                                    <option value="2">02시</option>
                                    <option value="3">03시</option>
                                    <option value="4">04시</option>
                                    <option value="5">05시</option>
                                    <option value="6">06시</option>
                                    <option value="7">07시</option>
                                    <option value="8">08시</option>
                                    <option value="9">09시</option>
                                    <option value="10">10시</option>
                                    <option value="11">11시</option>
                                    <option value="12">12시</option>
                                    <option value="13">13시</option>
                                    <option value="14">14시</option>
                                    <option value="15">15시</option>
                                    <option value="16">16시</option>
                                    <option value="17">17시</option>
                                    <option value="18">18시</option>
                                    <option value="19">19시</option>
                                    <option value="20">20시</option>
                                    <option value="21">21시</option>
                                    <option value="22">22시</option>
                                    <option value="23">23시</option>
                                </select>
                                <select onChange={onselectStartMinute} name='start_time' className='choicebox'>
                                    <option value="0">00분</option>
                                    <option value="10">10분</option>
                                    <option value="20">20분</option>
                                    <option value="30">30분</option>
                                    <option value="40">40분</option>
                                    <option value="50">50분</option>
                                </select>
                            </div>
                            <p>~</p>
                            <div className='end_time'>
                                <select onChange={onselectEndHour} name='end_time' className='choicebox'>
                                    <option value="00">00시</option>
                                    <option value="01">01시</option>
                                    <option value="02">02시</option>
                                    <option value="03">03시</option>
                                    <option value="04">04시</option>
                                    <option value="05">05시</option>
                                    <option value="06">06시</option>
                                    <option value="07">07시</option>
                                    <option value="08">08시</option>
                                    <option value="09">09시</option>
                                    <option value="10">10시</option>
                                    <option value="11">11시</option>
                                    <option value="12">12시</option>
                                    <option value="13">13시</option>
                                    <option value="14">14시</option>
                                    <option value="15">15시</option>
                                    <option value="16">16시</option>
                                    <option value="17">17시</option>
                                    <option value="18">18시</option>
                                    <option value="19">19시</option>
                                    <option value="20">20시</option>
                                    <option value="21">21시</option>
                                    <option value="22">22시</option>
                                    <option value="23">23시</option>
                                </select>
                                <select onChange={onselectEndMinute} name='end_time' className='choicebox'>
                                    <option value="00">00분</option>
                                    <option value="10">10분</option>
                                    <option value="20">20분</option>
                                    <option value="30">30분</option>
                                    <option value="40">40분</option>
                                    <option value="50">50분</option>
                                </select>
                            </div>
                            
                        </div>
                        <div>
                            <p>일정</p>
                            <form>
                                <input type="text" onChange={setAddSchedule} maxlength = "20"></input>
                            </form>
                        </div>
                        <div>
                            <p>분류</p>
                            <button onClick={()=> setAddKategorie('traffic')}><img src='images2/car.png' alt=''></img></button>
                            <button onClick={()=> setAddKategorie('food')}><img src='images2/food.png' alt=''></img></button>
                            <button onClick={()=> setAddKategorie('tour')}><img src='images2/beach-chair.png' alt=''></img></button>
                        </div>
                        <button id='put_in_btn' 
                        onClick={() =>{ setModalIsOpen(false); putIn()}}
                        >확인</button>
                    </div>

                    </Modal>
                    

                </div>
            </div>
            
        </div>
    );
}

export default Planning; 