import { Container } from "./styles";

export function AdoptionContentForm() {
  return (
    <Container>
      <p style={{ marginBottom: "10px" }}>
        If you like this cat and want to adopt it, send a email to{" "}
        <b>catadoption@email.com</b> or complete the form bellow:
      </p>

      <p>Name:</p>
      <input placeholder="Full name" required />

      <p>E-mail:</p>
      <input placeholder="E-mail" required />

      <p>Phone:</p>
      <input placeholder="Phone" required />

      <p>Tell us about you, your home and your family routine:</p>
      <textarea required />

      <button>SEND</button>
    </Container>
  );
}

export function AdoptionContentPolicies() {
  return (
    <Container>
      <p>2</p>
    </Container>
  );
}
