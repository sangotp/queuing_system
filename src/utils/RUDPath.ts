import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { PathActionCreators } from "../state/action-creators";
import { reducerTypes } from "../state/reducers";

/* Read Current Path (URL) */
export const ReadPath = () => {
  const paths = useSelector((state: reducerTypes) => state.paths)
  return paths
}

/* Update Current Path (URL) */
export const UpdatePath = (path: string[]) => {
  const dispatch = useDispatch()
  const { Update, Delete } = bindActionCreators(PathActionCreators, dispatch)
  useEffect(() => {
    Update(path)
    // console.log(path)
    return () => {
      Delete()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])
  return path
}

export const DeletePath = (path: string[]) => {
  return path
}