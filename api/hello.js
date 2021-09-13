export const URL = "http://localhost:5000/v1";

// save order request
export const apiSaveOrder = (data, callback) => {

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
  export const apiDeleteOrder = (id, callback) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch(`${URL}/customers/${id}`, requestOptions)
    .then(response => response.json())
    .then((result) => {
      if(result.status) return callback(result, null);
      callback(null, result.errMsg);
    })
    .catch(error => console.log('error', error));
}


// sending SMS request
export const apiSendSMS = (phone, callback) => {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(`${URL}/customers/${phone}`, requestOptions)
    .then(response => response.json())
    .then((result) => {
      if(result.status) return callback(result, null);
      callback(null, result.errMsg);
    })
    .catch(error => console.log('error', error));
}
