import jwt from "jsonwebtoken";

// export const createAccessToken = (payload) => {
//   return new Promise((resolve, reject) => {
//     jwt.sign(payload, "react2021", (err, token) => {
//       if (err) reject(err);
//       resolve(token);
//     });
//   });
// };

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    const options = {
      expiresIn: 60 * 60 * 24 * 365 * 100,
    };

    jwt.sign(payload, "react2021", options, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
