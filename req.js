const axios=require('axios');
var qs = require('qs');


const PostRequest = async function (dataBody) {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }};
  return await axios.post('http://localhost:8080',qs.stringify(dataBody),config);
}
const GetRequest = async function (URL,azureKeys) {
     let token = await PostLoginRequest(azureKeys);
     const config = {
      headers: {
        'Authorization': "Bearer "+token
      }};
    let res = await axios.get(URL+"?api-version="+azure.assest.apiversion,config).catch(error=>{});
    
    return res;
  }
 
module.exports = {
  GetRequest,
  PostRequest
};
