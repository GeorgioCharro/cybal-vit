import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import BlogArea from "./BlogArea";
import BlogAreaHomeOne from "../homes/home-1/BlogAreaHomeOne";
 

const Blog = () => {
  return (
    <>
    <HeaderOne />
    <Breadcrumb title="Latest Blog" subtitle="Blog"  />
    <BlogArea />
    <BlogAreaHomeOne />
    <FooterOne />  
    <ScrollTop />    
    </>
  );
};

export default Blog;