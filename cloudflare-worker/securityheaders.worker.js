const securityHeaders = {
		'Content-Security-Policy':
			"default-src 'none'; script-src 'self' 'unsafe-inline'; script-src-elem 'self' 'unsafe-inline' data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; connect-src 'self'; manifest-src 'self'; font-src https://fonts.gstatic.com 'self' data:; img-src 'self' data:; object-src 'none'; block-all-mixed-content; frame-ancestors 'none'; base-uri 'none'; form-action 'none'; report-to https://b7ca037389ec9bb8220abf11b8d6540c.report-uri.com/r/d/csp/enforce; report-uri https://b7ca037389ec9bb8220abf11b8d6540c.report-uri.com/r/d/csp/enforce;",
		'Access-Control-Allow-Origin': 'https://marcelmichau.dev',
		'X-Xss-Protection': '1; mode=block',
		'X-Frame-Options': 'DENY',
		'X-Content-Type-Options': 'nosniff',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
		'Expect-CT': `max-age=0, report-uri='https://b7ca037389ec9bb8220abf11b8d6540c.report-uri.com/r/d/ct/reportOnly'`,
		'Permissions-Policy':
			'camera=(), microphone=(), geolocation=(), accelerometer=(), gyroscope=(), autoplay=(), interest-cohort=()',
		'Cross-Origin-Embedder-Policy': 'require-corp',
		'Cross-Origin-Opener-Policy': 'same-origin',
		'Cross-Origin-Resource-Policy': 'same-origin',
	},
	sanitiseHeaders = {
		Server: '',
	},
	removeHeaders = ['Public-Key-Pins', 'X-Powered-By', 'X-AspNet-Version'];

async function addHeaders(req) {
	const response = await fetch(req),
		newHeaders = new Headers(response.headers),
		setHeaders = Object.assign({}, securityHeaders, sanitiseHeaders);

	if (
		newHeaders.has('Content-Type') &&
		!newHeaders.get('Content-Type').includes('text/html')
	) {
		return new Response(response.body, {
			status: response.status,
			statusText: response.statusText,
			headers: newHeaders,
		});
	}

	Object.keys(setHeaders).forEach((name) =>
		newHeaders.set(name, setHeaders[name])
	);

	removeHeaders.forEach((name) => newHeaders.delete(name));

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: newHeaders,
	});
}

addEventListener('fetch', (event) =>
	event.respondWith(addHeaders(event.request))
);
