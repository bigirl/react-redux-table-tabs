export const DEFAULT_API = "api.someurl.com";
export const DEFAULT_METHOD = "get";
export const DEFAULT_PATH = "somepath/home";

export const ACTIVE_TAB_REQUEST = "request";
export const ACTIVE_TAB_RESPONSE = "response";

export const defaultState = {
    api: DEFAULT_API,
    method: DEFAULT_METHOD,
    path: DEFAULT_PATH,
    response: null,
    request: null,
    activeTab: ACTIVE_TAB_REQUEST,
    showPIIonly: false,
    searchText: null
};

export const actionTypes = {
    SET_PII: "SET_PII",
    SET_MASKED: "SET_MASKED",
    SET_ACTIVE_TAB: "SET_ACTIVE_TAB",
    PRE_FETCH_DATA: "PRE_FETCH_DATA",
    SHOW_PII_ONLY: "SHOW_PII_ONLY",
    SEARCH_TEXT: "SEARCH_TEXT",
    RESET_FILTERS: "RESET_FILTERS"
}