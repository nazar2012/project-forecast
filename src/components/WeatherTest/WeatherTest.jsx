// import clearGif from "../WeatherList/photos/clear.gif";
// import cloudsGif from "../WeatherList/photos/clouds.gif";
// import rainGif from "../WeatherList/photos/rain.gif";
// import snowGif from "../WeatherList/photos/snow.gif";
// import stormGif from "../WeatherList/photos/storm.gif";
// import fogGif from "../WeatherList/photos/fog.gif";

// const weather = [
//   {
//     name: "Clear",
//     gif: clearGif,
//   },
//   {
//     name: "Clouds",
//     gif: cloudsGif,
//   },
//   {
//     name: "Rain",
//     gif: rainGif,
//   },
//   {
//     name: "Snow",
//     gif: snowGif,
//   },
//   {
//     name: "Storm",
//     gif: stormGif,
//   },
//   {
//     name: "Fog",
//     gif: fogGif,
//   },
// ];

// export default function WeatherTest() {
//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns:
//           "repeat(3, 1fr)",
//         gap: "20px",
//         padding: "30px",
//       }}
//     >
//       {weather.map((item) => (
//         <div
//           key={item.name}
//           style={{
//             position: "relative",
//             height: "220px",
//             borderRadius: "20px",
//             overflow: "hidden",
//           }}
//         >
//           <img
//             src={item.gif}
//             alt={item.name}
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//             }}
//           />

//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               background:
//                 "rgba(0, 0, 0, 0.25)",
//               display: "flex",
//               alignItems: "flex-end",
//               padding: "20px",
//             }}
//           >
//             <h2
//               style={{
//                 color: "white",
//                 margin: 0,
//               }}
//             >
//               {item.name}
//             </h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }