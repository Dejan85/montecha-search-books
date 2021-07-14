import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Label, Button, SubContainer } from "src/ui";
import { FormValue } from "./types";
import { useGenerateQueryString } from "src/hooks";
import { useHistory } from "react-router-dom";
import { Logo } from "src/ui";

const SearchPage: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<FormValue>();
  const history = useHistory();
  const { getQuery } = useGenerateQueryString();

  interface searchTypes {
    search: string;
  }

  const onSubmit = ({ search }: searchTypes): void => {
    const queryString = getQuery(search);
    history.push(`/${queryString}`);
  };

  return (
    <SubContainer
      justifyContent="space-between"
      flexDirection="row"
      width="100%"
      backgroundColor="inherit"
      alignItems="center"
      padding="30px 0"
    >
      <Logo />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="search"
          register={{ ...register("search") }}
        />
        <Button width="100%" type="submit">
          Search
        </Button>
      </Form>
    </SubContainer>
  );
};

export default SearchPage;
