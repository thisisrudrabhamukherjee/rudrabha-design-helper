# Verifying a copy

These instructions confirm that a copy of Rudrabha Mukherjee's Design Helper is unmodified.

## Published fingerprint (version 3.10.3)

| File | Bytes | SHA-256 |
|---|---|---|
| `Rudrabha-Mukherjee-Design-Helper_v3.10.3.html` | 245168 | `bc05ea51f5b58f8576724ba7154917d6b4157640b7f38e7c25a584a284b3106a` |

The same bytes are served as `index.html` at the repository root and at the live address.

The fingerprint verifies the HTML file. An installed copy is held by the browser where it cannot be hashed directly â€” to verify, download the file again from `releases/` or from the live address and check that.

## Commands

Linux or macOS:

```bash
shasum -a 256 Rudrabha-Mukherjee-Design-Helper_v3.10.3.html
```

Windows PowerShell:

```powershell
Get-FileHash Rudrabha-Mukherjee-Design-Helper_v3.10.3.html -Algorithm SHA256
```

The output must match the hash above exactly. The file must end with a single newline character.

## Inside the app

The Publisher screen shows the application's own fingerprint. Compare what you see there with the hash published here.

## If the values differ

Your copy has been changed. Do not treat it as the published release. Download again from this repository's `releases/` folder or from a trusted save you made yourself from the official address, and check the hash again.
