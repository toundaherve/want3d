// import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Breadcrumb from "./Breadcrumb";
import Layout from "./Layout";
import {
  FormField,
  Input,
  Label,
  TextArea,
  FormSection,
  Submit,
} from "./PostPage";
import { currencySymbol } from "./ResultsPage";
import TopAd from "./TopAd";

// export default function ItemPage({ data }) {
//   return (
//     <Layout>
//       <span className="d-none d-md-block mb-3 w-100 text-white">.</span>
//       <div className="d-flex flex-wrap flex-grow-1">
//         <div className="container">
//           {/* Hidden */}
//           <div className="row">
//             <div className="col-12 col-md-7 px-0 pe-md-5">
//               <div className="bg-secondary w-100 position-relative">
//                 {/* Poster */}
//                 <div
//                   className="d-flex flex-column justify-content-between card p-2 border mx-auto h-100"
//                   style={{ width: "256px" }}
//                 >
//                   <h6 className="text-center mb-0">WANTED</h6>
//                   <div className="w-100">
//                     <img
//                       className="img-fluid"
//                       src={data.image}
//                       alt={data.name}
//                     />
//                   </div>
//                   <div className="text-center">
//                     <small>Reward</small>
//                     <h6 className="text-center mb-0">{`${currencySymbol(
//                       data.currency
//                     )} ${data.reward}`}</h6>
//                   </div>
//                 </div>
//               </div>
//               {/* Details */}
//               <div>
//                 <span className="d-block my-3 border-bottom border-1 border-light"></span>
//                 <h6 className="fw-bold">Item Details</h6>
//                 <div className="flex-wrap">
//                   {Object.keys(data).map((key, idx) => {
//                     if (
//                       !["description", "email", "id", "image"].includes(key)
//                     ) {
//                       return (
//                         <div key={idx} className="flex-wrap">
//                           <span>{capitalize(key)}: </span>
//                           <span className="fw-bold">
//                             {Object.values(data)[idx]}
//                           </span>
//                         </div>
//                       );
//                     }
//                   })}
//                 </div>
//                 <span className="d-block my-3 border-bottom border-1 border-light"></span>
//                 <h6 className="fw-bold">Description</h6>
//                 <p>{data.description}</p>
//                 <span className="d-block my-3 border-bottom border-1 border-light"></span>
//               </div>
//             </div>
//             <div className="col-12 col-md-5 px-0">
//               {/* Reply */}
//               <div>
//                 <h6 className="mb-0">Interested ? Leave your details</h6>
//                 <span className="d-block mb-3"></span>
//                 <Form className="d-flex flex-column">
//                   <FormGroup>
//                     <Input
//                       type="email"
//                       name="email"
//                       id="exampleEmail"
//                       placeholder="Email"
//                     />
//                   </FormGroup>
//                   <span className="d-block mb-3"></span>
//                   <FormGroup>
//                     <Input
//                       type="text"
//                       name="phone"
//                       id="examplePhone"
//                       placeholder="Phone"
//                     />
//                   </FormGroup>
//                   <span className="d-block mb-3"></span>
//                   <FormGroup>
//                     <Input
//                       type="textarea"
//                       name="text"
//                       id="exampleText"
//                       placeholder="Message"
//                     />
//                   </FormGroup>
//                   <span className="d-block mb-3"></span>
//                   <Button color="success">Submit</Button>
//                 </Form>
//               </div>
//             </div>
//           </div>
//         </div>
//         <span className="d-block mb-4"></span>
//       </div>
//     </Layout>
//   );
// }

// function capitalize(word) {
//   return word[0].toUpperCase() + word.substring(1).toLowerCase();
// }

export default function ItemPage() {
  return (
    <Layout>
      <span className="d-block mb-2"></span>
      <div className="container post-form-width ">
        <TopAd />
        <span className="d-block mb-3"></span>
        <div className="d-none d-md-block">
          <Breadcrumb />
          <span className="d-block mb-3"></span>
        </div>
        <div>
          <Item />
          <Contact />
        </div>
      </div>
      <span className="d-block mb-3"></span>
    </Layout>
  );
}

function Item() {
  return (
    <div>
      <h4 className="mb-0">Iphone 6 plus</h4>
      <span className="d-block mb-1"></span>
      <p className="h4 mb-0">$750</p>
      <Divider />
      <div className="row">
        <div className="col-12 col-md-6">
          <h5 className="mb-0">Item details</h5>
          <span className="d-block mb-2"></span>
          <div className="d-flex flex-column">
            {[1, 2, 3, 4].map((detail, idx) => (
              <div key={idx}>
                <span className="d-inline-block">Detail{idx}: </span>
                <span className="d-inline-block fw-bold">Value{idx}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 d-md-none">
          <Divider />
        </div>
        <div className="col-12 col-md-6">
          <h5 className="mb-0">Description</h5>
          <span className="d-block mb-2"></span>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae neque
            dolore eos, est nihil et vel modi iusto labore recusandae!
          </p>
        </div>
      </div>

      <Divider />
    </div>
  );
}

function Divider() {
  return <span className="item-divider d-block my-3 bg-light"></span>;
}

function Contact() {
  return (
    <form className="pt-3 ">
      <h4 className="mb-0">Contact the user</h4>
      <span className="d-block mb-3"></span>
      <FormSection>
        <FormField>
          <Label htmlFor="email-field">Your Email</Label>
          <span className="d-block mb-1"></span>
          <Input
            id="email-field"
            type="email"
            placeholder="Your email"
            name="email"
          />
        </FormField>
        <span className="d-block mb-3"></span>
        <FormField>
          <Label htmlFor="message-field">Your Message</Label>
          <span className="d-block mb-1"></span>
          <TextArea
            id="message-field"
            rows="3"
            name="message"
            placeholder="Given some info about your item"
          ></TextArea>
        </FormField>
      </FormSection>
      <span className="d-block mb-3"></span>
      <Submit>Send now</Submit>
    </form>
  );
}

//
