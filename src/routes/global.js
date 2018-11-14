import ServerError from '../pages/Exception/ServerError';
import NotFound from '../pages/Exception/NotFound';
import NoPrivilege from '../pages/Exception/NoPrivilege';

const router = [
  {
    path: '500',
    component: ServerError,
  },
  {
    path: '404',
    component: NotFound,
  },
  {
    path: '401',
    component: NoPrivilege,
  },
  {
    path: '*',
    component: NotFound,
  }
];

export default router;
