function conv() {
  const inp = parseInt(document.querySelector("#inp").value);
  const btn = document.querySelector("#button-1");

  var selectbox = document.querySelector("#selectbox").value;

  if (inp) {
	let conv__cmtoinch = inp / 2.54;
    let conv__inctocm = inp * 2.54;
    let conv__kmtomiles = inp / 1.609344;
    let conv__milestokm = inp * 1.609344;

    if (selectbox === "cmtoinch") {
      document.querySelector(
        ".convText"
      ).innerHTML = `${inp} cm = ${conv__cmtoinch} inch`;
    } else if (selectbox === "inchtocm") {
      document.querySelector(
        ".convText"
      ).innerHTML = `${inp} inch = ${conv__inctocm} cm`;
    } else if (selectbox === "kmtomiles") {
      document.querySelector(
        ".convText"
      ).innerHTML = `${inp} km = ${conv__kmtomiles} mil`;
    } else if (selectbox === "milestokm") {
      document.querySelector(
        ".convText"
      ).innerHTML = `${inp} mil = ${conv__milestokm} km`;
    }

    document.querySelector("#inp").value = "";
    document.querySelector(".show-conversion").style.display = "block";
  }
}
