import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <h1>Oops!!!!</h1>
      <h3>Something went wrong!!!</h3>
      <h4>{err.data}</h4>
    </div>
  );
};
export default Error;
