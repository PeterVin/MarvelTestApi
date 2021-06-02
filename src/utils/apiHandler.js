import axios from "axios";

export const getMarvelCharacterList = (url, cancel) => {
    return axios
    .get(url, {cancelToken: cancel })
    .then(response => response.data) 
  }

  export const getMarvelCharacter = (url) => {
    return axios.get(url).then((response) => response.data);
  }

  export const generateUrlAuth = (timeStamp, publicKey, PrivateKey) => {
    var md5 = require('md5');
    return md5(timeStamp + publicKey + PrivateKey)
}