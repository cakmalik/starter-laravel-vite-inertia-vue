import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h, ref } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

import { Head } from "@inertiajs/inertia-vue3";
import { Link } from "@inertiajs/inertia-vue3";

createInertiaApp({
    title: (title) => `${title} - sss`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Head", Head)
            .component("v-select", vSelect)
            .component("Link", Link)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

// https://larainfo.com/blogs/how-to-install-inertia-js-in-laravel-8-with-vue-3
