import Home from '../pages/Home';
import Child from '../pages/Home/Child';
import reducer from '../pages/Home/reducer';

const router = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'child',
        component: Child,
        reducer: {
          reducer,
          key: 'home'
        }
      }
    ]
  }
];

export default router;
