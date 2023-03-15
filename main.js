// //tsParticles library - https://github.com/matteobruni/tsparticles

// tsParticles.load("tsparticles", {
//     particles: {
//       move: {
//         direction: "none",
//         speed: 10,
//         outModes: {
//           default: "destroy",
//           bottom: "none"
//         }
//       },
//       rotate: {
//         enable: true,
//         direction: "random",
//         animation: {
//           enable: true,
//           speed: 5
//         }
//       },
//       shape: {
//         type: ["circle", "square", "triangle", "polygon"],
//         polygon: [
//           {
//             sides: 5
//           },
//           {
//             sides: 6
//           },
//           {
//             sides: 8
//           }
//         ]
//       },
//       opacity: {
//         value: 1
//       },
//       size: {
//         value: 15,
//         random: {
//           enable: true,
//           minimumValue: 10
//         }
//       }
//     },
//     emitters: {
//       direction: "none",
//       size: {
//         width: 100,
//         height: 100
//       },
//       position: {
//         x: 50,
//         y: 50
//       },
//       rate: {
//         quantity: 5,
//         delay: 0.3
//       }
//     },
//     preset: "bigCircles"
//   });
  

  let svg_me_html =document.getElementById('svg_me_html');
  let svg_me_css =document.getElementById('svg_me_css');
  let svg_me_js =document.getElementById('svg_me_js');
  let svg_me_react =document.getElementById('svg_me_react');
  let svg_me_npm =document.getElementById('svg_me_npm');


  let span_me_html =document.getElementById('span_me_html');
  let span_me_css =document.getElementById('span_me_css');
  let span_me_js =document.getElementById('span_me_js');
  let span_me_react =document.getElementById('span_me_react');
  let span_me_npm =document.getElementById('span_me_npm');

  
  svg_me_html.addEventListener("mouseover",()=>{
    span_me_html.style.fontSize="20px";
    span_me_html.style.transition= "0.4s";
  })
  svg_me_css.addEventListener("mouseover",()=>{
    span_me_css.style.fontSize="20px";
    span_me_css.style.transition= "0.4s";
  })
  svg_me_js.addEventListener("mouseover",()=>{
    span_me_js.style.fontSize="20px";
    span_me_js.style.transition= "0.4s";
  })
  svg_me_react.addEventListener("mouseover",()=>{
    span_me_react.style.fontSize="20px";
    span_me_react.style.transition= "0.4s";
  })
  svg_me_npm.addEventListener("mouseover",()=>{
    span_me_npm.style.fontSize="20px";
    span_me_npm.style.transition= "0.4s";
  })



