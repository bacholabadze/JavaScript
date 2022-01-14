const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// for (const flight of flights.split("+")) {
//   const status = flight.split(";")[0].split("_").join(" ");
//   const from = flight.split(";")[1].slice(0, 3).toUpperCase();
//   const to = flight.split(";")[2].slice(0, 3).toUpperCase();
//   const time = `(${flight.split(";")[3]})`;

//   console.log(`${status} from ${from} to ${to} ${time}`);
// }

// -----------------------------------------------------------------------

const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "[!]" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}
