export default (ctx, inject) => {
  // console.log("<%= options.projectId %>");
  // console.log("<%= options.projectSecret %>");
  const BCMS = function() {};

  const entities = "<%= options.entities %>".split(",");

  const getEntities = {};

  entities.forEach(entity => {
    Object.defineProperty(getEntities, entity, {
      value() {
        console.log(`Get ${entity}`);
      }
    });

    Object.defineProperty(getEntities, [`all${entity}`], {
      value() {
        console.log(`Get all ${entity}`);
      }
    });
  });

  BCMS.prototype.get = getEntities;

  const bcms = new BCMS();

  inject("bcms", bcms);
};
