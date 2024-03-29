import axios from 'axios';

export const REQUEST_TIMEOUT = 90 * 1000;

export const APIKit = axios.create({
  baseURL: 'https://www.epsilonenergia.co.mz/api',
  timeout: REQUEST_TIMEOUT,
});

export const uploadFile = (ficheiro: any) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('file', ficheiro, ficheiro.name);
    formData.append('appname', 'reservaja');
    axios
      .post(
        'https://filestorage.ejitech.co.mz/controllers/upload.php',
        formData
      )
      .then((response) => resolve(response.data.url))
      .catch((err) => reject(err));
  });
};
