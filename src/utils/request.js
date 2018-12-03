import { fetch } from 'fetch'

console.log(fetch)

export const request = async (url, params = {}) => {
  console.log({ url })
  const res = await fetch(url, {
    ...params,
  });

  return res.json();
};

export default request;
