const bigDataUrl = "http://www.json-generator.com/api/json/get/cbBFCpjFYO?indent=2";
const smallDataUrl = "http://www.json-generator.com/api/json/get/bVYgvTVFea?indent=2";
const getData = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        alert("Кажется что-то пошло не так.  Status Code: " + response.status);
        return;
      }
      return response.json();
    })
    .catch((err) => {
      alert("Ошибка соединения :-S" + err);
    });
};

export const infoAPI = {
  getSmallData() {
    return getData(smallDataUrl);
  },
  getBigData() {
    return getData(bigDataUrl);
  },
};


