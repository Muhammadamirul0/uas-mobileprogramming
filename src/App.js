import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home-pages/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductReduxDialogPage from './pages/product-redux-dialog-pages/ProductReduxDialogPage';
import ProductDetailPage from './pages/product-pages/ProductDetailPage.jsx';
import CategoryReduxDialogPage from './pages/category-redux-dialog-pages/CategoryReduxDialogPage';
import CategoryDetailPage from './pages/category-pages/CategoryDetailPage';
import Profile from './components/profile-components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/master",
    element: <ProductReduxDialogPage />
  },
  {
    path: "/category",
    element: < CategoryReduxDialogPage/>
  },
  {
    path: "/product/:id",
    element: <ProductDetailPage />
  },
  {
    path: "/product/:id",
    element: <CategoryDetailPage />
  },
  {
    path: "/profile",
    element: <Profile />
  }
])

function App() {
  return (
    <Provider store={ store }>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
