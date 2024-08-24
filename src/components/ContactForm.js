import * as Form from "@radix-ui/react-form";
import styled from "styled-components";
import textStyles from "../styles/text";
import { colorPalette } from "../styles/colors";
import { ReactComponent as ArrowSVG } from "../icons/arrow.svg";

export default function ContactForm() {
  return (
    <Wrapper>
      <Title>Say Hi!</Title>
      <Root
        onMouseDown={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault();
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
            <Message match="typeMismatch">Please enter a valid email</Message>
          </div>
          <Form.Control asChild>
            <Input type="email" placeholder="Email" required />
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

const Label = styled(Form.Label)`
  ${textStyles.body};
  color: ${colorPalette.text.blue1};
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
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;

  svg {
    padding-top: 4px;

    path {
      transition: all 0.3s linear;
    }
  }

  &:hover {
    cursor: pointer;
    color: whitesmoke;
    border: 2px solid whitesmoke;

    svg {
      path {
        fill: whitesmoke;
      }
    }
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
