import useAuthContext from "../context/AuthContext";

function Home() {
    const { user } = useAuthContext();

    return <div className="max-w-7xl mx-auto mt-12">{user?.name}</div>;
}
export default Home;
