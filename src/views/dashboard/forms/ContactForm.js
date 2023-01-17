import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

const ContactForm = () => {
  const userId = useSelector((state) => state.auth.user._id);
  const token = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return <Fragment></Fragment>;
};

export default ContactForm;