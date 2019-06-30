const ENV = "DEV";
const DEBUGGING = true;

const configs = {
  DEV: {
    env: "DEV",
    debugging: DEBUGGING,
    serverUrl: "http://"+ window.location.hostname +":8765/api/v3/"
  },
  UI: {
    availableTabs: ["messages", "flow", "qos", "logs", "export"]
  }
};

export default configs;
