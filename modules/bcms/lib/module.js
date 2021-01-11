import { resolve } from "path";

export default function BcmsModule(moduleOptions) {
  const options = {
    ...moduleOptions,
    ...this.options.BCMS
  };

  if (!options.projectId || !options.projectSecret) {
    throw new Error(`[BCMS Module] URL & Key must be provided.`);
  }

  this.addPlugin({
    src: resolve(__dirname, "plugin.js"),
    fileName: "bcms.js",
    options
  });
}

// // REQUIRED if publishing the module as npm package
// module.exports.meta = require('../package.json')
