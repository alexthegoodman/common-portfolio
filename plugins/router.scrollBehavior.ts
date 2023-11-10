// import { defineNuxtPlugin } from "#app";

// export default defineNuxtPlugin((nuxtApp: any) => {
//   nuxtApp.$router.options.scrollBehavior = async (to, from, savedPosition) => {
//     console.info("scrollBehavior", to, from, savedPosition);
//     if (savedPosition) {
//       return savedPosition;
//     }

//     const findEl = async (hash, x = 0) => {
//       return (
//         document.querySelector(hash) ||
//         new Promise((resolve) => {
//           if (x > 0) {
//             return resolve(document.querySelector("#app"));
//           }
//           setTimeout(() => {
//             resolve(findEl(hash, 1));
//           }, 300);
//         })
//       );
//     };

//     if (to.hash) {
//       const el = await findEl(to.hash);

//       if ("scrollBehavior" in document.documentElement.style) {
//         console.log("hash path hit scroll to");
//         return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
//       } else {
//         return window.scrollTo(0, el.offsetTop);
//       }
//     }
//     return { left: 0, top: 0, behaviour: "smooth" };
//   };
// });

export default defineNuxtPlugin(async function () {
  if (typeof window !== "undefined") {
    const router = useRouter();

    router.beforeEach((to) => {
      if (to.hash) {
        const targetElement = document.querySelector(to.hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
          const p: Promise<boolean> = new Promise((resolve) => {
            setTimeout(() => {
              resolve(true);
            }, 1000);
          });
          return p;
        }
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
