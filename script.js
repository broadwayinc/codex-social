async function requireLogin() {
    let u = await skapi.getProfile();
    if (!u) {
        location.href = 'login.html';
    }
    return u;
}

function logout() {
    skapi.logout().then(() => {
        location.href = 'login.html';
    });
}
