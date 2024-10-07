// Amikor az oldal betöltődik, kérjünk adatokat az API-tól
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userInfo = `
                <img src="${user.picture.large}" alt="User Picture">
                <p><strong>Név:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Ország:</strong> ${user.location.country}</p>
                <p><strong>Email:</strong> ${user.email}</p>
            `;
            document.getElementById('randomUser').innerHTML = userInfo;
        })
        .catch(error => console.error('Error fetching data:', error));
});
