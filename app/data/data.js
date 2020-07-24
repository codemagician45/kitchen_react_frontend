/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable no-empty */
import config from "../actions/config";
import axios from "axios";

const headers = {
  Authorization: "Bearer " + localStorage.getItem("token"),
};

function login(data) {
  console.log(data);
  return axios({
    method: "POST",
    url: `${config.fetchLinkUrl}login`,
    headers: { "Content-Type": "application/json" },
    data: data,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error.response;
    });
}

function googleLogin(tokenId) {
  return axios({
    method: "POST",
    url: `${config.fetchLinkUrl}googlelogin`,
    data: { tokenId: tokenId },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error.response;
    });
}

function facebookLogin(accessToken, userID) {
  return axios({
    method: "POST",
    url: `${config.fetchLinkUrl}facebooklogin`,
    data: { accessToken: accessToken, userID: userID },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error.response;
    });
}

function createUser(data) {
  return fetch(`${config.fetchLinkUrl}register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 403) {
        return { isError: true, shouldLogin: true };
      }
      return res.json();
    })
    .then((res) => {
      if (res.error) {
        return Promise.reject(res.error);
      }
      return res;
    });
}

function createOrderFromWidget(data) {
  return fetch(`${config.fetchLinkUrl}widget/offer`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
    data: data,
  })
    .then((res) => {
      if (res.status === 403) {
        return { isError: true, shouldLogin: true };
      }
      return res;
    })
    .then((res) => {
      if (res.error) {
        return Promise.reject(res.error);
      }
      return res;
    });
}

function adminDashBoardCounts() {
  return fetch(`${config.fetchLinkUrl}admin/dashboard/counts`, {
    method: "POST",
    headers: headers,
  })
    .then((res) => {
      if (res.status === 403) {
        return { isError: true, shouldLogin: true };
      }
      return res.json();
    })
    .then((res) => {
      if (res.error) {
        return Promise.reject(res.error);
      }
      return res;
    });
}

function adminDashBoardOffers() {
  return fetch(`${config.fetchLinkUrl}admin/offers`, {
    method: "POST",
    headers: headers,
  })
    .then((res) => {
      if (res.status === 403) {
        return { isError: true, shouldLogin: true };
      }
      return res.json();
    })
    .then((res) => {
      if (res.error) {
        return Promise.reject(res.error);
      }
      return res;
    });
}

function adminDashboardUsers() {
  return fetch(`${config.fetchLinkUrl}admin/dashboard/users`, {
    method: "POST",
    headers: headers,
  })
    .then((res) => {
      if (res.status === 403) {
        return { isError: true, shouldLogin: true };
      }
      return res.json();
    })
    .then((res) => {
      if (res.error) {
        return Promise.reject(res.error);
      }
      return res;
    });
}

function adminDashBoardCompanies() {
  return fetch(`${config.fetchLinkUrl}admin/dashboard/companies`, {
    method: "POST",
    headers: headers,
  })
    .then((res) => {
      if (res.status === 403) {
        return { isError: true, shouldLogin: true };
      }
      return res.json();
    })
    .then((res) => {
      if (res.error) {
        return Promise.reject(res.error);
      }
      return res;
    });
}

function companyOffers() {
  return fetch(`${config.fetchLinkUrl}companies/offers`, {
    method: "POST",
    headers: headers,
  })
    .then((res) => {
      if (res.status === 403) {
        return { isError: true, shouldLogin: true };
      }
      return res.json();
    })
    .then((res) => {
      if (res.error) {
        return Promise.reject(res.error);
      }
      return res;
    });
}

function userOffers() {
  return fetch(`${config.fetchLinkUrl}users/offers`, {
    method: "POST",
    headers: headers,
  })
    .then((res) => {
      if (res.status === 403) {
        return { isError: true, shouldLogin: true };
      }
      return res.json();
    })
    .then((res) => {
      if (res.error) {
        return Promise.reject(res.error);
      }
      return res;
    });
}

function molliePay(amount) {
  return axios({
    method: "POST",
    url: `${config.fetchLinkUrl}companies/pay`,
    data: { amount: amount },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error.response;
    });
}

export {
  login,
  googleLogin,
  facebookLogin,
  createUser,
  createOrderFromWidget,
  adminDashBoardCounts,
  adminDashBoardOffers,
  adminDashboardUsers,
  adminDashBoardCompanies,
  companyOffers,
  userOffers,
  molliePay
};
