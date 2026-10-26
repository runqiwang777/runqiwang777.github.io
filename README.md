# Runqi Wang's Academic Homepage

Source for [runqiwang777.github.io](https://runqiwang777.github.io/). This site reconstructs Runqi Wang's earlier academic homepage from retained project history.

The original portrait, campus photograph, project figures, CV, and project repositories were not available during reconstruction. The page currently uses local vector placeholders for the images, and project titles remain plain text until their new repository URLs are provided.

## Local preview

From this directory, run:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

If Python is unavailable, use any static file server that serves this directory on port 8000.

## Edit the sections

Each visible section has one source file:

| Section | Markdown file |
| --- | --- |
| Home / About me | [contents/home.md](contents/home.md) |
| Publications | [contents/publications.md](contents/publications.md) |
| Projects | [contents/projects.md](contents/projects.md) |
| Experience | [contents/experience.md](contents/experience.md) |
| Awards | [contents/awards.md](contents/awards.md) |

Edit a file and refresh the page. The browser loads and renders the Markdown with the bundled `static/js/marked.min.js`; no build command is needed. The navigation, section titles, portrait, and footer are in `index.html`. Publications and Projects use HTML cards inside their Markdown files to preserve the existing layout; their text can be edited directly there. Preview through a local server as above, since opening `index.html` as a `file://` URL blocks Markdown loading in most browsers.

## Attribution

The former homepage was a derivative of [Sen Li's Academic Homepage Template](https://github.com/senli1073/academic-homepage-template). See [NOTICE.md](NOTICE.md). This reconstruction retains that attribution and uses the upstream copy of Marked for Markdown rendering.
