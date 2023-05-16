export function getItem(item) {
    return localStorage.getItem(item)
}

export function setItem(item, value) {
    localStorage.setItem(item, value);
}

export function isLoggedIn() {
    if (getItem("role")) return true;
    return false;
}

export function logIn(role) {
    setItem("role", role);
}

export function logOut() {
    localStorage.removeItem("role");
    localStorage.removeItem("accountId");
    localStorage.removeItem("accountName");
}


export function formatDate(dateTime, error){
    const date = new Date(dateTime);
    if (isNaN(date.getTime())) {
        return error;
    }
    const dayName = date.toLocaleString('ar-EG', { weekday: 'long' });
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${dayName}، ${day}/${month}/${year} ${hours}:${minutes}`;
}
