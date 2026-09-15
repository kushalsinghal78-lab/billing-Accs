# Mom's Pride Billing — Phone-Friendly Android Build

Upload this repository to GitHub from your phone. The GitHub Actions workflow builds the Android APK in the cloud.

## Important

Keep `www/index.html`, `www/app.js`, and `www/styles.css` inside the `www` folder. Capacitor uses `www` as its web asset directory.

Do not upload an `android` folder. GitHub Actions creates it automatically.

## Build

1. Create a new GitHub repository.
2. Upload every file and folder from this project.
3. Open **Actions**.
4. Select **Build Mom's Pride APK**.
5. Tap **Run workflow**.
6. Open the completed run.
7. Download **Moms-Pride-debug-APK** from Artifacts.
8. Extract it and install `app-debug.apk` on Android.
