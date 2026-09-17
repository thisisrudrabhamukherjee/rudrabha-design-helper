# Cryptography notice

This distribution includes cryptographic software. The country in which you currently
reside may have restrictions on the import, possession, use, and/or re-export to another
country, of encryption software. Before using any encryption software, please check your
country's laws, regulations and policies concerning the import, possession, or use, and
re-export of encryption software, to see if this is permitted. See
<https://www.wassenaar.org/> for more information.

## What this application uses

The optional lock uses the browser's built-in Web Crypto API:

- AES-GCM-256 to scramble the saved record on the reader's own device
- PBKDF2-SHA256 to derive keys from a PIN (250,000 iterations) and from the answer to one recovery question (1,200,000 iterations)

No cryptographic code is implemented by the application itself. The browser supplies the algorithms.

The author should confirm any applicable export position with a qualified lawyer. This notice does not assert an export control classification, an ECCN, an exemption, or compliance with any particular country's export regime.
