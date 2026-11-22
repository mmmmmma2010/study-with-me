#!/usr/bin/env python3
"""
set_password.py — Update the Study With Me login credentials in scripts/auth.js.

Usage:
    python3 scripts/set_password.py
"""
import getpass
import hashlib
import re
from pathlib import Path

AUTH_FILE = Path(__file__).resolve().parent / "auth.js"


def main():
    username = input("Enter new username: ").strip()
    if not username:
        raise SystemExit("Username cannot be empty.")

    password = getpass.getpass("Enter new password: ")
    confirm = getpass.getpass("Confirm password: ")
    if not password or password != confirm:
        raise SystemExit("Passwords do not match or are empty.")

    digest = hashlib.sha256(f"{username}:{password}".encode("utf-8")).hexdigest()
    content = AUTH_FILE.read_text(encoding="utf-8")
    updated, count = re.subn(
        r'const EXPECTED_HASH = "[a-f0-9]{64}";',
        f'const EXPECTED_HASH = "{digest}";',
        content,
    )
    if count != 1:
        raise SystemExit("Could not locate EXPECTED_HASH in scripts/auth.js")

    AUTH_FILE.write_text(updated, encoding="utf-8")
    print("Updated credentials hash in scripts/auth.js successfully.")


if __name__ == "__main__":
    main()
