import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Label, Button } from "src/ui";
import { FormValue } from "./types";
import { useGenerateQueryString } from "src/hooks";
import { useHistory } from "react-router-dom";

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="email">Search</Label>
      <Input type="text" register={{ ...register("search") }} />
      <Button width="100%" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchPage;
