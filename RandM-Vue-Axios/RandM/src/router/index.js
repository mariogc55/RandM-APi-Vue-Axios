import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import VistaUser from "@/views/VistaUser.vue";
import CarsView from "@/views/CarsView.vue";
import VistaPersonal from "@/views/VistaPesonal.vue";
import CharacterList from "@/components/CharactersList.vue";
import CharacterDetail from "@/components/CharactersDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "vistauser",
        component: VistaUser,
      },
      {
        path: "/carsview",
        name: "carsview",
        component: CarsView,
      },
      {
        path: "/vistapersonal",
        name: "vistapersonal",
        component: VistaPersonal,
      },
      {
        path: "/characters",
        name: "CharacterList",
        component: CharacterList,
      },
      {
        path: "/characters/:id",
        name: "CharacterDetail",
        component: CharacterDetail,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;