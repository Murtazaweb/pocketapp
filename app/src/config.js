export const production = false;

const domain = production ? "139.59.227.127" : "127.0.0.1:3001";
export const websocketUrl = `ws://${domain}`;
export const apiUrl = `http://${domain}`;
