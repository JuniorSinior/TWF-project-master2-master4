import React from 'react';
// import '../pages/Planswiper.css'
import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react"; 
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Planning_swiper.css";

import { useState } from 'react';




function Planswiper({test}) {
    var plancontent=[test.info1, test.info2, test.info3, test.info4, test.info5, test.info6, test.info7, test.dateM, test.dateD];

    const [day1, setday1] = useState({
        obj0: {time: '', schedule:'', kategorie:''},
        obj1: {time: '', schedule:'', kategorie:''},
        obj2: {time: '', schedule:'', kategorie:''},
        obj3: {time: '', schedule:'', kategorie:''},
        obj4: {time: '', schedule:'', kategorie:''},

        obj5: {time: '', schedule:'', kategorie:''},
        obj6: {time: '', schedule:'', kategorie:''},
        obj7: {time: '', schedule:'', kategorie:''},
        obj8: {time: '', schedule:'', kategorie:''},
        obj9: {time: '', schedule:'', kategorie:''},

        obj10: {time: '', schedule:'', kategorie:''},
        obj11: {time: '', schedule:'', kategorie:''},
        obj12: {time: '', schedule:'', kategorie:''},
        obj13: {time: '', schedule:'', kategorie:''},
        obj14: {time: '', schedule:'', kategorie:''},

        obj15: {time: '', schedule:'', kategorie:''},
        obj16: {time: '', schedule:'', kategorie:''},
        obj17: {time: '', schedule:'', kategorie:''},
        obj18: {time: '', schedule:'', kategorie:''},
        obj19: {time: '', schedule:'', kategorie:''},

        obj20: {time: '', schedule:'', kategorie:''},
        obj21: {time: '', schedule:'', kategorie:''},
        obj22: {time: '', schedule:'', kategorie:''},
        obj23: {time: '', schedule:'', kategorie:''},

    });
    const [day2, setday2] = useState({
        obj0: {time: '', schedule:'', kategorie:''},
        obj1: {time: '', schedule:'', kategorie:''},
        obj2: {time: '', schedule:'', kategorie:''},
        obj3: {time: '', schedule:'', kategorie:''},
        obj4: {time: '', schedule:'', kategorie:''},

        obj5: {time: '', schedule:'', kategorie:''},
        obj6: {time: '', schedule:'', kategorie:''},
        obj7: {time: '', schedule:'', kategorie:''},
        obj8: {time: '', schedule:'', kategorie:''},
        obj9: {time: '', schedule:'', kategorie:''},

        obj10: {time: '', schedule:'', kategorie:''},
        obj11: {time: '', schedule:'', kategorie:''},
        obj12: {time: '', schedule:'', kategorie:''},
        obj13: {time: '', schedule:'', kategorie:''},
        obj14: {time: '', schedule:'', kategorie:''},

        obj15: {time: '', schedule:'', kategorie:''},
        obj16: {time: '', schedule:'', kategorie:''},
        obj17: {time: '', schedule:'', kategorie:''},
        obj18: {time: '', schedule:'', kategorie:''},
        obj19: {time: '', schedule:'', kategorie:''},

        obj20: {time: '', schedule:'', kategorie:''},
        obj21: {time: '', schedule:'', kategorie:''},
        obj22: {time: '', schedule:'', kategorie:''},
        obj23: {time: '', schedule:'', kategorie:''},

    });
    const [day3, setday3] = useState({
        obj0: {time: '', schedule:'', kategorie:''},
        obj1: {time: '', schedule:'', kategorie:''},
        obj2: {time: '', schedule:'', kategorie:''},
        obj3: {time: '', schedule:'', kategorie:''},
        obj4: {time: '', schedule:'', kategorie:''},

        obj5: {time: '', schedule:'', kategorie:''},
        obj6: {time: '', schedule:'', kategorie:''},
        obj7: {time: '', schedule:'', kategorie:''},
        obj8: {time: '', schedule:'', kategorie:''},
        obj9: {time: '', schedule:'', kategorie:''},

        obj10: {time: '', schedule:'', kategorie:''},
        obj11: {time: '', schedule:'', kategorie:''},
        obj12: {time: '', schedule:'', kategorie:''},
        obj13: {time: '', schedule:'', kategorie:''},
        obj14: {time: '', schedule:'', kategorie:''},

        obj15: {time: '', schedule:'', kategorie:''},
        obj16: {time: '', schedule:'', kategorie:''},
        obj17: {time: '', schedule:'', kategorie:''},
        obj18: {time: '', schedule:'', kategorie:''},
        obj19: {time: '', schedule:'', kategorie:''},

        obj20: {time: '', schedule:'', kategorie:''},
        obj21: {time: '', schedule:'', kategorie:''},
        obj22: {time: '', schedule:'', kategorie:''},
        obj23: {time: '', schedule:'', kategorie:''},

    });

    if( plancontent[0]=='1'){

        
        if (plancontent[1]==0) {
            day1.obj0.time = plancontent[2];
            day1.obj0.schedule = plancontent[5];
            day1.obj0.kategorie = plancontent[6];
        }else if (plancontent[1]==1) {
            day1.obj1.time = plancontent[2];
            day1.obj1.schedule = plancontent[5];
            day1.obj1.kategorie = plancontent[6];
        }else if (plancontent[1]==2) {
            day1.obj2.time = plancontent[2];
            day1.obj2.schedule = plancontent[5];
            day1.obj2.kategorie = plancontent[6];
        }else if (plancontent[1]==3) {
            day1.obj3.time = plancontent[2];
            day1.obj3.schedule = plancontent[5];
            day1.obj3.kategorie = plancontent[6];
        }else if (plancontent[1]==4) {
            day1.obj4.time = plancontent[2];
            day1.obj4.schedule = plancontent[5];
            day1.obj4.kategorie = plancontent[6];
        }else if (plancontent[1]==5) {
            day1.obj5.time = plancontent[2];
            day1.obj5.schedule = plancontent[5];
            day1.obj5.kategorie = plancontent[6];
        }else if (plancontent[1]==6) {
            day1.obj6.time = plancontent[2];
            day1.obj6.schedule = plancontent[5];
            day1.obj6.kategorie = plancontent[6];
        }else if (plancontent[1]==7) {
            day1.obj7.time = plancontent[2];
            day1.obj7.schedule = plancontent[5];
            day1.obj7.kategorie = plancontent[6];
        }else if (plancontent[1]==8) {
            day1.obj8.time = plancontent[2];
            day1.obj8.schedule = plancontent[5];
            day1.obj8.kategorie = plancontent[6];
        }else if (plancontent[1]==9) {
            day1.obj9.time = plancontent[2];
            day1.obj9.schedule = plancontent[5];
            day1.obj9.kategorie = plancontent[6];
        }else if (plancontent[1]==10) {
            day1.obj10.time = plancontent[2];
            day1.obj10.schedule = plancontent[5];
            day1.obj10.kategorie = plancontent[6];
        }else if (plancontent[1]==11) {
            day1.obj11.time = plancontent[2];
            day1.obj11.schedule = plancontent[5];
            day1.obj11.kategorie = plancontent[6];
        }else if (plancontent[1]==12) {
            day1.obj12.time = plancontent[2];
            day1.obj12.schedule = plancontent[5];
            day1.obj12.kategorie = plancontent[6];
        }else if (plancontent[1]==13) {
            day1.obj13.time = plancontent[2];
            day1.obj13.schedule = plancontent[5];
            day1.obj13.kategorie = plancontent[6];
        }else if (plancontent[1]==14) {
            day1.obj14.time = plancontent[2];
            day1.obj14.schedule = plancontent[5];
            day1.obj14.kategorie = plancontent[6];
        }else if (plancontent[1]==15) {
            day1.obj15.time = plancontent[2];
            day1.obj15.schedule = plancontent[5];
            day1.obj15.kategorie = plancontent[6];
        }else if (plancontent[1]==16) {
            day1.obj16.time = plancontent[2];
            day1.obj16.schedule = plancontent[5];
            day1.obj16.kategorie = plancontent[6];
        }else if (plancontent[1]==17) {
            day1.obj17.time = plancontent[2];
            day1.obj17.schedule = plancontent[5];
            day1.obj17.kategorie = plancontent[6];
        }else if (plancontent[1]==18) {
            day1.obj18.time = plancontent[2];
            day1.obj18.schedule = plancontent[5];
            day1.obj18.kategorie = plancontent[6];
        }else if (plancontent[1]==19) {
            day1.obj19.time = plancontent[2];
            day1.obj19.schedule = plancontent[5];
            day1.obj19.kategorie = plancontent[6];
        }else if (plancontent[1]==20) {
            day1.obj20.time = plancontent[2];
            day1.obj20.schedule = plancontent[5];
            day1.obj20.kategorie = plancontent[6];
        }else if (plancontent[1]==21) {
            day1.obj21.time = plancontent[2];
            day1.obj21.schedule = plancontent[5];
            day1.obj21.kategorie = plancontent[6];
        }else if (plancontent[1]==22) {
            day1.obj22.time = plancontent[2];
            day1.obj22.schedule = plancontent[5];
            day1.obj22.kategorie = plancontent[6];
        }else if (plancontent[1]==23) {
            day1.obj23.time = plancontent[2];
            day1.obj23.schedule = plancontent[5];
            day1.obj23.kategorie = plancontent[6];
        }

    };

    if( plancontent[0]=='2'){

        
        if (plancontent[1]==0) {
            day2.obj0.time = plancontent[2];
            day2.obj0.schedule = plancontent[5];
            day2.obj0.kategorie = plancontent[6];
        }else if (plancontent[1]==1) {
            day2.obj1.time = plancontent[2];
            day2.obj1.schedule = plancontent[5];
            day2.obj1.kategorie = plancontent[6];
        }else if (plancontent[1]==2) {
            day2.obj2.time = plancontent[2];
            day2.obj2.schedule = plancontent[5];
            day2.obj2.kategorie = plancontent[6];
        }else if (plancontent[1]==3) {
            day2.obj3.time = plancontent[2];
            day2.obj3.schedule = plancontent[5];
            day2.obj3.kategorie = plancontent[6];
        }else if (plancontent[1]==4) {
            day2.obj4.time = plancontent[2];
            day2.obj4.schedule = plancontent[5];
            day2.obj4.kategorie = plancontent[6];
        }else if (plancontent[1]==5) {
            day2.obj5.time = plancontent[2];
            day2.obj5.schedule = plancontent[5];
            day2.obj5.kategorie = plancontent[6];
        }else if (plancontent[1]==6) {
            day2.obj6.time = plancontent[2];
            day2.obj6.schedule = plancontent[5];
            day2.obj6.kategorie = plancontent[6];
        }else if (plancontent[1]==7) {
            day2.obj7.time = plancontent[2];
            day2.obj7.schedule = plancontent[5];
            day2.obj7.kategorie = plancontent[6];
        }else if (plancontent[1]==8) {
            day2.obj8.time = plancontent[2];
            day2.obj8.schedule = plancontent[5];
            day2.obj8.kategorie = plancontent[6];
        }else if (plancontent[1]==9) {
            day2.obj9.time = plancontent[2];
            day2.obj9.schedule = plancontent[5];
            day2.obj9.kategorie = plancontent[6];
        }else if (plancontent[1]==10) {
            day2.obj10.time = plancontent[2];
            day2.obj10.schedule = plancontent[5];
            day2.obj10.kategorie = plancontent[6];
        }else if (plancontent[1]==11) {
            day2.obj11.time = plancontent[2];
            day2.obj11.schedule = plancontent[5];
            day2.obj11.kategorie = plancontent[6];
        }else if (plancontent[1]==12) {
            day2.obj12.time = plancontent[2];
            day2.obj12.schedule = plancontent[5];
            day2.obj12.kategorie = plancontent[6];
        }else if (plancontent[1]==13) {
            day2.obj13.time = plancontent[2];
            day2.obj13.schedule = plancontent[5];
            day2.obj13.kategorie = plancontent[6];
        }else if (plancontent[1]==14) {
            day2.obj14.time = plancontent[2];
            day2.obj14.schedule = plancontent[5];
            day2.obj14.kategorie = plancontent[6];
        }else if (plancontent[1]==15) {
            day2.obj15.time = plancontent[2];
            day2.obj15.schedule = plancontent[5];
            day2.obj15.kategorie = plancontent[6];
        }else if (plancontent[1]==16) {
            day2.obj16.time = plancontent[2];
            day2.obj16.schedule = plancontent[5];
            day2.obj16.kategorie = plancontent[6];
        }else if (plancontent[1]==17) {
            day2.obj17.time = plancontent[2];
            day2.obj17.schedule = plancontent[5];
            day2.obj17.kategorie = plancontent[6];
        }else if (plancontent[1]==18) {
            day2.obj18.time = plancontent[2];
            day2.obj18.schedule = plancontent[5];
            day2.obj18.kategorie = plancontent[6];
        }else if (plancontent[1]==19) {
            day2.obj19.time = plancontent[2];
            day2.obj19.schedule = plancontent[5];
            day2.obj19.kategorie = plancontent[6];
        }else if (plancontent[1]==20) {
            day2.obj20.time = plancontent[2];
            day2.obj20.schedule = plancontent[5];
            day2.obj20.kategorie = plancontent[6];
        }else if (plancontent[1]==21) {
            day2.obj21.time = plancontent[2];
            day2.obj21.schedule = plancontent[5];
            day2.obj21.kategorie = plancontent[6];
        }else if (plancontent[1]==22) {
            day2.obj22.time = plancontent[2];
            day2.obj22.schedule = plancontent[5];
            day2.obj22.kategorie = plancontent[6];
        }else if (plancontent[1]==23) {
            day2.obj23.time = plancontent[2];
            day2.obj23.schedule = plancontent[5];
            day2.obj23.kategorie = plancontent[6];
        }

    };

    if( plancontent[0]=='3'){

        
        if (plancontent[1]==0) {
            day3.obj0.time = plancontent[2];
            day3.obj0.schedule = plancontent[5];
            day3.obj0.kategorie = plancontent[6];
        }else if (plancontent[1]==1) {
            day3.obj1.time = plancontent[2];
            day3.obj1.schedule = plancontent[5];
            day3.obj1.kategorie = plancontent[6];
        }else if (plancontent[1]==2) {
            day3.obj2.time = plancontent[2];
            day3.obj2.schedule = plancontent[5];
            day3.obj2.kategorie = plancontent[6];
        }else if (plancontent[1]==3) {
            day3.obj3.time = plancontent[2];
            day3.obj3.schedule = plancontent[5];
            day3.obj3.kategorie = plancontent[6];
        }else if (plancontent[1]==4) {
            day3.obj4.time = plancontent[2];
            day3.obj4.schedule = plancontent[5];
            day3.obj4.kategorie = plancontent[6];
        }else if (plancontent[1]==5) {
            day3.obj5.time = plancontent[2];
            day3.obj5.schedule = plancontent[5];
            day3.obj5.kategorie = plancontent[6];
        }else if (plancontent[1]==6) {
            day3.obj6.time = plancontent[2];
            day3.obj6.schedule = plancontent[5];
            day3.obj6.kategorie = plancontent[6];
        }else if (plancontent[1]==7) {
            day3.obj7.time = plancontent[2];
            day3.obj7.schedule = plancontent[5];
            day3.obj7.kategorie = plancontent[6];
        }else if (plancontent[1]==8) {
            day3.obj8.time = plancontent[2];
            day3.obj8.schedule = plancontent[5];
            day3.obj8.kategorie = plancontent[6];
        }else if (plancontent[1]==9) {
            day3.obj9.time = plancontent[2];
            day3.obj9.schedule = plancontent[5];
            day3.obj9.kategorie = plancontent[6];
        }else if (plancontent[1]==10) {
            day3.obj10.time = plancontent[2];
            day3.obj10.schedule = plancontent[5];
            day3.obj10.kategorie = plancontent[6];
        }else if (plancontent[1]==11) {
            day3.obj11.time = plancontent[2];
            day3.obj11.schedule = plancontent[5];
            day3.obj11.kategorie = plancontent[6];
        }else if (plancontent[1]==12) {
            day3.obj12.time = plancontent[2];
            day3.obj12.schedule = plancontent[5];
            day3.obj12.kategorie = plancontent[6];
        }else if (plancontent[1]==13) {
            day3.obj13.time = plancontent[2];
            day3.obj13.schedule = plancontent[5];
            day3.obj13.kategorie = plancontent[6];
        }else if (plancontent[1]==14) {
            day3.obj14.time = plancontent[2];
            day3.obj14.schedule = plancontent[5];
            day3.obj14.kategorie = plancontent[6];
        }else if (plancontent[1]==15) {
            day3.obj15.time = plancontent[2];
            day3.obj15.schedule = plancontent[5];
            day3.obj15.kategorie = plancontent[6];
        }else if (plancontent[1]==16) {
            day3.obj16.time = plancontent[2];
            day3.obj16.schedule = plancontent[5];
            day3.obj16.kategorie = plancontent[6];
        }else if (plancontent[1]==17) {
            day3.obj17.time = plancontent[2];
            day3.obj17.schedule = plancontent[5];
            day3.obj17.kategorie = plancontent[6];
        }else if (plancontent[1]==18) {
            day3.obj18.time = plancontent[2];
            day3.obj18.schedule = plancontent[5];
            day3.obj18.kategorie = plancontent[6];
        }else if (plancontent[1]==19) {
            day3.obj19.time = plancontent[2];
            day3.obj19.schedule = plancontent[5];
            day3.obj19.kategorie = plancontent[6];
        }else if (plancontent[1]==20) {
            day3.obj20.time = plancontent[2];
            day3.obj20.schedule = plancontent[5];
            day3.obj20.kategorie = plancontent[6];
        }else if (plancontent[1]==21) {
            day3.obj21.time = plancontent[2];
            day3.obj21.schedule = plancontent[5];
            day3.obj21.kategorie = plancontent[6];
        }else if (plancontent[1]==22) {
            day3.obj22.time = plancontent[2];
            day3.obj22.schedule = plancontent[5];
            day3.obj22.kategorie = plancontent[6];
        }else if (plancontent[1]==23) {
            day3.obj23.time = plancontent[2];
            day3.obj23.schedule = plancontent[5];
            day3.obj23.kategorie = plancontent[6];
        }

    };

    return (
        <div id='plan'>
                    <form>
                        <input type="text" maxlength = "10" placeholder='여행일정표'></input>
                    </form>
                    
                    <div className='plan_swiper' >
                            

                    <>
                    
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        pagination={{clickable: true,}}

                        slidesOffsetBefore={350}
                        centeredSlides={true}

                        slideToClickedSlide = {true}

                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                            <table class="tg">
                                <thead>
                                <tr>
                                    <th class="tg-th-1" colspan="2">{
                                        plancontent[8] >= 1
                                        ? <span>{plancontent[7]}/{plancontent[8]}</span>
                                        : <span>00/00</span>
                                    }</th>
                                    <th class="tg-th-2">일정</th>
                                    <th class="tg-th-3">분류</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="tg-td, tg-td-1">0</td>
                                    <td class="tg-td">{day1.obj0.time}</td>
                                    <td class="tg-td">{day1.obj0.schedule}</td>
                                    <td class="tg-td">{day1.obj0.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">1</td>
                                    <td class="tg-td">{day1.obj1.time}</td>
                                    <td class="tg-td">{day1.obj1.schedule}</td>
                                    <td class="tg-td">{day1.obj1.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">2</td>
                                    <td class="tg-td">{day1.obj2.time}</td>
                                    <td class="tg-td">{day1.obj2.schedule}</td>
                                    <td class="tg-td">{day1.obj2.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">3</td>
                                    <td class="tg-td">{day1.obj3.time}</td>
                                    <td class="tg-td">{day1.obj3.schedule}</td>
                                    <td class="tg-td">{day1.obj3.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">4</td>
                                    <td class="tg-td">{day1.obj4.time}</td>
                                    <td class="tg-td">{day1.obj4.schedule}</td>
                                    <td class="tg-td">{day1.obj4.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">5</td>
                                    <td class="tg-td">{day1.obj5.time}</td>
                                    <td class="tg-td">{day1.obj5.schedule}</td>
                                    <td class="tg-td">{day1.obj5.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">6</td>
                                    <td class="tg-td">{day1.obj6.time}</td>
                                    <td class="tg-td">{day1.obj6.schedule}</td>
                                    <td class="tg-td">{day1.obj6.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">7</td>
                                    <td class="tg-td">{day1.obj7.time}</td>
                                    <td class="tg-td">{day1.obj7.schedule}</td>
                                    <td class="tg-td">{day1.obj7.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">8</td>
                                    <td class="tg-td">{day1.obj8.time}</td>
                                    <td class="tg-td">{day1.obj8.schedule}</td>
                                    <td class="tg-td">{day1.obj8.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">9</td>
                                    <td class="tg-td">{day1.obj9.time}</td>
                                    <td class="tg-td">{day1.obj9.schedule}</td>
                                    <td class="tg-td">{day1.obj9.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">10</td>
                                    <td class="tg-td">{day1.obj10.time}</td>
                                    <td class="tg-td">{day1.obj10.schedule}</td>
                                    <td class="tg-td">{day1.obj10.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">11</td>
                                    <td class="tg-td">{day1.obj11.time}</td>
                                    <td class="tg-td">{day1.obj11.schedule}</td>
                                    <td class="tg-td">{day1.obj11.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">12</td>
                                    <td class="tg-td">{day1.obj12.time}</td>
                                    <td class="tg-td">{day1.obj12.schedule}</td>
                                    <td class="tg-td">{day1.obj12.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">13</td>
                                    <td class="tg-td">{day1.obj13.time}</td>
                                    <td class="tg-td">{day1.obj13.schedule}</td>
                                    <td class="tg-td">{day1.obj13.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">14</td>
                                    <td class="tg-td">{day1.obj14.time}</td>
                                    <td class="tg-td">{day1.obj14.schedule}</td>
                                    <td class="tg-td">{day1.obj14.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">15</td>
                                    <td class="tg-td">{day1.obj15.time}</td>
                                    <td class="tg-td">{day1.obj15.schedule}</td>
                                    <td class="tg-td">{day1.obj15.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">16</td>
                                    <td class="tg-td">{day1.obj16.time}</td>
                                    <td class="tg-td">{day1.obj16.schedule}</td>
                                    <td class="tg-td">{day1.obj16.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">17</td>
                                    <td class="tg-td">{day1.obj17.time}</td>
                                    <td class="tg-td">{day1.obj17.schedule}</td>
                                    <td class="tg-td">{day1.obj17.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">18</td>
                                    <td class="tg-td">{day1.obj18.time}</td>
                                    <td class="tg-td">{day1.obj18.schedule}</td>
                                    <td class="tg-td">{day1.obj18.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">19</td>
                                    <td class="tg-td">{day1.obj19.time}</td>
                                    <td class="tg-td">{day1.obj19.schedule}</td>
                                    <td class="tg-td">{day1.obj19.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">20</td>
                                    <td class="tg-td">{day1.obj20.time}</td>
                                    <td class="tg-td">{day1.obj20.schedule}</td>
                                    <td class="tg-td">{day1.obj20.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">21</td>
                                    <td class="tg-td">{day1.obj21.time}</td>
                                    <td class="tg-td">{day1.obj21.schedule}</td>
                                    <td class="tg-td">{day1.obj21.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">22</td>
                                    <td class="tg-td">{day1.obj22.time}</td>
                                    <td class="tg-td">{day1.obj22.schedule}</td>
                                    <td class="tg-td">{day1.obj22.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">23</td>
                                    <td class="tg-td">{day1.obj23.time}</td>
                                    <td class="tg-td">{day1.obj23.schedule}</td>
                                    <td class="tg-td">{day1.obj23.kategorie}</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                            <table class="tg">
                                <thead>
                                <tr>
                                    <th class="tg-th-1" colspan="2">{
                                        plancontent[8] +1 == 32
                                        ?<span>{plancontent[7]+1}/1</span>
                                        : ( plancontent[8] >= 1
                                            ? <span>{plancontent[7]}/{plancontent[8]+1}</span>
                                            :<span>00/00</span>)
                                    }</th>
                                    <th class="tg-th-2">일정</th>
                                    <th class="tg-th-3">분류</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="tg-td, tg-td-1">0</td>
                                    <td class="tg-td">{day2.obj0.time}</td>
                                    <td class="tg-td">{day2.obj0.schedule}</td>
                                    <td class="tg-td">{day2.obj0.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">1</td>
                                    <td class="tg-td">{day2.obj1.time}</td>
                                    <td class="tg-td">{day2.obj1.schedule}</td>
                                    <td class="tg-td">{day2.obj1.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">2</td>
                                    <td class="tg-td">{day2.obj2.time}</td>
                                    <td class="tg-td">{day2.obj2.schedule}</td>
                                    <td class="tg-td">{day2.obj2.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">3</td>
                                    <td class="tg-td">{day2.obj3.time}</td>
                                    <td class="tg-td">{day2.obj3.schedule}</td>
                                    <td class="tg-td">{day2.obj3.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">4</td>
                                    <td class="tg-td">{day2.obj4.time}</td>
                                    <td class="tg-td">{day2.obj4.schedule}</td>
                                    <td class="tg-td">{day2.obj4.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">5</td>
                                    <td class="tg-td">{day2.obj5.time}</td>
                                    <td class="tg-td">{day2.obj5.schedule}</td>
                                    <td class="tg-td">{day2.obj5.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">6</td>
                                    <td class="tg-td">{day2.obj6.time}</td>
                                    <td class="tg-td">{day2.obj6.schedule}</td>
                                    <td class="tg-td">{day2.obj6.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">7</td>
                                    <td class="tg-td">{day2.obj7.time}</td>
                                    <td class="tg-td">{day2.obj7.schedule}</td>
                                    <td class="tg-td">{day2.obj7.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">8</td>
                                    <td class="tg-td">{day2.obj8.time}</td>
                                    <td class="tg-td">{day2.obj8.schedule}</td>
                                    <td class="tg-td">{day2.obj8.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">9</td>
                                    <td class="tg-td">{day2.obj9.time}</td>
                                    <td class="tg-td">{day2.obj9.schedule}</td>
                                    <td class="tg-td">{day2.obj9.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">10</td>
                                    <td class="tg-td">{day2.obj10.time}</td>
                                    <td class="tg-td">{day2.obj10.schedule}</td>
                                    <td class="tg-td">{day2.obj10.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">11</td>
                                    <td class="tg-td">{day2.obj11.time}</td>
                                    <td class="tg-td">{day2.obj11.schedule}</td>
                                    <td class="tg-td">{day2.obj11.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">12</td>
                                    <td class="tg-td">{day2.obj12.time}</td>
                                    <td class="tg-td">{day2.obj12.schedule}</td>
                                    <td class="tg-td">{day2.obj12.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">13</td>
                                    <td class="tg-td">{day2.obj13.time}</td>
                                    <td class="tg-td">{day2.obj13.schedule}</td>
                                    <td class="tg-td">{day2.obj13.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">14</td>
                                    <td class="tg-td">{day2.obj14.time}</td>
                                    <td class="tg-td">{day2.obj14.schedule}</td>
                                    <td class="tg-td">{day2.obj14.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">15</td>
                                    <td class="tg-td">{day2.obj15.time}</td>
                                    <td class="tg-td">{day2.obj15.schedule}</td>
                                    <td class="tg-td">{day2.obj15.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">16</td>
                                    <td class="tg-td">{day2.obj16.time}</td>
                                    <td class="tg-td">{day2.obj16.schedule}</td>
                                    <td class="tg-td">{day2.obj16.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">17</td>
                                    <td class="tg-td">{day2.obj17.time}</td>
                                    <td class="tg-td">{day2.obj17.schedule}</td>
                                    <td class="tg-td">{day2.obj17.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">18</td>
                                    <td class="tg-td">{day2.obj18.time}</td>
                                    <td class="tg-td">{day2.obj18.schedule}</td>
                                    <td class="tg-td">{day2.obj18.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">19</td>
                                    <td class="tg-td">{day2.obj19.time}</td>
                                    <td class="tg-td">{day2.obj19.schedule}</td>
                                    <td class="tg-td">{day2.obj19.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">20</td>
                                    <td class="tg-td">{day2.obj20.time}</td>
                                    <td class="tg-td">{day2.obj20.schedule}</td>
                                    <td class="tg-td">{day2.obj20.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">21</td>
                                    <td class="tg-td">{day2.obj21.time}</td>
                                    <td class="tg-td">{day2.obj21.schedule}</td>
                                    <td class="tg-td">{day2.obj21.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">22</td>
                                    <td class="tg-td">{day2.obj22.time}</td>
                                    <td class="tg-td">{day2.obj22.schedule}</td>
                                    <td class="tg-td">{day2.obj22.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">23</td>
                                    <td class="tg-td">{day2.obj23.time}</td>
                                    <td class="tg-td">{day2.obj23.schedule}</td>
                                    <td class="tg-td">{day2.obj23.kategorie}</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                            <table class="tg">
                                <thead>
                                <tr>
                                    <th class="tg-th-1" colspan="2">{
                                        plancontent[8] +2 == 32
                                        ?<span>{plancontent[7]+1}/1</span>
                                        : ( plancontent[8] +1 == 32
                                            ? <span>{plancontent[7]+1}/2</span>
                                            :( plancontent[8] >= 1
                                                ? <span>{plancontent[7]}/{plancontent[8]+2}</span>
                                                :<span>00/00</span>))
                                    }</th>
                                    <th class="tg-th-2">일정</th>
                                    <th class="tg-th-3">분류</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="tg-td, tg-td-1">0</td>
                                    <td class="tg-td">{day3.obj0.time}</td>
                                    <td class="tg-td">{day3.obj0.schedule}</td>
                                    <td class="tg-td">{day3.obj0.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">1</td>
                                    <td class="tg-td">{day3.obj1.time}</td>
                                    <td class="tg-td">{day3.obj1.schedule}</td>
                                    <td class="tg-td">{day3.obj1.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">2</td>
                                    <td class="tg-td">{day3.obj2.time}</td>
                                    <td class="tg-td">{day3.obj2.schedule}</td>
                                    <td class="tg-td">{day3.obj2.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">3</td>
                                    <td class="tg-td">{day3.obj3.time}</td>
                                    <td class="tg-td">{day3.obj3.schedule}</td>
                                    <td class="tg-td">{day3.obj3.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">4</td>
                                    <td class="tg-td">{day3.obj4.time}</td>
                                    <td class="tg-td">{day3.obj4.schedule}</td>
                                    <td class="tg-td">{day3.obj4.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">5</td>
                                    <td class="tg-td">{day3.obj5.time}</td>
                                    <td class="tg-td">{day3.obj5.schedule}</td>
                                    <td class="tg-td">{day3.obj5.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">6</td>
                                    <td class="tg-td">{day3.obj6.time}</td>
                                    <td class="tg-td">{day3.obj6.schedule}</td>
                                    <td class="tg-td">{day3.obj6.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">7</td>
                                    <td class="tg-td">{day3.obj7.time}</td>
                                    <td class="tg-td">{day3.obj7.schedule}</td>
                                    <td class="tg-td">{day3.obj7.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">8</td>
                                    <td class="tg-td">{day3.obj8.time}</td>
                                    <td class="tg-td">{day3.obj8.schedule}</td>
                                    <td class="tg-td">{day3.obj8.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">9</td>
                                    <td class="tg-td">{day3.obj9.time}</td>
                                    <td class="tg-td">{day3.obj9.schedule}</td>
                                    <td class="tg-td">{day3.obj9.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">10</td>
                                    <td class="tg-td">{day3.obj10.time}</td>
                                    <td class="tg-td">{day3.obj10.schedule}</td>
                                    <td class="tg-td">{day3.obj10.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">11</td>
                                    <td class="tg-td">{day3.obj11.time}</td>
                                    <td class="tg-td">{day3.obj11.schedule}</td>
                                    <td class="tg-td">{day3.obj11.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">12</td>
                                    <td class="tg-td">{day3.obj12.time}</td>
                                    <td class="tg-td">{day3.obj12.schedule}</td>
                                    <td class="tg-td">{day3.obj12.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">13</td>
                                    <td class="tg-td">{day3.obj13.time}</td>
                                    <td class="tg-td">{day3.obj13.schedule}</td>
                                    <td class="tg-td">{day3.obj13.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">14</td>
                                    <td class="tg-td">{day3.obj14.time}</td>
                                    <td class="tg-td">{day3.obj14.schedule}</td>
                                    <td class="tg-td">{day3.obj14.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">15</td>
                                    <td class="tg-td">{day3.obj15.time}</td>
                                    <td class="tg-td">{day3.obj15.schedule}</td>
                                    <td class="tg-td">{day3.obj15.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">16</td>
                                    <td class="tg-td">{day3.obj16.time}</td>
                                    <td class="tg-td">{day3.obj16.schedule}</td>
                                    <td class="tg-td">{day3.obj16.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">17</td>
                                    <td class="tg-td">{day3.obj17.time}</td>
                                    <td class="tg-td">{day3.obj17.schedule}</td>
                                    <td class="tg-td">{day3.obj17.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">18</td>
                                    <td class="tg-td">{day3.obj18.time}</td>
                                    <td class="tg-td">{day3.obj18.schedule}</td>
                                    <td class="tg-td">{day3.obj18.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">19</td>
                                    <td class="tg-td">{day3.obj19.time}</td>
                                    <td class="tg-td">{day3.obj19.schedule}</td>
                                    <td class="tg-td">{day3.obj19.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">20</td>
                                    <td class="tg-td">{day3.obj20.time}</td>
                                    <td class="tg-td">{day3.obj20.schedule}</td>
                                    <td class="tg-td">{day3.obj20.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">21</td>
                                    <td class="tg-td">{day3.obj21.time}</td>
                                    <td class="tg-td">{day3.obj21.schedule}</td>
                                    <td class="tg-td">{day3.obj21.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">22</td>
                                    <td class="tg-td">{day3.obj22.time}</td>
                                    <td class="tg-td">{day3.obj22.schedule}</td>
                                    <td class="tg-td">{day3.obj22.kategorie}</td>
                                </tr>
                                <tr>
                                    <td class="tg-td, tg-td-1">23</td>
                                    <td class="tg-td">{day3.obj23.time}</td>
                                    <td class="tg-td">{day3.obj23.schedule}</td>
                                    <td class="tg-td">{day3.obj23.kategorie}</td>
                                </tr>
                                
                                </tbody>
                            </table>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                    </>

                    </div></div>
    );
}

export default Planswiper;