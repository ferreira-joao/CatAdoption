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
      <p>
        To ensure the well-being of adopted cats, we have some concerns and
        assumptions that guide the interview and the monitoring of the pet's
        adaptation. See below:
      </p>

      <ul style={{ paddingLeft: 20 }}>
        <li>The cat is always right.</li>
        <li>
          If the cat says you must leave the house and your belongs, you must
          obey.
        </li>
        <li>Owners cannot delay the cat's meal.</li>
        <li>
          The cat needs a lot of space. Leave the room if you feel the cat is
          annoyed with your presence.
        </li>
        <li>Baths only when the cat asks for it.</li>
        <li>
          If your house is small increase its size or move to a bigger one.
        </li>
        <li>Read the first item.</li>
      </ul>
    </Container>
  );
}
