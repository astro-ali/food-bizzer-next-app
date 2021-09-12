export const URL = "http://localhost:5000/v1";

// save order post request

export const apiSaveOrder = (data, callback) => {
  console.log(data);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`${URL}/customers`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
        if (result.status) return callback(result, null);
        callback(null, result.errMsg);
    })
    .catch((error) => console.log("error", error));
};

// delete prder / delete request

// sending SMS request / post request
