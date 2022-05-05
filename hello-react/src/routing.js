import React from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from './Pages/main';
import AwakeView from './Components/Awake';
import MorningView from './Components/Morning';
import AfterMorningView from './Components/AfterMorning';
import LunchView from './Components/Lunch';
import DinnerView from './Components/Dinner';


const routes = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      { path: '/morning/awake', element: <AwakeView /> },
      { path: '/morning/beforeMorning', element: <MorningView /> },
      { path: '/morning/afterMorning', element: <AfterMorningView /> },
      { path: '/afternoon/afterLunch/', element: <LunchView /> },
      { path: '/evening/afterDinner', element: <DinnerView/> },
      { path: '/night/beforeSleep', element: <DinnerView /> }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/morning/awake" />,
  }
];

export default routes;
