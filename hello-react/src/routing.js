import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from './pages/MAIN/main';
import AwakeView from './Components/Awake';
import AwakeView from './Components/Morning';
import AwakeView from './Components/AfterMorning';
import AwakeView from './Components/Lunch';
import AwakeView from './Components/Dinner';


const routes = [
  {
    path: 'app',
    element: <MainLayout />,
    children: [
      { path: '/morning/awake', element: <AwakeView /> },
      { path: '/morning/beforeMorning', element: <Morning /> },
      { path: '/morning/afterMorning', element: <AfterMorning /> },
      { path: '/afternoon/afterLunch/', element: <LunchView /> },
      { path: '/evening/afterDinner', element: <DinnerView/> },
      { path: '/night/beforeSleep', element: <DinnerView /> }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/app" />,
  }
];

export default routes;
