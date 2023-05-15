import React from "react";
import Spinner from "../components/layout/spinner";
import Wrapper from "../components/layout/wrapper";

type Props = {};

const Loading = (props: Props) => {
  return (
    <Wrapper>
      <div className="h-[80vh]">
        <Spinner />
      </div>
    </Wrapper>
  );
};

export default Loading;
