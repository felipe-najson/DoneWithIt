import Bugsnag from "@bugsnag/expo";

const log = (error) => Bugsnag.notify(error);

const start = () => Bugsnag.start("49d5e39e1317f2ca592ebfe39835239c");

export default { log, start };
