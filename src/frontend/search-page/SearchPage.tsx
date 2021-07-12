import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Label, Button } from "src/ui";
import { FormValue } from "./types";

const SearchPage: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  interface searchTypes {
    search: string;
  }

  const onSubmit = ({ search }: searchTypes): void => {
    console.log("test", search);
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
