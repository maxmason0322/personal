import * as Form from "@radix-ui/react-form";
import styled, { css } from "styled-components";
import textStyles from "../styles/text";
import { ReactComponent as ArrowSVG } from "../icons/arrow.svg";
import { ReactComponent as PlaneSVG } from "../icons/plane.svg";
import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { colors } from "../styles/colors";

export default function ContactForm() {
  const [successfulSubmission, setSuccessfulSubmission] = useState(false);
  const submitContentRef = useRef(null)

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

  const slideUp = () => {
    gsap.to(submitContentRef.current, {
      yPercent: -60,
      duration: 1,
      ease: "power2.inOut",
    })
  }

  const slideDown = () => {
    gsap.to(submitContentRef.current, {
      yPercent: 0,
      duration: 1,
      ease: "power2.inOut",
    })
  }

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
              <Message match="valueMissing">Please enter an email</Message>
              <Message match="typeMismatch">Please enter a valid email</Message>
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
              <Message match="valueMissing">Please include a message</Message>
              <Form.Control asChild>
                <TextArea placeholder="Write a message" required />
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <Submit>
                <SubmitContent ref={submitContentRef} onMouseEnter={slideUp} onMouseLeave={slideDown}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Arrow />
                  Send Email
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Arrow />
                  Send Email
                </div>
                </SubmitContent>
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
  color: ${colors.white};
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
  color: ${colors.white};
`;

const Message = styled(Form.Message)`
  position: absolute;
  right: 24px;
  padding-top: 12px;
  color: ${colors.red};
  ${textStyles.message};
  letter-spacing: 0.3px;
`;

const inputProperties = css`
  position: relative;
  ${textStyles.body2};
  width: 100%;
  border: none;
  border-bottom: 1px solid ${colors.white};
  background: transparent;
  caret-color: ${colors.white};
  color: white;

  &::placeholder {
    color: ${colors.white};
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid white;
    caret-color: white;

    &::placeholder {
      color: white;
    }
  }
`;

const Input = styled.input`
  ${inputProperties};
  padding: 8px 0;
`;

const TextArea = styled.textarea`
  ${inputProperties};
  padding: 8px 0 16px 0;
  resize: none;
`;

const Submit = styled.button`
  position: absolute;
  bottom: 24px;
  right: 24px;
  ${textStyles.body2};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: transparent;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  border-radius: 30px;
  padding: 8px 18px 8px 10px;
  -webkit-transition: all 0.5s linear;
  transition: all 0.5s linear;
  height: 45px;

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

const SubmitContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Arrow = styled(ArrowSVG)`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  transition: fill 0.3s linear;

  path {
    fill: ${colors.white};
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
    fill: ${colors.white};
  }
`;
