import { createWrapper } from "next-redux-wrapper";
import createStore from "./store";

const wrapper = createWrapper(createStore);

export default wrapper;
