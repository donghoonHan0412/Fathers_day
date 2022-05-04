// 페이지 init은 Morning
// 밤 12시가 되면 init이 되도록
// 그 외의 경우 state함수나 무엇인가를 통해 대기
// db가 제일 적절하다 생각함


import React, { useState,useEffect } from 'react';
import { Outlet,useLocation, useNavigate } from 'react-router-dom';

const MainView = () => {

    const [isCheckTableOpen, setCheckTableOpen] = useState(false);
    // 

    return (
        <div className="Main">
            <TopBar onCheckPage={() => setCheckTableOpen(true)}/>
            <div className={classes.content} >
                <Outlet />
            </div>
        </div>
    )
}