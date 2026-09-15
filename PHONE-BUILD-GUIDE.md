# Mom's Pride — Phone-Only APK Build

This project is designed so you can build the APK without a PC, Android Studio, or local Android SDK.

## Recommended route: GitHub Actions

1. Create/sign in to a GitHub account.
2. Create a new repository, e.g. `moms-pride-billing`.
3. Upload ALL files from this project ZIP to the repository. Keep the `.github/workflows/build-apk.yml` file in exactly that location.
4. Open the repository on GitHub.
5. Open **Actions**.
6. Select **Build Mom's Pride APK**.
7. Tap **Run workflow**.
8. Wait for the workflow to finish.
9. Open the completed workflow run.
10. At the bottom, download the artifact named **Moms-Pride-debug-APK**.
11. Extract the downloaded artifact and install `app-debug.apk` on your Android phone.

## If GitHub does not show the workflow

Make sure this file exists in the repository exactly as:

`.github/workflows/build-apk.yml`

Then open the Actions tab again.

## What this build does

The cloud machine installs Node.js and Java, creates the Android project with Capacitor, syncs the web app, builds the APK, and uploads the APK as a downloadable artifact.

## Important

This is a debug APK for testing. For a Play Store/release APK, the project will later need a signing key and a release build configuration.

The current app still contains demo/local-storage behavior. Real TallyPrime synchronization, production OCR, multi-device database sync, authentication, backups, and production accounting logic should be added before using it for live business records.
