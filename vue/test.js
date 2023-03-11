const inputDate = new Date(`${"2023-03-10"}T${"16:20"}`);
const thisDate = new Date();
if (inputDate.getTime() < thisDate.getTime()) {
  console.log("essa data já passou");
} else {
  console.log("OK");
}
