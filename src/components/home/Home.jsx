import { useParams } from "react-router-dom";
import Header from "../nav/Navbar";
import Main from "../main/Main";
import Search from "../search/Search";
import Recipes from "../recipes/Recipes";

export default function Home() {
	let { id } = useParams();
	return (
		<>
			<Header />
			{!id && <Main />}
			<Search />
			<Recipes />
		</>
	);
}