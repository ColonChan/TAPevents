import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const userAdmin = Loadable({
  loader: () => import('./views/User/userAdmin'),
  loading: Loading,
});

const CreateEvent = Loadable({
  loader: () => import('./views/EventList/CreateEvent'),
  loading: Loading,
});

const EditEvent = Loadable({
  loader: () => import('./views/EventList/EditEvent'),
  loading: Loading,
});

const EventList = Loadable({
  loader: () => import('./views/EventList/EventList'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: DefaultLayout, exact: true },
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/eventlist', name: 'EventList', component: EventList },
  { path: '/createevent', name: 'CreateEvent', component: CreateEvent },
  { path: '/editevent', name: 'EditEvent', component: EditEvent },
  { path: '/useradmin', name: 'userAdmin', component: userAdmin },
];

export default routes;
