import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/admin/adminLogin'
import Blogs from './pages/blogpage/blog';
import BlogDetails from './pages/blogpage/blogdetails';
import Signin from './pages/signin';
import Signup from './pages/signup';
import PostBlog from './pages/admin/postBlog';
import AdminLayout from './pages/admin/adminlayout';
import Index from './pages';
import Contact from './pages/contact';
import ShopLayout from './pages/shoppages/shoplayout';
import Shop from './pages/shoppages/shop';
import ProductDetails from './pages/shoppages/productDetails';


import { Navigate } from "react-router-dom";

import useContextHook from "./Hooks/contestHook";
const App = () => {
  const {username} = useContextHook();

  return (
    <Routes>  

    
      <Route path="/" element={<Index />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/blog" element={<Blogs />} />
      <Route path="/blog/:id" element={<BlogDetails />} />

    
      <Route path="/signin" element={username.user.username ? (<Navigate to="/" replace={true} />) : (<Signin />)} />
      <Route path="/signup" element={username.user.username ? (<Navigate to="/" replace={true} />) : (<Signup />)}/>

      <Route path="/shop" element={<ShopLayout />}>
        <Route path="" element={<Shop />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>


      <Route path="/admin-login" element={<AdminLogin />} />
     
      <Route path="/admin" element={<AdminLayout roles={['Top Admin', 'Admin']} />}>
        <Route path="post-blog" element={<PostBlog />} />
        <Route path="add-admin" element={<h1>Add Admin from here</h1>} />
        <Route path="edit-blog" element={<h1>Edit Blog Post</h1>} />
      </Route>

      <Route path="*" element={<h1>Page Not found</h1>} />
    </Routes>
  );
}

export default App;
