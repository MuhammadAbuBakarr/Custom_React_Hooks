import React, { useEffect, useState } from "react";
import axios from "axios";
export const useGetApi = (url, headers) => {
	const [data, setdata] = useState([]);
	const [error, seterror] = useState("");
	const [isLoading, setisLoading] = useState(false);
	/////////// Making Headers ////////////
	const header = () => {
		if (headers) return { headers: { ...headers } };
		if (!headers) return {};
	};
	///////////////////////////////
	useEffect(() => {
		(async () => {
			try {
				setisLoading(true);
				const { status, data } = await axios.get(url, header());
				if (status === 200) {
					setdata(data);
					seterror("");
					setisLoading(false);
				}
			} catch (e) {
				setdata();
				seterror(e.message);
				setisLoading(false);
			}
		})();
	}, [url]);
	///////////////// Returning Data, Error, Loading State
	return { data, error, isLoading };
};
export default useGetApi;
