module.exports = (templateData) => {
  //   console.log(templateData);

  // decontructure page data by section
  const { project, about, ...header } = templateData;

  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name = "viewport" content="width=device-width, initial-scale = 1.0">
        <meta http-equiv="X-UA-Compatible content = "ie=edge">
        <title>Portfolio Demo </title>
        <link rel = "stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-seconday bg-dark py-2 px-3">
                    <nav class="flex-row">
                        <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
                          header.github
                        }"> 
                            GitHUB
                        </a>
                    </nav> 
                </h1>
            </div>
        </header>
        <main class="container my-5">
            <footer class="container text-center py-3">
                <h3 class="text-dark"> &copy; ${new Date().getFullYear()}by ${
    header.name
  }

                </h3>
            </footer>
        </main>
    </body>

    </html>
    `;
};
