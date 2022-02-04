import http from "./httpServices";
import config from "./config.json";

export const addTask = (values) => {
    return http
        .post(`${config.adminApi}/tasks/create`, values)
        .then((response) => response);
};

export const addCall = (values) => {
    return http
        .post(`${config.adminApi}/calls/create`, values)
        .then((response) => response);
};

export const addEmail = (values) => {
    return http
        .post(`${config.adminApi}/emails/create`, values)
        .then((response) => response);
};

export const addMeeting = (values) => {
    return http
        .post(`${config.adminApi}/meetings/create`, values)
        .then((response) => response);
};

export const addSms = (values) => {
    return http
        .post(`${config.adminApi}/text_messages/create`, values)
        .then((response) => response);
};

export const fetchActivities = ({pageSize, pageIndex}) => {
    return http
        .get(`${config.adminApi}/activities?page=${pageIndex + 1}&per_page=${pageSize}`)
        .then((response) => response);
};

export const fetchTaskEdit = ({id}) => {
    return http
        .get(`${config.adminApi}/tasks/edit/${id}`)
        .then((response) => response);
};

export const fetchCallEdit = ({id}) => {
    return http
        .get(`${config.adminApi}/calls/edit/${id}`)
        .then((response) => response);
};

export const fetchEmailEdit = ({id}) => {
    return http
        .get(`${config.adminApi}/emails/edit/${id}`)
        .then((response) => response);
};

export const fetchMeetingEdit = ({id}) => {
    return http
        .get(`${config.adminApi}/meetings/edit/${id}`)
        .then((response) => response);
};

export const fetchSmsEdit = ({id}) => {
    return http
        .get(`${config.adminApi}/text_messages/edit/${id}`)
        .then((response) => response);
};

export const deleteActivity = ({id}) => {
    return http
        .get(`${config.adminApi}/activities/delete/${id}`)
        .then((response) => response);
};

// export const getPersonalPostsList = () => {
//     return http
//         .get(`${config.mainApi}/real-state/personal_ads`)
//         .then((response) => response);
// };
//
// export const getExpertsList = () => {
//     return http
//         .get(`${config.mainApi}/real-state/experts-list`)
//         .then((response) => response);
// };
// export const getExpertInfo = (expertId) => {
//     return http
//         .get(`${config.mainApi}/real-state/expert-info/${expertId}`)
//         .then((response) => response);
// };
//
// export const getEditExpert = (expertId) => {
//     return http
//         .get(`${config.mainApi}/real-state/edit-expert/${expertId}`)
//         .then((response) => response);
// };
//
// export const getAddExpert = () => {
//     return http
//         .get(`${config.mainApi}/real-state/add-expert`)
//         .then((response) => response);
// };
//
// export const postAddExpert = (values) => {
//     return http
//         .post(`${config.mainApi}/real-state/add-expert`, values)
//         .then((response) => response);
// };
//
// export const getSubscription = () => {
//     return http
//         .get(`${config.mainApi}/real-state/subscription`)
//         .then((response) => response);
// };
// export const postEditExpert = (expertId, values) => {
//
//     return http
//         .post(`${config.mainApi}/real-state/edit-expert/${expertId}`, values)
//         .then((response) => response);
// };
// export const getCustomPageSetting = () => {
//     return http
//         .get(`${config.mainApi}/real-state/custom-page-setting`)
//         .then((response) => response);
// };
// export const saveCustomPageSetting = (values) => {
//     return http
//         .post(`${config.mainApi}/real-state/custom-page-setting`, values)
//         .then((response) => response);
// };
//
// export const deleteExpert = (expertId) => {
//     return http
//         .delete(`${config.mainApi}/real-state/delete-expert/${expertId}`)
//         .then((response) => response);
// };
//
// export const getAgencyPlans = (purchase) => {
//     console.log(purchase);
//     return http
//         .get(`${config.mainApi}/real-state/plans/${purchase}`)
//         .then((response) => response);
// };
// export const getPersonalPlans = (purchase) => {
//     console.log(purchase);
//     return http
//         .get(`${config.mainApi}/real-state/personal-plans/${purchase}`)
//         .then((response) => response);
// };
//
//
// export const postFavoritesArray = (favoritesArray) => {
//     return http
//         .post(`${config.mainApi}/add-to-favorite`, favoritesArray)
//         .then((response) => response);
// };
// export const getBuyAgencyPlans = (radioSelected) => {
//     return http
//         .post(`${config.mainApi}/real-state/buy-agency-plan/${radioSelected}`)
//         .then((response) => response);
// };
// export const getBuyPersonalPlans = (radioSelected) => {
//     return http
//         .post(`${config.mainApi}/real-state/buy-personal-plan/${radioSelected}`)
//         .then((response) => response);
// };
//
// export const getMyBookMark = () => {
//     return http
//         .get(`${config.mainApi}/my-favorites`)
//         .then((response) => response);
// }
// export const getMyPosts = () => {
//     return http
//         .get(`${config.mainApi}/my-ads`)
//         .then((response) => response);
// }
// export const getMorePost = (nextLink) => {
//     return http
//         .get(`${config.mainApi}/my-ads`)
//         .then((response) => response);
// }
// export const getRecentSeen = (items) => {
//     return http
//         .get(`${config.mainApi}/shared-adds/${items}`)
//         .then((response) => response);
// }
//
// export const getCitis = () => {
//     return http
//         .get(`${config.mainApi}/location/cities`)
//         .then((response) => response);
// }
//
// export const postRealStateFormData = (formData) => {
//     return http
//         .post(`${config.mainApi}/real-state/preregister`, formData)
//         .then((response) => response);
// };
// export const citiesPost = (cityCode) => {
//     return http
//         .get(`${config.mainApi}/advertisements?cities=${cityCode}`)
//         .then((response) => response);
// };
