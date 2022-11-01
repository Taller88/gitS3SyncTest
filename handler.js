'use strict';
const msafeModuel = require("./modules/msafe");

// function 이름 수정필요시 'serverless.yml'에서 functions 수정 
module.exports.hello = async (event) => {


  const urlEncodedName = encodeURIComponent(event.userName)
  const userPhone = event.userPhone;
  const userSsn = event.ssn;


  // const urlEncodedName = encodeURIComponent("정진우")
  // const userPhone = "01082271995";
  // const userSsn = "9306161268217";

  const scrapResult = await msafeModuel.prototype.간편로그인(urlEncodedName, userPhone, userSsn);

  // TODO implement
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello jjw Test VS Code.')
  };
  return scrapResult;
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
