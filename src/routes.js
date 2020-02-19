import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import MainDashboard from "./views/MainDashboard.vue";
import StudentDashboard from "./views/StudentDashboard.vue";
import LessonDashboard from "./views/LessonDashboard.vue";
import NotFound from "./components/NotFound.vue";

export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/admin",
    component: Admin
  },
  {
    path: "/maindashboard",
    component: MainDashboard
  },
  {
    path: "/studentdashboard",
    component: StudentDashboard
  },
  {
    path: "/lessondashboard",
    component: LessonDashboard
  },
  { path: "*", component: NotFound }
];
