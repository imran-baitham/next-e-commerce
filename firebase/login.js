import { auth } from "../config/firebase";

export default function emailLogin({ email, password }) {
  auth.signInWithEmailAndPassword(email, password).then((res)=> console.log(res, "success loginn")).catch((err)=>console.log(err, "error wfhile login"))
  return auth.signInWithEmailAndPassword(email, password);
}
