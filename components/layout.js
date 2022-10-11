import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="mx-14">
      <Nav />
      <main>{children}</main>
    </div>
  );
}

/* this page allows us to  create a layout for pur website where we have the 
navbar always displapyed in all the pages of our website. the children are the other components that make up a page
to see the explanation 
 visit https://www.youtube.com/watch?v=zkz2HuNR_gk
 min 13.00 */
