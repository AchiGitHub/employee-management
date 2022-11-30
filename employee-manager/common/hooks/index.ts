import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, ApplicationState } from "../../app/store";

// Use throughout the app instead of `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;