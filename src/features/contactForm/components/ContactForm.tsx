import React, { useState } from "react";
import TextInput from "../../../components/TextInput/TextInput";
import styles from "./ContactForm.module.css";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import Textarea from "../../../components/TextArea/Textarea";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Button from "../../../components/Button/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "General Enquiry",
    message: "",
    consent: false,
  });

  const handleChange = (name: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      queryType: "General Enquiry",
      message: "",
      consent: false,
    });
  };

  const isFormValid = (): boolean => {
    const { firstName, lastName, email, queryType, message, consent } =
      formData;
    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      queryType.trim() !== "" &&
      message.trim() !== "" &&
      consent
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.form__title}>Contact Us</h1>
      <div className={styles.form__subtwo}>
        <TextInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextInput
          label={"Last Name"}
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <TextInput
        label={"Email Address"}
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <RadioGroup
        label="Query Type"
        name="queryType"
        options={["General Enquiry", "Support Request"]}
        value={formData.queryType}
        onChange={handleChange}
      />

      <Textarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <Checkbox
        label="I consent to being contacted by the team"
        name="consent"
        checked={formData.consent}
        onChange={handleChange}
      />

      <Button type="submit" disabled={!isFormValid()}>
        Submit
      </Button>
    </form>
  );
}
