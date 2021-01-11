# Experimental Nuxt Module

## How it works

### Setting Nuxt config

Pass the ID and secret in the BCMS along with the entities array to generate endpoints depending on each entity.

```
{
    <!-- other options -->

    buildModules: ["~/modules/bcms/lib/module"],

    BCMS: {
        projectId: "123",
        projectSecret: "abc",
        entities: ["Blog", "Category", "Comment"]
    },

    <!-- other options -->
}
```

### Accessing \$bcms in components

With the help of plugin, bcms module with all the properties are injected into the component. Use $bcms in templates and this.$bcms in functional code.

```
export default {
  mounted() {
    console.log(this.$bcms.get);
    <!-- output: All entities available -->
    this.$bcms.get.Blog();
    <!-- output: Get blog -->
    this.$bcms.get.allBlog();
    <!-- output: Get all blog -->
  },
};
```
