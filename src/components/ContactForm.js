import * as Form from "@radix-ui/react-form";
import styled from "styled-components";
import textStyles from "../styles/text";
import { ReactComponent as ArrowSVG } from "../icons/arrow.svg";
import { ReactComponent as PlaneSVG } from "../icons/plane.svg";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import gsap from "gsap";

export default function ContactForm() {
  const [successfulSubmission, setSuccessfulSubmission] = useState(false);

  useEffect(() => {
    if (successfulSubmission) {
      gsap.to(Plane.toString(), {
        duration: 2,
        xPercent: 1600,
        yPercent: -500,
        rotate: 15,
        scale: 1,
        ease: "power1.inOut",
      });
    }
  }, [successfulSubmission]);

  return (
    <Wrapper>
      {!successfulSubmission && (
        <>
          <Title>Contact Me</Title>
          <Root
            onMouseDown={(e) => e.stopPropagation()}
            onSubmit={(e) => {
              e.preventDefault();

              emailjs
                .sendForm(
                  "personal_site_form",
                  "personal_site_form",
                  e.target,
                  {
                    publicKey: "d_DnP9TcKEKY90kF2",
                  }
                )
                .then(
                  (result) => {
                    console.log("Email sent successfully:", result.text);
                    e.target.reset();
                    setSuccessfulSubmission(true);
                  },
                  (error) => {
                    console.log("Failed to send email:", error.text);
                  }
                );
            }}
          >
            <Form.Field name="email">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <Message match="valueMissing">Please enter an email</Message>
                <Message match="typeMismatch">
                  Please enter a valid email
                </Message>
              </div>
              <Form.Control asChild>
                <Input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Field name="message">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <Message match="valueMissing">Please include a message</Message>
              </div>
              <Form.Control asChild>
                <TextArea placeholder="Write a message" required />
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <Submit>
                <Arrow />
                Send Email
              </Submit>
            </Form.Submit>
          </Root>
        </>
      )}
      {successfulSubmission && (
        <SuccessContent>
          <div>Thanks for reaching out!</div>
          <Plane />
          <div>I'll get back to you as soon as possible! 🚀</div>
        </SuccessContent>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  ${textStyles.body};
  padding: 24px 0 0 24px;
  color: rgba(255, 255, 255, 0.8);
`;

const Root = styled(Form.Root)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
`;

const SuccessContent = styled.div`
  padding: 24px;
  height: 100%;
  ${textStyles.body};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.8);
`;

const Message = styled(Form.Message)`
  position: absolute;
  right: 24px;
  padding-top: 12px;
  color: #ff1e56;
  ${textStyles.message};
  letter-spacing: 0.3px;
`;

const Input = styled.input`
  ${textStyles.body2};
  width: 100%;
  position: relative;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  background: transparent;
  padding: 8px 0;
  caret-color: rgba(255, 255, 255, 0.8);
  color: whitesmoke;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid whitesmoke;
    caret-color: whitesmoke;

    &::placeholder {
      color: whitesmoke;
    }
  }
`;

const TextArea = styled.textarea`
  position: relative;
  ${textStyles.body2};
  width: 100%;
  border: none;
  resize: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  background: transparent;
  padding: 8px 0 16px 0;
  color: whitesmoke;
  caret-color: rgba(255, 255, 255, 0.8);

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid whitesmoke;
    caret-color: whitesmoke;

    &::placeholder {
      color: whitesmoke;
    }
  }
`;

const Submit = styled.button`
  position: absolute;
  bottom: 24px;
  right: 24px;
  ${textStyles.body2};
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  padding: 8px 18px 8px 10px;
  -webkit-transition: all 0.5s linear;
  transition: all 0.5s linear;

  svg {
    padding-top: 4px;

    path {
      transition: all 0.5s linear;
    }
  }

  &:hover {
    cursor: pointer;
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.8))
      drop-shadow(0 0 4px rgba(255, 255, 255, 0.9))
      drop-shadow(0 0 12px rgba(255, 255, 255, 0.7))
      drop-shadow(0 0 25px rgba(200, 200, 200, 0.5));
  }
`;

const Arrow = styled(ArrowSVG)`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  transition: fill 0.3s linear;

  path {
    fill: rgba(255, 255, 255, 0.8);
  }
`;

const Plane = styled(PlaneSVG)`
  width: 57px;
  height: 57px;
  position: absolute;
  rotate: 45deg;
  bottom: 50px;
  left: -100px;

  path {
    fill: rgba(255, 255, 255, 0.8);
  }
`;
