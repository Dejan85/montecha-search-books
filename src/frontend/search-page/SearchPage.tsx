import React from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Label } from "src/ui";
import { FormValue } from "./types";

const SearchPage: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="email">Search</Label>
      <Input type="text" register={{ ...register("search") }} />
    </Form>
  );
};

export default SearchPage;
