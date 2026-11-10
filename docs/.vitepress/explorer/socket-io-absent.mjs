// Stands in for socket.io-client, which valu-api imports only on the socket
// path (connectValuServices with a URL). An embedded app never takes it, and
// the package treats a module with no `io` as "not installed".
export default undefined;
