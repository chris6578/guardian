# JSON Web Tokens (JWT)

[[toc]]

## JWT 101
JSON Web Tokens are described in the [RFC7519](https://tools.ietf.org/html/rfc7519).

> JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.
> The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

Guardian is dealing with **signed JWT** commonly called **JWS**.

JWS are particularly suitable when we want to transfer unencrypted but cryptographically unalterable data.
For example, it can be a user id that we want to authenticate.
Since the data are unalterable, when the user come back with JWT, we can simply verify the token signature.

The JWS consists of three distinct parts.

| Name      | Description                                                                          |
|-----------|--------------------------------------------------------------------------------------|
| Header    | Metadata about the JWS, such as the used algorithm.                                  |
| Payload   | The actual piece of information held by the token.                                   |
| Signature | Unique string generated from a secret key that ensures the integrity of the payload. |


## Examples
### User authentication
Consider an application where the users are identified by their ids.
The user table might look like this:

| id | username | password  (hashed) |
|----|----------|--------------------|
|  1 | mathieu  | $tr0gha$h          |
|  2 | valentin | 1lov€k8s           |
|  3 | dimitri  | 1mor$ay$           |

If you want to use the JWTs, you will probably want to put the user id into the token payload, which allows you to simply check to token integrity and get the user id.

JWT payloads are key-value piece of data called **claims**.
The standard claims are described in the [RFC7519, Section 4.1](https://tools.ietf.org/html/rfc7519#section-4.1).

In this example, we will put the user id inside the `sub` claim, as recommended by the [RFC7519, Section 4.1.2](https://tools.ietf.org/html/rfc7519#section-4.1.2):

> #### 4.1.2.  "sub" (Subject) Claim
> The "sub" (subject) claim identifies the principal that is the subject of the JWT.

This an example of an unserialized JWT:
#### Header
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```
#### Payload
```
{
  "sub": "1"
}
```
#### Signature, using the key `guardian`
```
f9GAvQZnFohqZk2JOTRFEeGizsKNcPzKB8om521EHZ8
```

The signature, using the application JWT key, ensures that the `sub` claim cannot be modified by an attacker.
The token can now be serialized using the following algorithm:

```
base64url(header) || "." || base64url(payload) || "." || signature
```

where `header` and `payload` are the JSON representations string of the header and the payload, and `||` the concatenation operator.

Serializing the previous token gives the following result:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIn0.f9GAvQZnFohqZk2JOTRFEeGizsKNcPzKB8om521EHZ8
```

You can check the validity of this token on the [jwt.io's debugger](https://jwt.io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIn0.f9GAvQZnFohqZk2JOTRFEeGizsKNcPzKB8om521EHZ8).
