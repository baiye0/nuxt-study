import { NuxtLink } from "#components";
//踩坑记录：对于tsx文件引入nuxt全局组件，需要import #components
//详细请见 nuxt、issues/13413

export default defineComponent({
  setup() {
    return () => (
      <div>
        home
        <div>
          <NuxtLink to="about">about</NuxtLink>
        </div>
      </div>
    );
  },
});
