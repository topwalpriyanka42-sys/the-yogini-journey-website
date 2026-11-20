# The Yogini Journey

The official website for The Yogini Journey, a free yoga, pranayama and wellness app. The site uses plain HTML, CSS and JavaScript.

## Run the site on your computer

1. On the repository page, select **Code → Download ZIP** and extract it, or clone the repository with Git.
2. Open a terminal in the extracted folder. Run `python3 -m http.server 8000` if you have Python installed. On Windows, use `py -m http.server 8000` if needed.
3. Open `http://localhost:8000` in your browser. Press **Ctrl+C** in the terminal to stop the server. You can also open `index.html` directly to view the page.

## Publish with GitHub Pages

1. Review and merge the website pull request into **main**.
2. Open the **website** repository on GitHub. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Under **Branch**, choose **main** and **/ (root)**. Select **Save**.
5. Wait for the Pages deployment to finish. Check the **Actions** tab for the deployment status. Return to **Settings → Pages** and select **Visit site** when it appears.
6. Open the published site on a phone and desktop. Try the navigation, expand a breathing practice, and check that the Android app button starts the expected APK download.

The default address is `https://topwalpriyanka42-sys.github.io/the-yogini-journey-website/`. If **Pages** or the **Save** button is unavailable, verify that you have repository admin access and that the repository visibility is supported by your GitHub plan.

## Update the website

- Edit `index.html` to update the text, sections or APK address.
- Edit `styles.css` for layouts and colors. `script.js` controls the mobile menu.
- The hero image and favicon are in `assets/`. The hero uses generated imagery.
- Website feedback goes through GitHub Issues for this repository. Enable **Issues** under **Settings → General → Features** if it is disabled.
- When you merge website updates into **main**, GitHub Pages redeploys automatically. The Android app release is managed separately.
