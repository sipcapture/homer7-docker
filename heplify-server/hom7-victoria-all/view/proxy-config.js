var config = {
	debug: true,
        apiUrl: 'http://homer-webapp:80',
        apiSess: 'http://homer-webapp:80/api/v3/auth',
        apiAuthJWT: true,
        apiUser: 'admin',
        apiPass: 'sipcapture',
        timeOut: 1800, // seconds
        proxyHost: '0.0.0.0',
        proxyPort: 8765
};

module.exports = config;
