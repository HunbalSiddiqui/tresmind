import MainLayout from "./layouts/MainLayout/MainLayout";
import HomeFeed from "./views/HomeFeed/HomeFeed";

const routes = () => [{
    path: '/',
    element: <MainLayout />,
    children: [
    { path: '/', element: <HomeFeed /> },
    ],
}]

export default routes;