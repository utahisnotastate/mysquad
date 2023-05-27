export const updateFriend = (friends, friend) => {
    const index = friends.findIndex((item) => item.handle === friend.handle)
    friends[index] = friend
    return friends
}