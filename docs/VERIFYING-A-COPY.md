# Verifying a copy

These instructions confirm that a copy of Rudrabha Mukherjee's Design Helper is unmodified.

## Published fingerprint (version 3.15.0)

| File | Bytes | SHA-256 |
|---|---|---|
| `Rudrabha-Mukherjee-Design-Helper_v3.15.0.html` | 280502 | `fd062434de6bda67f5110ecd0e50dc05971ceeacd8f09b796b54725b908f498e` |

The same bytes are served as `index.html` at the repository root and at the live address.

The fingerprint verifies the HTML file. An installed copy is held by the browser where it cannot be hashed directly — to verify, download the file again from `releases/` or from the live address and check that.

## Commands

Linux or macOS:

```bash
shasum -a 256 Rudrabha-Mukherjee-Design-Helper_v3.15.0.html
```

Windows PowerShell:

```powershell
Get-FileHash Rudrabha-Mukherjee-Design-Helper_v3.15.0.html -Algorithm SHA256
```

The output must match the hash above exactly. The file must end with a single newline character.

## Inside the app

The Publisher screen shows the application's own fingerprint. Compare what you see there with the hash published here.

## If the values differ

Your copy has been changed. Do not treat it as the published release. Download again from this repository's `releases/` folder or from a trusted save you made yourself from the official address, and check the hash again.
