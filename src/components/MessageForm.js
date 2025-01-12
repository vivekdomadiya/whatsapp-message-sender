import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { parsePhoneNumberFromString } from "libphonenumber-js";

function MessageForm() {
  const [phoneNumber, setPhoneNumber] = useState("+91 ");
  const [isValidPhoneNumer, setIsValidPhoneNumer] = useState(true);
  const [message, setMessage] = useState("");

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberObj = parsePhoneNumberFromString(phoneNumber, "IN");
    const isValid = phoneNumberObj && phoneNumberObj.isValid();
    setIsValidPhoneNumer(isValid);
    return isValid ? phoneNumberObj : null;
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/[^\d+.\-\s()]/g, "");
    setPhoneNumber(value);
    if (!isValidPhoneNumer) validatePhoneNumber(value);
  };

  const handlePhoneNumberBlur = () => {
    validatePhoneNumber(phoneNumber);
  };

  const handleSend = () => {
    const phoneNumberObj = validatePhoneNumber(phoneNumber);
    if (!phoneNumberObj) return;

    const e164PhoneNumber = phoneNumberObj.format("E.164");
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${e164PhoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleClear = () => {
    setPhoneNumber("+91 ");
    setIsValidPhoneNumer(true);
  };

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <TextField
            style={{ flex: 1 }}
            type="tel"
            label="Phone Number"
            placeholder="+91 82xxxxxxxx"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            onBlur={handlePhoneNumberBlur}
            slotProps={{ input: { maxLength: 20 } }}
            error={!isValidPhoneNumer}
            helperText={!isValidPhoneNumer ? "Invalid phone number" : ""}
            required
          />
          <TextField
            fullWidth
            label="Message (optional)"
            multiline
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              id="send"
              onClick={handleSend}
              disabled={!isValidPhoneNumer}
            >
              Send
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              id="clear"
              onClick={handleClear}
            >
              Clear
            </Button>
          </Stack>
          <Typography variant="h5">About</Typography>
          <Typography variant="body1">
            Send WhatsApp messages without saving the recipient's number. Enter
            the recipient's phone number and you'll be redirected to WhatsApp.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default MessageForm;
