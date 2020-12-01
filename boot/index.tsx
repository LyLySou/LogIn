
import app from "./setup.store";
import stores from "../app/redux/Store/index.store";
export default function () {
	return app(stores);
}