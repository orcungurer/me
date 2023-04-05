import { Fragment } from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/Layout/MainNavigation";
import PageContent from "../components/UI/PageContent";
import lost from "../assets/lost.svg";

const ErrorPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <PageContent title="Not Found">
        <img src={lost} alt="not found" />
        Lost your way?
        <Link to="/">Home</Link>
      </PageContent>
    </Fragment>
  );
};

export default ErrorPage;
