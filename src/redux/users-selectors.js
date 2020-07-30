import { createSelector } from "reselect"


export const getUsersListSelector = (state) =>{
    return state.Users.users
}
export const getUsersList = createSelector(getUsersListSelector, (users) =>{return users.filter(u => true)})

export const getPageSize = (state) =>{
    return state.Users.pageSize
}
export const getTotalUsersCount = (state) =>{
    return state.Users.totalUsersCount
}
export const getCurrentPage = (state) =>{
    return state.Users.currentPage
}
export const getIsFetching = (state) =>{
    return state.Users.isFetching
}
export const getFollowingInProgress = (state) =>{
    return state.Users.followingInProgress
}
export const countSmthDifficult = (state) =>{
    return 
}
