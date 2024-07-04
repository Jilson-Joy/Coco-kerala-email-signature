// import React, { useRef, useState } from "react";

// function EmailSignature() {
//   const initialState = {
//     name: "Jaimy Joseph",
//     title: "Managing Director & CEO",
//     phone: "+91 9048244527",
//     email: "jaimy.cocokerala.com",
//   };

//   const [formData, setFormData] = useState(initialState);
//   const emailContentRef = useRef(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted", formData);
//   };

//   const handleReset = () => {
//     setFormData(initialState);
//   };

//   const handleCopy = () => {
//     if (emailContentRef.current) {
//       const range = document.createRange();
//       range.selectNode(emailContentRef.current);
//       const selection = window.getSelection();
//       selection.removeAllRanges();
//       selection.addRange(range);
//       document.execCommand("copy");
//       selection.removeAllRanges();
//       alert("Copied to clipboard");
//     }
//   };

//   return (
//  <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
//       <div style={{ width: "100%", maxWidth: "600px" }}>
//         <div ref={emailContentRef}>
//           <table
//             style={{
//               width: "100%",
//               borderCollapse: "collapse",
//               fontFamily: "Arial, sans-serif",
//               fontSize: "12px",
//             }}
//           >
//             <tr>
//               <td colSpan="4">
//                 <img
//                   src="https://i.postimg.cc/s2RHdL1J/COCO-KERALA-header.png"
//                   alt="coco_b1"
//                   style={{ display: "block", width: "100%" }}
//                 />
//               </td>
//             </tr>
//             <tr>
//               <td style={{ width: "25%",verticalAlign:'top' }}>
//                 <p style={{ fontWeight: "bold", margin: 0, padding: 0 }}>{formData.name}</p>
//                 <p style={{ margin: 0, padding: 0 }}>{formData.title}</p>
//                 <p style={{ margin: 0, padding: 0 }}>Phone: {formData.phone}</p>
//                 <p style={{ margin: 0, padding: 0 }}>
//                   Email: <a href={`mailto:${formData.email}`}>{formData.email}</a>
//                 </p>
//               </td>
//               <td style={{ fontSize: "10px", width: "25%",verticalAlign:'top' }}>
//                 <p style={{ fontWeight: "bold", margin: 0, padding: 0 }}>Corporate Office:</p>
//                 <p style={{ margin: 0, padding: 0 }}>2nd Floor, K C Tower</p>
//                 <p style={{ margin: 0, padding: 0 }}>Padivattom</p>
//                 <p style={{ margin: 0, padding: 0 }}>Ernakulam-682024</p>
//                 <p style={{ margin: 0, padding: 0 }}>Kerala, India</p>
//                 <p style={{ margin: 0, padding: 0 }}>Phone: +91 9048200074</p>
//                 <p style={{ margin: 0, padding: 0 }}>
//                   Email: <a href="mailto:info@cocokerala.com">info@cocokerala.com</a>
//                 </p>
//                 <p style={{ margin: 0, padding: 0 }}>
//                   Website: <a href="https://www.cocokerala.com">www.cocokerala.com</a>
//                 </p>
//               </td>
//              <div>
//                 <td style={{ fontSize: "10px", width: "25%" ,verticalAlign:'top' }}>
//                   <p style={{ margin: 0, padding: 0 }}>Mumbai: +919048200085</p>
//                   <p style={{ margin: 0, padding: 0 }}>Kolkata: +919048299978</p>
//                   <p style={{ margin: 0, padding: 0 }}>Delhi: +919048200086</p>
//                   <p style={{ margin: 0, padding: 0 }}>Surat: +919048200025</p>
//                   <p style={{ margin: 0, padding: 0 }}>Pune: +919048200084</p>

//                   {/* <p style={{ margin: 0, padding: 0 }}>Karnataka & Tamil Nadu: +918714615177</p>
//                   <p style={{ margin: 0, padding: 0 }}>MP & Chhattisgarh: +918714627900</p> */}
//                 </td>
//                 <td style={{ fontSize: "10px", width: "25%", textAlign: "right", verticalAlign:'top' }}>
//                   <p style={{ margin: 0, padding: 0 }}>Ahmedabad: +919048200072</p>
//                   <p style={{ margin: 0, padding: 0 }}>Hyderabad: +91714612103</p>
//                   <p style={{ margin: 0, padding: 0 }}>Lucknow: +918714669774</p>
//                   <p style={{ margin: 0, padding: 0 }}>Rajkot: +918714669771</p>
//                   <p style={{ margin: 0, padding: 0 }}>Nagpur: +919048200073</p>
//                 </td>
//              </div>
//              <div style={{fontSize: "10px"}}>
//              <p style={{ margin: 0, padding: 0 }}>Karnataka & Tamil Nadu: +918714615177</p>
//              <p style={{ margin: 0, padding: 0 }}>MP & Chhattisgarh: +918714627900</p>
//              </div>
//             </tr>
//             {/* <tr >
//               <td colSpan={2}></td>
//               <td colSpan={2} style={{verticalAlign:'top'}}>
//                 <p style={{ fontSize: "10px", margin: 0, padding: 0 }}>
//                   Karnataka & Tamil Nadu: +918714615177
//                 </p>
//                 <p style={{ fontSize: "10px", margin: 0, padding: 0 }}>
//                   MP & Chhattisgarh: +918714627900
//                 </p>
//               </td>
//             </tr> */}
//             <tr>
//               <td colSpan="4">
//                 <img
//                   src="https://i.postimg.cc/brxbcm5K/COCO-KERALA-68.png"
//                   alt="coco_b1"
//                   style={{ display: "block", width: "100%" }}
//                 />
//               </td>
//             </tr>
//           </table>
//         </div>

//         <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//           <div style={{ padding: "10px" }}>
//             <div style={{ marginTop: "10px" }}>
//               <label>Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px 20px",
//                   borderRadius: "5px",
//                   width: "100%",
//                 }}
//               />
//             </div>
//             <div style={{ marginTop: "5px" }}>
//               <label>Title:</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px 20px",
//                   borderRadius: "5px",
//                   width: "100%",
//                 }}
//               />
//             </div>
//             <div>
//               <label>Phone:</label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px 20px",
//                   borderRadius: "5px",
//                   width: "100%",
//                 }}
//               />
//             </div>
//             <div>
//               <label>Email:</label>
//               <input
//                 type="text"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={{
//                   border: "1px solid #ccc",
//                   padding: "10px 20px",
//                   borderRadius: "5px",
//                   width: "100%",
//                 }}
//               />
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 gap: "10px",
//                 marginTop: "10px",
//               }}
//             >
//               <button
//                 type="button"
//                 onClick={handleReset}
//                 style={{
//                   padding: "10px 20px",
//                   fontWeight: 600,
//                   border: "none",
//                   borderRadius: "5px",
//                   backgroundColor: "red",
//                   color: "white",
//                 }}
//               >
//                 Reset
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCopy}
//                 style={{
//                   padding: "10px 20px",
//                   fontWeight: 600,
//                   border: "none",
//                   borderRadius: "5px",
//                   backgroundColor: "green",
//                   color: "white",
//                 }}
//               >
//                 Copy
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//     );
// }

// export default EmailSignature;

import React, { useRef, useState } from "react";

function EmailSignature() {
  const initialState = {
    name: "Jaimy Joseph",
    title: "Managing Director & CEO",
    phone: "+91 9048244527",
    email: "jaimy.cocokerala.com",
  };

  const [formData, setFormData] = useState(initialState);
  const emailContentRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  const handleCopy = () => {
    if (emailContentRef.current) {
      const range = document.createRange();
      range.selectNode(emailContentRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
      alert("Copied to clipboard");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <div ref={emailContentRef}>
          <table
            style={{
              width: "600px",
              borderCollapse: "collapse",
              fontFamily: "Arial, sans-serif"
            }}
          >
            {/* row 1 */}
            <tr>
              <td colSpan="3">
                <img
                  src="https://i.postimg.cc/s2RHdL1J/COCO-KERALA-header.png"
                  alt="coco_b1"
                  style={{ display: "block", width: "100%" }}
                />
              </td>
            </tr>
            
            {/* row 2 */}
            <tr>
              <td style={{fontSize: "12px", verticalAlign: "top",width:"150px" }}>
                <p style={{ fontWeight: "bold", margin: 0, padding: 0 ,display:'flex',flexWrap:'wrap' }}>
                  {formData.name}
                </p>
                <p style={{ margin: 0, padding: 0,display:'flex',flexWrap:'wrap' }}>{formData.title}</p>
                <p style={{ margin: 0, padding: 0,display:'flex',flexWrap:'wrap' }}>Phone: {formData.phone}</p>
                <p style={{ margin: 0, padding: 0,display:'flex',flexWrap:'wrap' }}>
                  Email:{" "}
                  <a href={`mailto:${formData.email}`}>{formData.email}</a>
                </p>
              </td>

              <td style={{ fontSize: "10px", verticalAlign: "top",width:"150px" }}>
                <p style={{ fontWeight: "bold", margin: 0, padding: 0 }}>
                  Corporate Office:
                </p>
                <p style={{ margin: 0, padding: 0 }}>2nd Floor, K C Tower</p>
                <p style={{ margin: 0, padding: 0 }}>Padivattom</p>
                <p style={{ margin: 0, padding: 0 }}>Ernakulam-682024</p>
                <p style={{ margin: 0, padding: 0 }}>Kerala, India</p>
                <p style={{ margin: 0, padding: 0 }}>Phone: +91 9048200074</p>
                <p style={{ margin: 0, padding: 0 }}>
                  Email:{" "}
                  <a href="mailto:info@cocokerala.com">info@cocokerala.com</a>
                </p>
                <p style={{ margin: 0, padding: 0 }}>
                  Website:{" "}
                  <a href="https://www.cocokerala.com">www.cocokerala.com</a>
                </p>
              </td>

              <td style={{width:"50%"}}>
                <table style={{width:'300px'}}>
                  <tr>
                    <td style={{ fontSize: "10px", verticalAlign: "top" }}>
                      <p style={{ margin: 0, padding: 0 }}>
                        Mumbai: +919048200085
                      </p>
                      <p style={{ margin: 0, padding: 0 }}>
                        Kolkata: +919048299978
                      </p>
                      <p style={{ margin: 0, padding: 0 }}>
                        Delhi: +919048200086
                      </p>
                      <p style={{ margin: 0, padding: 0 }}>
                        Surat: +919048200025
                      </p>
                      <p style={{ margin: 0, padding: 0 }}>
                        Pune: +919048200084
                      </p>
                    </td>
                    <td
                      style={{
                        fontSize: "10px",
                        verticalAlign: "top",
                        textAlign: "right",
                      }}
                    >
                      <p style={{ margin: 0, padding: 0 }}>
                        Ahmedabad: +919048200072
                      </p>
                      <p style={{ margin: 0, padding: 0 }}>
                        Hyderabad: +91714612103
                      </p>
                      <p style={{ margin: 0, padding: 0 }}>
                        Lucknow: +918714669774
                      </p>
                      <p style={{ margin: 0, padding: 0 }}>
                        Rajkot: +918714669771
                      </p>
                      <p style={{ margin: 0, padding: 0 }}>
                        Nagpur: +919048200073
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan="2"
                      style={{ fontSize: "10px", verticalAlign: "top" }}
                    >
                      <p style={{ margin: 0, padding: 0 }}>
                        Karnataka & Tamil Nadu: +918714615177
                      </p>
                      <p style={{ margin: 0, padding: 0 }}>
                        MP & Chhattisgarh: +918714627900
                      </p>
                    </td>
                  </tr>
                </table>
              </td>

            </tr>
            {/* row 3 */}
            <tr>
              <td colSpan="3">
                <img
                  src="https://i.postimg.cc/brxbcm5K/COCO-KERALA-68.png"
                  alt="coco_b1"
                  style={{ display: "block", width: "600px" }}
                />
              </td>
            </tr>
          </table>
        </div>

        <form onSubmit={handleSubmit} >
          <div style={{ padding: "10px" ,width:"600px",display:'flex',
            flexDirection:'column',alignItems:'center',justifyContent:'center'
           }}>
            <div style={{ marginTop: "5px", display:'flex',flexDirection:'column' }}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  width: "100%",
                }}
              />
            </div>
            <div style={{ marginTop: "5px", display:'flex',flexDirection:'column' }}>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  width: "100%",
                }}
              />
            </div>
            <div style={{ marginTop: "5px", display:'flex',flexDirection:'column' }}>
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  width: "100%",
                }}
              />
            </div>
            <div style={{ marginTop: "5px", display:'flex',flexDirection:'column' }}>
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  width: "100%",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <button
                type="button"
                onClick={handleReset}
                style={{
                  padding: "10px 20px",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={handleCopy}
                style={{
                  padding: "10px 20px",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                Copy
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailSignature;
