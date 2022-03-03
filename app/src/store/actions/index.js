import { FETCH_DATA_SUCCESS, FETCH_MESSAGE_SUCCESS, FETCH_ERROR, FETCH_LOADING, FETCH_PROFILE } from "../actionTypes/index.js";

const url = "http://localhost:4000";

export const fetchData = () => {
  return (dispatch) => {
    return fetch(`${url}/data`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((err) => {
            return Promise.reject(err);
          });
        }
      })
      .then((data) => {
        let temp = [];
        data.forEach((el) => {
          let obj = {
            id: el.id,
            full_name: `${el.first_name} ${el.last_name}`,
            expert_skills: [],
          };
          for (const key in el.skills) {
            if (el.skills[key] === "expert") {
              obj.expert_skills.push(key);
            }
          }
          temp.push(obj);
        });
        dispatch(fetchDataSuccess(temp));
        return temp
      })
      .catch((err) => {
        dispatch(fetchError(err));
      })
      .finally(() => {
        dispatch(fetchLoading(false));
      });
  };
};

export const fetchMessage = () => {
  return (dispatch) => {
    return fetch(`${url}/message`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((err) => {
            return Promise.reject(err);
          });
        }
      })
      .then((message) => {
        dispatch(fetchMessageSuccess(message.message));
      })
      .catch((err) => {
        dispatch(fetchError(err));
      })
      .finally(() => {
        dispatch(fetchLoading(false));
      });
  };
};

export const fetchDataSuccess = (payload) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload,
  };
};

export const fetchMessageSuccess = (payload) => {
  return {
    type: FETCH_MESSAGE_SUCCESS,
    payload,
  };
};

export const fetchLoading = (payload) => {
  return {
    type: FETCH_LOADING,
    payload,
  };
};

export const fetchError = (payload) => {
  return {
    type: FETCH_ERROR,
    payload,
  };
};

export const fetchProfile = (payload) => {
  return {
    type: FETCH_PROFILE,
    payload,
  };
};
