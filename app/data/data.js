/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable no-empty */
import config from "../actions/config";
import axios from "axios";

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
  return axios({
    method: "POST",
    url: `${config.fetchLinkUrl}widget/offer`,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
    data: data,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      return error;
    });
}

function adminDashBoardCounts() {
  return axios({
    method: "POST",
    url: `${config.fetchLinkUrl}admin/dashboard/counts`,
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
}

function adminDashBoardOffers() {
  return fetch(`${config.fetchLinkUrl}admin/offers`, {
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
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
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
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
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
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

function userToCompany(data) {
  return axios({
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    url: `${config.fetchLinkUrl}admin/dashboard/changeToCompany`,
    data: data,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
}

function companyOffers() {
  return axios({
    method: "POST",
    url: `${config.fetchLinkUrl}companies/offers`,
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
}

function userOffers() {
  return axios({
    method: "POST",
    url: `${config.fetchLinkUrl}users/offers`,
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
}

function userOfferDetailGet(id) {
  return axios({
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    url: `${config.fetchLinkUrl}users/getOffer`,
    data: { id },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
}

function userProfileGet(user_id) {
  return axios({
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    url: `${config.fetchLinkUrl}users/profiles`,
    data: { user_id },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
}

function userProfileDataUpload(data) {
  return axios({
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    url: `${config.fetchLinkUrl}users/profile/upload_data`,
    data: data,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
}

function userProfilePhotoUpload(data) {
  return axios({
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    url: `${config.fetchLinkUrl}users/profile/upload_photo`,
    data: data,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
}

function userProfilePassword(data) {
  return axios({
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    url: `${config.fetchLinkUrl}users/profile/password`,
    data: data,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
}

function molliePay(data) {
  return axios({
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    url: `${config.fetchLinkUrl}companies/pay`,
    data: data,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
}

function companyProfileGet(user_id) {
  return axios({
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    url: `${config.fetchLinkUrl}companies/profiles`,
    data: { user_id },
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
}

function companyProfileDataUpload(data) {
  return axios({
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    url: `${config.fetchLinkUrl}companies/profile/upload_data`,
    data: data,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
}

function companyProfilePhotoUpload(data) {
  return axios({
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    url: `${config.fetchLinkUrl}companies/profile/upload_photo`,
    data: data,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
    });
}

function companyProfilePassword(data) {
  console.log(data);
  return axios({
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    url: `${config.fetchLinkUrl}companies/profile/password`,
    data: data,
  })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error;
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
  userToCompany,
  companyOffers,
  userOfferDetailGet,
  userProfileGet,
  userOffers,
  molliePay,
  userProfileDataUpload,
  userProfilePhotoUpload,
  userProfilePassword,
  companyProfileGet,
  companyProfileDataUpload,
  companyProfilePhotoUpload,
  companyProfilePassword,
};
