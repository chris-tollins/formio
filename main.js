window.onload = function() {
  Formio.createForm(
    document.getElementById("formio"),
    "https://njcrwmbyfaaqryy.form.io/inovainc"
  ).then((form) => {
    form.on("change", (changed) => {
      console.log(changed.data)
      	const nav = document.querySelector(".formio-wizard-nav-container");
      if (changed.data.newClient === "Get a Quote") {
        nav.classList.add("hidden")
      } else {
      	nav.classList.remove("hidden")
      }
    });

    form.on("nextPage", ({
      page,
      submission
    }) => {

      const submitButton = document.querySelector(
        ".btn.btn-primary.btn-wizard-nav-submit"
      );
      if (submitButton && page>1) {
        if (page + 1 === form.pages.length) {
          submitButton.classList.add("visible")
        }
      }

    });
    form.on("prevPage", ({
      page,
      submission
    }) => {});
    form.on("submit", (submission) => {
      $("#myModal").modal("show");
    });
  });
};
