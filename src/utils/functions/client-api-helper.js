import axios from "axios";
import { METHOD_TYPES } from "../data/constants";
import { updatePageState } from "../store/slices/pageSlice/pageSlice";

const getHeaders = (contentType, token) => {
  let headers = { "Content-Type": contentType };
  if (token) headers.Authorization = `bearer ${token}`;
  return headers;
};

export const fetchDataAndProceedWithToolkit = async (
  {
    url,
    method = METHOD_TYPES.GET,
    data = {},
    forceFEHideEnqueueBar = false,
    timeout = 20000,
    authLoader = false,
    modalLoader = false,
    loader = true,
    loaderText = "loading",
    contentType = "application/json",
    responseType,
    baseURL = process.env.NEXT_PUBLIC_BASE_URL,
    axiosArgs = {},
  },
  { rejectWithValue, getState, dispatch }
) => {
  try {
    if (modalLoader) {
      dispatch(updatePageState({ modalLoading: true }));
    } else if (authLoader) {
      dispatch(updatePageState({ authLoading: true }));
    } else if (loader) {
      dispatch(updatePageState({ pageLoading: true, pageLoaderText: loaderText }));
    }

    const response = await axios({
      url,
      baseURL,
      method,
      timeout,
      responseType,
      headers: getHeaders(contentType, getState().auth?.token),
      params: method === METHOD_TYPES.GET ? data : {},
      data: method !== METHOD_TYPES.GET ? data : {},
      validateStatus: (status) =>
        (status >= 200 && status < 300) || status === 412,
      ...axiosArgs,
    });

    if (modalLoader) {
      dispatch(updatePageState({ modalLoading: false }));
    } else if (authLoader) {
      dispatch(updatePageState({ authLoading: false }));
    } else if (loader) {
      dispatch(updatePageState({ pageLoading: false, pageLoaderText: "" }));
    }

    return response.data;
  } catch (err) {
    if (modalLoader) {
      dispatch(updatePageState({ modalLoading: false }));
    } else if (authLoader) {
      dispatch(updatePageState({ authLoading: false }));
    } else if (loader) {
      dispatch(updatePageState({ pageLoading: false, pageLoaderText: "" }));
    }

    return rejectWithValue({
      forceFEHideEnqueueBar: forceFEHideEnqueueBar,
      name: err.name,
      data: err.response?.data,
      status: err.response?.status,
      isNetworkError:
        err.message === "Network Error" || err.code === "ECONNABORTED",
    });
  }
};

export const fetchWithTimeout = (url, options, timeout = 10000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), timeout)
    ),
  ]);
};
