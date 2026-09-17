# Verifying a copy

These instructions confirm that a copy of Rudrabha Mukherjee's Design Helper is unmodified.

## Published fingerprint (version 3.9.0)

| File | Bytes | SHA-256 |
|---|---|---|
| `Rudrabha-Mukherjee-Design-Helper_v3.9.0.html` | 231034 | `81e6282850be35e8bc1a63bad79f14393869e1c4163e0153e428a17b42c179dc` |

The same bytes are served as `index.html` at the repository root and at the live address.

## Commands

Linux or macOS:

```bash
shasum -a 256 Rudrabha-Mukherjee-Design-Helper_v3.9.0.html
```

Windows PowerShell:

```powershell
Get-FileHash Rudrabha-Mukherjee-Design-Helper_v3.9.0.html -Algorithm SHA256
```

The output must match the hash above exactly. The file must end with a single newline character.

## Inside the app

The Publisher screen shows the application's own fingerprint. Compare what you see there with the hash published here and in the complete source package.

## If the values differ

Your copy has been changed. Do not treat it as the published release. Download again from this repository's `releases/` folder or from a trusted save you made yourself from the official address, and check the hash again.
